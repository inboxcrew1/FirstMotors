"use client";

import CarCard from "@/components/inventory/CarCard";
import SkeletonCard from "@/components/ui/SkeletonCard";
import type { CarListing, FilterState } from "@/lib/types";
import { SlidersHorizontal } from "lucide-react";

interface InventoryGridProps {
  cars: CarListing[];
  loading?: boolean;
  onClearFilters: () => void;
  filters: FilterState;
}

// Show 6 skeleton cards while loading
const SKELETON_COUNT = 6;

export default function InventoryGrid({
  cars,
  loading = false,
  onClearFilters,
}: InventoryGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (cars.length === 0) {
    return (
      <div
        className="flex flex-col items-center justify-center text-center py-20 px-6 rounded-2xl"
        style={{ background: "white", boxShadow: "var(--shadow-card)" }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
          style={{ background: "var(--color-surface-dark)" }}
        >
          <SlidersHorizontal size={28} style={{ color: "var(--color-muted)" }} />
        </div>
        <h3
          className="text-xl font-bold mb-2"
          style={{ fontFamily: "var(--font-heading)", color: "var(--color-navy-900)" }}
        >
          No cars match your filters
        </h3>
        <p className="text-sm mb-6 max-w-xs" style={{ color: "var(--color-muted)" }}>
          Try adjusting or clearing your search filters to see more results.
        </p>
        <button className="btn btn-primary" onClick={onClearFilters}>
          Clear All Filters
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}
