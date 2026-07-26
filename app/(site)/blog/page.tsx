import { getPosts } from "@/lib/posts"
import Breadcrumb from "@/components/Breadcrumb"
import BlogSearch from "@/components/BlogSearch"
import Link from "next/link"

export default function BlogPage() {
  const posts = getPosts()

  const allTags = Array.from(
    new Set(posts.flatMap((post) => post.tags))
  )

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <Breadcrumb />

      <h1 className="text-4xl font-bold mb-12 text-center text-orange-500">
        記事一覧
      </h1>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-orange-400">
          タグ一覧
        </h2>

        <div className="flex gap-4 flex-wrap">
          {allTags.map((tag) => (
            <Link
              key={tag}
              href={`/tag/${encodeURIComponent(tag)}`}
            >
              <div className="border border-orange-200 text-orange-700 px-4 py-2 rounded hover:bg-orange-100 cursor-pointer">
                {tag}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <BlogSearch posts={posts} />
    </main>
  )
}