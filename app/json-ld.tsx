export function WebsiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Katherine Taylor",
          url: "https://katherinetaylor.com",
          description: "Discover refined companionship with San Francisco escorts, Sacramento escorts, and Bay Area escorts. Katherine Taylor offers presence—not just proximity—for those seeking escorts near me.",
          potentialAction: {
            "@type": "SearchAction",
            "target": "https://katherinetaylor.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }),
      }}
    />
  );
}

export function WebPageJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "San Francisco Escorts – Refined Companionship",
          url: "https://katherinetaylor.com",
          description: "Discover refined companionship with San Francisco escorts, Sacramento escorts, and Bay Area escorts. Katherine Taylor offers presence—not just proximity—for those seeking escorts near me.",
          keywords: ["San Francisco escorts", "Sacramento escorts", "Bay Area escorts", "escorts near me", "refined companionship"],
          isPartOf: {
            "@type": "WebSite",
            "name": "Katherine Taylor",
            "url": "https://katherinetaylor.com"
          }
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
          url: "https://katherinetaylor.com/about",
          description: "Professional companion offering refined companionship among San Francisco escorts, Sacramento escorts, and Bay Area escorts. Elegance and discretion define the experience.",
          image: "https://katherinetaylor.com/opengraph-image",
          address: {
            "@type": "PostalAddress",
            addressLocality: "San Francisco",
            addressRegion: "CA",
            addressCountry: "US"
          },
          jobTitle: "Professional Companion",
          worksFor: {
            "@type": "LocalBusiness",
            "name": "Katherine Taylor"
          },
          sameAs: []
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
          name: "Katherine Taylor",
          url: "https://katherinetaylor.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "San Francisco",
            addressRegion: "CA",
            addressCountry: "US"
          },
          image: "https://katherinetaylor.com/opengraph-image",
          description: "Discover refined companionship with San Francisco escorts, Sacramento escorts, and Bay Area escorts. Katherine Taylor offers presence—not just proximity—for those seeking escorts near me.",
          keywords: ["San Francisco escorts", "Sacramento escorts", "Bay Area escorts", "escorts near me", "refined companionship"],
          serviceArea: {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": "37.7749",
              "longitude": "-122.4194"
            },
            "geoRadius": "50000"
          },
          areaServed: [
            "San Francisco, CA",
            "Sacramento, CA",
            "Bay Area, CA"
          ]
        })
      }}
    />
  );
}

export function FAQPageJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Where can I find San Francisco escorts?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Katherine Taylor offers refined companionship among San Francisco escorts, Sacramento escorts, and Bay Area escorts. Discover elegance among escorts near me."
              }
            },
            {
              "@type": "Question",
              "name": "What makes Katherine Taylor unique among Sacramento escorts?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Elegance, discretion, and poetic presence define the experience. Katherine Taylor offers presence, not just proximity—elegance among Bay Area escorts."
              }
            },
            {
              "@type": "Question",
              "name": "Are you available as a Bay Area escort?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. I offer discreet companionship throughout the Bay Area, including San Francisco and Sacramento. Travel arrangements beyond California are also available with thoughtful planning."
              }
            },
            {
              "@type": "Question",
              "name": "What if you're nowhere near me when I search 'escorts near me'?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Aside from Sacramento or San Francisco, I'm available for travel arrangements."
              }
            },
            {
              "@type": "Question",
              "name": "What Sets Katherine Taylor Apart from Other Escorts Near Me?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Elegance, discretion, and a decade of experience. I offer more than proximity—I offer reliability, making me the trusted choice among Bay Area escorts."
              }
            },
            {
              "@type": "Question",
              "name": "How to Hire an Escort",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Begin with a brief introduction: your first name, the city, and the cadence of time you value most. I'll respond with thoughtful next steps. Discretion is always prioritized."
              }
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
              item: "https://katherinetaylor.com"
            },
            {
              "@type": "ListItem", 
              position: 2,
              name: "About",
              item: "https://katherinetaylor.com/about"
            },
            {
              "@type": "ListItem",
              position: 3, 
              name: "Gallery",
              item: "https://katherinetaylor.com/gallery"
            },
            {
              "@type": "ListItem",
              position: 4,
              name: "Rates", 
              item: "https://katherinetaylor.com/rates"
            },
            {
              "@type": "ListItem",
              position: 5,
              name: "FAQ",
              item: "https://katherinetaylor.com/faq"
            },
            {
              "@type": "ListItem",
              position: 6,
              name: "Gifts",
              item: "https://katherinetaylor.com/gifts"
            },
            {
              "@type": "ListItem",
              position: 7,
              name: "Journal",
              item: "https://katherinetaylor.com/blog"
            },
            {
              "@type": "ListItem",
              position: 8,
              name: "Inquire",
              item: "https://katherinetaylor.com/inquire"
            }
          ]
        })
      }}
    />
  );
}
