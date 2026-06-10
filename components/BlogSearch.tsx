"use client"

import { useState } from "react"
import Link from "next/link"

type Post = {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
}

const POSTS_PER_PAGE = 6

export default function BlogSearch({
  posts,
}: {
  posts: Post[]
}) {
  const [keyword, setKeyword] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  const filteredPosts = posts.filter((post) => {
    const search = keyword.toLowerCase()

    return (
      post.title.toLowerCase().includes(search) ||
      post.description.toLowerCase().includes(search) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(search)
      )
    )
  })

  const totalPages = Math.ceil(
    filteredPosts.length / POSTS_PER_PAGE
  )

  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  )

  return (
    <>
      {/* 検索フォーム */}
      <div className="mb-10">
        <input
          type="text"
          placeholder="記事を検索（例：脱皮、餌、臭い）"
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value)
            setCurrentPage(1)
          }}
          className="w-full border border-orange-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-300"
        />
      </div>

      <p className="mb-6 text-sm text-gray-500">
        {filteredPosts.length}件の記事が見つかりました
      </p>

      {/* 記事一覧 */}
      <div className="grid md:grid-cols-2 gap-8">
        {currentPosts.map((post) => (
          <div
            key={post.slug}
            className="group block bg-white border border-orange-100 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-1 transition"
          >
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-orange-500 transition">
                {post.title}
              </h2>

              <p className="text-orange-300 mt-2 text-xs">
                {new Date(post.date).toLocaleDateString("ja-JP")}
              </p>

              <p className="mt-4 text-gray-600 text-sm">
                {post.description}
              </p>
            </Link>

            {post.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 検索結果なし */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          該当する記事が見つかりませんでした
        </div>
      )}

      {/* ページネーション */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-12 flex-wrap">
          <button
            onClick={() =>
              setCurrentPage((prev) =>
                Math.max(prev - 1, 1)
              )
            }
            disabled={currentPage === 1}
            className="border px-4 py-2 rounded disabled:opacity-50"
          >
            前へ
          </button>

          {Array.from(
            { length: totalPages },
            (_, i) => (
              <button
                key={i + 1}
                onClick={() =>
                  setCurrentPage(i + 1)
                }
                className={`px-4 py-2 rounded border ${
                  currentPage === i + 1
                    ? "bg-orange-400 text-white border-orange-400"
                    : "hover:bg-orange-100"
                }`}
              >
                {i + 1}
              </button>
            )
          )}

          <button
            onClick={() =>
              setCurrentPage((prev) =>
                Math.min(prev + 1, totalPages)
              )
            }
            disabled={currentPage === totalPages}
            className="border px-4 py-2 rounded disabled:opacity-50"
          >
            次へ
          </button>
        </div>
      )}
    </>
  )
}