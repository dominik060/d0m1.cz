"use client";

import React from "react";

export default function BlogPostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full flex flex-col items-center min-h-screen">
      {children}
    </main>
  );
}
