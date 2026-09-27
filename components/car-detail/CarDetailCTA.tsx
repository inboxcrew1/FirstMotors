import Link from "next/link";
import { Phone } from "lucide-react";
import type { CarListing } from "@/lib/types";
import { formatPrice, formatPhoneLink, getEMIEstimate } from "@/lib/utils";
import { SITE_CONFIG } from "@/data/config";

interface CarDetailCTAProps {
  car: CarListing;
  whatsappLink: string;
}

export default function CarDetailCTA({ car, whatsappLink }: CarDetailCTAProps) {
  const emi = getEMIEstimate(car.price);

  return (
    <div
      className="card p-5"
      style={{ border: "1.5px solid #e5e7eb" }}
    >
      {/* Stock ID */}
      <p className="text-xs text-gray-400 font-medium mb-0.5">Stock ID: {car.stockId}</p>

      {/* Car name */}
      <div
        className="text-xl font-extrabold leading-tight mb-1"
        style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}
      >
        {car.year} {car.brand} {car.model}
      </div>
      <p className="text-sm text-gray-500 mb-4">{car.variant}</p>

      {/* Price */}
      <div className="pb-4 mb-4 border-b border-gray-100">
        <p className="price-tag text-3xl">{formatPrice(car.price)}</p>
        <p className="text-xs text-gray-400 mt-0.5">+ applicable taxes &amp; registration</p>
        <p className="text-sm text-gray-600 mt-1">
          EMI from{" "}
          <span className="font-bold" style={{ color: "var(--color-navy-900)" }}>
            ₹{emi.toLocaleString("en-IN")}/month*
          </span>
        </p>
      </div>

      {/* Status */}
      {car.status === "sold" && (
        <div className="badge badge-red w-full justify-center text-sm py-2 mb-4">
          This car has been SOLD
        </div>
      )}
      {car.status === "reserved" && (
        <div
          className="badge w-full justify-center text-sm py-2 mb-4"
          style={{ background: "#fef3c7", color: "#92400e" }}
        >
          Reserved — Contact for availability
        </div>
      )}

      {/* CTAs */}
      <div className="flex flex-col gap-3">
        {car.status === "available" && (
          <>
            <Link
              href={`/test-drive?car=${car.stockId}`}
              className="btn btn-primary w-full justify-center gap-2"
            >
              Book a Test Drive
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp w-full justify-center gap-2"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Enquiry
            </a>
            <a
              href={formatPhoneLink(SITE_CONFIG.phone)}
              className="btn btn-outline w-full justify-center gap-2"
            >
              <Phone size={15} />
              Call Now
            </a>
          </>
        )}

        {car.status !== "available" && (
          <Link href="/buy" className="btn btn-secondary w-full justify-center">
            Browse Similar Cars
          </Link>
        )}
      </div>

      <div className="mt-4 pt-3 border-t border-gray-100 text-xs text-gray-500">
        <p className="font-semibold text-gray-700 mb-1">Showroom Representatives:</p>
        <div className="flex justify-between items-center py-0.5">
          <span>Shariq Ansari</span>
          <a href="tel:+918267871486" className="font-bold text-navy-800 hover:text-red-600">82678 71486</a>
        </div>
        <div className="flex justify-between items-center py-0.5">
          <span>Shamir Khan</span>
          <a href="tel:+919953950721" className="font-bold text-navy-800 hover:text-red-600">99539 50721</a>
        </div>
      </div>

      <p className="text-[11px] text-gray-400 mt-3 text-center">
        * EMI estimate. Actual rates may vary.
      </p>
    </div>
  );
}
