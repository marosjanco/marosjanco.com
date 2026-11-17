export const site = {
  name: "Maroš Jančo",
  title: "Maroš Jančo — Senior AI Engineer",
  role: "Senior AI Engineer",
  url: "https://marosjanco.com",
  email: "maros@marosjanco.com",
  description:
    "Senior AI engineer for production LLM systems. Consulting on evaluations, RAG, agentic systems and MLOps. Ex-Upheal, Cervest, BNP Paribas. Founder of Lexomat.",
  // Capacity signal — review this monthly; it must stay true (spec trust signal).
  capacity: "Currently available for new engagements.",
  links: {
    linkedin: "https://www.linkedin.com/in/marosjanco",
    github: "https://github.com/marosjanco",
    souli: "https://github.com/dzino-app/souli.app",
    lexomat: "https://lexomat.sk",
    // Free 30-min intro call (Calendly). This single value flows to every
    // "Book a call" CTA on the site.
    booking: "https://calendly.com/marosjanco/ai-consultation",
  },
} as const;

// One place for the booking URL so every CTA stays in sync.
export const bookingHref = site.links.booking;

// Pre-filled mailto — a small but disproportionately effective conversion lever (spec §5.5).
export const mailtoHref =
  "mailto:maros@marosjanco.com" +
  "?subject=" +
  encodeURIComponent("Inquiry from marosjanco.com") +
  "&body=" +
  encodeURIComponent(
    "Hi Maroš,\n\nI'm working on [brief description] and interested in [engagement type]. Some context:\n\n",
  );
