import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Solar Battery Systems Australia | Super Solar Energy | Government Rebates Available",
  description: "Australia's trusted solar battery specialists. Save up to $8,000 with government rebates on premium solar battery systems. Free quotes, professional installation, 10-year warranty. Serving Melbourne, Sydney, Brisbane nationwide.",
  keywords: "solar battery Australia, solar battery installation cost, Tesla Powerwall 3 Australia, government battery rebate 2025, solar battery Melbourne Sydney Brisbane, home battery systems, FoxESS battery, GoodWe battery, BYD battery, solar energy storage, battery backup power, solar battery rebate NSW Victoria, Powerwall installation Australia, solar battery price, off grid solar battery, residential battery storage, solar battery financing, CEC approved battery installer",
  authors: [{ name: "Super Solar Energy" }],
  creator: "Super Solar Energy",
  publisher: "Super Solar Energy",
  robots: "index, follow",
  openGraph: {
    title: "Solar Battery Systems Australia | Government Rebates Up To $8,000",
    description: "Premium solar battery systems with professional installation across Australia. Government rebates available. Free consultation and 10-year warranty included.",
    url: "https://supersolarenergy.com.au",
    siteName: "Super Solar Energy",
    images: [
      {
        url: "/company-logo.png",
        width: 1200,
        height: 630,
        alt: "Super Solar Energy - Solar Battery Systems Australia",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Battery Systems Australia | Super Solar Energy",
    description: "Premium solar battery systems with government rebates up to $8,000. Professional installation across Australia.",
    creator: "@SuperSolarMelb",
    images: ["/company-logo.png"],
  },
  icons: {
    icon: '/company-logo.png',
    shortcut: '/company-logo.png',
    apple: '/company-logo.png',
  },
  metadataBase: new URL('https://supersolarenergy.com.au'),
  alternates: {
    canonical: "/",
  },
};

// Static JSON-LD schema data (no user input - safe for inline script)
const organizationSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Super Solar Energy",
  "url": "https://supersolarenergy.com.au",
  "logo": "https://supersolarenergy.com.au/company-logo.png",
  "description": "Australia's trusted solar battery specialists. Premium solar battery systems with professional installation and government rebates.",
  "telephone": "1300 09 09 84",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "130 Bridge Road",
    "addressLocality": "Richmond",
    "addressRegion": "VIC",
    "postalCode": "3121",
    "addressCountry": "AU"
  },
  "sameAs": [
    "https://www.facebook.com/supersolarmelbourne/"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+61-1300-09-09-84",
    "contactType": "sales",
    "areaServed": "AU",
    "availableLanguage": "English"
  }
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${plusJakarta.variable} ${syne.variable}`}>
      <body className="antialiased min-h-screen">
        <GoogleAnalytics />
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: organizationSchema }}
        />
        <Script
          id="google-maps"
          strategy="lazyOnload"
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
        />
        <Header />
        <main role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
