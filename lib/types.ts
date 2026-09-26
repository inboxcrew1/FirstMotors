// =============================================================================
// FIRST MOTORS — TYPE DEFINITIONS
// =============================================================================

export type FuelType = "Petrol" | "Diesel" | "CNG" | "Electric" | "Hybrid";
export type TransmissionType = "Manual" | "Automatic" | "AMT" | "DCT" | "CVT";
export type OwnershipType = "1st Owner" | "2nd Owner" | "3rd Owner" | "4th+ Owner";
export type BodyType = "Hatchback" | "Sedan" | "SUV" | "MUV" | "Coupe" | "Convertible" | "Pickup" | "Van";
export type CarStatus = "available" | "sold" | "reserved" | "coming_soon";
export type InspectionStatus = "good" | "fair" | "needs_attention" | "not_checked";

export interface CarImage {
  url: string;
  alt: string;
  type: "exterior_front" | "exterior_rear" | "side" | "interior" | "dashboard" | "seats" | "engine" | "boot" | "odometer" | "other";
}

export interface InspectionItem {
  category: string;
  items: {
    name: string;
    status: InspectionStatus;
    notes?: string;
  }[];
}

export interface CarListing {
  id: string;
  stockId: string;
  slug: string;

  // Vehicle info
  brand: string;
  model: string;
  variant: string;
  year: number;
  bodyType: BodyType;
  color: string;

  // Specs
  fuelType: FuelType;
  transmission: TransmissionType;
  engine: string; // e.g. "1197cc"
  mileage: string; // e.g. "22 kmpl"
  seats: number;

  // Ownership & history
  ownership: OwnershipType;
  kmDriven: number;
  registrationYear: number;
  registrationState: string;
  insuranceExpiry?: string; // "MM/YYYY" or "Expired"
  insuranceType?: "Comprehensive" | "Third Party";
  hypothecation?: boolean; // loan on car
  accidentHistory?: boolean | null; // null = unknown

  // Pricing
  price: number; // in lakhs (e.g., 6.25 for ₹6.25 Lakh)
  priceNegotiable?: boolean;

  // Location
  location: string;
  dealerCity: string;

  // Status
  status: CarStatus;
  featured?: boolean;
  verified?: boolean;

  // Images
  images: CarImage[];
  thumbnailUrl: string;

  // Description
  description?: string;
  features?: string[];

  // Inspection
  inspectionItems?: InspectionItem[];

  // Metadata
  listedDate: string; // ISO date string
  updatedDate: string;
}

export type LeadType =
  | "car_enquiry"
  | "test_drive"
  | "sell_car"
  | "exchange"
  | "finance"
  | "callback"
  | "whatsapp"
  | "valuation";

export interface Lead {
  id?: string;
  type: LeadType;
  name: string;
  phone: string;
  whatsapp?: string;
  email?: string;
  carId?: string;
  carName?: string;
  message?: string;
  preferredDate?: string;
  preferredTime?: string;
  source?: string;
  timestamp?: string;
}

export interface EMICalculation {
  carPrice: number;
  downPayment: number;
  loanAmount: number;
  tenureMonths: number;
  interestRate: number;
  emi: number;
  totalInterest: number;
  totalPayable: number;
}

export interface FilterState {
  brands: string[];
  bodyTypes: BodyType[];
  fuelTypes: FuelType[];
  transmissions: TransmissionType[];
  ownerships: OwnershipType[];
  priceMin?: number;
  priceMax?: number;
  yearMin?: number;
  yearMax?: number;
  kmMax?: number;
  locations: string[];
  search?: string;
}

export type SortOption =
  | "recommended"
  | "price_asc"
  | "price_desc"
  | "newest"
  | "lowest_km";
