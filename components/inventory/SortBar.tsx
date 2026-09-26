"use client";

import type { SortOption } from "@/lib/types";

interface SortBarProps {
  count: number;
  sort: SortOption;
  onSortChange: (sort: SortOption) => void;
}

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "recommended", label: "Recommended" },
  { value: "price_asc", label: "Price: Low to High" },
  { value: "price_desc", label: "Price: High to Low" },
  { value: "newest", label: "Newest First" },
  { value: "lowest_km", label: "Lowest KM" },
];

export default function SortBar({ count, sort, onSortChange }: SortBarProps) {
  return (
    <div className="flex-1 flex items-center justify-between gap-4">
      <p className="text-sm font-semibold" style={{ color: "var(--color-navy-900)" }}>
        <span className="text-lg font-extrabold" style={{ fontFamily: "var(--font-heading)" }}>
          {count}
        </span>{" "}
        <span className="text-gray-500 font-normal">
          car{count !== 1 ? "s" : ""} found
        </span>
      </p>

      <div className="flex items-center gap-2">
        <label
          htmlFor="sort-select"
          className="text-xs text-gray-500 font-medium hidden sm:block shrink-0"
        >
          Sort by:
        </label>
        <select
          id="sort-select"
          value={sort}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
          className="input-fm text-sm py-2 pr-8 min-w-[160px] cursor-pointer"
          style={{ padding: "0.5rem 2rem 0.5rem 0.75rem" }}
        >
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
