import { getPosts } from "@/lib/posts"
import Link from "next/link"
import Breadcrumb from "@/components/Breadcrumb"

const POSTS_PER_PAGE = 6

export default function BlogPage() {
  const posts = getPosts()

  const currentPosts = posts.slice(0, POSTS_PER_PAGE)

  // 記事に含まれる全タグを集めて重複を削除
  const allTags = Array.from(new Set(posts.flatMap(post => post.tags)))

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <Breadcrumb />
      <h1 className="text-4xl font-bold mb-12 text-center text-orange-500">
        記事一覧
      </h1>

      {/* タグ一覧（動的） */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-orange-400">タグ一覧</h2>

        <div className="flex gap-4 flex-wrap">
          {allTags.map(tag => (
            <Link key={tag} href={`/tag/${encodeURIComponent(tag)}`}>
              <div className="border border-orange-200 text-orange-700 px-4 py-2 rounded hover:bg-orange-100 cursor-pointer">
                {tag}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        {currentPosts.map((post) => (
          <div
            key={post.slug}
            className="group block bg-white border border-orange-100 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-1 transition"
          >
            {/* 記事タイトルとリンク */}
            <Link href={`/blog/${post.slug}`} className="block">
              <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-orange-500 transition">
                {post.title}
              </h2>

             
              <p className="text-orange-300 mt-2 text-xs">
                {new Date(post.date).toLocaleDateString("ja-JP")}
              </p>
              
            </Link>

            {/* タグリンク（別Linkでネストなし） */}
            {post.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/tag/${encodeURIComponent(tag)}`}
                    className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-12">
        {Array.from({ length: totalPages }, (_, i) => (
          <Link
            key={i + 1}
            href={i === 0 ? "/blog" : `/blog/page/${i + 1}`}
            className="border px-4 py-2 rounded hover:bg-orange-100"
          >
            {i + 1}
          </Link>
        ))}
      </div>
    </main>
  )
}