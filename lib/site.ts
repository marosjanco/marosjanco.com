export const site = {
  name: "Maroš Jančo",
  title: "Maroš Jančo — Senior AI Engineer",
  role: "Senior AI Engineer",
  url: "https://marosjanco.com",
  email: "maros@marosjanco.com",
  description:
    "Senior AI engineer for production LLM systems. Consulting on evaluations, RAG, agentic systems and MLOps. Ex-Upheal, Cervest, BNP Paribas. Founder of Lexomat.",
  links: {
    linkedin: "https://www.linkedin.com/in/maro%C5%A1-jan%C4%8Do-565a3535/",
    github: "https://github.com/marosjanco",
    souli: "https://github.com/dzino-app/souli.app",
    lexomat: "https://lexomat.sk",
  },
} as const;

// Pre-filled mailto — a small but disproportionately effective conversion lever (spec §5.5).
export const mailtoHref =
  "mailto:maros@marosjanco.com" +
  "?subject=" +
  encodeURIComponent("Inquiry from marosjanco.com") +
  "&body=" +
  encodeURIComponent(
    "Hi Maroš,\n\nI'm working on [brief description] and interested in [engagement type]. Some context:\n\n",
  );
