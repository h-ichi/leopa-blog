import { analyzePost } from "@/lib/analysis";
import { getPosts } from "@/lib/posts";
import Link from "next/link";

type Props = {
  searchParams: {
    page?: string;
  };
};

export default function AdminPostsPage({ searchParams }: Props) {
  const posts = getPosts();

  const currentPage = Number(searchParams.page ?? "1");
  const postsPerPage = 10;

  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;

  const currentPosts = posts.slice(start, end);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <div className="space-y-6">
      {/* ヘッダー */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            記事一覧
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            全 {posts.length} 件の記事
          </p>
        </div>
      </div>

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
            {currentPosts.map((post) => {
              const analysis = analyzePost(post.slug);

              return (
                <tr
                  key={post.slug}
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
                        analysis.status === "good"
                          ? "bg-green-100 text-green-700"
                          : analysis.status === "warning"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {analysis.seoScore}
                    </span>
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700"
                        >
                          {tag}
                        </span>
                      ))}
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
            })}
          </tbody>
        </table>
      </div>

      {/* ページネーション */}
      <div className="flex items-center justify-center gap-4">
        {currentPage > 1 && (
          <a
            href={`/admin/posts?page=${currentPage - 1}`}
            className="rounded-lg border px-4 py-2 transition hover:bg-gray-100"
          >
            ← 前へ
          </a>
        )}

        <span className="rounded-lg bg-gray-100 px-4 py-2 font-medium">
          {currentPage} / {totalPages}
        </span>

        {currentPage < totalPages && (
          <a
            href={`/admin/posts?page=${currentPage + 1}`}
            className="rounded-lg border px-4 py-2 transition hover:bg-gray-100"
          >
            次へ →
          </a>
        )}
      </div>
    </div>
  );
}