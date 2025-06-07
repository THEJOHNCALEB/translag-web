import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {

  return [
    {
      url: "https://translag.vercel.app",
      lastModified: new Date(),
    },
  ];
}
