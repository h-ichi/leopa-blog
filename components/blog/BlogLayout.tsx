export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <article className="max-w-3xl mx-auto px-4 py-10 text-gray-800 leading-relaxed">

      {children}

    </article>
  )
}