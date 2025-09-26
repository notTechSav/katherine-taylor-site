import Image from "next/image";
import { ReactNode } from "react";

interface SplitSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  additionalText?: string;
  imageSrc: string;
  altText: string;
  reverse?: boolean;
  children?: ReactNode;
  buttonText?: string;
  buttonHref?: string;
  buttonAriaLabel?: string;
  sectionAriaLabel?: string;
  headingId?: string;
}

export default function SplitSection({
  title,
  subtitle,
  description,
  additionalText,
  imageSrc,
  altText,
  reverse = false,
  children,
  buttonText,
  buttonHref,
  buttonAriaLabel,
  sectionAriaLabel,
  headingId,
}: SplitSectionProps) {
  return (
    <section 
      className="relative min-h-screen overflow-hidden lazy-load" 
      aria-label={sectionAriaLabel || `${title} section`}
      role="region"
      aria-labelledby={headingId}
    >
      <div className={`split-section ${reverse ? 'reverse' : ''}`}>
        {/* Text Content */}
        <div className="flex-1 split-text-content">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 
              id={headingId}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light text-neutral-900 leading-tight mb-8"
            >
              {title}
            </h2>
            
            {subtitle && (
              <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-light text-neutral-800 leading-relaxed mb-6">
                {subtitle}
              </h3>
            )}
            
            {description && (
              <p className="font-body text-lg sm:text-xl lg:text-2xl text-neutral-700 leading-relaxed mb-8">
                {description}
              </p>
            )}
            
            {additionalText && (
              <div className="font-body text-base sm:text-lg text-neutral-600 leading-relaxed mb-8">
                {additionalText}
              </div>
            )}
            
            {children}
            
            {buttonText && buttonHref && (
              <a
                href={buttonHref}
                className="font-button inline-block bg-neutral-900 text-white px-8 py-4 text-sm font-medium tracking-wider uppercase hover:bg-neutral-800 hover:scale-105 transition-all duration-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-opacity-50"
                aria-label={buttonAriaLabel || buttonText}
              >
                {buttonText}
              </a>
            )}
          </div>
        </div>

        {/* Portrait Image */}
        <div className="flex-1 relative min-h-[50vh] lg:min-h-screen">
          <Image
            src={imageSrc}
            alt={altText}
            fill
            className="portrait-image"
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 50vw"
            quality={90}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxOAPwCdABmX/9k="
          />
        </div>
      </div>
    </section>
  );
}
