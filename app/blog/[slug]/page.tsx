import { getPosts, getPostBySlug } from "@/lib/posts"
import Breadcrumb from "@/components/Breadcrumb"

type Props = {
  params: Promise<{ slug: string }>
}

// 静的生成
export async function generateStaticParams() {
  const posts = getPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params

  const posts = getPosts()
  const post = posts.find((p) => p.slug === slug)

  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `https://leopa-app.onrender.com/blog/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params

  // ← ここ重要
  const post = getPostBySlug(slug)

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">

      {/* パンくず */}
      <Breadcrumb currentTitle={post.title} />

      {/* 記事 */}
      <article
        className="leading-relaxed text-gray-800"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

    </main>
  )
}