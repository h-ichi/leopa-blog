import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content");

interface FrontMatter {
  title?: string;
  date?: string;
  description?: string;
  category?: string;
  tags?: string[];
}

export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  category: string;
  tags: string[];
}

export interface Tag {
  name: string;
  count: number;
}

export interface Category {
  name: string;
  count: number;
}

export function getPosts(): Post[] {
  const files = fs.readdirSync(postsDirectory);

  return files
    .filter((file) => file.endsWith(".html"))
    .map((file) => {
      const slug = file.replace(".html", "");
      const fullPath = path.join(postsDirectory, file);

      const fileContent = fs.readFileSync(fullPath, "utf8");

      const { data } = matter<FrontMatter>(fileContent);

      const titleMatch = fileContent.match(
        /<h1[^>]*>(.*?)<\/h1>/
      );

      return {
        slug,
        title: data.title || titleMatch?.[1] || slug,
        date: data.date || "",
        description: data.description || "",
        category: data.category || "",
        tags: data.tags || [],
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(
  slug: string
): Post & { content: string } {
  const fullPath = path.join(
    postsDirectory,
    `${slug}.html`
  );

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post not found: ${slug}`);
  }

  const fileContent = fs.readFileSync(
    fullPath,
    "utf8"
  );

  const { data, content } =
    matter<FrontMatter>(fileContent);

  const titleMatch = content.match(
    /<h1[^>]*>(.*?)<\/h1>/
  );

  return {
    slug,
    title: data.title || titleMatch?.[1] || slug,
    date: data.date || "",
    description: data.description || "",
    category: data.category || "",
    tags: data.tags || [],
    content,
  };
}

export function getTags(): Tag[] {
  const posts = getPosts();

  const tagMap = new Map<string, number>();

  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      tagMap.set(
        tag,
        (tagMap.get(tag) ?? 0) + 1
      );
    });
  });

  return Array.from(tagMap.entries())
    .map(([name, count]) => ({
      name,
      count,
    }))
    .sort((a, b) => b.count - a.count);
}

export function getCategories(): Category[] {
  const posts = getPosts();

  const categoryMap = new Map<string, number>();

  posts.forEach((post) => {
    if (!post.category) return;

    categoryMap.set(
      post.category,
      (categoryMap.get(post.category) ?? 0) + 1
    );
  });

  return Array.from(categoryMap.entries())
    .map(([name, count]) => ({
      name,
      count,
    }))
    .sort((a, b) => b.count - a.count);
}