"use client";
import { skills } from "@/data/data";
import { motion, stagger, Variants } from "motion/react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: stagger(0.15), // slightly faster feel
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function SkillsSec() {
  return (
    <section
      // viewport={{ once: true }}
      id="skills"
      className="mt-[50px] w-full px-6 py-[50px]"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-8 grid gap-2 text-center"
        >
          <h2 className="text-4xl font-bold text-neutral-200">
            Skills & Expertise
          </h2>
          <p className="text-lg">
            A comprehensive overview of my technical skills and tools I work
            with daily
          </p>
        </motion.div>

        <div className="grid gap-6">
          {skills.map((e, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 + 0.2 }}
              key={idx}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
