// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://katherinetaylorescort.com"),
  title: {
    default: "San Francisco Escort - Katherine Taylor | Trusted & Discreet",
    template: "%s | Katherine Taylor",
  },
  description:
    "San Francisco escort and companion services by Katherine Taylor. Trusted, discreet, and professional engagements across the Bay Area and Northern California.",
  keywords: [
    "San Francisco escort",
    "escorts",
    "escort",
    "SF escorts",
    "SF escort",
    "San Francisco escorts",
    "Sacramento escort",
    "Sacramento escorts",
    "Katherine Taylor",
    "Katherine Taylor escort",
    "Bay Area escorts",
    "Bay Area escort",
    "Katherine Taylor Steph Curry",
    "Katherine Taylor Warriors",
  ],
  authors: [{ name: "Katherine Taylor" }],
  creator: "Katherine Taylor",
  publisher: "Katherine Taylor",
  alternates: {
    canonical: "https://katherinetaylorescort.com",
    languages: {
      "en-US": "https://katherinetaylorescort.com",
    },
  },
  openGraph: {
    type: "website",
    url: "https://katherinetaylorescort.com",
    title: "San Francisco Escort - Katherine Taylor | Trusted & Discreet",
    description:
      "San Francisco escort and companion services by Katherine Taylor. Trusted, discreet, and professional engagements across the Bay Area and Northern California.",
    siteName: "Katherine Taylor",
    locale: "en_US",
    images: [
      {
        url: "https://katherinetaylorescort.com/og.jpg",
        width: 1200,
        height: 630,
        alt: "San Francisco Escort - Katherine Taylor | Trusted & Discreet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "San Francisco Escort - Katherine Taylor | Trusted & Discreet",
    description:
      "San Francisco escort and companion services by Katherine Taylor. Trusted, discreet, and professional engagements across the Bay Area and Northern California.",
    images: ["https://katherinetaylorescort.com/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    maxSnippet: 200,
    maxImagePreview: "large",
    maxVideoPreview: -1,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: 200,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-zinc-900">
        {children}

        {/* JSON-LD structured data */}
        <Script
          id="ld-person-website"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  name: "Katherine Taylor",
                  url: "https://katherinetaylorescort.com",
                  jobTitle: "Escort",
                  image: "https://katherinetaylorescort.com/og.jpg",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "San Francisco",
                    addressRegion: "CA",
                  },
                },
                {
                  "@type": "WebSite",
                  url: "https://katherinetaylorescort.com",
                  name: "Katherine Taylor – San Francisco Escort",
                  publisher: {
                    "@type": "Person",
                    name: "Katherine Taylor",
                  },
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
