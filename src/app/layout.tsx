import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Providers } from "./providers";
import type { Viewport } from "next";

export const metadata: Metadata = {
  title: "Dominik Bartuška",
  description: "Personal website of Dominik Bartuška",
  creator: "Dominik Bartuška",
  publisher: "Dominik Bartuška",
  authors: [{ name: "Dominik Bartuška", url: "https://d0m1.cz" }],
  generator: "Next.js",
  twitter: {
    card: "summary_large_image",
    site: "https://d0m1.cz",
    creator: "@DominikBartuska",
    description: "Personal website of Dominik Bartuška",
    title: "Dominik Bartuška",
    images: [
      {
        url: "https://d0m1.cz/twitter-preview.png",
        width: 1440,
        height: 900,
        alt: "Personal website of Dominik Bartuška",
      },
    ],
  },
  openGraph: {
    title: "Dominik Bartuška",
    description: "Personal website of Dominik Bartuška",
    siteName: "Dominik Bartuška",
    url: "https://d0m1.cz",
    images: [
      {
        url: "https://d0m1.cz/twitter-preview.png",
        width: 1440,
        height: 900,
        alt: "Personal website of Dominik Bartuška",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  keywords: [
    "dominik bartuska",
    "Dominik Bartuška",
    "code",
    "web development",
    "typescript",
    "next.js",
    "web dev",
    "html",
    "css",
    "python",
    "gym",
    "muscle",
  ],
  applicationName: "Dominik Bartuška's Website",
  referrer: "origin-when-cross-origin",
  icons: { icon: "/favicon.ico", apple: "/apple-icon.png" },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAFA" },
    { media: "(prefers-color-scheme: dark)", color: "#09090B" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  interactiveWidget: "resizes-visual",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.variable} suppressHydrationWarning>
      <body className={"flex justify-center"}>
        <Providers>
          {children}
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
