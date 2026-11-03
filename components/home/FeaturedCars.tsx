import Link from "next/link";
import { ArrowRight, Phone, MessageSquare, Send } from "lucide-react";
import { getFeaturedCars } from "@/data/inventory";
import { SITE_CONFIG, WHATSAPP_MESSAGES } from "@/data/config";
import { formatPhoneLink, formatWhatsAppLink } from "@/lib/utils";
import CarCard from "@/components/inventory/CarCard";

export default function FeaturedCars() {
  const featuredCars = getFeaturedCars();

  return (
    <section className="section" style={{ background: "var(--color-surface)" }}>
      <div className="container-fm">
        {/* Section header */}
        <div className="flex items-end justify-between mb-8 gap-4">
          <div>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: "var(--color-red-brand)" }}
            >
              Hand-picked for you
            </p>
            <h2
              className="text-3xl sm:text-4xl font-extrabold"
              style={{
                color: "var(--color-navy-900)",
                fontFamily: "var(--font-heading)",
              }}
            >
              Featured Cars
            </h2>
            <p className="text-sm text-gray-500 mt-1 max-w-xl">
              Selected quality pre-owned cars available online. First Motors has <strong>100+ vehicles</strong> available in physical showroom stock on Chandpur Road, Bulandshahr.
            </p>
          </div>
          {featuredCars.length > 0 && (
            <Link
              href="/buy"
              className="hidden sm:flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all"
              style={{ color: "var(--color-navy-600)" }}
            >
              View All Cars
              <ArrowRight size={15} />
            </Link>
          )}
        </div>

        {/* Car grid / Empty state */}
        {featuredCars.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {featuredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>

            {/* Mobile: View all button */}
            <div className="flex justify-center mt-8 sm:hidden">
              <Link href="/buy" className="btn btn-secondary gap-2">
                View All Cars
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Desktop: bottom CTA */}
            <div className="hidden sm:flex justify-center mt-10">
              <Link href="/buy" className="btn btn-secondary gap-2 px-8">
                Browse Full Inventory
                <ArrowRight size={16} />
              </Link>
            </div>
          </>
        ) : (
          <div
            className="card p-8 sm:p-12 text-center max-w-xl mx-auto"
            style={{ background: "white" }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ background: "var(--color-surface)" }}
            >
              <span className="text-3xl">🚗</span>
            </div>
            <h3
              className="text-xl sm:text-2xl font-bold mb-2"
              style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}
            >
              Vehicles are being updated
            </h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Please contact First Motors for the latest available inventory.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href={formatPhoneLink(SITE_CONFIG.phone)} className="btn btn-primary gap-2">
                <Phone size={15} />
                Call Us
              </a>
              <a
                href={formatWhatsAppLink(SITE_CONFIG.whatsapp, WHATSAPP_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp gap-2"
              >
                <MessageSquare size={15} />
                WhatsApp
              </a>
              <Link href="/contact" className="btn btn-secondary gap-2">
                <Send size={15} />
                Enquiry
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

