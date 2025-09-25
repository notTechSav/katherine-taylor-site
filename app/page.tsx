import Image from "next/image";
import HeroVideo from "./components/HeroVideo";

export default function HomePage() {
  return (
    <main id="main-content" className="h-screen overflow-y-scroll bg-gradient-to-br from-neutral-50 via-white to-neutral-100" role="main">
      {/* Primary H1 - SEO Optimized */}
      <h1 className="sr-only">Katherine Taylor Escort – Elegant Companionship in San Francisco & Sacramento</h1>
      
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden" aria-label="Hero section with video background" role="region" aria-labelledby="hero-heading">
        {/* Video Background */}
        <HeroVideo />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center">
          <div className="text-center">
            <h3 id="hero-heading" className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight drop-shadow-lg mb-8">
              Experience Refined Companionship with Katherine Taylor in San Francisco & Sacramento
            </h3>
            <p className="font-heading text-lg sm:text-xl lg:text-2xl font-light text-white leading-relaxed drop-shadow-md">
              The established choice among San Francisco escorts, Sacramento escorts, and those searching &apos;escorts near me&apos;
            </p>
          </div>
        </div>

        {/* Discover Now Button */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <a
            href="/inquire"
            data-cta="inquire"
            className="font-button inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 text-xs font-medium tracking-wider uppercase hover:bg-white/30 hover:scale-105 transition-all duration-300 rounded-sm drop-shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            aria-label="Discover more about Katherine Taylor's services"
          >
            Discover Now
          </a>
        </div>
      </section>

      {/* About Section - Full Viewport Image */}
      <section className="relative h-screen overflow-hidden lazy-load" aria-label="About Katherine Taylor section" role="region" aria-labelledby="about-heading">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/homepage-about.jpg"
            alt="Elegant San Francisco escort in refined portrait – Bay Area escort services"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxOAPwCdABmX/9k="
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" aria-hidden="true"></div>

        {/* Text Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <div className="text-center max-w-4xl">
            <h2 id="about-heading" className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight drop-shadow-lg mb-8">
              About Katherine Taylor – The Escort Experience That Redefines Your Search for &apos;Escorts Near Me&apos;
            </h2>
            <p className="font-body text-lg sm:text-xl lg:text-2xl text-white leading-relaxed drop-shadow-md mb-8">
              As one of the Bay Area escorts known for elegance and discretion, I offer more than proximity—I offer presence.
            </p>
            <p className="font-body text-base sm:text-lg text-white leading-relaxed drop-shadow-md mb-8">
              <a 
                href="/blog" 
                className="underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded px-1"
                aria-label="Read journal insights from San Francisco escorts"
              >
                Read my insights as one of the San Francisco escorts in the Journal
              </a>
            </p>
            <a
              href="/about"
              className="font-button inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 text-sm font-medium tracking-wider uppercase hover:bg-white/30 hover:scale-105 transition-all duration-300 rounded-sm drop-shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              aria-label="Learn more about Katherine Taylor"
            >
              Journey Forward
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section - Full Viewport Image */}
      <section className="relative h-screen overflow-hidden lazy-load" aria-label="Gallery section" role="region" aria-labelledby="gallery-heading">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/homepage-gallery.webp"
            alt="Gallery preview of Sacramento escort – elegant escort photo showcasing companionship"
            fill
            className="object-cover"
            sizes="100vw"
            quality={80}
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRnoAAABXRUJQVlA4TA4AAAAvAAAAEAcQERGIiP4HAA=="
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" aria-hidden="true"></div>

        {/* Text Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <div className="text-center max-w-4xl">
            <h2 id="gallery-heading" className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight drop-shadow-lg mb-8">
              Gallery – Visual Reflections of One of San Francisco&apos;s Escorts
            </h2>
            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-light text-white leading-relaxed drop-shadow-md mb-8">
              Escorts Near Me – A Glimpse into the Moments That Define Elegance
            </h3>
            <p className="font-body text-lg sm:text-xl lg:text-2xl text-white leading-relaxed drop-shadow-md mb-8">
              Images can only suggest what is best felt in person. Begin with a glimpse.
            </p>
            <a
              href="/gallery"
              className="font-button inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 text-sm font-medium tracking-wider uppercase hover:bg-white/30 hover:scale-105 transition-all duration-300 rounded-sm drop-shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              aria-label="View the full gallery of photos"
            >
              View Gallery
            </a>
          </div>
        </div>
      </section>

      {/* Rates Section - Full Viewport Image */}
      <section className="relative h-screen overflow-hidden lazy-load" aria-label="Rates and pricing section" role="region" aria-labelledby="rates-heading">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/homepage-rates.jpg"
            alt="Escort rates and services in San Francisco – premium Bay Area escorts pricing"
            fill
            className="object-cover"
            sizes="100vw"
            quality={80}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxOAPwCdABmX/9k="
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" aria-hidden="true"></div>

        {/* Text Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <div className="text-center max-w-4xl">
            <h2 id="rates-heading" className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight drop-shadow-lg mb-8">
              Rates – Katherine Taylor Escort Experiences in San Francisco &amp; Sacramento
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8" role="list" aria-label="Service offerings">
              <article className="text-center" role="listitem">
                <h3 className="font-heading text-xl sm:text-2xl font-light text-white leading-relaxed drop-shadow-md mb-4">
                  Dinner Engagements – Elegant Evenings with Katherine Taylor
                </h3>
              </article>
              <article className="text-center" role="listitem">
                <h3 className="font-heading text-xl sm:text-2xl font-light text-white leading-relaxed drop-shadow-md mb-4">
                  Overnight Arrangements – Unhurried Time in Sacramento
                </h3>
              </article>
              <article className="text-center" role="listitem">
                <h3 className="font-heading text-xl sm:text-2xl font-light text-white leading-relaxed drop-shadow-md mb-4">
                  Weekend Escapes – Travelable Companionship If I Don&apos;t Pop Up When You Search &apos;Escorts Near Me&apos;
                </h3>
              </article>
            </div>
            <p className="font-body text-lg sm:text-xl lg:text-2xl text-white leading-relaxed drop-shadow-md mb-8">
              Rates reflect the quality of time—not just its length. Each arrangement is tailored to your preferences.
            </p>
            <a
              href="/rates"
              className="font-button inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 text-sm font-medium tracking-wider uppercase hover:bg-white/30 hover:scale-105 transition-all duration-300 rounded-sm drop-shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              aria-label="View detailed rates and pricing information"
            >
              View Rates
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section - Full Viewport Image */}
      <section className="relative h-screen overflow-hidden lazy-load" aria-label="Frequently asked questions section" role="region" aria-labelledby="faq-heading">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/homepage-faq.webp"
            alt="FAQ and frequently asked questions about Sacramento escort services"
            fill
            className="object-cover"
            sizes="100vw"
            quality={80}
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRnoAAABXRUJQVlA4TA4AAAAvAAAAEAcQERGIiP4HAA=="
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" aria-hidden="true"></div>

        {/* Text Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <div className="text-center max-w-4xl">
            <h2 id="faq-heading" className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight drop-shadow-lg mb-8">
              FAQ – Katherine Taylor <em>escorts</em> You, If You Will, Through Escort Etiquette, Travel, and Discretion in San Francisco, Sacramento, and the Bay Area
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8" role="list" aria-label="Frequently asked questions">
              <article className="text-left" role="listitem">
                <h3 className="font-heading text-xl sm:text-2xl font-light text-white leading-relaxed drop-shadow-md mb-4">
                  What if you&apos;re nowhere near me when I search &quot;escorts near me&quot;?
                </h3>
                <p className="font-body text-base sm:text-lg text-white leading-relaxed drop-shadow-md mb-6">
                  Aside from Sacramento or San Francisco, I&apos;m available for travel arrangements.
                </p>
              </article>
              <article className="text-left" role="listitem">
                <h3 className="font-heading text-xl sm:text-2xl font-light text-white leading-relaxed drop-shadow-md mb-4">
                  Are You Available as a Bay Area Escort?
                </h3>
                <p className="font-body text-base sm:text-lg text-white leading-relaxed drop-shadow-md mb-6">
                  Yes. I offer discreet companionship throughout the Bay Area, including San Francisco and Sacramento. Travel arrangements beyond California are also available with thoughtful planning.
                </p>
              </article>
              <article className="text-left" role="listitem">
                <h3 className="font-heading text-xl sm:text-2xl font-light text-white leading-relaxed drop-shadow-md mb-4">
                  What Sets Katherine Taylor Apart from Other Escorts Near Me?
                </h3>
                <p className="font-body text-base sm:text-lg text-white leading-relaxed drop-shadow-md mb-6">
                  Elegance, discretion, and a decade of experience. I offer more than proximity—I offer reliability, making me the trusted choice among Bay Area escorts.
                </p>
              </article>
              <article className="text-left" role="listitem">
                <h3 className="font-heading text-xl sm:text-2xl font-light text-white leading-relaxed drop-shadow-md mb-4">
                  How to Hire an Escort
                </h3>
                <p className="font-body text-base sm:text-lg text-white leading-relaxed drop-shadow-md mb-6">
                  Begin with a brief introduction: your first name, the city, and the cadence of time you value most. I&apos;ll respond with thoughtful next steps. Discretion is always prioritized.
                </p>
                <p className="font-body text-sm text-white leading-relaxed drop-shadow-md mb-6">
                  <a 
                    href="/blog" 
                    className="underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded px-1"
                    aria-label="Learn more about hiring an escort from journal insights"
                  >
                    Learn more about how to hire an escort from my Journal insights
                  </a>
                </p>
              </article>
            </div>
            <a
              href="/faq"
              className="font-button inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 text-sm font-medium tracking-wider uppercase hover:bg-white/30 hover:scale-105 transition-all duration-300 rounded-sm drop-shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              aria-label="View all frequently asked questions"
            >
              View FAQ
            </a>
          </div>
        </div>
      </section>

      {/* Journal Section - Full Viewport Image */}
      <section className="relative h-screen overflow-hidden lazy-load" aria-label="Journal and blog section" role="region" aria-labelledby="journal-heading">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/homepage-journal.jpg"
            alt="Journal reflections from one of the Bay Area escorts – professional insights and industry expertise"
            fill
            className="object-cover"
            sizes="100vw"
            quality={80}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxOAPwCdABmX/9k="
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" aria-hidden="true"></div>

        {/* Text Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <div className="text-center max-w-4xl">
            <h2 id="journal-heading" className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight drop-shadow-lg mb-8">
              Journal – Reflections from One of the Bay Area Escorts on the Industry
            </h2>
            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-light text-white leading-relaxed drop-shadow-md mb-8">
              Is Escorting Legal? A Guide to Legality in California
            </h3>
            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-light text-white leading-relaxed drop-shadow-md mb-8">
              How to Hire an Escort – Insider Guidance from Katherine Taylor Escort
            </h3>
            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-light text-white leading-relaxed drop-shadow-md mb-8">
              Can You Date an Escort? Reflections from Within the Profession
            </h3>
            <p className="font-body text-lg sm:text-xl lg:text-2xl text-white leading-relaxed drop-shadow-md mb-8">
              Short essays and reflections—on elegance, on time, on the art of arrangement. Written for those who enjoy more than a glimpse.
            </p>
            <p className="font-body text-base sm:text-lg text-white leading-relaxed drop-shadow-md mb-8">
              <a 
                href="/blog" 
                className="underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded px-1"
                aria-label="Explore journal reflections from San Francisco escorts"
              >
                Explore my reflections as one of the San Francisco escorts in the Journal
              </a>
            </p>
            <a
              href="/blog"
              className="font-button inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 text-sm font-medium tracking-wider uppercase hover:bg-white/30 hover:scale-105 transition-all duration-300 rounded-sm drop-shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              aria-label="View the complete journal and blog"
            >
              View Journal
            </a>
          </div>
        </div>
      </section>

      {/* Gifts Section - Full Viewport Image */}
      <section className="relative h-screen overflow-hidden lazy-load" aria-label="Gifts and etiquette section" role="region" aria-labelledby="gifts-heading">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/homepage-gifts.jpg"
            alt="Thoughtful gifts for San Francisco escort arrangements – book escort services"
            fill
            className="object-cover"
            sizes="100vw"
            quality={80}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxOAPwCdABmX/9k="
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" aria-hidden="true"></div>

        {/* Text Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <div className="text-center max-w-4xl">
            <h2 id="gifts-heading" className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight drop-shadow-lg mb-8">
              Gifts – What to Give an Escort
            </h2>
            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-light text-white leading-relaxed drop-shadow-md mb-8">
              Thoughtful Gestures for Escort Arrangements in San Francisco and Beyond
            </h3>
            <p className="font-body text-lg sm:text-xl lg:text-2xl text-white leading-relaxed drop-shadow-md mb-8">
              Never required. Sometimes unforgettable.
            </p>
            <p className="font-body text-base sm:text-lg text-white leading-relaxed drop-shadow-md mb-8">
              <a 
                href="/faq" 
                className="underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded px-1"
                aria-label="Learn about gift etiquette for escorts"
              >
                What&apos;s the etiquette when gifting an escort?
              </a>
            </p>
            <a
              href="/gifts"
              className="font-button inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 text-sm font-medium tracking-wider uppercase hover:bg-white/30 hover:scale-105 transition-all duration-300 rounded-sm drop-shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              aria-label="Learn more about gift etiquette and suggestions"
            >
              View Gifts
            </a>
          </div>
        </div>
      </section>

      {/* Inquire Section - Full Viewport Image */}
      <section className="relative h-screen overflow-hidden lazy-load" aria-label="Contact and booking section" role="region" aria-labelledby="inquire-heading">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/homepage-inquire.webp"
            alt="Book escort services safely – Bay Area escorts inquiry and booking process"
            fill
            className="object-cover"
            sizes="100vw"
            quality={80}
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRnoAAABXRUJQVlA4TA4AAAAvAAAAEAcQERGIiP4HAA=="
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" aria-hidden="true"></div>

        {/* Text Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <div className="text-center max-w-4xl">
            <h2 id="inquire-heading" className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight drop-shadow-lg mb-8">
              Inquire – How to Book an Escort Online Safely
            </h2>
            <p className="font-body text-lg sm:text-xl lg:text-2xl text-white leading-relaxed drop-shadow-md mb-8">
              Begin with a brief introduction — your first name, the city, and the cadence of time you value most. I&apos;ll respond with thoughtful next steps.
            </p>
            <p className="font-body text-base sm:text-lg text-white leading-relaxed drop-shadow-md mb-8">
              <a 
                href="/faq" 
                className="underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded px-1"
                aria-label="Learn how to hire an escort discreetly"
              >
                How do I hire an escort discreetly?
              </a>
            </p>
            <p className="font-body text-base sm:text-lg text-white leading-relaxed drop-shadow-md mb-8">
              <a 
                href="/blog" 
                className="underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded px-1"
                aria-label="Discover professional insights from Bay Area escorts"
              >
                Discover professional insights from one of the Bay Area escorts
              </a>
            </p>
            <a
              href="/inquire"
              className="font-button inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 text-sm font-medium tracking-wider uppercase hover:bg-white/30 hover:scale-105 transition-all duration-300 rounded-sm drop-shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              aria-label="Book an appointment or inquire about services"
            >
              Book
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}