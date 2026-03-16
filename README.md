# 🦎 Leopard Gecko Blog

レオパードゲッコーの飼育情報・モルフ・餌・飼育環境などを紹介するブログです。
SEOを意識した構造で作成し、将来的にはレオパ飼育管理アプリへの導線としても活用します。

---

# 🌐 URL

```
https://your-domain.com
```

---

# 🚀 技術スタック

## Frontend

* Next.js (App Router)
* React
* TypeScript

## Styling

* Tailwind CSS

## Content Management

* Markdown
* gray-matter
* remark

## SEO

* Next.js Metadata API
* sitemap
* robots.txt
* Open Graph

## Deployment

* Vercel

---

# 📁 ディレクトリ構成

```
leopa-blog
│
├─ app
│   ├─ layout.tsx
│   ├─ page.tsx
│   │
│   ├─ blog
│   │   ├─ page.tsx
│   │   └─ [slug]
│   │       └─ page.tsx
│   │
│   ├─ category
│   │   └─ [category]
│   │       └─ page.tsx
│   │
│   ├─ tag
│   │   └─ [tag]
│   │       └─ page.tsx
│   │
│   ├─ sitemap.ts
│   └─ robots.ts
│
├─ components
│   ├─ Header.tsx
│   ├─ Footer.tsx
│   ├─ PostCard.tsx
│   ├─ TableOfContents.tsx
│   └─ AdSense.tsx
│
├─ content
│   └─ posts
│       └─ example-post.md
│
├─ lib
│   └─ posts.ts
│
├─ public
│   └─ images
│
└─ styles
    └─ globals.css
```

---

# ✍️ 記事の作成

記事は `content/posts` に Markdown で作成します。

## 記事例

```
content/posts/leopard-gecko-food.md
```

```
---
title: レオパードゲッコーの餌まとめ
date: 2026-03-07
category: food
tags: ["餌", "コオロギ"]
description: レオパードゲッコーの餌について解説
---

## レオパの餌

レオパードゲッコーは主に昆虫を食べます。

- コオロギ
- デュビア
- ミルワーム
```

---

# 🔎 SEO対策

このブログでは以下のSEO対策を行っています。

* 静的生成（SSG）
* メタデータ管理
* sitemap生成
* robots.txt
* Open Graph

---

# 💰 収益化

## Google AdSense

記事内広告によるクリック収益

## アフィリエイト

主な商品

* レオパ飼育ケージ
* パネルヒーター
* UVBライト
* 餌（コオロギ / デュビア）

主なASP

* Amazonアソシエイト
* 楽天アフィリエイト

---

# 📈 記事カテゴリ

* 飼育方法
* 餌
* モルフ
* 病気
* 初心者ガイド

---

# 🔗 将来予定

* レオパードゲッコー **モルフ図鑑**
* レオパ飼育 **管理アプリ**
* 飼育カレンダー
* 爬虫類ショップ紹介

---

# ⚡ セットアップ

```
git clone https://github.com/yourname/leopa-blog
cd leopa-blog
npm install
npm run dev
```

---

# 🧑‍💻 Author

Leopard Gecko enthusiast & developer
