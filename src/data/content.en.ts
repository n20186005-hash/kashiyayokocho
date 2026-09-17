/**
 * 英語版のコンテンツデータ（/en/ 配下のページで使用）。
 * 座標・URL・評価値など言語に依存しない値は @config/site を参照する。
 */

import { site } from '@config/site';
import { siteText } from '@i18n/site';
import { buildStructuredData, type BreadcrumbItem, type TripItem } from './content';

const st = siteText('en');

export const googleRating = {
  value: site.ratingValue,
  best: 5,
  count: site.reviewCount,
  countLabel: site.reviewCount.toLocaleString('en-US'),
  sourceName: 'Google Maps',
  sourceUrl: site.mapsShareUrl,
  syncedAt: st.ratingSyncedAt,
  note: st.ratingSourceNote,
  noteShort: st.ratingSourceNoteShort,
  scale: [1, 2, 3, 4, 5],
};

export const highlights = [
  {
    title: 'Around 30 traditional sweet shops',
    body: 'Along a narrow stone-paved lane you will find candy, rice crackers, dumplings, sweet-potato sweets and classic dagashi.',
  },
  {
    title: 'One of Japan’s 100 Fragrant Landscapes',
    body: 'The smell of scorched soy sauce, cinnamon and mint sweets is recognised as part of the identity of this lane.',
  },
  {
    title: 'Easy to fold into a Little Edo walk',
    body: 'The bell tower, the clay-walled warehouse district, the festival museum and Hikawa Shrine are all within walking distance.',
  },
];

export const visitFacts: { label: string; value: string }[] = [
  { label: 'Location', value: st.addressFull },
  { label: 'Admission', value: 'Walking the lane is free. Sweets, food and experiences are paid per shop.' },
  { label: 'Hours', value: st.openingHoursText },
  { label: 'Suggested stay', value: '30–60 minutes; allow about 90 minutes if you linger over snacks and photos.' },
  { label: 'Quieter times', value: 'Weekday mornings or just before evening. Weekends fill up from around midday.' },
  {
    label: 'Google Maps rating',
    value: `${googleRating.value} / ${googleRating.best} (${googleRating.countLabel} Google Maps user ratings, synced ${googleRating.syncedAt}. Ratings change over time.)`,
  },
];

export const foods: TripItem[] = [
  {
    id: 'kashou-umon',
    title: 'Kasho Umon (Kashiya Yokocho store)',
    category: 'Sweet-potato sweets',
    note: 'A good first stop for Kawagoe’s famous sweet-potato confections. Warm imo-style wagashi make an easy walking snack.',
    time: 'Inside the lane',
    image: '/images/kashiya-sweets.webp',
  },
  {
    id: 'matsuriku-seika',
    title: 'Matsuriku Seika candy shopfront',
    category: 'Candy & dagashi',
    note: 'Classic hard candy, mint drops and old-fashioned sweets. Small coins and a small bag make browsing easier.',
    time: 'Inside the lane',
    image: '/images/kashiya-hero.webp',
  },
  {
    id: 'bakery-rakuraku',
    title: 'Kawagoe Bakery Rakuraku',
    category: 'Bakery & light meals',
    note: 'A townhouse-style bakery near the lane entrance. Useful for a savoury break between sweet stops.',
    time: 'A few steps away',
    image: '/images/kashiya-busy.webp',
  },
  {
    id: 'vanitoy-bagel',
    title: 'VANITOY BAGEL (Kurazukuri main store)',
    category: 'Bagels & café',
    note: 'Bagels in the warehouse district — easy to take away, or use as a café break during your walk.',
    time: '5–8 min walk',
    image: '/images/kashiya-cafe.webp',
  },
  {
    id: 'ogakiku',
    title: 'Ogakiku',
    category: 'Eel, long-established lunch',
    note: 'A well-known Kawagoe eel restaurant. If you want it as your main lunch, move early to avoid queues.',
    time: '8–10 min walk',
    image: '/images/kashiya-street.webp',
  },
  {
    id: 'daikoku',
    title: 'Daikoku (Kashiya Yokocho store)',
    category: 'Japanese cuisine & eel',
    note: 'A sit-down option close to the lane when you want a proper meal rather than another sweet.',
    time: '1–3 min walk',
    image: '/images/kashiya-noren.webp',
  },
];

export const nearbySpots: TripItem[] = [
  {
    id: 'toki-no-kane',
    title: 'Toki no Kane (bell tower)',
    category: 'Symbol of Kawagoe',
    note: 'A wooden bell tower in the warehouse district. It rings four times a day and pairs naturally with the sweet lane.',
    time: '4 min walk',
    image: '/images/kashiya-street.webp',
  },
  {
    id: 'kawagoe-ichibangai',
    title: 'Kurazukuri warehouse district / Ichibangai',
    category: 'Town walking',
    note: 'The heart of Little Edo, lined with heavy clay-walled merchant houses, shops and photo spots.',
    time: '4–6 min walk',
    image: '/images/kashiya-hero.webp',
  },
  {
    id: 'festival-museum',
    title: 'Kawagoe Matsuri Kaikan',
    category: 'History & culture',
    note: 'Floats and materials from the Kawagoe festival. A reliable indoor option on rainy days.',
    time: '1–2 min walk',
    image: '/images/kashiya-busy.webp',
  },
  {
    id: 'hikawa-shrine',
    title: 'Kawagoe Hikawa Shrine',
    category: 'Shrine & matchmaking',
    note: 'Known for its wind chimes and tai-shaped fortunes. Walk north from the lane for a quieter stretch.',
    time: '12–15 min walk',
    image: '/images/kashiya-cafe.webp',
  },
  {
    id: 'taisho-roman',
    title: 'Taisho Roman Yume Dori',
    category: 'Retro shopping street',
    note: 'A street that keeps a Taisho-era atmosphere — photogenic shopfronts that suit the lane’s retro mood.',
    time: '10 min walk',
    image: '/images/kashiya-noren.webp',
  },
  {
    id: 'kitain',
    title: 'Kitain Temple',
    category: 'Temple & cultural assets',
    note: 'Known locally as Kawagoe Daishi. A calm final stop if you have half a day or more.',
    time: '20 min walk',
    image: '/images/kashiya-street.webp',
  },
];

export const modelPlans = [
  {
    title: '60 minutes: scent and stone',
    points: ['Photo at the lane entrance', 'A little candy, crackers and sweet-potato sweets', 'Walk on to the bell tower for a classic shot'],
  },
  {
    title: '2 hours: sweets plus the warehouse streets',
    points: ['Snack your way down the lane', 'Festival museum or Ichibangai', 'Break at a café or bakery'],
  },
  {
    title: 'Half a day: the Little Edo circuit',
    points: ['Warehouse district from Hon-Kawagoe Station', 'Bell tower and Kashiya Yokocho', 'On to Hikawa Shrine or Kitain'],
  },
];

export const faq = [
  {
    q: 'Is there an admission fee for Kashiya Yokocho?',
    a: 'Walking the lane itself is free. You pay per shop for sweets, snacks, meals and any experiences.',
  },
  {
    q: 'What are the opening hours?',
    a: 'There is no single set of hours for the whole lane — each shop differs. As a rough guide many are open around 10:00–17:00, but closing days and sell-outs happen, so check ahead if you have a specific shop in mind.',
  },
  {
    q: 'How long should I allow?',
    a: 'Allow 30–45 minutes for photos and a little shopping, or 90 minutes to two hours if you are snacking your way through and continuing to the bell tower and warehouse streets.',
  },
  {
    q: 'Is it worth visiting in the rain?',
    a: 'It is an outdoor lane, so you will need an umbrella, but you can still do a short loop looking at shopfronts. In heavy rain, combine it with indoor stops such as the festival museum, a café or a bakery.',
  },
  {
    q: 'Is there parking?',
    a: 'Do not count on a large dedicated car park for the lane. Plan around Kawagoe city tourist car parks or nearby coin parking. Weekends get congested around Ichibangai, so arrive early or use public transport.',
  },
  {
    q: 'Is it suitable for children?',
    a: 'Yes — candy, dagashi and rice crackers are easy wins with children. The lane is narrow and crowds quickly, so avoid peak times if you are pushing a stroller.',
  },
  {
    q: 'Can I pay by card?',
    a: 'It varies by shop. Some are small, old-fashioned businesses, so carrying a little cash is wise.',
  },
  {
    q: 'Are the trip list and memory card saved to a server?',
    a: 'No. The trip list lives in your browser’s localStorage, and the memory card photo compositing happens on your device only. Nothing is uploaded.',
  },
];

export const sources = [
  {
    kind: 'Rating',
    title: `${st.attractionName} Google Maps rating`,
    syncedAt: googleRating.syncedAt,
    memo: `${googleRating.value} / 5 from ${googleRating.countLabel} ratings. Synced: ${googleRating.syncedAt}. Copyright belongs to the individual contributors and Google Maps.`,
    url: site.mapsShareUrl,
    linkLabel: 'See all ratings on Google Maps',
  },
  {
    kind: 'Official',
    title: `${st.attractionName} official site`,
    syncedAt: 'Checked as needed',
    memo: 'The official guide to the lane. Confirm hours and shop details here and on each shop’s own notices.',
    url: site.officialUrl,
    linkLabel: 'Open the official site',
  },
  {
    kind: 'City',
    title: st.cityTourismName,
    syncedAt: 'Checked as needed',
    memo: 'Kawagoe City tourism page used to confirm location, history, the Fragrant Landscape selection and shop count.',
    url: site.cityTourismUrl,
    linkLabel: 'Open the Kawagoe City page',
  },
  {
    kind: 'Tourism body',
    title: st.govtTourismName,
    syncedAt: 'Checked as needed',
    memo: 'The local tourism association portal used to confirm nearby spots and walking routes.',
    url: site.govtTourismUrl,
    linkLabel: 'Open the tourism association page',
  },
];

export const tripSeedItems: TripItem[] = [
  { id: 'kashiya-yokocho', title: st.attractionName, category: 'Main', note: 'A little candy, crackers, dumplings and sweet-potato sweets.' },
  ...nearbySpots.slice(0, 4),
  ...foods.slice(0, 4),
];

export const seasons = [
  {
    name: 'Spring',
    months: 'Mar–May',
    climate: 'Comfortable, especially around the cherry blossom period. Daytime is often around 15–22°C, with cool mornings and evenings.',
    clothes: 'A light layer. A folding umbrella is useful for light rain.',
    crowd: 'Weekends get busy in the school and outing season.',
    tip: 'Walk the lane before midday alongside the warehouse district for easier photos.',
  },
  {
    name: 'Summer',
    months: 'Jun–Aug',
    climate: 'From the rainy season into real heat. Humidity is high and days above 30°C are common.',
    clothes: 'Breathable clothing, a hat, drinks. Sun protection on bright days.',
    crowd: 'Very crowded during festival and fireworks periods, and busy into the evening.',
    tip: 'Build indoor sweet shops into the route, hydrate often, and carry rain gear for sudden showers.',
  },
  {
    name: 'Autumn',
    months: 'Sep–Nov',
    climate: 'Often the most comfortable season for sightseeing, with plenty of clear days.',
    clothes: 'Long sleeves plus a light layer for cool mornings and evenings.',
    crowd: 'Lively even on weekdays during the outing season.',
    tip: 'The stone paving and clay walls photograph beautifully — ideal for slow snacking and photography.',
  },
  {
    name: 'Winter',
    months: 'Dec–Feb',
    climate: 'Cold; even on clear days it can drop below 5°C, with occasional snow or icy patches.',
    clothes: 'Warm coat, gloves, warm shoes. Hot sweets indoors help.',
    crowd: 'Busy over New Year and during illuminations, but quieter on ordinary weekdays.',
    tip: 'Choose warm treats such as red bean or sweet-potato sweets, and split your visit into shorter loops.',
  },
];

export const services = [
  {
    icon: '🚻',
    title: 'Toilets',
    body: 'There are public toilets around the lane and in the warehouse district. Tourist information centres and larger visitor facilities tend to have better baby-changing and accessible facilities.',
  },
  {
    icon: '🅿️',
    title: 'Parking',
    body: 'Large dedicated parking for the lane is limited. Plan around city tourist car parks and coin parking near stations and shopping streets, and walk rather than driving into narrow lanes.',
  },
  {
    icon: '🍡',
    title: 'Food & drink',
    body: 'Sweets, light meals, Japanese restaurants and cafés all keep different hours and closing days. If you have a target shop, check its notices or official information that day.',
  },
  {
    icon: '🏨',
    title: 'Accommodation',
    body: 'Kawagoe has inns, business hotels and guesthouses, all within an easy train or bus ride of the lane.',
  },
  {
    icon: '🏪',
    title: 'Shopping',
    body: 'Convenience stores and supermarkets cluster around the stations — handy for supplies and for buying rain gear. Inside the lane, shops focus on sweets and souvenirs.',
  },
  {
    icon: '⛽',
    title: 'Fuel & charging',
    body: 'Petrol stations sit along the main roads. For EV charging, check facilities at station-area commercial sites and tourist car parks before you set off.',
  },
  {
    icon: '💴',
    title: 'Cash & ATMs',
    body: 'Many shops in the area take cash, and small coins make browsing easier. Banks and convenience-store ATMs nearby let you withdraw before you arrive.',
  },
  {
    icon: '🍼',
    title: 'Nursing & rest',
    body: 'Travelling with infants, the rest and nursing spaces at tourist information centres are the reliable option. Benches and covered rest points built into your route reduce fatigue.',
  },
];

export const audienceRoutes = [
  {
    icon: '🧸',
    title: 'Families with children',
    lead: 'Keep distances short and mix sweets with rest stops.',
    points: [
      'Walk from Hon-Kawagoe Station through the warehouse district in stages',
      'Buy small amounts of candy, dumplings and sweet-potato sweets',
      'Build in rest points with public toilets and benches',
      'Set a time limit and pick “today’s one treat” to avoid over-buying',
    ],
  },
  {
    icon: '📷',
    title: 'Photography & atmosphere',
    lead: 'Aim for good light and thinner crowds to capture the stone and clay textures.',
    points: [
      'Shoot the lane on weekdays around opening and closing times',
      'Walk the bell tower and warehouse streets with the light behind you',
      'Wet stone after rain reflects beautifully — worth targeting',
      'Hands holding snacks and shop curtains add variety to your frames',
    ],
  },
  {
    icon: '♿',
    title: 'Low stamina / step-free needs',
    lead: 'Use parking or the bus near the station and rest as you go.',
    points: [
      'Take the bus from Kawagoe Station to the Kashiya Yokocho stop to minimise walking',
      'Use coin parking for a short walk to the entrance',
      'Use indoor sweet shops and information centres as rest bases',
      'Plan several short visits rather than one long one',
    ],
  },
];

export const standardRoutes = [
  {
    icon: '🌗',
    title: 'Half day (about 3 hours)',
    body: 'Snack through Kashiya Yokocho → hear and photograph the bell tower → stroll the warehouse district and Ichibangai. With a car, return to the tourist car park.',
  },
  {
    icon: '🌕',
    title: 'Full day (about 6 hours)',
    body: 'The lane and warehouse district in the morning, Japanese or eel lunch nearby, then Hikawa Shrine or a museum in the afternoon — a full Little Edo circuit.',
  },
];

export const responsibilities = [
  {
    icon: '🗑️',
    title: 'Take your litter with you',
    body: 'The lane is narrow and busy. Use the bins at shops and visitor facilities, or carry your wrappers and containers out with you.',
  },
  {
    icon: '🌸',
    title: 'Protect the scent and the view',
    body: 'The quality that earned this lane a place among Japan’s 100 Fragrant Landscapes depends on the shops and on visitor manners. When photographing shopfronts and paving, keep the passage clear.',
  },
  {
    icon: '🚶',
    title: 'Walking manners',
    body: 'Vehicles and pedestrians share a tight space. Give others room with large bags or strollers, and step aside when you stop.',
  },
  {
    icon: '📖',
    title: 'Enjoy the background',
    body: `${st.attractionName} grew out of a lane where confectioners gathered in the Taisho era. Knowing each shop’s history and the “fragrant landscape” idea deepens the walk.`,
  },
];

export const events = [
  {
    name: 'Kawagoe Matsuri (Kawagoe Hikawa Festival)',
    period: 'Around the third Sunday of October',
    note: 'The heaviest crowds of the year. The float procession is a UNESCO intangible cultural heritage event, with traffic restrictions.',
  },
  {
    name: 'Kawagoe Hikawa Shrine Wind Chime Festival',
    period: 'Roughly early July to early September',
    note: 'Edo-style wind chimes on display. The shrine and surroundings are livelier in the evening.',
  },
  {
    name: 'Kawagoe Hyakumanto Summer Festival',
    period: 'Roughly late July',
    note: 'Lanterns and stage events; the area gets busier after dark.',
  },
  {
    name: 'Cherry blossoms along the Shin-Kashi River',
    period: 'Roughly late March to early April',
    note: 'Bloom timing shifts each year. Kawagoe as a whole is busy at weekends.',
  },
  {
    name: 'New Year shrine visits (Hikawa Shrine and others)',
    period: 'Roughly 1–3 January',
    note: 'Roads and buses are congested. Many shops in the lane close on New Year’s Day.',
  },
  {
    name: 'Winter illuminations',
    period: 'Roughly late November to December',
    note: 'Best enjoyed after dark. Dress for the cold.',
  },
];

/** 英語ページ用の構造化データ（日本語版ビルダーに lang=en と英語 FAQ を渡す）。 */
export const buildStructuredDataEn = (
  path = '/en/',
  pageTitle?: string,
  pageDescription?: string,
  breadcrumb?: BreadcrumbItem[],
) => buildStructuredData(path, pageTitle, pageDescription, breadcrumb, 'en', faq);

export const accessibility = [
  {
    icon: '🪨',
    title: 'Stone paving and steps',
    body: 'The lane is a narrow stone-paved alley with uneven surfaces. Wheelchair users, pushchairs and anyone with a walking stick should take it slowly and avoid peak crowding.',
  },
  {
    icon: '🚏',
    title: 'Shorten the walking',
    body: 'Taking the bus from Kawagoe Station to the Kashiya Yokocho stop keeps walking to a minimum. Check step-free access for the stop with the operator.',
  },
  {
    icon: '🚻',
    title: 'Toilets and rest',
    body: 'Alongside public toilets, accessible toilets at tourist information centres and large visitor facilities are the reliable option. Benches and covered rest points help a lot.',
  },
  {
    icon: '👶',
    title: 'With babies and toddlers',
    body: 'A carrier can be easier than a pushchair when it is crowded. For nursing and nappy changes, information centres and large facilities are the practical answer.',
  },
  {
    icon: '🐕',
    title: 'Assistance dogs',
    body: 'Assistance dogs (guide, hearing and service dogs) are permitted in public spaces. Entering individual shops is at each shop’s discretion.',
  },
  {
    icon: '🆘',
    title: 'If you need help',
    body: 'For feeling unwell or losing someone, ask at the tourist information centre or a nearby shop. In an emergency dial 119 (fire/ambulance) or 110 (police).',
  },
];
