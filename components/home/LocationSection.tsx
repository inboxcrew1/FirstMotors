"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Phone, Clock, ExternalLink, Camera, Map } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";
import { formatPhoneLink, formatWhatsAppLink } from "@/lib/utils";
import { WHATSAPP_MESSAGES } from "@/data/config";

export default function LocationSection() {
  const [viewMode, setViewMode] = useState<"photo" | "map">("photo");
  const whatsappLink = formatWhatsAppLink(
    SITE_CONFIG.whatsapp,
    WHATSAPP_MESSAGES.general
  );

  return (
    <section className="section" style={{ background: "white" }}>
      <div className="container-fm">
        <div className="text-center mb-10">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-2"
            style={{ color: "var(--color-red-brand)" }}
          >
            Find Us
          </p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold"
            style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}
          >
            Visit First Motors
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Chandpur Road, Near Kalyan Singh Medical College, Bulandshahr
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Visual card: Showroom Photo or Map */}
          <div
            className="rounded-2xl overflow-hidden relative shadow-lg border border-gray-200"
            style={{ height: "380px", background: "#f8fafc" }}
          >
            {/* Mode Switcher */}
            <div className="absolute top-3 right-3 z-20 flex bg-slate-900/85 backdrop-blur-sm p-1 rounded-lg border border-white/15 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setViewMode("photo")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-colors ${
                  viewMode === "photo"
                    ? "bg-white text-navy-900 shadow-sm"
                    : "text-white/80 hover:text-white"
                }`}
              >
                <Camera size={13} />
                Showroom
              </button>
              <button
                type="button"
                onClick={() => setViewMode("map")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-colors ${
                  viewMode === "map"
                    ? "bg-white text-navy-900 shadow-sm"
                    : "text-white/80 hover:text-white"
                }`}
              >
                <Map size={13} />
                Map
              </button>
            </div>

            {viewMode === "photo" ? (
              <div className="relative w-full h-full">
                <Image
                  src="/showroom.jpg"
                  alt="First Motors Dealership Showroom - Bulandshahr"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white">
                  <p className="text-sm font-bold">First Motors Showroom Front</p>
                  <p className="text-xs text-gray-300">Chandpur Road, Bulandshahr (U.P.)</p>
                </div>
              </div>
            ) : SITE_CONFIG.address.googleMapsEmbed ? (
              <iframe
                src={SITE_CONFIG.address.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="First Motors location map"
              />
            ) : (
              <div className="flex flex-col items-center justify-center h-full gap-3 text-gray-400 p-6">
                <MapPin size={40} strokeWidth={1.5} />
                <div className="text-center">
                  <p className="font-semibold text-gray-600 mb-1">{SITE_CONFIG.address.full}</p>
                </div>
                {SITE_CONFIG.address.googleMapsUrl && (
                  <a
                    href={SITE_CONFIG.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline text-sm mt-2"
                  >
                    Open in Google Maps
                    <ExternalLink size={14} className="ml-1.5" />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6">
            <div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}
              >
                {SITE_CONFIG.name}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "var(--color-surface)" }}
                  >
                    <MapPin size={16} style={{ color: "var(--color-navy-700)" }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Address</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{SITE_CONFIG.address.full}</p>
                    <a
                      href={SITE_CONFIG.address.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold mt-1 inline-flex items-center gap-1"
                      style={{ color: "var(--color-navy-600)" }}
                    >
                      Get Directions <ExternalLink size={11} />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "var(--color-surface)" }}
                  >
                    <Phone size={16} style={{ color: "var(--color-navy-700)" }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Showroom Contacts</p>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="font-semibold text-gray-900">Sharif Ansari:</span>
                        <a
                          href="tel:+918267871486"
                          className="font-medium text-navy-800 hover:text-red-600 transition-colors"
                        >
                          82678 71486
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="font-semibold text-gray-900">Shamir Khan:</span>
                        <a
                          href="tel:+919953950721"
                          className="font-medium text-navy-800 hover:text-red-600 transition-colors"
                        >
                          99539 50721
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "var(--color-surface)" }}
                  >
                    <Clock size={16} style={{ color: "var(--color-navy-700)" }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Business Hours</p>
                    <div className="space-y-0.5 text-sm text-gray-700">
                      <p>Mon – Fri: {SITE_CONFIG.hours.weekdays}</p>
                      <p>Saturday: {SITE_CONFIG.hours.saturday}</p>
                      <p>Sunday: {SITE_CONFIG.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 flex-wrap pt-2">
              <a href={formatPhoneLink(SITE_CONFIG.phone)} className="btn btn-secondary flex-1 min-w-[140px]">
                <Phone size={15} className="mr-1.5" />
                Call Now
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp flex-1 min-w-[140px] gap-1.5"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
