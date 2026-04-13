import type { MetadataRoute } from "next";
import { projects } from "@/data/data";
import { SITE_LIVE_URL } from "@/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Relative URLs  not works works here, It need absolute URLs
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_LIVE_URL}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_LIVE_URL}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${SITE_LIVE_URL}/projects/${project.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
