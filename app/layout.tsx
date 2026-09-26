import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/data/config";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Used Cars in Bulandshahr | First Motors — Second Hand Car Dealer",
    template: `%s | First Motors`,
  },
  description:
    "First Motors is Bulandshahr's trusted used car dealer. Buy, sell or exchange quality second-hand cars in Bulandshahr, UP. Transparent pricing, easy finance & test drives available.",
  keywords: [
    "used cars in Bulandshahr",
    "second hand cars Bulandshahr",
    "pre-owned cars Bulandshahr",
    "used car dealer Bulandshahr",
    "second hand car dealer Bulandshahr",
    "buy used car Bulandshahr",
    "sell used car Bulandshahr",
    "used cars UP",
    "used Maruti Suzuki Bulandshahr",
    "used Hyundai Bulandshahr",
    "used Tata cars Bulandshahr",
    "car dealer near Bulandshahr",
    "First Motors",
    "car finance Bulandshahr",
    "car exchange Bulandshahr",
    "test drive Bulandshahr",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: "Used Cars in Bulandshahr | First Motors — Second Hand Car Dealer",
    description:
      "First Motors is Bulandshahr's trusted used car dealer. Buy quality second-hand cars with transparent pricing, easy finance & test drives.",
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: "First Motors — Used Cars in Bulandshahr",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Used Cars in Bulandshahr | First Motors",
    description:
      "First Motors is Bulandshahr's trusted used car dealer. Transparent pricing, easy finance & test drives.",
    images: [SITE_CONFIG.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Schema.org structured data objects
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["AutomotiveBusiness", "LocalBusiness"],
  "@id": `${SITE_CONFIG.url}/#business`,
  name: SITE_CONFIG.name,
  legalName: "First Motors",
  description:
    "First Motors is a trusted pre-owned car dealer in Bulandshahr, Uttar Pradesh. We offer quality second-hand cars with transparent pricing, easy finance options and test drives.",
  url: SITE_CONFIG.url,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_CONFIG.url}/logo.png`,
    width: 1024,
    height: 330,
  },
  image: `${SITE_CONFIG.url}/showroom.jpg`,
  telephone: SITE_CONFIG.phone,
  email: "info@firstmotorsbsr.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE_CONFIG.address.line1,
    addressLocality: SITE_CONFIG.address.city,
    addressRegion: "Uttar Pradesh",
    postalCode: SITE_CONFIG.address.pincode,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.4069,
    longitude: 77.8494,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:30",
      closes: "19:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "10:00",
      closes: "18:00",
    },
  ],
  priceRange: "₹₹",
  areaServed: [
    { "@type": "City", name: "Bulandshahr" },
    { "@type": "State", name: "Uttar Pradesh" },
  ],
  knowsAbout: ["Used Cars", "Pre-Owned Cars", "Second-Hand Cars", "Car Finance", "Car Exchange"],
  sameAs: [
    SITE_CONFIG.social.instagram,
    SITE_CONFIG.social.facebook,
    SITE_CONFIG.social.youtube,
  ],
  hasMap: SITE_CONFIG.address.googleMapsUrl,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_CONFIG.url}/#website`,
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  description: "Used car dealer in Bulandshahr — buy, sell or exchange pre-owned cars.",
  publisher: { "@id": `${SITE_CONFIG.url}/#business` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_CONFIG.url}/buy?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#0F1C3F" />
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Bulandshahr, Uttar Pradesh, India" />
        <meta name="geo.position" content="28.4069;77.8494" />
        <meta name="ICBM" content="28.4069, 77.8494" />
        {/* AutomotiveBusiness / LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {/* WebSite Schema with SearchAction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="antialiased">
        <GoogleAnalytics />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}


