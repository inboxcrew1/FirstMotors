"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { SlidersHorizontal, X, Phone, MessageSquare, Send } from "lucide-react";
import type { CarListing, FilterState, SortOption } from "@/lib/types";
import { SITE_CONFIG, WHATSAPP_MESSAGES } from "@/data/config";
import { formatPhoneLink, formatWhatsAppLink } from "@/lib/utils";
import FilterSidebar from "@/components/inventory/FilterSidebar";
import SortBar from "@/components/inventory/SortBar";
import CarCard from "@/components/inventory/CarCard";
import SkeletonCard from "@/components/ui/SkeletonCard";

const DEFAULT_FILTERS: FilterState = {
  brands: [],
  bodyTypes: [],
  fuelTypes: [],
  transmissions: [],
  ownerships: [],
  locations: [],
};

interface InventoryClientProps {
  initialCars: CarListing[];
  availableBrands: string[];
}

export default function InventoryClient({ initialCars, availableBrands }: InventoryClientProps) {
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);
  const [sort, setSort] = useState<SortOption>("recommended");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.brands.length) count++;
    if (filters.bodyTypes.length) count++;
    if (filters.fuelTypes.length) count++;
    if (filters.transmissions.length) count++;
    if (filters.ownerships.length) count++;
    if (filters.priceMin !== undefined || filters.priceMax !== undefined) count++;
    if (filters.yearMin !== undefined || filters.yearMax !== undefined) count++;
    if (filters.kmMax !== undefined) count++;
    return count;
  }, [filters]);

  const filteredAndSorted = useMemo(() => {
    let result = initialCars.filter((car) => {
      if (filters.brands.length && !filters.brands.includes(car.brand)) return false;
      if (filters.bodyTypes.length && (!car.bodyType || !filters.bodyTypes.includes(car.bodyType))) return false;
      if (filters.fuelTypes.length && !filters.fuelTypes.includes(car.fuelType)) return false;
      if (filters.transmissions.length && !filters.transmissions.includes(car.transmission)) return false;
      if (filters.ownerships.length && !filters.ownerships.includes(car.ownership)) return false;
      if (filters.priceMin !== undefined && car.price < filters.priceMin) return false;
      if (filters.priceMax !== undefined && car.price > filters.priceMax) return false;
      if (filters.yearMin !== undefined && car.year < filters.yearMin) return false;
      if (filters.yearMax !== undefined && car.year > filters.yearMax) return false;
      if (filters.kmMax !== undefined && car.kmDriven > filters.kmMax) return false;
      return true;
    });

    switch (sort) {
      case "price_asc": result = [...result].sort((a, b) => a.price - b.price); break;
      case "price_desc": result = [...result].sort((a, b) => b.price - a.price); break;
      case "newest": result = [...result].sort((a, b) => b.year - a.year); break;
      case "lowest_km": result = [...result].sort((a, b) => a.kmDriven - b.kmDriven); break;
      default: result = [...result].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [initialCars, filters, sort]);

  const handleClearFilters = () => setFilters(DEFAULT_FILTERS);

  if (initialCars.length === 0) {
    return (
      <div className="container-fm py-16">
        <div
          className="card p-8 sm:p-14 text-center max-w-xl mx-auto"
          style={{ background: "white" }}
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            style={{ background: "var(--color-surface)" }}
          >
            <span className="text-3xl">🚗</span>
          </div>
          <h2
            className="text-xl sm:text-2xl font-bold mb-2"
            style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}
          >
            Vehicles are being updated
          </h2>
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
      </div>
    );
  }

  return (
    <div className="container-fm py-6">
      <div className="flex gap-6">
        {/* Desktop sidebar */}
        <aside className="hidden lg:block w-72 shrink-0">
          <div
            className="sticky rounded-xl overflow-hidden"
            style={{ top: "88px", background: "white", border: "1px solid #e5e7eb" }}
          >
            <FilterSidebar
              filters={filters}
              availableBrands={availableBrands}
              onChange={setFilters}
              onClear={handleClearFilters}
              activeCount={activeFilterCount}
            />
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Sort bar + mobile filter button */}
          <div className="flex items-center gap-3 mb-5">
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-semibold transition-colors"
              style={{
                background: activeFilterCount > 0 ? "var(--color-navy-900)" : "white",
                color: activeFilterCount > 0 ? "white" : "var(--color-navy-900)",
                borderColor: activeFilterCount > 0 ? "var(--color-navy-900)" : "#d1d5db",
              }}
            >
              <SlidersHorizontal size={15} />
              Filters
              {activeFilterCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-white text-navy-900 text-xs font-bold flex items-center justify-center" style={{ color: "var(--color-navy-900)" }}>
                  {activeFilterCount}
                </span>
              )}
            </button>
            <SortBar count={filteredAndSorted.length} sort={sort} onSortChange={setSort} />
          </div>

          {/* Active filter chips */}
          {activeFilterCount > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {filters.brands.map((b) => (
                <button
                  key={b}
                  onClick={() => setFilters((f) => ({ ...f, brands: f.brands.filter((x) => x !== b) }))}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border"
                  style={{ background: "#eff6ff", borderColor: "#bfdbfe", color: "#1e3a8a" }}
                >
                  {b} <X size={11} />
                </button>
              ))}
              {filters.fuelTypes.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilters((fs) => ({ ...fs, fuelTypes: fs.fuelTypes.filter((x) => x !== f) }))}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border"
                  style={{ background: "#f0fdf4", borderColor: "#bbf7d0", color: "#166534" }}
                >
                  {f} <X size={11} />
                </button>
              ))}
              <button
                onClick={handleClearFilters}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold border border-red-200 bg-red-50 text-red-700"
              >
                Clear All <X size={11} />
              </button>
            </div>
          )}

          {/* Grid */}
          {filteredAndSorted.length === 0 ? (
            <div
              className="rounded-xl p-12 text-center"
              style={{ background: "white", border: "1px solid #e5e7eb" }}
            >
              <p className="text-2xl mb-3">🚗</p>
              <h3 className="font-bold text-lg mb-2" style={{ color: "var(--color-navy-900)" }}>
                No cars match your filters
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                Try adjusting or clearing your search criteria.
              </p>
              <button onClick={handleClearFilters} className="btn btn-secondary">
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filteredAndSorted.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter sheet */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" aria-modal="true">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl max-h-[85vh] overflow-y-auto">
            <div className="sticky top-0 bg-white flex items-center justify-between px-5 py-4 border-b border-gray-100 z-10">
              <span className="font-bold text-base" style={{ color: "var(--color-navy-900)" }}>
                Filters {activeFilterCount > 0 && <span className="text-sm text-gray-500">({activeFilterCount} active)</span>}
              </span>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="p-1.5 rounded-lg hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>
            <FilterSidebar
              filters={filters}
              availableBrands={availableBrands}
              onChange={setFilters}
              onClear={handleClearFilters}
              activeCount={activeFilterCount}
            />
            <div className="sticky bottom-0 bg-white border-t border-gray-100 p-4 flex gap-3">
              <button onClick={handleClearFilters} className="btn btn-outline flex-1">
                Clear All
              </button>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="btn btn-primary flex-1"
              >
                View {filteredAndSorted.length} Cars
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
