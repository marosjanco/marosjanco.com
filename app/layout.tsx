import type { Metadata, Viewport } from "next";
import { Newsreader, Inter, JetBrains_Mono } from "next/font/google";
import { site } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

// next/font self-hosts these at build time — no runtime Google request (spec §6.6).
const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-newsreader",
  weight: ["400", "500", "600"],
});
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: "%s — Maroš Jančo",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  keywords: [
    "AI engineer",
    "LLM consultant",
    "production LLM systems",
    "RAG",
    "LLM evaluation",
    "agentic systems",
    "MLOps",
    "AI consulting Europe",
    "Maroš Jančo",
  ],
  formatDetection: { email: false, telephone: false, address: false },
  // No global canonical — each route declares its own (avoids every page
  // canonicalising to "/"). RSS discovery is global and stays here.
  alternates: {
    types: { "application/rss+xml": "/feed.xml" },
  },
  openGraph: {
    type: "website",
    url: site.url,
    title: site.title,
    description: site.description,
    siteName: site.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/icons/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: "/icons/apple-touch-icon-180x180.png",
    other: [{ rel: "mask-icon", url: "/icons/safari-pinned-tab.svg" }],
  },
  manifest: "/manifest.webmanifest",
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1f3a68",
  colorScheme: "light dark",
};

const knowsAbout = [
  "Large language models",
  "LLM evaluation",
  "Retrieval-augmented generation",
  "Agentic AI systems",
  "Prompt engineering",
  "MLOps",
  "Production machine learning",
  "Natural language processing",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      url: site.url,
      jobTitle: site.role,
      description: site.description,
      email: `mailto:${site.email}`,
      image: `${site.url}/portrait.jpg`,
      address: { "@type": "PostalAddress", addressCountry: "SK" },
      knowsAbout,
      sameAs: [site.links.linkedin, site.links.github],
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "University College London",
        },
        {
          "@type": "EducationalOrganization",
          name: "Imperial College London",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.title,
      description: site.description,
      inLanguage: "en",
      publisher: { "@id": `${site.url}/#person` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#service`,
      name: `${site.name} — ${site.role}`,
      url: site.url,
      description: site.description,
      provider: { "@id": `${site.url}/#person` },
      areaServed: ["Europe", "United Kingdom"],
      serviceType: "Production LLM systems consulting",
      knowsAbout,
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${newsreader.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-bg focus:px-4 focus:py-2 focus:text-accent"
          >
            Skip to content
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
