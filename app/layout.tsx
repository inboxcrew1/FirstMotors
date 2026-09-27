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
    template: "%s",
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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: "Used Cars in Bulandshahr | First Motors — Second Hand Car Dealer",
    description:
      "First Motors is Bulandshahr's trusted used car dealer. 100+ pre-owned cars available at our Chandpur Road showroom. Transparent pricing, easy finance & test drives.",
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
      "First Motors is Bulandshahr's trusted used car dealer. 100+ pre-owned cars available at our showroom. Transparent pricing, easy finance & test drives.",
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
    "First Motors is Bulandshahr's trusted pre-owned car dealership with 10+ years of experience and 100+ vehicles available at our Chandpur Road showroom. We offer quality second-hand cars with transparent pricing, easy finance options and verified test drives.",
  url: SITE_CONFIG.url,
  foundingDate: "2014",
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
  knowsAbout: ["Used Cars", "Pre-Owned Cars", "Second-Hand Cars", "Car Finance", "Car Exchange", "Car Inspection"],
  sameAs: [
    SITE_CONFIG.social.instagram,
    "https://share.google/tzmypB0SIAU6WAyzR",
  ].filter(Boolean),
  hasMap: SITE_CONFIG.address.googleMapsUrl,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_CONFIG.url}/#website`,
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  description: "Used car dealer in Bulandshahr — buy, sell or exchange pre-owned cars. 100+ cars available in showroom.",
  publisher: { "@id": `${SITE_CONFIG.url}/#business` },
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0F1C3F" />
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Bulandshahr, Uttar Pradesh, India" />
        {/* AutomotiveBusiness / LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {/* WebSite Schema */}
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


