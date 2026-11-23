import { SITE_LIVE_URL } from "@/constants";
import { pageOpenGraph, pageTwitter } from "@/seo";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getMdxProjects } from "@/lib/projects";

const title = "My Projects";
const description =
  "Explore personal and professional projects by Divyansh Soni, including web apps, desktop software, and full-stack development.";
const url = `${SITE_LIVE_URL}/projects`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: pageOpenGraph({ title, description, url }),
  twitter: pageTwitter({ title, description }),
};

export default async function ProjectsPage() {
  const projects = await getMdxProjects();
  return (
    <section className="mx-auto mb-24 mt-8 max-w-4xl px-4">
      <Link href="/" className="text-neutral-400 hover:text-white">
        Back to home
      </Link>
      <h1 className="mt-4 text-4xl font-medium">My Projects</h1>
      <p className="mt-3 text-neutral-400">
        Personal and professional projects I have worked on.
      </p>
      <ul className="mt-8 grid list-none gap-6 p-0 sm:grid-cols-2">
        {projects.map(({ slug, meta }) => (
          <li key={slug}>
            <Link
              href={`/projects/${slug}`}
              className="block h-full overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/60 transition-colors hover:border-neutral-500"
            >
              {meta.coverImage && (
                <Image
                  src={meta.coverImage}
                  alt={`${meta.title} — preview`}
                  width={600}
                  height={340}
                  sizes="(max-width: 640px) 100vw, 450px"
                  className="aspect-video w-full object-contain"
                />
              )}
              <div className="p-5">
                <h2 className="text-xl font-medium">{meta.title}</h2>
                <p className="mt-2 line-clamp-3 leading-6 text-neutral-400">
                  {meta.shortDescription}
                </p>
                <p className="mt-4 text-sm text-neutral-300">
                  {meta.tags.join(" · ")}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
