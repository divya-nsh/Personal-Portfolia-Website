import React from "react";
import { getProject, projects } from "@/data/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowSquareOut,
  GithubLogo,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Metadata } from "next";

type Params = Promise<{ id: string }>;

type Props = {
  params: Params;
};

export function generateStaticParams(): Awaited<Params>[] {
  return projects.map((v) => ({
    id: v.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const id = (await params).id;
  const project = getProject(id);
  if (!project) notFound();

  return {
    title: `${project.title} - Divyansh soni`,
  };
}

export default async function ProjectDetailPage(props: Props) {
  const id = (await props.params).id;
  const project = getProject(id);
  if (!project) notFound();

  return (
    <div className="mx-auto mt-4 mb-[100px] grid max-w-4xl rounded-xl px-4">
      <Link
        href="/"
        className="mt-1 flex w-max items-center gap-2 rounded-md px-2 py-1 text-neutral-300 hover:opacity-80"
      >
        <ArrowLeft color="white" /> Back
      </Link>
      <div className="">
        <h2 className="mt-2 text-4xl font-medium text-neutral-300 md:text-5xl">
          {project.title}
        </h2>

        <div className="mt-4 flex items-center gap-4">
          {project.liveURL && (
            <a
              target="_blank"
              className="flex items-center gap-1 rounded-md bg-green-700 px-2 py-0.5 text-[1rem] font-bold hover:opacity-80"
              href={project.liveURL}
            >
              Live <ArrowSquareOut size={18} />
            </a>
          )}
          <a
            target="_blank"
            href={project.githubURL}
            className="flex items-center gap-1 rounded-md bg-blue-700 px-2 py-0.5 text-[1rem] font-bold hover:opacity-80"
          >
            Code <GithubLogo size={19} />
          </a>
        </div>

        {!!project.techStack.length && (
          <div className="mt-6 flex items-start gap-2 text-lg">
            <p className="whitespace-nowrap">Tech Stack:</p>
            <ul className="flex flex-wrap gap-2">
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
        )}
        <hr className="my-3 border-neutral-800" />

        {!!project.discription && (
          <p className="mt-4 tracking-wide text-neutral-200">
            {project.discription}
          </p>
        )}

        {!!project.features && (
          <div className="mt-4">
            <p className="text-xl font-medium">Features: </p>
            <ul className="mt-1 grid list-disc gap-4 pl-6">
              {project.features.map((v, i) => (
                <li key={i} className="text-neutral-300">
                  {v}
                </li>
              ))}
            </ul>
          </div>
        )}

        <Image
          quality={100}
          alt="Project Screenshort"
          loading="eager"
          width={900}
          height={506}
          className="mt-6 w-full rounded-lg border border-neutral-800 bg-neutral-800 object-contain"
          src={project.imageURL || "https://placehold.co/300"}
        />
      </div>
    </div>
  );
}
