import type { MetadataRoute } from "next";
import { projects } from "@/data/data";
import { SITE_LAST_UPDATED, SITE_LIVE_URL } from "@/constants";
import { toAbsoluteUrl } from "@/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = SITE_LAST_UPDATED;

  // Relative URLs  not works works here, It need absolute URLs
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_LIVE_URL}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: [toAbsoluteUrl("/images/og-1200x630.png")],
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
    images: Array.from(new Set(project.images.filter(Boolean))).map(
      toAbsoluteUrl,
    ),
  }));

  return [...staticRoutes, ...projectRoutes];
}
