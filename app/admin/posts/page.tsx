import { getPosts } from "@/lib/posts";
import AdminPostsClient from "./AdminPostsClient";
import { analyzePost } from "@/lib/analysis";


export default function AdminPostsPage() {
  const posts = getPosts();

  const postsWithAnalysis = posts.map((post) => ({
    ...post,
    analysis: analyzePost(post.slug),
  }));

  return (
    <AdminPostsClient posts={postsWithAnalysis} />
  );
}