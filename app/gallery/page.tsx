import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery — Katherine Taylor",
  description:
    "A quiet, editorial glimpse. Images suggest the mood; the experience is calmer in person.",
};

const shots = [
  {
    src: "/images/san-francisco-escort.webp.jpg",
    alt: "Portrait in a gilt room; white fur coat over black lace and pearls.",
  },
  {
    src: "/images/escorts-near-me-poetic-gaze.webp.jpg",
    alt: "Close profile in warm window light; hair catching the sun.",
  },
  {
    src: "/images/san-francisco-escort-posing.jpg",
    alt: "Seated against a rose wall in a white blazer, relaxed gaze.",
  },
  {
    src: "/images/san-francisco-escort-working.jpg",
    alt: "Golden satin dress by an ornate mirror, evening light.",
  },
  {
    src: "/images/bay-area-escort-looking-sharp.jpg",
    alt: "Close portrait, soft lens flare and neutral makeup.",
  },
  {
    src: "/images/escorts-near-me-posing-classy.jpg",
    alt: "Black corset and gloves in a vintage dressing room.",
  },
  {
    src: "/images/sacramento-escort-posing.jpg",
    alt: "Sequined gown on a bed with pink silk, morning light.",
  },
];

export default function GalleryPage() {
  return (
    <main className="mx-auto max-w-6xl px-sectionX py-sectionY space-y-10">
      <header className="text-center space-y-4">
        <h1 className="font-heading text-3xl sm:text-4xl font-light tracking-tight">
          Gallery
        </h1>
        <p className="font-body text-lg leading-relaxed text-neutral-700 max-w-2xl mx-auto">
          Editorial moments in warm light. A glimpse, not the whole story.
        </p>
      </header>

      {/* Responsive, no-jank grid */}
      <section aria-label="Gallery grid">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shots.map((s, i) => (
            <figure
              key={s.src}
              className="relative overflow-hidden rounded-lg"
            >
              {/* Lock aspect to prevent layout shift; portrait biased */}
              <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] lg:aspect-[4/3]">
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={78}
                  loading={i < 2 ? "eager" : "lazy"}
                  fetchPriority={i < 2 ? "high" : "auto"}
                />
              </div>
              {/* Optional caption for screen readers only */}
              <figcaption className="sr-only">{s.alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <div className="text-center mt-6">
        <a
          href="/inquire"
          className="inline-flex items-center rounded-sm bg-black text-white px-6 py-3 text-sm font-medium tracking-wider uppercase hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
          aria-label="Inquire about an engagement"
        >
          Inquire
        </a>
      </div>
    </main>
  );
}
