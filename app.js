const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.main-nav');
const dropdownItems = document.querySelectorAll('.has-dropdown');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
});

function closeAll() {
  dropdownItems.forEach(el => el.classList.remove('open'));
}

dropdownItems.forEach(item => {
  // Desktop: mouse hover
  item.addEventListener('mouseenter', () => {
    if (window.innerWidth > 900) {
      closeAll();
      item.classList.add('open');
    }
  });

  item.addEventListener('mouseleave', () => {
    if (window.innerWidth > 900) {
      item.classList.remove('open');
    }
  });

  // Mobile: click toggle
  item.querySelector('a').addEventListener('click', e => {
    if (window.innerWidth <= 900) {
      e.preventDefault();
      const isOpen = item.classList.contains('open');
      closeAll();
      if (!isOpen) item.classList.add('open');
    }
  });
});

// Close dropdowns when clicking outside
document.addEventListener('click', e => {
  if (!e.target.closest('.has-dropdown')) closeAll();
});

// ─── Neighborhood sidebar search ─────────────────
const nbhdSearch = document.getElementById('nbhd-search');
const nbhdClear  = document.getElementById('nbhd-search-clear');

if (nbhdSearch) {
  nbhdSearch.addEventListener('input', () => {
    const q = nbhdSearch.value.trim().toLowerCase();
    nbhdClear.classList.toggle('visible', q.length > 0);

    document.querySelectorAll('.nbhd-group').forEach(group => {
      let anyVisible = false;
      group.querySelectorAll('.nbhd-btn').forEach(btn => {
        const match = !q || btn.dataset.name.toLowerCase().includes(q);
        btn.classList.toggle('nbhd-hidden', !match);
        if (match) anyVisible = true;
      });
      group.classList.toggle('nbhd-hidden', !anyVisible);
    });
  });

  nbhdClear.addEventListener('click', () => {
    nbhdSearch.value = '';
    nbhdSearch.dispatchEvent(new Event('input'));
    nbhdSearch.focus();
  });
}

// ─── Contact Modal ───────────────────────────────
const modal = document.getElementById('contact-modal');
const modalClose = document.getElementById('modal-close');

function openModal() {
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

// Triggers: nav Contact Us link + any btn with data-modal or matching text
document.querySelectorAll('a, button').forEach(el => {
  const text = el.textContent.trim().toLowerCase();
  if (
    text === 'contact us' ||
    text === 'talk to the team' ||
    text === 'talk to charles' ||
    text === 'start the conversation' ||
    el.dataset.modal === 'contact'
  ) {
    el.addEventListener('click', e => { e.preventDefault(); openModal(); });
  }
});

modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// Form submit (placeholder)
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  const terms = e.target.querySelector('[name="terms"]');
  if (!terms.checked) {
    terms.closest('.modal-checkbox-label').style.outline = '2px solid #c0392b';
    return;
  }
  const btn = e.target.querySelector('.modal-submit');
  btn.textContent = 'Message Sent';
  btn.disabled = true;
  btn.style.opacity = '0.7';
});

// ─── Neighborhood Data ───────────────────────────
// osm_id (positive) → { desc, market }
// market keys match the screenshot format — plug in real data per neighborhood
const NEIGHBORHOOD_DATA = {
  // Inner NE
  7631277: { desc: "One of inner NE's most consistently sought-after neighborhoods — Craftsman homes, strong schools, and deep-rooted demand." },
  7631288: { desc: "Ridge-top neighborhood with sweeping city views, large lots, and some of the most architecturally distinctive homes in Portland." },
  7690255: { desc: "Walkable to Fremont St's retail corridor, mature tree canopy, and strong resale driven by sustained inner NE demand." },
  7631283: { desc: "Quiet inner NE neighborhood anchored by the park — consistent demand and limited inventory keep values strong." },
  7690266: { desc: "Strong transit access, walkable retail, and consistent demand from buyers who want NE character at a lower price than Irvington." },
  7690265: { desc: "Classic Portland bungalows, mature canopy, and a neighborhood feel that keeps inner NE buyers coming back." },
  7690268: { desc: "Curvilinear streets around the park, architectural character, and among Portland's most competitive inner east side markets." },
  7690267: { desc: "Small, central, and underrated — connecting Lloyd District to Laurelhurst at a price point that still makes sense." },
  // N & Farther NE
  7692294: { desc: "Historic North Portland neighborhood anchored by Mississippi Ave — strong community identity and steady appreciation." },
  7690254: { desc: "One of NE Portland's most active markets — buyers priced out of closer-in neighborhoods find strong value and community here." },
  7692296: { desc: "One of North Portland's most active and community-driven neighborhoods — improving values and a strong local business scene." },
  7692295: { desc: "Larger lots, consistent values, and often overlooked by buyers who haven't done their homework on North Portland." },
  7692257: { desc: "Bluff-top views of the Willamette, walkable to Mississippi Ave, and one of North Portland's most desirable addresses." },
  7696490: { desc: "North Portland's commercial center — vintage character on Denver Ave, improving values, and a loyal buyer community." },
  7724052: { desc: "A real neighborhood with its own downtown, bridge views, an active arts scene, and rising demand from buyers who want authenticity." },
  7723900: { desc: "Quiet residential neighborhood adjacent to University of Portland — consistent family-driven demand and stable long-term values." },
  // Central & Inner SE
  7707268: { desc: "Division St corridor — one of inner SE's most competitive markets, driven by walkability, density, and tight inventory." },
  7699944: { desc: "Hawthorne corridor, tight inventory, and a loyal buyer pool that has kept prices consistently strong for years." },
  7699945: { desc: "Inner SE's industrial-chic pocket adjacent to Hawthorne — popular with buyers who prioritize density and walkability." },
  7696773: { desc: "Just off the butte, quiet streets, and easy access to both inner NE and SE. Undervalued relative to immediate neighbors." },
  7701836: { desc: "The park defines it — one of SE Portland's most desirable addresses with consistent demand and volcanic butte access." },
  7697721: { desc: "One of inner SE's strongest community neighborhoods — 80th Ave retail, walkability, and excellent value per square foot." },
  7706862: { desc: "Clinton St corridor, young buyer demographic, and a dense mix of bungalows and newer infill on SE's most active commercial street." },
  7631280: { desc: "North of Lloyd District and improving rapidly — a neighborhood in transition with real upside as the inner east side continues to develop." },
  // Outer SE
  7714343: { desc: "Village feel on Woodstock Blvd — one of SE Portland's most stable long-term neighborhoods with loyal, consistent demand." },
  7714440: { desc: "Antique row, Willamette River access, and some of Portland's most coveted bungalows — consistently competitive market." },
  7714441: { desc: "Reed College adjacency, golf course, large lots, and a consistent top-tier market in the city year over year." },
  7709249: { desc: "Foster Ave corridor improving steadily — one of SE's best entry-level bets with strong community and growing amenities." },
  7709228: { desc: "Small, central SE neighborhood often overlooked — which makes it one of the better value plays close to the inner east side." },
  2676520:  { desc: "SE Portland's most affordable entry point with the largest land area — significant upside as the Foster corridor continues to improve." },
  // Inner NW & Downtown
  7723945: { desc: "NW 23rd and 21st corridors — some of Portland's most walkable real estate with strong attached housing demand." },
  7692258: { desc: "Portland's premier urban neighborhood — new construction condos, galleries, and strong long-term rental and resale demand." },
  7732442: { desc: "Stadium District adjacency, MAX light rail access, and a mix of condos and historic single-family housing stock." },
  7690369: { desc: "East side's urban core — ongoing development shifting it from office-heavy to a genuine mixed-use residential neighborhood." },
  7692256: { desc: "Historic Mississippi Ave neighborhood with strong community identity and steady appreciation as buyers prioritize walkability." },
  7706861: { desc: "Portland's urban core — condos, strong transit access, and a buyer pool driven primarily by lifestyle priorities over square footage." },
  // North Portland
  7696489: { desc: "Quiet residential pocket in North Portland with improving walkability and values tracking closely with neighboring Kenton." },
  7724028: { desc: "Quiet North Portland neighborhood between University Park and St. Johns — residential, affordable, and improving steadily." },
  7726245: { desc: "Small North Portland neighborhood near the Willamette — limited inventory, niche buyer pool, and river adjacency." },
  7726246: { desc: "Named for the iconic St. Johns Bridge — a North Portland neighborhood with character, river views, and improving values." },
  7696491: { desc: "Far North Portland near the airport — industrial adjacency keeps prices accessible, with a niche residential market." },
  7699893: { desc: "Hayden Island on the Columbia — waterfront living, limited inventory, and easy bridge access to Vancouver." },
  7699894: { desc: "Small Columbia River neighborhood — niche market with waterfront access and a self-selecting buyer pool." },
  7692380: { desc: "Far North Portland industrial-residential neighborhood — very limited inventory and primarily niche demand." },
  7692425: { desc: "Small North Portland neighborhood near the Columbia Slough — affordable, limited inventory, industrial adjacency." },
  7631278: { desc: "Inner NE between Irvington and Concordia — high demand, low inventory, and consistent appreciation year over year." },
  7631279: { desc: "Small inner NE neighborhood adjacent to Mississippi Ave — improving rapidly and attracting buyers watching North Portland's trajectory." },
  // SW Portland
  7739176: { desc: "West Hills with city and mountain views, privacy, and a buyer pool that accepts longer commutes for the setting." },
  7759127: { desc: "SW Portland's most remote residential pocket — rural feel within city limits, limited inventory, and a self-selecting buyer pool." },
  7748556: { desc: "Elevated SW neighborhood with sweeping views and private character — limited inventory and a dedicated buyer pool." },
  7748594: { desc: "SW Portland neighborhood with walkable retail at Hillsdale, good schools, and a solid track record with families." },
  7732422: { desc: "West Hills neighborhood adjacent to NW District — steep terrain, wooded character, and buyers who prioritize privacy and views." },
  7748710: { desc: "Established SW neighborhood with good schools, quiet streets, and consistent family demand." },
  7751363: { desc: "Established SW neighborhood with a village-like retail node at Hayhurst, good schools, and consistent family demand." },
  7751798: { desc: "SW Portland's village neighborhood — walkable retail on Capitol Hwy, strong schools, and a community feel that drives consistent demand." },
  7751799: { desc: "Tucked-away SW neighborhood near Gabriel Park — residential, affordable for SW, and popular with families." },
  7753621: { desc: "Small SW neighborhood near Burlingame — residential, affordable relative to the area, and adjacent to Multnomah Village." },
  7755930: { desc: "SW neighborhood with a suburban feel, larger lots, and straightforward commute access to Beaverton and downtown Portland." },
  7757574: { desc: "Tucked-away SW neighborhood near Multnomah Village — quiet, residential, and popular with buyers who want SW proximity to amenities." },
  7757951: { desc: "SW neighborhood near Multnomah Village with affordable homes, larger lots, and strong family demand." },
  7757952: { desc: "Far SW with suburban character, limited amenities nearby, and a buyer pool that prioritizes privacy and lot size." },
  7759127: { desc: "SW Portland's most remote residential pocket — rural feel within city limits, limited inventory, and a self-selecting buyer pool." },
  7759863: { desc: "Quiet, wooded SW neighborhood near Tryon Creek — appeals to buyers who want proximity to nature without leaving city limits." },
  7759864: { desc: "SW neighborhood adjacent to Tryon Creek State Natural Area — forested, private, and close to Lake Oswego." },
  7759869: { desc: "One of SW Portland's most secluded neighborhoods — heavily wooded, quiet, and far from the urban core." },
  7747425: { desc: "Small SW neighborhood near OHSU — niche market with proximity to the medical campus driving consistent demand." },
  7709227: { desc: "Compact neighborhood between downtown and South Park Blocks — transit access and primarily condo-heavy housing stock." },
  7732409: { desc: "Mostly parkland with limited residential — one of the largest urban forests in the country, defining West Hills character." },
  7732441: { desc: "Wooded West Hills neighborhood with privacy, views, and close proximity to the NW District below." },
  7732493: { desc: "West Hills neighborhood with privacy and wooded character — close to Nike and Intel campuses via US-26." },
  7732939: { desc: "Upper West Hills neighborhood with sweeping views, limited inventory, and a buyer pool that values seclusion over convenience." },
  7704242: { desc: "SE neighborhood just south of the butte with affordable homes and easy access to Division St's growing amenities." },
  // Suburbs & outer areas
  186576:  { desc: "Top-rated schools, lake access, and a consistently tight inventory that supports strong long-term values." },
  186596:  { desc: "Quieter than Lake Oswego with similarly strong schools, larger lots, and a loyal move-up buyer pool." },
  423111:  { desc: "Oregon's tech corridor — Intel proximity, diverse housing stock, and some of the strongest value per square foot in the metro." },
  186641:  { desc: "Intel campus proximity, newer construction, and appreciation driven by sustained tech sector employment growth." },
  237278:  { desc: "No Oregon income tax, lower home prices, and direct bridge access to Portland — growing faster than most of the metro." },
  237272:  { desc: "Top-rated schools, Columbia River Gorge views, and a small-town feel that keeps demand consistently strong." },
  186225:  { desc: "Small city within the Tualatin Valley — quiet, suburban, and well-positioned between Tigard and Lake Oswego." },
  186274:  { desc: "East Portland's largest city — affordable entry points, growing infrastructure, and strong demand from buyers moving east." },
  186713:  { desc: "Small eastern suburb with affordable housing, Columbia River access, and strong demand from buyers moving east from Portland." },
  186715:  { desc: "Eastern Gateway city at the foot of the Columbia River Gorge — affordable housing and outdoor recreation access." },
  186273:  { desc: "Small eastern suburb near Troutdale — affordable and growing as buyers move east along the I-84 corridor." },
  186582:  { desc: "Inner suburb with a historic downtown, Willamette River access, and improving values as buyers move south from Portland." },
  12801382:{ desc: "Primarily industrial area along the river — limited residential but a key part of Portland's Northwest economic corridor." },
  // Additional NE
  7692211: { desc: "Historic core adjacent to the Pearl — improving market with significant upside as downtown reinvestment continues." },
  7696926: { desc: "Quiet outer NE neighborhood with affordable single-family homes and easy access to the Gateway area." },
  7697064: { desc: "Outer NE neighborhood near the airport with affordable single-family homes and strong Blue Line MAX access." },
  7697718: { desc: "Adjacent to Parkrose with slightly more residential character and consistent demand from first-time buyers." },
  7697719: { desc: "Small outer NE neighborhood adjacent to Parkrose — residential, affordable, and improving steadily." },
  7697720: { desc: "Outer SE neighborhood near the Gateway area — affordable and increasingly connected to the broader Portland market." },
  7702001: { desc: "Far NE neighborhood with larger lots and single-family homes popular with buyers seeking more space at lower prices." },
  7702042: { desc: "Small outer NE neighborhood — affordable, residential, and close to the airport corridor employment base." },
  7702043: { desc: "Outer NE with affordable single-family homes, I-205 access, and a buyer pool that values space over proximity." },
  7702393: { desc: "Outer NE neighborhood with affordable single-family homes and easy access to I-205." },
  7702410: { desc: "Outer SE neighborhood with affordable single-family homes and straightforward freeway access to Portland and Gresham." },
  7709251: { desc: "Large outer SE neighborhood with one of Portland's most diverse populations and affordable entry-level homes." },
  7711187: { desc: "Outer SE neighborhood with rural character on the eastern edge of Portland — affordable, spacious, and close to Pleasant Valley Park." },
  7714326: { desc: "Outer SE with affordable bungalows, easy access to the Mt. Scott area, and improving values as the corridor develops." },
  7714342: { desc: "SE neighborhood anchored by Reed College — consistent academic-driven demand and steady long-term appreciation." },
  7714506: { desc: "Small SE neighborhood at the Milwaukie border — affordable, residential, and adjacent to stronger markets." },
  7720080: { desc: "Affordable SE with larger lots and improving infrastructure as the outer SE corridor continues to develop." },
  6549433: { desc: "NE Portland neighborhood with good value relative to closer-in neighbors — improving steadily as the market moves northeast." },
  6549638: { desc: "One of Portland's most diverse neighborhoods and an increasingly popular entry point for buyers in outer NE." },
};

function updateInfoBox(osmId, name, desc) {
  const el = id => document.getElementById(id);
  if (el('nbhd-info-name')) el('nbhd-info-name').textContent = name;
  const data = NEIGHBORHOOD_DATA[parseInt(osmId)];
  const displayDesc = data?.desc || desc || '';
  if (el('nbhd-info-desc')) el('nbhd-info-desc').textContent = displayDesc;

  // Market data — populate if available, otherwise show em-dash
  const m = data?.market;
  const set = (id, val) => { if (el(id)) el(id).textContent = val || '—'; };
  const setYoY = (id, val) => {
    if (!el(id)) return;
    if (!val) { el(id).textContent = '—'; el(id).className = 'nbhd-stat-val'; return; }
    const up = val.startsWith('▲');
    const down = val.startsWith('▼');
    el(id).textContent = val;
    el(id).className = 'nbhd-stat-val ' + (up ? 'nbhd-stat-up' : down ? 'nbhd-stat-down' : '');
  };
  set('ns-sold',      m?.sold);
  set('ns-range',     m?.range);
  set('ns-median',    m?.median);
  set('ns-ppsf',      m?.ppsf);
  set('ns-dom',       m?.dom);
  set('ns-stl',       m?.stl);
  setYoY('ns-yoy-median', m?.yoyMedian);
  setYoY('ns-yoy-ppsf',   m?.yoyPpsf);
  setYoY('ns-yoy-dom',    m?.yoyDom);
  set('ns-active',    m?.active);
  set('ns-list',      m?.list);
  set('ns-reduced',   m?.reduced);
  set('ns-reduction', m?.reduction);

  // Update "Full Neighborhood Guide" link
  const guideLink = document.querySelector('.nbhd-guide-link');
  if (guideLink && name) {
    guideLink.href = `neighborhood.html?n=${encodeURIComponent(name)}`;
  }
}

// ─── Neighborhood Map + OSM Boundaries ──────────
document.addEventListener('DOMContentLoaded', () => {
  const mapEl = document.getElementById('neighborhoods-map');
  if (!mapEl || typeof L === 'undefined') return;

  const map = L.map('neighborhoods-map', {
    center: [45.52, -122.65],
    zoom: 12,
    zoomControl: true,
    scrollWheelZoom: false,
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    maxZoom: 18,
  }).addTo(map);

  const infoName = document.getElementById('nbhd-info-name');
  const infoDesc = document.getElementById('nbhd-info-desc');
  const nbhdBtns = document.querySelectorAll('.nbhd-btn');

  const styleDefault = {
    color: '#296886', weight: 1.5, opacity: 0.5,
    fillColor: '#296886', fillOpacity: 0,
  };
  const styleHover = {
    color: '#296886', weight: 2, opacity: 0.8,
    fillColor: '#296886', fillOpacity: 0.1,
  };
  const styleActive = {
    color: '#296886', weight: 3, opacity: 1,
    fillColor: '#296886', fillOpacity: 0.2,
  };

  // id → { layer, btn }
  const layerMap = {};
  let activeId = null;

  function setActive(osmId) {
    // Reset old
    if (activeId && layerMap[activeId]) {
      layerMap[activeId].layer.setStyle(styleDefault);
      layerMap[activeId].layer.bringToBack();
    }
    activeId = osmId;
    if (layerMap[osmId]) {
      layerMap[osmId].layer.setStyle(styleActive);
      layerMap[osmId].layer.bringToFront();
      // Sync sidebar
      nbhdBtns.forEach(b => b.classList.remove('active'));
      if (layerMap[osmId].btn) layerMap[osmId].btn.classList.add('active');
    }
  }

  function handleBtnClick(btn) {
    const firstId = (btn.dataset.osmIds || '').split(',')[0].trim();
    const name = btn.dataset.name;
    const desc = btn.dataset.desc;
    updateInfoBox(firstId, name, desc);
    if (firstId && layerMap[firstId]) {
      setActive(firstId);
      map.fitBounds(layerMap[firstId].layer.getBounds(), { padding: [24, 24], maxZoom: 15 });
    }
  }

  nbhdBtns.forEach(btn => btn.addEventListener('click', () => handleBtnClick(btn)));

  // Collect all unique IDs across all buttons
  const allIds = [];
  const idToBtn = {};
  nbhdBtns.forEach(btn => {
    (btn.dataset.osmIds || '').split(',').forEach(id => {
      const trimmed = id.trim();
      if (trimmed && !allIds.includes(trimmed)) {
        allIds.push(trimmed);
        idToBtn[trimmed] = btn; // map id to its button
      }
    });
  });

  function renderFromGeoJSON(geojson) {
    geojson.features.forEach(feature => {
      const rawId = feature.properties.osm_id;
      const osmId = String(Math.abs(parseInt(rawId)));
      const btn   = idToBtn[osmId]; // may be undefined for non-sidebar areas
      const name  = btn?.dataset.name  || feature.properties.name    || '';
      const desc  = btn?.dataset.desc  || feature.properties.name_en || '';

      const layer = L.geoJSON(feature, {
        style: styleDefault,
        onEachFeature(f, l) {
          l.on('click', () => {
            updateInfoBox(osmId, name, desc);
            nbhdBtns.forEach(b => b.classList.remove('active'));
            if (btn) btn.classList.add('active');
            setActive(osmId);
          });
          l.on('mouseover', () => { if (osmId !== activeId) l.setStyle(styleHover); });
          l.on('mouseout',  () => { if (osmId !== activeId) l.setStyle(styleDefault); });
        },
      }).addTo(map);
      layerMap[osmId] = { layer, btn };
    });
    activateFirst();
  }

  function activateFirst() {
    // Fit map to show ALL boundaries first
    const allLayers = Object.values(layerMap).map(e => e.layer);
    if (allLayers.length) {
      const group = L.featureGroup(allLayers);
      map.fitBounds(group.getBounds(), { padding: [16, 16], maxZoom: 13 });
    }
    // Then highlight the active button's neighborhood
    const firstBtn = document.querySelector('.nbhd-btn.active');
    if (firstBtn) {
      const firstId = (firstBtn.dataset.osmIds || '').split(',')[0].trim();
      if (firstId && layerMap[firstId]) setActive(firstId);
    }
  }

  async function loadAllBoundaries() {
    try {
      const res = await fetch('./neighborhoods.geojson');
      if (!res.ok) return;
      const geojson = await res.json();
      if (geojson.features?.length) renderFromGeoJSON(geojson);
    } catch (e) {
      console.warn('Could not load neighborhoods.geojson', e);
    }
  }

  loadAllBoundaries();
});

