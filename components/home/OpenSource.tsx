import { Container } from "@/components/Container";
import { Section, SectionHeading } from "@/components/Section";
import { site } from "@/lib/site";

export function OpenSource() {
  return (
    <Section id="open-source" divider>
      <Container width="wide">
        <SectionHeading>Open Source</SectionHeading>
        <article className="rounded-lg border border-subtle p-7 md:p-9">
          <h3 className="text-[20px] font-semibold md:text-[22px]">
            Souli
            <span className="ml-2 font-normal text-muted">· open-source</span>{" "}
            <span className="text-muted">· </span>
            <a
              href={site.links.souli}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:opacity-70"
            >
              github.com/dzino-app/souli.app →
            </a>
          </h3>
          <p className="mt-4 text-[17px] leading-[1.6]">
            End-to-end encrypted AI companion that gamifies personal growth
            across social, health, career and personal aspects. Privacy-first
            architecture — chat content is encrypted end-to-end, including in
            transit to and from the model.
          </p>
          <p className="mt-3 text-[16px] text-muted">
            Open-sourced May 2026. Full-stack TypeScript + privacy engineering.
          </p>
        </article>
      </Container>
    </Section>
  );
}
