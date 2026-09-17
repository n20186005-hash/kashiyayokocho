import type { Lang } from './index';

/** 天気アドバイスの文言（言語別）。条件判定ロジックは weatherAdvice.ts 側に置く。 */

export type AdviceStrings = {
  alertThunder: string;
  alertHeavyRain: string;
  alertWind7: string;
  travelPop60: string;
  travelLightRain: string;
  travelHeavyRain: string;
  travelHot: string;
  travelUv: string;
  travelSwing: string;
  travelCold: string;
  travelWind5: string;
  travelClear: string;
  travelCloud: string;
  travelFog: string;
  travelSnow: string;
  activityRain: string;
  activityHeavy: string;
  activityClear: string;
  activityCloud: string;
  activityHot: string;
  activityWind5: string;
  activityFog: string;
  itemFoldingUmbrella: string;
  itemRaincoat: string;
  itemSun: string;
  itemWater: string;
  itemCoat: string;
  itemLayer: string;
  itemMask: string;
  neutral: string;
};

const ja: AdviceStrings = {
  alertThunder: '雷が予想されます。登山や樹の下での避雨は避け、屋外の水辺遊びは控えてください。',
  alertHeavyRain: '雨が強くなる見込みです。谷や低い土地を避け、遊覧船やロープウェイは運休することがあります。',
  alertWind7: '風が強いので、看板や高い建物の近くには寄らず、屋外の催しは中止になりやすいです。',
  travelPop60: '降水確率が高めです。雨具を持って出かけ、屋内型の甘味処や資料館をルートに入れると安心です。',
  travelLightRain: '雨が降っています。石畳が滑りやすいので足元に気をつけ、折りたたみ傘があると便利です。',
  travelHeavyRain: '雨が強いので、防水の上着があると動きやすいです。長い傘より雨合羽が風に強いです。',
  travelHot: '気温が高いので、正午前後の外出は控えめに。薄手で通気性の良い服装がおすすめです。',
  travelUv: '紫外線が強いので、日差しの下では帽子や日傘で直射を避けましょう。',
  travelSwing: '朝と昼の気温差が大きいので、羽織るものがあると調節しやすいです。',
  travelCold: '気温が低いので、厚手のコートやマフラーで防寒を。',
  travelWind5: '風がやや強いので、帽子は飛びやすく、ゆったりした長い服装は歩きにくいかもしれません。',
  travelClear: '天気は良いので、屋外の散策や写真を楽しむのに向いています。',
  travelCloud: '曇りで日ざしが柔らかく、長時間の屋外散策にも向いています。',
  travelFog: '視界が悪くなります。公式情報で交通の遅れを確認し、マスクがあると安心です。',
  travelSnow: '雪や雪あられが降るので、滑りやすい石畳は歩きやすい靴で。',
  activityRain: '露店や屋外の体験は感触が落ちるので、甘味処や屋内の資料館を中心に回ると快適です。',
  activityHeavy: '屋外の散策は控え、博物館や資料館など屋内のスポットを中心にご利用ください。',
  activityClear: '晴れなら蔵造りの町並みや時の鐘の写真が映えます。夕方は逆光に注意。',
  activityCloud: '曇り空はコントラストが穏やかで、じっくり街歩きするのに良い条件です。',
  activityHot: '暑い時間帯は短めに屋外を回り、涼しい店内で休みながら楽しみましょう。',
  activityWind5: '風の強い日は、屋外の催しや遊覧船などが中止になりやすいので事前に確認を。',
  activityFog: '視界が悪く遠景は見えにくいので、近場の路地歩きを楽しむのがおすすめです。',
  itemFoldingUmbrella: '折りたたみ傘',
  itemRaincoat: '雨合羽（長い傘より風に強い）',
  itemSun: '日傘・帽子・サングラス・日焼け止め',
  itemWater: '十分な飲み物（暑さ対策）',
  itemCoat: '厚手のコート・マフラー',
  itemLayer: '羽織るもの（温度調節用）',
  itemMask: 'マスク',
  neutral: '今日は過ごしやすい天気です。軽い服装で散策を楽しめます。',
};

const en: AdviceStrings = {
  alertThunder: 'Thunderstorms are expected. Avoid open high ground and sheltering under trees, and skip outdoor water activities.',
  alertHeavyRain: 'Heavy rain is likely. Avoid low-lying areas; boats and cable cars may suspend service.',
  alertWind7: 'Strong winds expected. Keep away from signboards and tall structures; outdoor events are often cancelled.',
  travelPop60: 'Rain chance is high. Carry rain gear and build indoor sweet shops or museums into your route.',
  travelLightRain: 'It is raining. The stone paving gets slippery, so watch your step and a folding umbrella helps.',
  travelHeavyRain: 'Rain is heavy, so a waterproof jacket makes moving around easier. A raincoat beats a long umbrella in wind.',
  travelHot: 'Temperatures are high. Keep midday outings short and wear light, breathable clothing.',
  travelUv: 'UV levels are strong. Use a hat or parasol to avoid direct sun.',
  travelSwing: 'There is a wide gap between morning and midday temperatures, so bring a layer you can add or remove.',
  travelCold: 'Temperatures are low. Dress warmly with a heavy coat and scarf.',
  travelWind5: 'It is fairly windy: hats blow off easily and long loose clothing can be awkward to walk in.',
  travelClear: 'Weather is good, so it is a fine day for walking around outdoors and taking photos.',
  travelCloud: 'Overcast light is soft, which suits long stretches of walking outside.',
  travelFog: 'Visibility will be poor. Check official sources for transport delays and consider a mask.',
  travelSnow: 'Snow or sleet is falling, so wear shoes with grip for the slippery stone paving.',
  activityRain: 'Open-air stalls are less enjoyable in rain; centre your route on sweet shops and indoor museums.',
  activityHeavy: 'Skip long outdoor walking and focus on indoor spots such as museums and exhibition halls.',
  activityClear: 'On clear days the warehouse streets and the bell tower photograph beautifully. Watch for backlight in the evening.',
  activityCloud: 'Cloudy skies give gentle contrast, which is good for slow, unhurried street walking.',
  activityHot: 'Keep outdoor stretches short during hot hours and take breaks in cool shops.',
  activityWind5: 'On windy days outdoor events and boat rides are often cancelled, so check ahead.',
  activityFog: 'Distant views will be hidden, so enjoy the close-up details of the lanes instead.',
  itemFoldingUmbrella: 'Folding umbrella',
  itemRaincoat: 'Raincoat (better than a long umbrella in wind)',
  itemSun: 'Parasol, hat, sunglasses, sunscreen',
  itemWater: 'Plenty of water (heat care)',
  itemCoat: 'Heavy coat and scarf',
  itemLayer: 'An extra layer (for temperature swings)',
  itemMask: 'Face mask',
  neutral: 'Conditions look comfortable today. Light clothing is fine for a stroll.',
};

const strings: Record<Lang, AdviceStrings> = { ja, en };

export const adviceStrings = (lang: Lang = 'ja'): AdviceStrings => strings[lang] ?? strings.ja;

/** 三类人群（亲子 / 摄影 / 无障碍）向けの個別アドバイス。 */
export type AudienceStrings = {
  label: string;
  icon: string;
  thunder: string;
  heavy: string;
  alert: string;
  pop60: string;
  rainLight: string;
  hot: string;
  uv: string;
  swing: string;
  cold: string;
  wind5: string;
  clear: string;
  cloud: string;
  fog: string;
  snow: string;
  neutral: string;
};

export type AudiencesStrings = {
  families: AudienceStrings;
  photography: AudienceStrings;
  accessible: AudienceStrings;
};

const audiencesJa: AudiencesStrings = {
  families: {
    label: '子ども連れのご家族',
    icon: '🧸',
    thunder: '雷の予報です。屋外の買い歩きは切り上げ、屋内へ移れる計画にしておきましょう。',
    heavy: '雨脚が強い日は、子どもの手をしっかりつないで。路地は滑りやすく、長居は避けて屋内へ。',
    alert: '無理に回らず、屋内の甘味処や資料館で過ごす判断も含めて計画を。',
    pop60: '屋内の甘味処や資料館を先に決めておくと、急な雨でも慌てずに休めます。',
    rainLight: '小雨なら、飴・だんごの買い歩きは短時間に。濡れた石畳は転びやすいので歩幅を小さく。',
    hot: '正午前後は屋内の冷たい甘味で休憩。飲み物はこまめに、ベビーカーは日陰を選んで。',
    uv: '帽子と日焼け止めを。日中の長い散歩は避け、こまめに休憩を。',
    swing: '子ども用に羽織るものを一枚。脱ぎ着しやすい前開きが便利です。',
    cold: '手袋と防寒を。温かいあんこ・芋菓子で体を温めながら、短めに回りましょう。',
    wind5: '風で帽子が飛びやすいので、あごひも付きの帽子が安心です。',
    clear: '晴れた日は飴・だんごの買い歩きに最適。ベンチとトイレの位置を先に確認しておくと安心です。',
    cloud: '日ざしが柔らかく、子ども連れでも長く歩きやすい日です。',
    fog: '視界が悪いので、子どもから目を離さないよう少人数で固まって歩きましょう。',
    snow: '雪の石畳は滑ります。靴底の溝を確認し、無理に奥まで行かないで。',
    neutral: '大きな負担のない穏やかな日和です。短い周回＋休憩で、子どものペースに合わせて。',
  },
  photography: {
    label: '写真・記録を楽しむ方',
    icon: '📷',
    thunder: '雷の予報です。屋外での撮影は中止し、安全な屋内から楽しみましょう。',
    heavy: '屋内の資料館・甘味処中心に。撮影は屋根のある軒下から狙うと濡れません。',
    alert: '天候が荒れる見込みです。機材の防水を最優先に、無理な撮影は控えて。',
    pop60: '天候が変わりやすいので、屋根のある撮影ポイントを先に押さえておくと安心です。',
    rainLight: '濡れた石畳の反射が狙い目。レンズの水滴をこまめに拭い、軒下から狙いましょう。',
    hot: '陽炎で解像が甘くなります。朝夕の柔らかい光を選び、日中は日陰の路地へ。',
    uv: '日中はコントラストが強すぎます。日陰側の路地か、朝夕の時間帯に撮るのがおすすめ。',
    swing: '朝夕と日中の光が大きく変わります。狙う時間帯を決めてから動くと失敗が少ないです。',
    cold: '寒さで手がかじかみます。薄手の手袋のまま操作できる服装で。',
    wind5: '三脚や荷物の転倒に注意。長時間露光は厳しいので、手ブレ対策を優先しましょう。',
    clear: '順光で蔵造りと石畳の質感が出ます。朝夕の斜光は路地の奥行きが最も美しい時間帯。',
    cloud: 'コントラストが穏やかで、暖簾や木の質感を丁寧に描写しやすい光です。露出も安定します。',
    fog: '遠景は期待できません。路地の近景や手元の菓子に寄ると、この天気ならではの雰囲気が出ます。',
    snow: '雪の石畳は露出がアンダーになりがち。+1〜2段の補正で白を飛ばさずに。',
    neutral: '光が安定し、石畳・暖簾・手元の菓子まで落ち着いて撮れる日和です。',
  },
  accessible: {
    label: '歩行に配慮が必要な方',
    icon: '♿',
    thunder: '雷の予報です。屋外の移動は最小限にし、屋内中心の計画に切り替えましょう。',
    heavy: '屋内の資料館・甘味処中心に切り替え、無理に路地の奥へ行かない計画に。',
    alert: '大雨・強風のときは屋内中心に切り替え、無理な外出は控えて。',
    pop60: 'バス停「菓子屋横丁」から最短ルートで。屋根付きの休憩地点を先に確保しておくと安心です。',
    rainLight: '石畳が滑りやすくなります。滑りにくい靴底で、傘より雨合羽（片手を空ける）が安心。',
    hot: '屋内の冷涼な休憩スポットを多めに組み込み、休憩の間隔を短く取りましょう。',
    uv: '日ざしが強い日は負担が増します。日陰と休憩を多めに取り、無理に歩かないで。',
    swing: '温度調整しやすい羽織ものを。休憩はこまめに取るのが安心です。',
    cold: '冷えで足腰に負担が出ます。屋内休憩を多めに、滞在は短く分けて。',
    wind5: '風で帽子や荷物が飛びます。杖・歩行器は路面の段差に注意して。',
    clear: '天候の負担が少なく、短い周回＋休憩で無理なく回れる日和です。',
    cloud: '日ざしが穏やかで、休憩を挟みながら歩きやすい条件です。',
    fog: '段差や凹凸が見えにくくなります。時間に余裕を持ち、足元を確認しながら進みましょう。',
    snow: '石畳の凍結や積雪で転倒リスクが上がります。屋根付きの休憩地点を確認してから。',
    neutral: '大きな負担になりにくい条件です。こまめな休憩と最短ルートで無理なく。',
  },
};

const audiencesEn: AudiencesStrings = {
  families: {
    label: 'Families with children',
    icon: '🧸',
    thunder: 'Thunderstorms are forecast. Wrap up the outdoor snacking early and keep an indoor plan ready.',
    heavy: 'In heavy rain, keep a firm hold of little hands. The lane gets slippery — do not linger, head indoors.',
    alert: 'Do not push on. Consider spending the time in an indoor sweet shop or museum instead.',
    pop60: 'Pick an indoor sweet shop or museum in advance so a sudden shower is never a scramble.',
    rainLight: 'In light rain, keep the candy and dumpling stops short. Wet stone is slippery, so take smaller steps.',
    hot: 'Rest over something cold and sweet indoors around midday. Hydrate often and keep pushchairs in the shade.',
    uv: 'Hats and sunscreen. Avoid long midday walks and take breaks often.',
    swing: 'Pack one extra layer for the children — a zip-front one is easiest to add and remove.',
    cold: 'Gloves and warm layers. Warm up with red bean or sweet-potato sweets and keep the loop short.',
    wind5: 'Hats blow away easily in wind, so a chin strap helps.',
    clear: 'Clear weather is ideal for candy and dumplings. Locate benches and toilets first for peace of mind.',
    cloud: 'Soft light makes it comfortable to walk longer with children.',
    fog: 'Visibility is poor, so stay together as a small group and keep sight of the children.',
    snow: 'Snowy stone paving is slippery. Check shoe tread and do not push deep into the lane.',
    neutral: 'Easy conditions with no big strain. Keep loops short and match the children’s pace.',
  },
  photography: {
    label: 'Photography & recording',
    icon: '📷',
    thunder: 'Thunderstorms are forecast. Stop shooting outdoors and enjoy the day from somewhere safe inside.',
    heavy: 'Focus on indoor museums and sweet shops, and shoot from under the eaves so gear stays dry.',
    alert: 'Rough weather is likely. Keep gear waterproof first and do not force a shoot.',
    pop60: 'Conditions change quickly, so secure a sheltered shooting spot early.',
    rainLight: 'Wet stone paving reflects beautifully. Wipe the lens often and shoot from under the eaves.',
    hot: 'Heat haze softens detail. Use the gentle morning and evening light, and stay in shaded lanes by day.',
    uv: 'Midday contrast is too harsh. Shoot the shaded side of the lane, or come back in the morning and evening.',
    swing: 'Light changes a lot between morning and midday. Decide your target time before you set out.',
    cold: 'Cold fingers are slow. Wear thin gloves you can still operate the camera in.',
    wind5: 'Watch for tripods and bags blowing over. Long exposures are difficult, so prioritise stabilisation.',
    clear: 'Front lighting brings out the clay walls and paving. The low morning and evening sun shows the lane’s depth best.',
    cloud: 'Gentle contrast suits careful shots of curtains and wood grain, and exposure stays stable.',
    fog: 'Distant views are lost. Move in close on lane details and the sweets in your hands for mood.',
    snow: 'Snowy stone tends to underexpose. Add +1 to +2 stops so the whites do not clip.',
    neutral: 'Steady light — a good day to photograph paving, curtains and the sweets in your hands at your own pace.',
  },
  accessible: {
    label: 'If you need step-free or low-effort options',
    icon: '♿',
    thunder: 'Thunderstorms are forecast. Keep outdoor movement to a minimum and switch to an indoor plan.',
    heavy: 'Switch to indoor museums and sweet shops rather than pushing deep into the lane.',
    alert: 'In heavy rain or strong wind, stay indoors as much as possible and avoid unnecessary outings.',
    pop60: 'Use the shortest route from the Kashiya Yokocho bus stop, and secure a covered rest point first.',
    rainLight: 'Stone paving gets slippery. Wear grippy soles and prefer a raincoat over an umbrella to keep a hand free.',
    hot: 'Build in plenty of cool indoor rest stops and keep the gaps between breaks short.',
    uv: 'Strong sun adds strain. Take more shade and more breaks; do not push the walking.',
    swing: 'Bring a layer you can adjust. Frequent short breaks make it much easier.',
    cold: 'Cold puts extra load on legs and back. Rest indoors often and split the visit into short parts.',
    wind5: 'Hats and bags blow away in wind. With a cane or walker, watch for changes in the paving.',
    clear: 'Weather adds little strain — a short loop with breaks works well.',
    cloud: 'Light is gentle and it is comfortable to walk with regular breaks.',
    fog: 'Steps and uneven paving get harder to see. Allow extra time and watch your feet.',
    snow: 'Ice and snow raise the risk of falling on the paving. Confirm covered rest points before you set out.',
    neutral: 'Conditions should add little strain. Take regular breaks and use the shortest route.',
  },
};

const audienceStringsByLang: Record<Lang, AudiencesStrings> = { ja: audiencesJa, en: audiencesEn };

export const audienceStrings = (lang: Lang = 'ja'): AudiencesStrings =>
  audienceStringsByLang[lang] ?? audienceStringsByLang.ja;
