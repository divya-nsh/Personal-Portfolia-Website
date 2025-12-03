import React from "react";
import ProjectsSec from "@/Components/ProjectsSec";
import SkillsSec from "@/Components/SkillsSec";
import HeroSec from "@/Components/HeroSection";
import Image from "next/image";
import gif from "@/assets/Cat-Typing.gif";

export default function IndexPage() {
  return (
    <>
      <h1 className="sr-only">Divyansh Soni — Full-Stack Web Developer</h1>
      <HeroSec />
      <SkillsSec />
      <div className="mb-[80px]" />
      <ProjectsSec />
      <div className="mb-[100px]" />
      <section className="mb-12">
        <div className="flex flex-col items-center justify-center px-4 text-center">
          <p className="gradient-text max-w-md text-lg font-medium">
            Stay tuned! I&apos;m still coding to bring more ideas to life.
          </p>
          <Image
            src={gif}
            alt="Coding in progress"
            width={100}
            height={100}
            className="mt-4 rounded-lg duration-500"
          />
        </div>
      </section>
    </>
  );
}
