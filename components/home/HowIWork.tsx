import { Container } from "@/components/Container";
import { Section, SectionHeading } from "@/components/Section";

const columns = [
  {
    title: "Engagements",
    body: (
      <>
        <p>
          Every engagement starts with a{" "}
          <span className="text-fg">free first call</span>. We walk through how
          your company actually runs — your day-to-day flows, where time is
          lost, what&rsquo;s still done by hand — and I tell you honestly
          what&rsquo;s worth automating or improving, and what isn&rsquo;t.
        </p>
        <p className="mt-3">
          From there I can build something new, or make what you already have{" "}
          <span className="text-fg">faster, cheaper and more reliable</span> —
          improving existing automations and infrastructure, not just greenfield
          work. That ranges from &ldquo;our LLM costs are 4x what we
          modeled&rdquo; to &ldquo;we still process every order by hand.&rdquo;
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
      <>
        <p>
          The first call is free, with no obligation. Once we&rsquo;ve scoped
          the problem together, I send a clear price range within 24 hours —
          fixed price for well-defined projects, or a day rate for ongoing and
          exploratory work.
        </p>
        <p className="mt-3">
          I personally lead and build every engagement (senior Python /
          full-stack) and bring in additional vetted senior engineers under my
          direction when a project needs more hands or a specialist skill — a
          small, senior team without the overhead or layers of a big
          consultancy. You always work directly with me.
        </p>
      </>
    ),
  },
  {
    title: "Working style",
    body: (
      <p>
        I&rsquo;m based in Slovakia and genuinely love meeting in person. When
        an engagement calls for it I&rsquo;ll travel anywhere in the world —
        regularly on-site across major hubs like London, Berlin, Munich,
        Amsterdam, Zurich, Prague and Vienna, and further afield wherever the
        work takes us. Between visits I&rsquo;m responsive and async-friendly,
        working in Slovak and English across time zones.
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
