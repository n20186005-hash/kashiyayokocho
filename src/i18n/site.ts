import { site } from '@config/site';
import type { Lang } from './index';

/** サイト自体の説明文（言語別）。座標・URL・評価値など言語に依存しない値は @config/site を参照。 */

type SiteText = {
  name: string;
  shortName: string;
  attractionName: string;
  city: string;
  region: string;
  tagline: string;
  description: string;
  entityLead: string;
  addressFull: string;
  openingHoursText: string;
  priceRange: string;
  category: string;
  ratingSourceNote: string;
  ratingSourceNoteShort: string;
  ratingSyncedAt: string;
  govtTourismName: string;
  cityTourismName: string;
  nearbyLandmarks: string[];
};

const ja: SiteText = {
  name: '菓子屋横丁さんぽ手帖',
  shortName: '菓子屋横丁',
  attractionName: '菓子屋横丁',
  city: '川越市',
  region: '埼玉県',
  tagline: '小江戸川越、甘い香りの石畳へ。',
  description:
    '埼玉県川越市元町の菓子屋横丁を、交通・駐車場・周辺グルメ・周辺スポット・FAQ・旅の保存リスト・ブラウザだけで作れる記念カードまでまとめた非公式ガイドです。',
  entityLead:
    '菓子屋横丁（かしやよこちょう）は、埼玉県川越市元町2丁目に広がる昔菓子の横丁です。川越市の蔵造りの町並み北側に位置し、飴・せんべい・だんご・芋菓子・駄菓子を扱う店が石畳の細い路地に並びます。小江戸川越の回遊拠点として、時の鐘や蔵造りの町並みとあわせて歩かれることが多い場所です。',
  addressFull: '〒350-0062 埼玉県川越市元町2丁目11-3',
  openingHoursText: '店舗により異なります。目安は10:00〜17:00前後、休みは各店で異なります。',
  priceRange: '入場無料・買物は店舗ごと',
  category: '観光地・商店街（入場無料・買物は店舗ごと）',
  ratingSourceNote:
    'Google マップ（Google Maps）のユーザー評価を同期。同期時期：2026年9月。著作権は投稿者本人および Google マップに帰属します。',
  ratingSourceNoteShort: '評価は Google マップのユーザー評価を引用（同期時期：2026年9月）',
  ratingSyncedAt: '2026年9月',
  govtTourismName: '小江戸川越観光協会',
  cityTourismName: '川越市（観光スポット：菓子屋横丁）',
  nearbyLandmarks: ['時の鐘', '蔵造りの町並み・一番街'],
};

const en: SiteText = {
  name: 'Kashiya Yokocho Stroll Notes',
  shortName: 'Kashiya Yokocho',
  attractionName: 'Kashiya Yokocho',
  city: 'Kawagoe',
  region: 'Saitama',
  tagline: 'Little Edo Kawagoe: a stone lane that smells of sweets.',
  description:
    'An unofficial traveller guide to Kashiya Yokocho in Motomachi, Kawagoe, Saitama: access and parking, nearby food, nearby spots, FAQ, a saveable trip list, and a browser-only souvenir card maker.',
  entityLead:
    'Kashiya Yokocho is a short lane of old-fashioned sweet shops in Motomachi 2-chome, Kawagoe, Saitama. It sits just north of the kurazukuri merchant district, where shops selling candy, rice crackers, dumplings, sweet-potato sweets and classic dagashi line a narrow stone-paved alley. It is usually walked together with the Toki no Kane bell tower and the clay-walled warehouse streets of Little Edo Kawagoe.',
  addressFull: '2-11-3 Motomachi, Kawagoe, Saitama 350-0062, Japan',
  openingHoursText: 'Hours vary by shop. As a rough guide, many open around 10:00–17:00, and closing days differ.',
  priceRange: 'Free to walk; purchases per shop',
  category: 'Sightseeing spot / old sweet shop lane (free to walk; purchases per shop)',
  ratingSourceNote:
    'User rating synced from Google Maps. Synced: September 2026. Copyright belongs to the individual contributors and Google Maps.',
  ratingSourceNoteShort: 'Rating quoted from Google Maps user ratings (synced: September 2026)',
  ratingSyncedAt: 'September 2026',
  govtTourismName: 'Kawagoe Tourism Association (Little Edo Kawagoe)',
  cityTourismName: 'Kawagoe City (tourist spot: Kashiya Yokocho)',
  nearbyLandmarks: ['Toki no Kane bell tower', 'Kurazukuri warehouse district / Ichibangai'],
};

const texts: Record<Lang, SiteText> = { ja, en };

/** 指定言語のサイト説明文。 */
export const siteText = (lang: Lang = 'ja'): SiteText => texts[lang] ?? texts.ja;

/** 住所は言語で表記が変わるため、構造化データ側も言語に合わせる。 */
export const localizedAddress = (lang: Lang = 'ja') => ({
  '@type': 'PostalAddress',
  streetAddress: lang === 'en' ? 'Motomachi 2-chome 11-3' : site.address.street,
  addressLocality: lang === 'en' ? 'Kawagoe' : site.address.locality,
  addressRegion: lang === 'en' ? 'Saitama' : site.address.region,
  postalCode: site.address.postalCode,
  addressCountry: site.countryCode,
});
