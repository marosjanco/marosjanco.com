import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "CV",
  description:
    "Curriculum vitae of Maroš Jančo — senior AI engineer. 9+ years shipping production ML, NLP and LLM systems.",
  alternates: { canonical: "/cv" },
};

type Role = {
  org: string;
  title: string;
  dates: string;
  points: string[];
};

const experience: Role[] = [
  {
    org: "Upheal",
    title: "Senior AI Engineer (Contract)",
    dates: "Nov 2023 – May 2026",
    points: [
      "Led prompt engineering, evaluation and agentic systems for AI-generated clinical progress notes.",
      "Owned quality across 100+ production releases; built an LLM-as-judge eval framework on Langfuse.",
      "Productionised RAG, prompt orchestration and agentic patterns across Gemini, Claude, GPT-* and Llama; benchmarked Vertex AI, Bedrock, Azure OpenAI and Anthropic for quality, latency and cost.",
      "Reported AI roadmap and cost trade-offs directly to founders.",
    ],
  },
  {
    org: "Cervest",
    title: "Senior Data Scientist",
    dates: "Jul 2021 – Jul 2023",
    points: [
      "Built from scratch the first physical-climate-impact platform assessing combined-hazard damages worldwide.",
      "Led a global wildfire-damage prediction product end-to-end; shipped a financial-impact model for adverse climate events.",
      "Optimised distributed pipelines over TBs of geospatial, satellite and financial data.",
    ],
  },
  {
    org: "BNP Paribas",
    title: "Machine Learning Researcher",
    dates: "Jun 2017 – Jun 2021",
    points: [
      "Built and deployed NLP models for a global investment bank's AI lab.",
      "Built a history-augmented collaborative-filtering recommender saving thousands of clients hours of document search.",
      "Designed an NLP entity-extraction system later scaled with LSTM/BERT; a dozen+ NER models automate chat-to-price FX execution daily.",
    ],
  },
  {
    org: "Lexomat (Founder)",
    title: "Founder",
    dates: "2024 – Present",
    points: [
      "Solo-founded AI legal-research chat for Slovak and Czech law, indexing millions of legal documents.",
      "Drove product, design, agentic AI flows, GDPR compliance, pricing and infrastructure end-to-end.",
      "Built a citation-resolution layer and backend-resolved URL architecture to eliminate LLM URL hallucination.",
    ],
  },
];

export default function CvPage() {
  return (
    <Container width="wide" className="py-20 md:py-28">
      <header>
        <h1 className="font-serif text-[40px] font-semibold tracking-[-0.02em] md:text-[56px]">
          Maroš Jančo
        </h1>
        <p className="mt-2 text-[18px] text-muted">
          Senior AI Engineer — production LLM, RAG and agentic systems
        </p>
      </header>

      <section className="mt-12">
        <h2 className="font-serif text-[24px] font-semibold">Summary</h2>
        <p className="mt-4 max-w-[760px] text-[17px] leading-[1.6]">
          Senior AI engineer with 9+ years shipping production ML, NLP and LLM
          systems. Trained at Imperial College London (BSc Mathematics with
          Statistics for Finance, First Class) and UCL (MSc Machine Learning).
          Founder of Lexomat and Souli. A generalist who owns problems from
          prompt to production.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-[24px] font-semibold">Experience</h2>
        <div className="mt-6 flex flex-col divide-y divide-subtle">
          {experience.map((r) => (
            <div key={r.org} className="py-6 first:pt-0">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-[19px] font-semibold">
                  {r.org}
                  <span className="ml-2 font-normal text-muted">
                    · {r.title}
                  </span>
                </h3>
                <span className="font-mono text-[13px] text-muted">
                  {r.dates}
                </span>
              </div>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[16px] leading-[1.6] text-muted">
                {r.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-[24px] font-semibold">Education</h2>
        <ul className="mt-4 space-y-2 text-[16px] leading-[1.6]">
          <li>
            <strong>UCL</strong> — MSc Machine Learning
          </li>
          <li>
            <strong>Imperial College London</strong> — BSc Mathematics with
            Statistics for Finance (First Class)
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-[24px] font-semibold">Selected stack</h2>
        <p className="mt-4 font-mono text-[14px] leading-[1.7] text-muted">
          Python · TypeScript · PyTorch · Langfuse · Vertex AI · Bedrock ·
          Anthropic API · FastAPI · Next.js · Supabase · PySpark · Databricks ·
          Kubernetes
        </p>
      </section>

      <p className="mt-14 text-[15px] text-muted">
        Contact:{" "}
        <a
          href="mailto:maros@marosjanco.com"
          className="text-accent hover:opacity-70"
        >
          maros@marosjanco.com
        </a>
      </p>
    </Container>
  );
}
