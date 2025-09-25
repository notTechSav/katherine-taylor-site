// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { WebsiteJsonLd, PersonJsonLd, OrganizationJsonLd } from "./json-ld";
import DevPanel from "./components/DevPanel";
import ClientProviders from "./components/ClientProviders";
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
        {/* Navigation Header */}
        <header className="bg-transparent absolute top-0 left-0 right-0 z-10">
          <div className="mx-auto max-w-7xl px-6">
            {/* Logo */}
            <div className="text-center py-6">
              <a href="/" className="font-heading text-3xl font-light tracking-wider text-white hover:opacity-80 transition drop-shadow-lg">
                KATHERINE TAYLOR
              </a>
            </div>
            
            {/* Navigation Menu */}
            <nav className="flex items-center justify-center gap-8 pb-4">
              <a href="/about" className="font-heading text-sm font-light tracking-wider uppercase text-white hover:opacity-80 transition drop-shadow-md">
                About
              </a>
              <a href="/gallery" className="font-heading text-sm font-light tracking-wider uppercase text-white hover:opacity-80 transition drop-shadow-md">
                Gallery
              </a>
              <a href="/rates" className="font-heading text-sm font-light tracking-wider uppercase text-white hover:opacity-80 transition drop-shadow-md">
                Rates
              </a>
              <a href="/blog" className="font-heading text-sm font-light tracking-wider uppercase text-white hover:opacity-80 transition drop-shadow-md">
                Journal
              </a>
              <a href="/gifts" className="font-heading text-sm font-light tracking-wider uppercase text-white hover:opacity-80 transition drop-shadow-md">
                Gifts
              </a>
              <a href="/faq" className="font-heading text-sm font-light tracking-wider uppercase text-white hover:opacity-80 transition drop-shadow-md">
                FAQ
              </a>
              <a href="/inquire" className="font-heading text-sm font-light tracking-wider uppercase text-white hover:opacity-80 transition drop-shadow-md">
                Inquire
              </a>
              
              {/* Search Icon */}
              <button 
                className="ml-4 p-2 hover:bg-white/20 rounded-full transition"
                title="Search"
                aria-label="Search"
              >
                <svg className="w-4 h-4 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </nav>
          </div>
        </header>

        {/* Page content */}
        <ClientProviders>
          {children}
        </ClientProviders>

        <footer className="mt-4 relative">
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
