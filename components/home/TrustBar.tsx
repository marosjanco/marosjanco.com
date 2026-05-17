import { Container } from "@/components/Container";

// Spec §3.2 — the single most important credibility element on the page.
// v1 renders monochrome text wordmarks at reduced opacity. Pre-launch task
// (spec §9.1): replace with sourced monochrome brand SVGs.
const companies = [
  "Upheal",
  "Cervest",
  "BNP Paribas",
  "Imperial College London",
  "UCL",
];

export function TrustBar() {
  return (
    <Container width="full" className="pb-16 md:pb-24">
      <p className="mb-6 text-[14px] text-muted">Worked with and at:</p>
      <ul className="flex flex-wrap items-center gap-x-10 gap-y-4 opacity-60">
        {companies.map((c) => (
          <li
            key={c}
            className="font-serif text-[18px] font-medium tracking-tight md:text-[20px]"
          >
            {c}
          </li>
        ))}
      </ul>
    </Container>
  );
}
