// ══════════════════════════════════════════════
// NEIGHBORHOOD PAGE DATA
// Edit NEIGHBORHOOD below to configure any neighborhood.
// Alternatively, pass ?n=NeighborhoodName in the URL.
// ══════════════════════════════════════════════

const NEIGHBORHOODS = {
  "Irvington": {
    osmId:       7631277,
    city:        "Northeast Portland",
    zip:         "97212",
    established: "Est. 1880s",
    tagline:     "One of inner NE's most consistently sought-after neighborhoods — Craftsman homes, strong schools, and deep-rooted demand.",
    description: [
      "Irvington is one of Portland's most architecturally rich inner-NE neighborhoods. Named for Washington Irving, the area developed in the early 20th century and has retained much of its original character — wide streets, mature tree canopy, and a dense collection of Craftsman bungalows, Colonial Revivals, and Foursquares.",
      "Demand here has been consistent for decades. Buyers don't come to Irvington looking for a deal — they come because of what it is: walkable, established, and close to everything inner NE has to offer without the density of the Pearl or the noise of Alberta. The schools, the park, and the housing stock keep it competitive.",
      "Inventory is typically tight. When a well-maintained home hits the market here, it moves quickly."
    ],
    scores: { walk: 85, bike: 92, transit: 67 },
    schools: [
      { name: "Irvington Elementary",         grades: "K–5",  district: "Portland Public Schools", rating: 8 },
      { name: "Harriet Tubman Middle School",  grades: "6–8",  district: "Portland Public Schools", rating: 6 },
      { name: "Grant High School",             grades: "9–12", district: "Portland Public Schools", rating: 7 },
    ],
    nearby: ["Alameda","Beaumont-Wilshire","Sabin","Hollywood","Sullivan's Gulch","Lloyd District","Grant Park"],
    market: {
      sold: "340",         range: "$227K – $1.10M",
      median: "$525,000",  ppsf: "$322",
      dom: "19 days",      stl: "100.0%",
      yoyMedian: "▼ 0.9%", yoyPpsf: "▼ 2.3%", yoyDom: "▲ 35.7%",
      active: "86",        list: "$499,000",
      reduced: "51%",      reduction: "6.7% off original",
      updated: "Updated June 2, 2026 · Source: RMLS",
    },

    // ── Local amenities ──────────────────────────
    amenities: {
      parks: [
        { name: "Grant Park",          detail: "12-acre neighborhood park, tennis courts, playground" },
        { name: "Irvington Park",      detail: "Multi-use fields, basketball, community center" },
        { name: "Irving Park",         detail: "3-acre green space on NE 7th" },
      ],
      grocery: [
        { name: "New Seasons Market",  detail: "NE 33rd Ave · Local Pacific NW grocer" },
        { name: "Fred Meyer",          detail: "NE Broadway · Full-service grocery & pharmacy" },
        { name: "Trader Joe's",        detail: "NE Broadway · 0.8 mi" },
      ],
      coffee: [
        { name: "Coava Coffee",        detail: "NE 13th Ave · Specialty roaster in a converted knitwear factory" },
        { name: "Water Avenue Coffee", detail: "NE Broadway location" },
        { name: "Stumptown Coffee",    detail: "Multiple nearby locations" },
      ],
      transit: [
        { name: "TriMet Line 9",       detail: "Powell Blvd · Frequent bus service to downtown" },
        { name: "TriMet Line 6",       detail: "MLK Jr Blvd · N–S corridor" },
        { name: "TriMet Line 24",      detail: "Fremont St · Cross-town" },
        { name: "MAX Blue/Red Line",   detail: "Rose Quarter TC · 0.8 mi · Direct to airport & downtown" },
      ],
    },

    // ── Community photos ─────────────────────────
    // Add URLs to show in the right column carousel
    photos: [
      // { url: "https://...", caption: "NE Brazee St in autumn" },
    ],

    // ── Property listings ───────────────────────
    // status: "active" | "pending" | "sold" | "reduced"
    listings: [
      {
        lat: 45.541297, lng: -122.651670,
        price: "$549,000",
        address: "1847 NE Brazee St",
        beds: 3, baths: 2, sqft: 1640,
        ppsf: "$335/sqft",
        status: "active",
        dom: "4 days",
        mls: "24123456",
        photo: null,
      },
      {
        lat: 45.545041, lng: -122.655520,
        price: "$724,000",
        address: "2204 NE Thompson St",
        beds: 4, baths: 3, sqft: 2210,
        ppsf: "$328/sqft",
        status: "active",
        dom: "8 days",
        mls: "24123457",
        photo: null,
      },
      {
        lat: 45.538801, lng: -122.642570,
        price: "$489,000",
        address: "3012 NE Knott St",
        beds: 3, baths: 1, sqft: 1320,
        ppsf: "$371/sqft",
        status: "reduced",
        dom: "22 days",
        mls: "24123458",
        photo: null,
        originalPrice: "$519,000",
      },
      {
        lat: 45.542674, lng: -122.644384,
        price: "$612,500",
        address: "1504 NE Stanton St",
        beds: 3, baths: 2, sqft: 1880,
        ppsf: "$326/sqft",
        status: "pending",
        dom: "6 days",
        mls: "24123459",
        photo: null,
      },
    ],
  },
  // ── Add more neighborhoods here ──────────────
  // "Alameda": { osmId: 7631288, city: "Northeast Portland", ... },
};

// ─── Resolve which neighborhood to show ──────
const params = new URLSearchParams(window.location.search);
const nbhdName = params.get('n') || Object.keys(NEIGHBORHOODS)[0];
const N = NEIGHBORHOODS[nbhdName] || NEIGHBORHOODS[Object.keys(NEIGHBORHOODS)[0]];

// ─── Populate page ────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Breadcrumb + title
  document.title = `${N.name || nbhdName} Neighborhood Guide — Lovejoy Real Estate`;
  setText('bc-name',       nbhdName);
  setText('h-city',        N.city || '');
  setText('h-name',        nbhdName);
  setText('h-tagline',     N.tagline || '');
  setText('desc-name',     nbhdName);
  setText('listings-name', nbhdName);
  setText('cta-nbhd-name', nbhdName);
  setText('sc-established',N.established || '');
  setText('sc-zip',        N.zip || '');
  const modalNbhd = document.getElementById('modal-nbhd-name');
  if (modalNbhd) modalNbhd.textContent = nbhdName;
  const aiNbhd = document.querySelector('.ai-nbhd-name');
  if (aiNbhd) aiNbhd.textContent = nbhdName;

  // Description
  const descEl = document.getElementById('h-description');
  if (descEl && N.description?.length) {
    descEl.innerHTML = N.description.map(p => `<p>${p}</p>`).join('');
  }

  // Walk/Bike/Transit scores
  if (N.scores) {
    setScore('sc-walk',    N.scores.walk,    walkLabel(N.scores.walk));
    setScore('sc-bike',    N.scores.bike,    bikeLabel(N.scores.bike));
    setScore('sc-transit', N.scores.transit, transitLabel(N.scores.transit));
  }

  // Schools
  if (N.schools?.length) {
    const list = document.getElementById('schools-list');
    if (list) {
      list.innerHTML = N.schools.map(s => {
        const rClass = s.rating >= 8 ? 'high' : s.rating >= 6 ? 'mid' : 'low';
        const icon   = s.grades.startsWith('9') ? 'fa-graduation-cap' : 'fa-school';
        const iconBg = s.grades.startsWith('9') ? 'school-icon--high' : '';
        return `
          <div class="school-item">
            <div class="school-icon ${iconBg}"><i class="fas ${icon}"></i></div>
            <div class="school-info">
              <strong>${s.name}</strong>
              <span>${s.grades} · ${s.district}</span>
            </div>
            <div class="school-rating school-rating--${rClass}">${s.rating}/10</div>
          </div>`;
      }).join('');
    }
  }

  // Nearby chips
  if (N.nearby?.length) {
    const chips = document.getElementById('nearby-chips');
    if (chips) {
      chips.innerHTML = N.nearby.map(n =>
        `<a href="?n=${encodeURIComponent(n)}" class="nearby-chip">${n}</a>`
      ).join('');
    }
  }

  // Market data
  if (N.market) {
    const m = N.market;
    setMarket('ms-sold',       m.sold);
    setMarket('ms-range',      m.range);
    setMarket('ms-median',     m.median);
    setMarket('ms-ppsf',       m.ppsf);
    setMarket('ms-dom',        m.dom);
    setMarket('ms-stl',        m.stl);
    setTrend('ms-yoy-median',  m.yoyMedian);
    setTrend('ms-yoy-ppsf',    m.yoyPpsf);
    setTrend('ms-yoy-dom',     m.yoyDom);
    setMarket('ms-active',     m.active);
    setMarket('ms-list',       m.list);
    setMarket('ms-reduced',    m.reduced);
    setMarket('ms-reduction',  m.reduction);
    if (m.updated) setText('market-updated', m.updated);
  }

  // Photo placeholder name
  document.querySelectorAll('.photo-nbhd-name').forEach(el => el.textContent = nbhdName);

  // District badge
  if (N.schools?.length) {
    const district = N.schools[0]?.district || '';
    const badge = document.getElementById('district-badge');
    const districtName = document.getElementById('district-name');
    if (badge && districtName && district) {
      districtName.textContent = district;
      badge.style.display = '';
    }
  }

  // Listings carousel
  renderListings();

  // Amenities
  renderAmenities();
  injectAmenitiesSchema();

  // Hero map
  initHeroMap();

  // AI chat
  initAIChat();

  // Modal
  initModal();
});

// ─── Listings Carousel Render ─────────────────
const IMG_CLASSES = ['listing-img--1','listing-img--2','listing-img--3'];
const STATUS_LABELS = {
  active:  { label: 'Active',       cls: '' },
  pending: { label: 'Pending',      cls: 'listing-badge--pending' },
  reduced: { label: 'Price Reduced',cls: 'listing-badge--reduced' },
  sold:    { label: 'Sold',         cls: 'listing-badge--sold' },
};

function renderListings() {
  const grid = document.getElementById('listings-grid');
  if (!grid) return;
  const listings = N.listings || [];

  if (!listings.length) {
    grid.innerHTML = `<div class="listing-card listing-card--cta">
      <div class="listing-cta-inner">
        <i class="fas fa-magnifying-glass"></i>
        <p>No listings data yet for ${nbhdName}. Add listings to <code>NEIGHBORHOODS["${nbhdName}"].listings</code>.</p>
      </div>
    </div>`;
    return;
  }

  grid.innerHTML = listings.map((l, i) => {
    const st = STATUS_LABELS[l.status] || STATUS_LABELS.active;
    const imgCls = IMG_CLASSES[i % IMG_CLASSES.length];
    const bgStyle = l.photo ? `style="background-image:url('${l.photo}')"` : '';
    const wasHtml = l.originalPrice ? `<span class="listing-was">${l.originalPrice}</span>` : '';
    return `
      <div class="listing-card">
        <div class="listing-img ${imgCls}" ${bgStyle}>
          <span class="listing-badge ${st.cls}">${st.label}</span>
        </div>
        <div class="listing-body">
          <div class="listing-price">${l.price} ${wasHtml}</div>
          <div class="listing-addr">${l.address}</div>
          <div class="listing-meta">
            <span><i class="fas fa-bed"></i> ${l.beds} bd</span>
            <span><i class="fas fa-bath"></i> ${l.baths} ba</span>
            <span><i class="fas fa-ruler-combined"></i> ${l.sqft?.toLocaleString()} sqft</span>
          </div>
          <div class="listing-ppsf">${l.ppsf} · ${l.dom} on market</div>
        </div>
      </div>`;
  }).join('');
}

// ─── Amenities ────────────────────────────────
const AMENITY_CATS = [
  { key: 'parks',   label: 'Parks',          icon: 'fa-tree' },
  { key: 'grocery', label: 'Grocery',        icon: 'fa-basket-shopping' },
  { key: 'coffee',  label: 'Coffee',         icon: 'fa-mug-hot' },
  { key: 'transit', label: 'Transit',        icon: 'fa-bus' },
];

function renderAmenities() {
  const grid = document.getElementById('amenities-grid');
  const a    = N.amenities;
  if (!grid || !a) return;

  grid.innerHTML = AMENITY_CATS.map(cat => {
    const items = a[cat.key] || [];
    if (!items.length) return '';
    return `
      <div class="amenity-col">
        <div class="amenity-col-header">
          <i class="fas ${cat.icon}"></i>
          <span>${cat.label}</span>
        </div>
        <ul class="amenity-list">
          ${items.map(item => `
            <li class="amenity-item">
              <strong>${item.name}</strong>
              <span>${item.detail}</span>
            </li>`).join('')}
        </ul>
      </div>`;
  }).join('');
}

function injectAmenitiesSchema() {
  const a = N.amenities;
  if (!a) return;

  let pos = 1;
  const items = AMENITY_CATS.flatMap(cat =>
    (a[cat.key] || []).map(item => ({
      '@type':    'ListItem',
      position:   pos++,
      name:       item.name,
      description: item.detail,
    }))
  );

  const schema = {
    '@context':       'https://schema.org',
    '@type':          'ItemList',
    name:             `Local Amenities in ${nbhdName}, Portland`,
    description:      `Parks, grocery stores, coffee shops, and transit near ${nbhdName} in Portland, Oregon.`,
    numberOfItems:    items.length,
    itemListElement:  items,
  };

  const tag = document.createElement('script');
  tag.type = 'application/ld+json';
  tag.textContent = JSON.stringify(schema, null, 2);
  document.head.appendChild(tag);
}

// ─── Hero map — loads from local GeoJSON ─────────
async function initHeroMap() {
  const el = document.getElementById('nbhd-hero-map');
  if (!el || !N.osmId || typeof L === 'undefined') return;

  const map = L.map(el, {
    zoomControl: true,
    scrollWheelZoom: false,
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    maxZoom: 18,
  }).addTo(map);

  try {
    const res = await fetch('./neighborhoods.geojson');
    const gj  = await res.json();

    // All boundaries — light context layer
    L.geoJSON(gj, {
      style: {
        color: '#296886', weight: 1, opacity: 0.3,
        fillColor: '#296886', fillOpacity: 0,
      },
      interactive: false,
    }).addTo(map);

    // Active neighborhood — highlighted
    const target = gj.features.find(f => Math.abs(parseInt(f.properties.osm_id)) === N.osmId);
    if (!target) return;

    const active = L.geoJSON(target, {
      style: {
        color: '#296886', weight: 3, opacity: 1,
        fillColor: '#296886', fillOpacity: 0.15,
      },
      interactive: false,
    }).addTo(map);

    map.fitBounds(active.getBounds(), { padding: [24, 24], maxZoom: 14 });

  } catch (e) {
    console.warn('Could not load neighborhoods.geojson', e);
  }

  // Render property listings
  if (N.listings?.length) renderListingMarkers(map);
}

// ─── Listing marker colors by status ─────────
const STATUS_STYLE = {
  active:  { bg: '#296886', text: '#fff', label: 'Active' },
  pending: { bg: '#e67e22', text: '#fff', label: 'Pending' },
  reduced: { bg: '#c0392b', text: '#fff', label: 'Reduced' },
  sold:    { bg: '#555',    text: '#fff', label: 'Sold' },
};

function renderListingMarkers(map) {
  (N.listings || []).forEach(listing => {
    const s = STATUS_STYLE[listing.status] || STATUS_STYLE.active;

    // Price label marker
    const icon = L.divIcon({
      className: '',
      html: `
        <div class="listing-marker" style="background:${s.bg};color:${s.text}">
          ${listing.price}
          <div class="listing-marker-tip" style="border-top-color:${s.bg}"></div>
        </div>`,
      iconSize: [null, null],
      iconAnchor: [0, 36],
      popupAnchor: [40, -36],
    });

    const marker = L.marker([listing.lat, listing.lng], { icon }).addTo(map);

    // Popup
    const reducedLine = listing.originalPrice
      ? `<div class="lp-was">Was ${listing.originalPrice}</div>` : '';

    marker.bindPopup(`
      <div class="listing-popup">
        <div class="lp-status" style="background:${s.bg}">${s.label}</div>
        <div class="lp-price">${listing.price}</div>
        ${reducedLine}
        <div class="lp-addr">${listing.address}</div>
        <div class="lp-meta">
          <span>🛏 ${listing.beds} bd</span>
          <span>🛁 ${listing.baths} ba</span>
          <span>📐 ${listing.sqft?.toLocaleString()} sqft</span>
        </div>
        <div class="lp-detail">${listing.ppsf} · ${listing.dom} on market</div>
        <div class="lp-mls">MLS# ${listing.mls}</div>
        <a href="#" class="lp-btn">View Listing</a>
      </div>
    `, { maxWidth: 220, className: 'listing-popup-wrap' });
  });
}

// ─── AI Chat (placeholder — wire to Claude API) ─
function initAIChat() {
  const input   = document.getElementById('ai-input');
  const send    = document.getElementById('ai-send');
  const window_ = document.getElementById('ai-chat-window');
  if (!input || !send || !window_) return;

  function addMsg(text, role) {
    const div = document.createElement('div');
    div.className = `ai-msg ai-msg--${role}`;
    div.innerHTML = `<div class="ai-msg-bubble">${text}</div>`;
    window_.appendChild(div);
    window_.scrollTop = window_.scrollHeight;
  }

  function handleSend() {
    const q = input.value.trim();
    if (!q) return;
    addMsg(q, 'user');
    input.value = '';

    // Placeholder response — replace with Claude API call
    setTimeout(() => {
      addMsg(`I can help with that. To get real-time answers about ${nbhdName}, connect this chat to the Claude API using the neighborhood context data. Until then, reach out directly — <strong>503-501-2490</strong> or <a href="mailto:clientcare@lovejoyrealestate.com">clientcare@lovejoyrealestate.com</a>.`, 'agent');
    }, 600);
  }

  send.addEventListener('click', handleSend);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') handleSend(); });
}

// ─── Modal ────────────────────────────────────
function initModal() {
  const modal = document.getElementById('contact-modal');
  const close = document.getElementById('modal-close');
  if (!modal || !close) return;

  document.querySelectorAll('[data-modal="contact"]').forEach(el => {
    el.addEventListener('click', e => { e.preventDefault(); modal.classList.add('open'); document.body.style.overflow='hidden'; });
  });
  close.addEventListener('click', () => { modal.classList.remove('open'); document.body.style.overflow=''; });
  modal.addEventListener('click', e => { if(e.target===modal) { modal.classList.remove('open'); document.body.style.overflow=''; } });
  document.addEventListener('keydown', e => { if(e.key==='Escape') { modal.classList.remove('open'); document.body.style.overflow=''; } });
}

// ─── Helpers ──────────────────────────────────
function setText(id, val) { const el = document.getElementById(id); if (el && val) el.textContent = val; }

function setMarket(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val || '—';
}

function setTrend(id, val) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = val || '—';
  if (!val) return;
  el.classList.remove('trend-up','trend-down','trend-pos');
  if (val.startsWith('▼')) el.classList.add('trend-down');
  else if (val.startsWith('▲')) el.classList.add('trend-up');
}

function setScore(id, score, label) {
  const circle = document.getElementById(id);
  const labelEl = document.getElementById(id + '-label');
  if (circle) {
    circle.textContent = score ?? '—';
    const hue = score >= 90 ? '#27ae60' : score >= 70 ? '#296886' : score >= 50 ? '#e67e22' : '#c0392b';
    circle.style.borderColor = hue;
    circle.style.color = hue;
  }
  if (labelEl && label) labelEl.textContent = label;
}

function walkLabel(s) {
  if (s >= 90) return "Walker's Paradise";
  if (s >= 70) return "Very Walkable";
  if (s >= 50) return "Somewhat Walkable";
  return "Car-Dependent";
}
function bikeLabel(s) {
  if (s >= 90) return "Biker's Paradise";
  if (s >= 70) return "Very Bikeable";
  if (s >= 50) return "Bikeable";
  return "Minimal Bike Infra";
}
function transitLabel(s) {
  if (s >= 90) return "Rider's Paradise";
  if (s >= 70) return "Excellent Transit";
  if (s >= 50) return "Good Transit";
  return "Minimal Transit";
}

// ─── Listings Carousel ───────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const track   = document.getElementById('listings-grid');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');
  const dotsWrap= document.getElementById('carousel-dots');
  if (!track) return;

  const cards = Array.from(track.querySelectorAll('.listing-card'));
  const cardW = () => (cards[0]?.offsetWidth || 280) + 16;
  const vis   = () => Math.max(1, Math.round(track.offsetWidth / cardW()));
  const pages = () => Math.ceil(cards.length / vis());
  let idx = 0;

  // Build dots
  for (let i = 0; i < pages(); i++) {
    const d = document.createElement('button');
    d.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(d);
  }

  function goTo(i) {
    idx = Math.max(0, Math.min(i, pages() - 1));
    track.scrollTo({ left: idx * cardW() * vis(), behavior: 'smooth' });
    dotsWrap.querySelectorAll('.carousel-dot').forEach((d, j) =>
      d.classList.toggle('active', j === idx));
    if (prevBtn) prevBtn.disabled = idx === 0;
    if (nextBtn) nextBtn.disabled = idx >= pages() - 1;
  }

  prevBtn?.addEventListener('click', () => goTo(idx - 1));
  nextBtn?.addEventListener('click', () => goTo(idx + 1));
  track.addEventListener('scroll', () => {
    const i = Math.round(track.scrollLeft / (cardW() * vis()));
    if (i !== idx) { idx = i; dotsWrap.querySelectorAll('.carousel-dot').forEach((d,j) => d.classList.toggle('active', j===idx)); }
  }, { passive: true });

  goTo(0);
});

// ─── Community Photo Carousel ─────────────────
document.addEventListener('DOMContentLoaded', () => {
  const track     = document.getElementById('photo-carousel-track');
  const dotsWrap  = document.getElementById('photo-carousel-dots');
  const prevBtn   = document.getElementById('photo-prev');
  const nextBtn   = document.getElementById('photo-next');
  const container = document.getElementById('photo-carousel');
  if (!track || !container) return;

  const photos = N.photos || [];

  if (!photos.length) return; // leave placeholder visible

  // Build slides
  track.innerHTML = photos.map((p, i) => `
    <div class="photo-slide" style="background-image:url('${p.url}')" data-index="${i}">
      ${p.caption ? `<div class="photo-slide-caption">${p.caption}</div>` : ''}
    </div>`).join('');

  // Dots
  photos.forEach((_, i) => {
    const d = document.createElement('button');
    d.className = 'photo-dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(d);
  });

  let current = 0, timer;

  function goTo(i) {
    current = ((i % photos.length) + photos.length) % photos.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dotsWrap.querySelectorAll('.photo-dot').forEach((d, j) =>
      d.classList.toggle('active', j === current));
    resetTimer();
  }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 10000);
  }

  prevBtn?.addEventListener('click', () => goTo(current - 1));
  nextBtn?.addEventListener('click', () => goTo(current + 1));

  goTo(0);
});

// ─── Pearl Floating Chatbot ───────────────────
document.addEventListener('DOMContentLoaded', () => {
  const trigger  = document.getElementById('pearl-trigger');
  const window_  = document.getElementById('pearl-window');
  const closeBtn = document.getElementById('pearl-close');
  const input    = document.getElementById('pearl-input');
  const sendBtn  = document.getElementById('pearl-send');
  const messages = document.getElementById('pearl-messages');
  if (!trigger || !window_) return;

  // Set neighborhood name
  document.querySelectorAll('.pearl-nbhd-name').forEach(el => el.textContent = nbhdName);

  // Toggle
  function openPearl()  { window_.classList.add('open');    trigger.setAttribute('aria-expanded','true'); }
  function closePearl() { window_.classList.remove('open'); trigger.setAttribute('aria-expanded','false'); }
  trigger.addEventListener('click', () => window_.classList.contains('open') ? closePearl() : openPearl());
  closeBtn?.addEventListener('click', closePearl);

  // Chat
  function addMsg(text, role) {
    const div = document.createElement('div');
    div.className = `pearl-msg pearl-msg--${role}`;
    div.innerHTML = `<div class="pearl-bubble">${text}</div>`;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  function handleSend() {
    const q = input.value.trim();
    if (!q) return;
    addMsg(q, 'user');
    input.value = '';
    // Placeholder response — wire to Claude API for production
    setTimeout(() => {
      addMsg(`Great question about ${nbhdName}! To get live answers, connect Pearl to the Claude API with this neighborhood's context. In the meantime, reach out directly — <strong>503-501-2490</strong> or <a href="mailto:clientcare@lovejoyrealestate.com" style="color:#296886">clientcare@lovejoyrealestate.com</a>.`, 'pearl');
    }, 700);
  }

  sendBtn?.addEventListener('click', handleSend);
  input?.addEventListener('keydown', e => { if (e.key === 'Enter') handleSend(); });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!e.target.closest('.pearl-widget')) closePearl();
  });
});
