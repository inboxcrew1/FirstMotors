import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getCarBySlug, getRelatedCars, getAllCars } from "@/data/inventory";
import { formatPrice, formatKmExact, formatWhatsAppLink, formatPhoneLink } from "@/lib/utils";
import { SITE_CONFIG, WHATSAPP_MESSAGES } from "@/data/config";
import ImageGallery from "@/components/car-detail/ImageGallery";
import CarSpecs from "@/components/car-detail/CarSpecs";
import EMICalculator from "@/components/car-detail/EMICalculator";
import InspectionSection from "@/components/car-detail/InspectionSection";
import VehicleHistory from "@/components/car-detail/VehicleHistory";
import CarDetailCTA from "@/components/car-detail/CarDetailCTA";
import CarCard from "@/components/inventory/CarCard";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const cars = getAllCars();
  return cars.map((car) => ({
    slug: car.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const car = getCarBySlug(slug);
  if (!car) return { title: "Car Not Found | First Motors" };

  const title =
    car.id === "maruti-suzuki-alto-k10-vxi-2017"
      ? "Used Maruti Suzuki Alto K10 VXI 2017/18 for Sale in Bulandshahr | First Motors"
      : `Used ${car.brand} ${car.model} ${car.variant} ${car.year} for Sale in Bulandshahr | First Motors`;
  const description = `Buy this ${car.year} ${car.brand} ${car.model} ${car.variant} in Bulandshahr — ${formatKmExact(car.kmDriven)}, ${car.fuelType}, ${car.transmission}, ${car.ownership}. Price: ${formatPrice(car.price)}. Test drive available at First Motors, Bulandshahr.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://firstmotorsbsr.com/car/${slug}`,
    },
    openGraph: {
      title,
      description,
      images: [{ url: car.thumbnailUrl, alt: `${car.year} ${car.brand} ${car.model} — First Motors Bulandshahr` }],
    },
  };
}

export default async function CarDetailPage({ params }: Props) {
  const { slug } = await params;
  const car = getCarBySlug(slug);

  if (!car) notFound();

  const relatedCars = getRelatedCars(car, 4);
  const whatsappLink = formatWhatsAppLink(
    SITE_CONFIG.whatsapp,
    WHATSAPP_MESSAGES.carEnquiry(
      `${car.year} ${car.brand} ${car.model} ${car.variant}`,
      car.year,
      formatKmExact(car.kmDriven),
      car.stockId
    )
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Car",
    name: `${car.year} ${car.brand} ${car.model} ${car.variant}`,
    brand: { "@type": "Brand", name: car.brand },
    model: car.model,
    vehicleModelDate: car.year.toString(),
    fuelType: car.fuelType,
    vehicleTransmission: car.transmission,
    mileageFromOdometer: { "@type": "QuantitativeValue", value: car.kmDriven, unitCode: "KMT" },
    color: car.color,
    vehicleIdentificationNumber: car.stockId,
    image: car.thumbnailUrl ? `https://firstmotorsbsr.com${car.thumbnailUrl}` : undefined,
    offers: {
      "@type": "Offer",
      price: car.price * 100000,
      priceCurrency: "INR",
      itemCondition: "https://schema.org/UsedCondition",
      availability: car.status === "available" ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      seller: {
        "@type": "AutoDealer",
        name: SITE_CONFIG.name,
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE_CONFIG.address.line1,
          addressLocality: SITE_CONFIG.address.city,
          addressRegion: "Uttar Pradesh",
          postalCode: SITE_CONFIG.address.pincode,
          addressCountry: "IN",
        },
        telephone: SITE_CONFIG.phone,
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://firstmotorsbsr.com" },
      { "@type": "ListItem", position: 2, name: "Used Cars", item: "https://firstmotorsbsr.com/buy" },
      { "@type": "ListItem", position: 3, name: car.brand, item: `https://firstmotorsbsr.com/buy?brand=${car.brand.toLowerCase().replace(/\s/g, "-")}` },
      { "@type": "ListItem", position: 4, name: `${car.year} ${car.model}`, item: `https://firstmotorsbsr.com/car/${slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div style={{ background: "var(--color-surface)", minHeight: "100vh" }}>
        {/* Breadcrumb */}
        <div style={{ background: "white", borderBottom: "1px solid #e5e7eb" }}>
          <div className="container-fm py-3">
            <nav className="text-xs text-gray-400" aria-label="breadcrumb">
              <ol className="flex items-center gap-1.5 flex-wrap">
                <li><Link href="/" className="hover:text-gray-600">Home</Link></li>
                <li>/</li>
                <li><Link href="/buy" className="hover:text-gray-600">Used Cars</Link></li>
                <li>/</li>
                <li><Link href={`/buy?brand=${car.brand.toLowerCase().replace(/\s/g, "-")}`} className="hover:text-gray-600">{car.brand}</Link></li>
                <li>/</li>
                <li className="text-gray-600 font-medium">{car.model}</li>
              </ol>
            </nav>
          </div>
        </div>


        <div className="container-fm py-6">
          <div className="flex flex-col lg:flex-row gap-7">
            {/* ── Left column ── */}
            <div className="flex-1 min-w-0 flex flex-col gap-6">
              {/* Gallery */}
              <ImageGallery images={car.images} carName={`${car.year} ${car.brand} ${car.model}`} />

              {/* Mobile: Title + Price (above specs) */}
              <div className="lg:hidden">
                <div className="card p-5">
                  <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "var(--color-navy-600)" }}>
                    {car.brand} · Stock: {car.stockId}
                  </p>
                  <h1 className="text-2xl font-extrabold mb-1" style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}>
                    {car.year} {car.model} <span className="text-gray-500 font-medium text-lg">{car.variant}</span>
                  </h1>
                  <p className="price-tag text-3xl mb-1">{formatPrice(car.price)}</p>
                  <p className="text-xs text-gray-400">+ applicable taxes & registration</p>

                  {car.status === "sold" && (
                    <span className="badge badge-red mt-2">SOLD</span>
                  )}
                </div>
              </div>

              {/* Specs */}
              <div className="card p-5 lg:p-6">
                <h2 className="text-lg font-bold mb-4" style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}>
                  Vehicle Specifications
                </h2>
                <CarSpecs car={car} />
              </div>

              {/* Description */}
              {car.description && (
                <div className="card p-5 lg:p-6">
                  <h2 className="text-lg font-bold mb-3" style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}>
                    About This Car
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-sm">{car.description}</p>
                </div>
              )}

              {/* Features */}
              {car.features && car.features.length > 0 && (
                <div className="card p-5 lg:p-6">
                  <h2 className="text-lg font-bold mb-4" style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}>
                    Key Features
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {car.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-4 h-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Mobile: EMI Calculator */}
              <div className="lg:hidden">
                <EMICalculator carPrice={car.price} />
              </div>

              {/* Inspection */}
              <InspectionSection car={car} />

              {/* Vehicle History */}
              <VehicleHistory car={car} />
            </div>

            {/* ── Right column (sticky) ── */}
            <div className="hidden lg:block w-[340px] xl:w-[360px] shrink-0">
              <div className="sticky flex flex-col gap-4" style={{ top: "88px" }}>
                {/* Price card */}
                <CarDetailCTA car={car} whatsappLink={whatsappLink} />
                {/* EMI Calculator */}
                <EMICalculator carPrice={car.price} />
              </div>
            </div>
          </div>

          {/* Related Cars */}
          {relatedCars.length > 0 && (
            <div className="mt-10">
              <h2 className="text-2xl font-extrabold mb-5" style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}>
                You Might Also Like
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {relatedCars.map((related) => (
                  <CarCard key={related.id} car={related} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Mobile sticky bottom CTA */}
        <div
          className="fixed bottom-0 left-0 right-0 z-30 lg:hidden"
          style={{ background: "white", borderTop: "1px solid #e5e7eb", boxShadow: "0 -4px 16px rgba(0,0,0,0.08)" }}
        >
          <div className="grid grid-cols-3">
            <a
              href={formatPhoneLink(SITE_CONFIG.phone)}
              className="flex flex-col items-center justify-center py-3 gap-1 text-xs font-semibold border-r border-gray-200"
              style={{ color: "var(--color-navy-900)" }}
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth={2}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.81 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" /></svg>
              Call
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center py-3 gap-1 text-xs font-semibold bg-green-500 text-white"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              WhatsApp
            </a>
            <Link
              href={`/test-drive?car=${car.stockId}`}
              className="flex flex-col items-center justify-center py-3 gap-1 text-xs font-semibold text-white"
              style={{ background: "var(--color-red-brand)" }}
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth={2}><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 4v4h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
              Test Drive
            </Link>
          </div>
        </div>
        {/* Spacer for mobile bottom bar */}
        <div className="h-16 lg:hidden" />
      </div>
    </>
  );
}
