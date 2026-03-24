"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

type Props = {
  currentTitle?: string
}

const nameMap: Record<string, string> = {
  blog: "記事一覧",
  tag: "タグ",
  about: "運営者情報",
  contact: "お問い合わせ",
  "privacy-policy": "プライバシーポリシー",
}

export default function Breadcrumb({ currentTitle }: Props) {
  const pathname = usePathname()
  const segments = pathname.split("/").filter(Boolean)

  const breadcrumbItems = [
    { name: "ホーム", href: "/" },
    ...segments.map((segment, index) => {
      const isLast = index === segments.length - 1

      return {
        name:
          isLast && currentTitle
            ? currentTitle // ← 記事タイトル使う
            : nameMap[segment] || decodeURIComponent(segment),
        href: "/" + segments.slice(0, index + 1).join("/"),
      }
    }),
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://leopa-blog.vercel.app${item.href}`,
    })),
  }

  return (
    <>
      <nav className="text-sm text-gray-500 mb-6">
        <ul className="flex flex-wrap items-center gap-2">
          {breadcrumbItems.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              {index !== 0 && <span>{">"}</span>}
              <Link href={item.href} className="hover:underline">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}