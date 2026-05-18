import { Container } from "@/components/Container";
import { Section, SectionHeading } from "@/components/Section";
import { site } from "@/lib/site";

type CaseStudy = {
  company: string;
  meta: string;
  link?: { label: string; href: string };
  question: string;
  headline: string;
  detail: string;
  stack: string;
};

const cases: CaseStudy[] = [
  {
    company: "Upheal",
    meta: "Senior AI Engineer (Contract) · Nov 2023 – May 2026",
    question:
      "How do you ship LLM products that don't regress in production, across 100+ releases?",
    headline:
      "Led prompts, models and quality for AI-generated clinical progress notes — the core product of an AI documentation platform for therapists (Best Startup Award winner).",
    detail:
      "Shipped 100+ production releases. Built an LLM-as-judge evaluation framework on Langfuse (datasets, eval runs, trace-level flow debugging) plus an A/B-testing pipeline that gates releases. Productionised RAG, prompt orchestration and agentic patterns across Gemini, Claude, GPT-* and Llama; benchmarked Vertex AI, AWS Bedrock, Azure OpenAI and Anthropic for quality, latency and cost. Automated a Claude-Agent-SDK customer-support agent with internal-tool integration and guardrails. Ran LLM observability and MLOps, and reported AI projects and cost trade-offs directly to founders.",
    stack:
      "Python · TypeScript · Langfuse · Vertex AI · Bedrock · Anthropic API · Grafana · BetterStack · CloudWatch",
  },
  {
    company: "Cervest",
    meta: "Senior Data Scientist · Jul 2021 – Jul 2023",
    question:
      "How do you ship production ML over TBs of multi-source data, where the predictions bear real financial risk?",
    headline:
      "Built from scratch the first physical-climate-impact platform assessing combined-hazard damages on assets and portfolios worldwide. The company won the Global Impact 50 Award 2023.",
    detail:
      "Led a global wildfire-damage prediction product end-to-end. Built a company → subsidiary → asset framework for SP500 and FTSE100 firms; shipped a financial-impact model predicting stock-price shocks from adverse climate events. Optimised distributed pipelines over TBs of geospatial, satellite and financial data.",
    stack: "PySpark · Databricks · Geopandas · Xarray · Kubernetes · Python",
  },
  {
    company: "BNP Paribas",
    meta: "Machine Learning Researcher · Jun 2017 – Jun 2021",
    question:
      "How do you ship NLP models that run daily in mission-critical workflows, year after year?",
    headline: "Built and deployed NLP models for a global investment bank's AI lab.",
    detail:
      "Built a history-augmented collaborative-filtering recommender for client document recommendations; weekly chatbot recommendations save thousands of clients hours of search across thousands of documents. Designed and shipped an NLP entity-extraction system combining Random Forests, GBT, Kneser-Ney n-gram LMs, Naive Bayes and Word2Vec into one classifier; later scaled with LSTM- and BERT-based architectures. A dozen+ resulting NER models now automate chat-to-price FX execution worldwide on a daily basis.",
    stack: "Python · PyTorch · Keras · Spark · Word2Vec · BERT",
  },
  {
    company: "Lexomat",
    meta: "Founder · 2024 – Present",
    link: { label: "lexomat.sk →", href: site.links.lexomat },
    question:
      "How do you ship LLM systems that domain experts will trust to use daily?",
    headline:
      "Solo-founded AI legal-research chat for Slovak and Czech law, indexing millions of legal documents. Used by legal professionals through FinAI s.r.o.",
    detail:
      "Drove product, design, agentic AI flows, GDPR compliance, pricing and infrastructure end-to-end (one contractor on delivery). Built the citation-resolution layer for ambiguous pre-1993 Czechoslovak legal references and a backend-resolved URL architecture for slov-lex.sk to eliminate LLM URL hallucination.",
    stack:
      "Next.js · TypeScript · Python · FastAPI · Supabase · PGroonga · Vertex AI",
  },
];

export function SelectedWork() {
  return (
    <Section id="work" divider>
      <Container width="wide">
        <SectionHeading>Selected Work</SectionHeading>
        <div className="flex flex-col">
          {cases.map((c, i) => (
            <article
              key={c.company}
              className={`py-10 ${i > 0 ? "border-t border-subtle" : ""}`}
            >
              <h3 className="text-[20px] font-semibold md:text-[22px]">
                {c.company}
                <span className="font-normal text-muted">
                  {" · "}
                  {c.meta}
                  {c.link && (
                    <>
                      {" · "}
                      <a
                        href={c.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:opacity-70"
                      >
                        {c.link.label}
                      </a>
                    </>
                  )}
                </span>
              </h3>
              <p className="mt-3 text-[17px] italic md:text-[18px]">
                {c.question}
              </p>
              <p className="mt-3 text-[17px] leading-[1.6]">{c.headline}</p>
              <p className="mt-3 text-[16px] leading-[1.6] text-muted">
                {c.detail}
              </p>
              <p className="mt-4 font-mono text-[13px] text-muted">{c.stack}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
