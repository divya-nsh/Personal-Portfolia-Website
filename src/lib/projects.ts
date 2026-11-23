import { readdir } from "node:fs/promises";
import path from "node:path";
import { cache, type ComponentType } from "react";
import type { MDXProps } from "mdx/types";

export type ProjectMeta = {
  title: string;
  shortDescription: string;
  tags: string[];
  // Lower ranks appear first; unranked projects appear last.
  rank?: number;
  isActive?: boolean;
  // ISO 8601 format (YYYY-MM-DD)
  publishedDate?: string;
  coverImage?: string;
  liveURL?: string;
  githubURL?: string;
};

type ProjectModule = {
  default: ComponentType<MDXProps>;
  meta: ProjectMeta;
};

export const getProjectSlugs = cache(async () => {
  const files = await readdir(path.join(process.cwd(), "src/content/projects"));
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.slice(0, -4))
    .sort();
});

export const getMdxProject = cache(
  async (slug: string): Promise<ProjectModule | null> => {
    if (!(await getProjectSlugs()).includes(slug)) return null;
    return import(`@/content/projects/${slug}.mdx`);
  },
);

type ProjectSummary = { slug: string; meta: ProjectMeta };

export function compareProjects(a: ProjectSummary, b: ProjectSummary): number {
  const rankA = a.meta.rank ?? Infinity;
  const rankB = b.meta.rank ?? Infinity;
  if (rankA !== rankB) return rankA - rankB;

  // ISO dates sort chronologically as strings. Missing dates follow dated items.
  const dateA = a.meta.publishedDate || "9999-12-31";
  const dateB = b.meta.publishedDate || "9999-12-31";
  return dateA.localeCompare(dateB) || a.slug.localeCompare(b.slug);
}

export async function getMdxProjects() {
  const projects = await Promise.all(
    (await getProjectSlugs()).map(async (slug) => {
      const project = await getMdxProject(slug);
      return { slug, meta: project!.meta };
    }),
  );

  return projects
    .filter(({ meta }) => (meta.isActive != undefined ? meta.isActive : true))
    .sort(compareProjects);
}
