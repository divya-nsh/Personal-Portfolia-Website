import Link from "next/link";
import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";

export default function NavBar() {
  return (
    <div className="border-b border-neutral-800/90 py-3">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-medium text-neutral-300">
          <Image src={logo} alt="logo" />
        </Link>
        <ul className="flex gap-6 text-neutral-300">
          <li className="transition-all duration-200 hover:text-blue-400">
            <Link href="/about">AboutMe</Link>
          </li>
          {["Skills", "Portfolia"].map((v) => (
            <li
              key={v}
              className="transition-all duration-200 hover:text-blue-400"
            >
              <Link href={"/#" + v.toLowerCase()}>{v}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
