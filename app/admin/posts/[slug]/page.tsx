import { analyzePost } from "@/lib/analysis";
import { getPostBySlug } from "@/lib/posts";

type Props = {
  params: {
    slug: string;
  };
};

export default function AdminPostDetailPage({
  params,
}: Props) {
  const post = getPostBySlug(params.slug);
  const analysis = analyzePost(params.slug);


  const getRecommendation = (title: string) =>
    analysis.recommendations.find(
      (item) => item.title === title
    );


  const rows = [
    {
      label: "タイトル文字数",
      value: `${analysis.titleLength}文字`,
      recommendation: getRecommendation("タイトル"),
    },
    {
      label: "Description文字数",
      value: `${analysis.descriptionLength}文字`,
      recommendation: getRecommendation("Description"),
    },
    {
      label: "本文文字数",
      value: `${analysis.wordCount.toLocaleString()}文字`,
      recommendation: getRecommendation("本文"),
    },
    {
      label: "H1",
      value: analysis.h1Count,
      recommendation: getRecommendation("H1"),
    },
    {
      label: "H2",
      value: analysis.h2Count,
      recommendation: getRecommendation("H2"),
    },
    {
      label: "画像数",
      value: analysis.imageCount,
      recommendation: getRecommendation("画像"),
    },
    {
      label: "alt不足",
      value: analysis.altMissingCount,
      recommendation: getRecommendation("alt属性"),
    },
    {
      label: "内部リンク",
      value: analysis.internalLinkCount,
      recommendation: getRecommendation("内部リンク"),
    },
  ];


  return (
    <div className="space-y-8">

      {/* タイトル */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          {post.title}
        </h1>

        <p className="mt-2 text-gray-500">
          SEO分析結果
        </p>
      </div>


      {/* SEOスコア */}
      <div className="rounded-xl border bg-white p-6 shadow-sm">

        <h2 className="mb-4 text-xl font-semibold">
          SEOスコア
        </h2>


        <div
          className={`inline-flex rounded-full px-5 py-2 text-2xl font-bold ${
            analysis.status === "good"
              ? "bg-green-100 text-green-700"
              : analysis.status === "warning"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {analysis.seoScore} 点
        </div>

      </div>



      {/* 詳細 + レコメンド */}
      <div className="overflow-hidden rounded-xl border bg-white shadow-sm">

        <table className="min-w-full">

          <thead className="bg-gray-50">

            <tr>
              <th className="px-6 py-4 text-left">
                項目
              </th>

              <th className="px-6 py-4 text-left">
                結果
              </th>

              <th className="px-6 py-4 text-left">
                改善ポイント
              </th>
            </tr>

          </thead>


          <tbody className="divide-y divide-gray-200">


            {rows.map((row) => (

              <tr key={row.label}>

                <td className="w-64 bg-gray-50 px-6 py-4 font-medium">
                  {row.label}
                </td>


                <td className="px-6 py-4">
                  {row.value}
                </td>


                <td
                  className={`px-6 py-4 text-sm ${
                    row.recommendation?.type === "good"
                      ? "text-green-600"
                      : row.recommendation?.type === "warning"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >

                  {row.recommendation?.message ?? "評価なし"}

                </td>


              </tr>

            ))}


          </tbody>

        </table>

      </div>


    </div>
  );
}