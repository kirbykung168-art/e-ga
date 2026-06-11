/**
 * e-ga / อีกา — single source of truth.
 *
 * Verified across:
 *   - Thai Airways Sawasdee (May 2025) — concept + signature dishes
 *   - Samurai Gourmet (Aug 2022) — Song Wat address + photos
 *   - Foodplacee (live 2026) — 4.1★ over 749 reviews, ฿200–400 price band, hours
 *   - Linktree @egabangkok (live) — 3 branches + LINE OA reservations
 */

export type Locale = 'en' | 'th';

export const BRAND = {
  name: 'e-ga',
  nameTh: 'อีกา',
  meaning: { en: 'crow', th: 'อีกา' },
  group: { en: "It's Happened to be a Closet", th: 'อิส_แฮพ_เพ่น' },
  tagline: {
    en: 'Local breakfasts from across Thailand.',
    th: 'กินเช้า Local Breakfast จากทั่วไทย',
  },
  founder: 'Siriwan Tharananithikul',

  instagramHandle: '@ega_bangkok',
  instagramUrl: 'https://instagram.com/ega_bangkok',
  facebookUrl: 'https://facebook.com/egabangkok',
  facebookSathornUrl: 'https://facebook.com/egabangkoksathorn',
  linktreeUrl: 'https://linktr.ee/egabangkok',
  // Linktree reservation link
  lineReserveUrl: 'https://lin.ee/W4wRFeK',
  // LINE MAN delivery for all 3 brands
  lineMan: 'https://linktr.ee/linemanforall',

  rating: { score: 4.1, count: 749, source: 'Foodplacee' },
  priceBand: { en: '฿200 – ฿400 per head', th: '฿200 – ฿400 ต่อคน' },
};

export const BRANCHES = [
  {
    key: 'song-wat',
    name: { en: 'Song Wat', th: 'ทรงวาด' },
    label: { en: 'e-ga LAB · the original', th: 'อีกา ทรงวาด · ต้นกำเนิด' },
    address: { en: '829 Song Wat Rd, Chakkrawat, Samphanthawong, Bangkok 10100', th: '829 ถ.ทรงวาด เขตสัมพันธวงศ์ กรุงเทพฯ 10100' },
    phoneDisplay: '094 671 9146',
    phoneTel: '+66946719146',
    hours: { en: 'Daily 08:00 – 22:00', th: 'ทุกวัน 08:00 – 22:00' },
    note: { en: '120 years of Song Wat heritage at the door. Time Out: one of the 40 coolest neighbourhoods in the world (2023).', th: 'ย่านทรงวาดอายุ 120 ปี · Time Out จัด 1 ใน 40 ย่านที่เจ๋งที่สุดในโลก (2023)' },
    mapsQuery: 'อีกา+ทรงวาด+e-ga+Song+Wat',
  },
  {
    key: 'sathorn-12',
    name: { en: 'Sathorn 12', th: 'สาทร 12' },
    label: { en: 'e-ga / Sathorn 12', th: 'อีกา / สาทร 12' },
    address: { en: '232 Soi Sathorn 12, Bang Rak, Bangkok 10500', th: '232 ซอยสาทร 12 บางรัก กรุงเทพฯ 10500' },
    phoneDisplay: '088 088 5031',
    phoneTel: '+66880885031',
    hours: { en: 'Daily 08:00 – 22:00', th: 'ทุกวัน 08:00 – 22:00' },
    note: { en: 'Breakfast set in a neon-market room — khao tom kradook moo, kai krata, the works.', th: 'อาหารเช้าในห้องไฟนีออน — ข้าวต้มกระดูกหมู ไข่กระทะ ครบสำรับ' },
    mapsQuery: 'อีกา+สาทร+12+ega_bangkok',
  },
  {
    key: 'sukhumvit-23',
    name: { en: 'Sukhumvit 23', th: 'สุขุมวิท 23' },
    label: { en: 'e-ga / Sukhumvit 23', th: 'อีกา / สุขุมวิท 23' },
    address: { en: 'Soi Sukhumvit 23, Khlong Toei Nuea, Watthana, Bangkok 10110', th: 'ซอยสุขุมวิท 23 คลองเตยเหนือ วัฒนา กรุงเทพฯ 10110' },
    phoneDisplay: '082 789 2391',
    phoneTel: '+66827892391',
    hours: { en: 'Daily 08:00 – 22:00', th: 'ทุกวัน 08:00 – 22:00' },
    note: { en: 'Inside the Closet mothership — fashion shop, nail bar, kitchen, all under one roof.', th: 'ในตึก The Closet — ร้านเสื้อผ้า เพ้นท์เล็บ และครัวอีกาในที่เดียว' },
    mapsQuery: 'อีกา+สุขุมวิท+23+ega_bangkok',
  },
];

export const SISTER = {
  key: 'luv-seafood',
  name: { en: 'e-ga Luv Seafood', th: 'อีกา Luv Seafood' },
  description: { en: 'Thai-style seafood breakfast — 200 metres from the original.', th: 'อาหารเช้าซีฟู้ดสไตล์ไทย · 200 เมตรจากร้านต้นฉบับ' },
  phoneDisplay: '081 565 2028',
  phoneTel: '+66815652028',
  location: { en: 'Song Wat Road', th: 'ทรงวาด' },
};

/* ===================================================================
 *  REGIONAL MAP — six recipes, six provinces.
 *  Coordinates are within a 0..100 viewBox over a stylised Thailand SVG.
 * =================================================================== */
export type Region = 'north' | 'isaan' | 'central' | 'east' | 'south' | 'andaman';

export const RECIPES: {
  key: string;
  dish: { en: string; th: string };
  region: Region;
  province: { en: string; th: string };
  blurb: { en: string; th: string };
  price?: string;
  // coords (viewBox 100x140) — for the pinned map dots
  mapX: number;
  mapY: number;
  photo?: string;
}[] = [
  {
    key: 'mee-krob',
    dish: { en: 'Mee Krob e-ga', th: 'หมี่กรอบอีกา' },
    region: 'central',
    province: { en: 'Bangkok / Central', th: 'กรุงเทพฯ / ภาคกลาง' },
    blurb: {
      en: 'Crispy rice noodles with prawn — sweet, sour, tamarind-deep. The dish reviewers come back for.',
      th: 'หมี่กรอบฉบับอีกา — กุ้ง รสหวานเปรี้ยวมะขามเข้ม จานที่ลูกค้ากลับมาสั่งซ้ำ',
    },
    price: '฿220',
    mapX: 52, mapY: 70,
    photo: '/images/mee-krob.jpg',
  },
  {
    key: 'pla-muek',
    dish: { en: 'Pla Muek Nam Dum Manao', th: 'ปลาหมึกน้ำดำมะนาว' },
    region: 'andaman',
    province: { en: 'Krabi · Andaman', th: 'กระบี่ · อันดามัน' },
    blurb: {
      en: 'Stir-fried squid from Krabi in fragrant black squid ink, brightened with fresh lime. The signature.',
      th: 'ปลาหมึกผัดน้ำหมึกดำหอม คั้นมะนาวสด — ซิกเนเจอร์ของร้าน',
    },
    mapX: 40, mapY: 116,
  },
  {
    key: 'raw-prawn',
    dish: { en: 'Raw prawn salad', th: 'กุ้งแช่น้ำปลา' },
    region: 'south',
    province: { en: 'Southern Thailand', th: 'ปักษ์ใต้' },
    blurb: {
      en: 'Fresh river prawn, lime, garlic, fish sauce, chilli. Spicy, fresh, addictive.',
      th: 'กุ้งแม่น้ำสด มะนาว กระเทียม น้ำปลา พริก รสเผ็ดสด',
    },
    mapX: 47, mapY: 105,
    photo: '/images/raw-prawn.jpg',
  },
  {
    key: 'river-prawn',
    dish: { en: 'River prawn', th: 'กุ้งแม่น้ำ' },
    region: 'central',
    province: { en: 'Ayutthaya / Central', th: 'อยุธยา / ภาคกลาง' },
    blurb: {
      en: 'A whole river prawn, charcoal, mun (the head fat). Quiet showstopper.',
      th: 'กุ้งแม่น้ำทั้งตัว ย่างถ่าน มันกุ้งเข้ม — เงียบแต่เด่น',
    },
    mapX: 51, mapY: 64,
    photo: '/images/river-prawn.jpg',
  },
  {
    key: 'sour-curry',
    dish: { en: 'Sour curry, shrimp & cha-om omelet', th: 'แกงส้มกุ้ง ไข่เจียวชะอม' },
    region: 'south',
    province: { en: 'Southern Thailand', th: 'ปักษ์ใต้' },
    blurb: {
      en: 'Tamarind-bright southern broth, shrimp, cha-om omelet — a household memory.',
      th: 'น้ำแกงส้มใต้รสมะขามสด กุ้ง ไข่เจียวชะอม รสในความทรงจำ',
    },
    mapX: 44, mapY: 108,
  },
  {
    key: 'minced-pork',
    dish: { en: 'Southern minced pork (kua kling)', th: 'คั่วกลิ้งหมูใต้' },
    region: 'south',
    province: { en: 'Nakhon Si Thammarat / South', th: 'นครศรีธรรมราช / ใต้' },
    blurb: {
      en: 'Dry-fried curry, deep heat, ground southern aromatics. The room temperature rises a little.',
      th: 'คั่วกลิ้งแห้ง รสเผ็ดลึก เครื่องแกงใต้แท้ — ห้องจะร้อนขึ้นนิดหนึ่ง',
    },
    mapX: 48, mapY: 112,
  },
];

/* ===================================================================
 *  FULL MENU — verified prices where on record.
 * =================================================================== */
export const SMALL_MENU = {
  signatures: [
    {
      name: { en: 'Mee Krob e-ga', th: 'หมี่กรอบอีกา' },
      desc: { en: 'Crispy rice noodles, prawn, tamarind glaze.', th: 'หมี่กรอบฉบับอีกา · กุ้ง · น้ำมะขาม' },
      price: '฿220',
    },
    {
      name: { en: 'Pla Muek Nam Dum Manao', th: 'ปลาหมึกน้ำดำมะนาว' },
      desc: { en: 'Krabi squid, black ink, fresh lime.', th: 'ปลาหมึกกระบี่ · น้ำหมึกดำ · มะนาวสด' },
      price: '— ask',
    },
    {
      name: { en: 'Raw prawn salad', th: 'กุ้งแช่น้ำปลา' },
      desc: { en: 'River prawn, garlic, chilli, fish sauce.', th: 'กุ้งแม่น้ำ · กระเทียม · พริก · น้ำปลา' },
      price: '— ask',
    },
  ],
  larger: [
    { name: { en: 'Stewed pork with salted egg', th: 'หมูตุ๋นไข่เค็ม' }, price: '฿220' },
    { name: { en: 'Fried snakehead with fish sauce', th: 'ปลาช่อนทอดน้ำปลา' }, price: '฿490' },
    { name: { en: 'Khao yum pak tai', th: 'ข้าวยำปักษ์ใต้' } },
    { name: { en: 'Tom kha gai', th: 'ต้มข่าไก่' } },
    { name: { en: 'Spicy crispy salad', th: 'ยำกรอบ' } },
    { name: { en: 'Stir-fried shrimp with stink beans', th: 'กุ้งผัดสะตอ' } },
    { name: { en: 'Sour curry, shrimp & cha-om omelet', th: 'แกงส้มกุ้ง ไข่ชะอม' } },
    { name: { en: 'Khao tom kradook moo (Sathorn 12)', th: 'ข้าวต้มกระดูกหมู (สาทร 12)' } },
    { name: { en: 'Kai krata · breakfast (Sathorn 12)', th: 'ไข่กระทะ · เช้า (สาทร 12)' } },
  ],
  desserts: [
    { name: { en: 'Shiny Orange', th: 'ส้มฉ่ำ' } },
    { name: { en: 'Forest Berry Cheese Pie', th: 'พายเบอร์รี่ป่า ครีมชีส' } },
    { name: { en: 'Matcha Oreo Cheesecake', th: 'ชีสเค้กมัทฉะโอรีโอ' } },
    { name: { en: 'Toddy-palm + chocolate meringue pie', th: 'พายเมอแรงค์ลูกตาล + ช็อกโกแลต' }, price: '฿180' },
  ],
  drinks: [
    { name: { en: 'Roselle tea', th: 'น้ำกระเจี๊ยบ' }, price: '฿60' },
    { name: { en: 'Belgian beer selection', th: 'เบียร์เบลเยี่ยม' } },
    { name: { en: 'House cocktails', th: 'ค็อกเทล' } },
    { name: { en: 'Wine list', th: 'ไวน์' } },
  ],
};

/* ===================================================================
 *  PRESS WALL
 * =================================================================== */
export const PRESS = [
  {
    publication: 'Thai Airways Sawasdee',
    headline: { en: '"A modern pioneer of Song Wat\'s food scene."', th: '"ผู้บุกเบิกฉากอาหารทรงวาด"' },
    date: 'May 2025',
    url: 'https://sawasdee.thaiairways.com/8-spots-song-wat/',
  },
  {
    publication: 'Samurai Gourmet',
    headline: { en: '"The most authentic, delicious and best Thai food in the city."', th: '"อาหารไทยที่อร่อยและจริงใจที่สุดในกรุงเทพฯ"' },
    date: 'Aug 2022',
    url: 'https://samurai-gourmet.com/2022/08/17/ega-one-of-the-best-thai-restaurant-in-bangkok/',
  },
  {
    publication: 'Read The Cloud',
    headline: { en: '"Thai neighbourhood cooking — recipes from communities, Lampang to Song Wat."', th: '"อาหารชุมชน · จากลำปลายมาศถึงทรงวาด"' },
    date: '',
    url: 'https://readthecloud.co/ega-bangkok/',
  },
  {
    publication: 'Soimilk',
    headline: { en: '"A new landmark on Song Wat road."', th: '"แลนด์มาร์กใหม่ถนนทรงวาด"' },
    date: '',
    url: 'https://www.soimilk.com/restaurants/news/e-ga-bangkok',
  },
  {
    publication: 'Time Out',
    headline: { en: 'Song Wat: one of the 40 coolest neighbourhoods in the world.', th: 'ทรงวาด: 1 ใน 40 ย่านที่เจ๋งที่สุดในโลก' },
    date: '2023',
    url: 'https://www.timeout.com/bangkok/attractions/your-ultimate-guide-to-song-wat-road',
  },
];

/* ===================================================================
 *  REVIEW VOICES (verified Google reviews via Foodplacee aggregator)
 * =================================================================== */
export const REVIEWS = [
  {
    name: 'Adi Pebriawan',
    body: { en: "I've been to e-ga many times — every time I'm in Bangkok, I make sure to visit. The menu is wide, everything tastes great, and the Thai flavours are super authentic.", th: 'มาที่อีกาหลายครั้ง · ทุกครั้งที่กลับกรุงเทพฯ ต้องแวะ · รสชาติไทยแท้' },
  },
  {
    name: 'Sravan Gada',
    body: { en: "Found it randomly on this famous street and the food is so different and authentic — they even have a menu for non-locals. Desserts were out of this world.", th: 'เจอบนถนนนี้โดยบังเอิญ · รสชาติต่างและจริงใจ · ของหวานอร่อยยอดเยี่ยม' },
  },
  {
    name: 'Mean Min',
    body: { en: 'Bold southern Thai flavours, surprisingly good desserts. Worth the wait if you enjoy intense, flavourful dishes.', th: 'รสใต้จัดจ้าน · ของหวานเยี่ยมเหนือคาด · คุ้มที่จะรอ' },
  },
];

/* ===================================================================
 *  COPY — top-level
 * =================================================================== */
export const COPY = {
  nav: {
    items: [
      { href: '#story',    label: { en: 'Story',     th: 'เรื่องราว' } },
      { href: '#map',      label: { en: 'Map',       th: 'แผนที่' } },
      { href: '#menu',     label: { en: 'Menu',      th: 'เมนู' } },
      { href: '#branches', label: { en: 'Branches',  th: 'สาขา' } },
      { href: '#press',    label: { en: 'Press',     th: 'สื่อ' } },
    ],
    reserve: { en: 'Reserve', th: 'จองโต๊ะ' },
  },

  hero: {
    eyebrow: { en: 'อีกา · the crow · since 2020', th: 'อีกา · since 2020' },
    title:   { en: 'Secret recipes,', th: 'สูตรลับ' },
    titleAccent: { en: 'from every corner of Thailand.', th: 'จากทุกมุมของไทย' },
    body: {
      en: 'A regional-Thai kitchen in the family of It\'s Happened to be a Closet. Three Bangkok branches. One mischievous crow.',
      th: 'ครัวไทยภูมิภาคในเครืออิส_แฮพ_เพ่น · สามสาขาในกรุงเทพฯ · อีกาตัวเดียว',
    },
    ctaReserve: { en: 'Reserve via LINE', th: 'จองผ่าน LINE' },
    ctaScroll:  { en: 'Mine the map ↓', th: 'ขุดแผนที่ ↓' },
  },

  manifesto: {
    eyebrow: { en: 'A love-note', th: 'จดหมายรัก' },
    title: {
      en: 'We eat the country, one province at a time.',
      th: 'เรากินทั้งประเทศ · ทีละจังหวัด',
    },
    body: {
      en: 'e-ga is a crow — clever, dark of feather, drawn to the bright thing. We fly between provinces and pick up recipes from grandmothers who have cooked the same dish, the same way, for sixty years. We bring them back to Song Wat — sometimes faithful, sometimes mischievous. Always rooted.',
      th: 'อีกาเป็นนก — ฉลาด ขนดำ ติดของเงาวับ · พวกเราบินระหว่างจังหวัด เก็บสูตรจากย่า-ยาย ที่ทำจานเดิม วิธีเดิม มาหกสิบปี · พากลับมาทรงวาด · บางจานซื่อ บางจานซน · แต่รากเดิมเสมอ',
    },
  },

  map: {
    eyebrow: { en: 'The recipe map', th: 'แผนที่สูตรลับ' },
    title:   { en: 'Six dishes. Six provinces.', th: 'หกจาน · หกจังหวัด' },
    instr:   { en: 'Scroll the map — each region lights up as the kitchen tells its story.', th: 'เลื่อนแผนที่ · แต่ละภูมิภาคจะสว่างขึ้นทีละจาน' },
  },

  menu: {
    eyebrow: { en: 'The menu', th: 'เมนู' },
    title:   { en: 'A bento of bold things.', th: 'เบนโตะรสจัด' },
    intro:   { en: 'Most plates ฿200 – ฿400 · the kitchen rotates with the regions in season.', th: 'จานส่วนใหญ่ ฿200 – ฿400 · หมุนเวียนตามฤดูภูมิภาค' },
    signatureLabel: { en: 'Signatures',  th: 'จานเด่น' },
    plateLabel:     { en: 'From the kitchen', th: 'จากครัว' },
    dessertLabel:   { en: 'Desserts (the queue is for these)', th: 'ของหวาน (คนรอเพราะของหวาน)' },
    drinkLabel:     { en: 'Drinks',     th: 'เครื่องดื่ม' },
  },

  branches: {
    eyebrow: { en: 'Three branches', th: 'สามสาขา' },
    title:   { en: 'Find your e-ga.', th: 'หาอีกาของคุณ' },
    sisterLabel: { en: 'Sister — 200m away', th: 'น้องสาว · 200 เมตรเดิน' },
  },

  press: {
    eyebrow: { en: 'In the press', th: 'สื่อพูดถึง' },
    title:   { en: 'They came. They wrote.', th: 'มาแล้ว · เขียนแล้ว' },
  },

  reserve: {
    title:   { en: 'Save your table.', th: 'จองโต๊ะของคุณ' },
    body:    { en: 'LINE OA handles every branch. DM works too.', th: 'LINE OA จัดการทุกสาขา · DM ก็ได้' },
    line:    { en: 'Reserve on LINE', th: 'จองผ่าน LINE' },
    delivery:{ en: 'Order delivery via LINE MAN', th: 'สั่งกลับบ้านผ่าน LINE MAN' },
    dm:      { en: 'DM @ega_bangkok', th: 'DM @ega_bangkok' },
  },

  footer: {
    tagline: { en: 'A regional-Thai crow on Song Wat.', th: 'อีการสไทยภูมิภาคบนทรงวาด' },
    rights:  { en: 'All rights reserved.', th: 'สงวนลิขสิทธิ์' },
  },
} as const;
