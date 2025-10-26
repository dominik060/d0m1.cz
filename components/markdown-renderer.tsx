interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  let html = content;

  // Headers
  html = html.replace(/^# (.*$)/gim, "<h1>$1</h1>");
  html = html.replace(/^## (.*$)/gim, "<h2>$1</h2>");
  html = html.replace(/^### (.*$)/gim, "<h3>$1</h3>");
  html = html.replace(/^#### (.*$)/gim, "<h4>$1</h4>");
  html = html.replace(/^##### (.*$)/gim, "<h5>$1</h5>");

  // Bold
  html = html.replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>");

  // Italic
  html = html.replace(/\*(.*?)\*/gim, "<em>$1</em>");

  // Code blocks
  html = html.replace(
    /```(\w+)?\n([\s\S]*?)```/gim,
    "<pre><code>$2</code></pre>"
  );

  // Inline code
  html = html.replace(/`([^`]+)`/gim, "<code>$1</code>");

  // Supports: ![alt text](/image.webp) or ![alt text|width=400px](/image.webp)
  html = html.replace(
    /!\[([^\]|]*?)(?:\|([^\]]*?))?\]\(([^)]+)\)/gm,
    (match, alt, sizing, src) => {
      let style = "";
      if (sizing) {
        const pairs = sizing.match(/(\w+)=([^\s]+)/g) || [];
        const cssProps = pairs
          .map((pair: string) => {
            const [key, val] = pair.split("=");
            return `${key}:${val}`;
          })
          .join(";");
        if (cssProps) style = ` style="${cssProps}"`;
      }
      return `<div class="flex justify-center my-4"><img src="${src}" alt="${alt.trim()}" class="max-w-full h-auto rounded-lg"${style} /></div>`;
    }
  );

  // Links
  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/gim,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
  );

  // Lists
  html = html.replace(/^\- (.*$)/gim, "<li>$1</li>");
  html = html.replace(/(<li>.*<\/li>)/gim, "<ul>$1</ul>");
  html = html.replace(/<\/ul>\s*<ul>/gim, "");

  // Paragraphs
  const lines = html.split("\n");
  const processedLines = lines.map((line) => {
    const trimmed = line.trim();
    if (!trimmed) return "";
    if (
      trimmed.startsWith("<h") ||
      trimmed.startsWith("<ul") ||
      trimmed.startsWith("<li") ||
      trimmed.startsWith("<pre") ||
      trimmed.startsWith("</")
    ) {
      return trimmed;
    }
    return `<p>${trimmed}</p>`;
  });
  html = processedLines.join("\n");

  return (
    <div
      className="prose-custom space-y-4"
      // Render already-processed HTML from the server. Keep the same CSS
      // variables so styling stays consistent.
      dangerouslySetInnerHTML={{ __html: html }}
      style={
        {
          "--font-mono": "var(--font-mono)",
          "--font-sans": "var(--font-sans)",
        } as React.CSSProperties
      }
    />
  );
}
