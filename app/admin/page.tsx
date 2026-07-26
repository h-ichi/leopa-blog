import { getPosts } from "@/lib/posts";
import { analyzePost } from "@/lib/analysis";


export default function AdminPage() {

  const posts = getPosts();


  const analyses = posts.map((post) => ({
    ...post,
    analysis: analyzePost(post.slug),
  }));


  const averageScore =
    analyses.length > 0
      ? Math.round(
          analyses.reduce(
            (sum, post) =>
              sum + post.analysis.seoScore,
            0
          ) / analyses.length
        )
      : 0;


  const warningPosts =
    analyses.filter(
      (post) =>
        post.analysis.status !== "good"
    );


  return (
    <div className="space-y-8">


      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>


      {/* KPI */}
      <div className="grid gap-6 md:grid-cols-3">


        <div className="rounded-xl bg-white p-6 shadow">
          <p className="text-gray-500">
            記事数
          </p>

          <p className="text-3xl font-bold">
            {posts.length}
          </p>
        </div>



        <div className="rounded-xl bg-white p-6 shadow">
          <p className="text-gray-500">
            平均SEOスコア
          </p>

          <p className="text-3xl font-bold">
            {averageScore}点
          </p>
        </div>



        <div className="rounded-xl bg-white p-6 shadow">
          <p className="text-gray-500">
            改善が必要な記事
          </p>

          <p className="text-3xl font-bold">
            {warningPosts.length}
          </p>
        </div>


      </div>



      {/* 最近の記事 */}
      <div className="rounded-xl bg-white p-6 shadow">

        <h2 className="mb-4 text-xl font-bold">
          記事SEO一覧
        </h2>


        <div className="space-y-3">

          {analyses.slice(0, 5).map((post) => (

            <div
              key={post.slug}
              className="flex justify-between border-b py-3"
            >

              <span>
                {post.title}
              </span>


              <span
                className={
                  post.analysis.status === "good"
                    ? "text-green-600"
                    : post.analysis.status === "warning"
                    ? "text-yellow-600"
                    : "text-red-600"
                }
              >
                {post.analysis.seoScore}点
              </span>

            </div>

          ))}

        </div>

      </div>


    </div>
  );
}