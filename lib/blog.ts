import * as fs from "fs";
import * as path from "path";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string;
}

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

function parseFrontmatter(raw: string): {
  data: Record<string, string>;
  content: string;
} {
  const fmRegex = /^---\s*([\s\S]*?)\s*---\s*([\s\S]*)$/;
  const match = raw.match(fmRegex);

  if (!match) {
    return { data: {}, content: raw };
  }

  const fm = match[1];
  const content = match[2].trim();
  const data: Record<string, string> = {};

  fm.split(/\r?\n/).forEach((line) => {
    const idx = line.indexOf(":");
    if (idx === -1) return;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    // remove surrounding quotes if present
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    data[key] = value;
  });

  return { data, content };
}

function loadPostsFromDisk(): BlogPost[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const fileNames = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md"));

  const posts: BlogPost[] = fileNames.map((fileName) => {
    const fullPath = path.join(CONTENT_DIR, fileName);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data, content } = parseFrontmatter(raw);

    const slug =
      (data.slug && String(data.slug)) || fileName.replace(/\.md$/, "");
    const title = (data.title && String(data.title)) || slug;
    const date = (data.date && String(data.date)) || new Date(0).toISOString();

    return {
      slug,
      title,
      date,
      content,
    } as BlogPost;
  });

  // sort newest first
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

const posts: BlogPost[] = loadPostsFromDisk();

export function getAllPosts(): BlogPost[] {
  // return a copy to avoid accidental mutation
  return [...posts];
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}
