import { site } from '@config/site';

export const GET = () => {
  const body = `User-agent: *
Allow: /

# 低价值 / 工具类页面不参与索引
Disallow: /404

Sitemap: ${site.url}/sitemap-index.xml
`;
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
