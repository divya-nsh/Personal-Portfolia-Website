import { projects } from "@/data/data";
import { ArrowSquareOut, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectsSec() {
  return (
    <section id="portfolia" className="mx-auto max-w-[1300px] px-4">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-4xl font-bold text-neutral-200">
          -- My Project --
        </h2>
        <p className="text-center text-neutral-300">
          Here are some of my projects i have created.
        </p>
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {projects.map((e) => (
          <div
            key={e.id}
            className="w-[370px] rounded-xl border border-neutral-800 bg-neutral-900 p-4 md:max-w-[390px]"
          >
            <Link href={`/projects/${e.slug}`} tabIndex={-1}>
              <Image
                style={{
                  width: "100%",
                  aspectRatio: "16 / 9",
                }}
                quality={100}
                width={400}
                height={250}
                alt="Project Thumbnail"
                className="rounded-xs bg-neutral-800 object-cover"
                src={e.imageURL || "https://placehold.co/300"}
              />
            </Link>

            <div className="pt-1 pb-2">
              <Link
                href={`/projects/${e.slug}`}
                className="transition-all duration-200 hover:underline"
              >
                <h3 className="mt-2 text-2xl font-medium text-neutral-100">
                  {e.title}
                </h3>
              </Link>
              {!!e.techStack.length && (
                <ul className="my-1 mt-2 flex flex-wrap gap-2">
                  {e.techStack.slice(0, 4).map((v) => (
                    <li
                      key={v}
                      className="flex items-center rounded-lg bg-neutral-800 px-2 text-sm text-neutral-300"
                    >
                      {v}
                    </li>
                  ))}
                  {e.techStack.length > 4 && (
                    <li className="flex items-center text-sm text-blue-500 hover:opacity-90">
                      <Link href={`/projects/${e.slug}`}>
                        +{e.techStack.length - 4} more
                      </Link>
                    </li>
                  )}
                </ul>
              )}
              <p className="mt-2 line-clamp-2 text-lg text-neutral-200">
                {e.discription}
              </p>
              <div className="mt-3 flex items-center gap-2">
                {e.liveURL && (
                  <a
                    className="flex items-center gap-1 rounded-lg border border-neutral-800 px-2 py-0.5 text-[0.9rem] font-bold text-blue-500 hover:opacity-80"
                    href={e.liveURL}
                  >
                    Live <ArrowSquareOut size={18} />
                  </a>
                )}
                <a
                  href={e.githubURL}
                  className="flex items-center gap-1 rounded-lg border border-neutral-800 px-2 py-0.5 text-[0.9rem] font-bold text-blue-500 hover:opacity-80"
                >
                  Code <GithubLogo size={19} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
