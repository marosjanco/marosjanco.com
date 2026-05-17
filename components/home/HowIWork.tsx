import { Container } from "@/components/Container";
import { Section, SectionHeading } from "@/components/Section";

const columns = [
  {
    title: "Engagements",
    body: (
      <>
        <p>
          Most engagements start with a conversation like: &ldquo;our RAG
          retrieves the wrong documents and we can&rsquo;t diagnose why,&rdquo;
          &ldquo;our LLM costs are 4x what we modeled,&rdquo; &ldquo;our agent
          demos beautifully but breaks with real users,&rdquo; or &ldquo;we need
          an evaluation framework before our next release.&rdquo;
        </p>
        <p className="mt-3">
          Typically 1–3 months, scoped per problem. I take on a small number of
          clients at a time.
        </p>
      </>
    ),
  },
  {
    title: "Pricing",
    body: (
      <p>
        Engagements priced per project or per day, scoped in the first call.
        I&rsquo;ll send a clear range within 24 hours of our initial email
        exchange.
      </p>
    ),
  },
  {
    title: "Working style",
    body: (
      <p>
        Remote-first from Slovakia with regular travel — comfortable working
        hybrid across major EU hubs (London, Berlin, Munich, Amsterdam, Zurich,
        Prague, Vienna) on a roughly monthly cadence. Async-friendly, English,
        EU/UK timezones.
      </p>
    ),
  },
];

export function HowIWork() {
  return (
    <Section id="how-i-work" divider>
      <Container width="full">
        <SectionHeading>How I Work</SectionHeading>
        <div className="grid gap-12 md:grid-cols-3 md:gap-16">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-3 text-[18px] font-semibold">{col.title}</h3>
              <div className="text-[16px] leading-[1.6] text-muted">
                {col.body}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
