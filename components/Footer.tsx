import Link from "next/link"

export default function Footer() {
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

        {/* カテゴリ */}
        <div>
          <h3 className="font-bold mb-3 text-orange-400">
            カテゴリ
          </h3>

          <ul className="space-y-2 text-sm text-orange-700">
            <li>
              <Link href="/category/breeding" className="hover:underline hover:text-orange-400">
                飼育方法
              </Link>
            </li>
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