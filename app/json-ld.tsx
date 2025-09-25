export function WebsiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Katherine Taylor",
          url: "https://www.katherinetaylorescort.com",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://www.katherinetaylorescort.com/inquire?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }),
      }}
    />
  );
}

export function PersonJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Katherine Taylor",
          url: "https://www.katherinetaylorescort.com",
          description: "Professional escort services in San Francisco and Sacramento. Elegant companionship with discretion and refinement.",
          jobTitle: "Professional Companion",
          worksFor: {
            "@type": "Organization",
            name: "Katherine Taylor Escort Services"
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: "San Francisco",
            addressRegion: "CA",
            addressCountry: "US"
          },
          areaServed: [
            {
              "@type": "City",
              name: "San Francisco"
            },
            {
              "@type": "City", 
              name: "Sacramento"
            },
            {
              "@type": "Place",
              name: "Bay Area"
            }
          ],
          sameAs: [
            "https://www.katherinetaylorescort.com/inquire",
            "https://www.katherinetaylorescort.com/blog",
            "https://www.katherinetaylorescort.com/gallery",
            "https://www.katherinetaylorescort.com/rates"
          ],
          brand: {
            "@type": "Brand",
            name: "The Katherine Taylor Experience",
          },
          knowsAbout: [
            "Professional companionship",
            "Elegant escort services", 
            "San Francisco escorts",
            "Sacramento escorts",
            "Bay Area escort services",
            "Discretion and privacy",
            "Travel companionship"
          ],
          hasOccupation: {
            "@type": "Occupation",
            name: "Professional Companion",
            description: "Providing elegant companionship and escort services in San Francisco and Sacramento"
          }
        }),
      }}
    />
  );
}

export function OrganizationJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Katherine Taylor",
          url: "https://www.katherinetaylorescort.com",
          logo: "https://www.katherinetaylorescort.com/icon.svg", // update if you use PNG
          sameAs: [
            "https://www.katherinetaylorescort.com/inquire",
            "https://www.katherinetaylorescort.com/blog"
          ],
          brand: {
            "@type": "Brand",
            name: "The Katherine Taylor Experience"
          },
          contactPoint: [
            {
              "@type": "ContactPoint",
              contactType: "customer service",
              email: "inquiries@katherinetaylorescort.com",
              availableLanguage: ["en"]
            }
          ]
        })
      }}
    />
  );
}

export function BreadcrumbJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.katherinetaylorescort.com"
            },
            {
              "@type": "ListItem", 
              position: 2,
              name: "About",
              item: "https://www.katherinetaylorescort.com/about"
            },
            {
              "@type": "ListItem",
              position: 3, 
              name: "Gallery",
              item: "https://www.katherinetaylorescort.com/gallery"
            },
            {
              "@type": "ListItem",
              position: 4,
              name: "Rates", 
              item: "https://www.katherinetaylorescort.com/rates"
            },
            {
              "@type": "ListItem",
              position: 5,
              name: "FAQ",
              item: "https://www.katherinetaylorescort.com/faq"
            },
            {
              "@type": "ListItem",
              position: 6,
              name: "Gifts",
              item: "https://www.katherinetaylorescort.com/gifts"
            },
            {
              "@type": "ListItem",
              position: 7,
              name: "Journal",
              item: "https://www.katherinetaylorescort.com/blog"
            },
            {
              "@type": "ListItem",
              position: 8,
              name: "Inquire",
              item: "https://www.katherinetaylorescort.com/inquire"
            }
          ]
        })
      }}
    />
  );
}
