import Image from "next/image";
import HeroVideo from "./components/HeroVideo";
import SplitSection from "./components/SplitSection";

export default function HomePage() {
  return (
    <main id="main-content" className="h-screen overflow-y-scroll bg-gradient-to-br from-neutral-50 via-white to-neutral-100" role="main">
      {/* Primary H1 - SEO Optimized */}
      <h1 className="sr-only">San Francisco Escorts – Refined Companionship</h1>
      
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden" aria-label="Hero section with video background" role="region" aria-labelledby="hero-heading">
        {/* Video Background */}
        <HeroVideo />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center">
          <div className="text-center">
            <h2 id="hero-heading" className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight drop-shadow-lg mb-8">
              Sacramento Escorts & Bay Area Elegance
            </h2>
            <h3 className="font-heading text-lg sm:text-xl lg:text-2xl font-light text-white leading-relaxed drop-shadow-md">
              Escorts Near Me – A Poetic Glimpse into Presence
            </h3>
            <h3 className="font-heading text-base sm:text-lg lg:text-xl font-light text-white leading-relaxed drop-shadow-md mt-4">
              Why San Francisco Escorts Choose Elegance
            </h3>
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

      {/* About Section - Split Layout */}
      <SplitSection
        title="Sacramento Escorts & Bay Area Escorts"
        subtitle="Bay Area Elegance – Among San Francisco Escorts Known for Refined Companionship"
        description="As one of the Bay Area escorts known for elegance and discretion, I offer more than proximity—I offer presence."
        additionalText={
          <>
              Explore refined companionship with 
            <a href="/journal/san-francisco-escorts" className="underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-opacity-50 rounded px-1">San Francisco escorts</a>, 
            <a href="/journal/sacramento-escorts" className="underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-opacity-50 rounded px-1">Sacramento escorts</a>, and 
            <a href="/journal/bay-area-escorts" className="underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-opacity-50 rounded px-1">Bay Area escorts</a>. 
            For those searching <a href="/journal/escorts-near-me" className="underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-opacity-50 rounded px-1">escorts near me</a>, Katherine Taylor offers presence, not just proximity.
          </>
        }
        imageSrc="/images/san-francisco-escort.webp.jpg"
        altText="Elegant Katherine Taylor in San Francisco - a portrait of refined companionship and Bay Area sophistication"
        buttonText="Journey Forward"
        buttonHref="/about"
        buttonAriaLabel="Learn more about Katherine Taylor"
        sectionAriaLabel="About Katherine Taylor section"
        headingId="about-heading"
      />

      {/* Gallery Section - Split Layout (Reversed) */}
      <SplitSection
        title="Bay Area Escorts Gallery"
        subtitle="Escorts Near Me – A Glimpse into the Moments That Define Elegance"
        description="Images can only suggest what is best felt in person. Begin with a glimpse."
        additionalText={
              <a 
                href="/gallery" 
            className="underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-opacity-50 rounded px-1"
                aria-label="View Bay Area escorts gallery"
              >
                Discover the elegance of <strong>Bay Area escorts</strong> through our curated gallery
              </a>
        }
        imageSrc="/images/escorts-near-me-poetic-gaze.webp.jpg"
        altText="San Francisco escorts gallery – elegant moment showcasing refined companionship and sophisticated Bay Area elegance"
        reverse={true}
        buttonText="View Gallery"
        buttonHref="/gallery"
        buttonAriaLabel="View the full gallery of photos"
        sectionAriaLabel="Gallery section"
        headingId="gallery-heading"
      />

      {/* Rates Section - Split Layout */}
      <SplitSection
        title="Sacramento Escorts Rates"
        description="Rates reflect the quality of time—not just its length. Each arrangement is tailored to your preferences."
        additionalText={
          <a 
            href="/rates" 
            className="underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-opacity-50 rounded px-1"
            aria-label="View Sacramento escorts rates"
          >
            Explore detailed rates for <strong>Sacramento escorts</strong> and premium companionship
          </a>
        }
        imageSrc="/images/sacramento-escort-posing.jpg"
        altText="Sacramento escorts – Katherine Taylor's refined companionship rates, elegant pricing for Bay Area escort services and sophisticated companionship"
        buttonText="View Rates"
        buttonHref="/rates"
        buttonAriaLabel="View detailed rates and pricing information"
        sectionAriaLabel="Rates and pricing section"
        headingId="rates-heading"
      >
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-8" role="list" aria-label="Service offerings">
          <article className="text-left" role="listitem">
            <h3 className="font-heading text-xl sm:text-2xl font-light text-neutral-800 leading-relaxed mb-4">
                  Dinner Engagements – Elegant Evenings with Katherine Taylor
                </h3>
              </article>
          <article className="text-left" role="listitem">
            <h3 className="font-heading text-xl sm:text-2xl font-light text-neutral-800 leading-relaxed mb-4">
                  Overnight Arrangements – Unhurried Time in Sacramento
                </h3>
              </article>
          <article className="text-left" role="listitem">
            <h3 className="font-heading text-xl sm:text-2xl font-light text-neutral-800 leading-relaxed mb-4">
                  Weekend Escapes – Travelable Companionship If I Don&apos;t Pop Up When You Search &apos;Escorts Near Me&apos;
                </h3>
              </article>
            </div>
      </SplitSection>

      {/* FAQ Section - Split Layout (Reversed) */}
      <SplitSection
        title="Bay Area Escorts FAQ"
        description="Find answers to common questions about professional companionship and Bay Area escort services."
        imageSrc="/images/bay-area-escort-looking-sharp.jpg"
        altText="FAQ about escorts near me – Katherine Taylor's professional insights on Bay Area escort services and Sacramento escorts"
        reverse={true}
        buttonText="View FAQ"
        buttonHref="/faq"
        buttonAriaLabel="View all frequently asked questions"
        sectionAriaLabel="Frequently asked questions section"
        headingId="faq-heading"
      >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8" role="list" aria-label="Frequently asked questions">
              <article className="text-left" role="listitem">
            <h3 className="font-heading text-xl sm:text-2xl font-light text-neutral-800 leading-relaxed mb-4">
                  What if you&apos;re nowhere near me when I search &quot;escorts near me&quot;?
                </h3>
            <p className="font-body text-base sm:text-lg text-neutral-600 leading-relaxed mb-6">
                  Aside from Sacramento or San Francisco, I&apos;m available for travel arrangements.
                </p>
              </article>
              <article className="text-left" role="listitem">
            <h3 className="font-heading text-xl sm:text-2xl font-light text-neutral-800 leading-relaxed mb-4">
                  Are You Available as a Bay Area Escort?
                </h3>
            <p className="font-body text-base sm:text-lg text-neutral-600 leading-relaxed mb-6">
                  Yes. I offer discreet companionship throughout the Bay Area, including San Francisco and Sacramento. Travel arrangements beyond California are also available with thoughtful planning.
                </p>
              </article>
              <article className="text-left" role="listitem">
            <h3 className="font-heading text-xl sm:text-2xl font-light text-neutral-800 leading-relaxed mb-4">
                  What Sets Katherine Taylor Apart from Other Escorts Near Me?
                </h3>
            <p className="font-body text-base sm:text-lg text-neutral-600 leading-relaxed mb-6">
                  Elegance, discretion, and a decade of experience. I offer more than proximity—I offer reliability, making me the trusted choice among Bay Area escorts.
                </p>
              </article>
              <article className="text-left" role="listitem">
            <h3 className="font-heading text-xl sm:text-2xl font-light text-neutral-800 leading-relaxed mb-4">
                  How to Hire an Escort
                </h3>
            <p className="font-body text-base sm:text-lg text-neutral-600 leading-relaxed mb-6">
                  Begin with a brief introduction: your first name, the city, and the cadence of time you value most. I&apos;ll respond with thoughtful next steps. Discretion is always prioritized.
                </p>
            <p className="font-body text-sm text-neutral-500 leading-relaxed mb-6">
                  <a 
                    href="/faq" 
                className="underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-opacity-50 rounded px-1"
                    aria-label="Learn about escorts near me"
                  >
                    Find answers about <strong>escorts near me</strong> and professional companionship
                  </a>
                </p>
              </article>
            </div>
      </SplitSection>

      {/* Journal Section - Split Layout */}
      <SplitSection
        title="San Francisco Escorts Journal"
        subtitle="Companionship Insights – Reflections from One of the Bay Area Escorts"
        description="Short essays and reflections—on elegance, on time, on the art of arrangement. Written for those who enjoy more than a glimpse."
        additionalText={
          <a 
            href="/blog" 
            className="underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-opacity-50 rounded px-1"
            aria-label="Explore journal reflections from San Francisco escorts"
          >
            Explore professional insights from <strong>San Francisco escorts</strong> in the Journal
          </a>
        }
        imageSrc="/images/san-francisco-escort-working.jpg"
        altText="Journal reflections from San Francisco escorts – Katherine Taylor's professional insights on Bay Area escort industry and companionship"
        buttonText="View Journal"
        buttonHref="/blog"
        buttonAriaLabel="View the complete journal and blog"
        sectionAriaLabel="Journal and blog section"
        headingId="journal-heading"
      >
        <div className="space-y-6 mb-8">
          <h3 className="font-heading text-xl sm:text-2xl font-light text-neutral-800 leading-relaxed">
              Professional Insights from San Francisco Escorts
            </h3>
          <h3 className="font-heading text-xl sm:text-2xl font-light text-neutral-800 leading-relaxed">
              Is Escorting Legal? A Guide to Legality in California
            </h3>
          <h3 className="font-heading text-xl sm:text-2xl font-light text-neutral-800 leading-relaxed">
              How to Hire an Escort – Insider Guidance from Katherine Taylor Escort
            </h3>
          <h3 className="font-heading text-xl sm:text-2xl font-light text-neutral-800 leading-relaxed">
              Can You Date an Escort? Reflections from Within the Profession
            </h3>
        </div>
      </SplitSection>

      {/* Gifts Section - Split Layout (Reversed) */}
      <SplitSection
        title="Bay Area Escorts Gifts"
        subtitle="Thoughtful Gestures for Escort Arrangements in San Francisco and Beyond"
        description="Never required. Sometimes unforgettable."
        additionalText={
              <a 
                href="/faq" 
            className="underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-opacity-50 rounded px-1"
                aria-label="Learn about gift etiquette for escorts"
              >
                What&apos;s the etiquette when gifting an escort?
              </a>
        }
        imageSrc="/images/escorts-near-me-posing-classy.jpg"
        altText="Thoughtful gifts for Bay Area escorts – Katherine Taylor's elegant gift preferences for refined companionship arrangements"
        reverse={true}
        buttonText="View Gifts"
        buttonHref="/gifts"
        buttonAriaLabel="Learn more about gift etiquette and suggestions"
        sectionAriaLabel="Gifts and etiquette section"
        headingId="gifts-heading"
      />

      {/* Inquire Section - Split Layout */}
      <SplitSection
        title="Book San Francisco Escorts"
        description="Begin with a brief introduction — your first name, the city, and the cadence of time you value most. I'll respond with thoughtful next steps."
        additionalText={
          <>
            <div className="font-body text-base sm:text-lg text-neutral-600 leading-relaxed mb-4">
              <a 
                href="/faq" 
                className="underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-opacity-50 rounded px-1"
                aria-label="Learn how to hire an escort discreetly"
              >
                How do I hire an escort discreetly?
              </a>
            </div>
            <div className="font-body text-base sm:text-lg text-neutral-600 leading-relaxed mb-8">
              <a 
                href="/blog" 
                className="underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-opacity-50 rounded px-1"
                aria-label="Discover professional insights from Bay Area escorts"
              >
                Discover professional insights from one of the <strong>Bay Area escorts</strong>
            </a>
          </div>
          </>
        }
        imageSrc="/images/san-francisco-escort-posing.jpg"
        altText="Book escort services safely – Katherine Taylor's refined booking process for Bay Area escorts and Sacramento escorts"
        buttonText="Book"
        buttonHref="/inquire"
        buttonAriaLabel="Book an appointment or inquire about services"
        sectionAriaLabel="Contact and booking section"
        headingId="inquire-heading"
      />
    </main>
  );
}