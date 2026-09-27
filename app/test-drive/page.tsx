import type { Metadata } from "next";
import Link from "next/link";
import { getAllCars } from "@/data/inventory";
import { SITE_CONFIG } from "@/data/config";
import TestDriveForm from "@/components/forms/TestDriveForm";

export const metadata: Metadata = {
  title: "Book a Test Drive in Bulandshahr | First Motors",
  description:
    "Schedule a test drive for any pre-owned car at First Motors Bulandshahr. Test drive quality verified cars on Chandpur Road, Bulandshahr before you decide.",
  alternates: {
    canonical: "https://firstmotorsbsr.com/test-drive",
  },
  openGraph: {
    type: "website",
    url: "https://firstmotorsbsr.com/test-drive",
    siteName: SITE_CONFIG.name,
    title: "Book a Test Drive in Bulandshahr | First Motors",
    description: "Schedule a test drive for any pre-owned car at First Motors Bulandshahr. Experience performance and comfort in person.",
    images: [{ url: `${SITE_CONFIG.url}/showroom.jpg`, alt: "Book a Test Drive at First Motors Bulandshahr" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Test Drive in Bulandshahr | First Motors",
    description: "Book a test drive at First Motors showroom, Chandpur Road, Bulandshahr.",
    images: [`${SITE_CONFIG.url}/showroom.jpg`],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://firstmotorsbsr.com" },
    { "@type": "ListItem", position: 2, name: "Book a Test Drive", item: "https://firstmotorsbsr.com/test-drive" },
  ],
};

interface TestDrivePageProps {
  searchParams?: Promise<{ car?: string }>;
}

export default async function TestDrivePage({ searchParams }: TestDrivePageProps) {
  const sp = searchParams ? await searchParams : {};
  const cars = getAllCars().filter((c) => c.status === "available");

  return (
    <div style={{ background: "var(--color-surface)", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="section" style={{ background: "linear-gradient(135deg, var(--color-navy-950), var(--color-navy-900))" }}>
        <div className="container-fm text-center">
          <nav className="text-xs text-slate-400 mb-3" aria-label="breadcrumb">
            <ol className="flex items-center justify-center gap-1.5">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li>/</li>
              <li className="text-white font-medium">Test Drive</li>
            </ol>
          </nav>
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--color-red-brand-light)" }}>Experience Before Buying</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Book a Test Drive in Bulandshahr
          </h1>
          <p className="text-slate-300 text-lg max-w-lg mx-auto">
            Experience our quality pre-owned cars in person at our Chandpur Road showroom. Book your slot in minutes.
          </p>
        </div>
      </section>

      {/* Form */}
      <div className="container-fm py-10">
        <div className="max-w-lg mx-auto">
          <TestDriveForm cars={cars} initialCarStockId={sp.car || ""} />
        </div>
      </div>

      {/* Why test drive */}
      <section className="section" style={{ background: "white" }}>
        <div className="container-fm">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-extrabold" style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}>
              Why Test Drive at First Motors?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: "🎯", title: "Feel the Driving Comfort", desc: "Seating position, steering response, AC cooling, and cabin silence — experience the car first-hand." },
              { icon: "🔧", title: "Engine & Transmission", desc: "Check clutch smoothness, gear transitions, and engine pickup under real driving conditions." },
              { icon: "🛣️", title: "Test on Bulandshahr Roads", desc: "Experience suspension, ground clearance, and braking on real local road surfaces." },
            ].map((item) => (
              <div key={item.title} className="text-center rounded-xl p-6" style={{ background: "var(--color-surface)", border: "1px solid #e5e7eb" }}>
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold mb-2" style={{ color: "var(--color-navy-900)" }}>{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
