import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { siteConfig } from "@/lib/config";
import { links } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Editorial serif for the name, section headings, and project titles.
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Sajjad Chaus — AI/ML & Backend Infrastructure Engineer",
  description:
    "I build AI agents and the distributed systems they run on. AI/ML engineer focused on agentic systems, RAG pipelines, and scalable backend infrastructure.",
  keywords: [
    "Sajjad Chaus",
    "AI Engineer",
    "Machine Learning Engineer",
    "Agentic Systems",
    "LangGraph",
    "FastAPI",
    "Backend Infrastructure",
    "RAG",
  ],
  authors: [{ name: "Sajjad Chaus" }],
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: "Sajjad Chaus — AI/ML & Backend Infrastructure Engineer",
    description:
      "I build AI agents and the distributed systems they run on.",
    siteName: siteConfig.name,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Sajjad Chaus — AI/ML & Backend Infrastructure Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sajjad Chaus — AI/ML & Backend Infrastructure Engineer",
    description:
      "I build AI agents and the distributed systems they run on.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: "AI/ML & Backend Infrastructure Engineer",
    email: `mailto:${links.email}`,
    sameAs: [links.github, links.linkedin],
  };

  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} ${newsreader.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
