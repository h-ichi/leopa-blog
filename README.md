# 🦎 まいげっこ BLOG

レオパードゲッコー（ヒョウモントカゲモドキ）の飼育情報・モルフ・餌・飼育環境などを発信するブログサイトです。

SEOを意識したブログ構造で開発し、将来的にはレオパ飼育管理アプリ「Leopa LOG」への導線・集客サイトとして活用することを目的としています。

---

# 🌐 URL

```
https://mygekkoblog.com/
```

---

# 🚀 技術スタック

## Frontend

* Next.js 14
* React
* TypeScript

## Styling

* Tailwind CSS

## Content Management

* HTMLベースの記事管理
* gray-matter
* remark

## SEO

* Next.js Metadata API
* sitemap.ts
* robots.txt
* Open Graph
* 動的Metadata生成

## Authentication

* Middleware
* 管理画面ログイン認証

## Development Environment

* Docker
* Docker Compose

## Deployment

* Vercel

---

# 📁 ディレクトリ構成

```
leopa-blog

├── app
│   ├── (site)
│   │   ├── about
│   │   ├── blog
│   │   │   ├── [slug]
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── contact
│   │   ├── privacy-policy
│   │   └── tag
│   │       └── [tag]
│   │
│   ├── admin
│   │   ├── page.tsx
│   │   ├── posts
│   │   │   ├── page.tsx
│   │   │   └── [slug]
│   │   │       └── page.tsx
│   │   └── tags
│   │
│   ├── api
│   │   └── auth
│   │
│   ├── login
│   ├── sitemap.ts
│   ├── robots.txt
│   └── globals.css
│
├── components
│   ├── admin
│   │   ├── DashboardCard.tsx
│   │   ├── Header.tsx
│   │   ├── PostTable.tsx
│   │   ├── SearchBox.tsx
│   │   └── Sidebar.tsx
│   │
│   ├── auth
│   │   └── LoginForm.tsx
│   │
│   ├── blog
│   │   └── BlogLayout.tsx
│   │
│   ├── Breadcrumb.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   └── RelatedPosts.tsx
│
├── content
│   └── *.html
│       └── ブログ記事データ
│
├── lib
│   ├── analysis
│   │   ├── counters.ts
│   │   ├── recommendations.ts
│   │   ├── score.ts
│   │   ├── types.ts
│   │   └── index.ts
│   │
│   ├── auth.ts
│   ├── posts.ts
│   └── tagDescriptions.ts
│
├── public
│   ├── images
│   └── instagram
│
├── middleware.ts
├── docker-compose.yml
├── Dockerfile
├── next.config.mjs
├── package.json
└── README.md
```

---

# ✍️ 記事管理

記事は `content` 配下のHTMLファイルで管理しています。

例：

```
content/leopard-gecko-bite.html
```

記事情報として以下を管理しています。

* タイトル
* Description
* 本文
* タグ
* 画像情報

---

# 🔎 SEO分析機能

管理画面では記事ごとのSEO分析を自動で行います。

## 分析項目

* タイトル文字数
* Description文字数
* 本文文字数
* H1数
* H2数
* 画像数
* alt属性不足
* 内部リンク数

## SEOスコア

記事内容を解析し、SEOスコアを算出します。

例：

```
SEO Score

92点
```

## 改善レコメンド

分析結果から改善ポイントを自動生成します。

例：

```
Descriptionが短めです。
80〜140文字がおすすめです。

関連記事への内部リンクを追加しましょう。
```

---

# 📊 管理画面機能

管理画面では以下の機能を提供しています。

* 記事一覧表示
* 記事詳細確認
* SEO分析
* SEOスコア表示
* 改善ポイント表示
* タグ管理

---

# 🔗 関連プロジェクト

## Leopa LOG

レオパードゲッコー専用の飼育管理アプリ。

予定機能：

* 飼育記録
* 給餌管理
* 排便記録
* 写真管理
* 飼育データ分析

ブログからアプリへの導線を作り、飼育情報と管理ツールを連携させる予定です。

---

# 💰 収益化予定

## Google AdSense

ブログ記事内広告による収益化。

## アフィリエイト

対象商品：

* レオパ飼育ケージ
* パネルヒーター
* 温湿度計
* 飼育用品
* 餌（コオロギ・デュビア）

予定ASP：

* Amazonアソシエイト
* 楽天アフィリエイト

---

# 📈 記事カテゴリ

* レオパ飼育方法
* 餌
* モルフ
* 初心者向け情報
* 飼育記録
* レオパあるある
* 飼育環境

---

# 🔮 今後の予定

* SEO分析機能強化
* Google Search Console API連携
* 検索順位管理
* AIによる記事改善提案
* 飼育データ分析機能

---


