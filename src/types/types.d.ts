export type TProject = {
  id: string;
  title: string;
  discription: string;
  features?: string[];
  // For SEO purposes, if the slug of a project is changed, we can add the old slug to this array so that the old URL will still work and 308 redirect to the new URL.
  oldSlugs?: string[];

  slug: string;
  /**First one is the main image */
  images: string[];
  githubURL?: string;
  liveURL?: string;
  techStack: string[];
};
