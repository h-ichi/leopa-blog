"use client";

import { useMemo, useState } from "react";
import Link from "next/link";



type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  analysis: {
  wordCount: number;
  seoScore: number;
  status: "good" | "warning" | "bad";
  };
};

type Props = {
  posts: Post[];
};

export default function AdminPostsClient({
  posts,
}: Props) {
  const [keyword, setKeyword] =
    useState("");

  const [currentPage, setCurrentPage] =
    useState(1);

  const postsPerPage = 10;

  const filteredPosts = useMemo(() => {
    const q = keyword
      .trim()
      .toLowerCase();

    if (!q) return posts;

    return posts.filter((post) => {
      return (
        post.title
          .toLowerCase()
          .includes(q) ||
        post.description
          .toLowerCase()
          .includes(q) ||
        post.slug
          .toLowerCase()
          .includes(q) ||
        post.tags.some((tag) =>
          tag
            .toLowerCase()
            .includes(q)
        )
      );
    });
  }, [posts, keyword]);

  const totalPages = Math.ceil(
    filteredPosts.length /
      postsPerPage
  );

  const currentPosts =
    filteredPosts.slice(
      (currentPage - 1) *
        postsPerPage,
      currentPage * postsPerPage
    );

  return (
    <div className="space-y-6">
      {/* ヘッダー */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            記事一覧
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            全{" "}
            {
              filteredPosts.length
            }{" "}
            件の記事
          </p>
        </div>
      </div>

      {/* 検索 */}
      <input
        type="text"
        placeholder="記事を検索..."
        value={keyword}
        onChange={(e) => {
          setKeyword(
            e.target.value
          );
          setCurrentPage(1);
        }}
        className="w-full rounded-lg border border-gray-300 p-3"
      />

      {/* テーブル */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="min-w-full">
          <thead className="bg-gray-50 text-sm uppercase tracking-wide text-gray-500">
            <tr>
              <th className="px-6 py-4 text-left">
                タイトル
              </th>

              <th className="px-6 py-4 text-center">
                日付
              </th>

              <th className="px-6 py-4 text-center">
                文字数
              </th>

              <th className="px-6 py-4 text-center">
                SEO
              </th>

              <th className="px-6 py-4 text-left">
                タグ
              </th>

              <th className="px-6 py-4 text-center">
                操作
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {currentPosts.map(
              (post) => {
                const analysis = post.analysis;

                return (
                  <tr
                    key={
                      post.slug
                    }
                    className="transition hover:bg-green-50"
                  >
                    <td className="px-6 py-5 font-medium text-gray-800">
                      {post.title}
                    </td>

                    <td className="px-6 py-5 text-center text-sm whitespace-nowrap text-gray-500">
                      {post.date}
                    </td>

                    <td className="px-6 py-5 text-center whitespace-nowrap">
                      {analysis.wordCount.toLocaleString()}
                    </td>

                    <td className="px-6 py-5 text-center">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${
                          analysis.status ===
                          "good"
                            ? "bg-green-100 text-green-700"
                            : analysis.status ===
                              "warning"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {
                          analysis.seoScore
                        }
                      </span>
                    </td>

                    <td className="px-6 py-5">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map(
                          (tag) => (
                            <span
                              key={
                                tag
                              }
                              className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700"
                            >
                              {tag}
                            </span>
                          )
                        )}
                      </div>
                    </td>

                    <td className="px-6 py-5 text-center">
                      <Link
                        href={`/admin/posts/${post.slug}`}
                        className="text-sm font-medium text-green-600 hover:text-green-700 hover:underline"
                      >
                        詳細
                      </Link>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>

      {/* 検索結果なし */}
      {filteredPosts.length === 0 && (
        <div className="rounded-lg border border-dashed border-gray-300 p-8 text-center text-gray-500">
          「{keyword}」に一致する記事は見つかりませんでした。
        </div>
      )}

      {/* ページネーション */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() =>
              setCurrentPage((page) =>
                Math.max(page - 1, 1)
              )
            }
            disabled={currentPage === 1}
            className="rounded-lg border px-4 py-2 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
          >
            ← 前へ
          </button>

          <span className="rounded-lg bg-gray-100 px-4 py-2 font-medium">
            {currentPage} / {totalPages}
          </span>

          <button
            onClick={() =>
              setCurrentPage((page) =>
                Math.min(page + 1, totalPages)
              )
            }
            disabled={currentPage === totalPages}
            className="rounded-lg border px-4 py-2 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
          >
            次へ →
          </button>
        </div>
      )}
    </div>
  );
}