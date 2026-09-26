import type { Metadata } from "next";
import { getAllCars, getAvailableBrands } from "@/data/inventory";
import InventoryClient from "@/components/inventory/InventoryClient";

export const metadata: Metadata = {
  title: "Browse Used Cars in Bulandshahr | First Motors",
  description:
    "Browse our full inventory of quality used cars in Bulandshahr. Filter by brand, budget, fuel type & more. Maruti Suzuki, Hyundai, Tata, Mahindra & more. Easy finance & test drives.",
  alternates: {
    canonical: "https://firstmotorsbsr.com/buy",
  },
};

export default function BuyPage() {
  const cars = getAllCars();
  const brands = getAvailableBrands();

  return (
    <div style={{ background: "var(--color-surface)", minHeight: "100vh" }}>
      {/* Page Header */}
      <div
        className="border-b"
        style={{ background: "white", borderColor: "#e5e7eb" }}
      >
        <div className="container-fm py-6">
          {/* Breadcrumb */}
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
            Quality pre-owned cars — transparently priced, carefully selected.
          </p>
        </div>
      </div>

      <InventoryClient initialCars={cars} availableBrands={brands} />
    </div>
  );
}
