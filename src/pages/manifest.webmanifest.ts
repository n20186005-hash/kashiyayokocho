import type { APIRoute } from 'astro';
import { site } from '@config/site';

export const prerender = true;

export const GET: APIRoute = () => {
  const manifest = {
    id: `/`,
    name: `${site.attractionName}（${site.city}）｜${site.name}`,
    short_name: site.shortName,
    description: site.description,
    lang: site.lang,
    dir: 'ltr',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'any',
    background_color: site.background,
    theme_color: site.themeColor,
    categories: ['travel', 'navigation', 'lifestyle'],
    icons: [
      { src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
      { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/icons/maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
    shortcuts: [
      { name: '交通・駐車場', url: '/access/' },
      { name: '周辺スポット', url: '/nearby/' },
      { name: '旅のリスト', url: '/plan/' },
      { name: '記念カード', url: '/memory-card/' },
    ],
  };

  return new Response(JSON.stringify(manifest, null, 2), {
    headers: {
      'Content-Type': 'application/manifest+json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
