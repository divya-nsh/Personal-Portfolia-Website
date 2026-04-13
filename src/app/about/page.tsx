import React from "react";
import AboutMeSection from "@/Components/AboutMeSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Divyansh Soni",
  description:
    "Learn more about Divyansh Soni, a full-stack web developer from Udaipur, Rajasthan. Discover my journey, skills, and passion for building modern web applications.",
};

export default function AboutMePage() {
  return <AboutMeSection />;
}
