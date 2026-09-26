import type { Metadata } from "next";
import { getAllCars, getAvailableBrands } from "@/data/inventory";
import InventoryClient from "@/components/inventory/InventoryClient";

export const metadata: Metadata = {
  title: "Used Cars in Bulandshahr — Buy Second Hand Cars | First Motors",
  description:
    "Browse quality used cars in Bulandshahr at First Motors. Find second-hand Maruti Suzuki, Hyundai, Tata, Mahindra & more. Transparent pricing, easy EMI, test drives available.",
  keywords: [
    "used cars Bulandshahr",
    "second hand cars Bulandshahr",
    "used car dealer Bulandshahr",
    "buy used car Bulandshahr",
    "pre-owned cars Bulandshahr",
  ],
  alternates: {
    canonical: "https://firstmotorsbsr.com/used-cars",
  },
};

export default function UsedCarsPage() {
  const cars = getAllCars();
  const brands = getAvailableBrands();

  return (
    <div style={{ background: "var(--color-surface)", minHeight: "100vh" }}>
      <div className="border-b" style={{ background: "white", borderColor: "#e5e7eb" }}>
        <div className="container-fm py-6">
          <nav className="text-xs text-gray-400 mb-2" aria-label="breadcrumb">
            <ol className="flex items-center gap-1.5">
              <li><a href="/" className="hover:text-gray-600">Home</a></li>
              <li>/</li>
              <li className="text-gray-600 font-medium">Used Cars in Bulandshahr</li>
            </ol>
          </nav>
          <h1
            className="text-2xl sm:text-3xl font-extrabold"
            style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}
          >
            Used Cars in Bulandshahr
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Quality second-hand cars — transparently priced, carefully selected by First Motors.
          </p>
        </div>
      </div>
      <InventoryClient initialCars={cars} availableBrands={brands} />
    </div>
  );
}
