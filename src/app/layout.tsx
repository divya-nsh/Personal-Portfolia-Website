import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import ScrollToTop from "@/Components/ScrollToTop";
import { Analytics } from "@vercel/analytics/next";
import {
  SITE_DESCRIPTION,
  SITE_LIVE_URL,
  SITE_NAME,
  SITE_TITLE,
} from "@/constants";

const roboto = Roboto({
  variable: "--font-robot",
  // Only the weights the site actually uses — fewer font files to download.
  weight: ["300", "400", "500", "700", "800", "900"],
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_LIVE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Divyansh Soni",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_LIVE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  keywords: [
    "Divyansh Soni",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Web Developer Portfolio",
    // Location-based
    "Web Developer in Udaipur",
    "Software Developer in Udaipur",
    "Full-Stack Developer in Udaipur",
    "Freelance Developer Udaipur",
    "Web Developer in Rajasthan",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // NOTE: no `alternates.canonical` here. Metadata objects are inherited by child
  // routes, so a canonical set in the root layout would make every page claim to
  // be the homepage. Each page sets its own canonical instead.
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    url: SITE_LIVE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/images/og-1200x630.png",
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: "/images/og-1200x630.png", alt: SITE_TITLE }],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.className} scroll bg-background relative text-neutral-100 antialiased`}
      >
        <NavBar />
        <main className="relative z-10">{children}</main>
        <Footer />
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  );
}
