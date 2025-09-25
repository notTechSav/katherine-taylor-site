export function WebsiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Katherine Taylor - San Francisco & Sacramento Escorts",
          url: "https://katherinetaylor.co",
          description: "Elegant San Francisco & Sacramento escorts offering refined companionship across the Bay Area",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://katherinetaylor.co/inquire?q={search_term_string}",
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
          url: "https://katherinetaylor.co",
          description: "Katherine Taylor is a trusted name among San Francisco escorts and Sacramento escorts, offering elegant companionship across California.",
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
            "https://katherinetaylor.co/inquire",
            "https://katherinetaylor.co/blog",
            "https://katherinetaylor.co/gallery",
            "https://katherinetaylor.co/rates"
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
            "Bay Area escorts",
            "Discretion and privacy",
            "Travel companionship"
          ],
          hasOccupation: {
            "@type": "Occupation",
            name: "Professional Companion",
            description: "Providing elegant companionship and escort services among San Francisco escorts and Sacramento escorts"
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
          "@type": "LocalBusiness",
          name: "Katherine Taylor Escort Services",
          url: "https://katherinetaylor.co",
          description: "Elegant San Francisco & Sacramento escorts offering refined companionship across the Bay Area",
          logo: "https://katherinetaylor.co/icon.svg",
          image: "https://katherinetaylor.co/homepage-about.jpg",
          sameAs: [
            "https://katherinetaylor.co/inquire",
            "https://katherinetaylor.co/blog"
          ],
          brand: {
            "@type": "Brand",
            name: "The Katherine Taylor Experience"
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
          serviceType: "Professional Escort Services",
          contactPoint: [
            {
              "@type": "ContactPoint",
              contactType: "customer service",
              email: "inquiries@katherinetaylor.co",
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
              item: "https://katherinetaylor.co"
            },
            {
              "@type": "ListItem", 
              position: 2,
              name: "About",
              item: "https://katherinetaylor.co/about"
            },
            {
              "@type": "ListItem",
              position: 3, 
              name: "Gallery",
              item: "https://katherinetaylor.co/gallery"
            },
            {
              "@type": "ListItem",
              position: 4,
              name: "Rates", 
              item: "https://katherinetaylor.co/rates"
            },
            {
              "@type": "ListItem",
              position: 5,
              name: "FAQ",
              item: "https://katherinetaylor.co/faq"
            },
            {
              "@type": "ListItem",
              position: 6,
              name: "Gifts",
              item: "https://katherinetaylor.co/gifts"
            },
            {
              "@type": "ListItem",
              position: 7,
              name: "Journal",
              item: "https://katherinetaylor.co/blog"
            },
            {
              "@type": "ListItem",
              position: 8,
              name: "Inquire",
              item: "https://katherinetaylor.co/inquire"
            }
          ]
        })
      }}
    />
  );
}
