import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "わたしのレオパ BLOG",
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KP0W9TTBGX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KP0W9TTBGX');
          `}
        </Script>

      </body>
    </html>
  );
}

