export default function Sidebar() {
  return (
    <aside className="min-h-screen w-64 shrink-0 bg-gray-900 p-5 text-white">
      <h2 className="mb-8 text-xl font-bold">
        管理画面
      </h2>

      <nav className="space-y-4">
        <a
          href="/admin"
          className="block rounded-md px-3 py-2 transition hover:bg-gray-800 hover:text-green-400"
        >
          Dashboard
        </a>

        <a
          href="/admin/posts"
          className="block rounded-md px-3 py-2 transition hover:bg-gray-800 hover:text-green-400"
        >
          記事一覧
        </a>


        <a
          href="/admin/tags"
          className="block rounded-md px-3 py-2 transition hover:bg-gray-800 hover:text-green-400"
        >
          タグ管理
        </a>
      </nav>
    </aside>
  );
}