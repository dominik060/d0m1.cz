import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
    title: "Dominik Bartuška",
    description: "Personal web of Dominik Bartuška",
    icons: [
        {
            rel: "icon",
            type: "image/x-icon",
            url: "/favicon.ico",
            media: "(prefers-color-scheme: light)",
        },
        {
            rel: "icon",
            type: "image/x-icon",
            url: "/favicon-dark.ico",
            media: "(prefers-color-scheme: dark)",
        },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={GeistSans.className}>{children}</body>
        </html>
    );
}
