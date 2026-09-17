/**
 * 天気データ取得（Server Component 側で実行）。
 *
 * - Open-Meteo の Forecast API を使用。API キー不要。
 * - ビルド時（静的出力）またはサーバー実行時に呼び出され、結果をメモリキャッシュします。
 * - フロントエンドには「無料 / キー不要」といった実装注釈は表示しません。
 */

export type WeatherNow = {
  temperature: number;
  apparent: number;
  humidity: number;
  wind: number;
  precipitation: number;
  code: number;
  isDay: boolean;
};

export type WeatherDay = {
  date: string;
  code: number;
  tmax: number;
  tmin: number;
  pop: number | null;
  uv: number | null;
};

export type WeatherData = {
  now: WeatherNow;
  days: WeatherDay[];
  fetchedAt: string;
  ok: boolean;
};

// WMO コード表と言語別ラベルは @lib/wmo に移動（サーバー・クライアント共用）。

const cache = new Map<string, { at: number; data: WeatherData }>();
const CACHE_TTL_MS = 30 * 60 * 1000;

const buildUrl = (lat: number, lon: number): string =>
  'https://api.open-meteo.com/v1/forecast' +
  `?latitude=${lat}&longitude=${lon}` +
  '&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,is_day' +
  '&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max' +
  '&timezone=Asia%2FTokyo&forecast_days=7&wind_speed_unit=ms';

export const getWeather = async (lat: number, lon: number): Promise<WeatherData> => {
  const key = `${lat.toFixed(4)},${lon.toFixed(4)}`;
  const cached = cache.get(key);
  if (cached && Date.now() - cached.at < CACHE_TTL_MS) return cached.data;

  const fallback: WeatherData = {
    now: { temperature: 0, apparent: 0, humidity: 0, wind: 0, precipitation: 0, code: 0, isDay: true },
    days: [],
    fetchedAt: '',
    ok: false,
  };

  try {
    const controller = new AbortController();
    const hardTimer = setTimeout(() => controller.abort(), 3500);
    const res = await Promise.race<Response | null>([
      fetch(buildUrl(lat, lon), {
        cache: 'force-cache',
        signal: controller.signal,
      } as RequestInit),
      new Promise<null>((resolve) => setTimeout(() => resolve(null), 3500)),
    ]);
    clearTimeout(hardTimer);
    if (!res || !res.ok) return fallback;
    const j = (await res.json()) as {
      current?: Record<string, number>;
      daily?: {
        time: string[];
        weather_code: number[];
        temperature_2m_max: number[];
        temperature_2m_min: number[];
        precipitation_probability_max: (number | null)[];
        uv_index_max: (number | null)[];
      };
    };

    const c = j.current ?? {};
    const d = j.daily;
    const days: WeatherDay[] = d
      ? d.time.map((date, i) => ({
          date,
          code: d.weather_code[i],
          tmax: Math.round(d.temperature_2m_max[i]),
          tmin: Math.round(d.temperature_2m_min[i]),
          pop: d.precipitation_probability_max[i] ?? null,
          uv: d.uv_index_max[i] ?? null,
        }))
      : [];

    const data: WeatherData = {
      now: {
        temperature: Math.round(c.temperature_2m ?? 0),
        apparent: Math.round(c.apparent_temperature ?? c.temperature_2m ?? 0),
        humidity: Math.round(c.relative_humidity_2m ?? 0),
        wind: Math.round((c.wind_speed_10m ?? 0) * 10) / 10,
        precipitation: Math.round((c.precipitation ?? 0) * 10) / 10,
        code: Math.round(c.weather_code ?? 0),
        isDay: c.is_day !== 0,
      },
      days,
      fetchedAt: new Date().toISOString(),
      ok: true,
    };
    cache.set(key, { at: Date.now(), data });
    return data;
  } catch {
    return fallback;
  }
};

/** 日付（YYYY-MM-DD）を言語別に整形（ja: 9/16（水） / en: 9/16 (Wed)） */
export const formatDate = (iso: string, lang: 'ja' | 'en' = 'ja'): string => {
  const d = new Date(`${iso}T00:00:00+09:00`);
  if (Number.isNaN(d.getTime())) return iso;
  const wdJa = ['日', '月', '火', '水', '木', '金', '土'][d.getDay()];
  const wdEn = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][d.getDay()];
  const md = `${d.getMonth() + 1}/${d.getDate()}`;
  return lang === 'en' ? `${md} (${wdEn})` : `${md}（${wdJa}）`;
};

/** 曜日だけを返す（ja: 水 / en: Wed） */
export const weekdayShort = (iso: string, lang: 'ja' | 'en' = 'ja'): string => {
  const d = new Date(`${iso}T00:00:00+09:00`);
  if (Number.isNaN(d.getTime())) return '';
  const wdJa = ['日', '月', '火', '水', '木', '金', '土'][d.getDay()];
  const wdEn = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][d.getDay()];
  return lang === 'en' ? wdEn : wdJa;
};
