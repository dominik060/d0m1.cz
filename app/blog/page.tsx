import { getAllPosts } from "@/lib/blog";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

// Revalidate (ISR) - refresh the static page every hour.
export const revalidate = 3600;

export default function BlogPage() {
  const posts = getAllPosts();

  

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
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-16 w-full">
      <Link
        href={"/"}
        className="inline-flex items-center gap-2 mb-8 hover:text-accent transition-colors opacity-60 hover:opacity-100"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        <ArrowLeft className="w-4 h-4" />
        back
      </Link>

      <div className="space-y-6">
        {posts.map((post) => (
          <article key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="block group">
              <div className="flex flex-col md:flex-row md:items-baseline sm:justify-between gap-1 sm:gap-4">
                <h2
                  className="group-hover:text-accent transition-colors"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {post.title}
                </h2>

                <time
                  dateTime={post.date}
                  className="opacity-50 whitespace-nowrap text-sm"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {formatDate(post.date)}
                </time>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
