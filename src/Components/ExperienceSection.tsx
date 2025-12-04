import { experiences } from "@/data/expirences";
import React from "react";
import { MapPin, CalendarBlank } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full px-6 py-[50px]">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 grid gap-2">
          <h2 className="text-center text-3xl font-bold text-neutral-200">
            💼 Experience
          </h2>
          <p className="text-center text-lg text-neutral-400">
            My professional journey and work experience
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="grid gap-6">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="group relative rounded-lg border-neutral-700 bg-neutral-900/50 px-6 py-6 backdrop-blur-sm transition-all duration-300"
            >
              {/* Timeline dot */}
              <div className="bg-background absolute -left-[17px] top-8 hidden h-8 w-8 rounded-full border-4 border-neutral-800 transition-colors group-hover:border-blue-500 md:block" />

              {/* Content */}
              <div className="space-y-4">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-neutral-100">
                      {experience.title}
                    </h3>
                    <p className="font-light text-neutral-200">
                      {experience.company && (
                        <a
                          href={experience.companyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors hover:text-blue-400"
                        >
                          {experience.company}
                        </a>
                      )}
                    </p>
                  </div>
                  <span className="flex items-center gap-2 rounded-full border border-blue-800/50 bg-blue-900/30 px-3 py-1 text-sm font-medium text-blue-300">
                    <CalendarBlank /> {experience.duration}
                  </span>
                </div>

                {/* Location and Employment Type */}
                <div className="flex flex-wrap items-center gap-4 text-neutral-400">
                  {experience.location && (
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-neutral-500" />
                      <span className="text-sm">{experience.location}</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                {experience.description && (
                  <p className="leading-relaxed text-neutral-300">
                    {experience.description}
                  </p>
                )}

                {/* Skills */}
                {experience.skills && experience.skills.length > 0 && (
                  <div className="space-y-2">
                    <p className="sr-only text-sm font-semibold text-neutral-400">
                      Skills used:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, skillIndex) => (
                        <Link
                          href={skill.link}
                          key={skillIndex}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span
                            title={skill.hint}
                            className="inline-block rounded-full border border-neutral-700 bg-neutral-800/70 px-2 py-0.5 text-xs font-medium text-neutral-300 transition-colors hover:text-sky-600"
                          >
                            {skill.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
