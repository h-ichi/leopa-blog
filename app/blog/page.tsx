import { getPosts } from "@/lib/posts"
import Link from "next/link"

export default function BlogPage() {

  const posts = getPosts()

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold mb-12 text-center">
        記事一覧
      </h1>

      <div className="grid md:grid-cols-2 gap-8">

        {posts.map((post) => (

          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-1 transition"
          >

            <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
              {post.title}
            </h2>

            <div className="mt-6 text-sm text-gray-400 group-hover:text-blue-500 transition">
              Read article →
            </div>

          </Link>

        ))}

      </div>

    </main>
  )
}