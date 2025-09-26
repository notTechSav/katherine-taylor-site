export default function InquirePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 space-y-8">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center">
        Inquire – How to Book an Escort Online Safely
      </h1>

      <p className="text-lg leading-relaxed text-neutral-700 text-center">
        Begin with a brief introduction — your first name, the city, and the cadence of time you value most. I&apos;ll respond with thoughtful next steps.
      </p>

      <p className="text-base leading-relaxed text-neutral-600 text-center">
        <a href="/faq" aria-label="Read frequently asked questions about hiring an escort discreetly">How do I hire an escort discreetly?</a>
      </p>

      <div className="flex justify-center">
        <a
          href="mailto:inquiries@katherinetaylorescort.com?subject=Inquiry%20—%20Katherine%20Taylor%20Experience"
          data-cta="inquire"
          className="inline-flex items-center rounded-full bg-black text-white px-6 py-3 text-sm font-medium hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
          aria-label="Send an introduction email to inquire about Katherine Taylor's services"
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

