import { projects } from "@/data/data";
import { ArrowSquareOut, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectsSec() {
  return (
    <section
      id="portfolia"
      aria-labelledby="projects-section-heading"
      className="mx-auto max-w-[1300px] px-4"
    >
      <div className="flex flex-col items-center gap-2">
        <h2
          id="projects-section-heading"
          className="text-4xl font-bold text-neutral-200"
        >
          -- My Project --
        </h2>
        <p className="text-center text-neutral-300">
          Here are some of my projects i have created.
        </p>
      </div>
      <ul
        aria-label="Project list"
        className="m-0 mt-10 flex list-none flex-wrap justify-center gap-6 p-0"
      >
        {projects.map((e) => (
          <li key={e.id} className="w-[370px] list-none md:max-w-[390px]">
            <article className="rounded-xl border border-neutral-800 bg-neutral-900 p-4">
              <Link
                href={`/projects/${e.slug}`}
                aria-label={`Open ${e.title} project details`}
              >
                <Image
                  style={{
                    width: "100%",
                    aspectRatio: "16 / 9",
                  }}
                  width={400}
                  height={250}
                  alt={`${e.title} preview`}
                  className="rounded-xs bg-neutral-800 object-cover"
                  src={e.images[0] || "https://placehold.co/300"}
                />
              </Link>

              <div className="pb-2 pt-1">
                <h3 className="mt-2 text-2xl font-medium text-neutral-100">
                  <Link
                    href={`/projects/${e.slug}`}
                    className="transition-all duration-200 hover:underline"
                  >
                    {e.title}
                  </Link>
                </h3>
                {!!e.techStack.length && (
                  <ul
                    className="my-1 mt-2 flex flex-wrap gap-2"
                    aria-label={`${e.title} tech stack`}
                  >
                    {e.techStack.slice(0, 3).map((v) => (
                      <li key={v} className="text-sm text-neutral-200">
                        #{v}
                      </li>
                    ))}
                    {e.techStack.length > 3 && (
                      <li className="flex items-center text-sm text-blue-500 hover:opacity-90">
                        <Link
                          href={`/projects/${e.slug}`}
                          aria-label={`View all technologies used in ${e.title}`}
                        >
                          +{e.techStack.length - 3} more
                        </Link>
                      </li>
                    )}
                  </ul>
                )}
                <p className="mt-2 line-clamp-2 text-neutral-300">
                  {e.discription}
                </p>
                <div className="mt-3 flex items-center gap-2">
                  {e.liveURL && (
                    <a
                      className="flex items-center gap-1 rounded-lg border border-neutral-800 px-2 py-0.5 text-[0.9rem] font-bold text-blue-500 hover:opacity-80"
                      href={e.liveURL}
                      aria-label={`Open live demo for ${e.title}`}
                    >
                      Live <ArrowSquareOut aria-hidden="true" size={18} />
                    </a>
                  )}
                  {e.githubURL && (
                    <a
                      href={e.githubURL}
                      className="flex items-center gap-1 rounded-lg border border-neutral-800 px-2 py-0.5 text-[0.9rem] font-bold text-blue-500 hover:opacity-80"
                      aria-label={`Open source code for ${e.title}`}
                    >
                      Code <GithubLogo aria-hidden="true" size={19} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
