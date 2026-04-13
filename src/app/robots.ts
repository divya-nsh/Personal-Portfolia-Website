import { SITE_LIVE_URL } from "@/constants";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: SITE_LIVE_URL,
    sitemap: `${SITE_LIVE_URL}/sitemap.xml`,
  };
}
