// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://katherinetaylorescort.com"),
  title: {
    default: "Katherine Taylor — Private Companion",
    template: "%s | Katherine Taylor",
  },
  description:
    "Discreet, time-focused companionship in Northern California.",
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
    title: "Katherine Taylor — Private Companion",
    description:
      "Discreet, time-focused companionship in Northern California.",
    siteName: "Katherine Taylor",
    locale: "en_US",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Katherine Taylor — Private Companion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Katherine Taylor — Private Companion",
    description:
      "Discreet, time-focused companionship in Northern California.",
    images: ["/og.svg"],
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

