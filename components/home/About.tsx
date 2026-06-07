import fs from "node:fs";
import path from "node:path";
import { Container } from "@/components/Container";
import { Section, SectionHeading } from "@/components/Section";
import { Portrait } from "@/components/home/Portrait";

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
          {hasPortrait && <Portrait />}
          <div className="space-y-5 text-[17px] leading-[1.6]">
            <p>
              I&rsquo;m a senior AI engineer with 10+ years shipping production
              ML, NLP and LLM systems. I trained at Imperial College London (BSc
              Mathematics with Statistics for Finance, First Class) and UCL (MSc
              Machine Learning), taught by Google DeepMind professors, then
              spent four years automating a global bank&rsquo;s services
              with AI at BNP Paribas, two years at Cervest in climate-risk
              modelling, and the last two and a half years leading AI engineering
              at Upheal.
            </p>
            <p>
              Alongside employment I&rsquo;ve founded two AI products: Lexomat, a
              legal-research chat used by lawyers across Slovakia and Czechia,
              and Souli, an open-source end-to-end-encrypted AI companion.
              Earlier, in 2019, I co-founded PayToEat, a food-delivery app still
              used by customers today. The combination of senior IC engineering,
              founder experience, and direct customer-facing product work is what
              I bring to engagements.
            </p>
            <p>
              I&rsquo;m a generalist by preference — I want to own a problem from
              prompt to production, not specialise into one layer of the stack.
              The kind of work I do best is the messy middle: making a
              demo-grade AI system into something that ships, scales, costs less
              than it earns, and doesn&rsquo;t break in surprising ways.
            </p>
            <p>
              Outside work I read daily about investing, economics, agentic
              systems, and AI advancements. I speak English, Slovak, Czech and
              beginner German.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
