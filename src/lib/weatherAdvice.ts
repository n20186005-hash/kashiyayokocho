/**
 * 天気に基づく「行動アドバイス」エンジン（Server Component とクライアント両方で使用）。
 *
 * 方針：
 * - ただ気温を出すのではなく、「この天気なら何をすべきか」を人間の言葉で出力する。
 * - 条件を満たさない項目は表示しない（動的レンダリング）。
 * - 都市型（街歩き）の観光地に特化。海・山の特殊リスクは扱わない。
 * - フロントエンドに「無料 / キー不要」などの実装注釈は出さない。
 */

import { adviceStrings, audienceStrings, type AudienceStrings } from '@i18n/advice';
import { t, type Lang } from '@i18n/index';

/** 風速(m/s) → 蒲福風力階級 */
export const beaufort = (ms: number): number => {
  const s = Math.abs(ms);
  if (s < 0.3) return 0;
  if (s < 1.6) return 1;
  if (s < 3.4) return 2;
  if (s < 5.5) return 3;
  if (s < 8.0) return 4;
  if (s < 10.8) return 5;
  if (s < 13.9) return 6;
  if (s < 17.2) return 7;
  if (s < 20.8) return 8;
  if (s < 24.5) return 9;
  return 10;
};

export type AdviceInput = {
  code: number;
  isDay: boolean;
  tempC: number;
  apparent: number;
  windMs: number;
  humidity: number;
  pop: number | null;
  uvMax: number | null;
  tmax: number;
  tmin: number;
};

export type AudienceAdvice = {
  families: string[];
  photography: string[];
  accessible: string[];
};

export type Advice = {
  travel: string[];
  activity: string[];
  items: string[];
  alerts: string[];
  /** 亲子 / 摄影 / 无障碍 の三类人群向け個別アドバイス。 */
  audiences: AudienceAdvice;
};

const isThunder = (c: number): boolean => c >= 95;
const isHeavyRain = (c: number): boolean => [65, 66, 67, 82, 99].includes(c) || isThunder(c);
const isLightRain = (c: number): boolean => [51, 53, 55, 56, 57, 61, 63, 80, 81].includes(c);
const isRain = (c: number): boolean =>
  [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(c) || isThunder(c);
const isSnow = (c: number): boolean => [71, 73, 75, 77, 85, 86].includes(c);
const isFog = (c: number): boolean => [45, 48].includes(c);
const isClear = (c: number): boolean => c <= 1;
const isCloud = (c: number): boolean => c >= 2 && c <= 3;

export const buildAdvice = (w: AdviceInput, lang: Lang = 'ja'): Advice => {
  const s = adviceStrings(lang);
  const travel: string[] = [];
  const activity: string[] = [];
  const items: string[] = [];
  const alerts: string[] = [];

  const windLv = beaufort(w.windMs);
  const hasRain = isRain(w.code);
  const pop = w.pop ?? 0;
  const hot = w.tempC >= 32 || w.tmax >= 32;
  const cold = w.tmax <= 10;
  const bigSwing = w.tmax - w.tmin > 8;
  const uvStrong = w.uvMax != null && w.uvMax >= 5;

  // ── リスク注意（赤・最上位） ──
  if (isThunder(w.code)) alerts.push(s.alertThunder);
  if (isHeavyRain(w.code)) alerts.push(s.alertHeavyRain);
  if (windLv >= 7) alerts.push(s.alertWind7);

  // ── 出行穿搭 ──
  if (pop >= 60 && !hasRain) travel.push(s.travelPop60);
  if (isLightRain(w.code)) travel.push(s.travelLightRain);
  if (isHeavyRain(w.code)) travel.push(s.travelHeavyRain);
  if (hot) travel.push(s.travelHot);
  if (uvStrong) travel.push(s.travelUv);
  if (bigSwing) travel.push(s.travelSwing);
  if (cold) travel.push(s.travelCold);
  if (windLv >= 5) travel.push(s.travelWind5);
  if (isClear(w.code) && alerts.length === 0) travel.push(s.travelClear);
  if (isCloud(w.code)) travel.push(s.travelCloud);
  if (isFog(w.code)) travel.push(s.travelFog);
  if (isSnow(w.code)) travel.push(s.travelSnow);

  // ── 游玩安排 ──
  if (hasRain && !isHeavyRain(w.code)) activity.push(s.activityRain);
  if (isHeavyRain(w.code) || isThunder(w.code)) activity.push(s.activityHeavy);
  if (isClear(w.code) && alerts.length === 0) activity.push(s.activityClear);
  if (isCloud(w.code)) activity.push(s.activityCloud);
  if (hot) activity.push(s.activityHot);
  if (windLv >= 5) activity.push(s.activityWind5);
  if (isFog(w.code)) activity.push(s.activityFog);

  // ── 随身物品 ──
  if (pop >= 60 || hasRain || isFog(w.code)) {
    items.push(windLv >= 5 || isHeavyRain(w.code) ? s.itemRaincoat : s.itemFoldingUmbrella);
  }
  if (hot || uvStrong) {
    items.push(s.itemSun);
    items.push(s.itemWater);
  }
  if (cold) items.push(s.itemCoat);
  if (bigSwing) items.push(s.itemLayer);
  if (isFog(w.code)) items.push(s.itemMask);

  // 何も条件に合わない穏やかな日は、中立的な1行を出す
  if (travel.length === 0 && activity.length === 0 && items.length === 0) {
    travel.push(s.neutral);
  }

  // ── 三类人群向け（亲子 / 摄影 / 无障碍）──
  // 条件に合う行だけを出し、1件も無いときは中立文にフォールバックする。
  const au = audienceStrings(lang);
  const flags = {
    thunder: isThunder(w.code),
    heavy: isHeavyRain(w.code),
    alert: alerts.length > 0,
    pop60: pop >= 60,
    rainLight: isLightRain(w.code),
    hot,
    uv: uvStrong,
    swing: bigSwing,
    cold,
    wind5: windLv >= 5,
    clear: isClear(w.code) && alerts.length === 0,
    cloud: isCloud(w.code),
    fog: isFog(w.code),
    snow: isSnow(w.code),
  };
  const pick = (strings: AudienceStrings): string[] => {
    const out: string[] = [];
    if (flags.thunder) out.push(strings.thunder);
    if (flags.heavy) out.push(strings.heavy);
    if (flags.alert) out.push(strings.alert);
    if (flags.pop60) out.push(strings.pop60);
    if (flags.rainLight) out.push(strings.rainLight);
    if (flags.hot) out.push(strings.hot);
    if (flags.uv) out.push(strings.uv);
    if (flags.swing) out.push(strings.swing);
    if (flags.cold) out.push(strings.cold);
    if (flags.wind5) out.push(strings.wind5);
    if (flags.clear) out.push(strings.clear);
    if (flags.cloud) out.push(strings.cloud);
    if (flags.fog) out.push(strings.fog);
    if (flags.snow) out.push(strings.snow);
    if (out.length === 0) out.push(strings.neutral);
    return Array.from(new Set(out));
  };
  const audiences: AudienceAdvice = {
    families: pick(au.families),
    photography: pick(au.photography),
    accessible: pick(au.accessible),
  };

  const uniq = (a: string[]): string[] => Array.from(new Set(a));
  return {
    travel: uniq(travel),
    activity: uniq(activity),
    items: uniq(items),
    alerts: uniq(alerts),
    audiences,
  };
};

const block = (title: string, icon: string, items: string[]): string => {
  if (!items.length) return '';
  return `<div class="rounded-2xl bg-white/8 p-5">
    <p class="text-xs font-black uppercase tracking-[.18em] text-[#f6c96b]">${icon} ${title}</p>
    <ul class="mt-3 grid gap-2 text-sm leading-7 text-[#f6ddb4]">
      ${items.map((t) => `<li>${t}</li>`).join('')}
    </ul>
  </div>`;
};

/** アドバイスを HTML に描画（サーバー・クライアント共通）。条件を満たさないブロックは非表示。 */
export const renderAdvice = (a: Advice, lang: Lang = 'ja'): string => {
  const dict = t(lang).weather;
  const alerts = a.alerts.length
    ? `<div class="rounded-2xl bg-[rgba(220,90,70,.22)] p-5 ring-1 ring-[rgba(255,180,160,.55)]">
        <p class="text-xs font-black uppercase tracking-[.18em] text-[#ffd9cf]">⚠️ ${dict.caution}</p>
        <ul class="mt-3 grid gap-2 text-sm leading-7 text-[#ffe9e2]">
          ${a.alerts.map((t) => `<li>${t}</li>`).join('')}
        </ul>
      </div>`
    : '';
  const au = audienceStrings(lang);
  const audience = a.audiences
    ? `
    <p class="mt-6 text-xs font-black uppercase tracking-[.18em] text-[#f6c96b]">${dict.audienceTitle}</p>
    <div class="mt-3 grid gap-4 md:grid-cols-3">
      ${block(au.families.label, au.families.icon, a.audiences.families)}
      ${block(au.photography.label, au.photography.icon, a.audiences.photography)}
      ${block(au.accessible.label, au.accessible.icon, a.audiences.accessible)}
    </div>`
    : '';
  return `
    ${alerts}
    <div class="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      ${block(dict.dress, '🧥', a.travel)}
      ${block(dict.plan, '🗺️', a.activity)}
      ${block(dict.items, '🎒', a.items)}
    </div>
    ${audience}`;
};
