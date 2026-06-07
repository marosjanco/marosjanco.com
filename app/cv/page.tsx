import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

const cvDescription =
  "Curriculum vitae of Maroš Jančo — senior AI/ML engineer. 10+ years shipping production ML, NLP and LLM systems. Ex-Upheal, Cervest, BNP Paribas; founder of Lexomat.";

export const metadata: Metadata = {
  title: "CV",
  description: cvDescription,
  alternates: { canonical: "/cv" },
  openGraph: {
    type: "profile",
    url: "/cv",
    title: "CV — Maroš Jančo",
    description: cvDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "CV — Maroš Jančo",
    description: cvDescription,
  },
};

type Role = {
  org: string;
  title: string;
  dates: string;
  note?: string;
  points: string[];
};

const experience: Role[] = [
  {
    org: "Upheal",
    title: "Senior AI Engineer · New York (remote)",
    dates: "Nov 2023 – Present",
    note: "Best Startup Award. AI clinical-documentation platform for therapists.",
    points: [
      "Own prompts, models and quality for AI-generated progress notes (core product) across 250+ documentation sections; shipped 100+ production releases across multiple model generations without quality regression. Mentored new hires; reported AI roadmap and cost trade-offs directly to founders.",
      "Lowered AI costs by ~50% while improving quality. Built an LLM-as-judge eval framework on Langfuse (datasets, eval runs, trace-level flow debugging) plus an A/B-testing pipeline; used to gate releases, catch regressions and shorten the prompt-iteration cycle.",
      "Productionised RAG, prompt orchestration and agentic patterns across Gemini, Claude, GPT-* and Llama; benchmarked Vertex AI, AWS Bedrock, Azure OpenAI and Anthropic continuously, routing traffic by use case rather than committing to one provider.",
      "Automated a Claude-Agent-SDK customer-support agent (internal-tool integration, hardened prompts and guardrails).",
      "Ran LLM observability and MLOps (Langfuse, Grafana, BetterStack, AWS CloudWatch, SNS, SQS, Azure, Google Cloud, Vertex AI, Superset); lifted team velocity via Claude Code in daily workflow, improved CI/CD, and internal sessions on modern RAG / prompting / agentic best practices.",
    ],
  },
  {
    org: "ATEN Consult",
    title: "AI Product Consultant · London",
    dates: "Aug – Oct 2023",
    points: [
      "Led ideation and planning of an expert-validated knowledge-graph platform; reshaped business model, scope, financials and technical architecture for a successful UK Smart Funding submission after 12 months of prior poor-quality work.",
    ],
  },
  {
    org: "Cervest",
    title: "Senior Data Scientist · London",
    dates: "Jun 2021 – Jun 2023",
    note: "Global Impact 50 Award 2023. Physical climate risk for enterprise assets.",
    points: [
      "Built from scratch the first physical-climate-impact platform assessing combined-hazard damages on assets and portfolios worldwide; shipped a financial-impact model predicting stock-price shocks from adverse climate events.",
      "Led a global wildfire-damage prediction product end-to-end and built a company → subsidiary → asset framework for SP500 and FTSE100 firms; optimised distributed pipelines over TBs of geospatial, satellite and financial data (PySpark, Databricks, Geopandas, Xarray, k8s).",
    ],
  },
  {
    org: "BNP Paribas",
    title: "Machine Learning Researcher · London",
    dates: "Jun 2016 – Jun 2021",
    note: "Global investment-bank R&D lab.",
    points: [
      "Built a history-augmented collaborative-filtering recommender for client document recommendations (Amazon S3, Spark, Dask); weekly chatbot recommendations save thousands of clients hours of search.",
      "Designed and shipped an NLP entity-extraction system from scratch — Random Forests, GBT, Kneser-Ney n-gram LMs, Naive Bayes and Word2Vec into one interpretable classifier; later scaled with LSTM- and BERT-based architectures. A dozen+ resulting NER models now automate chat-to-price FX execution worldwide daily.",
    ],
  },
];

type Project = {
  name: string;
  link?: { label: string; href: string };
  text: string;
};

const projects: Project[] = [
  {
    name: "Lexomat",
    link: { label: "lexomat.sk →", href: site.links.lexomat },
    text: "Solo-founded AI legal-research chat for Slovak and Czech law, indexing millions of documents; drove product, design, agentic AI flows, pricing, GDPR and infra end-to-end (one contractor on delivery). Stack: Next.js / TypeScript, Python / FastAPI, Supabase + PGroonga, Vertex AI.",
  },
  {
    name: "Souli",
    link: { label: "github.com/dzino-app/souli.app →", href: site.links.souli },
    text: "Open-sourced end-to-end-encrypted AI companion that gamifies personal growth. Privacy-first architecture — chat content encrypted end-to-end, including in transit to and from the model. Full-stack TypeScript + privacy engineering.",
  },
  {
    name: "PayToEat.sk",
    text: "Co-founded and ran a food-delivery app (2019); led product, ops and growth across Slovak towns. Pre-AI era; the business still serves customers today in one Slovak town.",
  },
];

export default function CvPage() {
  return (
    <Container width="wide" className="py-20 md:py-28">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="font-serif text-[40px] font-semibold tracking-[-0.02em] md:text-[56px]">
            Maroš Jančo
          </h1>
          <p className="mt-2 text-[18px] text-muted">
            Senior AI / ML Engineer — production LLM, RAG and agentic systems
          </p>
        </div>
        <a
          href="/cv.pdf"
          className="mt-2 shrink-0 border-b border-accent pb-0.5 text-[15px] text-accent hover:opacity-70"
        >
          Download PDF ↓
        </a>
      </header>

      <section className="mt-12">
        <h2 className="font-serif text-[24px] font-semibold">Summary</h2>
        <p className="mt-4 max-w-[760px] text-[17px] leading-[1.6]">
          Generalist AI engineer with 10+ years shipping applied ML, NLP and LLM
          products end-to-end — currently leading prompts, evals, RAG and
          agentic systems at Upheal. Trained at Imperial College London (BSc
          Mathematics with Statistics for Finance, First Class) and UCL (MSc
          Machine Learning). Founder of Lexomat; strong product, customer and
          design instincts from owning features and a company.
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
              {r.note && (
                <p className="mt-1 text-[14px] italic text-muted">{r.note}</p>
              )}
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
        <h2 className="font-serif text-[24px] font-semibold">
          Selected side projects
        </h2>
        <div className="mt-6 flex flex-col divide-y divide-subtle">
          {projects.map((p) => (
            <div key={p.name} className="py-5 first:pt-0">
              <h3 className="text-[18px] font-semibold">
                {p.name}
                {p.link && (
                  <>
                    {" "}
                    <span className="text-muted">· </span>
                    <a
                      href={p.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-normal text-accent hover:opacity-70"
                    >
                      {p.link.label}
                    </a>
                  </>
                )}
              </h3>
              <p className="mt-2 text-[16px] leading-[1.6] text-muted">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-[24px] font-semibold">Education</h2>
        <ul className="mt-4 space-y-2 text-[16px] leading-[1.6]">
          <li>
            <strong>UCL</strong> — MSc Machine Learning{" "}
            <span className="text-muted">· 2016–2017</span>
          </li>
          <li>
            <strong>Imperial College London</strong> — BSc (Hons) Mathematics
            with Statistics for Finance, First Class{" "}
            <span className="text-muted">· 2013–2016</span>
          </li>
          <li className="text-muted">
            Databricks Certified ML Associate (2023)
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-[24px] font-semibold">Selected stack</h2>
        <p className="mt-4 font-mono text-[14px] leading-[1.7] text-muted">
          Python · TypeScript · SQL · PyTorch · Langfuse · Vertex AI · AWS
          Bedrock · Anthropic API · FastAPI · Next.js · Supabase / Postgres
          (PGroonga) · PySpark · Databricks · Docker · Kubernetes · GitHub
          Actions
        </p>
      </section>

      <p className="mt-14 text-[15px] text-muted">
        Contact:{" "}
        <a
          href={`mailto:${site.email}`}
          className="text-accent hover:opacity-70"
        >
          {site.email}
        </a>{" "}
        ·{" "}
        <a
          href={site.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:opacity-70"
        >
          LinkedIn
        </a>{" "}
        ·{" "}
        <a
          href={site.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:opacity-70"
        >
          GitHub
        </a>
      </p>
    </Container>
  );
}
