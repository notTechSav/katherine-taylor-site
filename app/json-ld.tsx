export function WebsiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Katherine Taylor",
          url: "https://katherinetaylorescort.com",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://katherinetaylorescort.com/inquire?q={search_term_string}",
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
          url: "https://katherinetaylorescort.com",
          sameAs: [
            "https://katherinetaylorescort.com/inquire",
            "https://katherinetaylorescort.com/blog",
          ],
          brand: {
            "@type": "Brand",
            name: "The Katherine Taylor Experience",
          },
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
          url: "https://katherinetaylorescort.com",
          logo: "https://katherinetaylorescort.com/icon.svg", // update if you use PNG
          sameAs: [
            "https://katherinetaylorescort.com/inquire",
            "https://katherinetaylorescort.com/blog"
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
