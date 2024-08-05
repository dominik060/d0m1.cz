import type { Metadata } from "next";
import "./styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Providers } from "./providers";
import type { Viewport } from "next";
import { meta, previewImage } from "./constants";

export const metadata: Metadata = {
  title: meta.name,
  description: meta.description,
  metadataBase: new URL("https://" + meta.domain),
  creator: meta.name,
  publisher: meta.name,
  authors: [{ name: meta.name, url: meta.domain }],
  generator: "Next.js",
  twitter: {
    card: "summary_large_image",
    site: meta.domain,
    creator: meta.twitter,
    description: meta.description,
    title: meta.name,
    images: [previewImage],
  },
  openGraph: {
    title: "Dominik Bartuška",
    description: meta.description,
    siteName: "Dominik Bartuška",
    url: meta.domain,
    images: [previewImage],
    type: "website",
    locale: "en_US",
  },
  keywords: meta.keywords,
  applicationName: "Dominik Bartuška's Website",
  referrer: "origin-when-cross-origin",
  icons: [
    {
      rel: "icon",
      type: "image/x-icon",
      url: "/favicon.ico",
      sizes: "48x48",
      media: "(prefers-color-scheme: light)",
    },
    {
      rel: "icon",
      type: "image/x-icon",
      url: "/favicon-dark.ico",
      sizes: "48x48",
      media: "(prefers-color-scheme: dark)",
    },
    {
      rel: "icon",
      type: "image/x-icon",
      sizes: "96x96",
      url: "/favicon-96x96.ico",
      media: "(prefers-color-scheme: light)",
    },
    {
      rel: "icon",
      type: "image/x-icon",
      sizes: "96x96",
      url: "/favicon-96x96-dark.ico",
      media: "(prefers-color-scheme: dark)",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
      media: "(prefers-color-scheme: light)",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32-dark.png",
      media: "(prefers-color-scheme: dark)",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
      media: "(prefers-color-scheme: light)",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16-dark.png",
      media: "(prefers-color-scheme: dark)",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
      media: "(prefers-color-scheme: light)",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-touch-icon-dark.png",
      media: "(prefers-color-scheme: dark)",
    },
    {
      rel: "shortcut icon",
      type: "image/png",
      url: "/apple-touch-icon.png",
      media: "(prefers-color-scheme: light)",
    },
    {
      rel: "shortcut icon",
      type: "image/png",
      url: "/apple-touch-icon-dark.png",
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
