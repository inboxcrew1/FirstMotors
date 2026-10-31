import type { Metadata } from "next";
import Link from "next/link";
import { getAllCars, getAvailableBrands } from "@/data/inventory";
import { SITE_CONFIG } from "@/data/config";
import { formatWhatsAppLink } from "@/lib/utils";
import InventoryClient from "@/components/inventory/InventoryClient";

export const metadata: Metadata = {
  title: "Browse Used Cars in Bulandshahr | First Motors",
  description:
    "Browse quality second-hand cars in Bulandshahr at First Motors. 100+ cars available in showroom stock. Maruti Suzuki, Hyundai, Tata & more. Transparent pricing & test drives.",
  alternates: {
    canonical: "https://firstmotorsbsr.com/buy",
  },
  openGraph: {
    type: "website",
    url: "https://firstmotorsbsr.com/buy",
    siteName: SITE_CONFIG.name,
    title: "Browse Used Cars in Bulandshahr | First Motors",
    description: "Browse quality used cars in Bulandshahr at First Motors. 100+ cars in showroom stock. Transparent pricing, easy finance & test drives.",
    images: [{ url: `${SITE_CONFIG.url}/showroom.jpg`, alt: "Used Cars in Bulandshahr at First Motors Showroom" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Browse Used Cars in Bulandshahr | First Motors",
    description: "Browse quality used cars in Bulandshahr at First Motors. 100+ cars in showroom stock.",
    images: [`${SITE_CONFIG.url}/showroom.jpg`],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://firstmotorsbsr.com" },
    { "@type": "ListItem", position: 2, name: "Browse Used Cars in Bulandshahr", item: "https://firstmotorsbsr.com/buy" },
  ],
};

export default function BuyPage() {
  const cars = getAllCars();
  const brands = getAvailableBrands();

  return (
    <div style={{ background: "var(--color-surface)", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Page Header */}
      <div
        className="border-b"
        style={{ background: "white", borderColor: "#e5e7eb" }}
      >
        <div className="container-fm py-6">
          {/* Breadcrumb */}
          <nav className="text-xs text-gray-500 mb-2" aria-label="breadcrumb">
            <ol className="flex items-center gap-1.5">
              <li><Link href="/" className="hover:text-navy-900 transition-colors">Home</Link></li>
              <li>/</li>
              <li className="text-gray-700 font-medium">Used Cars in Bulandshahr</li>
            </ol>
          </nav>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1
                className="text-2xl sm:text-3xl font-extrabold"
                style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}
              >
                Used Cars in Bulandshahr
              </h1>
              <p className="text-gray-500 text-sm mt-1">
                Quality pre-owned cars — transparently priced, carefully selected.
              </p>
            </div>
            {/* Showroom stock distinction badge */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2 text-xs text-slate-700 max-w-md">
              <span className="font-bold text-navy-900">Showroom Stock:</span> First Motors has{" "}
              <strong>100+ vehicles</strong> available at our Bulandshahr showroom, while our website showcases a selected online inventory.
            </div>
          </div>

          {/* Stock Update Banner */}
          <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-red-50 via-amber-50 to-red-50 border border-amber-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-red-600 text-white font-black text-[11px] px-2.5 py-0.5 rounded uppercase tracking-wider">Stock Update</span>
                <h3 className="font-bold text-sm sm:text-base text-navy-900">Current Online Showcase Vehicles are SOLD</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 mt-1">
                Next stock available on <strong className="text-navy-900 font-extrabold">01-01-2026 8PM</strong>. Contact us to pre-book upcoming arrivals or visit our showroom on Chandpur Road for 100+ physical stock.
              </p>
            </div>
            <a
              href={formatWhatsAppLink(SITE_CONFIG.whatsapp, "Hello First Motors, please notify me when the next stock is available on 01-01-2026 8PM.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp text-xs py-2 px-3.5 whitespace-nowrap self-start sm:self-auto"
            >
              Pre-Book Next Stock
            </a>
          </div>
        </div>
      </div>

      <InventoryClient initialCars={cars} availableBrands={brands} />
    </div>
  );
}
