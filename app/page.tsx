export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 flex items-center justify-center p-8">
      <main className="max-w-3xl w-full text-center space-y-8">
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-tight">
          Welcome to the Katherine Taylor Experience
            </h1>

        <p className="text-lg sm:text-2xl leading-relaxed sm:leading-9 text-neutral-700">
          Here, every encounter is a reflection of your finest qualities,
          brought to life through subtle detail. Imagine stepping into a world
          where each moment feels naturally aligned and uniquely yours.
        </p>

        <p className="text-lg sm:text-2xl leading-relaxed sm:leading-9 text-neutral-700">
          For over a decade, I've refined this craft through daily repetition
          and careful attention. That consistency has become intuition, and
          that longevity is proof: mastery is the promise I deliver.
        </p>

        <div className="flex justify-center mt-8">
          <a
            href="/inquire"
            data-cta="inquire"
            className="inline-flex items-center rounded-full bg-black text-white px-8 py-3 text-base font-medium hover:opacity-90 transition"
          >
            Inquire
          </a>
        </div>

        <section className="pt-6">
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <a href="/inquire" data-cta="inquire" className="block rounded-2xl border border-neutral-200 p-6 hover:bg-neutral-50 transition">
              <h2 className="text-lg font-semibold">Inquire</h2>
              <p className="mt-1 text-sm text-neutral-700">
                Begin with a brief introduction—city, cadence, and the kind of time you value most.
              </p>
            </a>

            <a href="/blog" className="block rounded-2xl border border-neutral-200 p-6 hover:bg-neutral-50 transition">
              <h2 className="text-lg font-semibold">The Ethical Escort — Journal</h2>
              <p className="mt-1 text-sm text-neutral-700">
                Notes on discretion, design, and the quiet craft of attentiveness.
              </p>
            </a>

            <a href="/rates" className="block rounded-2xl border border-neutral-200 p-6 hover:bg-neutral-50 transition">
              <h2 className="text-lg font-semibold">Rates</h2>
              <p className="mt-1 text-sm text-neutral-700">
                Cocktails & Conversation, Luncheon/Evening, Overnight, Weekend, and Arrangements —
                with discreet notes on hosting, travel, and extensions.
              </p>
            </a>

            <a href="/faq" className="block rounded-2xl border border-neutral-200 p-6 hover:bg-neutral-50 transition">
              <h2 className="text-lg font-semibold">FAQ</h2>
              <p className="mt-1 text-sm text-neutral-700">
                Clear answers on boundaries, cadence, travel, and professional (tax-compliant) invoicing.
              </p>
            </a>

            <a href="/about" className="block rounded-2xl border border-neutral-200 p-6 hover:bg-neutral-50 transition">
              <h2 className="text-lg font-semibold">About</h2>
              <p className="mt-1 text-sm text-neutral-700">
                The philosophy behind the Experience—golden-ratio thinking, continuity, and mastery refined over a decade.
              </p>
            </a>
          </div>
        </section>
      </main>
    </div>
    );
  }