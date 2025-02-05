"use client";
import { ArrowUp } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      type="button"
      style={{
        opacity: showButton ? 1 : 0,
        visibility: showButton ? "visible" : "hidden",
        transform: `scale(${showButton ? 1 : 0.5})`,
      }}
      title="Scroll To Top"
      aria-label="Scroll To Top"
      className="fixed right-6 bottom-6 z-30 cursor-pointer rounded-full bg-neutral-900 p-4 opacity-80 transition-all duration-300 hover:opacity-70 active:scale-95"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <ArrowUp size={15} />
    </button>
  );
}
