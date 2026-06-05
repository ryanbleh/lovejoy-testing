// Run with: node fetch-boundaries.js
// Fetches all neighborhood boundaries from Overpass and saves as neighborhoods.geojson

const https = require('https');
const fs = require('fs');

const ALL_IDS = [
  // Inner NE
  7631277,7631288,7690255,7631283,7690266,7690265,7690268,7690267,
  // N & Farther NE
  7692294,7690254,7692296,7692295,7692257,7696490,7724052,7723900,
  // Central & Inner SE
  7707268,7699944,7699945,7696773,7701836,7697721,7706862,7631280,
  // Outer SE
  7714343,7714440,7714441,7709249,7709228,2676520,
  // Inner NW & Downtown
  7723945,7692258,7732442,7690369,
  // Suburbs
  186576,186596,423111,186641,237278,237272,
];

const BUTTON_DATA = {
  7631277: { name:'Irvington', desc:'One of Portland\'s most coveted inner-NE neighborhoods.' },
  7631288: { name:'Alameda', desc:'Ridge-top neighborhood with sweeping views and large lots.' },
  7690255: { name:'Beaumont-Wilshire', desc:'Walkable retail along Fremont, established tree canopy.' },
  7631283: { name:'Grant Park', desc:'Quiet, residential, and close to everything in inner NE.' },
  7690266: { name:'Hollywood', desc:'Transit-rich and walkable inner-NE character.' },
  7690265: { name:'Rose City Park', desc:'Classic Portland bungalows and mature trees.' },
  7690268: { name:'Laurelhurst', desc:'Curvilinear streets, the park, and sought-after homes.' },
  7690267: { name:'Sullivan\'s Gulch', desc:'Small, central, and underrated.' },
  7692294: { name:'Humboldt', desc:'Historic North Portland neighborhood with strong community.' },
  7690254: { name:'Concordia', desc:'Popular with buyers priced out of closer-in NE.' },
  7692296: { name:'Woodlawn', desc:'Active arts community and growing demand.' },
  7692295: { name:'Piedmont', desc:'Larger lots and consistent value.' },
  7692257: { name:'Overlook', desc:'Bluff-top views and walkable to Mississippi Ave.' },
  7696490: { name:'Kenton', desc:'N Portland\'s main street and vintage character.' },
  7724052: { name:'Saint Johns', desc:'A real neighborhood with its own downtown.' },
  7723900: { name:'University Park', desc:'Quiet, residential, close to UP.' },
  7707268: { name:'Richmond', desc:'Division St corridor — highly competitive.' },
  7699944: { name:'Sunnyside', desc:'Hawthorne corridor, tight inventory.' },
  7699945: { name:'Buckman', desc:'Inner SE\'s industrial-chic pocket.' },
  7696773: { name:'North Tabor', desc:'Just off the butte, quiet streets.' },
  7701836: { name:'Mt. Tabor', desc:'The park defines it — one of SE\'s most desirable.' },
  7697721: { name:'Montavilla', desc:'80th Ave strip, strong community, great value.' },
  7706862: { name:'Hosford-Abernethy', desc:'Clinton Street corridor, young buyers.' },
  7631280: { name:'Eliot', desc:'Close to Lloyd District, improving walkability.' },
  7714343: { name:'Woodstock', desc:'Village feel and one of SE\'s most stable neighborhoods.' },
  7714440: { name:'Sellwood-Moreland', desc:'Antique row, river access, coveted bungalows.' },
  7714441: { name:'Eastmoreland', desc:'Reed adjacency and a consistent top-5 market.' },
  7709249: { name:'Foster-Powell', desc:'Foster Ave corridor, improving fast.' },
  7709228: { name:'Brooklyn', desc:'Small, central, and underrated.' },
  2676520:  { name:'Lents', desc:'One of the most affordable entry points in the city.' },
  7723945: { name:'NW District', desc:'NW 23rd and 21st, walkable retail.' },
  7692258: { name:'Pearl District', desc:'New construction condos and galleries.' },
  7732442: { name:'Goose Hollow', desc:'Stadium adjacency and MAX access.' },
  7690369: { name:'Lloyd District', desc:'Convention Center and easy MAX access.' },
  186576:  { name:'Lake Oswego', desc:'Top schools, lake access, tight inventory.' },
  186596:  { name:'West Linn', desc:'Strong schools and larger lots.' },
  423111:  { name:'Beaverton', desc:'Tech corridor and best metro value per sqft.' },
  186641:  { name:'Hillsboro', desc:'Intel proximity and newer construction.' },
  237278:  { name:'Vancouver, WA', desc:'No OR income tax and growing fast.' },
  237272:  { name:'Camas, WA', desc:'Top schools and Columbia Gorge views.' },
};

const query = `[out:json][timeout:90];
(
${ALL_IDS.map(id => `relation(${id});`).join('\n')}
);
out geom;`;

function post(body) {
  return new Promise((resolve, reject) => {
    const data = Buffer.from(body);
    const req = https.request({
      hostname: 'overpass-api.de',
      path: '/api/interpreter',
      method: 'POST',
      headers: { 'Content-Type': 'text/plain', 'Content-Length': data.length },
    }, res => {
      let raw = '';
      res.on('data', c => raw += c);
      res.on('end', () => resolve(raw));
    });
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

function joinRings(segments) {
  const polys = [], used = new Set();
  segments.forEach((seg, i) => {
    if (used.has(i)) return;
    used.add(i);
    let ring = [...seg], changed = true;
    while (changed) {
      changed = false;
      segments.forEach((s, j) => {
        if (used.has(j)) return;
        const re = ring[ring.length - 1];
        if (s[0][0] === re[0] && s[0][1] === re[1]) { ring = ring.concat(s.slice(1)); used.add(j); changed = true; }
        else if (s[s.length-1][0] === re[0] && s[s.length-1][1] === re[1]) { ring = ring.concat([...s].reverse().slice(1)); used.add(j); changed = true; }
      });
    }
    if (ring[0][0] !== ring[ring.length-1][0] || ring[0][1] !== ring[ring.length-1][1]) ring.push(ring[0]);
    if (ring.length >= 4) polys.push(ring);
  });
  return polys;
}

(async () => {
  console.log(`Fetching ${ALL_IDS.length} boundaries from Overpass...`);
  const raw = await post(query);
  const data = JSON.parse(raw);
  console.log(`Got ${data.elements.length} elements`);

  const features = [];
  data.elements.forEach(el => {
    if (el.type !== 'relation') return;
    const meta = BUTTON_DATA[el.id] || { name: el.tags?.name, desc: '' };
    const rings = { outer: [], inner: [] };
    (el.members || []).forEach(m => {
      if (m.type === 'way' && m.geometry?.length > 1) {
        rings[m.role === 'inner' ? 'inner' : 'outer'].push(m.geometry.map(p => [p.lon, p.lat]));
      }
    });
    const outerPolys = joinRings(rings.outer);
    const innerPolys = joinRings(rings.inner);
    if (!outerPolys.length) return;
    const coords = outerPolys.map(o => [o, ...innerPolys]);
    features.push({
      type: 'Feature',
      properties: { osm_id: el.id, name: meta.name, desc: meta.desc },
      geometry: coords.length === 1
        ? { type: 'Polygon', coordinates: coords[0] }
        : { type: 'MultiPolygon', coordinates: coords.map(c => [c]) },
    });
    console.log(`  ✓ ${meta.name}`);
  });

  const geojson = { type: 'FeatureCollection', features };
  fs.writeFileSync('./neighborhoods.geojson', JSON.stringify(geojson));
  console.log(`\nSaved ${features.length} neighborhoods to neighborhoods.geojson`);
})();
