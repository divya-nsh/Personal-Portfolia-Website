import {
  Envelope,
  GithubLogo,
  LinkedinLogo,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";
import React from "react";
import { icons } from "@/Components/icons";

const links = [
  { label: "Github", Icon: GithubLogo, href: "https://github.com/divya-nsh" },
  { label: "Twitter", Icon: XLogo, href: "https://x.com/divyansh_soni_0" },
  {
    label: "Linkdin",
    Icon: LinkedinLogo,
    href: "https://www.linkedin.com/in/divyansh-soni-4a5810257/",
  },
  { label: "Email", Icon: Envelope, href: "mailto:divyanshsoni279@gmail.com" },
  {
    label: "Leetcode",
    Icon: icons.Leetcode,
    href: "https://leetcode.com/u/divyanshsoni279/",
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-neutral-900 bg-gradient-to-t from-purple-800/12 to-purple-800/5 pb-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-10">
        <div className="mb-2 flex gap-1 pt-5">
          {links.map((v, i) => (
            <a
              key={i}
              aria-label={"My " + v.label + " link"}
              href={v.href}
              className="mr-3 rounded-full border border-neutral-700 p-2 transition-all duration-200 hover:border-blue-600 hover:bg-neutral-900 active:scale-95"
              title={v.label}
            >
              {<v.Icon size={22} />}
            </a>
          ))}
        </div>

        <p className="mt-2 text-center text-neutral-400 italic">
          © 2025 Divyansh Soni. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
