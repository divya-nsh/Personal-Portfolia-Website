import React from "react";
import AboutMeSection from "@/Components/AboutMeSection";
import JsonLd from "@/Components/JsonLd";
import { Metadata } from "next";
import { SITE_LIVE_URL } from "@/constants";
import {
  aboutPageNode,
  pageOpenGraph,
  pageTwitter,
  personNode,
  schemaGraph,
  websiteNode,
} from "@/seo";

const ABOUT_URL = `${SITE_LIVE_URL}/about`;
const title = "About Divyansh Soni";
const description =
  "Learn more about Divyansh Soni, a full-stack web developer from Udaipur, Rajasthan, India. Discover my journey, skills and passion for building modern web applications.";

export const metadata: Metadata = {
  title: "About Me",
  description,
  alternates: {
    canonical: ABOUT_URL,
  },
  openGraph: pageOpenGraph({ title, description, url: ABOUT_URL }),
  twitter: pageTwitter({ title, description }),
};

export default function AboutMePage() {
  return (
    <>
      <JsonLd
        data={schemaGraph(
          websiteNode(),
          personNode(),
          aboutPageNode(description),
        )}
      />
      <AboutMeSection />
    </>
  );
}
