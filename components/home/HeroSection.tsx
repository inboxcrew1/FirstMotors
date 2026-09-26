"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Search, ChevronDown, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";

// Budget chip options
const BUDGET_CHIPS = [
  { label: "Under ₹3L", value: "0-3" },
  { label: "₹3–5L", value: "3-5" },
  { label: "₹5–8L", value: "5-8" },
  { label: "₹8–12L", value: "8-12" },
  { label: "₹12L+", value: "12-99" },
];

const MAKES = ["Any Make", "Maruti Suzuki", "Hyundai", "Tata", "Honda", "Kia", "Toyota", "Mahindra", "Volkswagen", "Renault", "Ford", "MG", "Skoda", "Jeep"];
const FUEL_TYPES = ["Any Fuel", "Petrol", "Diesel", "CNG", "Electric", "Hybrid"];
const TRANSMISSIONS = ["Any Transmission", "Manual", "Automatic", "AMT", "CVT", "DCT"];
const BODY_TYPES = ["Any Body Type", "Hatchback", "Sedan", "SUV", "MUV"];

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<"buy" | "sell">("buy");
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);

  const whatsappSellLink = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent("Hello First Motors,\n\nI'd like to sell/exchange my car. Please help me with a valuation.")}`;

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, var(--color-navy-950) 0%, var(--color-navy-900) 50%, var(--color-navy-800) 100%)`,
        minHeight: "620px",
      }}
    >
      {/* Background First Motors Showroom with calibrated dark overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/showroom.jpg"
          alt="First Motors Dealership Showroom - Bulandshahr"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Dark overlay for readability while revealing real showroom architecture */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(105deg, rgba(7, 14, 31, 0.94) 0%, rgba(15, 28, 63, 0.88) 50%, rgba(15, 28, 63, 0.65) 100%)",
          }}
        />
      </div>

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,255,255,0.3) 60px, rgba(255,255,255,0.3) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,255,255,0.3) 60px, rgba(255,255,255,0.3) 61px)`,
        }}
      />

      {/* Content */}
      <div className="container-fm relative z-10 py-14 lg:py-20">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">

          {/* ── Left: Hero Copy ── */}
          <div className="flex-1 lg:max-w-[52%]">
            {/* Eyebrow badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold mb-6"
              style={{
                background: "rgba(232,34,46,0.15)",
                border: "1px solid rgba(232,34,46,0.35)",
                color: "var(--color-red-brand-light)",
              }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--color-red-brand)" }} />
              First Motors · Bulandshahr, U.P.
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl font-extrabold text-white leading-[1.1] mb-5 text-balance"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Used Cars in Bulandshahr{" "}
              <span style={{ color: "var(--color-red-brand-light)" }}>You&apos;ll Love.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-lg leading-relaxed">
              Quality second-hand cars, transparent pricing and a simpler way to buy, sell or exchange your car in Bulandshahr and Western U.P.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/buy"
                className="btn btn-primary gap-2"
                style={{ fontSize: "0.9375rem" }}
              >
                Browse Used Cars
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/sell"
                className="btn"
                style={{
                  background: "transparent",
                  color: "white",
                  border: "1.5px solid rgba(255,255,255,0.45)",
                  fontSize: "0.9375rem",
                }}
              >
                Sell Your Car
              </Link>
            </div>

            {/* Trust micro-stats */}
            <div className="flex flex-wrap gap-6 mt-10 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              {[
                { value: "100+", label: "Cars in Stock" },
                { value: "500+", label: "Happy Customers" },
                { value: "5★", label: "Avg. Rating" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-extrabold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                    {stat.value}
                  </p>
                  <p className="text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Search Card ── */}
          <div className="w-full lg:w-[420px] xl:w-[460px] shrink-0">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "white",
                boxShadow: "0 24px 64px rgba(0,0,0,0.35), 0 8px 24px rgba(0,0,0,0.2)",
              }}
            >
              {/* Tabs */}
              <div
                className="flex"
                style={{ background: "var(--color-navy-900)" }}
              >
                {(["buy", "sell"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className="flex-1 py-3.5 text-sm font-bold tracking-wide uppercase transition-all"
                    style={{
                      background: activeTab === tab ? "var(--color-red-brand)" : "transparent",
                      color: activeTab === tab ? "white" : "rgba(255,255,255,0.55)",
                    }}
                  >
                    {tab === "buy" ? "🚗 Buy a Car" : "💰 Sell a Car"}
                  </button>
                ))}
              </div>

              {/* Buy Tab */}
              {activeTab === "buy" && (
                <div className="p-5 flex flex-col gap-4">
                  {/* Make */}
                  <div>
                    <label className="label-fm">Make & Model</label>
                    <div className="relative">
                      <select className="input-fm appearance-none pr-9 cursor-pointer">
                        {MAKES.map((m) => (
                          <option key={m}>{m}</option>
                        ))}
                      </select>
                      <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" />
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="label-fm">Budget</label>
                    <div className="flex flex-wrap gap-2">
                      {BUDGET_CHIPS.map((chip) => (
                        <button
                          key={chip.value}
                          onClick={() =>
                            setSelectedBudget(
                              selectedBudget === chip.value ? null : chip.value
                            )
                          }
                          className="px-3 py-1.5 rounded-full text-xs font-semibold border transition-all"
                          style={{
                            background: selectedBudget === chip.value ? "var(--color-navy-900)" : "white",
                            color: selectedBudget === chip.value ? "white" : "var(--color-navy-700)",
                            borderColor: selectedBudget === chip.value ? "var(--color-navy-900)" : "#d1d5db",
                          }}
                        >
                          {chip.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Row: Fuel & Transmission */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="label-fm">Fuel Type</label>
                      <div className="relative">
                        <select className="input-fm appearance-none pr-8 cursor-pointer text-sm">
                          {FUEL_TYPES.map((f) => (
                            <option key={f}>{f}</option>
                          ))}
                        </select>
                        <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <label className="label-fm">Transmission</label>
                      <div className="relative">
                        <select className="input-fm appearance-none pr-8 cursor-pointer text-sm">
                          {TRANSMISSIONS.map((t) => (
                            <option key={t}>{t}</option>
                          ))}
                        </select>
                        <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" />
                      </div>
                    </div>
                  </div>

                  {/* Body Type */}
                  <div>
                    <label className="label-fm">Body Type</label>
                    <div className="relative">
                      <select className="input-fm appearance-none pr-9 cursor-pointer">
                        {BODY_TYPES.map((b) => (
                          <option key={b}>{b}</option>
                        ))}
                      </select>
                      <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" />
                    </div>
                  </div>

                  {/* Search Button */}
                  <Link
                    href="/buy"
                    className="btn btn-primary w-full mt-1 gap-2 justify-center"
                  >
                    <Search size={16} />
                    Search Cars
                  </Link>
                </div>
              )}

              {/* Sell Tab */}
              {activeTab === "sell" && (
                <div className="p-6 flex flex-col items-center text-center gap-5">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                    style={{ background: "var(--color-surface-dark)" }}
                  >
                    🚘
                  </div>
                  <div>
                    <h3
                      className="text-xl font-bold mb-2"
                      style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}
                    >
                      Get your car valued by First Motors
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Tell us about your car and we&apos;ll give you a fair, transparent valuation — with no obligation to sell.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 w-full">
                    <Link href="/sell" className="btn btn-primary w-full justify-center">
                      Get Valuation
                    </Link>
                    <a
                      href={whatsappSellLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp w-full justify-center gap-2"
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      WhatsApp Us
                    </a>
                  </div>
                  <p className="text-xs text-gray-400">Free valuation · No obligation · Quick response</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
