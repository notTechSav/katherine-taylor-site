export const metadata = {
  title: "Gifts – What to Give an Escort",
  description: "Thoughtful Gestures for Escort Arrangements in San Francisco and Beyond. Never required. Sometimes unforgettable.",
};

export default function GiftsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Gifts – What to Give an Escort
        </h1>
        <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-neutral-600">
          Thoughtful Gestures for Escort Arrangements in San Francisco and Beyond
        </h2>
        <p className="text-lg leading-relaxed text-neutral-700">
          Never required. Sometimes unforgettable.
        </p>
        <p className="text-base leading-relaxed text-neutral-600">
          <a href="/faq" aria-label="Read frequently asked questions about gift etiquette for escorts">What&apos;s the etiquette when gifting an escort?</a>
        </p>
      </div>

      <div className="prose prose-neutral max-w-none">
        <p className="text-lg leading-relaxed text-neutral-700">
          Gifts are never expected, but when thoughtfully chosen, they become part of the memory. 
          Like the experience itself, the best gifts reflect understanding rather than obligation.
        </p>

        <p className="text-lg leading-relaxed text-neutral-700">
          Whether it&apos;s a book that sparked a conversation, a piece of art that caught your eye, 
          or something that simply felt right—the gesture matters more than the price tag.
        </p>

        <p className="text-lg leading-relaxed text-neutral-700">
          For those who prefer guidance, I maintain a small, curated list of preferences 
          that can be shared upon request. But the most meaningful gifts are often 
          those chosen with intuition rather than instruction.
        </p>
      </div>

      <div className="text-center mt-12">
        <p className="text-neutral-600 mb-6">
          Questions about gifts or preferences? Begin with an introduction.
        </p>
        <a
          href="/inquire"
          data-cta="inquire"
          className="inline-flex items-center rounded-full bg-black text-white px-8 py-3 text-base font-medium hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
          aria-label="Inquire about Katherine Taylor's services and gift preferences"
        >
          Inquire
        </a>
      </div>
    </main>
  );
}
