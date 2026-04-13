import React from "react";
import { getProjectBySlug, projects } from "@/data/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowSquareOut,
  GithubLogo,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Metadata } from "next";
import { SITE_LIVE_URL } from "@/constants";

type Params = Promise<{ id: string }>;

type Props = {
  params: Params;
};

const DEFAULT_OG_IMAGE = "/images/og-1200x630.png";

function toAbsoluteImageUrl(image: string) {
  if (/^https?:\/\//i.test(image)) return image;
  return `${SITE_LIVE_URL}${image.startsWith("/") ? image : `/${image}`}`;
}

export function generateStaticParams(): Awaited<Params>[] {
  return projects.map((v) => ({
    id: v.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const id = (await params).id;
  const project = getProjectBySlug(id);
  if (!project) notFound();

  const title = `${project.title} - Divyansh Soni`;
  const description = project.discription;
  const image = project.images.find(Boolean) ?? DEFAULT_OG_IMAGE;
  const imageUrl = toAbsoluteImageUrl(image);
  const projectUrl = `${SITE_LIVE_URL}/projects/${project.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: projectUrl,
    },
    openGraph: {
      locale: "en",
      title,
      description,
      type: "website",
      images: [
        {
          url: imageUrl,
        },
      ],
    },
  };
}

// Produc Detail Page
export default async function Page(props: Props) {
  const id = (await props.params).id;
  const project = getProjectBySlug(id);
  if (!project) notFound();

  return (
    <article className="mx-auto mb-[100px] mt-4 grid max-w-4xl rounded-xl px-4">
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
          {project.title}
        </h1>

        <div className="mt-4 flex items-center gap-4">
          {project.liveURL && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded-md bg-green-700 px-2 py-0.5 text-sm font-bold hover:opacity-80"
              href={project.liveURL}
              aria-label={`Open live demo for ${project.title} in a new tab`}
            >
              Live <ArrowSquareOut aria-hidden="true" size={18} />
            </a>
          )}
          {project.githubURL && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={project.githubURL}
              className="flex items-center gap-1 rounded-md bg-blue-700 px-2 py-0.5 text-sm font-bold hover:opacity-80"
              aria-label={`Open source code for ${project.title} in a new tab`}
            >
              Code <GithubLogo aria-hidden="true" size={19} />
            </a>
          )}
        </div>

        {!!project.techStack.length && (
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
                aria-label={`${project.title} tech stack`}
              >
                {project.techStack.map((v) => (
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

      {!!project.discription && (
        <section aria-labelledby="project-overview-heading">
          <h2 id="project-overview-heading" className="sr-only">
            Project overview
          </h2>
          <p className="mt-4 tracking-wide text-neutral-200">
            {project.discription}
          </p>
        </section>
      )}

      {!!project.features?.length && (
        <section className="mt-4" aria-labelledby="project-features-heading">
          <h2 id="project-features-heading" className="text-xl font-medium">
            Features
          </h2>
          <ul className="mt-1 grid list-disc gap-4 pl-6">
            {project.features.map((v, i) => (
              <li key={i} className="text-neutral-300">
                {v}
              </li>
            ))}
          </ul>
        </section>
      )}

      {!!project.images.length && (
        <section
          className="mx-auto"
          aria-labelledby="project-screenshots-heading"
        >
          <h2 id="project-screenshots-heading" className="sr-only">
            Project screenshots
          </h2>
          <ul className="m-0 list-none p-0">
            {project.images.map((url, i) => (
              <li key={`${project.slug}-image-${i}`} className="list-none">
                <Image
                  alt={`${project.title} screenshot ${i + 1}`}
                  loading="lazy"
                  width={900}
                  height={500}
                  className="mt-6 max-h-[500px] rounded-lg border border-neutral-800 bg-neutral-800 object-contain"
                  src={url || "https://placehold.co/300"}
                />
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
