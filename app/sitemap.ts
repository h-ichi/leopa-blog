import { getPosts } from "@/lib/posts"

export default function sitemap() {
  const posts = getPosts()

  const blogUrls = posts.map((post) => ({
    url: `https://leopa-app.onrender.com/blog/${post.slug}`,
    lastModified: post.date,
  }))

  return [
    {
      url: "https://leopa-app.onrender.com",
      lastModified: new Date(),
    },
    ...blogUrls,
  ]
}