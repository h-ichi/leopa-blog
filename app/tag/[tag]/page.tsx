import { getPosts } from "@/lib/posts"
import Link from "next/link"
import Breadcrumb from "@/components/Breadcrumb"

interface TagPageProps {
  params: { tag: string }
}

export default function TagPage({ params }: TagPageProps) {
  const posts = getPosts()

  // URLタグをデコードして安全に比較
  const tag = decodeURIComponent(params.tag).trim()

  // タグに一致する記事をフィルター
  const filtered = posts.filter(post =>
    post.tags.map(t => t.trim()).includes(tag)
  )

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <Breadcrumb />
      <h1 className="text-4xl font-bold mb-12 text-center text-orange-500">
        #{tag} の記事一覧
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {filtered.map((post) => (
          <div
            key={post.slug}
            className="group block bg-white border border-orange-100 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-1 transition"
          >
            {/* 記事タイトルとリンク */}
            <Link href={`/blog/${post.slug}`} className="block">
              <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-orange-500 transition">
                {post.title}
              </h2>

              <div className="mt-6 text-sm text-orange-400 group-hover:text-orange-600 transition">
                Read article →
              </div>
            </Link>

            {/* タグリンク（別Linkでネストなし） */}
            {post.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <Link
                    key={t}
                    href={`/tag/${encodeURIComponent(t)}`}
                    className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded"
                  >
                    #{t}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  )
}