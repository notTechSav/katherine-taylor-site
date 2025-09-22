export default function BlogIndex() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 space-y-8">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center">
        The Ethical Escort — Journal
      </h1>
      <p className="text-lg leading-relaxed text-neutral-700 text-center">
        Notes on discretion, design, and the quiet craft of attentiveness. Written in first person,
        updated as the seasons change.
      </p>

      <div className="mt-8 grid gap-6">
        <a
          href="/blog/the-ethical-escort"
          className="block rounded-2xl border border-neutral-200 p-6 hover:bg-neutral-50 transition"
        >
          <h2 className="text-xl font-semibold">The Ethical Escort</h2>
          <p className="mt-2 text-neutral-700">
            Why credibility matters in this industry, and how "over a decade" of daily practice
            turns attentiveness into intuition—mastery you can feel without it ever being said.
          </p>
          <div className="mt-3 text-sm text-neutral-500">5–7 min read</div>
        </a>
      </div>
    </main>
  );
}






