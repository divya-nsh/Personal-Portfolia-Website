"use client";
import { MultiWriteTextEffect } from "./MutiWriteTxtEffect";
import { DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import { links } from "@/data/data";
import Image, { getImageProps } from "next/image";
import cartoonAvatar from "@/assets/cartoon-avatar.jpg";
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

function getBackgroundImage(srcSet = "") {
  const imageSet = srcSet
    .split(", ")
    .map((str) => {
      const [url, dpi] = str.split(" ");
      return `url("${url}") ${dpi}`;
    })
    .join(", ");
  return `image-set(${imageSet})`;
}

export default function HeroSec() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="mx-auto mt-10 flex max-w-6xl flex-col-reverse items-center justify-between gap-4 px-6 lg:mt-16 lg:flex-row"
    >
      <div className="grid flex-1 gap-4">
        <motion.div variants={itemVariants} className="flex">
          <div className="flex items-center gap-2 rounded-lg border border-neutral-800 px-3 py-1">
            <span className="size-2 animate-pulse rounded-full bg-green-600" />
            <span className="text-sm text-neutral-300">Available for work</span>
          </div>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="duration-600 -mt-2 text-5xl font-bold text-neutral-300"
        >
          Hi, I&apos;m <span className="gradient-text"> Divyansh Soni</span>
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-2xl font-bold text-neutral-300"
        >
          <span className="mr-2">----</span>
          <MultiWriteTextEffect
            texts={[
              "Web Developer",
              "Frontend Developer",
              "Backend Developer",
              "Tech Enthusiast",
            ]}
          />
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="max-w-[600px] text-[1.1rem] text-neutral-300"
        >
          I&apos;m aspiring full-stack web developer. focused on creating
          user-friendly, visually appealing, and responsive web applications.
          Passionate about learning and building new things.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-2 flex w-full flex-wrap items-center gap-4"
        >
          <a
            href={process.env.RESUME_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Resume"
            className="flex cursor-pointer items-center gap-2 rounded-lg bg-neutral-800 px-2 py-2 transition-all duration-300 hover:opacity-80"
          >
            <DownloadSimple size={22} />
            Resume
          </a>
          <div className="flex gap-3">
            {links.map((v, i) => (
              <a
                key={i}
                target="_blank"
                aria-label={"My " + v.label + " link"}
                href={v.href}
                className="rounded-full border border-neutral-700 p-2 transition-all duration-200 hover:scale-105 hover:border-blue-600 hover:bg-neutral-900 active:scale-90"
                title={v.label}
              >
                {<v.Icon size={24} />}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Animated Visual Image */}
      <AnimtedHeroImage />
    </motion.section>
  );
}

function AnimtedHeroImage() {
  //To optmise background image copy code pasted from next docs
  const {
    props: { srcSet },
  } = getImageProps({
    src: cartoonAvatar,
    width: 300,
    height: 300,
    priority: true,
    alt: "",
  });
  const backgroundImage = getBackgroundImage(srcSet);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -5, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="grid size-[280px] place-items-center lg:size-[330px]"
    >
      {/* For SEO PURPOSE */}
      <Image
        src={cartoonAvatar}
        alt="My Avatar"
        width={300}
        height={300}
        className="sr-only"
      />
      <div className="box size-[280px] shrink-0 md:size-[300px]">
        <div className="spin-container size-[250px] md:size-[280px]">
          <div className="shape size-[250px] md:size-[280px]">
            <div
              className="bd"
              style={{
                backgroundImage,
              }}
            ></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
