import Link from "next/link"
import { getPosts } from "@/lib/posts"

type Props = {
  currentSlug: string
  tags: string[]
}

export default function RelatedPosts({
  currentSlug,
  tags,
}: Props) {
  const posts = getPosts()

  const relatedPosts = posts
    .filter(
      (post) =>
        post.slug !== currentSlug &&
        post.tags.some((tag) => tags.includes(tag))
    )
    .slice(0, 3)

  if (relatedPosts.length === 0) return null

  return (
    <section className="mt-10 border-t border-gray-200 pt-6">
  <h2 className="text-lg font-semibold text-gray-600 mb-3">
    関連記事
  </h2>

  <div className="space-y-2">
    {relatedPosts.map((post) => (
      <Link
        key={post.slug}
        href={`/blog/${post.slug}`}
        className="block text-gray-700 hover:text-orange-500 transition"
      >
        ・{post.title}
      </Link>
    ))}
  </div>
</section>
  )
}