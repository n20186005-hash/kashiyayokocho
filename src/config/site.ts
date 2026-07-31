const trimTrailingSlash = (value: string): string => value.replace(/\/$/, '');
const configuredSiteUrl = import.meta.env.PUBLIC_SITE_URL?.trim();

export const site = {
  name: '菓子屋横丁さんぽ手帖',
  shortName: '菓子屋横丁',
  attractionName: '菓子屋横丁',
  tagline: '小江戸川越、甘い香りの石畳へ。',
  description:
    '埼玉県川越市元町の菓子屋横丁を、交通・駐車場・周辺グルメ・周辺スポット・FAQ・旅の保存リスト・ブラウザだけで作れる記念カードまでまとめた非公式ガイドです。',
  lang: 'ja',
  locale: 'ja_JP',
  url: configuredSiteUrl ? trimTrailingSlash(configuredSiteUrl) : undefined,
  ga4: 'G-HXM22WWPKP',
  address: {
    postalCode: '350-0062',
    region: '埼玉県',
    locality: '川越市',
    street: '元町2丁目',
    full: '〒350-0062 埼玉県川越市元町2丁目',
  },
  phone: '049-222-5556（川越駅観光案内所）',
  latitude: 35.9250599,
  longitude: 139.4810513,
  ratingValue: 4.1,
  reviewCount: 56,
  priceRange: '入場無料・買物は店舗ごと',
  openingHoursText: '店舗により異なります。目安は10:00〜17:00前後、休みは各店で異なります。',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3230.895414525252!2d139.4810513!3d35.9250599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018da640fe3ba7d%3A0x497dbd8ef274a0fa!2z6I-T5a2Q5bGL5qiq5LiB!5e0!3m2!1sja!2sjp!4v1785415238637!5m2!1sja!2sjp',
  heroImage: '/images/kashiya-hero.webp',
  ogImage: '/images/og-image.jpg',
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
