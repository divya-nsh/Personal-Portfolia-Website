import type { Metadata } from "next";
import {
  CONTACT_EMAIL,
  SITE_DESCRIPTION,
  SITE_LIVE_URL,
  SITE_NAME,
  SOCIAL_PROFILES,
} from "@/constants";
import type { TProject } from "@/types/types";

export const DEFAULT_OG_IMAGE = "/images/og-1200x630.png";
const DEFAULT_OG_IMAGE_ALT = "Divyansh Soni — Full-Stack Web Developer";
const PERSON_ID = `${SITE_LIVE_URL}/#person`;
const WEBSITE_ID = `${SITE_LIVE_URL}/#website`;

type OpenGraphMetadata = NonNullable<Metadata["openGraph"]>;
type TwitterMetadata = NonNullable<Metadata["twitter"]>;

/** Turns a site-relative path (e.g. "/images/x.png") into an absolute URL. */
export function toAbsoluteUrl(pathOrUrl: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return `${SITE_LIVE_URL}${pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`}`;
}

/** Collapses whitespace and trims to a length search engines won't truncate mid-word. */
export function toMetaDescription(text: string, maxLength = 155): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= maxLength) return clean;
  const cut = clean.slice(0, maxLength);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : maxLength).trimEnd()}…`;
}

type SocialPreview = {
  title: string;
  description: string;
  url: string;
  image?: string;
  imageAlt?: string;
};

/**
 * Per-page Open Graph metadata. Next replaces (doesn't merge) the `openGraph`
 * object when a page defines one, so every page that wants a correct preview
 * URL/title has to build the whole object — this keeps that in one place.
 */
export function pageOpenGraph({
  title,
  description,
  url,
  image = DEFAULT_OG_IMAGE,
  imageAlt = DEFAULT_OG_IMAGE_ALT,
}: SocialPreview): OpenGraphMetadata {
  const isDefaultImage = image === DEFAULT_OG_IMAGE;

  return {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    url,
    title,
    description,
    images: [
      {
        url: toAbsoluteUrl(image),
        alt: imageAlt,
        ...(isDefaultImage ? { width: 1200, height: 630 } : {}),
      },
    ],
  };
}

export function pageTwitter({
  title,
  description,
  image = DEFAULT_OG_IMAGE,
  imageAlt = DEFAULT_OG_IMAGE_ALT,
}: Omit<SocialPreview, "url">): TwitterMetadata {
  return {
    card: "summary_large_image",
    title,
    description,
    images: [{ url: toAbsoluteUrl(image), alt: imageAlt }],
  };
}

export function personNode() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: SITE_NAME,
    url: SITE_LIVE_URL,
    image: toAbsoluteUrl(DEFAULT_OG_IMAGE),
    jobTitle: "Full-Stack Web Developer",
    description:
      "Full-stack web developer based in Udaipur, Rajasthan, India, building modern web applications with React, Next.js, TypeScript and Node.js.",
    email: `mailto:${CONTACT_EMAIL}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Udaipur",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
    sameAs: SOCIAL_PROFILES,
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Microsoft SQL Server",
      "Tailwind CSS",
    ],
  };
}

export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_LIVE_URL,
    name: `${SITE_NAME} — Portfolio`,
    description: SITE_DESCRIPTION,
    inLanguage: "en",
    publisher: { "@id": PERSON_ID },
  };
}

export function aboutPageNode(description: string) {
  return {
    "@type": "AboutPage",
    "@id": `${SITE_LIVE_URL}/about#webpage`,
    url: `${SITE_LIVE_URL}/about`,
    name: `About ${SITE_NAME}`,
    description,
    inLanguage: "en",
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: { "@id": PERSON_ID },
  };
}

export function projectNode(project: TProject) {
  const url = `${SITE_LIVE_URL}/projects/${project.slug}`;
  const images = Array.from(new Set(project.images.filter(Boolean)));

  return {
    "@type": "CreativeWork",
    "@id": `${url}#project`,
    name: project.title,
    description: project.discription,
    url,
    image: images.map(toAbsoluteUrl),
    author: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: SITE_NAME,
      url: SITE_LIVE_URL,
    },
    keywords: project.techStack.join(", "),
    inLanguage: "en",
    ...(project.githubURL ? { codeRepository: project.githubURL.trim() } : {}),
    ...(project.liveURL ? { sameAs: project.liveURL.trim() } : {}),
  };
}

export function breadcrumbNode(project: TProject) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_LIVE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: project.title,
        item: `${SITE_LIVE_URL}/projects/${project.slug}`,
      },
    ],
  };
}

export function schemaGraph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
