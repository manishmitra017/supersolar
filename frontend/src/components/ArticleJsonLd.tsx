import Script from "next/script";

interface ArticleJsonLdProps {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
}

const structuredDataForArticle = (props: ArticleJsonLdProps) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": props.title,
  "description": props.description,
  "url": props.url,
  "image": `https://supersolarenergy.com.au${props.image || "/company-logo.png"}`,
  "datePublished": props.datePublished || "2025-01-01",
  "dateModified": props.dateModified || "2025-06-01",
  "author": {
    "@type": "Organization",
    "name": "Super Solar Energy",
    "url": "https://supersolarenergy.com.au",
  },
  "publisher": {
    "@type": "Organization",
    "name": "Super Solar Energy",
    "logo": {
      "@type": "ImageObject",
      "url": "https://supersolarenergy.com.au/company-logo.png",
    },
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": props.url,
  },
});

export default function ArticleJsonLd(props: ArticleJsonLdProps) {
  const data = structuredDataForArticle(props);

  return (
    <Script
      id={`article-jsonld-${props.url.split("/").pop()}`}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
