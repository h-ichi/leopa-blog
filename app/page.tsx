import Link from "next/link"
import { getPosts } from "@/lib/posts"
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"]
})

export default function Home() {
  const posts = getPosts().slice(0, 4) // 最新4件

  return (
    <main className="max-w-5xl mx-auto p-6">

      {/* Hero */}
      <section className="relative mb-12 text-center py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/topimage.png')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10">
          <h1
            className={`${playfair.className} text-4xl md:text-5xl font-bold mb-4 text-white tracking-wide`}
          >
            わたしのレオパ BLOG
          </h1>

          <p className="text-white">
            レオパードゲッコーの飼育日常を綴るBLOG
          </p>
        </div>
      </section>

      {/* 新着記事 */}
      <section className="mb-12">
  <h2 className="text-2xl font-bold mb-6 text-orange-400">最新記事</h2>

  <div className="grid md:grid-cols-2 gap-6">
    {posts.map((post) => (
      <Link
        key={post.slug}
        href={`/blog/${post.slug}`}
        className="group block border border-orange-200 rounded-2xl p-6 hover:shadow-lg transition"
      >
        <h3 className="text-xl font-semibold text-orange-700 group-hover:text-orange-400 transition">
          {post.title}
        </h3>

        <p className="text-orange-300 mt-2 text-xs">
            {new Date(post.date).toLocaleDateString("ja-JP")}
          </p>
      </Link>
    ))}
  </div>
</section>

      {/* カテゴリ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-orange-400">カテゴリ</h2>

        <div className="flex gap-4 flex-wrap">
          <Link href="/category/breeding">
            <div className="border border-orange-200 text-orange-700 px-4 py-2 rounded hover:bg-orange-100 cursor-pointer">
              飼育方法
            </div>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-100 p-6 rounded-lg text-center">
        <h2 className="text-xl font-bold mb-2 text-orange-400">
          レオパ飼育管理カレンダーアプリ
        </h2>

        <p className="text-orange-700 mb-4">
          日頃の飼育記録は自作のカレンダーアプリを使用しております。
        </p>

        <Link
          href="https://leopa-app.onrender.com/"
          target="_blank"
          className="bg-orange-400 text-white px-6 py-2 rounded inline-block hover:bg-orange-500 transition"
        >
          カレンダーはこちら
        </Link>
      </section>

    </main>
  )
}