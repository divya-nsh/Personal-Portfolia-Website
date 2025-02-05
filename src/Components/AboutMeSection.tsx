import Link from "next/link";
import React from "react";

export default function AboutMeSection() {
  return (
    <section className="mt-[20px] mb-[100px] border-neutral-700 px-6 pt-10">
      <div className="mx-auto max-w-[1000px]">
        <h2 className="mb-6 text-5xl font-medium text-neutral-300">
          👨‍💻 About Me
        </h2>
        <div className="grid gap-3 text-left text-neutral-200">
          <p>
            I&apos;m Divyanh soni 👋 India based full-stack web developer. I
            build web apps and websites with expertise in React, Tailwind CSS,
            Nodejs and more. My journey in web development started out of
            curiosity about how computer applications works.
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
            documentation, official docs of libraries and frameworks and Since
            its Era of AI i use Ai like chartgpt to improve my skills, clear
            doubt and make my work better.
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
