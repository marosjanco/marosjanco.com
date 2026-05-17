import Link from "next/link";
import { Container } from "@/components/Container";
import { Section, SectionHeading } from "@/components/Section";
import { getAllPosts } from "@/lib/writing";

export function WritingPreview() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <Section id="writing" divider>
      <Container width="wide">
        <SectionHeading>Writing</SectionHeading>
        {posts.length === 0 ? (
          <p className="max-w-[640px] text-[17px] italic text-muted">
            Coming soon: notes on building production LLM systems, AI
            evaluations, and lessons from shipping Lexomat and Souli.
          </p>
        ) : (
          <ul className="flex flex-col gap-6">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link href={`/writing/${p.slug}`} className="group block">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                    <time className="font-mono text-[13px] text-muted">
                      {p.date}
                    </time>
                    <div>
                      <h3 className="text-[17px] font-semibold transition-colors group-hover:text-accent">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-[16px] text-muted">{p.summary}</p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
        <Link
          href="/writing"
          className="mt-8 inline-block text-[15px] text-accent hover:opacity-70"
        >
          All writing →
        </Link>
      </Container>
    </Section>
  );
}
