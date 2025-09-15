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
  alternates: { canonical: "https://katherinetaylorescort.com" },
  openGraph: {
    type: "website",
    url: "https://katherinetaylorescort.com",
    title: "Katherine Taylor — Private Companion",
    description:
      "Discreet, time-focused companionship in Northern California.",
    siteName: "Katherine Taylor",
  },
  twitter: {
    card: "summary_large_image",
    title: "Katherine Taylor — Private Companion",
    description:
      "Discreet, time-focused companionship in Northern California.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-zinc-900">{children}</body>
    </html>
  );
}

