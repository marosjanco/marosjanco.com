# marosjanco.com — Full Website Specification

**Author:** Maroš Jančo
**Version:** 1.1 (decisions resolved — build-ready)
**Intended use:** Hand to a Claude Code session (or any frontend engineer) to build the site end-to-end.

---

## 0. How to read this document

This is a build spec, not a brief. Decisions are made, not offered as options. Where copy is provided, treat it as production-ready (edit lightly for voice if needed, but don't restructure). Where technical choices are specified, follow them unless there is a concrete reason not to. The opinionated nature is intentional — Maroš has iterated on positioning and direction; this document encodes the conclusions.

**All open questions from v1.0 are now resolved (see the changelog directly below and §12).** There is exactly one fill-in remaining: the personal GitHub handle, marked `<MAROS-GITHUB-HANDLE>` everywhere it appears. Do not re-ask the resolved questions; build to the decisions as written.

### 0.1 Changelog — what was resolved in v1.1

| Topic | v1.0 status | v1.1 decision |
|---|---|---|
| Canonical domain | open | **marosjanco.com** (matches existing repo, favicons, manifest) |
| Contact email | open | **maros@marosjanco.com** (personal, on-domain; forwarding required) |
| GitHub in footer/JSON-LD | open | **Personal handle** (`<MAROS-GITHUB-HANDLE>`). Souli/dzino-app stays separate in §3.4 only |
| Portrait photo | DECISION POINT | **Include.** Maroš will provide a real, natural-light headshot. Layout must still degrade gracefully if it slips |
| §3.4 Lexomat duplication | DECISION POINT | **Souli alone**, single full-width card. Lexomat lives only in §3.3 |
| Public pricing | DECISION POINT | **No published number in v1.** "Pricing on request" (on-voice wording in §3.5). Revisit trigger documented |
| Analytics | DECISION POINT | **No analytics in v1** (Option A). Revisit at month 3 |
| Existing repo state | not addressed | New §13: legacy static HTML + WordPress tree deleted outright (git is the archive); favicons kept or refreshed from the existing design |

---

## 1. Strategic Foundation

### 1.1 What this site is

A personal site for **Maroš Jančo**, senior AI engineer and consultant. The site exists to support a solo consulting practice focused on production LLM systems (prompts, evaluations, RAG, agentic systems, MLOps), with a long-tail brand-building function via a writing section.

The site is NOT:
- An agency site
- A portfolio site (in the designer sense)
- A SaaS landing page
- An SEO-driven content farm
- A resume in HTML
- A speculative personal-brand site with vague positioning

It IS:
- A high-trust credibility surface for cold and warm inbound leads
- A landing destination for LinkedIn traffic, cold-outreach replies, and referrals
- A canonical place that aggregates Maroš's professional identity (work, products, writing, contact)
- A platform for long-form technical writing that compounds over years

### 1.2 Primary visitors

Two audiences matter; design for both without compromising for either.

**Audience A: Decision-maker buyers (CTOs, VPs of Engineering, founders, AI leads).** They arrived from a cold email, a LinkedIn message, a referral, or a Google search for "[name] consultant." They have 30–90 seconds to decide if Maroš is real, credible, and worth a conversation. They are pattern-matching against other senior practitioners they've worked with. They care about: recognizable employer logos, concrete past work, evidence of shipping not just talking.

**Audience B: Technical peers and recruiters.** They are evaluating Maroš for a full-time role, advisory role, or technical respect. They want to see: technical writing, code on GitHub, products shipped, depth of experience. They convert slower but they are the source of long-term referrals and reputation.

Both audiences are served by the same content if it is concrete, technical, and unembellished. Marketing-speak hurts both audiences equally.

### 1.3 Primary conversion goal

A single email to `maros@marosjanco.com`, containing a description of what the sender is working on. Not a Calendly link, not a contact form with eight fields, not a "Book a free strategy call" button. The friction is intentional — it filters tire-kickers and signals selectivity.

Secondary conversion: read a writing piece, follow on LinkedIn, view CV, view GitHub.

### 1.4 Success metrics (3-month review)

- 5–10 qualified inbound emails per month
- 1–2 of those convert to paid engagements
- 200–500 visits per month (low volume is fine — this is not a content site)
- First two long-form writing posts published and reposted on LinkedIn

---

## 2. Information Architecture

### 2.1 Site map

```
/                       Homepage (single-page, long-scroll)
/writing                Blog index
/writing/[slug]         Individual post
/cv                     Inline CV view (HTML, mirrors the PDF)
/cv.pdf                 Downloadable PDF
/now                    Optional: a "currently working on" page (see §10)
404                     Custom 404
```

No `/about`, no `/services`, no `/contact` as separate pages. The homepage is long and contains all of this. Separate pages dilute the conversion path and require navigation decisions visitors don't want to make.

### 2.2 Header navigation

Top of every page. Sticky on scroll, semi-transparent backdrop blur.

```
[Maroš Jančo]                              Writing   CV   Email me
```

- Left: name as logotype, links to `/`
- Right: three links. "Writing" → `/writing`. "CV" → `/cv`. "Email me" → `mailto:` (see §5.5)
- No hamburger menu on mobile — three links fit fine
- No dark/light mode toggle in v1 (system preference only, see §4.2)

### 2.3 Footer

Minimal. Single row on desktop, stacked on mobile.

```
© 2026 Maroš Jančo                LinkedIn · GitHub · Email · RSS
```

- LinkedIn → `https://www.linkedin.com/in/maro%C5%A1-jan%C4%8Do-565a3535/` (Maroš's existing profile). **Pre-launch:** if Maroš sets a clean vanity URL (`linkedin.com/in/marosjanco`), use that instead and update §7.5 to match.
- GitHub → `https://github.com/<MAROS-GITHUB-HANDLE>` (personal profile, not an org — see §3.4 note)
- Email → `mailto:` per §5.5
- RSS → `/feed.xml`

No "navigation" repeated, no "legal" links (no GDPR forms to collect, no cookies set in v1 — see §6.6 and §8).

---

## 3. Homepage Content (section-by-section)

The homepage is one long scroll. Section order, names, and copy are below. Each section is a distinct vertical band, generously spaced. Section transitions are visual (whitespace + sometimes a subtle horizontal rule), not boxed.

### 3.1 Hero

**Vertical position:** First 100vh on desktop, ~80vh on mobile. Centered vertically.

**Layout:** Single column, left-aligned. No image, no animation, no gradient.

**Copy:**

> **Senior AI engineer for production LLM systems.**
>
> I help founders and engineering teams ship LLM, RAG and agentic systems that actually work in production — evaluations, prompt engineering, MLOps, full-stack.
>
> Currently taking a small number of consulting engagements. Based in Slovakia, working with clients across Europe and the UK.
>
> [See recent work ↓]    [Email me →]

**Notes:**
- Headline in large editorial serif. ~64–72px desktop, ~40–48px mobile.
- Body in sans, ~20–22px desktop, ~17px mobile, max-width ~600px.
- Two CTAs as text-button hybrids: "See recent work" scrolls to §3.3; "Email me" triggers mailto.
- No "Book a call" button, no Calendly embed.

### 3.2 Trust bar

**Vertical position:** Immediately after hero, before scroll-prompt fade.

**Layout:** Horizontal row of monochrome logos with a subtle caption above.

**Copy:**

> Worked with and at:

**Logos in this exact order:** Upheal, Cervest, BNP Paribas, Imperial College London, UCL.

**Notes:**
- All logos rendered in a single tone (the body text color at 60% opacity). No original colors. No marketing taglines like "Featured in" or "Trusted by."
- Logos should be SVGs, optimized, ~32–40px tall on desktop.
- On mobile, wrap to 2 rows; do not horizontally scroll.
- This single section is the most important credibility element on the page. Treat with care.

### 3.3 Selected Work

**Heading:** "Selected Work"

**Layout:** A list of 4 case studies, each ~120–180 words. Vertically stacked, separated by horizontal rules. Each case study has the structure: company logo (small) + role + dates · headline sentence · 2–3 sentences of detail · technologies used (small caps or mono).

**Case Study 1: Upheal**

> **Upheal** · Senior AI Engineer (Contract) · Nov 2023 – May 2026
>
> Led prompt engineering, evaluation and agentic systems for AI-generated clinical progress notes — the core product of a Best-Startup-Award-winning AI documentation platform for therapists.
>
> Owned quality and shipped 100+ production releases. Built an LLM-as-judge eval framework on Langfuse with datasets, eval runs and trace-level debugging. Productionised RAG, prompt orchestration and agentic patterns across Gemini, Claude, GPT-* and Llama; benchmarked Vertex AI, Bedrock, Azure OpenAI and Anthropic for quality, latency and cost. Automated a Claude-Agent-SDK customer-support agent. Reported AI roadmap and cost trade-offs directly to founders.
>
> Stack: Python · TypeScript · Langfuse · Vertex AI · Bedrock · Anthropic API · Grafana · BetterStack

**Case Study 2: Cervest**

> **Cervest** · Senior Data Scientist · Jul 2021 – Jul 2023
>
> Built from scratch the first physical-climate-impact platform assessing combined-hazard damages on assets and portfolios worldwide. The company won the Global Impact 50 Award 2023.
>
> Led a global wildfire-damage prediction product end-to-end. Built a company → subsidiary → asset framework for SP500 and FTSE100 firms; shipped a financial-impact model predicting stock-price shocks from adverse climate events. Optimised distributed pipelines over TBs of geospatial, satellite and financial data.
>
> Stack: PySpark · Databricks · Geopandas · Xarray · Kubernetes · Python

**Case Study 3: BNP Paribas**

> **BNP Paribas** · Machine Learning Researcher · Jun 2017 – Jun 2021
>
> Built and deployed NLP models for a global investment bank's AI lab.
>
> Built a history-augmented collaborative-filtering recommender for client document recommendations; weekly chatbot recommendations save thousands of clients hours of search across thousands of documents. Designed and shipped an NLP entity-extraction system combining Random Forests, GBT, Kneser-Ney n-gram LMs, Naive Bayes and Word2Vec into one classifier; later scaled with LSTM- and BERT-based architectures. A dozen+ resulting NER models now automate chat-to-price FX execution worldwide on a daily basis.
>
> Stack: Python · PyTorch · Keras · Spark · Word2Vec · BERT

**Case Study 4: Lexomat (founder)**

> **Lexomat** · Founder · 2024 – Present · [lexomat.sk →](https://lexomat.sk)
>
> Solo-founded AI legal-research chat for Slovak and Czech law, indexing millions of legal documents. Used by legal professionals through FinAI s.r.o.
>
> Drove product, design, agentic AI flows, GDPR compliance, pricing and infrastructure end-to-end (one contractor on delivery). Built the citation-resolution layer for ambiguous pre-1993 Czechoslovak legal references and a backend-resolved URL architecture for slov-lex.sk to eliminate LLM URL hallucination.
>
> Stack: Next.js · TypeScript · Python · FastAPI · Supabase · PGroonga · Vertex AI

**Notes:**
- Each case study should be visually distinct (separated by `border-top` or generous whitespace) but stylistically uniform.
- No screenshots in case studies on the homepage (keep it text-dense and scannable). Screenshots can live on dedicated case study pages in a v2.
- Treat the stack line as metadata; render slightly muted, in mono or smaller size.
- Logos appear inline with company name as small icons, monochrome.

### 3.4 Open Source / Side Projects

**Heading:** "Open Source"

**Layout (v1):** A single full-width card (NOT a two-up grid — there is only one project; add the grid back when a second exists).

**Card: Souli**

> **Souli** · open-source · [github.com/dzino-app/souli.app →](https://github.com/dzino-app/souli.app)
>
> End-to-end encrypted AI companion that gamifies personal growth across social, health, career and personal aspects. Privacy-first architecture — chat content is encrypted end-to-end, including in transit to and from the model.
>
> Open-sourced May 2026. Full-stack TypeScript + privacy engineering.

**Resolved:** Lexomat is a founder credential and lives only in §3.3 Selected Work — it is **not** repeated here. This section features Souli alone in v1.

**GitHub-link rule (important — two different links, two different intents):**
- **Footer + JSON-LD `sameAs`** → Maroš's *personal* profile (`https://github.com/<MAROS-GITHUB-HANDLE>`). The visitor there is evaluating *the person*; landing on an org root creates "where's Maroš?" friction.
- **This Souli card** → the *repo* directly (`https://github.com/dzino-app/souli.app`), not the dzino-app org root. The visitor here is evaluating *the project*.
- Pre-launch task for Maroš (not a build task): profile README, 4–6 pinned repos, one-line bio matching the site headline, site URL in profile. A sparse-but-curated senior profile reads fine; an empty one reads mildly negative.

### 3.5 How I Work

**Heading:** "How I Work"

**Layout:** Three columns on desktop (gap ~64px), stacked on mobile. Each column has a short subhead and 3–4 lines of prose. No icons, no illustrations.

**Column 1: Engagements**

> **Engagements**
>
> Typical engagements run 1–3 months, focused on a specific delivery — an evaluation framework, a RAG productionisation, an architecture review, an agentic system from prototype to production. I take on a small number of clients at a time.

**Column 2: Pricing**

> **Pricing**
>
> Engagements priced per project or per day, scoped in the first call. I'll send a clear range within 24 hours of our initial email exchange.

**Column 3: Working style**

> **Working style**
>
> Remote-first from Slovakia with regular travel — comfortable with hybrid roles across major EU hubs (London, Berlin, Munich, Amsterdam, Zurich, Prague, Vienna) on a roughly monthly cadence. Async-friendly, English, EU/UK timezones.

**Notes (read before changing this section):**
- **No public price in v1 is a deliberate decision, not an omission.** The reasoning: published pricing only works when the seller can defend the exact number on a call without flinching. Maroš is newly independent and hasn't yet quoted real clients; published-pricing confidence comes from quoting reps, not from a value in a component. "Pricing on request" delays *transparency*, not *standards*.
- **The 24-hour commitment is binding.** If it becomes false, change the copy — don't let it rot.
- **Standards still hold privately.** "Priced in the first call" does not mean "match whatever the buyer can pay." The private floor is ~€1,500/day remote / ~€2,000/day onsite. Do not take sub-€1,200/day work — a low first engagement anchors the whole referral trajectory downward.
- **Revisit trigger (write this into the project's running notes, not the site):** switch to *published* pricing — `Day rate from €1,500 (remote) to €2,000 (onsite, EU/UK hubs). Fixed-scope projects available for clearly bounded work.` — only **after Maroš has quoted and won three engagements at €1,500+/day.** Three wins prove the market clears the number and supply the confidence floor published pricing requires. This is a v2 copy change to this exact column; the layout must not need to change to accommodate it.
- This three-column block is what separates a specialist site from a freelancer site. Keep it.

### 3.6 About

**Heading:** "About"

**Layout:** Two-column on desktop: left column is a portrait photo (B&W or warm-toned, professional but not corporate — natural light, not a studio suit shot), right column is 4 short paragraphs. Stacked on mobile with photo above.

**Copy:**

> I'm a senior AI engineer with 9+ years shipping production ML, NLP and LLM systems. I trained at Imperial College London (BSc Mathematics with Statistics for Finance, First Class) and UCL (MSc Machine Learning), then spent four years at BNP Paribas's AI lab, two years at Cervest in climate-risk modelling, and the last two and a half years leading AI engineering at Upheal.
>
> Alongside employment I've founded two AI products: Lexomat, a legal-research chat used by lawyers across Slovakia and Czechia, and Souli, an open-source end-to-end-encrypted AI companion. The combination of senior IC engineering, founder experience, and direct customer-facing product work is what I bring to engagements.
>
> I'm a generalist by preference — I want to own a problem from prompt to production, not specialise into one layer of the stack. The kind of work I do best is the messy middle: making a demo-grade AI system into something that ships, scales, costs less than it earns, and doesn't break in surprising ways.
>
> Outside work I'm building a family home in Nolčovo (northern Slovakia), raising young children, and reading too much about energy markets and language models. I speak English, Slovak, Czech and beginner German.

**Resolved:** Photo is **included**. Maroš will supply a real, warm, natural-light headshot at `/public/portrait.jpg` (and an `@2x`/AVIF/WebP variant — see §6.4). Build the layout so that if the photo asset is missing at build time, the right column gracefully takes full width rather than rendering a broken image — so a photo slip never blocks launch.

### 3.7 Writing (preview)

**Heading:** "Writing"

**Layout:** A list of the 3 most recent writing entries, each as a one-line preview: date, title, 1-sentence summary. Followed by an "All writing →" link.

**Copy (placeholder until posts exist — approved):**

> *Coming soon: notes on building production LLM systems, AI evaluations, and lessons from shipping Lexomat and Souli.*

Once posts exist:

```
2026-06-12   What I learned building LLM-as-judge evals at Upheal
             Why the obvious approach to LLM evaluation breaks at scale, and what worked instead.

2026-07-04   Lexomat: shipping production legal AI in a regulated EU market
             GDPR, accuracy bar, prompt+RAG architecture, and why solo-building worked.

                                                                  All writing →
```

### 3.8 Contact / final CTA

**Heading:** "Get in touch"

**Layout:** Centered, single column, ~600px max-width. Generous vertical padding.

**Copy:**

> If you're working on a production LLM system and want a senior pair of eyes — or you'd like to discuss a longer engagement — email me a paragraph about what you're working on.
>
> **maros@marosjanco.com**
>
> *I read every email personally and reply within 48 hours. If we're a fit, the next step is a 30-minute call.*

**Notes:**
- Email rendered prominently — selectable text, large enough to copy easily, with a `mailto:` link.
- No form. No "Send" button. The friction is the filter.
- The 48-hour reply commitment is binding; reset honestly if it becomes false. Keep it consistent with the "24 hours" range commitment in §3.5 (48h to reply at all; the scoped range follows within 24h of the actual email exchange — these are compatible, just don't let them drift into contradiction).

### 3.9 Section order summary

```
1. Hero
2. Trust bar (logos)
3. Selected Work (4 case studies)
4. Open Source (Souli, single card)
5. How I Work (3 columns)
6. About (photo + bio)
7. Writing (recent 3 / placeholder)
8. Contact
9. Footer
```

---

## 4. Visual Design Direction

### 4.1 Aesthetic principles

The site should feel like **a personal magazine for one person**, not a marketing site, not a portfolio, not a SaaS landing page. Visual references in descending order of relevance:

1. **hamel.dev** — Editorial, content-dense, single-author authority.
2. **simonwillison.net** — Restrained, fast, technical.
3. **stripe.com/press** — Serif typography and editorial layout for technical content.
4. **vercel.com** — Modern, minimal, restrained motion, generous whitespace.
5. **eugeneyan.com** — Personal authority site with strong typography.

Anti-references (do NOT look like these):
- Generic AI consultancy sites with gradient hero, "Transform your business with AI" headlines, stock photos of people pointing at laptops.
- Agency sites with abstract 3D shapes, hero illustrations of robot heads, neon colors.
- Startup landing pages with social-proof carousels and feature grids.

### 4.2 Color palette

**Light mode (default):**
- Background: `#FAFAF7` (warm off-white, not pure white)
- Foreground (body text): `#1A1A1A` (near-black, slight warmth)
- Muted: `#6B6B6B` (mid-grey, secondary text)
- Subtle: `#E8E6E0` (borders, dividers, logo treatment)
- Accent: `#1F3A68` (deep navy — cross-brand consistent with the CV)

**Dark mode (system-preference triggered):**
- Background: `#0F0F0F`
- Foreground: `#EDEDE8`
- Muted: `#8C8C88`
- Subtle: `#2A2A2A`
- Accent: `#7BA3D9` (lighter navy for legibility on dark)

No toggle button in v1. Respect `prefers-color-scheme`. Add toggle in v2 if requested. No additional colors. No gradients. No semantic color (success/warning/error) — nothing on the site needs them.

### 4.3 Typography

**Headings (serif, editorial):** **Newsreader** (Google Fonts, free, variable). Alternatives: Source Serif 4, PT Serif.
**Body (sans):** **Inter** (Google Fonts, free, variable). Alternative: Geist.
**Mono (technical / stack labels / code):** **JetBrains Mono** (free, variable). Alternative: Geist Mono.

All fonts **self-hosted** (see §6.6), not loaded from Google's CDN.

**Type scale (desktop):**
- H1 (hero headline): 64px / 1.1 / -0.02em / Newsreader semibold
- H2 (section headings): 36px / 1.15 / -0.01em / Newsreader semibold
- H3 (case study names): 22px / 1.3 / Inter semibold
- Body large (hero subtext, opening paragraphs): 21px / 1.5 / Inter regular
- Body (default): 17px / 1.6 / Inter regular
- Small (captions, metadata): 14px / 1.5 / Inter regular
- Mono (stack labels): 13px / 1.4 / JetBrains Mono regular

**Mobile scale:** H1 → 40px, H2 → 28px, H3 → 19px, body → 16px. Mono and small unchanged.

### 4.4 Spacing & layout

**Container widths:**
- Reading column: max 640px (body text)
- Wide column: max 880px (hero, work section, contact)
- Full width: 1080px (trust bar, three-column "How I Work")

**Vertical rhythm:**
- Section padding: 120px top/bottom desktop, 72px mobile
- Paragraph spacing: 1.2em
- Between sub-sections within a section: 48px desktop, 32px mobile

**Horizontal padding:** 32px gutter desktop, 20px mobile.

Single column for body text. No multi-column body anywhere except the "How I Work" three-column block.

### 4.5 Imagery & assets

**Do include:**
- One professional portrait photo of Maroš (§3.6). B&W or warm-toned, natural light.
- Monochrome logos for Upheal, Cervest, BNP Paribas, Imperial, UCL (§3.2). Source from official brand resources; recreate from wordmarks if unavailable.
- Optional small inline logos for case studies (§3.3) — only if they don't add clutter.
- An Open Graph image (1200×630px) — see §7.

**Do NOT include:** stock photos, AI-generated imagery, abstract gradients/shapes, decorative icons-with-circles, animated SVGs/Lottie, confetti/particles, marquee scrollers, fake press logos, hero illustrations or 3D renders.

### 4.6 Components

Tailwind + a thin component layer. Do not use a heavy UI library (Material, Chakra).

- `<Container>` — width-constrained wrapper, three size variants (reading, wide, full)
- `<Section>` — vertical-padding wrapper
- `<Hero>` — single use
- `<TrustBar>` — logo row
- `<CaseStudy>` — used 4× in §3.3
- `<ProjectCard>` — used 1× in §3.4 (scales to a grid later)
- `<HowIWork>` / `<ColumnLayout columns={3}>` — used 1× in §3.5
- `<About>` — photo + bio split, must degrade if photo missing
- `<WritingList variant="preview" | "full">` — used 2×
- `<Contact>` — single use
- `<Header>` / `<Footer>` — global
- `<Prose>` — typography wrapper for MDX blog content

---

## 5. Interaction Design

### 5.1 Motion

Motion budget is **deliberately minimal**. Every animation must serve a function.

Permitted: one-time fade-in on first scroll for major sections (400ms, ease-out, 12px translate, via IntersectionObserver — not a scroll library); native smooth scroll on anchor links; link hover transitions (color, 150ms); header backdrop-blur intensifying past 80px scroll.

Forbidden: parallax, hero text animations, scroll-jacking, splash/loading screens, mouse-following effects, animated gradients, any decorative motion.

Respect `prefers-reduced-motion` — disable the fade-in entirely when set.

### 5.2 Hover states

- Links: underline appears/thickens, color shifts to accent, 150ms.
- The two hero CTAs: background fill or border shift, 200ms.
- Case study rows: subtle background tint, no scale transform, 150ms.

### 5.3 Focus states

- Visible keyboard focus on every interactive element: 2px solid accent-color outline, 4px offset.
- Do NOT remove focus rings. Hard accessibility requirement.

### 5.4 CTAs

Exactly **three** primary CTAs, all opening the same `mailto:`:
1. "Email me" in hero
2. "Email me" in header
3. The email address in §3.8

No contact form, no Calendly, no scheduling widget, no chatbot.

### 5.5 Mailto link

Pre-fill subject and a starter body to reduce buyer friction:

```
mailto:maros@marosjanco.com?subject=Inquiry%20from%20marosjanco.com&body=Hi%20Maro%C5%A1%2C%0A%0AI%27m%20working%20on%20%5Bbrief%20description%5D%20and%20interested%20in%20%5Bengagement%20type%5D.%20Some%20context%3A%0A%0A
```

Decoded:
> Subject: Inquiry from marosjanco.com
> Body: Hi Maroš,
>
> I'm working on [brief description] and interested in [engagement type]. Some context:

---

## 6. Technical Stack & Implementation

### 6.1 Stack

- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4
- **Content (blog):** MDX via `@next/mdx`, front-matter for metadata
- **Hosting:** Vercel (preview deployments per branch)
- **Domain:** marosjanco.com (owned — currently serves a legacy site; see §13)
- **Email:** `maros@marosjanco.com` via registrar/Fastmail-style forwarding to Maroš's working inbox. No self-hosted email. Forwarding must be verified before launch (§9.1).

### 6.2 Repository structure (target — see §13 for migrating off the legacy tree)

```
/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                    # Homepage
│   ├── writing/
│   │   ├── page.tsx                # Blog index
│   │   └── [slug]/page.tsx         # Blog post template
│   ├── cv/page.tsx                 # HTML CV
│   ├── not-found.tsx               # 404
│   └── api/                        # (empty in v1)
├── components/                     # per §4.6
├── content/
│   └── writing/                    # MDX posts (initially empty)
├── public/
│   ├── logos/                      # Monochrome SVG company logos
│   ├── projects/
│   ├── portrait.jpg                # Maroš's portrait (+ AVIF/WebP variants)
│   ├── og.png                      # Open Graph image
│   ├── cv.pdf
│   └── favicon.svg                 # plus migrated legacy favicon set, §13
├── lib/
│   └── writing.ts                  # MDX content loader
├── styles/
│   └── globals.css                 # Tailwind base + CSS variables
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

### 6.3 Blog system

MDX, file-system routing. Each post is a `.mdx` file in `/content/writing/` with front-matter:

```mdx
---
title: "What I learned building LLM-as-judge evals at Upheal"
date: "2026-06-12"
summary: "Why the obvious approach to LLM evaluation breaks at scale, and what worked instead."
tags: ["llm", "evaluation", "production"]
---

Post body as MDX. Code blocks, images, callouts allowed.
```

Render with `<Prose>` using `@tailwindcss/typography` tuned to site type. Code blocks via `shiki` (`github-light` / `github-dark`, switched via CSS — no runtime theme toggle in v1). RSS at `/feed.xml`, build-time generated, with a `<head>` discovery link. No comments, reactions, or view counters.

### 6.4 Performance targets

- Lighthouse 100/100/100/100 on the homepage
- FCP < 1.0s on 3G, LCP < 1.5s
- Total page weight < 200KB excluding the portrait (portrait ≤ ~80KB, served as AVIF/WebP with `next/image`, explicit dimensions, no layout shift)
- No render-blocking external scripts

A slow personal site for an "AI engineer" undermines positioning more than any copy choice. The site must feel instantly fast.

### 6.5 Accessibility

WCAG 2.1 AA. Semantic HTML (`<main>`, `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`). Meaningful `alt` (empty for decorative). Contrast ≥ 4.5:1 body / ≥ 3:1 large text. Full keyboard nav, visible focus, `prefers-reduced-motion` respected.

### 6.6 Privacy

- No cookies in v1 → no cookie banner.
- Self-hosted fonts (no Google Fonts CDN).
- No analytics in v1 (§8). No third-party scripts.
- A `/privacy` page is added only if analytics are added later.

---

## 7. SEO & Metadata

### 7.1 Page-level metadata

Every page: unique `<title>` (`[Page] — Maroš Jančo`), unique meta description (130–160 chars, human-written), canonical URL, Open Graph tags, Twitter Card (`summary_large_image`).

### 7.2 Homepage metadata

```html
<title>Maroš Jančo — Senior AI Engineer</title>
<meta name="description" content="Senior AI engineer for production LLM systems. Consulting on evaluations, RAG, agentic systems and MLOps. Ex-Upheal, Cervest, BNP Paribas. Founder of Lexomat." />
```

### 7.3 Open Graph image

Static `/og.png`, 1200×630px: warm off-white background; left-aligned "Maroš Jančo" in Newsreader, "Senior AI Engineer" in Inter below; right side a subtle accent shape or `marosjanco.com` in mono. No dynamic OG generation in v1.

### 7.4 Sitemap & robots

`/sitemap.xml` build-time generated (all routes). `/robots.txt` allows all crawlers, points to sitemap.

### 7.5 Structured data (JSON-LD)

Homepage `<head>`:

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Maroš Jančo",
  "url": "https://marosjanco.com",
  "jobTitle": "Senior AI Engineer",
  "sameAs": [
    "https://www.linkedin.com/in/maro%C5%A1-jan%C4%8Do-565a3535/",
    "https://github.com/<MAROS-GITHUB-HANDLE>"
  ],
  "alumniOf": [
    { "@type": "EducationalOrganization", "name": "University College London" },
    { "@type": "EducationalOrganization", "name": "Imperial College London" }
  ]
}
```

If Maroš creates a clean LinkedIn vanity URL before launch, replace the `sameAs` LinkedIn entry with `https://www.linkedin.com/in/marosjanco` and keep §2.3 in sync.

### 7.6 LLM-search visibility

A meaningful share of professional-services inbound in 2026 comes from AI chat answers. Optimise the homepage/About for clear factual statements ("Maroš Jančo is a senior AI engineer based in Slovakia. He previously led AI engineering at Upheal…"), plain text (no credentials buried in images or JS-only renders), and a root `/llms.txt` ([llmstxt.org](https://llmstxt.org/)):

```
# Maroš Jančo

> Senior AI engineer specialising in production LLM systems. Founder of Lexomat.
> Available for consulting engagements with EU/UK clients.

## Background

- 9+ years shipping ML, NLP and LLM systems
- Ex-Upheal (Senior AI Engineer, 2023-2026), Cervest (Senior Data Scientist, 2021-2023), BNP Paribas (ML Researcher, 2017-2021)
- MSc Machine Learning, UCL; BSc Mathematics, Imperial College London
- Founder of Lexomat (lexomat.sk), AI legal-research for Slovak/Czech law

## Services

- Production LLM system consulting (prompts, evals, RAG, agentic, MLOps)
- 1-3 month engagements, a small number of clients at a time

## Contact

- Email: maros@marosjanco.com
```

Note: `/llms.txt` deliberately omits a public rate, consistent with §3.5.

---

## 8. Analytics & Measurement

**Resolved:** **No analytics in v1.** Vercel's deployment-level traffic insight is enough. Adding analytics adds page weight, GDPR surface, and decision fatigue for a 200–500 visits/month site. Real signal comes from inbox replies. Revisit at the month-3 review; if added, use Plausible (cookieless) and add a minimal `/privacy` page.

Track manually (notion/spreadsheet): inbound emails per month + source, conversion to fit calls, conversion to paid engagements, engagement source (LinkedIn / cold / referral / direct). Nothing else.

---

## 9. Launch Checklist

### 9.1 Pre-launch

- [ ] Legacy tree deleted per §13 (favicons kept or refreshed); clean Next.js project on a branch
- [ ] All copy reviewed and approved by Maroš
- [ ] Portrait photo received and placed at `/public/portrait.jpg` (+ variants); About degrades gracefully if absent
- [ ] All 5 company logos sourced as monochrome SVGs
- [ ] `<MAROS-GITHUB-HANDLE>` filled in (footer + JSON-LD); personal profile has README/bio/pinned repos/site link
- [ ] LinkedIn URL confirmed (existing or new vanity)
- [ ] CV PDF placed at `/public/cv.pdf`; `/cv` HTML view mirrors it
- [ ] `maros@marosjanco.com` forwarding configured and a live test email received
- [ ] Domain DNS cutover plan ready (legacy site currently live — see §13)
- [ ] OG image rendered and tested in LinkedIn's [Post Inspector](https://www.linkedin.com/post-inspector/)
- [ ] Lighthouse 100/100/100/100 on homepage
- [ ] Mobile tested: iPhone Safari + Android Chrome
- [ ] Keyboard navigation end-to-end
- [ ] Dark mode (system preference) tested
- [ ] All external links correct (LinkedIn, GitHub personal, Souli repo, lexomat.sk)
- [ ] Mailto pre-fills correctly in Apple Mail, Gmail web, Outlook
- [ ] 404 tested; `/cv.pdf` downloads; `/llms.txt`, `/sitemap.xml`, `/robots.txt`, `/feed.xml` reachable

### 9.2 Day-of-launch

- [ ] DNS pointed to Vercel; HTTPS active; legacy site decommissioned/redirected
- [ ] Submit sitemap to Google Search Console
- [ ] Update LinkedIn contact info + Featured section with marosjanco.com
- [ ] Update GitHub profile bio with the link

### 9.3 Week-of-launch

- [ ] Publish first writing post (drafted in advance)
- [ ] LinkedIn update linking to the site
- [ ] 20–30 personal emails to warm contacts announcing the site + availability

---

## 10. Future / V2 Considerations

Out of scope for v1; design must not foreclose:

- **Published pricing** — restore the §3.5 Pricing column to a public day-rate range *after three won engagements at €1,500+/day* (§3.5 notes). Column layout must already accommodate it.
- **Individual case study pages** (`/work/upheal`, …) — long-form, with screenshots/diagrams.
- **A `/now` page** — current focus, capacity, inspired by [nownownow.com](https://nownownow.com).
- **Newsletter** — only after 5+ posts. Buttondown/Beehiiv, plain text, monthly.
- **Slovak `/sk` homepage** — only if CEE traffic becomes a major channel.
- **Dark mode toggle** — only if requested.
- **Talks / Press section** — only when real; never fake it.
- **Booking widget** — only if email inbound becomes a bottleneck.
- **Dynamic per-post OG images** — once 5+ posts exist.

Explicitly **rejected** (do not add): live chat, pop-up newsletter capture, exit-intent modals, testimonial carousel, unauthorised client logos, team page, pricing calculator, lead-magnet downloads.

---

## 11. Voice & Editorial Guidelines

Apply to all copy, including future posts.

**Voice:** first person ("I"); direct, plain, specific; confident without grandiosity; technical without gratuitous jargon.

**Avoid:** "cutting-edge / innovative / revolutionary / transformative / next-generation"; "passionate about / thrilled to / excited to announce"; "solutions" as a noun; "leverage" as a verb; "robust / scalable / synergy"; anything that could sit on a generic agency homepage; "AI-powered"; em-dashes as filler.

**Prefer:** specific over general (numbers, names, dates, tech); past tense for done work, present for ongoing, future for plans; active voice; short sentences with the occasional longer one for rhythm; correctly spelt proper nouns (Upheal, Cervest, BNP Paribas, UCL, Imperial College London).

---

## 12. Decisions locked (do not re-ask)

All v1.0 open questions are resolved. For the building session:

1. Domain: **marosjanco.com**.
2. Email: **maros@marosjanco.com** (forwarding to be configured pre-launch).
3. GitHub: **personal handle** in footer + JSON-LD (`<MAROS-GITHUB-HANDLE>` — the only fill-in). Souli repo link is separate, in §3.4 only.
4. Portrait photo: **included**; Maroš provides it; layout degrades gracefully if it slips.
5. Pricing: **no public number in v1**; on-voice "priced in the first call" copy in §3.5; private floor and revisit trigger documented there.
6. "A small number of clients at a time" (not a hard cap of two).
7. Case studies §3.3: Upheal, Cervest, BNP Paribas, Lexomat — as written, no additions/removals.
8. Writing placeholder copy: **approved** until first post ships.
9. Analytics: **none in v1**.

The single remaining fill-in is `<MAROS-GITHUB-HANDLE>`. If still unknown at build time, ship every other element and leave the GitHub footer link + JSON-LD `sameAs` entry as a clearly-commented `TODO` rather than guessing a handle or omitting the personal-profile decision.

---

## 13. Existing repository state (must read before building)

The repo at `marosjanco.com` is **not empty** and is **not a Next.js project**. It currently contains a legacy stack that the build session must deliberately handle, not blindly overwrite:

- `index.html`, `css/`, `fonts/`, `img/`, `hidden/` — a hand-written static placeholder ("this is going to be my personal website", with a Monty Hall MathJax demo). Legacy social links found here are authoritative for §2.3: LinkedIn `linkedin.com/in/maro%C5%A1-jan%C4%8Do-565a3535/`, X `twitter.com/marosjanco`, 500px `500px.com/marosjanco`.
- `public_html/` — a **full WordPress installation** (wp-admin, wp-includes, wp-config.php, etc.). This is the legacy production site for the domain. Do not run, expose, or copy it into the new build. Treat as archival only.
- Favicon set already designed and iterated (`favicon.ico`, `apple-touch-icon.png`, `site.webmanifest`, `browserconfig.xml`, `safari-pinned-tab.svg`, `img/icons/*`). The recent git history is almost entirely favicon iterations — these were intentional design work. **Keep these assets and migrate them into the Next.js `app/`/`public/` icon setup, or use them as design inspiration for a fresh icon — Maroš is fine with either.** Do not discard the design direction. Note the legacy theme color was `#040124`; reconcile with the §4.2 navy accent and pick one consistent brand color (recommend the §4.2 `#1F3A68`, updating manifest/`theme-color` to match).
- `.htaccess` at root — Apache config, irrelevant under Vercel; delete with the rest.

**Migration approach (deletion explicitly authorized by Maroš — no further confirmation needed):**
1. Create a build branch.
2. **Delete the legacy tree outright** — `index.html`, `css/`, `fonts/`, `img/` (except the favicon source `img/icons/` if reusing the existing icons), `hidden/`, `public_html/` (the whole WordPress install), `.htaccess`. Git history is the archive; do not create a `legacy/` folder.
3. Keep the favicon/manifest assets (or replace with a fresh icon inspired by them — Maroš's earlier explicit choice).
4. Scaffold the Next.js 15 app per §6.2 in the now-clean repo.
5. The DNS currently serves the legacy WordPress/static site — the §9.2 cutover replaces it; coordinate so there's no downtime window where neither resolves. This is the only step that still needs care; the deletion itself does not.

Do not assume a greenfield repo on disk — but you may treat it as one after step 2.

---

**End of specification.**
