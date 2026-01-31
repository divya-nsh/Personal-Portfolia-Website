import { skills } from "@/data/data";
import React from "react";

export default function SkillsSec() {
  return (
    <section id="skills" className="mt-[50px] w-full px-6 py-[50px]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 grid gap-2 text-center">
          <h2 className="text-4xl font-bold text-neutral-200">My Skills</h2>
          <p className="text-lg">Here are some of my tech skills </p>
        </div>

        <div className="grid gap-6">
          {skills.map((e, i) => (
            <div
              key={i}
              className="relative items-center gap-2 rounded-lg border border-neutral-900 px-4 py-4"
            >
              <h3 className="bg-background absolute left-0 top-0 mx-4 translate-y-[-50%] font-medium text-neutral-200">
                {e.category}
              </h3>
              <div className="mt-2 flex flex-wrap gap-3">
                {e.skills.map((v, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1 rounded-lg border border-neutral-800/90 bg-neutral-800 px-4 py-1"
                  >
                    {v.Icon && <span>{<v.Icon size={18} />}</span>}

                    {v.label}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
