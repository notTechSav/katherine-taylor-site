// app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "San Francisco Escort – Katherine Taylor | Trusted & Discreet",
  description:
    "San Francisco escort and companion services by Katherine Taylor. Trusted, discreet, and professional engagements across the Bay Area and Northern California.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight text-xl">
            Katherine Taylor
          </Link>
          <nav className="hidden md:flex space-x-8 text-sm">
            <a href="#about" className="hover:text-zinc-600 transition-colors">About</a>
            <a href="#services" className="hover:text-zinc-600 transition-colors">Services</a>
            <a href="#faq" className="hover:text-zinc-600 transition-colors">FAQ</a>
            <a href="#rates" className="hover:text-zinc-600 transition-colors">Rates</a>
            <a href="#contact" className="hover:text-zinc-600 transition-colors">Contact</a>
          </nav>
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
  
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-light leading-tight tracking-tight">
              Time-focused companionship, deliberately discreet.
            </h1>
            <p className="mt-8 max-w-3xl mx-auto text-xl text-zinc-600 leading-relaxed">
              Thoughtful conversation. Calm presence. A refined, private experience designed for those who value ease and trust.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@katherinetaylorescort.com"
                className="rounded-full px-8 py-4 text-sm font-medium bg-zinc-900 text-white hover:bg-zinc-800 transition-colors"
              >
                Request an Introduction
              </a>
              <a
                href="#faq"
                className="rounded-full px-8 py-4 text-sm font-medium border border-zinc-300 hover:bg-zinc-50 transition-colors"
              >
                Read the FAQ
              </a>
            </div>
          </div>
        </section>
  
        {/* About */}
        <section id="about" className="bg-zinc-50 border-y">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight">A Quiet Luxury Approach</h2>
              <p className="mt-4 text-lg text-zinc-600 max-w-2xl mx-auto">
                Boutique and invitation-forward. I prefer low-key, well-planned
                time together where presence matters more than spectacle.
              </p>
            </div>
            <div className="grid gap-12 md:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-3">Philosophy</h3>
                  <p className="text-zinc-700 leading-relaxed">
                    Discretion is the default. Boundaries are clear. Kindness is non-negotiable.
                    Every interaction is built on mutual respect and genuine connection.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3">Experience</h3>
                  <p className="text-zinc-700 leading-relaxed">
                    Years of providing thoughtful companionship to discerning individuals
                    who value quality time and meaningful conversation.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-3">Location & Timing</h3>
                  <ul className="space-y-2 text-zinc-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-zinc-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Northern California (by advance arrangement)
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-zinc-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Daytime and early evening preferred
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-zinc-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      New introductions via the contact section below
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3">Approach</h3>
                  <p className="text-zinc-700 leading-relaxed">
                    Professional, warm, and attentive. I focus on creating comfortable
                    environments where natural conversation flows effortlessly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">Companionship Services</h2>
            <p className="mt-4 text-lg text-zinc-600 max-w-2xl mx-auto">
              Thoughtfully curated experiences designed around meaningful connection and shared time.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center p-6 rounded-lg border border-zinc-200 hover:border-zinc-300 transition-colors">
              <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Social Companionship</h3>
              <p className="text-zinc-600 text-sm">
                Engaging conversation, cultural events, dining experiences, and social gatherings.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg border border-zinc-200 hover:border-zinc-300 transition-colors">
              <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Business Events</h3>
              <p className="text-zinc-600 text-sm">
                Professional appearances, corporate functions, and business-related social engagements.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg border border-zinc-200 hover:border-zinc-300 transition-colors">
              <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Personal Time</h3>
              <p className="text-zinc-600 text-sm">
                Relaxed, intimate conversations and quality time in comfortable, private settings.
              </p>
            </div>
          </div>
        </section>
  
        {/* FAQ */}
        <section id="faq" className="bg-zinc-50 border-y">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight">Frequently Asked Questions</h2>
              <p className="mt-4 text-lg text-zinc-600 max-w-2xl mx-auto">
                Common questions about my companionship services and approach.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium mb-3">What does &quot;time-focused&quot; mean?</h3>
                  <p className="text-zinc-700 leading-relaxed">
                    Our time together centers on conversation, presence, and shared experiences. 
                    The focus is on meaningful connection rather than transactional exchanges.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-3">Is this legal?</h3>
                  <p className="text-zinc-700 leading-relaxed">
                    Yes—companionship and social time are completely legal. All boundaries are 
                    clearly established, and logistics are handled with complete professionalism.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-3">How do I get started?</h3>
                  <p className="text-zinc-700 leading-relaxed">
                    Simply reach out through the contact section below. Include your name, 
                    preferred timing, and a brief note about what you&apos;re looking for.
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium mb-3">What should I expect?</h3>
                  <p className="text-zinc-700 leading-relaxed">
                    Professional, warm conversation in comfortable settings. I focus on 
                    creating natural, enjoyable experiences that feel effortless and genuine.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-3">Are you available for travel?</h3>
                  <p className="text-zinc-700 leading-relaxed">
                    I primarily work within Northern California, but travel arrangements 
                    can be discussed for longer engagements with advance notice.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-3">What about discretion?</h3>
                  <p className="text-zinc-700 leading-relaxed">
                    Complete discretion is guaranteed. Your privacy and confidentiality 
                    are my highest priorities in every interaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Rates */}
        <section id="rates" className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">Investment & Rates</h2>
            <p className="mt-4 text-lg text-zinc-600 max-w-2xl mx-auto">
              Transparent, simple structure designed around quality time and meaningful connection.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-zinc-200 rounded-lg p-8 text-center">
              <h3 className="text-xl font-medium mb-4">Companionship Rates</h3>
              <p className="text-zinc-700 leading-relaxed mb-6">
                Rates are structured around time and experience quality. All details are 
                discussed privately after initial introduction to ensure the best fit for both parties.
              </p>
              <div className="grid gap-6 md:grid-cols-3 text-sm">
                <div className="p-4 bg-zinc-50 rounded-lg">
                  <h4 className="font-medium mb-2">Social Events</h4>
                  <p className="text-zinc-600">Dining, cultural events, social gatherings</p>
                </div>
                <div className="p-4 bg-zinc-50 rounded-lg">
                  <h4 className="font-medium mb-2">Business Functions</h4>
                  <p className="text-zinc-600">Corporate events, professional appearances</p>
                </div>
                <div className="p-4 bg-zinc-50 rounded-lg">
                  <h4 className="font-medium mb-2">Personal Time</h4>
                  <p className="text-zinc-600">Private conversation, quality time together</p>
                </div>
              </div>
              <p className="mt-6 text-sm text-zinc-500">
                All arrangements include complete discretion and professional service.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-zinc-50 border-y">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight">Request an Introduction</h2>
              <p className="mt-4 text-lg text-zinc-600 max-w-2xl mx-auto">
                Ready to connect? I&apos;d love to hear from you and discuss how we can create 
                a meaningful experience together.
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <div className="bg-white border border-zinc-200 rounded-lg p-8">
                <h3 className="text-xl font-medium mb-4">Get in Touch</h3>
                <p className="text-zinc-700 mb-6">
                  Please include your name, preferred timing, and a brief note about what 
                  you&apos;re looking for. I&apos;ll respond within 24 hours to discuss next steps.
                </p>
                <a
                  href="mailto:hello@katherinetaylorescort.com"
                  className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-medium bg-zinc-900 text-white hover:bg-zinc-800 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Katherine
                </a>
                <p className="mt-4 text-sm text-zinc-500">
                  All communications are handled with complete discretion and professionalism.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Footer */}
        <footer className="border-t bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="font-semibold text-lg mb-4">Katherine Taylor</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Professional companionship services in Northern California. 
                  Discreet, thoughtful, and focused on meaningful connection.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-4">Services</h4>
                <ul className="space-y-2 text-sm text-zinc-600">
                  <li>Social Companionship</li>
                  <li>Business Events</li>
                  <li>Personal Time</li>
                  <li>Travel Arrangements</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-4">Contact</h4>
                <p className="text-sm text-zinc-600 mb-2">
                  <a href="mailto:hello@katherinetaylorescort.com" className="hover:text-zinc-900 transition-colors">
                    hello@katherinetaylorescort.com
                  </a>
                </p>
                <p className="text-sm text-zinc-600">
                  Northern California
                </p>
              </div>
            </div>
            <div className="border-t mt-8 pt-8 text-center text-sm text-zinc-500">
              © {new Date().getFullYear()} Katherine Taylor — Discreet Companionship. All rights reserved.
            </div>
          </div>
        </footer>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "url": "https://katherinetaylorescort.com",
                "name": "Katherine Taylor — Private Companion"
              },
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Katherine Taylor",
                "url": "https://katherinetaylorescort.com",
                "sameAs": []
              }
            ])
          }}
        />
      </main>
    );
  }
  