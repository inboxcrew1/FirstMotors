// =============================================================================
// FIRST MOTORS — BRANDS & MODELS REFERENCE DATA
// =============================================================================

export const POPULAR_BRANDS = [
  "Maruti Suzuki",
  "Hyundai",
  "Tata",
  "Honda",
  "Toyota",
  "Kia",
  "Mahindra",
  "Volkswagen",
  "Renault",
  "Ford",
  "Skoda",
  "MG",
  "Jeep",
  "Nissan",
  "Datsun",
];

export const BRAND_MODELS: Record<string, string[]> = {
  "Maruti Suzuki": ["Swift", "Baleno", "Dzire", "Alto", "WagonR", "Ertiga", "Vitara Brezza", "Ignis", "Ciaz", "S-Cross", "Grand Vitara", "Fronx", "Jimny"],
  "Hyundai": ["Creta", "i20", "Venue", "Verna", "Alcazar", "Tucson", "i10", "Aura", "Elantra", "Santro"],
  "Tata": ["Nexon", "Punch", "Tiago", "Tigor", "Harrier", "Safari", "Altroz", "Hexa"],
  "Honda": ["City", "Amaze", "Jazz", "WR-V", "CR-V", "HR-V", "Elevate"],
  "Toyota": ["Innova Crysta", "Fortuner", "Glanza", "Urban Cruiser", "Camry", "Yaris", "Hyryder"],
  "Kia": ["Seltos", "Sonet", "Carens", "EV6"],
  "Mahindra": ["XUV700", "XUV300", "Thar", "Scorpio", "Bolero", "Marazzo", "BE6"],
  "Volkswagen": ["Polo", "Vento", "Taigun", "Tiguan"],
  "Renault": ["Kwid", "Triber", "Kiger", "Duster"],
  "Ford": ["EcoSport", "Endeavour", "Figo", "Aspire"],
  "Skoda": ["Kushaq", "Slavia", "Octavia", "Superb", "Kodiaq"],
  "MG": ["Hector", "ZS EV", "Astor", "Gloster"],
  "Jeep": ["Compass", "Meridian", "Wrangler"],
  "Nissan": ["Magnite", "Kicks"],
  "Datsun": ["GO", "GO+", "Redi-GO"],
};

export const BUDGET_CHIPS = [
  { label: "Under ₹3 Lakh", min: 0, max: 3 },
  { label: "₹3 – 5 Lakh", min: 3, max: 5 },
  { label: "₹5 – 8 Lakh", min: 5, max: 8 },
  { label: "₹8 – 12 Lakh", min: 8, max: 12 },
  { label: "₹12 Lakh+", min: 12, max: 999 },
];
