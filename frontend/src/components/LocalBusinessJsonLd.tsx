import Script from "next/script";

interface LocalBusinessJsonLdProps {
  city: string;
  state: string;
  description: string;
  url: string;
}

export default function LocalBusinessJsonLd({
  city,
  state,
  description,
  url,
}: LocalBusinessJsonLdProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Super Solar Energy - ${city}`,
    "description": description,
    "url": url,
    "telephone": "1300 09 09 84",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "17 Short Street",
      "addressLocality": city,
      "addressRegion": state,
      "postalCode": "3188",
      "addressCountry": "AU",
    },
    "areaServed": {
      "@type": "City",
      "name": city,
    },
    "priceRange": "$$",
    "openingHours": "Mo-Sa 08:00-18:00",
    "brand": {
      "@type": "Brand",
      "name": "Super Solar Energy",
    },
    "parentOrganization": {
      "@type": "Organization",
      "name": "Super Solar Energy",
      "url": "https://supersolarenergy.com.au",
    },
    "serviceType": [
      "Solar Battery Installation",
      "Solar Panel Installation",
      "Battery Storage Systems",
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "927",
    },
  };

  return (
    <Script
      id={`local-business-${city.toLowerCase().replace(/\s/g, "-")}`}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
