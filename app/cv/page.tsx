import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

const cvDescription =
  "Curriculum vitae of Maroš Jančo — senior AI/ML engineer. 9+ years shipping production ML, NLP and LLM systems. Ex-Sword Health, Upheal, Cervest, BNP Paribas; founder of Lexomat.";

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
    org: "Sword Health",
    title: "Senior AI Engineer, Platform · Portugal (remote)",
    dates: "Jul – Nov 2026",
    points: [
      "Evaluated and delivered a custom-trained LLM 40% faster at p50 at comparable quality, benchmarked against open-source and Claude Sonnet models with agentic evals and multiple LLM judges.",
      "Audited agent memory and compaction in production; built a production memory dashboard and showed by simulation how a redesign would cut agentic costs by 20%.",
      "Automated model comparisons with agent skills that generate consistently structured, repeatable wiki reports.",
      "From Platform, reviewed PRs on agentic behaviour, prompts and internal apps for all product teams; coached them on cost-aware, PHI-safe, spec-driven agentic development.",
    ],
  },
  {
    org: "Upheal",
    title: "Senior AI Engineer · New York (remote)",
    dates: "Nov 2023 – Jun 2026",
    note: "Best Startup Award. AI clinical-documentation platform for therapists.",
    points: [
      "Led AI for the core product, AI-generated clinical progress notes: owned prompts, models and quality across 250+ sections and 100+ production releases with no quality regression.",
      "Cut AI costs by 50% while improving quality through use-case model routing across Vertex AI, Bedrock, Azure OpenAI and Anthropic; built the Langfuse LLM-as-judge evaluation framework and A/B pipeline that gated every release.",
      "Productionised RAG and agentic workflows (incl. a Claude Agent SDK support agent) with trace-level observability; advised founders on model strategy and ran internal Claude Code workshops.",
    ],
  },
  {
    org: "ATEN Consult",
    title: "AI Product Consultant · London",
    dates: "Aug – Oct 2023",
    points: [
      "Reworked strategy, business model and architecture of a knowledge-graph platform for a successful UK Smart Funding bid.",
    ],
  },
  {
    org: "Cervest",
    title: "Senior Data Scientist · London",
    dates: "Jun 2021 – Jun 2023",
    note: "Global Impact 50 Award 2023. Physical climate risk for enterprise assets.",
    points: [
      "Built a global multi-hazard climate-risk platform from scratch, with models predicting climate-driven stock shocks.",
      "Led wildfire-damage modelling and S&P 500 / FTSE 100 company-to-asset mapping; scaled TB-scale geospatial, satellite and financial pipelines (PySpark, Databricks).",
    ],
  },
  {
    org: "BNP Paribas",
    title: "Machine Learning Researcher · London",
    dates: "Jun 2016 – Jun 2021",
    note: "Global investment-bank R&D lab.",
    points: [
      "Trained and shipped 12+ production NER models (LSTM, BERT; PyTorch) automating global chat-to-price FX execution.",
      "Implemented an interpretable entity-extraction model from scratch in Python (gradient-boosted trees, Kneser-Ney n-gram LMs, Word2Vec), reused across extraction tasks and datasets.",
      "Built collaborative-filtering document recommenders for thousands of clients; benchmarked rule-based, neural and matrix-factorisation models with custom metrics on Spark/Dask pipelines.",
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
    text: "Founded an AI legal-research platform indexing millions of Slovak/Czech legal documents; owned agentic RAG, citations, product, architecture, infrastructure and GDPR. Stack: Next.js / TypeScript, Python / FastAPI, Supabase + PGroonga, Vertex AI.",
  },
  {
    name: "Souli",
    link: { label: "github.com/dzino-app/souli.app →", href: site.links.souli },
    text: "Open-sourced end-to-end-encrypted AI companion that gamifies personal growth. Privacy-first architecture — chat content encrypted end-to-end, including in transit to and from the model. Full-stack TypeScript + privacy engineering.",
  },
  {
    name: "PayToEat.sk",
    text: "Co-founded and operated a food-delivery business (2019); led product, engineering and growth across Slovak towns. Pre-AI era; still serving customers.",
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
          Senior AI / ML engineer, 9+ years shipping production systems from
          trained NLP and recommender models to LLM agents. Owns quality, cost
          and reliability end-to-end (evals, pipelines, performance); advises
          founders and upskills teams. Trained at Imperial College London (BSc
          Mathematics with Statistics for Finance, First Class) and UCL (MSc
          Machine Learning). Founder of Lexomat.
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
            Databricks Certified ML Associate (2023) · Languages: English,
            Slovak, Czech (fluent)
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-[24px] font-semibold">Selected stack</h2>
        <p className="mt-4 font-mono text-[14px] leading-[1.7] text-muted">
          Python · TypeScript · SQL · Bash/CLI · PyTorch · scikit-learn ·
          XGBoost · LightGBM · spaCy · PySpark · Pandas · Polars · LangGraph ·
          Claude Agent SDK · Claude Code · Langfuse · hybrid retrieval ·
          reranking · LLM-as-judge · Vertex AI · AWS Bedrock · Azure OpenAI ·
          Anthropic API · FastAPI · Postgres · Pytest · DVC · uv · Docker ·
          Kubernetes · GitHub Actions · Grafana
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
