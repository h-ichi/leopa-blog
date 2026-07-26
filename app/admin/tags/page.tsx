import { getTags } from "@/lib/posts";

type Props = {
  searchParams: {
    page?: string;
  };
};

export default function TagsPage({ searchParams }: Props) {
  const tags = getTags();

  const currentPage = Number(searchParams.page ?? "1");
  const tagsPerPage = 10;

  const start = (currentPage - 1) * tagsPerPage;
  const end = start + tagsPerPage;

  const currentTags = tags.slice(start, end);

  const totalPages = Math.ceil(tags.length / tagsPerPage);

  return (
    <div className="space-y-6">
      {/* ヘッダー */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            タグ管理
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            全 {tags.length} タグ
          </p>
        </div>
      </div>

      {/* テーブル */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="min-w-full">
          <thead className="bg-gray-50 text-sm uppercase tracking-wide text-gray-500">
            <tr>
              <th className="px-6 py-4 text-left">
                タグ名
              </th>

              <th className="px-6 py-4 text-center">
                使用記事数
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {currentTags.map((tag) => (
              <tr
                key={tag.name}
                className="transition hover:bg-green-50"
              >
                <td className="px-6 py-5">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                    {tag.name}
                  </span>
                </td>

                <td className="px-6 py-5 text-center font-semibold text-gray-700">
                  {tag.count}
                </td>
              </tr>
            ))}

            {currentTags.length === 0 && (
              <tr>
                <td
                  colSpan={2}
                  className="px-6 py-8 text-center text-gray-500"
                >
                  タグがありません
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ページネーション */}
      <div className="flex items-center justify-center gap-4">
        {currentPage > 1 && (
          <a
            href={`/admin/tags?page=${currentPage - 1}`}
            className="rounded-lg border px-4 py-2 transition hover:bg-gray-100"
          >
            ← 前へ
          </a>
        )}

        <span className="rounded-lg bg-gray-100 px-4 py-2 font-medium">
          {currentPage} / {Math.max(totalPages, 1)}
        </span>

        {currentPage < totalPages && (
          <a
            href={`/admin/tags?page=${currentPage + 1}`}
            className="rounded-lg border px-4 py-2 transition hover:bg-gray-100"
          >
            次へ →
          </a>
        )}
      </div>
    </div>
  );
}