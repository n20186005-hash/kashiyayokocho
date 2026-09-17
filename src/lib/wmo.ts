/** WMO 天気コード → 表示ラベル・アイコン（言語別）。サーバー・クライアント共用。 */

export type CodeInfo = { label: string; icon: string };
export type Lang = 'ja' | 'en';

export const WMO_JA: Record<number, CodeInfo> = {
  0: { label: '晴れ', icon: '☀️' },
  1: { label: '大体晴れ', icon: '🌤️' },
  2: { label: '一部曇り', icon: '⛅' },
  3: { label: '曇り', icon: '☁️' },
  45: { label: '霧', icon: '🌫️' },
  48: { label: '霧氷', icon: '🌫️' },
  51: { label: '弱い霧雨', icon: '🌦️' },
  53: { label: '霧雨', icon: '🌦️' },
  55: { label: '強い霧雨', icon: '🌧️' },
  56: { label: '着氷性の霧雨', icon: '🌧️' },
  57: { label: '強い着氷性の霧雨', icon: '🌧️' },
  61: { label: '弱い雨', icon: '🌦️' },
  63: { label: '雨', icon: '🌧️' },
  65: { label: '強い雨', icon: '🌧️' },
  66: { label: '着氷性の雨', icon: '🌧️' },
  67: { label: '強い着氷性の雨', icon: '🌧️' },
  71: { label: '弱い雪', icon: '🌨️' },
  73: { label: '雪', icon: '🌨️' },
  75: { label: '強い雪', icon: '❄️' },
  77: { label: '雪あられ', icon: '🌨️' },
  80: { label: 'にわか雨', icon: '🌦️' },
  81: { label: 'にわか雨', icon: '🌧️' },
  82: { label: '強いにわか雨', icon: '⛈️' },
  85: { label: 'にわか雪', icon: '🌨️' },
  86: { label: '強いにわか雪', icon: '❄️' },
  95: { label: '雷雨', icon: '⛈️' },
  96: { label: '雷雨（ひょうを伴う）', icon: '⛈️' },
  99: { label: '強い雷雨（ひょうを伴う）', icon: '⛈️' },
};

export const WMO_EN: Record<number, CodeInfo> = {
  0: { label: 'Clear', icon: '☀️' },
  1: { label: 'Mainly clear', icon: '🌤️' },
  2: { label: 'Partly cloudy', icon: '⛅' },
  3: { label: 'Overcast', icon: '☁️' },
  45: { label: 'Fog', icon: '🌫️' },
  48: { label: 'Rime fog', icon: '🌫️' },
  51: { label: 'Light drizzle', icon: '🌦️' },
  53: { label: 'Drizzle', icon: '🌦️' },
  55: { label: 'Heavy drizzle', icon: '🌧️' },
  56: { label: 'Freezing drizzle', icon: '🌧️' },
  57: { label: 'Heavy freezing drizzle', icon: '🌧️' },
  61: { label: 'Light rain', icon: '🌦️' },
  63: { label: 'Rain', icon: '🌧️' },
  65: { label: 'Heavy rain', icon: '🌧️' },
  66: { label: 'Freezing rain', icon: '🌧️' },
  67: { label: 'Heavy freezing rain', icon: '🌧️' },
  71: { label: 'Light snow', icon: '🌨️' },
  73: { label: 'Snow', icon: '🌨️' },
  75: { label: 'Heavy snow', icon: '❄️' },
  77: { label: 'Snow grains', icon: '🌨️' },
  80: { label: 'Light showers', icon: '🌦️' },
  81: { label: 'Showers', icon: '🌧️' },
  82: { label: 'Violent showers', icon: '⛈️' },
  85: { label: 'Snow showers', icon: '🌨️' },
  86: { label: 'Heavy snow showers', icon: '❄️' },
  95: { label: 'Thunderstorm', icon: '⛈️' },
  96: { label: 'Thunderstorm with hail', icon: '⛈️' },
  99: { label: 'Severe thunderstorm with hail', icon: '⛈️' },
};

export const WMO: Record<Lang, Record<number, CodeInfo>> = { ja: WMO_JA, en: WMO_EN };

export const describeCode = (code: number, isDay = true, lang: Lang = 'ja'): CodeInfo => {
  const table = WMO[lang] ?? WMO_JA;
  const hit = table[code];
  if (hit) return isDay ? hit : { label: lang === 'en' ? `${hit.label} (night)` : `${hit.label}（夜）`, icon: hit.icon };
  return lang === 'en' ? { label: 'Other conditions', icon: '🌡️' } : { label: 'その他の天気', icon: '🌡️' };
};
