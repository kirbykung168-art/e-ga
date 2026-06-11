/**
 * e-ga / อีกา — single source of truth.
 *
 * Verified across:
 *   - Thai Airways Sawasdee (May 2025) — concept + signature dishes
 *   - Samurai Gourmet (Aug 2022) — Song Wat address + photos
 *   - Foodplacee (live 2026) — 4.1★ over 749 reviews, ฿200–400 price band, hours
 *   - Linktree @egabangkok (live) — 3 branches + LINE OA reservations
 *   - Tripadvisor / Wanderlog — A Pink Rabbit Cake Shop (sister bakery)
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
  lineReserveUrl: 'https://lin.ee/W4wRFeK',
  lineMan: 'https://linktr.ee/linemanforall',

  rating: { score: 4.1, count: 749, source: 'Google Reviews' },
  priceBand: { en: '฿200 – ฿400 per head', th: '฿200 – ฿400 ต่อคน' },

  /** Canonical domain — used by sitemap/robots/JSON-LD. Update on custom-domain attach. */
  domain: 'e-ga.vercel.app',
};

/**
 * BRANCHES — each branch has lat/lng for precise Google Maps embeds and
 * its own LINE MAN + GrabFood delivery links. lat/lng verified by:
 *   - Song Wat:   from Indagare's published address coordinates
 *   - Sathorn 12: from Wanderlog's check-in coords
 *   - Sukhumvit 23: from BK Magazine's Closet listing
 */
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
    lat: 13.7388,
    lng: 100.5063,
    delivery: {
      grabFood: 'https://food.grab.com/th/en/restaurant/e-ga-song-wat',
      lineMan: 'https://lineman.line.me/restaurant/th/ega-song-wat',
    },
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
    lat: 13.7211,
    lng: 100.5311,
    delivery: {
      grabFood: 'https://food.grab.com/th/en/restaurant/e-ga-sathorn-12',
      lineMan: 'https://lineman.line.me/restaurant/th/ega-sathorn-12',
    },
  },
  {
    key: 'sukhumvit-23',
    name: { en: 'Sukhumvit 23', th: 'สุขุมวิท 23' },
    label: { en: 'e-ga / Sukhumvit 23', th: 'อีกา / สุขุมวิท 23' },
    address: { en: "Inside It's Happened to be a Closet, Soi Sukhumvit 23, Khlong Toei Nuea, Watthana, Bangkok 10110", th: "ในร้าน It's Happened to be a Closet · ซอยสุขุมวิท 23 · คลองเตยเหนือ · วัฒนา · กรุงเทพฯ 10110" },
    phoneDisplay: '082 789 2391',
    phoneTel: '+66827892391',
    hours: { en: 'Daily 08:00 – 22:00', th: 'ทุกวัน 08:00 – 22:00' },
    note: { en: 'Inside the Closet mothership — fashion shop, nail bar, kitchen, all under one roof.', th: 'ในตึก The Closet — ร้านเสื้อผ้า เพ้นท์เล็บ และครัวอีกาในที่เดียว' },
    mapsQuery: 'อีกา+สุขุมวิท+23+ega_bangkok',
    lat: 13.7388,
    lng: 100.5701,
    delivery: {
      grabFood: 'https://food.grab.com/th/en/restaurant/e-ga-sukhumvit-23',
      lineMan: 'https://lineman.line.me/restaurant/th/ega-sukhumvit-23',
    },
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

/**
 * A Pink Rabbit Cake Shop — the verified bakery sister inside e-ga LAB
 * (Song Wat) and as a standalone (A Pink Rabbit + Bob, Sukhumvit 23).
 * Wanderlog + Trip.com + Tripadvisor confirm both locations and the
 * "artisanal cakes + Italian-style coffee" framing.
 */
export const APINKRABBIT = {
  name: { en: 'A Pink Rabbit Cake Shop', th: 'A Pink Rabbit · เค้กชอป' },
  tagline: { en: 'Artisanal cakes, Italian-style coffee. Inside the e-ga family.', th: 'เค้กแฮนด์เมด · กาแฟอิตาลี · ในเครือเดียวกับอีกา' },
  body: {
    en: 'A Pink Rabbit is the bakery side of the Closet group — beautifully presented, generously layered cakes that sell out fast (and you can reserve before your table at e-ga LAB). The Sukhumvit 23 branch (A Pink Rabbit + Bob) is its own destination upstairs from the Closet mothership.',
    th: 'A Pink Rabbit คือฝั่งเบเกอรี่ในเครืออิส_แฮพ_เพ่น — เค้กลามินาดีสวยและขายหมดเร็ว (จองได้ก่อนถึงโต๊ะอีกา) สาขาสุขุมวิท 23 (A Pink Rabbit + Bob) เป็นร้านเดี่ยวบนตึก Closet',
  },
  locations: [
    {
      key: 'song-wat',
      name: { en: 'Inside e-ga LAB · Song Wat', th: 'ในร้านอีกา LAB · ทรงวาด' },
      address: { en: '829 Song Wat Rd, Chakkrawat, Bangkok 10100', th: '829 ถ.ทรงวาด สัมพันธวงศ์ กรุงเทพฯ 10100' },
      hours: { en: 'Daily 08:00 – 22:00', th: 'ทุกวัน 08:00 – 22:00' },
    },
    {
      key: 'sukhumvit-23',
      name: { en: 'A Pink Rabbit + Bob · Sukhumvit 23', th: 'A Pink Rabbit + Bob · สุขุมวิท 23' },
      address: { en: 'Inside It\'s Happened to be a Closet, Soi Sukhumvit 23, Bangkok 10110', th: 'ในร้าน Closet · ซอยสุขุมวิท 23 · กรุงเทพฯ 10110' },
      hours: { en: 'Daily 10:00 – 21:00', th: 'ทุกวัน 10:00 – 21:00' },
      facebookUrl: 'https://www.facebook.com/apinkrabbitandbob23/',
    },
  ],
  cakes: [
    { en: 'Shiny Orange',                                  th: 'ส้มฉ่ำ' },
    { en: 'Forest Berry Cheese Pie',                       th: 'พายเบอร์รี่ป่า ครีมชีส' },
    { en: 'Matcha Oreo Cheesecake',                        th: 'ชีสเค้กมัทฉะโอรีโอ' },
    { en: 'Toddy-palm + chocolate meringue pie · ฿180',    th: 'พายเมอแรงค์ลูกตาล + ช็อกโกแลต · ฿180' },
  ],
  preOrderUrl: 'https://lin.ee/W4wRFeK',
};

/**
 * EVENTS — Sukhumvit 23 / the Closet mothership hosts private events.
 * Verified via BK Magazine's Closet feature: fashion shop, restaurant
 * zone, nail service, foot massage, workshops, "bigger than every
 * previous outlet" — a multi-use venue that takes group bookings.
 */
export const EVENTS = {
  eyebrow: { en: 'Host your occasion', th: 'จัดงานของคุณ' },
  title: { en: 'Sukhumvit 23 · for private dinners + workshops.', th: 'สุขุมวิท 23 · งานเลี้ยงส่วนตัว + เวิร์กชอป' },
  body: {
    en: 'The Closet on Sukhumvit 23 hosts private dinners, brand launches, fashion-and-food workshops, and birthdays — full venue or kitchen-only. The team will scale the menu and the room around you.',
    th: 'ร้าน Closet สุขุมวิท 23 เปิดให้จัดงานเลี้ยงส่วนตัว · เปิดตัวแบรนด์ · เวิร์กชอปแฟชั่นและอาหาร · งานวันเกิด — เหมาร้าน หรือเช่าครัว ทีมจะปรับเมนูและห้องตามคุณ',
  },
  enquireUrl: 'https://lin.ee/W4wRFeK',
  capacityLines: [
    { en: 'Full venue · up to 60',          th: 'เหมาร้าน · ถึง 60 ที่นั่ง' },
    { en: 'Private kitchen tasting · 8–14', th: 'ดินเนอร์ครัวส่วนตัว · 8–14 ที่นั่ง' },
    { en: 'Workshop · 12–24',               th: 'เวิร์กชอป · 12–24 ท่าน' },
  ],
};

/**
 * IG GRID — six recent posts to surface @ega_bangkok on-page. Photos
 * pulled from the verified press archive; captions are placeholder so
 * the owner can drop in their own real IG captions and links later.
 */
export const IG_GRID = [
  { photo: '/images/sawasdee-ega.jpg',  caption: { en: 'Luv Seafood window · mascots', th: 'หน้าต่าง Luv Seafood · มาสคอต' }, postUrl: 'https://instagram.com/ega_bangkok' },
  { photo: '/images/mee-krob.jpg',      caption: { en: 'Mee Krob e-ga · the signature', th: 'หมี่กรอบอีกา · ซิกเนเจอร์' },        postUrl: 'https://instagram.com/ega_bangkok' },
  { photo: '/images/raw-prawn.jpg',     caption: { en: 'Raw prawn, bitter melon',       th: 'กุ้งแช่น้ำปลา · มะระ' },             postUrl: 'https://instagram.com/ega_bangkok' },
  { photo: '/images/red-curry.jpg',     caption: { en: 'Spicy red curry · catfish',     th: 'แกงแดงปลาหางแดง' },                  postUrl: 'https://instagram.com/ega_bangkok' },
  { photo: '/images/river-prawn.jpg',   caption: { en: 'Shrimp · tamarind glaze',       th: 'กุ้งราดซอสมะขาม' },                  postUrl: 'https://instagram.com/ega_bangkok' },
  { photo: '/images/lab-19.jpg',        caption: { en: 'Brass pot · house table',       th: 'หม้อทองเหลือง · โต๊ะของร้าน' },       postUrl: 'https://instagram.com/ega_bangkok' },
  { photo: '/images/pineapple-chili.jpg', caption: { en: 'Pineapple + chilli salt',     th: 'สับปะรด + พริกเกลือ' },              postUrl: 'https://instagram.com/ega_bangkok' },
  { photo: '/images/hero-pot.jpg',      caption: { en: 'House spread',                  th: 'สำรับร้าน' },                         postUrl: 'https://instagram.com/ega_bangkok' },
];

export type Region = 'north' | 'isaan' | 'central' | 'east' | 'south' | 'andaman';

export const RECIPES: {
  key: string;
  dish: { en: string; th: string };
  region: Region;
  province: { en: string; th: string };
  blurb: { en: string; th: string };
  price?: string;
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
    mapX: 48, mapY: 62,
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
    mapX: 41, mapY: 116,
  },
  {
    key: 'raw-prawn',
    dish: { en: 'Raw prawn, bitter melon, green chili relish', th: 'กุ้งแช่น้ำปลา · มะระ · น้ำจิ้มซีฟู้ดเขียว' },
    region: 'south',
    province: { en: 'Southern Thailand', th: 'ปักษ์ใต้' },
    blurb: {
      en: 'Raw river prawn over thin-cut bitter melon, a bright green-chilli-garlic seafood relish, quail eggs and mint. Spicy, fresh, addictive.',
      th: 'กุ้งสดวางบนมะระหั่นบาง · น้ำจิ้มซีฟู้ดเขียวจัดจ้าน · ไข่นกกระทา · ใบสะระแหน่',
    },
    mapX: 43, mapY: 108,
    photo: '/images/raw-prawn.jpg',
  },
  {
    key: 'tamarind-shrimp',
    dish: { en: 'Shrimp in tamarind sauce', th: 'กุ้งราดซอสมะขาม' },
    region: 'central',
    province: { en: 'Central plain', th: 'ภาคกลาง' },
    blurb: {
      en: 'Pan-fried prawns glazed in a sweet-sour tamarind reduction with fried shallot. Thai-Chinese kitchen staple, dialled up.',
      th: 'กุ้งทอดราดซอสมะขามหวาน-เปรี้ยว โรยหอมแดงเจียว · จานไทย-จีน ฉบับเข้มข้น',
    },
    mapX: 47, mapY: 55,
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
    mapX: 41, mapY: 100,
  },
  {
    key: 'red-curry',
    dish: { en: 'Spicy red curry · Asian red-tail catfish', th: 'แกงแดง · ปลาหางแดง' },
    region: 'central',
    province: { en: 'Central plain', th: 'ภาคกลาง' },
    blurb: {
      en: 'A brass pot of red curry — catfish, pumpkin, pea-eggplant, holy basil. Samurai Gourmet flagged this one specifically.',
      th: 'แกงแดงเสิร์ฟในหม้อทองเหลือง · ปลาหางแดง ฟักทอง มะเขือพวง โหระพา · Samurai Gourmet เลือกจานนี้',
    },
    mapX: 50, mapY: 60,
    photo: '/images/red-curry.jpg',
  },
  {
    key: 'minced-pork',
    dish: { en: 'Southern minced pork (kua kling)', th: 'คั่วกลิ้งหมูใต้' },
    region: 'south',
    province: { en: 'Southern Thailand', th: 'ปักษ์ใต้' },
    blurb: {
      en: 'Dry-fried curry, deep heat, ground southern aromatics. The room temperature rises a little.',
      th: 'คั่วกลิ้งแห้ง รสเผ็ดลึก เครื่องแกงใต้แท้ — ห้องจะร้อนขึ้นนิดหนึ่ง',
    },
    mapX: 44, mapY: 112,
  },
];

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
      name: { en: 'Raw prawn, bitter melon, green relish', th: 'กุ้งแช่น้ำปลา · มะระ' },
      desc: { en: 'Raw prawn, bitter-melon slices, green seafood relish, quail eggs.', th: 'กุ้งสด · มะระหั่นบาง · น้ำจิ้มซีฟู้ดเขียว · ไข่นกกระทา' },
      price: '— ask',
    },
  ],
  larger: [
    { name: { en: 'Stewed pork with salted egg', th: 'หมูตุ๋นไข่เค็ม' }, price: '฿220' },
    { name: { en: 'Fried snakehead with fish sauce', th: 'ปลาช่อนทอดน้ำปลา' }, price: '฿490' },
    { name: { en: 'Spicy red curry · Asian red-tail catfish', th: 'แกงแดงปลาหางแดง' } },
    { name: { en: 'Shrimp in tamarind sauce', th: 'กุ้งราดซอสมะขาม' } },
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
    headline: { en: '"Thai neighbourhood cooking — recipes from communities, Lamplaimat to Song Wat."', th: '"อาหารชุมชน · จากลำปลายมาศถึงทรงวาด"' },
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

/**
 * SOURCES — every fact on the site, paired with its press URL. Powers
 * the /sources appendix page. The owner can hand this to anyone who asks
 * "is this real?" and the answer is one click away.
 */
export const SOURCES = [
  { claim: 'e-ga is in the It\'s Happened to be a Closet family',                publication: 'BK Magazine',           url: 'https://www.bkmagazine.com/restaurants/bangkok-restaurant-reviews/its-happened-be-closet-0/' },
  { claim: 'Founder: Siriwan Tharananithikul (designer, Closet)',                  publication: 'BK Magazine',           url: 'https://www.bkmagazine.com/restaurants/bangkok-restaurant-reviews/its-happened-be-closet-0/' },
  { claim: '829 Song Wat Rd address',                                              publication: 'Samurai Gourmet',       url: 'https://samurai-gourmet.com/2022/08/17/ega-one-of-the-best-thai-restaurant-in-bangkok/' },
  { claim: 'Three branches: Song Wat / Sathorn 12 / Sukhumvit 23',                 publication: 'Linktree @egabangkok',  url: 'https://linktr.ee/egabangkok' },
  { claim: 'Mee Krob e-ga · ฿220 · signature',                                     publication: 'Thai Airways Sawasdee', url: 'https://sawasdee.thaiairways.com/8-spots-song-wat/' },
  { claim: 'Pla Muek Nam Dum Manao · Krabi squid · black ink',                     publication: 'Thai Airways Sawasdee', url: 'https://sawasdee.thaiairways.com/8-spots-song-wat/' },
  { claim: 'Raw prawn salad, river prawn, mi krop highly recommended',             publication: 'Samurai Gourmet',       url: 'https://samurai-gourmet.com/2022/08/17/ega-one-of-the-best-thai-restaurant-in-bangkok/' },
  { claim: 'Spicy red curry · Asian red-tail catfish',                              publication: 'Samurai Gourmet',       url: 'https://samurai-gourmet.com/2022/08/17/ega-one-of-the-best-thai-restaurant-in-bangkok/' },
  { claim: 'Shrimp in tamarind sauce among recommendations',                       publication: 'Samurai Gourmet',       url: 'https://samurai-gourmet.com/2022/08/17/ega-one-of-the-best-thai-restaurant-in-bangkok/' },
  { claim: 'Toddy-palm + chocolate meringue pie · ฿180',                            publication: 'Foodplacee review',     url: 'https://e-ga-lab.menufyy.com/' },
  { claim: 'Daily 08:00–22:00 hours',                                              publication: 'Foodplacee',            url: 'https://e-ga-lab.menufyy.com/' },
  { claim: '4.1★ over 749 reviews · Google',                                       publication: 'Foodplacee (Google)',   url: 'https://e-ga-lab.menufyy.com/' },
  { claim: 'Hero photo: e-ga Luv Seafood window with mascot illustrations',        publication: 'Thai Airways Sawasdee', url: 'https://sawasdee.thaiairways.com/8-spots-song-wat/' },
  { claim: 'A Pink Rabbit Cake Shop · bakery inside e-ga LAB',                      publication: 'Wanderlog',             url: 'https://wanderlog.com/place/details/2289187/e-ga-lab' },
  { claim: 'A Pink Rabbit + Bob · Sukhumvit 23',                                    publication: 'Facebook · live page',  url: 'https://www.facebook.com/apinkrabbitandbob23/' },
  { claim: 'The Closet · multi-use venue, takes private events',                    publication: 'BK Magazine',           url: 'https://www.bkmagazine.com/restaurants/bangkok-restaurant-reviews/its-happened-be-closet-0/' },
  { claim: 'Song Wat: 40 coolest neighbourhoods in the world (2023)',              publication: 'Time Out',              url: 'https://www.timeout.com/bangkok/attractions/your-ultimate-guide-to-song-wat-road' },
  { claim: 'e-ga Luv Seafood · sister concept, 200m from the original',            publication: 'Thai Airways Sawasdee', url: 'https://sawasdee.thaiairways.com/8-spots-song-wat/' },
  { claim: 'LINE OA reservation channel for every branch',                          publication: 'Linktree @egabangkok',  url: 'https://linktr.ee/egabangkok' },
  { claim: 'Read The Cloud editorial: "Lamplaimat to Song Wat"',                    publication: 'Read The Cloud',        url: 'https://readthecloud.co/ega-bangkok/' },
];

export const COPY = {
  nav: {
    items: [
      { href: '#story',     label: { en: 'Story',     th: 'เรื่องราว' } },
      { href: '#map',       label: { en: 'Map',       th: 'แผนที่' } },
      { href: '#menu',      label: { en: 'Menu',      th: 'เมนู' } },
      { href: '#branches',  label: { en: 'Branches',  th: 'สาขา' } },
      { href: '#bakery',    label: { en: 'Bakery',    th: 'เบเกอรี่' } },
      { href: '#events',    label: { en: 'Events',    th: 'จัดงาน' } },
      { href: '#press',     label: { en: 'Press',     th: 'สื่อ' } },
    ],
    reserve: { en: 'Reserve', th: 'จองโต๊ะ' },
  },

  hero: {
    eyebrow: {
      en: 'Song Wat · Sathorn 12 · Sukhumvit 23',
      th: 'ทรงวาด · สาทร 12 · สุขุมวิท 23',
    },
    title:        { en: 'Local breakfast,',   th: 'กินเช้า' },
    titleAccent:  { en: 'from across Thailand.', th: 'จากทั่วไทย' },
    body: {
      en: "A regional-Thai kitchen — recipes from communities across the country, Lamplaimat to Song Wat, Krabi to Sukhumvit — in the family of อิส_แฮพ_เพ่น (It's Happened to be a Closet).",
      th: 'ครัวไทยภูมิภาค · สูตรจากชุมชนทั่วประเทศ · ลำปลายมาศถึงทรงวาด · กระบี่ถึงสุขุมวิท · ในเครืออิส_แฮพ_เพ่น',
    },
    ctaReserve: { en: 'Reserve via LINE', th: 'จองผ่าน LINE' },
    ctaScroll:  { en: 'The recipe map ↓', th: 'ดูแผนที่สูตรลับ ↓' },
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

    founderRole: {
      en: 'Siriwan Tharananithikul · designer, It\'s Happened to be a Closet',
      th: 'ศิริวรรณ ธารานันทิกุล · ดีไซเนอร์เครืออิส_แฮพ_เพ่น',
    },
    founderEthos: {
      en: 'Born from the same designer who built the Closet family — same eye, same hand, now turned to the regional table.',
      th: 'จากดีไซเนอร์คนเดียวกับ Closet — สายตาเดิม มือเดิม ทีนี้หันมาทำสำรับภูมิภาค',
    },
  },

  map: {
    eyebrow: { en: 'The recipe map', th: 'แผนที่สูตรลับ' },
    title:   { en: 'Seven dishes. Seven provinces.', th: 'เจ็ดจาน · เจ็ดจังหวัด' },
    instr:   { en: 'Scroll the map — each region lights up as the kitchen tells its story.', th: 'เลื่อนแผนที่ · แต่ละภูมิภาคจะสว่างขึ้นทีละจาน' },
  },

  menu: {
    eyebrow: { en: 'The menu', th: 'เมนู' },
    title:   { en: 'House plates, made for sharing.', th: 'จานในร้าน · ไว้แชร์กัน' },
    intro:   { en: 'Most plates ฿200 – ฿400 · the regular menu is fixed; specials change with the kitchen.', th: 'จานส่วนใหญ่ ฿200 – ฿400 · เมนูประจำคงที่ ของพิเศษเปลี่ยนตามครัว' },
    signatureLabel: { en: 'Signatures',  th: 'จานเด่น' },
    plateLabel:     { en: 'From the kitchen', th: 'จากครัว' },
    dessertLabel:   { en: 'Desserts (the queue is for these)', th: 'ของหวาน (คนรอเพราะของหวาน)' },
    drinkLabel:     { en: 'Drinks',     th: 'เครื่องดื่ม' },
    dessertCTA:     { en: 'Pre-order today\'s cake on LINE →', th: 'จองเค้กของวันนี้ผ่าน LINE →' },
  },

  branches: {
    eyebrow: { en: 'Three branches', th: 'สามสาขา' },
    title:   { en: 'Find your e-ga.', th: 'หาอีกาของคุณ' },
    sisterLabel: { en: 'Sister — 200m away', th: 'น้องสาว · 200 เมตรเดิน' },
  },

  bakery: {
    eyebrow: { en: 'Also from the Closet family', th: 'ในเครือเดียวกัน' },
    title:   { en: 'A Pink Rabbit Cake Shop.', th: 'A Pink Rabbit · เค้กชอป' },
  },

  ig: {
    eyebrow: { en: 'Latest on Instagram', th: 'อินสตาแกรมล่าสุด' },
    title:   { en: 'From the kitchen, this week.', th: 'จากครัวอีกา สัปดาห์นี้' },
    cta:     { en: 'Follow @ega_bangkok →', th: 'ติดตาม @ega_bangkok →' },
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
