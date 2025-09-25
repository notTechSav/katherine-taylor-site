export default function HomePage() {
  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Video Background */}
        {/* Note: playsInline not supported in Firefox, but Firefox defaults to inline playback */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <div className="w-full h-full bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900"></div>
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text Content */}
        <div className="relative z-10 h-full flex items-end justify-center pb-20">
          <div className="text-center">
            <div className="space-y-1">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-light text-white leading-tight drop-shadow-lg">
                AN EXPERIENCE THAT REFLECTS YOUR HIGHEST QUALITIES
              </h2>
            </div>
          </div>
        </div>

        {/* Discover Now Button */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <a
            href="/inquire"
            data-cta="inquire"
            className="font-button inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 text-xs font-medium tracking-wider uppercase hover:bg-white/30 hover:scale-105 transition-all duration-300 rounded-sm drop-shadow-md"
          >
            Discover Now
          </a>
        </div>
      </section>

      {/* About Section - Full Viewport Image */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/homepage-about.jpg"
            alt="Katherine Taylor"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Minimal Overlay */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Text Content - Bottom Positioned */}
        <div className="relative z-10 h-full flex items-end justify-center pb-20">
          <div className="text-center max-w-4xl mx-auto px-6">
            <div className="space-y-1">
              <p className="font-heading text-lg sm:text-xl lg:text-2xl font-light text-white leading-relaxed drop-shadow-md">
                FOR A DECADE, I&apos;VE HONED THE CRAFT OF ARRANGING DETAILS UNTIL THEY DISAPPEAR — LEAVING ONLY MOMENTS THAT FEEL TIMELESS. WHY THEY LINGER IS SOMETHING I EXPLAIN INSIDE…
              </p>
            </div>
          </div>
        </div>

        {/* Journey Forward Button */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <a
            href="/about"
            className="font-button inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 text-xs font-medium tracking-wider uppercase hover:bg-white/30 hover:scale-105 transition-all duration-300 rounded-sm drop-shadow-md"
          >
            Journey Forward
          </a>
        </div>
      </section>

      {/* Gallery Section - Full Viewport Image */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/homepage-gallery.webp"
            alt="Gallery Preview"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content - Bottom Positioned */}
        <div className="relative z-10 h-full flex items-end justify-center pb-20">
          <div className="text-center max-w-4xl mx-auto px-6">
            <div className="space-y-1">
              <p className="font-heading text-lg sm:text-xl lg:text-2xl font-light text-white leading-relaxed drop-shadow-md">
                IMAGES CAN ONLY SUGGEST WHAT IS BEST FELT IN PERSON. BEGIN WITH A GLIMPSE.
              </p>
            </div>
          </div>
        </div>

        {/* Enter the Gallery Button */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <a
            href="/gallery"
            className="font-button inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 text-xs font-medium tracking-wider uppercase hover:bg-white/30 hover:scale-105 transition-all duration-300 rounded-sm drop-shadow-md"
          >
            Enter the Gallery
          </a>
        </div>
      </section>

      {/* Rates Section - Full Viewport Image */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/homepage-rates.jpg"
            alt="Rates Preview"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Mild Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Text Content - Bottom Positioned */}
        <div className="relative z-10 h-full flex items-end justify-center pb-20">
          <div className="text-center max-w-4xl mx-auto px-6">
            <div className="space-y-1">
              <p className="font-heading text-lg sm:text-xl lg:text-2xl font-light text-white leading-relaxed drop-shadow-md">
                DINNER, OVERNIGHT, A WEEKEND ESCAPE. ALWAYS UNHURRIED, ALWAYS PREPARED. THE DETAILS ARE WRITTEN WHERE THEY BELONG.
              </p>
            </div>
          </div>
        </div>

        {/* View Rates Button */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <a
            href="/rates"
            className="font-button inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 text-xs font-medium tracking-wider uppercase hover:bg-white/30 hover:scale-105 transition-all duration-300 rounded-sm drop-shadow-md"
          >
            View Rates
          </a>
        </div>
      </section>

      {/* Journal Section - Full Viewport Image */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/homepage-journal.jpg"
            alt="Journal Preview"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content - Bottom Positioned */}
        <div className="relative z-10 h-full flex items-end justify-center pb-20">
          <div className="text-center max-w-4xl mx-auto px-6">
            <div className="space-y-1">
              <p className="font-heading text-lg sm:text-xl lg:text-2xl font-light text-white leading-relaxed drop-shadow-md">
                SHORT ESSAYS AND REFLECTIONS — ON ELEGANCE, ON TIME, ON THE ART OF ARRANGEMENT. WRITTEN FOR THOSE WHO ENJOY MORE THAN A GLIMPSE.
              </p>
            </div>
          </div>
        </div>

        {/* Explore The Journal Button */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <a
            href="/blog"
            className="font-button inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 text-xs font-medium tracking-wider uppercase hover:bg-white/30 hover:scale-105 transition-all duration-300 rounded-sm drop-shadow-md"
          >
            Explore The Journal
          </a>
        </div>
      </section>

      {/* FAQ Section - Full Viewport Image */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/homepage-faq.webp"
            alt="FAQ Preview"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Slight Overlay */}
        <div className="absolute inset-0 bg-black/15"></div>

        {/* Text Content - Bottom Positioned */}
        <div className="relative z-10 h-full flex items-end justify-center pb-20">
          <div className="text-center max-w-4xl mx-auto px-6">
            <div className="space-y-1">
              <p className="font-heading text-lg sm:text-xl lg:text-2xl font-light text-white leading-relaxed drop-shadow-md">
                CLARITY WITHOUT CLUTTER. QUESTIONS ABOUT CADENCE, DISCRETION, OR TRAVEL? THE ANSWERS ARE COLLECTED HERE.
              </p>
            </div>
          </div>
        </div>

        {/* Read FAQ Button */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <a
            href="/faq"
            className="font-button inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 text-xs font-medium tracking-wider uppercase hover:bg-white/30 hover:scale-105 transition-all duration-300 rounded-sm drop-shadow-md"
          >
            Read FAQ
          </a>
        </div>
      </section>

      {/* Gifts Section - Full Viewport Image */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/homepage-gifts.jpg"
            alt="Gifts Preview"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content - Bottom Positioned */}
        <div className="relative z-10 h-full flex items-end justify-center pb-20">
          <div className="text-center max-w-4xl mx-auto px-6">
            <div className="space-y-1">
              <p className="font-heading text-lg sm:text-xl lg:text-2xl font-light text-white leading-relaxed drop-shadow-md">
                NEVER REQUIRED. SOMETIMES UNFORGETTABLE.
              </p>
            </div>
          </div>
        </div>

        {/* View Gifts Button */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <a
            href="/gifts"
            className="font-button inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 text-xs font-medium tracking-wider uppercase hover:bg-white/30 hover:scale-105 transition-all duration-300 rounded-sm drop-shadow-md"
          >
            View Gifts
            </a>
          </div>
        </section>

      {/* Inquire Section - Full Viewport Image */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/homepage-inquire.webp"
            alt="Inquire Preview"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content - Bottom Positioned */}
        <div className="relative z-10 h-full flex items-end justify-center pb-20">
          <div className="text-center max-w-4xl mx-auto px-6">
            <div className="space-y-1">
              <p className="font-heading text-lg sm:text-xl lg:text-2xl font-light text-white leading-relaxed drop-shadow-md">
                BEGIN WITH A BRIEF INTRODUCTION — YOUR FIRST NAME, THE CITY, AND THE CADENCE OF TIME YOU VALUE MOST. I&apos;LL RESPOND WITH THOUGHTFUL NEXT STEPS.
              </p>
            </div>
          </div>
        </div>

        {/* Inquire Button */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <a
            href="/inquire"
            className="font-button inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 text-xs font-medium tracking-wider uppercase hover:bg-white/30 hover:scale-105 transition-all duration-300 rounded-sm drop-shadow-md"
          >
            Inquire
          </a>
        </div>
      </section>

    </div>
    );
  }