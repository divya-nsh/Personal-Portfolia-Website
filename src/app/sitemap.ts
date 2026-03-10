import type { MetadataRoute } from "next";
import { projects } from "@/data/data";

const siteUrl = "https://divyanshsoni.site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Relative URLs are works here, It need absolute URLs
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
