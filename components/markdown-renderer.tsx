"use client";

import { ReactNode } from "react";
import { CopyButton } from "./copy-button";

interface MarkdownRendererProps {
  content: string;
}

const headingStyles = {
  h1: "text-2xl font-bold mt-8 mb-6 border-b-2 border-primary pb-2 text-foreground",
  h2: "text-xl font-bold mt-8 mb-4 border-l-4 border-primary pl-4 text-foreground",
  h3: "text-lg font-semibold mt-6 mb-3 border-l-2 border-primary pl-4 text-foreground",
  h4: "text-base font-semibold mt-4 mb-2 text-foreground",
  h5: "text-base font-semibold mt-3 mb-2 text-foreground",
};

interface Token {
  type: string;
  content?: string;
  children?: Token[];
}

function parseMarkdown(content: string): Token[] {
  const lines = content.split("\n");
  const tokens: Token[] = [];
  let currentList: Token[] = [];
  let inCodeBlock = false;
  let codeContent = "";

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Code blocks
    if (line.startsWith("```")) {
      if (!inCodeBlock) {
        inCodeBlock = true;
        codeContent = "";
      } else {
        inCodeBlock = false;
        tokens.push({
          type: "codeblock",
          content: codeContent.trimEnd(),
        });
      }
      continue;
    }

    if (inCodeBlock) {
      codeContent += line + "\n";
      continue;
    }

    // Headings
    const headingMatch = line.match(/^(#{1,5})\s+(.+)$/);
    if (headingMatch) {
      if (currentList.length > 0) {
        tokens.push({ type: "list", children: currentList });
        currentList = [];
      }
      const level = headingMatch[1].length;
      tokens.push({
        type: `h${level}`,
        content: headingMatch[2],
      });
      continue;
    }

    // Lists
    if (line.match(/^-\s+/)) {
      const listContent = line.replace(/^-\s+/, "");
      currentList.push({
        type: "li",
        content: listContent,
      });
      continue;
    }

    // Empty lines
    if (line.trim() === "") {
      if (currentList.length > 0) {
        tokens.push({ type: "list", children: currentList });
        currentList = [];
      }
      continue;
    }

    // Images (detect image-only lines)
    const imageMatch = line.match(
      /^!\[([^\]]+?)(?:\|width=([^\]]+))?\]\(([^)]+)\)$/
    );
    if (imageMatch) {
      if (currentList.length > 0) {
        tokens.push({ type: "list", children: currentList });
        currentList = [];
      }
      tokens.push({
        type: "image",
        content: JSON.stringify({
          alt: imageMatch[1],
          width: imageMatch[2],
          src: imageMatch[3],
        }),
      });
      continue;
    }

    // Paragraphs
    if (currentList.length > 0) {
      tokens.push({ type: "list", children: currentList });
      currentList = [];
    }
    tokens.push({
      type: "paragraph",
      content: line,
    });
  }

  if (currentList.length > 0) {
    tokens.push({ type: "list", children: currentList });
  }

  return tokens;
}

function parseInline(content: string): ReactNode {
  let result: ReactNode[] = [];
  let lastIndex = 0;

  // Inline code regex
  const codeRegex = /`([^`]+)`/g;
  let match: RegExpExecArray | null;

  while ((match = codeRegex.exec(content)) !== null) {
    // Add text before
    if (match.index > lastIndex) {
      result.push(
        parseInlineFormatting(content.substring(lastIndex, match.index))
      );
    }

    // Add inline code
    result.push(
      <code
        key={`code-${match.index}`}
        className="bg-card text-card-foreground px-2 py-1 rounded font-mono text-sm cursor-pointer hover:opacity-80"
        onClick={() => navigator.clipboard.writeText(match![1])}
      >
        {match[1]}
      </code>
    );

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text
  if (lastIndex < content.length) {
    result.push(parseInlineFormatting(content.substring(lastIndex)));
  }

  return result.length === 0 ? content : result;
}

function parseInlineFormatting(text: string): ReactNode {
  let result: ReactNode[] = [];
  let lastIndex = 0;

  // Images with optional width - ![alt text|width=400px](/path/to/image.jpg)
  const imageRegex = /!\[([^\]]+?)(?:\|width=([^\]]+))?\]\(([^)]+)\)/g;
  let imgMatch: RegExpExecArray | null;

  while ((imgMatch = imageRegex.exec(text)) !== null) {
    if (imgMatch.index > lastIndex) {
      result.push(
        parseBoldAndItalic(text.substring(lastIndex, imgMatch.index))
      );
    }

    const alt = imgMatch[1];
    const width = imgMatch[2];
    const src = imgMatch[3];

    result.push(
      <span
        key={`img-wrapper-${imgMatch.index}`}
        className="flex justify-center my-6"
      >
        <img
          key={`img-${imgMatch.index}`}
          src={src}
          alt={alt}
          style={width ? { width } : undefined}
          className="rounded-lg"
        />
      </span>
    );

    lastIndex = imgMatch.index + imgMatch[0].length;
  }

  if (lastIndex < text.length) {
    result.push(parseBoldAndItalic(text.substring(lastIndex)));
  }

  return result.length === 0 ? text : result;
}

function parseBoldAndItalic(text: string): ReactNode {
  let result: ReactNode[] = [];
  let lastIndex = 0;

  // Bold regex
  const boldRegex = /\*\*([^\*]+)\*\*/g;
  let match: RegExpExecArray | null;

  while ((match = boldRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      result.push(text.substring(lastIndex, match.index));
    }
    result.push(<strong key={`bold-${match.index}`}>{match[1]}</strong>);
    lastIndex = match.index + match[0].length;
  }

  // Italic regex
  const italicRegex = /\*([^\*]+)\*/g;
  let italicMatch: RegExpExecArray | null;
  let italicLastIndex = lastIndex;

  while ((italicMatch = italicRegex.exec(text.substring(lastIndex))) !== null) {
    if (italicMatch.index > 0) {
      result.push(
        text.substring(italicLastIndex, lastIndex + italicMatch.index)
      );
    }
    result.push(<em key={`italic-${italicMatch.index}`}>{italicMatch[1]}</em>);
    italicLastIndex = lastIndex + italicMatch.index + italicMatch[0].length;
  }

  if (italicLastIndex < text.length) {
    result.push(text.substring(italicLastIndex));
  }

  return result.length === 0 ? text : result;
}

function renderToken(token: Token, index: number): ReactNode {
  const headingClass = headingStyles[token.type as keyof typeof headingStyles];

  switch (token.type) {
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
      const HeadingTag = token.type as any;
      return (
        <HeadingTag key={index} className={headingClass}>
          {parseInline(token.content!)}
        </HeadingTag>
      );

    case "paragraph":
      return <p key={index}>{parseInline(token.content!)}</p>;

    case "image":
      const imgData = JSON.parse(token.content!);
      return (
        <div key={index} className="flex justify-center my-6">
          <img
            src={imgData.src}
            alt={imgData.alt}
            style={imgData.width ? { width: imgData.width } : undefined}
            className="rounded-lg"
          />
        </div>
      );

    case "codeblock":
      return (
        <div key={index} className="relative my-4">
          <CopyButton code={token.content!} />
          <pre className="bg-card text-card-foreground p-4 rounded-lg overflow-x-auto border border-border font-mono text-sm">
            <code>{token.content}</code>
          </pre>
        </div>
      );

    case "list":
      return (
        <ul key={index} className="list-disc pl-6 space-y-1">
          {token.children?.map((child, idx) =>
            renderToken(child, `${index}-${idx}` as any)
          )}
        </ul>
      );

    case "li":
      return <li key={index}>{parseInline(token.content!)}</li>;

    default:
      return null;
  }
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const tokens = parseMarkdown(content);

  return (
    <div
      className="prose-custom space-y-4"
      style={
        {
          "--font-mono": "var(--font-mono)",
          "--font-sans": "var(--font-sans)",
        } as React.CSSProperties
      }
    >
      {tokens.map((token, index) => renderToken(token, index))}
    </div>
  );
}
