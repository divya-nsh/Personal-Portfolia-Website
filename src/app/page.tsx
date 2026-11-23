import type { Metadata } from "next";
import ProjectsSec from "@/Components/ProjectsSec";
import SkillsSec from "@/Components/SkillsSec";
import ExperienceSection from "@/Components/ExperienceSection";
import HeroSec from "@/Components/HeroSection";
import JsonLd from "@/Components/JsonLd";
import Image from "next/image";
import gif from "@/assets/Cat-Typing.gif";
import { SITE_LIVE_URL } from "@/constants";
import { personNode, schemaGraph, websiteNode } from "@/seo";
import { getMdxProjects } from "@/lib/projects";

export const metadata: Metadata = {
  alternates: { canonical: SITE_LIVE_URL },
};

export default async function IndexPage() {
  const projects = await getMdxProjects();

  return (
    <>
      <JsonLd data={schemaGraph(websiteNode(), personNode())} />
      <HeroSec />
      <div className="mb-[50px]" />
      <SkillsSec />
      <div className="mb-[80px]" />
      <ProjectsSec
        projects={projects.map((project) => ({
          title: project.meta.title,
          discription: project.meta.shortDescription ?? "",
          slug: project.slug,
          liveURL: project.meta.liveURL,
          githubURL: project.meta.githubURL,
          techStack: project.meta.tags,
          images: project.meta.coverImage ? [project.meta.coverImage] : [],
        }))}
      />
      <div className="mb-[100px]" />
      <ExperienceSection />

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
