"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site, mailtoHref } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "border-b border-subtle bg-bg/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1080px] items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="font-serif text-lg font-semibold tracking-[-0.01em]"
        >
          {site.name}
        </Link>
        <nav className="flex items-center gap-5 text-[15px] sm:gap-7">
          <Link href="/writing" className="transition-colors hover:text-accent">
            Writing
          </Link>
          <Link href="/cv" className="transition-colors hover:text-accent">
            CV
          </Link>
          <a
            href={mailtoHref}
            className="text-accent transition-opacity hover:opacity-70"
          >
            Email me
          </a>
        </nav>
      </div>
    </header>
  );
}
