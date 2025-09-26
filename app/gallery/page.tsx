import Image from "next/image";

export const metadata = {
  title: "Gallery – Visual Reflections of One of San Francisco's Escorts",
  description: "Escorts Near Me – A Glimpse into the Moments That Define Elegance. Images can only suggest what is best felt in person. Begin with a glimpse.",
};

export default function GalleryPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Gallery – Visual Reflections of One of San Francisco&apos;s Escorts
        </h1>
        <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-neutral-600">
          Escorts Near Me – A Glimpse into the Moments That Define Elegance
        </h2>
        <p className="text-lg leading-relaxed text-neutral-700 max-w-2xl mx-auto">
          Images can only suggest what is best felt in person. Begin with a glimpse.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {/* Gallery Image 1 - Portrait */}
        <div className="aspect-square relative rounded-lg overflow-hidden">
          <Image
            src="/homepage-about.jpg"
            alt="San Francisco escorts gallery – elegant portrait in natural light showcasing refined companionship"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={80}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxOAPwCdABmX/9k="
          />
        </div>
        
        {/* Gallery Image 2 - Lifestyle */}
        <div className="aspect-square relative rounded-lg overflow-hidden">
          <Image
            src="/homepage-gallery.webp"
            alt="Sacramento escorts gallery – sophisticated evening showcasing Bay Area escort services"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={80}
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRnoAAABXRUJQVlA4TA4AAAAvAAAAEAcQERGIiP4HAA=="
          />
        </div>
        
        {/* Gallery Image 3 - City View */}
        <div className="aspect-square relative rounded-lg overflow-hidden">
          <Image
            src="/homepage-rates.jpg"
            alt="San Francisco escorts gallery – cityscape backdrop showcasing escort services"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={80}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxOAPwCdABmX/9k="
          />
        </div>
        
        {/* Gallery Image 4 - Elegant Setting */}
        <div className="aspect-square relative rounded-lg overflow-hidden">
          <Image
            src="/homepage-faq.webp"
            alt="Bay Area escorts gallery – luxurious setting showcasing escort rates and services"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={80}
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRnoAAABXRUJQVlA4TA4AAAAvAAAAEAcQERGIiP4HAA=="
          />
        </div>
        
        {/* Gallery Image 5 - Companionship */}
        <div className="aspect-square relative rounded-lg overflow-hidden">
          <Image
            src="/homepage-gifts.jpg"
            alt="Sacramento escorts gallery – discreet companion services for booking escort services online"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={80}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxOAPwCdABmX/9k="
          />
        </div>
        
        {/* Gallery Image 6 - Professional */}
        <div className="aspect-square relative rounded-lg overflow-hidden">
          <Image
            src="/homepage-inquire.webp"
            alt="San Francisco escorts gallery – professional companion with FAQ and frequently asked questions answered"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={80}
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRnoAAABXRUJQVlA4TA4AAAAvAAAAEAcQERGIiP4HAA=="
          />
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-neutral-600 mb-6">
          For a more complete understanding of the experience, begin with an introduction.
        </p>
        <a
          href="/inquire"
          data-cta="inquire"
          className="inline-flex items-center rounded-full bg-black text-white px-8 py-3 text-base font-medium hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
          aria-label="Inquire about Katherine Taylor's services"
        >
          Inquire
        </a>
      </div>
    </main>
  );
}