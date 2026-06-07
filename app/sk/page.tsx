import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Section, SectionHeading } from "@/components/Section";
import { TrustBar } from "@/components/home/TrustBar";
import { site, bookingHref } from "@/lib/site";
import { getAllPosts } from "@/lib/writing";

const skDescription =
  "Senior AI inžinier pre slovenské firmy. Automatizácia procesov (podpora, dokumenty, faktúry) a AI do produktu (vyhľadávanie, asistenti, agenti). 30 minút zadarmo. Bez prostredníka — priamo so mnou.";

export const metadata: Metadata = {
  title: "AI pre slovenské firmy",
  description: skDescription,
  alternates: { canonical: "/sk" },
  openGraph: {
    type: "website",
    url: "/sk",
    title: "AI pre slovenské firmy — Maroš Jančo",
    description: skDescription,
    locale: "sk_SK",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI pre slovenské firmy — Maroš Jančo",
    description: skDescription,
  },
};

// Slovak-language landing page for SK SME / business cold-outreach traffic.
// lang="sk" is set on the wrapper (the root <html> stays "en" — full per-route
// html lang would need a route-group layout; tracked as an optional follow-up).
const sluzby = [
  {
    title: "Automatizácia procesov",
    body: "Opakovaná práca, ktorú dnes robia ľudia ručne — zákaznícka podpora a e-maily, dokumenty a faktúry, ponuky, reporty, prepisovanie údajov. AI vie väčšinu predpripraviť, zatriediť a nasmerovať, takže ľudia riešia len to, čo naozaj potrebuje človeka.",
  },
  {
    title: "AI do produktu",
    body: "Inteligentné vyhľadávanie a asistenti, AI agenti, automatické zhrnutia, generovanie obsahu, porozumenie dokumentom — vstavané priamo do produktu, ktorý už máte, a dosť spoľahlivé na reálnych používateľov.",
  },
  {
    title: "Spoľahlivosť a náklady",
    body: "Prinášam evaluácie a monitoring, aby sa AI správala predvídateľne a neminula rozpočet. Tá istá disciplína, ktorá v Upheal znížila náklady na modely o ~50 %, aplikovaná na váš prípad.",
  },
];

// Mirrors the English "How I Work" section (Engagements / Pricing / Working
// style) — keep both languages aligned when either changes.
const spolupraca = [
  {
    title: "Spolupráca",
    body: [
      "Každá spolupráca začína nezáväzným hovorom zadarmo. Spolu si prejdeme, ako vaša firma reálne funguje — vaše každodenné procesy, kde sa stráca čas, čo sa ešte robí ručne — a ja vám úprimne poviem, čo sa oplatí automatizovať či zlepšiť a čo nie.",
      "Odtiaľ viem postaviť niečo nové, alebo to, čo už máte, spraviť rýchlejším, lacnejším a spoľahlivejším — zlepšujem aj existujúce automatizácie a infraštruktúru, nielen riešenia na zelenej lúke.",
      "Typicky 1–3 mesiace, podľa konkrétneho problému. Naraz beriem len pár klientov.",
    ],
  },
  {
    title: "Cena",
    body: [
      "Prvý hovor je zadarmo a nezáväzne. Keď si spolu zadefinujeme problém, do 24 hodín pošlem jasné cenové rozpätie — fixná cena pri jasne ohraničených projektoch, alebo denná sadzba pri priebežnej a prieskumnej práci.",
      "Každú spoluprácu vediem a realizujem osobne (senior Python / full-stack) a pri väčšom rozsahu alebo potrebe špecialistu priberám ďalších preverených senior inžinierov pod mojím vedením — malý senior tím bez réžie a vrstiev veľkých konzultačných firiem. Vždy komunikujete priamo so mnou.",
    ],
  },
  {
    title: "Spôsob práce",
    body: [
      "Som zo Slovenska a osobné stretnutia mám naozaj rád. Ak to spolupráca vyžaduje, pricestujem kamkoľvek na svete — pravidelne osobne vo veľkých mestách ako Londýn, Berlín, Mníchov, Amsterdam, Zürich, Praha či Viedeň, a aj ďalej, kamkoľvek nás práca zavedie. Medzi stretnutiami som responzívny a async-friendly, pracujem po slovensky aj anglicky naprieč časovými pásmami.",
    ],
  },
];

const skMailto =
  "mailto:" +
  site.email +
  "?subject=" +
  encodeURIComponent("Dopyt z marosjanco.com");

export default function SkPage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div lang="sk">
      {/* Hero */}
      <section className="flex min-h-[70vh] items-center md:min-h-[80vh]">
        <Container width="wide" className="py-24">
          <div className="max-w-[700px]">
            <h1 className="font-serif text-[40px] font-semibold leading-[1.1] tracking-[-0.02em] md:text-[60px]">
              AI pre slovenské firmy — od inžiniera, ktorý to aj postaví.
            </h1>
            <p className="mt-7 max-w-[620px] text-[17px] leading-[1.5] text-muted md:text-[21px]">
              Som Maroš Jančo, senior AI inžinier. Pomáham firmám zarobiť alebo
              ušetriť pomocou AI — či už ide o automatizáciu procesov, ktoré dnes
              zožierajú čas, alebo o vstavanie AI do vášho produktu.
            </p>
            <p className="mt-4 max-w-[620px] text-[17px] leading-[1.5] text-muted md:text-[21px]">
              Malý tím, žiadny prostredník a réžia veľkých konzultačných firiem —
              komunikujete priamo so mnou.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-[16px]">
              <a
                href={bookingHref}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-accent pb-0.5 text-accent transition-opacity hover:opacity-70"
              >
                Rezervovať 30 minút zadarmo →
              </a>
              <a
                href={skMailto}
                className="border-b border-fg pb-0.5 transition-colors hover:border-accent hover:text-accent"
              >
                Napíšte mi →
              </a>
            </div>
          </div>
        </Container>
      </section>

      <TrustBar />

      {/* Čo viem urobiť */}
      <Section id="sluzby" divider>
        <Container width="full">
          <SectionHeading>Čo viem pre vás urobiť</SectionHeading>
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {sluzby.map((s) => (
              <div key={s.title}>
                <h3 className="font-serif text-[19px] font-semibold tracking-[-0.01em]">
                  {s.title}
                </h3>
                <p className="mt-3 text-[16px] leading-[1.6] text-muted">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Ako pracujem (mirrors EN "How I Work") */}
      <Section id="ako" divider>
        <Container width="full">
          <SectionHeading>Ako pracujem</SectionHeading>
          <div className="grid gap-12 md:grid-cols-3 md:gap-16">
            {spolupraca.map((col) => (
              <div key={col.title}>
                <h3 className="mb-3 text-[18px] font-semibold">{col.title}</h3>
                <div className="space-y-3 text-[16px] leading-[1.6] text-muted">
                  {col.body.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-[680px] text-[15px] italic text-muted md:mt-12">
            Žiadny obchodný tlak. Aj keď nezačneme spoluprácu, odnesiete si
            konkrétne nápady, ktoré viete využiť.
          </p>
        </Container>
      </Section>

      {/* Prečo ja */}
      <Section id="preco" divider>
        <Container width="reading">
          <SectionHeading>Prečo ja</SectionHeading>
          <p className="text-[17px] leading-[1.7]">
            Senior AI inžinier s reálnymi produkčnými systémami — nie
            prezentácie, ale fungujúci softvér. Vzdelanie: Imperial College
            London (BSc Matematika) a UCL (MSc Machine Learning). V Upheal som
            viedol AI tím a znížil prevádzkové náklady o ~50 %; popri tom som
            založil{" "}
            <a
              href={site.links.lexomat}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline-offset-4 hover:underline"
            >
              Lexomat
            </a>
            , AI asistenta pre slovenské a české právo. Pracujem v malom tíme
            troch inžinierov, ktorý riadim interne — vy sa rozprávate priamo so
            mnou.
          </p>
        </Container>
      </Section>

      {/* Píšem (mirrors EN "Writing"; articles are in English) */}
      {posts.length > 0 && (
        <Section id="pisem" divider>
          <Container width="wide">
            <SectionHeading>Píšem</SectionHeading>
            <p className="mb-8 max-w-[620px] text-[16px] leading-[1.6] text-muted">
              Poznámky o budovaní produkčných AI systémov a o tom, ako firmy
              reálne zavádzajú AI. Články sú v angličtine.
            </p>
            <ul className="flex flex-col gap-6">
              {posts.map((p) => (
                <li key={p.slug}>
                  <Link href={`/writing/${p.slug}`} className="group block">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                      <time className="font-mono text-[13px] text-muted">
                        {p.date}
                      </time>
                      <div>
                        <h3 className="text-[17px] font-semibold transition-colors group-hover:text-accent">
                          {p.title}
                        </h3>
                        <p className="mt-1 text-[16px] text-muted">
                          {p.summary}
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/writing"
              className="mt-8 inline-block text-[15px] text-accent hover:opacity-70"
            >
              Všetky články →
            </Link>
          </Container>
        </Section>
      )}

      {/* Kontakt */}
      <Section id="kontakt" divider>
        <Container width="reading" className="text-center">
          <h2 className="font-serif text-[28px] font-semibold tracking-[-0.01em] md:text-[36px]">
            Ozvite sa
          </h2>
          <p className="mx-auto mt-6 max-w-[560px] text-[17px] leading-[1.6]">
            Povedzte mi v pár vetách, čo vás vo firme najviac zdržiava — a ja
            navrhnem, čo sa dá riešiť AI.
          </p>
          <a
            href={bookingHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-block font-serif text-[22px] text-accent underline-offset-4 hover:underline md:text-[26px]"
          >
            Rezervovať 30 minút zadarmo →
          </a>
          <p className="mx-auto mt-5 text-[16px]">
            <span className="text-muted">alebo napíšte na </span>
            <a
              href={skMailto}
              className="text-accent underline-offset-4 hover:underline"
            >
              {site.email}
            </a>
          </p>
          <p className="mx-auto mt-6 max-w-[520px] text-[15px] italic text-muted">
            Každý e-mail čítam osobne a odpoviem do 48 hodín.{" "}
            <a
              href="/"
              className="not-italic text-accent underline-offset-4 hover:underline"
            >
              English version →
            </a>
          </p>
        </Container>
      </Section>
    </div>
  );
}
