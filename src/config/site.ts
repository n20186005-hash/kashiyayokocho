const trimTrailingSlash = (value: string): string => value.replace(/\/$/, '');
const configuredSiteUrl = import.meta.env.PUBLIC_SITE_URL?.trim();

export const site = {
  /** 单景点 SEO 实体绑定：域名 */
  domain: 'kashiyayokocho.com',
  name: '菓子屋横丁さんぽ手帖',
  shortName: '菓子屋横丁',
  /** 景点官方全称 */
  attractionName: '菓子屋横丁',
  /** 罗马字别名，用于实体语义绑定 */
  attractionLatinName: 'Kashiya Yokocho',
  /** 所在城市 / 省（都道府县） / 国家 */
  city: '川越市',
  region: '埼玉県',
  country: '日本',
  countryCode: 'JP',
  tagline: '小江戸川越、甘い香りの石畳へ。',
  description:
    '埼玉県川越市元町の菓子屋横丁を、交通・駐車場・周辺グルメ・周辺スポット・FAQ・旅の保存リスト・ブラウザだけで作れる記念カードまでまとめた非公式ガイドです。',
  entityLead:
    '菓子屋横丁（かしやよこちょう）は、埼玉県川越市元町2丁目に広がる昔菓子の横丁です。川越市の蔵造りの町並み北側に位置し、飴・せんべい・だんご・芋菓子・駄菓子を扱う店が石畳の細い路地に並びます。小江戸川越の回遊拠点として、時の鐘や蔵造りの町並みとあわせて歩かれることが多い場所です。',
  lang: 'ja',
  locale: 'ja_JP',
  url: configuredSiteUrl ? trimTrailingSlash(configuredSiteUrl) : 'https://kashiyayokocho.com',
  ga4: 'G-HXM22WWPKP',
  address: {
    postalCode: '350-0062',
    region: '埼玉県',
    locality: '川越市',
    street: '元町2丁目11-3',
    full: '〒350-0062 埼玉県川越市元町2丁目11-3',
  },
  phone: '049-222-5556（川越駅観光案内所）',
  latitude: 35.9250599,
  longitude: 139.4810513,
  /** 最新评分：Google マップのユーザー評価（2026年9月時点） */
  ratingValue: 3.9,
  reviewCount: 9689,
  ratingSourceName: 'Google マップ（Google Maps）',
  /** 评价来源说明（页面展示用，评价内容不进入 JSON-LD） */
  ratingSourceNote:
    'Google マップ（Google Maps）のユーザー評価を同期。同期時期：2026年9月。著作権は投稿者本人および Google マップに帰属します。',
  ratingSourceNoteShort: '評価は Google マップのユーザー評価を引用（同期時期：2026年9月）',
  ratingSyncedAt: '2026年9月',
  priceRange: '入場無料・買物は店舗ごと',
  openingHoursText: '店舗により異なります。目安は10:00〜17:00前後、休みは各店で異なります。',
  /** Google マップ共有短鏈 */
  mapsShareUrl: 'https://maps.app.goo.gl/SMn7uqyGGwCDC49x5',
  /** 景点官方站点 */
  officialUrl: 'https://kashiyayokocho.com/',
  /** 当地政府 / 官方旅游局 */
  govtTourismUrl: 'https://koedo.or.jp/',
  govtTourismName: '小江戸川越観光協会',
  cityTourismUrl: 'https://www.city.kawagoe.saitama.jp/kanko/k-spots/1011557/1011568.html',
  cityTourismName: '川越市（観光スポット：菓子屋横丁）',
  /** 周边核心地标 */
  nearbyLandmarks: ['時の鐘', '蔵造りの町並み・一番街'],
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3230.895414525252!2d139.4810513!3d35.9250599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018da640fe3ba7d%3A0x497dbd8ef274a0fa!2z6I-T5a2Q5bGL5qiq5LiB!5e0!3m2!1sja!2sjp!4v1785415238637!5m2!1sja!2sjp',
  heroImage: '/images/kashiya-hero.webp',
  ogImage: '/images/og-image.jpg',
  themeColor: '#3f281b',
  background: '#fff8ea',
};

export const navItems = [
  { href: '/', label: 'はじめに' },
  { href: '/access/', label: '交通・駐車場' },
  { href: '/food/', label: '周辺グルメ' },
  { href: '/nearby/', label: '周辺スポット' },
  { href: '/plan/', label: '旅のリスト' },
  { href: '/memory-card/', label: '記念カード' },
  { href: '/faq/', label: 'FAQ' },
] as const;

export const absoluteUrl = (path = '/'): string => {
  if (path.startsWith('http')) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return site.url ? `${site.url}${normalized}` : normalized;
};
