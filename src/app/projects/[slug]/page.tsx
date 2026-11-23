import {
  ArrowLeft,
  ArrowSquareOut,
  GithubLogo,
} from "@phosphor-icons/react/dist/ssr";
import JsonLd from "@/Components/JsonLd";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getMdxProject, getProjectSlugs, getMdxProjects } from "@/lib/projects";
import {
  projectNode,
  breadcrumbNode,
  schemaGraph,
  pageOpenGraph,
  pageTwitter,
  toMetaDescription,
  DEFAULT_OG_IMAGE,
} from "@/seo";
import { SITE_LIVE_URL } from "@/constants";

type Props = PageProps<"/projects/[slug]">;

export async function generateStaticParams() {
  return (await getProjectSlugs()).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getMdxProject(slug);
  if (!project) notFound();
  const { meta } = project;
  const description = toMetaDescription(meta.shortDescription ?? meta.title);
  const image = meta.coverImage ?? DEFAULT_OG_IMAGE;

  return {
    title: meta.title,
    description,
    keywords: [...meta.tags],
    alternates: { canonical: `${SITE_LIVE_URL}/projects/${slug}` },
    openGraph: pageOpenGraph({
      title: meta.title,
      description,
      image,
      url: `${SITE_LIVE_URL}/projects/${slug}`,
      imageAlt: `${meta.title} — project screenshot`,
    }),
    twitter: pageTwitter({
      title: meta.title,
      description,
      image,
      imageAlt: `${meta.title} — project screenshot`,
    }),
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const project = await getMdxProject(slug);
  if (!project) notFound();
  const { default: Content, meta } = project;

  const schemaProject = {
    slug,
    title: meta.title,
    discription: meta.shortDescription,
    techStack: meta.tags,
    images: meta.coverImage ? [meta.coverImage] : [],
    githubURL: meta.githubURL,
    liveURL: meta.liveURL,
  };

  const relatedProjects = (await getMdxProjects())
    .filter(
      (related) => related.slug !== slug && related.meta.isActive !== false,
    )
    .slice(0, 3);

  return (
    <article className="mx-auto mb-[100px] mt-4 grid max-w-4xl rounded-xl px-4">
      <JsonLd
        data={schemaGraph(
          projectNode(schemaProject),
          breadcrumbNode(schemaProject),
        )}
      />
      <nav aria-label="Back navigation">
        <Link
          href="/"
          className="mt-1 flex w-max items-center gap-2 rounded-md px-2 py-1 text-neutral-300 hover:opacity-80"
        >
          <ArrowLeft aria-hidden="true" color="white" /> Back
        </Link>
      </nav>

      <header>
        <h1 className="mt-2 text-4xl font-medium text-neutral-300 md:text-5xl">
          {meta.title}
        </h1>

        <div className="mt-4 flex items-center gap-4">
          {meta.liveURL && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded-md bg-green-700 px-2 py-0.5 text-sm font-bold hover:opacity-80"
              href={meta.liveURL.trim()}
              aria-label={`Open live demo for ${meta.title} in a new tab`}
            >
              Live <ArrowSquareOut aria-hidden="true" size={18} />
            </a>
          )}
          {meta.githubURL && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={meta.githubURL.trim()}
              className="flex items-center gap-1 rounded-md bg-blue-700 px-2 py-0.5 text-sm font-bold hover:opacity-80"
              aria-label={`Open source code for ${meta.title} in a new tab`}
            >
              Code <GithubLogo aria-hidden="true" size={19} />
            </a>
          )}
        </div>

        {!!meta.tags.length && (
          <section
            aria-labelledby="project-tech-stack-heading"
            className="mt-6"
          >
            <h2 id="project-tech-stack-heading" className="sr-only">
              Tech stack
            </h2>
            <div className="flex items-start gap-2 text-lg">
              <p className="whitespace-nowrap">Tech Stack:</p>
              <ul
                className="m-0 flex list-none flex-wrap gap-2 p-0"
                aria-label={`${meta.title} tech stack`}
              >
                {meta.tags.map((v) => (
                  <li
                    key={v}
                    className="rounded-full bg-neutral-800 px-2 py-0.5 text-sm text-neutral-300"
                  >
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </header>

      <hr className="my-3 border-neutral-800" />

      <Content />

      {/* {!!relatedProjects.length && (
        <section
          aria-labelledby="more-projects-heading"
          className="mt-14 border-t border-neutral-800 pt-8"
        >
          <h2
            id="more-projects-heading"
            className="text-xl font-medium text-neutral-200"
          >
            More projects
          </h2>
          <ul className="m-0 mt-4 grid list-none gap-3 p-0 sm:grid-cols-3">
            {relatedProjects.map((related) => (
              <li key={related.slug}>
                <Link
                  href={`/projects/${related.slug}`}
                  className="block h-full rounded-lg border border-neutral-800 bg-neutral-900/60 p-4 transition-colors hover:border-neutral-600"
                >
                  <span className="font-medium text-neutral-100">
                    {related.meta.title}
                  </span>
                  <span className="mt-1 block text-sm text-neutral-400">
                    {related.meta.tags.slice(0, 2).join(" · ")}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )} */}
    </article>
  );
}
