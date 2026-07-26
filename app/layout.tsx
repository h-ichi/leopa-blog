import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "レオパードゲッコーとの暮らしと飼育記録｜まいげっこBLOG",
  description:
    "レオパードゲッコーとの暮らしを記録するブログ。飼育記録やモルフ紹介、日々の出来事を気ままに綴っています。",
  metadataBase: new URL("https://mygekkoblog.com"),
  icons: {
    icon: "/leopa-blog_favicon.png",
  },
  verification: {
    google: "wfCKaucT7cywHY6sWpOVL6u209yJOO7R6RG3wvyK0jo",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="antialiased">
        {children}

        <GoogleAnalytics gaId="G-KP0W9TTBGX" />
      </body>
    </html>
  );
}