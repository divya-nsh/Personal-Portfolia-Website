import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import ScrollToTop from "@/Components/ScrollToTop";

const roboto = Roboto({
  variable: "--font-robot",
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Divyansh Soni",
  description:
    "Hi, I'm Divyansh Soni, a full-stack web developer passionate about building modern, scalable web applications. Explore my projects, skills, and experience.",
  keywords: [
    "Divyansh Soni",
    "Full-Stack Developer",
    "React Developer",
    "Nodejs Developer",
    "JavaScript Developer",
  ],
  metadataBase: new URL("https://divyanshsoni.site"),
  openGraph: {
    images: [
      {
        url: "/images/og-1200x630.png",
        width: 1200,
        height: 630,
        alt: "Divyansh Avatar",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} scroll bg-background relative text-neutral-100 antialiased`}
      >
        <NavBar />
        <main className="relative z-10">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
