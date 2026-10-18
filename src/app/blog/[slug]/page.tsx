import type { Metadata } from "next";
import { blogPosts } from "@/constants/blog-data";
import { notFound } from "next/navigation";
import { BlogArticleView } from "@/components/blog/blog-article-view";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return { 
    title: `${post.title} | Milestone Blog`, 
    description: post.subtitle || post.excerpt 
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  // Find related posts (excluding current post)
  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return <BlogArticleView post={post} relatedPosts={relatedPosts} />;
}
