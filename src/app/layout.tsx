import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Providers } from "./providers";
import type { Viewport } from "next";

export const metadata: Metadata = {
  title: "Dominik Bartuška",
  description: "Personal website of Dominik Bartuška",
  metadataBase: new URL("https://d0m1.cz"),
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
        url: "images/twitter-preview.png",
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
        url: "images/twitter-preview.png",
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
  icons: [
    {
      rel: "icon",
      type: "image/x-icon",
      url: "favicons/favicon.ico",
      media: "(prefers-color-scheme: light)",
    },
    {
      rel: "icon",
      type: "image/x-icon",
      url: "favicons/favicon-dark.ico",
      media: "(prefers-color-scheme: dark)",
    },
    {
      rel: "icon",
      type: "image/x-icon",
      sizes: "96x96",
      url: "favicons/favicon-96x96.ico",
      media: "(prefers-color-scheme: light)",
    },
    {
      rel: "icon",
      type: "image/x-icon",
      sizes: "96x96",
      url: "favicons/favicon-96x96-dark.ico",
      media: "(prefers-color-scheme: dark)",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "favicons/favicon-32x32.png",
      media: "(prefers-color-scheme: light)",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "favicons/favicon-32x32-dark.png",
      media: "(prefers-color-scheme: dark)",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "favicons/favicon-16x16.png",
      media: "(prefers-color-scheme: light)",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "favicons/favicon-16x16-dark.png",
      media: "(prefers-color-scheme: dark)",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "favicons/apple-touch-icon.png",
      media: "(prefers-color-scheme: light)",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "favicons/apple-touch-icon-dark.png",
      media: "(prefers-color-scheme: dark)",
    },
    {
      rel: "shortcut icon",
      type: "image/png",
      url: "favicons/apple-touch-icon.png",
      media: "(prefers-color-scheme: light)",
    },
    {
      rel: "shortcut icon",
      type: "image/png",
      url: "favicons/apple-touch-icon-dark.png",
      media: "(prefers-color-scheme: dark)",
    },
  ],
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
