import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "わたしのげっこー BLOG | レオパ飼育、日常ブログ",
  description: "レオパードゲッコーの飼育記録・日常を紹介するブログ",
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

