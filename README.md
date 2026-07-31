# 菓子屋横丁さんぽ手帖

埼玉県川越市「菓子屋横丁」の非公式観光ガイドサイトです。日本語単語ページ構成で、交通、駐車場、周辺グルメ、周辺スポット、FAQ、旅のリスト、Canvas 記念カードを含みます。

## 技术栈

- Astro + TypeScript
- Tailwind CSS（Vite 插件）
- pnpm
- Cloudflare Workers Static Assets（`wrangler.jsonc`）
- 无数据库、无登录、无 CMS
- GA4：`G-HXM22WWPKP`

## 本地开发

```bash
corepack enable
corepack prepare pnpm@11.18.0 --activate
pnpm install
pnpm dev
```

## 构建

```bash
pnpm build
```

构建产物输出到 `dist/`。

## Cloudflare Worker 部署

如需输出 canonical 和 Open Graph 的绝对链接，请先配置正式域名：

```bash
cp .env.example .env
# 修改 PUBLIC_SITE_URL=https://your-domain.com
pnpm build
pnpm deploy
```

`wrangler.jsonc` 使用 Cloudflare Workers Static Assets：

```jsonc
{
  "name": "kashiya-yokocho-guide",
  "assets": {
    "directory": "./dist",
    "not_found_handling": "404-page"
  }
}
```

## 页面

- `/`：首页、基础信息、费用、最佳时段、FAQ 摘要、地图
- `/access/`：详细交通、停车信息、地图
- `/food/`：周边グルメ
- `/nearby/`：周边スポット
- `/plan/`：旅のリスト，使用 localStorage，仅保存在当前设备
- `/memory-card/`：记念カード，使用浏览器 Canvas 本地合成并下载，不上传照片
- `/faq/`：FAQ 页面，含 FAQPage 结构化数据
- `/privacy/`：隐私说明
- `/credits/`：照片与信息来源

## 结构化数据

`src/data/content.ts` 中生成 JSON-LD：

- `TouristAttraction`
- `LocalBusiness`
- `FAQPage`
- `WebSite`
- `WebPage`

包含名称、地址、坐标、营业时间说明、评分参考值、FAQ。

## 图片

站内图片已放在 `public/images/`，页面直接引用本地文件。图片来自 Wikimedia Commons 等许可来源，详情见 `/credits/`。

## 地图

Google Maps iframe 已从中文/台湾参数改为日本本地语言/地区参数：`!1sja!2sjp`。

## 非官方声明

页脚已加入：本网站不是菓子屋横丁、各店铺或自治体的官方网站，仅为旅行者整理公开信息的非官方指南。
