// ══════════════════════════════════════════════
// PPS SCHOOL URL LOOKUP
// Keyed by school name for GreatSchools / Niche links
// ══════════════════════════════════════════════
const PPS_SCHOOLS = {
  "Abernethy Elementary":          { niche: "https://www.niche.com/k12/abernethy-elementary-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/864-Abernethy-Elementary-School/" },
  "Ainsworth Elementary":          { niche: "https://www.niche.com/k12/ainsworth-elementary-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/865-Ainsworth-Elementary-School/" },
  "Alameda Elementary":            { niche: "https://www.niche.com/k12/alameda-elementary-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/866-Alameda-Elementary-School/" },
  "Atkinson Elementary":           { niche: "https://www.niche.com/k12/atkinson-elementary-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/870-Atkinson-Elementary-School/" },
  "Arleta Elementary":             { niche: "https://www.niche.com/k12/arleta-elementary-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/868-Arleta-Elementary-School/" },
  "Beach Elementary":              { niche: "https://www.niche.com/k12/beach-elementary-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/872-Beach-Elementary-School/" },
  "Boise-Eliot/Humboldt":          { niche: "https://www.niche.com/k12/boise-eliot-elementary-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/875-Boise-Eliot-Elementary-School/" },
  "Bridlemile Elementary":         { niche: "https://www.niche.com/k12/bridlemile-elementary-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/877-Bridlemile-Elementary-School/" },
  "Buckman Elementary":            { niche: "https://www.niche.com/k12/buckman-elementary-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/879-Buckman-Elementary-School/" },
  "Chapman Elementary":            { niche: "https://www.niche.com/k12/chapman-elementary-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/881-Chapman-Elementary-School/" },
  "Chief Joseph Elementary":       { niche: "https://www.niche.com/k12/chief-joseph-elementary-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/882-Chief-Joseph-Elementary-School/" },
  "Creston Elementary":            { niche: "https://www.niche.com/k12/creston-elementary-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/885-Creston-Elementary-School/" },
  "Duniway Elementary":            { niche: "https://www.niche.com/k12/duniway-elementary-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/886-Duniway-Elementary-School/" },
  "Forest Park Elementary":        { niche: "https://www.niche.com/k12/forest-park-elementary-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/969-Forest-Park-Elementary-School/" },
  "Glencoe Elementary":            { niche: "https://www.niche.com/k12/glencoe-elementary-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/891-Glencoe-Elementary-School/" },
  "Grout Elementary":              { niche: "https://www.niche.com/k12/grout-elementary-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/894-Grout-Elementary-School/" },
  "Hayhurst Elementary":           { niche: "https://www.niche.com/k12/hayhurst-elementary-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/895-Hayhurst-Elementary-School/" },
  "Irvington Elementary":          { niche: "https://www.niche.com/k12/irvington-elementary-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/899-Irvington-Elementary-School/" },
  "James John Elementary":         { niche: "https://www.niche.com/k12/james-john-elementary-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/900-James-John-Elementary-School/" },
  "Kelly Elementary":              { niche: "https://www.niche.com/k12/kelly-elementary-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/902-Kelly-Elementary-School/" },
  "Lewis Elementary":              { niche: "https://www.niche.com/k12/lewis-elementary-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/909-Lewis-Elementary-School/" },
  "Llewellyn Elementary":          { niche: "https://www.niche.com/k12/llewellyn-elementary-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/910-Llewellyn-Elementary-School/" },
  "Lent Elementary":               { niche: "https://www.niche.com/k12/lent-elementary-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/908-Lent-Elementary-School/" },
  "Maplewood Elementary":          { niche: "https://www.niche.com/k12/maplewood-elementary-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/911-Maplewood-Elementary-School/" },
  "Markham Elementary":            { niche: "https://www.niche.com/k12/markham-elementary-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/912-Markham-Elementary-School/" },
  "Marysville Elementary":         { niche: "https://www.niche.com/k12/marysville-elementary-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/913-Marysville-Elementary-School/" },
  "Martin Luther King Jr. Elementary": { niche: "https://www.niche.com/k12/martin-luther-king-jr-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/904-King-Elementary-School/" },
  "Peninsula Elementary":          { niche: "https://www.niche.com/k12/peninsula-elementary-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/917-Peninsula-Elementary-School/" },
  "Rieke Elementary":              { niche: "https://www.niche.com/k12/rieke-elementary-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/863-Rieke-Elementary-School/" },
  "Richmond Elementary":           { niche: "https://www.niche.com/k12/richmond-elementary-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/920-Richmond-Elementary-School/" },
  "Rosa Parks Elementary":         { niche: "https://www.niche.com/k12/rosa-parks-elementary-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/871-Rosa-Parks-Elementary-School/" },
  "Rose City Park":                { niche: "https://www.niche.com/k12/rose-city-park-portland-or/", gs: "https://www.greatschools.org/oregon/portland/4217-Rose-City-Park/" },
  "Sabin Elementary":              { niche: "https://www.niche.com/k12/sabin-elementary-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/923-Sabin-Elementary-School/" },
  "Scott Elementary":              { niche: "https://www.niche.com/k12/scott-elementary-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/924-Scott-Elementary-School/" },
  "Sitton Elementary":             { niche: "https://www.niche.com/k12/sitton-elementary-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/926-Sitton-Elementary-School/" },
  "Stephenson Elementary":         { niche: "https://www.niche.com/k12/stephenson-elementary-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/929-Stephenson-Elementary-School/" },
  "Vestal Elementary":             { niche: "https://www.niche.com/k12/vestal-elementary-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/932-Vestal-Elementary-School/" },
  "Whitman Elementary":            { niche: "https://www.niche.com/k12/whitman-elementary-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/936-Whitman-Elementary-School/" },
  "Woodlawn Elementary":           { niche: "https://www.niche.com/k12/woodlawn-elementary-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/938-Woodlawn-Elementary-School/" },
  "Woodmere Elementary":           { niche: "https://www.niche.com/k12/woodmere-elementary-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/939-Woodmere-Elementary-School/" },
  "Woodstock Elementary":          { niche: "https://www.niche.com/k12/woodstock-elementary-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/940-Woodstock-Elementary-School/" },
  "Laurelhurst School":            { niche: "https://www.niche.com/k12/laurelhurst-elementary-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/906-Laurelhurst-Elementary-School/" },
  "Beverly Cleary School":         { niche: "https://www.niche.com/k12/beverly-cleary-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/896-Beverly-Cleary-School/" },
  "Sunnyside Environmental School":{ niche: "https://www.niche.com/k12/sunnyside-environmental-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/930-Sunnyside-Environmental-School/" },
  "Beaumont Middle School":        { niche: "https://www.niche.com/k12/beaumont-middle-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/873-Beaumont-Middle-School/" },
  "da Vinci Arts Middle School":   { niche: "https://www.niche.com/k12/da-vinci-middle-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/960-Da-Vinci-Middle-School/" },
  "George Middle School":          { niche: "https://www.niche.com/k12/george-middle-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/890-George-Middle-School/" },
  "Harriet Tubman Middle School":  { niche: "https://www.niche.com/k12/harriet-tubman-middle-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/963-Harriet-Tubman-Middle-School/" },
  "Harriet Tubman Middle":         { niche: "https://www.niche.com/k12/harriet-tubman-middle-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/963-Harriet-Tubman-Middle-School/" },
  "Harrison Park School":          { niche: "https://www.niche.com/k12/harrison-park-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/884-Harrison-Park-School/" },
  "Hosford Middle School":         { niche: "https://www.niche.com/k12/hosford-middle-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/897-Hosford-Middle-School/" },
  "Jackson Middle School":         { niche: "https://www.niche.com/k12/jackson-middle-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/964-Jackson-Middle-School/" },
  "Kellogg Middle School":         { niche: "https://www.niche.com/k12/kellogg-middle-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/901-Kellogg-Middle-School/" },
  "Lane Middle School":            { niche: "https://www.niche.com/k12/lane-middle-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/905-Lane-Middle-School/" },
  "Mt. Tabor Middle School":       { niche: "https://www.niche.com/k12/mt-tabor-middle-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/915-Mt-Tabor-Middle-School/" },
  "Ockley Green School":           { niche: "https://www.niche.com/k12/ockley-green-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/916-Ockley-Green/" },
  "Robert Gray Middle School":     { niche: "https://www.niche.com/k12/gray-middle-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/892-Gray-Middle-School/" },
  "Roseway Heights School":        { niche: "https://www.niche.com/k12/roseway-heights-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/922-Roseway-Heights-School/" },
  "Sellwood Middle School":        { niche: "https://www.niche.com/k12/sellwood-middle-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/925-Sellwood-Middle-School/" },
  "West Sylvan Middle School":     { niche: "https://www.niche.com/k12/west-sylvan-middle-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/934-West-Sylvan-Middle-School/" },
  "West Sylvan Middle":            { niche: "https://www.niche.com/k12/west-sylvan-middle-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/934-West-Sylvan-Middle-School/" },
  "Benson Polytechnic High School":{ niche: "https://www.niche.com/k12/benson-polytechnic-high-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/942-Benson-Polytechnic-High-School/" },
  "Cleveland High School":         { niche: "https://www.niche.com/k12/cleveland-high-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/944-Cleveland-High-School/" },
  "Franklin High School":          { niche: "https://www.niche.com/k12/franklin-high-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/946-Franklin-High-School/" },
  "Grant High School":             { niche: "https://www.niche.com/k12/grant-high-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/948-Grant-High-School/" },
  "Ida B. Wells High School":      { niche: "https://www.niche.com/k12/ida-b-wells-barnett-high-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/957-Wilson-High-School/" },
  "Jefferson High School":         { niche: "https://www.niche.com/k12/jefferson-high-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/949-Jefferson-High-School/" },
  "Leodis V. McDaniel High School":{ niche: "https://www.niche.com/k12/leodis-v-mcdaniel-high-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/952-Madison-High-School/" },
  "Lincoln High School":           { niche: "https://www.niche.com/k12/lincoln-high-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/950-Lincoln-High-School/" },
  "Roosevelt High School":         { niche: "https://www.niche.com/k12/roosevelt-high-school-portland-or/", gs: "https://www.greatschools.org/oregon/portland/954-Roosevelt-High-School/" },
};

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
  // ─────────────────────────────────────────────

  "Alameda": {
    osmId: 7631288,
    city: "Northeast Portland", zip: "97212", established: "Est. 1910s",
    tagline: "Ridge-top neighborhood with sweeping city views, large lots, and some of the most architecturally distinctive homes in Portland.",
    description: [
      "Alameda sits on a basalt ridge running through inner NE, giving it views that few Portland neighborhoods can match. The ridge was platted in the early 1910s and the homes that went up — mostly Colonial Revivals, Tudors, and Craftsmans — reflected the ambitions of Portland's professional class at the time.",
      "Today the neighborhood is one of the most consistently in-demand pockets of the city. Lot sizes are generous, tree canopy is dense, and turnover is low. When a well-maintained home hits the market here, it typically draws multiple offers within the first week.",
      "Walkability is limited by the terrain but schools are strong, neighbors are invested, and the ridge itself is one of Portland's great assets."
    ],
    scores: { walk: 71, bike: 78, transit: 55 },
    schools: [
      { name: "Alameda Elementary",    grades: "K–5",  district: "Portland Public Schools", rating: 9 },
      { name: "Harriet Tubman Middle", grades: "6–8",  district: "Portland Public Schools", rating: 6 },
      { name: "Grant High School",     grades: "9–12", district: "Portland Public Schools", rating: 7 },
    ],
    nearby: ["Beaumont-Wilshire","Irvington","Grant Park","Hollywood","Rose City Park","Concordia"],
    market: {
      sold: "187",        range: "$495K – $1.45M",
      median: "$685,000", ppsf: "$345",
      dom: "12 days",     stl: "101.2%",
      yoyMedian: "▲ 3.1%", yoyPpsf: "▲ 2.8%", yoyDom: "▼ 8.3%",
      active: "24",       list: "$699,000",
      reduced: "29%",     reduction: "4.2% off original",
      updated: "Updated June 2, 2026 · Source: RMLS",
    },
    amenities: {
      parks:   [{ name: "Alameda Park", detail: "Ridge-top green space with city views" }, { name: "Grant Park", detail: "Adjacent neighborhood park, 0.4 mi" }],
      grocery: [{ name: "New Seasons Market", detail: "NE 33rd Ave · 0.6 mi" }, { name: "Fred Meyer", detail: "NE Broadway · 0.9 mi" }],
      coffee:  [{ name: "Beaumont Market", detail: "NE Fremont · neighborhood café and market" }, { name: "Stumptown Coffee", detail: "Multiple nearby locations" }],
      transit: [{ name: "TriMet Line 75", detail: "NE 39th Ave · North–South service" }, { name: "TriMet Line 24", detail: "Fremont St" }],
    },
    photos: [],
    listings: [],
  },

  "Sellwood-Moreland": {
    osmId: 7714440,
    city: "Southeast Portland", zip: "97202", established: "Est. 1880s",
    tagline: "Antique row, Willamette River access, and some of Portland's most coveted bungalows — consistently competitive market.",
    description: [
      "Sellwood sits at the southern end of inner SE, where the Willamette bends east and the streetcar suburb grid gives way to residential blocks that feel almost like a separate small town. The antique shops along SE 13th are a genuine local institution, not a manufactured district.",
      "The housing stock skews older — Craftsmans, bungalows, and foursquares built between 1890 and 1930. Lot sizes are modest but the neighborhood density is comfortable. Sellwood Park and the riverfront trail give residents outdoor access that most of Portland has to drive to.",
      "Demand is consistent and inventory is thin. The neighborhood attracts buyers who've done their research and know what they want."
    ],
    scores: { walk: 79, bike: 85, transit: 49 },
    schools: [
      { name: "Sellwood Middle School",  grades: "6–8",  district: "Portland Public Schools", rating: 7 },
      { name: "Cleveland High School",   grades: "9–12", district: "Portland Public Schools", rating: 8 },
      { name: "Llewellyn Elementary",    grades: "K–5",  district: "Portland Public Schools", rating: 8 },
    ],
    nearby: ["Eastmoreland","Woodstock","Brooklyn","Ardenwald","Milwaukie"],
    market: {
      sold: "203",        range: "$390K – $1.10M",
      median: "$565,000", ppsf: "$338",
      dom: "16 days",     stl: "100.4%",
      yoyMedian: "▼ 1.2%", yoyPpsf: "▼ 1.8%", yoyDom: "▲ 28.4%",
      active: "31",       list: "$549,000",
      reduced: "44%",     reduction: "5.1% off original",
      updated: "Updated June 2, 2026 · Source: RMLS",
    },
    amenities: {
      parks:   [{ name: "Sellwood Park", detail: "22 acres, pool, river access, tennis" }, { name: "Oaks Bottom Wildlife Refuge", detail: "Wetland wildlife area along the Willamette" }],
      grocery: [{ name: "New Seasons Market", detail: "SE Tacoma St · neighborhood anchor" }, { name: "Trader Joe's", detail: "SE Powell · 1.2 mi" }],
      coffee:  [{ name: "Stumptown Coffee", detail: "SE 13th Ave · Sellwood location" }, { name: "Extracto Coffee", detail: "SE Milwaukie Ave" }],
      transit: [{ name: "TriMet Line 70", detail: "SE 17th Ave · South Portland connector" }, { name: "TriMet Line 99", detail: "Barbur Blvd / Sellwood Bridge" }],
    },
    photos: [],
    listings: [],
  },

  "Pearl District": {
    osmId: 7692258,
    city: "Northwest Portland", zip: "97209", established: "Est. 1990s",
    tagline: "Portland's premier urban neighborhood — new construction condos, galleries, and strong long-term rental and resale demand.",
    description: [
      "The Pearl was an industrial railyard district until the late 1980s. What happened next was one of the more successful urban infill stories in the country — a combination of tax incentives, developer risk-taking, and genuine neighborhood building turned it into Portland's most walkable urban district.",
      "The housing stock is almost entirely attached — condos and lofts, mostly built between 1995 and 2015. Prices per square foot are the highest in Portland. The tradeoff is access: Powell's Books, the Saturday Market, Whole Foods, and Tanner Springs Park are all within a few blocks.",
      "The buyer here is typically someone who wants to be in the city, not near it. Buyers who value space over location tend to look elsewhere."
    ],
    scores: { walk: 98, bike: 95, transit: 90 },
    schools: [
      { name: "Chapman Elementary",  grades: "K–5",  district: "Portland Public Schools", rating: 7 },
      { name: "West Sylvan Middle",  grades: "6–8",  district: "Portland Public Schools", rating: 7 },
      { name: "Lincoln High School", grades: "9–12", district: "Portland Public Schools", rating: 8 },
    ],
    nearby: ["NW District","Old Town","Goose Hollow","South Portland","Lloyd District"],
    market: {
      sold: "312",        range: "$280K – $1.85M",
      median: "$498,000", ppsf: "$512",
      dom: "28 days",     stl: "98.6%",
      yoyMedian: "▼ 2.4%", yoyPpsf: "▼ 1.9%", yoyDom: "▲ 41.2%",
      active: "94",       list: "$519,000",
      reduced: "58%",     reduction: "7.3% off original",
      updated: "Updated June 2, 2026 · Source: RMLS",
    },
    amenities: {
      parks:   [{ name: "Tanner Springs Park", detail: "Urban wetland park in the heart of the Pearl" }, { name: "The Fields Park", detail: "2-acre event and recreation lawn" }],
      grocery: [{ name: "Whole Foods Market", detail: "NW Couch St · flagship Portland location" }, { name: "Trader Joe's", detail: "NW 21st Ave · 0.5 mi" }],
      coffee:  [{ name: "Stumptown Coffee HQ", detail: "SW 3rd Ave · the original" }, { name: "Water Avenue Coffee", detail: "NW Kearney location" }],
      transit: [{ name: "MAX Red/Blue/Green/Yellow", detail: "Union Station / Pearl stops — direct to airport, Hillsboro, Clackamas" }, { name: "Portland Streetcar NS Line", detail: "Runs through the Pearl north–south" }],
    },
    photos: [],
    listings: [],
  },

  "Lake Oswego": {
    osmId: 186576,
    city: "Inner Suburb", zip: "97034", established: "Inc. 1910",
    tagline: "Top-rated schools, lake access, and a consistently tight inventory that supports strong long-term values.",
    description: [
      "Lake Oswego sits 8 miles south of downtown Portland, separated from the city by the Willamette River and a set of hills that help define its character. It incorporated in 1910 around the iron smelter on Oswego Lake and has evolved into one of the most consistently in-demand suburban markets in the metro.",
      "The school district is the draw for many buyers — Lake Oswego schools regularly rank among the top in Oregon. The lake itself is privately controlled, with access tied to certain properties, but the surrounding parks and the Willamette riverfront are public.",
      "The market is among the most competitive in the Portland metro. Inventory rarely stays available long, and price reductions are less common here than elsewhere in the region."
    ],
    scores: { walk: 52, bike: 44, transit: 38 },
    schools: [
      { name: "Lake Oswego Elementary", grades: "K–5",  district: "Lake Oswego School District", rating: 10 },
      { name: "Lake Oswego Middle",     grades: "6–8",  district: "Lake Oswego School District", rating: 9 },
      { name: "Lake Oswego High School",grades: "9–12", district: "Lake Oswego School District", rating: 9 },
    ],
    nearby: ["West Linn","Tualatin","Milwaukie","Sellwood-Moreland","South Portland"],
    market: {
      sold: "418",        range: "$420K – $3.20M",
      median: "$785,000", ppsf: "$358",
      dom: "21 days",     stl: "99.1%",
      yoyMedian: "▲ 1.8%", yoyPpsf: "▲ 0.9%", yoyDom: "▲ 16.7%",
      active: "62",       list: "$825,000",
      reduced: "38%",     reduction: "5.8% off original",
      updated: "Updated June 2, 2026 · Source: RMLS",
    },
    amenities: {
      parks:   [{ name: "George Rogers Park", detail: "Willamette River access, historic iron furnace site" }, { name: "Oswego Lake", detail: "Private lake — access tied to specific properties and HOAs" }],
      grocery: [{ name: "Zupan's Markets", detail: "SW Kruse Way · premium local grocer" }, { name: "New Seasons Market", detail: "Kruse Village · 1 mi" }],
      coffee:  [{ name: "Starbucks Reserve", detail: "Lake Oswego Town Square" }, { name: "Spella Caffè", detail: "Local Portland roaster, LO location" }],
      transit: [{ name: "TriMet Line 35", detail: "Macadam Ave · direct to downtown Portland" }, { name: "TriMet Line 36", detail: "Maplewood / South Macadam" }],
    },
    photos: [],
    listings: [],
  },

  // ── Template for new neighborhoods ───────────
  // Copy this block and fill in your data:
  //
  // "Neighborhood Name": {
  //   osmId:       0,          // from neighborhoods.geojson osm_id (positive)
  //   city:        "",         // e.g. "Northeast Portland"
  //   zip:         "",
  //   established: "",         // e.g. "Est. 1920s"
  //   tagline:     "",         // one-line hero summary
  //   description: ["","",""], // 2–3 paragraphs
  //   scores: { walk: 0, bike: 0, transit: 0 },
  //   schools: [{ name: "", grades: "", district: "", rating: 0 }],
  //   nearby: [],
  //   market: { sold:"", range:"", median:"", ppsf:"", dom:"", stl:"",
  //             yoyMedian:"", yoyPpsf:"", yoyDom:"",
  //             active:"", list:"", reduced:"", reduction:"", updated:"" },
  //   amenities: { parks:[], grocery:[], coffee:[], transit:[] },
  //   photos: [],   // [{ url:"", caption:"" }]
  //   listings: [], // [{ lat, lng, price, address, beds, baths, sqft, ppsf, status, dom, mls }]
  // },
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
  if (descEl) {
    descEl.innerHTML = N.description?.length
      ? N.description.map(p => `<p>${p}</p>`).join('')
      : `<p style="color:#aaa;font-style:italic">Description not yet added for ${nbhdName}. Add it to <code>NEIGHBORHOODS["${nbhdName}"].description</code> in neighborhood.js.</p>`;
  }

  // Market stats bar (primary)
  if (N.market) {
    setText('sb-median',  N.market.median || '—');
    setText('sb-ppsf',    N.market.ppsf   || '—');
    const activeVal = N.market.active ? `${N.market.active}` : '—';
    setText('sb-active',  activeVal);
    setText('sb-open-houses', N.openHouses ?? '—');
  }

  // Walk/Bike/Transit scores (secondary)
  if (N.scores) {
    setScoreSm('sc-walk',    N.scores.walk,    walkLabel(N.scores.walk));
    setScoreSm('sc-bike',    N.scores.bike,    bikeLabel(N.scores.bike));
    setScoreSm('sc-transit', N.scores.transit, transitLabel(N.scores.transit));
  }

  // Schools
  const schoolList = document.getElementById('schools-list');
  if (schoolList) {
    if (N.schools?.length) {
      schoolList.innerHTML = N.schools.map(s => {
        const rClass = s.rating >= 8 ? 'high' : s.rating >= 6 ? 'mid' : 'low';
        const icon   = s.grades.startsWith('9') ? 'fa-graduation-cap' : 'fa-school';
        const iconBg = s.grades.startsWith('9') ? 'school-icon--high' : '';
        const urls   = PPS_SCHOOLS[s.name] || {};
        const gsBtn  = urls.gs
          ? `<a href="${urls.gs}" target="_blank" rel="noopener" class="school-link school-link--gs" title="GreatSchools">
               <svg viewBox="0 0 24 24" width="14" height="14"><circle cx="12" cy="12" r="12" fill="#00855D"/><text x="12" y="16" text-anchor="middle" fill="#fff" font-size="10" font-family="sans-serif" font-weight="bold">GS</text></svg>
               GreatSchools
             </a>`
          : '';
        const nicheBtn = urls.niche
          ? `<a href="${urls.niche}" target="_blank" rel="noopener" class="school-link school-link--niche" title="Niche">
               <svg viewBox="0 0 24 24" width="14" height="14"><circle cx="12" cy="12" r="12" fill="#3E54AC"/><text x="12" y="16" text-anchor="middle" fill="#fff" font-size="9" font-family="sans-serif" font-weight="bold">N</text></svg>
               Niche
             </a>`
          : '';
        return `
          <div class="school-item">
            <div class="school-icon ${iconBg}"><i class="fas ${icon}"></i></div>
            <div class="school-info">
              <strong>${s.name}</strong>
              <span>${s.grades} · ${s.district}</span>
            </div>
            <div class="school-item-right">
              ${gsBtn || nicheBtn ? `<div class="school-links">${gsBtn}${nicheBtn}</div>` : ''}
            </div>
          </div>`;
      }).join('');
    } else {
      schoolList.innerHTML = `<p style="font-family:var(--font-body);font-size:13px;color:#aaa;padding:8px 0">School data not yet added for ${nbhdName}.</p>`;
    }
  }

  // Nearby chips
  const chipsEl = document.getElementById('nearby-chips');
  if (chipsEl) {
    if (N.nearby?.length) {
      chipsEl.innerHTML = N.nearby.map(n =>
        `<a href="neighborhood.html?n=${encodeURIComponent(n)}" class="nearby-chip">${n}</a>`
      ).join('');
    } else {
      chipsEl.innerHTML = `<p style="font-family:var(--font-body);font-size:13px;color:#aaa">Not yet configured.</p>`;
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

function setScoreSm(id, score, label) {
  const el = document.getElementById(id);
  const labelEl = document.getElementById(id + '-label');
  if (el) {
    el.textContent = score ?? '—';
    const hue = score >= 90 ? '#27ae60' : score >= 70 ? '#296886' : score >= 50 ? '#e67e22' : '#c0392b';
    el.style.borderColor = hue;
    el.style.color = hue;
  }
  if (labelEl && label) labelEl.textContent = label;
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
