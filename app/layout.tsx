// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { WebsiteJsonLd, PersonJsonLd, OrganizationJsonLd } from "./json-ld";
import DevPanel from "./components/DevPanel";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://katherinetaylorescort.com"),
  title: {
    default: "The Katherine Taylor Experience",
    template: "%s · Katherine Taylor",
  },
  description:
    "Every encounter reflects your finest qualities. For over a decade, discipline became intuition—mastery delivered with discretion.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "https://katherinetaylorescort.com",
    siteName: "Katherine Taylor",
    title: "The Katherine Taylor Experience",
    description:
      "Tailored companionship for accomplished clients. Over a decade of refinement turned attentiveness into intuition.",
    locale: "en_US",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Katherine Taylor Experience",
    description:
      "Tailored, discreet, tax-compliant companionship—mastery earned over a decade.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <WebsiteJsonLd />
        <PersonJsonLd />
        <OrganizationJsonLd />
        <meta name="theme-color" content="#111111" />
      </head>
      <body className="antialiased bg-white text-neutral-900">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
          <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
            <a href="/" className="font-medium tracking-tight hover:opacity-80 transition">
              Katherine Taylor
            </a>
            <nav className="flex items-center gap-4">
              <a href="/blog" className="text-sm hover:opacity-80 transition">
                Blog
              </a>
              <a
                href="/inquire"
                data-cta="inquire"
                className="inline-flex items-center rounded-full border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-50 transition"
              >
                Inquire
              </a>
            </nav>
          </div>
        </header>

        {/* Page content */}
        {children}

        <footer className="border-t mt-16">
          <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
            <div>© {new Date().getFullYear()} Katherine Taylor</div>
            <nav className="flex items-center gap-4">
              <a href="/inquire" data-cta="inquire" className="hover:opacity-80">Inquire</a>
              <a href="/blog" className="hover:opacity-80">Blog</a>
              <a href="/rates" className="hover:opacity-80">Rates</a>
              <a href="/faq" className="hover:opacity-80">FAQ</a>
              <a href="/about" className="hover:opacity-80">About</a>
            </nav>
          </div>
        </footer>

        <Analytics />
        <DevPanel />
      </body>
    </html>
  );
}
