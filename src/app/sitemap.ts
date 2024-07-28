import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://d0m1.cz",
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 1,
      alternates: {
        languages: {
          en: "https://d0m1.cz",
        },
      },
    },
  ];
}
