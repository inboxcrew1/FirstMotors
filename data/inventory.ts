// =============================================================================
// FIRST MOTORS — VEHICLE INVENTORY
// Verified quality pre-owned vehicles.
// =============================================================================

import type { CarListing } from "@/lib/types";

const INVENTORY: CarListing[] = [
  {
    id: "maruti-suzuki-alto-k10-vxi-2017",
    stockId: "FM-2017-ALTO",
    slug: "maruti-suzuki-alto-k10-vxi-2017",

    // Vehicle info
    brand: "Maruti Suzuki",
    model: "Alto K10",
    variant: "VXI",
    year: 2017,
    color: "White",

    // Specs
    fuelType: "Petrol + CNG",
    transmission: "Manual",
    seats: 5,

    // Ownership & history
    ownership: "1st Owner",
    kmDriven: 63000,
    registrationYear: 2017,
    registrationState: "UP",
    insuranceExpiry: "Valid",
    insuranceType: "Comprehensive",
    hypothecation: false,
    accidentHistory: false,

    // Pricing
    price: 2.50,
    priceNegotiable: false,

    // Location
    location: "Bulandshahr",
    dealerCity: "Bulandshahr",

    // Status
    status: "available",
    featured: true,
    verified: true,

    // Images
    thumbnailUrl: "/cars/maruti-suzuki-alto-k10-vxi-2017/01-front.jpg",
    images: [
      {
        url: "/cars/maruti-suzuki-alto-k10-vxi-2017/01-front.jpg",
        alt: "White Maruti Suzuki Alto K10 VXI front view at First Motors Bulandshahr UP13BA2156",
        type: "exterior_front",
      },
      {
        url: "/cars/maruti-suzuki-alto-k10-vxi-2017/02-front-right.jpg",
        alt: "Maruti Suzuki Alto K10 VXI front right quarter view at First Motors",
        type: "exterior_front",
      },
      {
        url: "/cars/maruti-suzuki-alto-k10-vxi-2017/03-side-profile.jpg",
        alt: "Maruti Suzuki Alto K10 VXI white side profile view",
        type: "side",
      },
      {
        url: "/cars/maruti-suzuki-alto-k10-vxi-2017/04-rear.jpg",
        alt: "Maruti Suzuki Alto K10 VXI rear view showing UP13BA2156 registration plate and K10 VXI badge",
        type: "exterior_rear",
      },
      {
        url: "/cars/maruti-suzuki-alto-k10-vxi-2017/05-front-wide.jpg",
        alt: "Maruti Suzuki Alto K10 VXI showroom front view",
        type: "exterior_front",
      },
      {
        url: "/cars/maruti-suzuki-alto-k10-vxi-2017/06-interior-dashboard.jpg",
        alt: "Maruti Suzuki Alto K10 VXI dashboard, steering wheel and centre console",
        type: "dashboard",
      },
      {
        url: "/cars/maruti-suzuki-alto-k10-vxi-2017/07-interior-cabin.jpg",
        alt: "Maruti Suzuki Alto K10 VXI driver cockpit and front beige upholstery seats",
        type: "interior",
      },
      {
        url: "/cars/maruti-suzuki-alto-k10-vxi-2017/08-interior-rear-seats.jpg",
        alt: "Maruti Suzuki Alto K10 VXI rear passenger seating row",
        type: "seats",
      },
      {
        url: "/cars/maruti-suzuki-alto-k10-vxi-2017/09-steering-odometer.jpg",
        alt: "Maruti Suzuki Alto K10 VXI steering wheel and instrument cluster",
        type: "odometer",
      },
      {
        url: "/cars/maruti-suzuki-alto-k10-vxi-2017/10-engine-bay.jpg",
        alt: "Maruti Suzuki Alto K10 VXI engine bay showing Suzuki engine and CNG compliance plate",
        type: "engine",
      },
      {
        url: "/cars/maruti-suzuki-alto-k10-vxi-2017/11-engine-top.jpg",
        alt: "Maruti Suzuki Alto K10 VXI engine compartment top view",
        type: "engine",
      },
      {
        url: "/cars/maruti-suzuki-alto-k10-vxi-2017/12-engine-cng.jpg",
        alt: "Maruti Suzuki Alto K10 VXI engine bay and front grille showing UP13BA2156 plate",
        type: "engine",
      },
      {
        url: "/cars/maruti-suzuki-alto-k10-vxi-2017/13-wheel-tyre.jpg",
        alt: "Maruti Suzuki Alto K10 VXI front right wheel, tyre and side quarter profile",
        type: "other",
      },
    ],

    // Description
    description:
      "2017/18 Maruti Suzuki Alto K10 VXI in White finish, registered in Uttar Pradesh (Registration: UP13BA2156). 1st Owner vehicle with 63,000 km driven. Dual fuel Petrol + CNG setup with manual transmission. Equipped with Power Steering, Front Power Windows, ABS with EBD, Keyless Entry, Manual Air Conditioning, Speed Sensing Door Locks, and Dual Airbags. Clear title with no active loan/hypothecation and valid insurance. Available for test drive and physical inspection at First Motors showroom, Chandpur Road, Kalyan Singh Medical College, Bulandshahr.",

    // Features
    features: [
      "Power Steering",
      "Front Power Windows",
      "ABS with EBD",
      "Keyless Entry",
      "Manual Air Conditioning",
      "Speed Sensing Door Locks",
      "Dual Airbags",
    ],

    // Metadata
    listedDate: "2026-09-24T00:00:00.000Z",
    updatedDate: "2026-09-26T15:00:00.000Z",
  },
  {
    id: "hyundai-i10-magna-sportz-2013",
    stockId: "FM-2013-I10",
    slug: "hyundai-i10-magna-sportz-2013",

    // Vehicle info
    brand: "Hyundai",
    model: "i10",
    variant: "Magna Sportz",
    year: 2013,
    color: "Red",

    // Specs
    fuelType: "Petrol",
    transmission: "Manual",
    seats: 5,

    // Ownership & history
    ownership: "1st Owner",
    kmDriven: 75200,
    registrationYear: 2013,
    registrationState: "DL",
    hypothecation: false,

    // Pricing
    price: 1.75,
    priceNegotiable: false,

    // Location
    location: "Bulandshahr",
    dealerCity: "Bulandshahr",

    // Status
    status: "available",
    featured: true,
    verified: true,

    // Images
    thumbnailUrl: "/cars/hyundai-i10-magna-sportz-2013/01-front.jpg",
    images: [
      {
        url: "/cars/hyundai-i10-magna-sportz-2013/01-front.jpg",
        alt: "Red Hyundai i10 Magna Sportz front view at First Motors Bulandshahr DL2CAR3681",
        type: "exterior_front",
      },
      {
        url: "/cars/hyundai-i10-magna-sportz-2013/02-front-side.jpg",
        alt: "Hyundai i10 Magna Sportz front left three-quarter and side profile at First Motors",
        type: "exterior_front",
      },
      {
        url: "/cars/hyundai-i10-magna-sportz-2013/03-rear.jpg",
        alt: "Hyundai i10 Magna Sportz rear exterior view showing i10 Magna badge and DL2CAR3681 registration plate",
        type: "exterior_rear",
      },
      {
        url: "/cars/hyundai-i10-magna-sportz-2013/04-steering-cluster.jpg",
        alt: "Hyundai i10 Magna Sportz steering wheel, speedometer and instrument cluster",
        type: "odometer",
      },
      {
        url: "/cars/hyundai-i10-magna-sportz-2013/05-dashboard.jpg",
        alt: "Hyundai i10 Magna Sportz front cabin interior dashboard with wooden trim, audio console and AC controls",
        type: "dashboard",
      },
    ],

    // Description
    description:
      "2013 Hyundai i10 Magna Sportz in Red finish, registered in Delhi (Registration: DL2CAR3681). 1st Owner vehicle with approximately 75,200 km driven. Powered by a Petrol engine with manual transmission. Equipped with Power Steering, Manual AC, Keyless Entry, Speed Sensing Door Locks, Front & Rear Power Windows, Dual Airbags, and ABS with EBD. Clear title with no active loan/hypothecation. Available for test drive and physical inspection at First Motors showroom, Chandpur Road, Kalyan Singh Medical College, Bulandshahr.",

    // Features
    features: [
      "Power Steering",
      "Manual AC",
      "Keyless Entry",
      "Speed Sensing Door Locks",
      "Front & Rear Power Windows",
      "Dual Airbags",
      "ABS with EBD",
    ],

    // Metadata
    listedDate: "2026-09-24T00:00:00.000Z",
    updatedDate: "2026-09-26T16:00:00.000Z",
  },
  {
    id: "maruti-suzuki-swift-vxi-2017",
    stockId: "FM-2017-SWIFT",
    slug: "maruti-suzuki-swift-vxi-2017",

    // Vehicle info
    brand: "Maruti Suzuki",
    model: "Swift",
    variant: "VXI",
    year: 2017,
    color: "Grey",

    // Specs
    fuelType: "Petrol",
    transmission: "Manual",
    seats: 5,

    // Ownership & history
    ownership: "1st Owner",
    kmDriven: 62000,
    registrationYear: 2017,
    registrationState: "DL",
    hypothecation: false,

    // Pricing
    price: 3.25,
    priceNegotiable: false,

    // Location
    location: "Bulandshahr",
    dealerCity: "Bulandshahr",

    // Status
    status: "available",
    featured: true,
    verified: true,

    // Images
    thumbnailUrl: "/cars/maruti-suzuki-swift-vxi-2017/01-front.jpg",
    images: [
      {
        url: "/cars/maruti-suzuki-swift-vxi-2017/01-front.jpg",
        alt: "Grey Maruti Suzuki Swift VXI front view showing DL2CAX3860 registration plate at First Motors Bulandshahr",
        type: "exterior_front",
      },
      {
        url: "/cars/maruti-suzuki-swift-vxi-2017/02-front-right.jpg",
        alt: "Maruti Suzuki Swift VXI front right quarter and wheel profile",
        type: "exterior_front",
      },
      {
        url: "/cars/maruti-suzuki-swift-vxi-2017/03-rear-right.jpg",
        alt: "Maruti Suzuki Swift VXI rear right three-quarter profile showing DL2CAX3860 plate",
        type: "side",
      },
      {
        url: "/cars/maruti-suzuki-swift-vxi-2017/04-rear.jpg",
        alt: "Maruti Suzuki Swift VXI direct rear exterior view with Swift and VXI badges and DL2CAX3860 plate",
        type: "exterior_rear",
      },
      {
        url: "/cars/maruti-suzuki-swift-vxi-2017/05-side-profile.jpg",
        alt: "Maruti Suzuki Swift VXI side profile view at First Motors",
        type: "side",
      },
      {
        url: "/cars/maruti-suzuki-swift-vxi-2017/06-interior-dashboard.jpg",
        alt: "Maruti Suzuki Swift VXI cockpit, dashboard, audio system and steering wheel",
        type: "dashboard",
      },
      {
        url: "/cars/maruti-suzuki-swift-vxi-2017/07-dashboard-wide.jpg",
        alt: "Maruti Suzuki Swift VXI wide windshield and cabin interior view",
        type: "interior",
      },
      {
        url: "/cars/maruti-suzuki-swift-vxi-2017/08-interior-seats.jpg",
        alt: "Maruti Suzuki Swift VXI rear seat passenger upholstery",
        type: "seats",
      },
      {
        url: "/cars/maruti-suzuki-swift-vxi-2017/09-rear-detail.jpg",
        alt: "Maruti Suzuki Swift VXI tailgate close-up and chrome garnish",
        type: "other",
      },
    ],

    // Description
    description:
      "2017 Maruti Suzuki Swift VXI in Grey finish, registered in Delhi (Registration: DL2CAX3860). 1st Owner vehicle with 62,000 km driven. Powered by a Petrol engine with manual transmission. Equipped with Power Steering, Front & Rear Power Windows, ABS with EBD, Keyless Entry, Speed Sensing Door Locks, Manual AC, and Dual Airbags. Clear title with no active loan/hypothecation. Available for test drive and physical inspection at First Motors showroom, Chandpur Road, Kalyan Singh Medical College, Bulandshahr.",

    // Features
    features: [
      "Power Steering",
      "Front & Rear Power Windows",
      "ABS with EBD",
      "Keyless Entry",
      "Speed Sensing Door Locks",
      "Manual AC",
      "Dual Airbags",
    ],

    // Metadata
    listedDate: "2026-09-24T00:00:00.000Z",
    updatedDate: "2026-09-26T17:00:00.000Z",
  },
  {
    id: "maruti-suzuki-swift-vxi-cng-2019",
    stockId: "FM-2019-SWIFT-CNG",
    slug: "maruti-suzuki-swift-vxi-cng-2019",

    // Vehicle info
    brand: "Maruti Suzuki",
    model: "Swift",
    variant: "VXI CNG",
    year: 2019,
    color: "White",

    // Specs
    fuelType: "Petrol + CNG",
    transmission: "Manual",
    seats: 5,

    // Ownership & history
    ownership: "1st Owner",
    kmDriven: 60130,
    registrationYear: 2019,
    registrationState: "Delhi",
    hypothecation: false,

    // Pricing
    price: 4.50,
    priceNegotiable: false,

    // Location
    location: "Bulandshahr",
    dealerCity: "Bulandshahr",

    // Status
    status: "available",
    featured: true,
    verified: true,

    // Images
    thumbnailUrl: "/cars/maruti-suzuki-swift-vxi-cng-2019/01-front.jpg",
    images: [
      {
        url: "/cars/maruti-suzuki-swift-vxi-cng-2019/01-front.jpg",
        alt: "White Maruti Suzuki Swift VXI CNG front exterior view with DL 5CQ 4153 registration plate at First Motors Bulandshahr",
        type: "exterior_front",
      },
      {
        url: "/cars/maruti-suzuki-swift-vxi-cng-2019/02-front-right.jpg",
        alt: "Maruti Suzuki Swift VXI CNG front right three-quarter angle",
        type: "exterior_front",
      },
      {
        url: "/cars/maruti-suzuki-swift-vxi-cng-2019/03-side-profile.jpg",
        alt: "Maruti Suzuki Swift VXI CNG showroom side profile view",
        type: "side",
      },
      {
        url: "/cars/maruti-suzuki-swift-vxi-cng-2019/04-rear.jpg",
        alt: "Maruti Suzuki Swift VXI CNG direct rear view showing DL 5CQ 4153 plate",
        type: "exterior_rear",
      },
      {
        url: "/cars/maruti-suzuki-swift-vxi-cng-2019/05-interior-dashboard.jpg",
        alt: "Maruti Suzuki Swift VXI CNG dashboard with Sony audio unit and steering controls",
        type: "dashboard",
      },
      {
        url: "/cars/maruti-suzuki-swift-vxi-cng-2019/06-interior-cabin.jpg",
        alt: "Maruti Suzuki Swift VXI CNG illuminated front cabin and seats",
        type: "interior",
      },
      {
        url: "/cars/maruti-suzuki-swift-vxi-cng-2019/07-interior-rear-seats.jpg",
        alt: "Maruti Suzuki Swift VXI CNG rear passenger seating and legroom",
        type: "seats",
      },
      {
        url: "/cars/maruti-suzuki-swift-vxi-cng-2019/08-steering-odometer.jpg",
        alt: "Maruti Suzuki Swift VXI CNG steering wheel and odometer instrument cluster displaying 60,130 km",
        type: "odometer",
      },
      {
        url: "/cars/maruti-suzuki-swift-vxi-cng-2019/09-engine-bay.jpg",
        alt: "Maruti Suzuki Swift VXI CNG engine bay showing Motozen CNG sequential kit setup",
        type: "engine",
      },
    ],

    // Description
    description:
      "2019 Maruti Suzuki Swift VXI CNG in White finish, registered in Delhi (Registration: DL5CQ4153). 1st Owner vehicle with 60,130 km driven. Dual fuel Petrol + CNG setup with manual transmission. Equipped with Power Steering, Front & Rear Power Windows, Keyless Entry, Manual AC, Speed Sensing Door Locks, Dual Airbags, and ABS with EBD. Clear title with no active loan/hypothecation. Available for test drive and physical inspection at First Motors showroom, Chandpur Road, Kalyan Singh Medical College, Bulandshahr.",

    // Features
    features: [
      "Power Steering",
      "Front & Rear Power Windows",
      "Keyless Entry",
      "Manual AC",
      "Speed Sensing Door Locks",
      "Dual Airbags",
      "ABS with EBD",
    ],

    // Metadata
    listedDate: "2026-09-24T00:00:00.000Z",
    updatedDate: "2026-09-26T17:00:00.000Z",
  },
  {
    id: "hyundai-grand-i10-magna-2016",
    stockId: "FM-2016-GRAND-I10",
    slug: "hyundai-grand-i10-magna-2016",

    // Vehicle info
    brand: "Hyundai",
    model: "Grand i10",
    variant: "Magna",
    year: 2016,
    color: "Red",

    // Specs
    fuelType: "Petrol",
    transmission: "Manual",
    seats: 5,

    // Ownership & history
    ownership: "1st Owner",
    kmDriven: 52000,
    registrationYear: 2016,
    registrationState: "UP",
    hypothecation: false,

    // Pricing
    price: 3.00,
    priceNegotiable: true,

    // Location
    location: "Bulandshahr",
    dealerCity: "Bulandshahr",

    // Status
    status: "available",
    featured: true,
    verified: true,

    // Images
    thumbnailUrl: "/cars/hyundai-grand-i10-magna-2016/01-front.png",
    images: [
      {
        url: "/cars/hyundai-grand-i10-magna-2016/01-front.png",
        alt: "Red Hyundai Grand i10 Magna front right angle view at First Motors Bulandshahr UP16",
        type: "exterior_front",
      },
    ],

    // Description
    description:
      "2016 Hyundai Grand i10 Magna in Red finish, registered in Uttar Pradesh (Registration: UP16). 1st Owner vehicle with 52,000 km driven. Powered by a Petrol engine with manual transmission. Offered at ₹3.00 Lakh. Equipped with Power Steering, Keyless Entry, Speed Sensing Door Locks, Front & Rear Power Windows, Dual Airbags, Manual AC, and ABS with EBD. Clear title with no active loan/hypothecation. Available for test drive and physical inspection at First Motors showroom, Chandpur Road, Kalyan Singh Medical College, Bulandshahr.",

    // Features
    features: [
      "Power Steering",
      "Keyless Entry",
      "Speed Sensing Door Locks",
      "Front & Rear Power Windows",
      "Dual Airbags",
      "Manual AC",
      "ABS with EBD",
    ],

    // Metadata
    listedDate: "2026-09-24T00:00:00.000Z",
    updatedDate: "2026-09-26T17:00:00.000Z",
  },
  {
    id: "maruti-suzuki-celerio-vxi-cng-2018",
    stockId: "FM-2018-CELERIO-CNG",
    slug: "maruti-suzuki-celerio-vxi-cng-2018",

    // Vehicle info
    brand: "Maruti Suzuki",
    model: "Celerio",
    variant: "VXI CNG",
    year: 2018,
    color: "Grey",

    // Specs
    fuelType: "Petrol + CNG",
    transmission: "Manual",
    seats: 5,

    // Ownership & history
    ownership: "1st Owner",
    kmDriven: 55000,
    registrationYear: 2018,
    registrationState: "DL",
    hypothecation: false,

    // Pricing
    price: 3.65,
    priceNegotiable: true,

    // Location
    location: "Bulandshahr",
    dealerCity: "Bulandshahr",

    // Status
    status: "available",
    featured: true,
    verified: true,

    // Images
    thumbnailUrl: "/cars/maruti-suzuki-celerio-vxi-cng-2018/01-front.jpg",
    images: [
      {
        url: "/cars/maruti-suzuki-celerio-vxi-cng-2018/01-front.jpg",
        alt: "Grey Maruti Suzuki Celerio VXI CNG showroom front view at First Motors Bulandshahr",
        type: "exterior_front",
      },
    ],

    // Description
    description:
      "2018 Maruti Suzuki Celerio VXI CNG in Grey finish, registered in Delhi (Registration: DL 6CR 7139). 1st Owner vehicle with approximately 55,000 km driven. Dual fuel Petrol + CNG setup with manual transmission. Offered at ₹3.65 Lakh. Equipped with Power Steering, Front & Rear Power Windows, Keyless Entry, Dual Airbags, Speed Sensing Door Locks, Manual AC, and ABS with EBD. Clear title with no active loan/hypothecation. Available for test drive and physical inspection at First Motors showroom, Chandpur Road, Kalyan Singh Medical College, Bulandshahr.",

    // Features
    features: [
      "Power Steering",
      "Front & Rear Power Windows",
      "Keyless Entry",
      "Dual Airbags",
      "Speed Sensing Door Locks",
      "Manual AC",
      "ABS with EBD",
    ],

    // Metadata
    listedDate: "2026-09-24T00:00:00.000Z",
    updatedDate: "2026-09-26T17:00:00.000Z",
  },
  {
    id: "maruti-suzuki-wagonr-lxi-cng-2019",
    stockId: "FM-2019-WAGONR-CNG",
    slug: "maruti-suzuki-wagonr-lxi-cng-2019",

    // Vehicle info
    brand: "Maruti Suzuki",
    model: "WagonR",
    variant: "LXI CNG",
    year: 2019,
    color: "Grey",

    // Specs
    fuelType: "Petrol + CNG",
    transmission: "Manual",
    seats: 5,

    // Ownership & history
    ownership: "1st Owner",
    kmDriven: 92000,
    registrationYear: 2019,
    registrationState: "Delhi",
    hypothecation: false,

    // Pricing
    price: 4.00,
    priceNegotiable: false,

    // Location
    location: "Bulandshahr",
    dealerCity: "Bulandshahr",

    // Status
    status: "available",
    featured: true,
    verified: true,

    // Images
    thumbnailUrl: "/cars/maruti-suzuki-wagonr-lxi-cng-2019/01-front.jpg",
    images: [
      {
        url: "/cars/maruti-suzuki-wagonr-lxi-cng-2019/01-front.jpg",
        alt: "Grey Maruti Suzuki WagonR LXI CNG front view at First Motors Bulandshahr",
        type: "exterior_front",
      },
      {
        url: "/cars/maruti-suzuki-wagonr-lxi-cng-2019/02-front-left.jpg",
        alt: "Maruti Suzuki WagonR LXI CNG front left three-quarter angle",
        type: "exterior_front",
      },
      {
        url: "/cars/maruti-suzuki-wagonr-lxi-cng-2019/03-side-profile.jpg",
        alt: "Maruti Suzuki WagonR LXI CNG left side profile view",
        type: "side",
      },
      {
        url: "/cars/maruti-suzuki-wagonr-lxi-cng-2019/04-rear.jpg",
        alt: "Maruti Suzuki WagonR LXI CNG direct rear view with WagonR badging",
        type: "exterior_rear",
      },
      {
        url: "/cars/maruti-suzuki-wagonr-lxi-cng-2019/05-cng-boot.jpg",
        alt: "Maruti Suzuki WagonR LXI CNG boot space and factory CNG cylinder installation",
        type: "boot",
      },
      {
        url: "/cars/maruti-suzuki-wagonr-lxi-cng-2019/06-interior-dashboard.jpg",
        alt: "Maruti Suzuki WagonR LXI CNG steering wheel and dashboard view",
        type: "dashboard",
      },
      {
        url: "/cars/maruti-suzuki-wagonr-lxi-cng-2019/07-interior-cabin.jpg",
        alt: "Maruti Suzuki WagonR LXI CNG front dual-tone interior cabin",
        type: "interior",
      },
      {
        url: "/cars/maruti-suzuki-wagonr-lxi-cng-2019/08-steering-odometer.jpg",
        alt: "Maruti Suzuki WagonR LXI CNG speedometer and instrument cluster",
        type: "odometer",
      },
      {
        url: "/cars/maruti-suzuki-wagonr-lxi-cng-2019/09-interior-rear-seats.jpg",
        alt: "Maruti Suzuki WagonR LXI CNG rear passenger seating",
        type: "seats",
      },
    ],

    // Description
    description:
      "2019 Maruti Suzuki WagonR LXI CNG in Grey finish, registered in Delhi (Registration: DL 14CE 7516). 1st Owner vehicle with 92,000 km driven. Dual fuel Petrol + CNG setup with manual transmission. Equipped with Power Steering, Keyless Entry, Speed Sensing Door Locks, Front & Rear Power Windows, Manual AC, ABS with EBD, and Dual Airbags. Clear title with no active loan/hypothecation. Available for test drive and physical inspection at First Motors showroom, Chandpur Road, Kalyan Singh Medical College, Bulandshahr.",

    // Features
    features: [
      "Power Steering",
      "Keyless Entry",
      "Speed Sensing Door Locks",
      "Front & Rear Power Windows",
      "Manual AC",
      "ABS with EBD",
      "Dual Airbags",
    ],

    // Metadata
    listedDate: "2026-09-24T00:00:00.000Z",
    updatedDate: "2026-09-26T17:00:00.000Z",
  },
];

export function getAllCars(): CarListing[] {
  return INVENTORY;
}

export function getFeaturedCars(): CarListing[] {
  return INVENTORY.filter((c) => c.featured);
}

export function getCarBySlug(slug: string): CarListing | undefined {
  return INVENTORY.find((c) => c.slug === slug);
}

export function getCarById(id: string): CarListing | undefined {
  return INVENTORY.find((c) => c.id === id || c.stockId === id);
}

export function getRelatedCars(carOrId: CarListing | string, limit = 3): CarListing[] {
  const current = typeof carOrId === "string" ? getCarById(carOrId) : carOrId;
  if (!current) return INVENTORY.slice(0, limit);
  return INVENTORY
    .filter((c) => c.id !== current.id && ((current.bodyType && c.bodyType === current.bodyType) || c.brand === current.brand))
    .slice(0, limit);
}

export function getAvailableBrands(): string[] {
  return Array.from(new Set(INVENTORY.map((c) => c.brand))).sort();
}
