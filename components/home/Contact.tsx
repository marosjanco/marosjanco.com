import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { site, mailtoHref, bookingHref } from "@/lib/site";

export function Contact() {
  return (
    <Section id="contact" divider>
      <Container width="reading" className="text-center">
        <h2 className="font-serif text-[28px] font-semibold tracking-[-0.01em] md:text-[36px]">
          Get in touch
        </h2>
        <p className="mx-auto mt-6 max-w-[560px] text-[17px] leading-[1.6]">
          If you&rsquo;re working on a production LLM system and want a senior
          pair of eyes — or you&rsquo;d like to discuss a longer engagement —
          email me a paragraph about what you&rsquo;re working on.
        </p>
        <a
          href={mailtoHref}
          className="mt-7 inline-block font-serif text-[24px] text-accent underline-offset-4 hover:underline md:text-[28px]"
        >
          {site.email}
        </a>
        <p className="mx-auto mt-6 max-w-[520px] text-[15px] text-muted">
          Prefer to skip the back-and-forth?{" "}
          <a
            href={bookingHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline-offset-4 hover:underline"
          >
            Book a free 30-minute call →
          </a>
        </p>
        <p className="mx-auto mt-4 max-w-[520px] text-[15px] italic text-muted">
          I read every email personally and reply within 48 hours. The first
          step is always a free, no-pressure 30-minute call — if we&rsquo;re not
          a fit, you still leave with concrete ideas.
        </p>
      </Container>
    </Section>
  );
}
