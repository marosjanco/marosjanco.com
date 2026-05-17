import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { SelectedWork } from "@/components/home/SelectedWork";
import { OpenSource } from "@/components/home/OpenSource";
import { HowIWork } from "@/components/home/HowIWork";
import { About } from "@/components/home/About";
import { WritingPreview } from "@/components/home/WritingPreview";
import { Contact } from "@/components/home/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <SelectedWork />
      <OpenSource />
      <HowIWork />
      <About />
      <WritingPreview />
      <Contact />
    </>
  );
}
