import { absoluteUrl, site } from '@config/site';
import { localizedAddress, siteText } from '@i18n/site';
import type { Lang } from '@i18n/index';

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

/**
 * Google マップの最新評価（2026年9月時点）。
 * 注意：評価スコアと件数はページ上でのみ表示し、個々のレビュー本文は JSON-LD に含めません。
 */
export const googleRating = {
  value: site.ratingValue,
  best: 5,
  count: site.reviewCount,
  countLabel: site.reviewCount.toLocaleString('ja-JP'),
  sourceName: site.ratingSourceName,
  sourceUrl: site.mapsShareUrl,
  syncedAt: site.ratingSyncedAt,
  note: site.ratingSourceNote,
  noteShort: site.ratingSourceNoteShort,
  /** 星の内訳（0.5 刻みの表示用）：実際の内訳は Google マップ側でご確認ください。 */
  scale: [1, 2, 3, 4, 5],
};

export const visitFacts = [
  { label: '所在地', value: site.address.full },
  { label: '入場料', value: '横丁の散策は無料。菓子・飲食・体験は店舗ごとの料金です。' },
  { label: '営業時間', value: site.openingHoursText },
  { label: 'おすすめ滞在', value: '30〜60分。食べ歩きや写真をじっくり楽しむなら90分ほど。' },
  { label: '混雑しにくい時間', value: '平日午前、または夕方前。週末は昼前後から混みやすいです。' },
  {
    label: 'Google マップ評価',
    value: `${googleRating.value} / ${googleRating.best}（Google マップのユーザー評価 ${googleRating.countLabel}件・同期時期 ${googleRating.syncedAt}。評価は変動します）`,
  },
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
    title: 'Google マップ（Google Maps）のユーザー評価',
    url: site.mapsShareUrl,
    memo: `評価 ${site.ratingValue} / 5（${site.reviewCount.toLocaleString('ja-JP')}件）の同期元。同期時期：${site.ratingSyncedAt}。著作権は投稿者本人および Google マップに帰属します。`,
  },
  {
    title: '菓子屋横丁 公式サイト',
    url: site.officialUrl,
    memo: '横丁の公式情報・店舗案内の確認先として参照。',
  },
  {
    title: '小江戸川越観光協会「菓子屋横丁」',
    url: 'https://koedo.or.jp/spot_003/',
    memo: '約30軒程度、石畳、かおり風景100選、所在地の確認に使用。',
  },
  {
    title: '川越市「菓子屋横丁」',
    url: site.cityTourismUrl,
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

/** 资料来源区块（SourcesSection）で使う、出典の要約リスト */
export const sources = [
  {
    kind: '評価',
    title: `${site.attractionName}の Google マップ評価`,
    syncedAt: site.ratingSyncedAt,
    memo: `評価 ${site.ratingValue} / 5・${site.reviewCount.toLocaleString('ja-JP')}件。同期時期：${site.ratingSyncedAt}。著作権は投稿者本人および Google マップに帰属します。`,
    url: site.mapsShareUrl,
    linkLabel: 'Google マップで全部の評価を見る',
  },
  {
    kind: '公式',
    title: `${site.attractionName} 公式サイト`,
    syncedAt: '随時参照',
    memo: '横丁の公式案内。営業時間・店舗情報の最終確認は公式サイトと各店の掲示をご確認ください。',
    url: site.officialUrl,
    linkLabel: '公式サイトを開く',
  },
  {
    kind: '自治体',
    title: site.cityTourismName,
    syncedAt: '随時参照',
    memo: '所在地・歴史・かおり風景100選・店舗数の確認に使用した川越市の観光ページ。',
    url: site.cityTourismUrl,
    linkLabel: '川越市のページを開く',
  },
  {
    kind: '観光協会',
    title: site.govtTourismName,
    syncedAt: '随時参照',
    memo: '周辺スポット・回遊ルートの確認に使用した地元観光協会の公式ポータル。',
    url: site.govtTourismUrl,
    linkLabel: '観光協会のページを開く',
  },
];

export const tripSeedItems: TripItem[] = [
  { id: 'kashiya-yokocho', title: site.attractionName, category: 'メイン', note: '飴・せんべい・だんご・芋菓子を少しずつ。' },
  ...nearbySpots.slice(0, 4),
  ...foods.slice(0, 4),
];

/** 季節ごとの歩き方（SeasonalGuide） */
export const seasons = [
  {
    name: '春',
    months: '3〜5月',
    climate: '桜の時期を中心に涼しく過ごしやすい。日中は15〜22℃程度が多く、朝晩は肌寒い日も。',
    clothes: '軽い上着・羽織るもの。小雨対応の折りたたみ傘があると安心。',
    crowd: '入学・行楽シーズンで休日は混みやすい。',
    tip: '蔵造りエリアの散策とあわせ、昼前の早い時間に横丁を回すと写真が取りやすい。',
  },
  {
    name: '夏',
    months: '6〜8月',
    climate: '梅雨から本格的な暑さへ。湿度が高く、日中は30℃超の日も多い。',
    clothes: '通気性の良い服装・帽子・飲料。日差しが強い日は日焼け対策を。',
    crowd: '祭りや花火の時期は特に混雑。夕方以降も人出が続く。',
    tip: '涼しい店内型の甘味処をルートに入れ、こまめに水分補給。にわか雨に備えて雨具を。',
  },
  {
    name: '秋',
    months: '9〜11月',
    climate: '過ごしやすい日が多く、観光に最も向く季節。晴れの日が多い傾向。',
    clothes: '長袖＋軽い上着。朝晩の冷え込みに備えられると安心。',
    crowd: '行楽シーズンで平日でもにぎわう。',
    tip: '石畳と蔵の色合いが映えるため、写真と食べ歩きをゆっくり楽しむのに最適。',
  },
  {
    name: '冬',
    months: '12〜2月',
    climate: '寒さが厳しく、晴れの日でも5℃以下になることがある。雪や路面凍結の日も。',
    clothes: '防寒着・手袋・温かい靴。屋内で食べる甘味で体を温めるとよい。',
    crowd: '年末年始・イルミネーション時期は混むが、平日は比較的静か。',
    tip: 'あんこや芋菓子など温かいものを選び、短めの滞在で複数回に分けるのがおすすめ。',
  },
];

/** 访客サービス（VisitorServices）：特定店舗名は挙げずタイプで中立案内 */
export const services = [
  {
    icon: '🚻',
    title: 'トイレ',
    body: '横丁周辺と蔵造りエリアには公衆トイレがあります。観光案内所や大型の観光施設を併用すると、ベビー対応や身だしなみ対応が整っている傾向があります。',
  },
  {
    icon: '🅿️',
    title: '駐車場',
    body: '横丁専用の大規模駐車場は限られます。市の観光用駐車場や駅・商店街近くのコインパーキングを前提に計画し、細い路地には車で入り込まず歩くのが基本です。',
  },
  {
    icon: '🍡',
    title: '飲食',
    body: '甘味・軽食・和食・カフェなど、店舗ごとに営業時間と定休日が異なります。目当ての店がある場合は当日の掲示や公式情報で確認すると安心です。',
  },
  {
    icon: '🏨',
    title: '宿泊',
    body: '川越市内には旅館・ビジネスホテル・ゲストハウスなど複数のタイプの宿泊施設があり、横丁から電車・バスで移動できる範囲に選びやすいです。',
  },
  {
    icon: '🏪',
    title: '買い物',
    body: 'コンビニエンスストアやスーパーは駅周辺に多く、日中の補給や雨具の確保に便利です。横丁内は菓子・土産中心の店舗が中心です。',
  },
  {
    icon: '⛽',
    title: '給油・充電',
    body: 'ガソリンスタンドは幹線道路沿いに点在します。電気自動車（EV）の充電は、駅近の商業施設や観光駐車場などの充電設備を出発前に確認するとよいでしょう。',
  },
  {
    icon: '💴',
    title: '現金・ATM',
    body: '商店街では現金を扱う店が多く、小銭があると買い歩きしやすいです。近隣には銀行・コンビニのATMがあり、訪問前の現金確保に使えます。',
  },
  {
    icon: '🍼',
    title: '授乳・休憩',
    body: '乳幼児連れには観光案内所などの休憩・授乳対応スペースが頼りになります。ベンチや屋根付きの休憩地点をルートに入れると疲れにくくなります。',
  },
];

/** 対象別ルート（VisitorRoutes） */
export const audienceRoutes = [
  {
    icon: '🧸',
    title: '亲子家庭',
    lead: '歩く距離を短く、甘いものと休憩を織り交ぜる。',
    points: [
      '本川越駅から蔵造りエリアを抜けて横丁へ（距離を抑えて段階的に）',
      '飴・だんご・芋菓子を少しずつ買い歩き',
      '公衆トイレ・ベンチのある休憩地点をルートに入れる',
      '時間を決めて「今日の1品」を選ぶと買いすぎを防げる',
    ],
  },
  {
    icon: '📷',
    title: '摄影・自然',
    lead: '光の向きと人の薄い時間を狙って、石畳と蔵の質感を撮る。',
    points: [
      '平日の開店前後の静かな時間に横丁の路地を撮影',
      '時の鐘・蔵造りの町並みを順光で回る',
      '雨上がりの濡れた石畳は反射が映えて狙い目',
      '食べ歩きの手元や店先の暖簾も画角のバリエーションに',
    ],
  },
  {
    icon: '♿',
    title: '低体力・バリアフリー',
    lead: '駅近の駐車場・バスを使い、無理なく休みながら回る。',
    points: [
      '川越駅からバスで「菓子屋横丁」停留所へ（徒歩を最小限に）',
      'コインパーキング等から短い距離で入口へ',
      '屋内型の甘味処・案内所を休憩拠点に',
      '短時間で複数回に分ける立ち回りを想定',
    ],
  },
];

/** 標準ルート（VisitorRoutes） */
export const standardRoutes = [
  {
    icon: '🌗',
    title: '半日コース（約3時間）',
    body: '菓子屋横丁で食べ歩き → 時の鐘で鐘の音と写真 → 蔵造りの町並み・一番街をぶらり。車なら観光用駐車場から往復。',
  },
  {
    icon: '🌕',
    title: '全日コース（約6時間）',
    body: '午前に横丁と蔵造りエリア、昼は周辺の和食・うなぎ・カフェ、午後は川越氷川神社や博物館系スポットへ。小江戸の町並みをじっくり巡る。',
  },
];

/** 訪問者の責任（VisitorResponsibility） */
export const responsibilities = [
  {
    icon: '🗑️',
    title: 'ゴミは持ち帰る',
    body: '横丁は細い路地であり、多くの人が行き交います。食べ歩きの包みや容器は店舗・観光施設のごみ箱か、お持ち帰りで対応しましょう。',
  },
  {
    icon: '🌸',
    title: '香りと景観を守る',
    body: '「かおり風景100選」に選ばれた路地の良さは、店の営みと来訪者のマナーで保たれます。店先や石畳の撮影は、通行を妨げないよう譲り合って。',
  },
  {
    icon: '🚶',
    title: '歩行のマナー',
    body: '路地は車両と歩行者が近い距離で共有します。大きな荷物やベビーカーは人と人との間隔に配慮し、立ち止まる際は脇に寄りましょう。',
  },
  {
    icon: '📖',
    title: '背景を知る楽しみ',
    body: `${site.attractionName}は大正期に菓子職人が集まった路地をルーツに持ちます。店ごとの歴史や「かおり風景」の背景を知ると、散策の味わいが深まります。`,
  },
];

/**
 * 季節の行事（EventsCalendar）。
 * 年により日程が変わるため「目安時期」のみを掲載し、必ず公式情報での確認を促す。
 */
export const events = [
  {
    name: '川越まつり（川越氷川祭）',
    period: '10月第3日曜 前後',
    note: '最大級の混雑。山車行事は国の重要無形民俗文化財・ユネスコ無形文化遺産。交通規制あり。',
  },
  {
    name: '川越氷川神社 風鈴まつり',
    period: '7月上旬〜9月上旬 目安',
    note: '江戸風鈴が並ぶ時期。夕方は境内と周辺がにぎわう。',
  },
  {
    name: '川越百万灯夏まつり',
    period: '7月下旬 目安',
    note: '提灯とステージ行事が中心。夜間の人出が増える。',
  },
  {
    name: '新河岸川の桜',
    period: '3月下旬〜4月上旬 目安',
    note: '開花時期は年により前後。週末は川越全体が混みやすい。',
  },
  {
    name: '初詣（川越氷川神社 ほか）',
    period: '1月1日〜3日 目安',
    note: '三が日は周辺道路・バスが混雑。横丁は元日休の店も多い。',
  },
  {
    name: '冬のイルミネーション',
    period: '11月下旬〜12月 目安',
    note: '夕方以降の滞在向き。冷え込み対策を。',
  },
];

/** アクセシビリティ（Accessibility） */
export const accessibility = [
  {
    icon: '🪨',
    title: '石畳と段差',
    body: '横丁は石畳の細い路地です。凹凸があるため、車椅子・ベビーカー・杖の方はゆっくり進み、混雑時間を避けると負担が減ります。',
  },
  {
    icon: '🚏',
    title: '徒歩距離を短くする',
    body: '川越駅から路線バスで「菓子屋横丁」停留所へ向かうと徒歩距離を抑えられます。停留所のバリアフリー状況は事業者公式情報でご確認ください。',
  },
  {
    icon: '🚻',
    title: 'トイレ・休憩',
    body: '公衆トイレに加え、観光案内所や大型観光施設の多目的トイレが頼りになります。ベンチと屋根付きの休憩地点をこまめに挟むと楽です。',
  },
  {
    icon: '👶',
    title: '乳幼児連れ',
    body: '混雑時はベビーカーより抱っこ紐が動きやすい場合があります。授乳・おむつ替えは案内所や大型施設の利用が現実的です。',
  },
  {
    icon: '🐕',
    title: '補助犬・同伴',
    body: '補助犬（盲導犬・介助犬・聴導犬）は公共空間への同伴が認められています。店舗内への入店は各店の判断に従いましょう。',
  },
  {
    icon: '🆘',
    title: '困ったとき',
    body: '体調不良や迷子の际は、観光案内所か近隣の店舗に声をかけるのが最短です。緊急時は 119 / 110。',
  },
];

export type BreadcrumbItem = { name: string; path?: string };

export const buildStructuredData = (
  path = '/',
  pageTitle?: string,
  pageDescription?: string,
  breadcrumb?: BreadcrumbItem[],
  lang: Lang = 'ja',
  faqItems: { q: string; a: string }[] = faq,
) => {
  const st = siteText(lang);
  const inLanguage = lang === 'en' ? 'en' : 'ja-JP';
  const url = site.url ? absoluteUrl(path) : undefined;
  const heroUrl = site.url ? absoluteUrl(site.heroImage) : undefined;
  const ogUrl = site.url ? absoluteUrl(site.ogImage) : undefined;
  const images = site.url ? [ogUrl, heroUrl].filter(Boolean) : undefined;
  const websiteId = site.url ? `${site.url}/#website` : '#website';
  const attractionId = site.url ? `${site.url}/#attraction` : '#attraction';
  const localBusinessId = site.url ? `${site.url}/#local-business` : '#local-business';
  const faqId = site.url ? `${site.url}/faq/#faq` : '#faq';
  const webpageId = url ? `${url}#webpage` : '#webpage';
  const breadcrumbId = url ? `${url}#breadcrumb` : '#breadcrumb';
  const faqEntities = faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  }));

  const postalAddress = localizedAddress(lang);

  const geoCoordinates = {
    '@type': 'GeoCoordinates',
    latitude: site.latitude,
    longitude: site.longitude,
  };

  // 画像は ImageObject として意味づけし、出典はクレジットページを参照させる。
  const imageObjects = heroUrl
    ? [
        {
          '@type': 'ImageObject',
          '@id': `${site.url}/#primary-image`,
          url: heroUrl,
          contentUrl: heroUrl,
          caption:
            lang === 'en'
              ? 'Stone-paved lane and shopfronts of Kashiya Yokocho'
              : '菓子屋横丁の石畳と店先の風景',
          creditText:
            lang === 'en'
              ? 'Photo sources are listed on the credits page.'
              : '写真の出典は「写真・情報ソース」ページに記載しています。',
        },
        ...(ogUrl ? [{ '@type': 'ImageObject', url: ogUrl, contentUrl: ogUrl }] : []),
      ]
    : undefined;

  const attractionDescription =
    lang === 'en'
      ? `${st.attractionName} is a stone-paved lane of old-fashioned sweet shops in ${st.addressFull}. It is usually walked together with the ${st.nearbyLandmarks[0]} and the ${st.nearbyLandmarks[1]} of Little Edo ${site.city}.`
      : `${site.attractionName}は${site.region}${site.city}${site.address.street}にある、昔ながらの菓子屋が並ぶ石畳の横丁。${site.city}の蔵造りの町並み・${site.nearbyLandmarks[0]}とあわせて歩ける${site.region}の観光地です。`;

  // 営業時間は店舗ごとに異なるため、機械可読な固定値には補足説明を付ける。
  const openingHoursSpecification = {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '10:00',
    closes: '17:00',
    description: st.openingHoursText,
  };

  // 自サイト自身を sameAs に含めると自己参照になるため除外する。
  const sameAs = [site.mapsShareUrl, site.officialUrl, site.govtTourismUrl, site.cityTourismUrl].filter(
    (candidate) => candidate && candidate.replace(/\/+$/, '') !== site.url.replace(/\/+$/, ''),
  );

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': websiteId,
        name: st.name,
        ...(site.url ? { url: site.url } : {}),
        inLanguage,
        description: st.description,
      },
      {
        '@type': 'TouristAttraction',
        '@id': attractionId,
        name: st.attractionName,
        alternateName: [
          site.attractionLatinName,
          `${st.city} ${st.attractionName}`,
          lang === 'en' ? `${st.attractionName} (${st.city})` : `${st.attractionName}（${st.city}）`,
        ],
        description: attractionDescription,
        ...(imageObjects ? { image: imageObjects } : { ...(images ? { image: images } : {}) }),
        ...(url ? { url } : {}),
        isAccessibleForFree: true,
        ...(site.url ? { hasMap: site.mapsShareUrl } : {}),
        ...(site.url ? { sameAs } : {}),
        address: postalAddress,
        geo: geoCoordinates,
        openingHours: st.openingHoursText,
        openingHoursSpecification,
        // ページ上に表示している評価値を構造化データにも反映（Google マップのユーザー評価を引用）。
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: site.ratingValue,
          reviewCount: site.reviewCount,
          bestRating: 5,
          worstRating: 1,
        },
      },
      {
        '@type': 'LocalBusiness',
        '@id': localBusinessId,
        name: st.attractionName,
        alternateName: [site.attractionLatinName, `${st.city} ${st.attractionName}`],
        description:
          lang === 'en'
            ? `A tourist shopping lane in ${site.city}, ${site.region}, lined with traditional confectionery and dagashi shops.`
            : `${site.region}${site.city}の菓子屋・駄菓子店が集まる観光向け商店街。`,
        ...(imageObjects ? { image: imageObjects } : { ...(images ? { image: images } : {}) }),
        telephone: site.phone,
        priceRange: st.priceRange,
        ...(url ? { url } : {}),
        ...(site.url ? { hasMap: site.mapsShareUrl } : {}),
        ...(site.url ? { sameAs } : {}),
        address: postalAddress,
        geo: geoCoordinates,
        openingHours: site.openingHoursText,
        openingHoursSpecification,
      },
      {
        '@type': 'FAQPage',
        '@id': faqId,
        mainEntity: faqEntities,
      },
      ...(breadcrumb?.length
        ? [
            {
              '@type': 'BreadcrumbList',
              '@id': breadcrumbId,
              itemListElement: breadcrumb.map((item, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: item.name,
                ...(item.path && site.url ? { item: absoluteUrl(item.path) } : {}),
              })),
            },
          ]
        : []),
      {
        '@type': 'WebPage',
        '@id': webpageId,
        ...(url ? { url } : {}),
        name: pageTitle ?? st.name,
        description: pageDescription ?? st.description,
        isPartOf: { '@id': websiteId },
        about: { '@id': attractionId },
        ...(breadcrumb?.length ? { breadcrumb: { '@id': breadcrumbId } } : {}),
        inLanguage,
      },
    ],
  };
};
