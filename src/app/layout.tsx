import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
    title: "Dominik B.",
    description: "Personal web of Dominik Bartuška",
    icons: {
        icon: [
            {
                media: "(prefers-color-scheme: light)",
                url: "/images/icon-light.ico",
                href: "/images/icon-light.ico",
            },
            {
                media: "(prefers-color-scheme: dark)",
                url: "/images/icon-dark.ico",
                href: "/images/icon-dark.ico",
            },
        ],
    },
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
