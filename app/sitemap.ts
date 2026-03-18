import { getPosts } from "@/lib/posts"

export default function sitemap() {
  const baseUrl = "https://leopa-blog.vercel.app/"

  const posts = getPosts()

  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...blogUrls,
  ]
}