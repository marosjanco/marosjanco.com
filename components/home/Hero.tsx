import { site, mailtoHref, bookingHref } from "@/lib/site";
import { Container } from "@/components/Container";

export function Hero() {
  return (
    <section className="flex min-h-[80vh] items-center md:min-h-screen">
      <Container width="wide" className="py-24">
        <div className="max-w-[680px]">
          <h1 className="font-serif text-[40px] font-semibold leading-[1.1] tracking-[-0.02em] md:text-[64px]">
            Senior AI engineer for production LLM systems.
          </h1>
          <p className="mt-7 max-w-[600px] text-[17px] leading-[1.5] text-muted md:text-[21px]">
            I help founders and engineering teams ship agentic, RAG and LLM
            systems that actually work in production — evaluations, context
            engineering, MLOps, full-stack.
          </p>
          <p className="mt-4 max-w-[600px] text-[17px] leading-[1.5] text-muted md:text-[21px]">
            Currently taking a small number of consulting engagements. Based in
            Slovakia, working with clients across Europe and the UK.
          </p>
          <p className="mt-7 inline-flex items-center gap-2 text-[15px] font-medium text-accent">
            <span
              aria-hidden
              className="inline-block h-2 w-2 rounded-full bg-accent"
            />
            {site.capacity}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-[16px]">
            <a
              href={bookingHref}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-accent pb-0.5 text-accent transition-opacity hover:opacity-70"
            >
              Book a free 30-min call →
            </a>
            <a
              href={mailtoHref}
              className="border-b border-fg pb-0.5 transition-colors hover:border-accent hover:text-accent"
            >
              Email me →
            </a>
            <a
              href="#work"
              className="border-b border-fg pb-0.5 transition-colors hover:border-accent hover:text-accent"
            >
              See recent work ↓
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
