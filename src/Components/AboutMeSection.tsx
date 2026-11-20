import Link from "next/link";
import React from "react";

export default function AboutMeSection() {
  return (
    <section className="mb-[100px] mt-[20px] border-neutral-700 px-6 pt-10">
      <div className="mx-auto max-w-[1000px]">
        <h1 className="mb-6 text-5xl font-medium text-neutral-300">
          👨‍💻 About Me
        </h1>
        <div className="grid gap-3 text-left text-neutral-200">
          <p>
            I&apos;m Divyansh Soni 👋 an India-based full-stack web developer. I
            build web apps and websites with expertise in React, Tailwind CSS,
            Node.js and more. My journey in web development started out of
            curiosity about how computer applications work.
          </p>
          <p>
            Focused on creating user-friendly, visually appealing, accessible,
            and responsive web applications. As a tech enthusiast, I love
            learning new things and exploring the ever-evolving world of web
            development.
          </p>
          <p>
            I&#39;m constantly improving my skills through various learning
            sources, including Udemy courses, YouTube tutorials, MDN
            documentation, official docs of libraries and frameworks. Since this
            is the era of AI, I use tools like ChatGPT to improve my skills,
            clear doubts and make my work better.
          </p>
        </div>
        <Link
          href="/#skills"
          className="mt-[20px] inline-block rounded-lg bg-blue-600 px-6 py-2 font-medium"
        >
          My Skills
        </Link>
      </div>
    </section>
  );
}
