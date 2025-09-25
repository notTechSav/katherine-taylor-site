// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { WebsiteJsonLd, PersonJsonLd, OrganizationJsonLd } from "./json-ld";
import DevPanel from "./components/DevPanel";
import { Analytics } from "@vercel/analytics/react";
import { Playfair_Display, Inter, Josefin_Sans, Poppins } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

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
        <meta charSet="utf-8" />
        <WebsiteJsonLd />
        <PersonJsonLd />
        <OrganizationJsonLd />
        {/* Note: theme-color not supported in Firefox, but harmless */}
        <meta name="theme-color" content="#111111" />
        {/* Fallback for browsers that don't support theme-color */}
        <meta name="msapplication-navbutton-color" content="#111111" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${playfair.variable} ${inter.variable} ${josefin.variable} ${poppins.variable} antialiased bg-white text-neutral-900`}>
        {/* Header */}
        <header>
          {/* Top Banner */}
          <div className="bg-neutral-900 text-white text-center py-2">
            <p className="font-body text-xs tracking-wide">
              Enjoy complimentary services, secure communications, and exclusive experiences. 
              <a href="/inquire" className="underline hover:no-underline ml-1">Discover now</a>
            </p>
          </div>
          
          {/* Main Navigation */}
          <div className="mx-auto max-w-7xl px-6">
            {/* Logo */}
            <div className="text-center py-6">
              <a href="/" className="font-heading text-3xl font-light tracking-wider text-neutral-900 hover:opacity-80 transition">
                KATHERINE TAYLOR
              </a>
            </div>
            
            {/* Navigation Menu */}
            <nav className="flex items-center justify-center gap-8 pb-4">
              <a href="/about" className="font-heading text-sm font-light tracking-wider uppercase text-neutral-700 hover:text-neutral-900 transition">
                About
              </a>
              <a href="/gallery" className="font-heading text-sm font-light tracking-wider uppercase text-neutral-700 hover:text-neutral-900 transition">
                Gallery
              </a>
              <a href="/rates" className="font-heading text-sm font-light tracking-wider uppercase text-neutral-700 hover:text-neutral-900 transition">
                Rates
              </a>
              <a href="/blog" className="font-heading text-sm font-light tracking-wider uppercase text-neutral-700 hover:text-neutral-900 transition">
                Journal
              </a>
              <a href="/gifts" className="font-heading text-sm font-light tracking-wider uppercase text-neutral-700 hover:text-neutral-900 transition">
                Gifts
              </a>
              <a href="/faq" className="font-heading text-sm font-light tracking-wider uppercase text-neutral-700 hover:text-neutral-900 transition">
                FAQ
              </a>
              <a href="/inquire" className="font-heading text-sm font-light tracking-wider uppercase text-neutral-700 hover:text-neutral-900 transition">
                Inquire
              </a>
              
              {/* Search Icon */}
              <button 
                className="ml-4 p-2 hover:bg-neutral-100 rounded-full transition"
                title="Search"
                aria-label="Search"
              >
                <svg className="w-4 h-4 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </nav>
          </div>
        </header>

        {/* Page content */}
        {children}

        <footer className="mt-4">
          <div className="mx-auto max-w-6xl px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-neutral-600">
            <div className="font-body">© {new Date().getFullYear()} Katherine Taylor</div>
            <nav className="flex items-center gap-4">
              <a href="/inquire" data-cta="inquire" className="font-body hover:opacity-80">Inquire</a>
              <a href="/blog" className="font-body hover:opacity-80">Blog</a>
              <a href="/rates" className="font-body hover:opacity-80">Rates</a>
              <a href="/faq" className="font-body hover:opacity-80">FAQ</a>
              <a href="/about" className="font-body hover:opacity-80">About</a>
            </nav>
          </div>
        </footer>

        <Analytics />
        <DevPanel />
      </body>
    </html>
  );
}
