import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Section, SectionHeading } from "@/components/Section";

// Graceful degrade (spec §3.6): if the optimised portrait is absent at build
// time, the bio takes full width rather than rendering a broken image.
const hasPortrait = fs.existsSync(
  path.join(process.cwd(), "public", "portrait.jpg"),
);

export function About() {
  return (
    <Section id="about" divider>
      <Container width="wide">
        <SectionHeading>About</SectionHeading>
        <div
          className={
            hasPortrait
              ? "grid gap-10 md:grid-cols-[260px_1fr] md:gap-14"
              : "max-w-[640px]"
          }
        >
          {hasPortrait && (
            <div className="order-first">
              <Image
                src="/portrait.jpg"
                alt="Maroš Jančo"
                width={520}
                height={650}
                sizes="(max-width: 768px) 100vw, 260px"
                className="w-full rounded-lg object-cover"
                priority
              />
            </div>
          )}
          <div className="space-y-5 text-[17px] leading-[1.6]">
            <p>
              I&rsquo;m a senior AI engineer with 9+ years shipping production
              ML, NLP and LLM systems. I trained at Imperial College London (BSc
              Mathematics with Statistics for Finance, First Class) and UCL (MSc
              Machine Learning), then spent four years at BNP Paribas&rsquo;s AI
              lab, two years at Cervest in climate-risk modelling, and the last
              two and a half years leading AI engineering at Upheal.
            </p>
            <p>
              Alongside employment I&rsquo;ve founded two AI products: Lexomat, a
              legal-research chat used by lawyers across Slovakia and Czechia,
              and Souli, an open-source end-to-end-encrypted AI companion. The
              combination of senior IC engineering, founder experience, and
              direct customer-facing product work is what I bring to
              engagements.
            </p>
            <p>
              I&rsquo;m a generalist by preference — I want to own a problem from
              prompt to production, not specialise into one layer of the stack.
              The kind of work I do best is the messy middle: making a
              demo-grade AI system into something that ships, scales, costs less
              than it earns, and doesn&rsquo;t break in surprising ways.
            </p>
            <p>
              Outside work I&rsquo;m building a family home in Nolčovo (northern
              Slovakia), raising young children, and reading too much about
              energy markets and language models. I speak English, Slovak, Czech
              and beginner German.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
