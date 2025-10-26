import { ArrowLeft } from "lucide-react";
import { getPostBySlug } from "@/lib/blog";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function BlogPostView({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const day = String(date.getDate()).padStart(2, "0");

    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${monthNames[date.getMonth()]} ${day}, ${year}`;
  };

  return (
    <div className="max-w-2xl px-4 sm:px-6 py-12 sm:py-16 w-full">
      <Link
        href={"/blog"}
        className="inline-flex items-center gap-2 mb-8 hover:text-accent transition-colors opacity-60 hover:opacity-100"
        style={{
          fontFamily: "var(--font-mono)",
          viewTransitionName: "blog-arrow",
        }}
      >
        <ArrowLeft className="w-4 h-4" />
        back
      </Link>

      <article className="space-y-6 w-full">
        <header className="space-y-2 mb-8">
          <h1
            style={{
              fontFamily: "var(--font-mono)",
              viewTransitionName: `blog-title-${post.slug}`,
            }}
            className="text-2xl sm:text-3xl"
          >
            {post.title}
          </h1>
          <time
            dateTime={post.date}
            className="opacity-50 text-sm block"
            style={{
              fontFamily: "var(--font-mono)",
              viewTransitionName: `blog-date-${post.slug}`,
            }}
          >
            {formatDate(post.date)}
          </time>
        </header>

        <MarkdownRenderer content={post.content} />
      </article>
    </div>
  );
}
