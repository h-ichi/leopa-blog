import Link from "next/link"

export default function Header() {
  return (
    <header className="border-b border-orange-200 bg-orange-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-orange-400 font-bold text-lg">
          わたしのレオパ BLOG
        </Link>

        {/* Navigation */}
        <nav className="flex gap-6 text-sm text-orange-700">
          <Link href="/" className="hover:text-orange-400 transition-colors">
            Home
          </Link>

          <Link href="/blog" className="hover:text-orange-400 transition-colors">
            Blog
          </Link>
        </nav>

      </div>
    </header>
  )
}