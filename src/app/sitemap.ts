import type { MetadataRoute } from "next";
import { getMdxProjects } from "@/lib/projects";
import { SITE_LAST_UPDATED, SITE_LIVE_URL } from "@/constants";
import { toAbsoluteUrl } from "@/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getMdxProjects();
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
    {
      url: `${SITE_LIVE_URL}/projects`,
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
    images: project.meta.coverImage
      ? [toAbsoluteUrl(project.meta.coverImage)]
      : [],
  }));

  return [...staticRoutes, ...projectRoutes];
}
