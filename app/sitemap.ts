import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {

  return [
    {
      url: "https://translag.thejohncaleb.com",
      lastModified: new Date(),
    },
  ];
}
