/** 多言語（ja / en）の共通ヘルパーと UI 文言辞書。 */

export const LANGUAGES = ['ja', 'en'] as const;
export type Lang = (typeof LANGUAGES)[number];
export const DEFAULT_LANG: Lang = 'ja';

export const LANG_META: Record<
  Lang,
  { label: string; short: string; htmlLang: string; ogLocale: string; prefix: string }
> = {
  ja: { label: '日本語', short: 'JA', htmlLang: 'ja', ogLocale: 'ja_JP', prefix: '' },
  en: { label: 'English', short: 'EN', htmlLang: 'en', ogLocale: 'en_US', prefix: '/en' },
};

/** URL パスから言語を判定（/en/... が英語、それ以外は日本語）。 */
export const getLangFromPath = (pathname: string): Lang =>
  pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'ja';

/** 言語プレフィックスを除いた「素のパス」を返す（/en/access/ → /access/）。 */
export const stripLang = (path: string): string => {
  const withSlash = path.startsWith('/') ? path : `/${path}`;
  const removed = withSlash.replace(/^\/en(?=\/|$)/, '');
  return removed === '' ? '/' : removed.endsWith('/') ? removed : `${removed}/`;
};

/** 任意のパスを指定言語の URL に変換（末尾スラッシュ維持）。 */
export const withLang = (path: string, lang: Lang): string => {
  const base = stripLang(path); // '/', '/access/'
  if (lang === 'ja') return base;
  return base === '/' ? '/en/' : `/en${base}`;
};

/** 翻訳版を用意していない共用ページ（ツール系）。言語切替時も同じ URL を使う。 */
const SHARED_PATHS = ['/plan/', '/memory-card/'];

/** 他言語版の URL を返す。翻訳が無い共用ページは同一 URL。 */
export const alternateHref = (path: string, lang: Lang): string => {
  const base = stripLang(path);
  if (SHARED_PATHS.includes(base)) return base;
  return withLang(base, lang);
};

export const navItems: Record<Lang, { href: string; label: string }[]> = {
  ja: [
    { href: '/', label: 'はじめに' },
    { href: '/access/', label: '交通・駐車場' },
    { href: '/food/', label: '周辺グルメ' },
    { href: '/nearby/', label: '周辺スポット' },
    { href: '/about/', label: '歴史・背景' },
    { href: '/plan/', label: '旅のリスト' },
    { href: '/memory-card/', label: '記念カード' },
    { href: '/faq/', label: 'FAQ' },
  ],
  en: [
    { href: '/en/', label: 'Overview' },
    { href: '/en/access/', label: 'Access & parking' },
    { href: '/en/food/', label: 'Food nearby' },
    { href: '/en/nearby/', label: 'Nearby spots' },
    { href: '/en/about/', label: 'History' },
    { href: '/plan/', label: 'Trip list' },
    { href: '/memory-card/', label: 'Memory card' },
    { href: '/en/faq/', label: 'FAQ' },
  ],
};

const ja = {
  lang: {
    switchLabel: '言語切り替え',
    ja: '日本語',
    en: 'English',
  },
  header: {
    homeAria: 'トップへ',
    mainNav: '主なページ',
    mobileNav: 'スマートフォン用ページ',
  },
  hero: {
    ctaAccess: '行き方を確認',
    ctaCard: '記念カードを作る',
    defaultAlt: '菓子屋横丁の石畳と店先',
  },
  save: {
    add: '旅リストに追加',
    saved: '保存済み',
  },
  rating: {
    eyebrow: 'USER RATING',
    title: 'Google マップの評価',
    reviewsSuffix: '件のユーザー評価',
    syncPrefix: '評価と評価件数は Google マップ（Google Maps）のユーザー評価を同期',
    viewAll: 'すべての評価を Google マップで見る',
    viewAllShort: 'Google マップで全部の評価を見る',
    official: '公式サイトを開く',
  },
  weather: {
    eyebrow: 'WEATHER',
    titleSuffix: 'の天気と過ごし方',
    localTime: '現地時間で表示',
    unavailable: '現在、天気情報を取得できません',
    feels: '体感',
    humidity: '湿度',
    wind: '風',
    next7: '今後7日間の目安',
    today: '今日',
    precip: '降水',
    celsiusNote: '気温は摂氏。降水確率はその日の最大値の目安です。',
    error: '天気情報は一時的に利用できません。時間をおいて再度ご確認ください。',
    updated: '更新',
    dress: '出行穿搭',
    plan: '游玩安排',
    items: '随身物品',
    caution: '注意',
    audienceTitle: 'あてはまる方へ',
  },
  sources: {
    title: '情報の出典（資料来源）',
    description:
      '各ページの内容は、Google マップのユーザー評価と公的機関・公式サイトの公開情報を組み合わせて整理しています。最新情報は必ず出典元でご確認ください。',
    syncedAt: '同期時期 / 参照：',
    ratingSynced: '評価 · 同期時期',
    creditsLink: '写真・情報クレジットを見る',
  },
  footer: {
    description:
      '小江戸川越の甘い香り、石畳、町家の店先をゆっくり楽しむための旅行者向けガイドです。旅のリストと記念カードは端末内だけで動きます。',
    notice:
      '本サイトは菓子屋横丁および各店舗・自治体の公式サイトではありません。旅行者向けに公開情報を整理した非公式ガイドです。',
    pages: 'ページ',
    siteInfo: 'サイト情報',
    privacy: 'プライバシー',
    credits: '写真・情報ソース',
    methodology: 'データと方法',
  },
  seasons: {
    eyebrow: 'SEASONS',
    title: '季節ごとの歩き方',
    description:
      '川越の平年気候を目安に、衣類・混雑・過ごし方の傾向をまとめました。当日の天気はページ内の天気モジュールもご参考に。',
    th: { season: '季節', climate: '気候の目安', clothes: 'おすすめの服装', crowd: '混雑傾向', tip: '過ごし方のヒント' },
  },
  services: {
    eyebrow: 'SERVICES',
    title: '访问者サービスと周辺施設',
    description:
      '特定の店舗名は挙げず、タイプ別に中立的にお伝えします。詳細は現地の案内看板や公式情報でご確認ください。',
  },
  routes: {
    eyebrow: 'ROUTES',
    title: '目的別の回り方',
    description: 'ご自身の旅の構成に合わせて、対象別ルートと、半日・全日の標準ルートから選べます。',
    audienceLabel: '対象別ルート',
    standardLabel: '標準ルート',
  },
  respect: {
    eyebrow: 'RESPECT',
    title: '訪問者の責任と思いやり',
    lead: '甘い香りの路地は、店の人と来訪者が共に守っていく場所です。小さな心づかいが、次に訪れる人の楽しみを支えます。',
  },
  events: {
    eyebrow: 'EVENTS',
    title: '季節の行事と時期の目安',
    description:
      '川越で知られている主な年中行事の目安時期です。年により日程が変わるため、必ず公式情報で最新の開催日をご確認ください。',
    th: { name: '行事', period: '時期の目安', note: '混雑・備考' },
    verify: '日程は年により変動します。訪問前に必ず主催者・自治体の公式発表をご確認ください。',
  },
  accessibility: {
    eyebrow: 'ACCESSIBILITY',
    title: 'アクセシビリティと配慮',
    description:
      '石畳の細い路地という立地上の注意点と、負担を減らすための現実的な工夫をまとめました。',
  },
  common: {
    mapTitle: 'Google マップ',
    officialSite: '公式サイト',
    tourism: '観光協会',
    more: 'もっと見る',
    address: '住所',
    coordinates: '座標',
    category: 'カテゴリ',
    hours: '営業時間',
    admission: '入場料',
    stay: 'おすすめ滞在',
    quiet: '混雑しにくい時間',
    googleRating: 'Google マップ評価',
  },
};

const en: typeof ja = {
  lang: {
    switchLabel: 'Language',
    ja: '日本語',
    en: 'English',
  },
  header: {
    homeAria: 'Go to top',
    mainNav: 'Main pages',
    mobileNav: 'Mobile pages',
  },
  hero: {
    ctaAccess: 'How to get here',
    ctaCard: 'Make a memory card',
    defaultAlt: 'Stone-paved lane and shopfronts of Kashiya Yokocho',
  },
  save: {
    add: 'Add to trip list',
    saved: 'Saved',
  },
  rating: {
    eyebrow: 'USER RATING',
    title: 'Google Maps rating',
    reviewsSuffix: 'user ratings',
    syncPrefix: 'Rating and review count synced from Google Maps user ratings',
    viewAll: 'See all ratings on Google Maps',
    viewAllShort: 'See all ratings on Google Maps',
    official: 'Open official site',
  },
  weather: {
    eyebrow: 'WEATHER',
    titleSuffix: ' weather and how to spend it',
    localTime: 'Shown in local time',
    unavailable: 'Weather data is currently unavailable',
    feels: 'Feels like',
    humidity: 'Humidity',
    wind: 'Wind',
    next7: 'Next 7 days',
    today: 'Today',
    precip: 'Rain',
    celsiusNote: 'Temperatures in Celsius. Rain chance is the daily maximum.',
    error: 'Weather information is temporarily unavailable. Please check back later.',
    updated: 'Updated',
    dress: 'What to wear',
    plan: 'How to plan',
    items: 'What to bring',
    caution: 'Caution',
    audienceTitle: 'By traveller type',
  },
  sources: {
    title: 'Information sources',
    description:
      'Each page combines Google Maps user ratings with publicly available information from authorities and official sites. Always confirm details at the source.',
    syncedAt: 'Synced / checked: ',
    ratingSynced: 'Rating · synced',
    creditsLink: 'See photo and information credits',
  },
  footer: {
    description:
      'A traveller guide for enjoying the sweet aromas, stone paving and townhouse shopfronts of Little Edo Kawagoe at an easy pace. The trip list and memory card run entirely in your browser.',
    notice:
      'This is an unofficial guide. It is not the official site of Kashiya Yokocho, its shops, or the local authorities.',
    pages: 'Pages',
    siteInfo: 'Site info',
    privacy: 'Privacy',
    credits: 'Photo & sources',
    methodology: 'Data & method',
  },
  seasons: {
    eyebrow: 'SEASONS',
    title: 'How to walk it by season',
    description:
      'Typical seasonal conditions in Kawagoe, with clothing, crowding and pacing notes. For the day itself, see the weather module on this page.',
    th: { season: 'Season', climate: 'Climate', clothes: 'What to wear', crowd: 'Crowding', tip: 'How to enjoy' },
  },
  services: {
    eyebrow: 'SERVICES',
    title: 'Visitor services and facilities',
    description:
      'Described by type rather than by named businesses, to stay neutral. Confirm details on local signage or official information.',
  },
  routes: {
    eyebrow: 'ROUTES',
    title: 'Routes by traveller type',
    description: 'Pick one of the audience routes, or follow a half-day or full-day standard route.',
    audienceLabel: 'By traveller type',
    standardLabel: 'Standard routes',
  },
  respect: {
    eyebrow: 'RESPECT',
    title: 'Visitor responsibility and care',
    lead: 'The scented lane is kept alive by shopkeepers and visitors together. Small courtesies keep it enjoyable for the next person.',
  },
  events: {
    eyebrow: 'EVENTS',
    title: 'Seasonal events and timing',
    description:
      'Approximate timing of well-known annual events in Kawagoe. Dates shift year to year, so always confirm on official sources.',
    th: { name: 'Event', period: 'When', note: 'Crowding & notes' },
    verify: 'Dates change each year. Always confirm with the organisers or the city before travelling.',
  },
  accessibility: {
    eyebrow: 'ACCESSIBILITY',
    title: 'Accessibility and practical care',
    description:
      'Notes on the narrow stone-paved lane and practical ways to reduce the physical load of your visit.',
  },
  common: {
    mapTitle: 'Google Maps',
    officialSite: 'Official site',
    tourism: 'Tourism association',
    more: 'See more',
    address: 'Address',
    coordinates: 'Coordinates',
    category: 'Category',
    hours: 'Hours',
    admission: 'Admission',
    stay: 'Suggested stay',
    quiet: 'Quieter times',
    googleRating: 'Google Maps rating',
  },
};

export const ui: Record<Lang, typeof ja> = { ja, en };

/** 指定言語の UI 文言を返す。 */
export const t = (lang: Lang = DEFAULT_LANG): typeof ja => ui[lang] ?? ui.ja;
