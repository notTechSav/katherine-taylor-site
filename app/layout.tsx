// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { WebsiteJsonLd, WebPageJsonLd, PersonJsonLd, OrganizationJsonLd, BreadcrumbJsonLd } from "./json-ld";
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
  metadataBase: new URL("https://katherinetaylorescort.com"),
  title: {
    default: "San Francisco & Sacramento Escorts | Bay Area Elegance – Katherine Taylor",
    template: "%s · Katherine Taylor",
  },
  description:
    "Refined companionship among San Francisco escorts, Sacramento escorts, and Bay Area escorts. Discover Katherine Taylor—your poetic answer to 'escorts near me'.",
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
    title: "San Francisco & Sacramento Escorts | Bay Area Elegance – Katherine Taylor",
    description:
      "Refined companionship among San Francisco escorts, Sacramento escorts, and Bay Area escorts. Discover Katherine Taylor—your poetic answer to 'escorts near me'.",
    locale: "en_US",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "San Francisco & Sacramento Escorts | Bay Area Elegance – Katherine Taylor",
    description:
      "Refined companionship among San Francisco escorts, Sacramento escorts, and Bay Area escorts. Discover Katherine Taylor—your poetic answer to 'escorts near me'.",
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
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="description" content="Refined companionship among San Francisco escorts, Sacramento escorts, and Bay Area escorts. Discover Katherine Taylor—your poetic answer to 'escorts near me'." />
        <link rel="canonical" href="https://katherinetaylorescort.com/" />
        <WebsiteJsonLd />
        <WebPageJsonLd />
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
                  "name": "Where can I find San Francisco escorts?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Katherine Taylor offers refined companionship in San Francisco and surrounding areas."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What makes Katherine Taylor unique among Sacramento escorts?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Elegance, discretion, and poetic presence define the experience."
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
        {/* Performance optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
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
                aria-label="About Katherine Taylor"
              >
                About
              </a>
              <a 
                href="/gallery" 
                className="font-heading text-sm font-light tracking-wider uppercase text-white hover:opacity-80 transition drop-shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded px-2 py-1"
                aria-label="Gallery of Bay Area escorts"
              >
                Gallery
              </a>
              <a 
                href="/rates" 
                className="font-heading text-sm font-light tracking-wider uppercase text-white hover:opacity-80 transition drop-shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded px-2 py-1"
                aria-label="View rates and pricing for Sacramento escorts and Bay Area escorts"
              >
                Rates
              </a>
              <a 
                href="/blog" 
                className="font-heading text-sm font-light tracking-wider uppercase text-white hover:opacity-80 transition drop-shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded px-2 py-1"
                aria-label="Read journal entries from San Francisco escorts - Katherine Taylor's insights"
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
                aria-label="Frequently asked questions"
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
                href="/sitemap.xml" 
                className="font-body hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-opacity-50 rounded px-1"
                aria-label="View sitemap"
              >
                Sitemap
              </a>
              <a 
                href="/robots.txt" 
                className="font-body hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-opacity-50 rounded px-1"
                aria-label="View robots.txt"
              >
                Robots
              </a>
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
