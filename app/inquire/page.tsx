export default function InquirePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 space-y-8">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center">
        Inquire About the Katherine Taylor Experience
      </h1>

      <p className="text-lg leading-relaxed text-neutral-700 text-center">
        Here, each encounter reflects your finest qualities. For over a decade, I've refined
        this craft through daily repetition and careful attention—discipline becoming intuition,
        mastery delivered with discretion.
      </p>

      <p className="text-lg leading-relaxed text-neutral-700 text-center">
        If the cadence and care of this experience align with you, begin with a brief introduction:
        your first name, preferred city, and the kind of time you value most (lunch, dinner, an
        afternoon). I'll respond with thoughtful next steps and current availability.
      </p>

      <div className="flex justify-center">
        <a
          href="mailto:inquiries@katherinetaylorescort.com?subject=Inquiry%20—%20Katherine%20Taylor%20Experience"
          data-cta="inquire"
          className="inline-flex items-center rounded-full bg-black text-white px-6 py-3 text-sm font-medium hover:opacity-90 transition"
        >
          Send an Introduction
        </a>
      </div>

      <div className="pt-6 text-center text-sm text-neutral-500">
        No rush. Inquiries are reviewed with care. This is a conversation, not a checkout.
      </div>
    </main>
  );
}

