import Link from "next/link"
import { getPosts, Post } from "@/lib/posts"

export default function Footer() {
  // 全記事を取得
  const posts: Post[] = getPosts()

  // 記事から全タグを抽出して重複を削除
  const allTags: string[] = Array.from(
    new Set(posts.flatMap(post => post.tags.map(t => t.trim())))
  )

  return (
    <footer className="bg-orange-50 mt-20 border-t border-orange-200">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        {/* サイト情報 */}
        <div>
          <h3 className="font-bold text-lg mb-3 text-orange-400">
            わたしのレオパ BLOG
          </h3>

          <p className="text-sm text-orange-700">
            レオパードゲッコーの飼育日常を綴るBLOG
          </p>
        </div>

        {/* タグ一覧（縦並び） */}
        <div>
  <h3 className="font-bold mb-3 text-orange-400">
    タグ一覧
  </h3>

  <ul
    className="text-sm text-orange-700"
    style={{
      columnWidth: "12  0px",
      columnGap: "0.1rem",
      height: "10rem", //
    }}
  >
    {allTags.map((tag) => (
      <li key={tag} className="mb-2 break-inside-avoid">
        <Link
          href={`/tag/${encodeURIComponent(tag)}`}
          className="hover:underline hover:text-orange-400"
        >
          {tag}
        </Link>
      </li>
    ))}
  </ul>
</div>
        {/* サイトリンク */}
        <div>
          <h3 className="font-bold mb-3 text-orange-400">
            サイト情報
          </h3>

          <ul className="space-y-2 text-sm text-orange-700">
            <li>
              <Link href="/about" className="hover:underline hover:text-orange-400">
                運営者情報
              </Link>
            </li>

            <li>
              <Link href="/privacy-policy" className="hover:underline hover:text-orange-400">
                プライバシーポリシー
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:underline hover:text-orange-400">
                お問い合わせ
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* コピーライト */}
      <div className="text-center text-sm text-orange-300 pb-6">
        © {new Date().getFullYear()} わたしのレオパ BLOG
      </div>
    </footer>
  )
}