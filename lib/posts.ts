import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "content")

interface FrontMatter {
  title?: string
  date?: string
  description?: string
  tags?: string[]
}

export interface Post {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
}

export function getPosts(): Post[] {
  const files = fs.readdirSync(postsDirectory)

  console.log("FILES:", files)

  return files
    .map((file) => {
      const slug = file.replace(".html", "")
      const fullPath = path.join(postsDirectory, file)

      const fileContent = fs.readFileSync(fullPath, "utf8")
      const { data } = matter<FrontMatter>(fileContent)

      const titleMatch = fileContent.match(/<h1[^>]*>(.*?)<\/h1>/)

      return {
        slug,
        title: data.title || titleMatch?.[1] || slug,
        date: data.date || "",
        description: data.description || "",
        tags: data.tags || [],
      }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

// 追加する部分
export function getPostBySlug(slug: string): { slug: string; content: string } {
  const fullPath = path.join(postsDirectory, `${slug}.html`)

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post not found: ${slug}`)
  }

  const fileContent = fs.readFileSync(fullPath, "utf8")

  // frontmatterを除去
  const { content } = matter(fileContent)

  return {
    slug,
    content,
  }
}