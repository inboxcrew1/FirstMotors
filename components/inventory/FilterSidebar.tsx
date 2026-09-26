"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import type { FilterState, BodyType, FuelType, TransmissionType, OwnershipType } from "@/lib/types";

interface FilterSidebarProps {
  filters: FilterState;
  availableBrands: string[];
  onChange: (filters: FilterState) => void;
  onClear: () => void;
  /** Count of currently active filter keys (for showing badge) */
  activeCount: number;
}

// ─── Collapsible section ───────────────────────────────────────────────────────
function Section({
  title,
  defaultOpen = true,
  children,
}: {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ borderBottom: "1px solid #e5e7eb" }}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-3 text-left"
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        <span
          className="text-sm font-semibold uppercase tracking-wider"
          style={{ color: "var(--color-navy-900)" }}
        >
          {title}
        </span>
        {open ? (
          <ChevronUp size={16} style={{ color: "var(--color-muted)" }} />
        ) : (
          <ChevronDown size={16} style={{ color: "var(--color-muted)" }} />
        )}
      </button>
      {open && <div className="pb-4">{children}</div>}
    </div>
  );
}

// ─── Checkbox row ──────────────────────────────────────────────────────────────
function CheckRow({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label
      className="flex items-center gap-2.5 py-1 cursor-pointer group"
      style={{ fontSize: "0.875rem", color: "var(--color-navy-900)" }}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="w-4 h-4 rounded accent-navy-900 cursor-pointer"
        style={{ accentColor: "var(--color-navy-900)" }}
      />
      <span className="group-hover:font-medium transition-all">{label}</span>
    </label>
  );
}

// ─── Toggle helpers ────────────────────────────────────────────────────────────
function toggle<T>(arr: T[], value: T): T[] {
  return arr.includes(value) ? arr.filter((x) => x !== value) : [...arr, value];
}

// ─── Constant option lists ─────────────────────────────────────────────────────
const BODY_TYPES: BodyType[] = ["Hatchback", "Sedan", "SUV", "MUV", "Coupe", "Convertible", "Pickup", "Van"];
const FUEL_TYPES: FuelType[] = ["Petrol", "Diesel", "CNG", "Electric", "Hybrid"];
const TRANSMISSIONS: TransmissionType[] = ["Manual", "Automatic", "AMT", "DCT", "CVT"];
const OWNERSHIPS: OwnershipType[] = ["1st Owner", "2nd Owner", "3rd Owner", "4th+ Owner"];

// ─── FilterSidebar ─────────────────────────────────────────────────────────────
export default function FilterSidebar({
  filters,
  availableBrands,
  onChange,
  onClear,
  activeCount,
}: FilterSidebarProps) {
  // Helper to update a single field
  const set = (partial: Partial<FilterState>) => onChange({ ...filters, ...partial });

  return (
    <aside
      className="rounded-2xl p-4 sticky top-4 overflow-y-auto"
      style={{
        background: "white",
        boxShadow: "var(--shadow-card)",
        maxHeight: "calc(100vh - 5rem)",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h2
          className="text-base font-bold"
          style={{ fontFamily: "var(--font-heading)", color: "var(--color-navy-900)" }}
        >
          Filters
          {activeCount > 0 && (
            <span
              className="ml-2 inline-flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold text-white"
              style={{ background: "var(--color-red-brand)", fontSize: "0.7rem" }}
            >
              {activeCount}
            </span>
          )}
        </h2>
        {activeCount > 0 && (
          <button
            type="button"
            onClick={onClear}
            className="flex items-center gap-1 text-xs font-semibold"
            style={{ color: "var(--color-red-brand)", background: "none", border: "none", cursor: "pointer" }}
          >
            <X size={13} />
            Clear All
          </button>
        )}
      </div>

      <div className="divider" style={{ margin: "0.5rem 0 0" }} />

      {/* ── Price Range ─────────────────────────────────── */}
      <Section title="Price Range">
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <label className="label-fm" style={{ fontSize: "0.7rem" }}>Min (₹ Lakh)</label>
            <input
              type="number"
              min={0}
              placeholder="0"
              value={filters.priceMin ?? ""}
              onChange={(e) => set({ priceMin: e.target.value ? Number(e.target.value) : undefined })}
              className="input-fm text-sm"
              style={{ padding: "0.5rem 0.75rem" }}
            />
          </div>
          <span className="mt-5 text-gray-400 text-sm">–</span>
          <div className="flex-1">
            <label className="label-fm" style={{ fontSize: "0.7rem" }}>Max (₹ Lakh)</label>
            <input
              type="number"
              min={0}
              placeholder="Any"
              value={filters.priceMax ?? ""}
              onChange={(e) => set({ priceMax: e.target.value ? Number(e.target.value) : undefined })}
              className="input-fm text-sm"
              style={{ padding: "0.5rem 0.75rem" }}
            />
          </div>
        </div>
      </Section>

      {/* ── Brand ───────────────────────────────────────── */}
      <Section title="Brand">
        {availableBrands.map((brand) => (
          <CheckRow
            key={brand}
            label={brand}
            checked={filters.brands.includes(brand)}
            onChange={() => set({ brands: toggle(filters.brands, brand) })}
          />
        ))}
      </Section>

      {/* ── Body Type ───────────────────────────────────── */}
      <Section title="Body Type" defaultOpen={false}>
        {BODY_TYPES.map((bt) => (
          <CheckRow
            key={bt}
            label={bt}
            checked={filters.bodyTypes.includes(bt)}
            onChange={() => set({ bodyTypes: toggle(filters.bodyTypes, bt) })}
          />
        ))}
      </Section>

      {/* ── Fuel Type ───────────────────────────────────── */}
      <Section title="Fuel Type" defaultOpen={false}>
        {FUEL_TYPES.map((ft) => (
          <CheckRow
            key={ft}
            label={ft}
            checked={filters.fuelTypes.includes(ft)}
            onChange={() => set({ fuelTypes: toggle(filters.fuelTypes, ft) })}
          />
        ))}
      </Section>

      {/* ── Transmission ────────────────────────────────── */}
      <Section title="Transmission" defaultOpen={false}>
        {TRANSMISSIONS.map((tx) => (
          <CheckRow
            key={tx}
            label={tx}
            checked={filters.transmissions.includes(tx)}
            onChange={() => set({ transmissions: toggle(filters.transmissions, tx) })}
          />
        ))}
      </Section>

      {/* ── Year ────────────────────────────────────────── */}
      <Section title="Year" defaultOpen={false}>
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <label className="label-fm" style={{ fontSize: "0.7rem" }}>From</label>
            <input
              type="number"
              min={2000}
              max={new Date().getFullYear()}
              placeholder="2000"
              value={filters.yearMin ?? ""}
              onChange={(e) => set({ yearMin: e.target.value ? Number(e.target.value) : undefined })}
              className="input-fm text-sm"
              style={{ padding: "0.5rem 0.75rem" }}
            />
          </div>
          <span className="mt-5 text-gray-400 text-sm">–</span>
          <div className="flex-1">
            <label className="label-fm" style={{ fontSize: "0.7rem" }}>To</label>
            <input
              type="number"
              min={2000}
              max={new Date().getFullYear()}
              placeholder="Now"
              value={filters.yearMax ?? ""}
              onChange={(e) => set({ yearMax: e.target.value ? Number(e.target.value) : undefined })}
              className="input-fm text-sm"
              style={{ padding: "0.5rem 0.75rem" }}
            />
          </div>
        </div>
      </Section>

      {/* ── Kilometres ──────────────────────────────────── */}
      <Section title="Kilometres" defaultOpen={false}>
        <label className="label-fm" style={{ fontSize: "0.7rem" }}>Max KM driven</label>
        <input
          type="number"
          min={0}
          placeholder="Any"
          value={filters.kmMax ?? ""}
          onChange={(e) => set({ kmMax: e.target.value ? Number(e.target.value) : undefined })}
          className="input-fm text-sm"
          style={{ padding: "0.5rem 0.75rem" }}
        />
        {/* Quick presets */}
        <div className="flex flex-wrap gap-1.5 mt-2">
          {[30000, 50000, 75000, 100000].map((km) => (
            <button
              key={km}
              type="button"
              onClick={() => set({ kmMax: filters.kmMax === km ? undefined : km })}
              className="text-xs px-2.5 py-1 rounded-full border transition-all"
              style={{
                background: filters.kmMax === km ? "var(--color-navy-900)" : "transparent",
                color: filters.kmMax === km ? "white" : "var(--color-navy-900)",
                borderColor: "var(--color-navy-900)",
                cursor: "pointer",
                fontWeight: 500,
              }}
            >
              {km >= 1000 ? `${km / 1000}k` : km}
            </button>
          ))}
        </div>
      </Section>

      {/* ── Ownership ───────────────────────────────────── */}
      <Section title="Ownership" defaultOpen={false}>
        {OWNERSHIPS.map((own) => (
          <CheckRow
            key={own}
            label={own}
            checked={filters.ownerships.includes(own)}
            onChange={() => set({ ownerships: toggle(filters.ownerships, own) })}
          />
        ))}
      </Section>
    </aside>
  );
}
