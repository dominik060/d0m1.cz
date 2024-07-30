import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dominik Bartuška",
    short_name: "Dominik Bartuška",
    description: "Personal website of Dominik Bartuška",
    start_url: "/",
    display: "standalone",
    background_color: "#FAFAFA",
    theme_color: "#FAFAFA",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}
