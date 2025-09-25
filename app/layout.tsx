// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { WebsiteJsonLd, PersonJsonLd, OrganizationJsonLd, BreadcrumbJsonLd } from "./json-ld";
import DevPanel from "./components/DevPanel";
import { Analytics } from "@vercel/analytics/react";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
  fallback: ["serif"],
  adjustFontFallback: false,
  weight: ["400"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: false,
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.katherinetaylorescort.com"),
  title: {
    default: "San Francisco & Sacramento Escorts | Katherine Taylor – Elegant Companion",
    template: "%s · Katherine Taylor",
  },
  description:
    "Katherine Taylor Escort – The established choice among San Francisco escorts, Sacramento escorts, and those searching 'escorts near me'. Discover elegant companionship across California.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "https://www.katherinetaylorescort.com",
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Katherine Taylor Escort – The established choice among San Francisco escorts, Sacramento escorts, and those searching 'escorts near me'. Discover elegant companionship across California." />
        <link rel="canonical" href="https://www.katherinetaylorescort.com/" />
        <WebsiteJsonLd />
        <PersonJsonLd />
        <OrganizationJsonLd />
        <BreadcrumbJsonLd />
        
        {/* FAQ Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What sets Katherine Taylor apart from other escorts near me?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Elegance, discretion, and a decade of experience. I offer more than proximity—I offer reliability, making me the trusted choice among Bay Area escorts."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How to hire an escort?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Begin with a brief introduction: your first name, the city, and the cadence of time you value most. I'll respond with thoughtful next steps. Discretion is always prioritized."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are You Available as a Bay Area Escort?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. I offer discreet companionship throughout the Bay Area, including San Francisco and Sacramento. Travel arrangements beyond California are also available with thoughtful planning."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What if you're nowhere near me when I search 'escorts near me'?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Aside from Sacramento or San Francisco, I'm available for travel arrangements."
                  }
                }
              ]
            })
          }}
        />
        {/* Critical CSS inlined - optimized for performance */}
        <style dangerouslySetInnerHTML={{
          __html: `
            .font-heading { font-family: var(--font-playfair), serif; font-display: swap; }
            .font-body { font-family: var(--font-inter), system-ui, sans-serif; font-display: swap; }
            .font-button { font-family: var(--font-inter), system-ui, sans-serif; font-display: swap; }
            .hero-section { min-height: 100vh; display: flex; align-items: center; justify-content: center; }
            .hero-text { font-family: var(--font-playfair), serif; font-weight: 300; line-height: 1.2; text-align: center; color: white; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5); }
            body { color: rgb(0, 0, 0); background: linear-gradient(to bottom, transparent, rgb(255, 255, 255)) rgb(214, 219, 220); }
            html { -ms-overflow-style: none; scrollbar-width: none; }
            html::-webkit-scrollbar { display: none; }
            * { -ms-overflow-style: none; scrollbar-width: none; }
            *::-webkit-scrollbar { display: none; }
            .backdrop-blur-sm { -webkit-backdrop-filter: blur(4px); backdrop-filter: blur(4px); }
            .backdrop-blur { -webkit-backdrop-filter: blur(8px); backdrop-filter: blur(8px); }
            /* Performance optimizations */
            .lazy-load { content-visibility: auto; contain-intrinsic-size: 0 500px; }
          `
        }} />
        {/* Preload critical resources */}
        <link rel="preload" href="/homepage-about.jpg" as="image" type="image/jpeg" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        {/* Note: theme-color not supported in Firefox, but harmless */}
        <meta name="theme-color" content="#111111" />
        {/* Fallback for browsers that don't support theme-color */}
        <meta name="msapplication-navbutton-color" content="#111111" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${playfair.variable} ${inter.variable} antialiased bg-white text-neutral-900`}>
        {/* Skip Navigation Links */}
        <div className="sr-only focus-within:not-sr-only">
          <a href="#main-content" className="absolute top-0 left-0 bg-black text-white p-2 z-50 focus:not-sr-only">
            Skip to main content
          </a>
          <a href="#navigation" className="absolute top-0 left-20 bg-black text-white p-2 z-50 focus:not-sr-only">
            Skip to navigation
          </a>
        </div>

        {/* Navigation Header */}
        <header className="bg-transparent absolute top-0 left-0 right-0 z-10" role="banner">
          <div className="mx-auto max-w-7xl px-6">
            {/* Logo */}
            <div className="text-center py-6">
              <a 
                href="/" 
                className="font-heading text-3xl font-light tracking-wider text-white hover:opacity-80 transition drop-shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded" 
                aria-label="Katherine Taylor Home"
              >
                <h1 className="sr-only">Katherine Taylor</h1>
                <span aria-hidden="true">KATHERINE TAYLOR</span>
              </a>
            </div>
            
            {/* Navigation Menu */}
            <nav 
              id="navigation"
              className="flex items-center justify-center gap-8 pb-4" 
              role="navigation" 
              aria-label="Main navigation"
            >
              <a 
                href="/about" 
                className="font-heading text-sm font-light tracking-wider uppercase text-white hover:opacity-80 transition drop-shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded px-2 py-1"
                aria-label="Learn about Katherine Taylor"
              >
                About
              </a>
              <a 
                href="/gallery" 
                className="font-heading text-sm font-light tracking-wider uppercase text-white hover:opacity-80 transition drop-shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded px-2 py-1"
                aria-label="View gallery of photos"
              >
                Gallery
              </a>
              <a 
                href="/rates" 
                className="font-heading text-sm font-light tracking-wider uppercase text-white hover:opacity-80 transition drop-shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded px-2 py-1"
                aria-label="View rates and pricing"
              >
                Rates
              </a>
              <a 
                href="/blog" 
                className="font-heading text-sm font-light tracking-wider uppercase text-white hover:opacity-80 transition drop-shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded px-2 py-1"
                aria-label="Read journal entries"
              >
                Journal
              </a>
              <a 
                href="/gifts" 
                className="font-heading text-sm font-light tracking-wider uppercase text-white hover:opacity-80 transition drop-shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded px-2 py-1"
                aria-label="Learn about gift etiquette"
              >
                Gifts
              </a>
              <a 
                href="/faq" 
                className="font-heading text-sm font-light tracking-wider uppercase text-white hover:opacity-80 transition drop-shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded px-2 py-1"
                aria-label="View frequently asked questions"
              >
                FAQ
              </a>
              <a 
                href="/inquire" 
                className="font-heading text-sm font-light tracking-wider uppercase text-white hover:opacity-80 transition drop-shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded px-2 py-1"
                aria-label="Contact or inquire about services"
              >
                Inquire
              </a>
              
              {/* Search Icon */}
              <button 
                className="ml-4 p-2 hover:bg-white/20 rounded-full transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                title="Search"
                aria-label="Search the website"
                type="button"
              >
                <svg className="w-4 h-4 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </nav>
          </div>
        </header>

        {/* Page content */}
        {children}

        <footer className="mt-4 relative" role="contentinfo">
          <div className="mx-auto max-w-6xl px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-neutral-600">
            <div className="font-body">© {new Date().getFullYear()} Katherine Taylor</div>
            <nav className="flex items-center gap-4" role="navigation" aria-label="Footer navigation">
              <a 
                href="/inquire" 
                data-cta="inquire" 
                className="font-body hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-opacity-50 rounded px-1"
                aria-label="Contact or inquire about services"
              >
                Inquire
              </a>
              <a 
                href="/blog" 
                className="font-body hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-opacity-50 rounded px-1"
                aria-label="Read journal entries"
              >
                Blog
              </a>
              <a 
                href="/rates" 
                className="font-body hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-opacity-50 rounded px-1"
                aria-label="View rates and pricing"
              >
                Rates
              </a>
              <a 
                href="/faq" 
                className="font-body hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-opacity-50 rounded px-1"
                aria-label="View frequently asked questions"
              >
                FAQ
              </a>
              <a 
                href="/about" 
                className="font-body hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-opacity-50 rounded px-1"
                aria-label="Learn about Katherine Taylor"
              >
                About
              </a>
            </nav>
          </div>
        </footer>

        <Analytics />
        <DevPanel />
      </body>
    </html>
  );
}
