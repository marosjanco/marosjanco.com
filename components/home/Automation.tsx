import { Container } from "@/components/Container";
import { Section, SectionHeading } from "@/components/Section";
import { bookingHref } from "@/lib/site";

// Broadens positioning beyond engineering teams: plain-language automation for
// businesses without an in-house AI team. Pairs with the Slovak /sk landing page.
const columns = [
  {
    title: "Automate manual work",
    body: "The repetitive work your team does by hand — customer support and inboxes, documents and invoices, quotes, reports, data entry. AI can draft, classify and route most of it, so people handle only what needs a human.",
  },
  {
    title: "Add AI to your product",
    body: "Smart search and assistants, AI agents, auto-summaries, content generation, document understanding — built into the product you already ship, in a way that's reliable enough for real users.",
  },
  {
    title: "Reliable and cost-aware",
    body: "I bring evaluations and monitoring so AI behaves predictably and doesn't blow the budget — the same discipline that cut model-running costs ~50% at Upheal, applied to your use case.",
  },
];

export function Automation() {
  return (
    <Section id="automation" divider>
      <Container width="full">
        <SectionHeading>Automation for businesses</SectionHeading>
        <p className="mb-10 max-w-[680px] text-[17px] leading-[1.6] text-muted md:mb-12 md:text-[19px]">
          Not just for engineering teams. If your company has obvious manual work
          — or a product that could be smarter — AI can take a lot of it off your
          plate. You don&rsquo;t need an in-house AI team; you work directly with
          me, the person who also builds it.
        </p>
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-serif text-[19px] font-semibold tracking-[-0.01em]">
                {col.title}
              </h3>
              <p className="mt-3 text-[16px] leading-[1.6] text-muted">
                {col.body}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-[16px] md:mt-12">
          <span className="text-muted">Not sure where AI fits? </span>
          <a
            href={bookingHref}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-accent pb-0.5 text-accent transition-opacity hover:opacity-70"
          >
            Book a free 30-min call →
          </a>
          <span className="text-muted">
            {" "}
            Slovak business? See{" "}
          </span>
          <a
            href="/sk"
            className="border-b border-fg pb-0.5 transition-colors hover:border-accent hover:text-accent"
          >
            slovenská verzia
          </a>
          <span className="text-muted">.</span>
        </p>
      </Container>
    </Section>
  );
}
