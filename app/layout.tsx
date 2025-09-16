// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://katherinetaylorescort.com"),
  title: {
    default: "Katherine Taylor — Discreet Northern California Companionship",
    template: "%s | Katherine Taylor",
  },
  description:
    "Professional companion offering discreet, time-focused companionship in Northern California. Elegant social events, business functions, and personal time with complete discretion.",
  keywords: [
    "companion",
    "escort",
    "Northern California",
    "discreet",
    "private",
    "companionship",
    "social events",
    "business functions",
    "professional companion",
    "San Francisco",
    "Bay Area"
  ],
  authors: [{ name: "Katherine Taylor" }],
  creator: "Katherine Taylor",
  publisher: "Katherine Taylor",
  alternates: { 
    canonical: "https://katherinetaylorescort.com",
  },
  openGraph: {
    type: "website",
    url: "https://katherinetaylorescort.com",
    title: "Katherine Taylor — Discreet Northern California Companionship",
    description:
      "Professional companion offering discreet, time-focused companionship in Northern California. Elegant social events, business functions, and personal time with complete discretion.",
    siteName: "Katherine Taylor",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Katherine Taylor - Professional Companion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Katherine Taylor — Discreet Northern California Companionship",
    description:
      "Professional companion offering discreet, time-focused companionship in Northern California. Elegant social events, business functions, and personal time with complete discretion.",
    images: ["/og-image.jpg"],
  },
  robots: { 
    index: true, 
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "services",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-zinc-900">{children}</body>
    </html>
  );
}

