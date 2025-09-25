export function WebsiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Katherine Taylor",
          url: "https://katherinetaylorescort.com"
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
          name: "Homepage",
          url: "https://katherinetaylorescort.com",
          description: "Discover refined companionship among San Francisco escorts, Sacramento escorts, and Bay Area escorts."
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
          url: "https://katherinetaylorescort.com/about",
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
          url: "https://katherinetaylorescort.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "San Francisco",
            addressRegion: "CA",
            addressCountry: "US"
          },
          image: "https://katherinetaylorescort.com/wp-content/uploads/2015/01/sitecover6.jpg",
          description: "Refined companionship among San Francisco escorts, Sacramento escorts, and Bay Area escorts."
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
