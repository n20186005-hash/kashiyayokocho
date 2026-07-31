import { absoluteUrl, site } from '@config/site';

export type TripItem = {
  id: string;
  title: string;
  category: string;
  note: string;
  time?: string;
  image?: string;
};

export const highlights = [
  {
    title: '約30軒ほどの菓子屋が並ぶ横丁',
    body: '石畳の細い路地に、飴・せんべい・だんご・芋菓子・駄菓子など、昔ながらの菓子を扱う店が集まります。',
  },
  {
    title: '平成13年「かおり風景100選」選定',
    body: '醤油の焼ける香り、ニッキやハッカ飴の甘い匂い、下町風の菓子の香りが横丁の記憶をつくっています。',
  },
  {
    title: '小江戸川越の回遊に組み込みやすい',
    body: '時の鐘、蔵造りの町並み、川越まつり会館、川越氷川神社とあわせて歩きやすい立地です。',
  },
];

export const visitFacts = [
  { label: '所在地', value: site.address.full },
  { label: '入場料', value: '横丁の散策は無料。菓子・飲食・体験は店舗ごとの料金です。' },
  { label: '営業時間', value: site.openingHoursText },
  { label: 'おすすめ滞在', value: '30〜60分。食べ歩きや写真をじっくり楽しむなら90分ほど。' },
  { label: '混雑しにくい時間', value: '平日午前、または夕方前。週末は昼前後から混みやすいです。' },
  { label: '口コミ評価目安', value: '4.1 / 5（旅行口コミサイト掲載値。変動します）' },
];

export const foods: TripItem[] = [
  {
    id: 'kashou-umon',
    title: '菓匠右門 菓子屋横丁店',
    category: '芋菓子・食べ歩き',
    note: '川越名物のさつまいも菓子を探すなら候補に入れたい店。ほかほかの「いも恋」系の和菓子は散策中のおやつに向きます。',
    time: '横丁内',
    image: '/images/kashiya-sweets.webp',
  },
  {
    id: 'matsuriku-seika',
    title: '松陸製菓・飴菓子の店先',
    category: '飴・駄菓子',
    note: '横丁らしい飴玉、ハッカ、昔菓子を眺めるだけでも楽しい定番エリア。小銭と小さな袋があると買い歩きしやすいです。',
    time: '横丁内',
    image: '/images/kashiya-hero.webp',
  },
  {
    id: 'bakery-rakuraku',
    title: '川越ベーカリー 楽楽',
    category: 'パン・軽食',
    note: '菓子屋横丁入口近くの町家風ベーカリー。甘いもの続きの合間に、惣菜パンやサンド系で休憩を挟みたい時に便利です。',
    time: '徒歩すぐ',
    image: '/images/kashiya-busy.webp',
  },
  {
    id: 'vanitoy-bagel',
    title: 'VANITOY BAGEL 蔵づくり本店',
    category: 'ベーグル・カフェ',
    note: '蔵造りの町並みにあるベーグル店。テイクアウトで小江戸散策に持ち歩く、またはカフェ休憩にも使いやすい一軒です。',
    time: '徒歩約5〜8分',
    image: '/images/kashiya-cafe.webp',
  },
  {
    id: 'ogakiku',
    title: '小川菊',
    category: 'うなぎ・老舗ランチ',
    note: '川越の老舗うなぎ店として知られる名店。昼食の主役にするなら、混雑を見越して早めに動くのがおすすめです。',
    time: '徒歩約8〜10分',
    image: '/images/kashiya-street.webp',
  },
  {
    id: 'daikoku',
    title: '大穀 川越菓子屋横丁店',
    category: '和食・うなぎ',
    note: '菓子屋横丁近くで落ち着いて食事をしたい時の候補。甘味中心の散策に、しっかりした和食を組み合わせられます。',
    time: '徒歩約1〜3分',
    image: '/images/kashiya-noren.webp',
  },
];

export const nearbySpots: TripItem[] = [
  {
    id: 'toki-no-kane',
    title: '時の鐘',
    category: '川越の象徴',
    note: '蔵造りの町並みに立つ木造の鐘楼。1日4回の鐘の音と写真を狙うなら、菓子屋横丁とセットで歩きたい場所です。',
    time: '徒歩約4分',
    image: '/images/kashiya-street.webp',
  },
  {
    id: 'kawagoe-ichibangai',
    title: '蔵造りの町並み・一番街',
    category: '町歩き',
    note: '重厚な蔵造り建築が連なる小江戸の中心。雑貨、食べ歩き、写真をまとめて楽しめます。',
    time: '徒歩約4〜6分',
    image: '/images/kashiya-hero.webp',
  },
  {
    id: 'festival-museum',
    title: '川越まつり会館',
    category: '歴史・文化施設',
    note: '川越まつりの山車や資料に触れられる施設。天候が悪い日にも組み込みやすい屋内スポットです。',
    time: '徒歩約1〜2分',
    image: '/images/kashiya-busy.webp',
  },
  {
    id: 'hikawa-shrine',
    title: '川越氷川神社',
    category: '神社・縁結び',
    note: '風鈴や鯛みくじでも知られる川越の人気神社。横丁から北へ歩き、静かな時間を足すのに向いています。',
    time: '徒歩約12〜15分',
    image: '/images/kashiya-cafe.webp',
  },
  {
    id: 'taisho-roman',
    title: '大正浪漫夢通り',
    category: 'レトロ商店街',
    note: '大正期の雰囲気を残す通り。カフェや店構えが写真に映え、横丁のレトロ感と相性が良いです。',
    time: '徒歩約10分',
    image: '/images/kashiya-noren.webp',
  },
  {
    id: 'kitain',
    title: '喜多院',
    category: '寺院・文化財',
    note: '川越大師として親しまれる寺院。半日以上の川越散策なら、最後にゆったり回る候補です。',
    time: '徒歩約20分',
    image: '/images/kashiya-street.webp',
  },
];

export const modelPlans = [
  {
    title: '60分：香りと石畳だけ味わう',
    points: ['菓子屋横丁入口で写真', '飴・せんべい・芋菓子を少しずつ', '時の鐘へ歩いて小江戸らしい一枚'],
  },
  {
    title: '2時間：甘味＋蔵造り散歩',
    points: ['菓子屋横丁で食べ歩き', '川越まつり会館または一番街', 'カフェかベーカリーで休憩'],
  },
  {
    title: '半日：川越の定番を一筆書き',
    points: ['本川越駅から蔵造りの町並み', '時の鐘・菓子屋横丁', '川越氷川神社または喜多院まで足を延ばす'],
  },
];

export const faq = [
  {
    q: '菓子屋横丁は入場料が必要ですか？',
    a: '横丁を歩くこと自体は無料です。菓子、食べ歩き、飲食、体験などは各店舗で支払います。',
  },
  {
    q: '営業時間は何時から何時までですか？',
    a: '横丁全体の一律営業時間はなく、店舗ごとに異なります。観光の目安としては10:00〜17:00前後に開いている店が多いですが、定休日や売り切れもあるため、目当ての店がある場合は直前確認がおすすめです。',
  },
  {
    q: '何分くらい滞在すれば楽しめますか？',
    a: '写真と軽い買い物なら30〜45分、食べ歩きや周辺の時の鐘・蔵造りの町並みまで回るなら90分〜2時間ほど見ておくと余裕があります。',
  },
  {
    q: '雨の日でも楽しめますか？',
    a: '屋外の路地なので傘は必要ですが、店先を見ながら短時間で回れます。雨が強い日は川越まつり会館、カフェ、ベーカリーなど屋内休憩を組み合わせると回りやすいです。',
  },
  {
    q: '駐車場はありますか？',
    a: '菓子屋横丁専用の大きな駐車場は期待せず、川越市の観光用駐車場や周辺コインパーキングを使う計画が安全です。週末は一番街周辺が混みやすいため、早めの到着か公共交通をおすすめします。',
  },
  {
    q: '子ども連れでも行きやすいですか？',
    a: '駄菓子や飴、せんべいなど子どもが楽しみやすい店が多い場所です。ただし通りは細く混雑しやすいので、ベビーカーは混雑時間を避けると安心です。',
  },
  {
    q: '支払いはカードでできますか？',
    a: '店舗によって異なります。昔ながらの小さな店もあるため、少額の現金を用意しておくと安心です。',
  },
  {
    q: 'このサイトの旅のリストや記念カードはサーバーに保存されますか？',
    a: '保存されません。旅のリストはブラウザのlocalStorage、記念カードの写真とCanvas合成は現在の端末内だけで処理され、サーバーへ送信しません。',
  },
];

export const photoCredits = [
  {
    file: 'kashiya-hero.webp / og-image.jpg',
    title: 'Kawagoe Kashiya Yokocho 2013-09.JPG',
    author: 'At by At',
    license: 'CC BY-SA 3.0',
    source: 'https://commons.wikimedia.org/wiki/File:Kawagoe_Kashiya_Yokocho_2013-09.JPG',
  },
  {
    file: 'kashiya-busy.webp',
    title: 'Kashiya Yokocho-2006-02-12.jpg',
    author: 'Syohei Arai',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Kashiya_Yokocho-2006-02-12.jpg',
  },
  {
    file: 'kashiya-street.webp',
    title: 'Kashiya yokocho -01.jpg',
    author: 'Aimaimyi',
    license: 'CC BY-SA 3.0 / GFDL（選択可）',
    source: 'https://commons.wikimedia.org/wiki/File:Kashiya_yokocho_-01.jpg',
  },
  {
    file: 'kashiya-noren.webp',
    title: 'Kashiya yokocho -04.jpg',
    author: 'Aimaimyi',
    license: 'CC BY-SA 3.0 / GFDL（選択可）',
    source: 'https://commons.wikimedia.org/wiki/File:Kashiya_yokocho_-04.jpg',
  },
  {
    file: 'kashiya-cafe.webp',
    title: 'Kashiya yokocho -03.jpg',
    author: 'Aimaimyi',
    license: 'CC BY-SA 3.0 / GFDL（選択可）',
    source: 'https://commons.wikimedia.org/wiki/File:Kashiya_yokocho_-03.jpg',
  },
  {
    file: 'kashiya-sweets.webp',
    title: 'Kashiya yokocho.jpg',
    author: 'dailytransit',
    license: 'CC BY-SA 2.0',
    source: 'https://commons.wikimedia.org/wiki/File:Kashiya_yokocho.jpg',
  },
];

export const infoSources = [
  {
    title: '小江戸川越観光協会「菓子屋横丁」',
    url: 'https://koedo.or.jp/spot_003/',
    memo: '約30軒程度、石畳、かおり風景100選、所在地の確認に使用。',
  },
  {
    title: '川越市「菓子屋横丁」',
    url: 'https://www.city.kawagoe.saitama.jp/kanko/k-spots/1011557/1011568.html',
    memo: '歴史、所在地、かおり風景100選、店舗数の確認に使用。',
  },
  {
    title: '埼玉県観光情報 ちょこたび埼玉「菓子屋横丁」',
    url: 'https://chocotabi-saitama.jp/spot/19025/',
    memo: 'アクセス、問い合わせ、周辺スポットの確認に使用。',
  },
  {
    title: '川越市「観光用駐車場」',
    url: 'https://www.city.kawagoe.saitama.jp/kanko/kotsu/1011604.html',
    memo: '公共駐車場・利用時間・料金の確認に使用。',
  },
];

export const tripSeedItems: TripItem[] = [
  { id: 'kashiya-yokocho', title: site.attractionName, category: 'メイン', note: '飴・せんべい・だんご・芋菓子を少しずつ。' },
  ...nearbySpots.slice(0, 4),
  ...foods.slice(0, 4),
];

export const buildStructuredData = (path = '/', pageTitle?: string, pageDescription?: string) => {
  const url = site.url ? absoluteUrl(path) : undefined;
  const image = site.url ? absoluteUrl(site.ogImage) : undefined;
  const websiteId = site.url ? `${site.url}/#website` : '#website';
  const attractionId = site.url ? `${site.url}/#tourist-attraction` : '#tourist-attraction';
  const localBusinessId = site.url ? `${site.url}/#local-business` : '#local-business';
  const faqId = site.url ? `${site.url}/faq/#faq` : '#faq';
  const webpageId = url ? `${url}#webpage` : '#webpage';
  const faqEntities = faq.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  }));

  const openingHoursSpecification = {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '10:00',
    closes: '17:00',
    description: site.openingHoursText,
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': websiteId,
        name: site.name,
        ...(site.url ? { url: site.url } : {}),
        inLanguage: 'ja-JP',
        description: site.description,
      },
      {
        '@type': 'TouristAttraction',
        '@id': attractionId,
        name: site.attractionName,
        alternateName: 'Kashiya Yokocho',
        description: '埼玉県川越市元町2丁目にある、昔ながらの菓子屋が並ぶ石畳の横丁。',
        ...(image ? { image } : {}),
        ...(url ? { url } : {}),
        isAccessibleForFree: true,
        address: {
          '@type': 'PostalAddress',
          postalCode: site.address.postalCode,
          addressRegion: site.address.region,
          addressLocality: site.address.locality,
          streetAddress: site.address.street,
          addressCountry: 'JP',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: site.latitude,
          longitude: site.longitude,
        },
        openingHours: site.openingHoursText,
        openingHoursSpecification,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: site.ratingValue,
          bestRating: '5',
          reviewCount: site.reviewCount,
        },
      },
      {
        '@type': 'LocalBusiness',
        '@id': localBusinessId,
        name: site.attractionName,
        description: '川越の菓子屋・駄菓子店が集まる観光向け商店街。',
        ...(image ? { image } : {}),
        telephone: site.phone,
        priceRange: site.priceRange,
        ...(url ? { url } : {}),
        address: {
          '@type': 'PostalAddress',
          postalCode: site.address.postalCode,
          addressRegion: site.address.region,
          addressLocality: site.address.locality,
          streetAddress: site.address.street,
          addressCountry: 'JP',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: site.latitude,
          longitude: site.longitude,
        },
        openingHours: site.openingHoursText,
        openingHoursSpecification,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: site.ratingValue,
          bestRating: '5',
          reviewCount: site.reviewCount,
        },
      },
      {
        '@type': 'FAQPage',
        '@id': faqId,
        mainEntity: faqEntities,
      },
      {
        '@type': 'WebPage',
        '@id': webpageId,
        ...(url ? { url } : {}),
        name: pageTitle ?? site.name,
        description: pageDescription ?? site.description,
        isPartOf: { '@id': websiteId },
        about: { '@id': attractionId },
        inLanguage: 'ja-JP',
      },
    ],
  };
};
