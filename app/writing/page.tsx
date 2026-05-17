import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { getAllPosts } from "@/lib/writing";

const writingDescription =
  "Notes on building production LLM systems — LLM evaluation, RAG architecture, prompt engineering at scale, and provider benchmarking. Drawn from work at Upheal and on Lexomat.";

export const metadata: Metadata = {
  title: "Writing",
  description: writingDescription,
  alternates: { canonical: "/writing" },
  openGraph: {
    type: "website",
    url: "/writing",
    title: "Writing — Maroš Jančo",
    description: writingDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Writing — Maroš Jančo",
    description: writingDescription,
  },
};

export default function WritingIndex() {
  const posts = getAllPosts();

  return (
    <Container width="wide" className="py-20 md:py-28">
      <h1 className="font-serif text-[40px] font-semibold tracking-[-0.02em] md:text-[56px]">
        Writing
      </h1>
      {posts.length === 0 ? (
        <div className="mt-8 max-w-[640px] space-y-4 text-[17px] leading-[1.6] text-muted">
          <p>
            Notes on building production LLM systems, primarily drawn from work
            at Upheal and on Lexomat. Topics include LLM evaluation, RAG
            architecture, prompt engineering at scale, provider benchmarking,
            and the engineering trade-offs that don&rsquo;t show up in the LLM
            marketing literature.
          </p>
          <p>
            First post coming June 2026.{" "}
            <a href="/feed.xml" className="text-accent hover:opacity-70">
              Subscribe via RSS
            </a>{" "}
            to be notified.
          </p>
        </div>
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
