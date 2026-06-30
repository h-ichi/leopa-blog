import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "レオパードゲッコーとの暮らしと飼育記録｜まいげっこBLOG",
  description: "レオパードゲッコーとの暮らしを記録するブログ。飼育記録やモルフ紹介、日々の出来事を気ままに綴っています。",
  metadataBase: new URL("https://mygekkoblog.com"),
  icons: {
    icon: "/leopa-blog_favicon.png",
  },
  verification: {
    google: "6J2LUqCKP7Dp8C4dy6Z4MndM-Z3u5BfuSZQB7Q1lyR0",
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
        <Header />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />
        {/* Google Analytics */}
        <GoogleAnalytics gaId="G-KP0W9TTBGX" />
        
      </body>
    </html>
  );
}

