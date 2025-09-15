// app/page.tsx
export const metadata = {
    title: "Discreet Northern California Companionship",
    description:
      "Elegant, low-key encounters designed around presence and ease. Private companion by advance arrangement.",
  };
  
  export default function HomePage() {
    return (
      <main className="min-h-screen">
        {/* Header */}
        <header className="border-b">
          <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
            <a href="/" className="font-semibold tracking-tight">
              Katherine Taylor
            </a>
            <nav className="space-x-6 text-sm">
              <a href="#about" className="hover:underline">About</a>
              <a href="#faq" className="hover:underline">FAQ</a>
              <a href="#rates" className="hover:underline">Rates</a>
              <a href="#contact" className="hover:underline">Contact</a>
            </nav>
          </div>
        </header>
  
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
            Time-focused companionship,
            <span className="block">deliberately discreet.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-600">
            Thoughtful conversation. Calm presence. A refined, private experience
            designed for those who value ease and trust.
          </p>
          <div className="mt-10 flex gap-4">
            <a
              href="#contact"
              className="rounded-2xl px-6 py-3 text-sm font-medium border bg-zinc-900 text-white hover:bg-zinc-800"
            >
              Request an Introduction
            </a>
            <a
              href="#faq"
              className="rounded-2xl px-6 py-3 text-sm font-medium border hover:bg-zinc-50"
            >
              Read the FAQ
            </a>
          </div>
        </section>
  
        {/* About */}
        <section id="about" className="bg-zinc-50 border-y">
          <div className="mx-auto max-w-6xl px-6 py-16 grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">A Quiet Luxury Approach</h2>
              <p className="mt-4 text-zinc-700">
                Boutique and invitation-forward. I prefer low-key, well-planned
                time together where presence matters more than spectacle.
              </p>
              <p className="mt-4 text-zinc-700">
                Discretion is the default. Boundaries are clear. Kindness is non-negotiable.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Where & When</h3>
              <ul className="mt-3 list-disc pl-5 text-zinc-700">
                <li>Northern California (by advance arrangement)</li>
                <li>Daytime and early evening preferred</li>
                <li>New introductions via the contact section below</li>
              </ul>
            </div>
          </div>
        </section>
  
        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">FAQ</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-medium">What does “time-focused” mean?</h3>
              <p className="mt-2 text-zinc-700">
                Our date centers on conversation, presence, and shared time. No exchange for anything beyond that.
              </p>
            </div>
            <div>
              <h3 className="font-medium">Is this legal?</h3>
              <p className="mt-2 text-zinc-700">
                Yes—companionship and social time are legal. Boundaries are clear, and logistics are handled professionally.
              </p>
            </div>
          </div>
        </section>
  
        {/* Rates */}
        <section id="rates" className="bg-zinc-50 border-y">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="text-2xl font-semibold tracking-tight">Rates</h2>
            <p className="mt-4 text-zinc-700">
              Transparent, simple structure. Details finalized privately after introduction.
            </p>
          </div>
        </section>
  
        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">Request an Introduction</h2>
          <p className="mt-4 text-zinc-700">
            Include your name, preferred timing, and a brief note about context.
          </p>
          <a
            href="mailto:hello@katherinetaylorescort.com"
            className="inline-block mt-8 rounded-2xl px-6 py-3 text-sm font-medium border hover:bg-zinc-50"
          >
            Email Katherine
          </a>
        </section>
  
        {/* Footer */}
        <footer className="border-t">
          <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-zinc-600">
            © {new Date().getFullYear()} Katherine Taylor — Discreet Companionship
          </div>
        </footer>
      </main>
    );
  }
  