export type TProject = {
  /** Compatibility with the retained JSON project data. */
  id?: string;
  title: string;
  discription: string;
  features?: string[];
  slug: string;
  /**First one is the main image */
  images: string[];
  githubURL?: string;
  liveURL?: string;
  techStack: string[];
};
