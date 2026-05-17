import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { getAllPosts } from "@/lib/writing";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes on building production LLM systems, AI evaluations, and lessons from shipping Lexomat and Souli.",
  alternates: { canonical: "/writing" },
};

export default function WritingIndex() {
  const posts = getAllPosts();

  return (
    <Container width="wide" className="py-20 md:py-28">
      <h1 className="font-serif text-[40px] font-semibold tracking-[-0.02em] md:text-[56px]">
        Writing
      </h1>
      {posts.length === 0 ? (
        <p className="mt-8 max-w-[640px] text-[17px] italic text-muted">
          Coming soon: notes on building production LLM systems, AI evaluations,
          and lessons from shipping Lexomat and Souli.
        </p>
      ) : (
        <ul className="mt-12 flex flex-col divide-y divide-subtle">
          {posts.map((p) => (
            <li key={p.slug} className="py-7 first:pt-0">
              <Link href={`/writing/${p.slug}`} className="group block">
                <time className="font-mono text-[13px] text-muted">
                  {p.date}
                </time>
                <h2 className="mt-2 text-[22px] font-semibold transition-colors group-hover:text-accent">
                  {p.title}
                </h2>
                <p className="mt-2 text-[16px] text-muted">{p.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}
