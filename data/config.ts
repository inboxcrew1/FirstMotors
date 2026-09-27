// =============================================================================
// FIRST MOTORS — BUSINESS CONFIGURATION
// Official business details, contact persons, showroom address, and logo paths.
// =============================================================================

export const SITE_CONFIG = {
  name: "First Motors",
  tagline: "Trusted Pre-Owned Cars. Transparent Deals. Easy Ownership.",
  shortTagline: "Find Your Right Car. With Confidence.",
  description:
    "Quality pre-owned cars, transparent pricing and a simpler way to buy, sell or exchange your car in Bulandshahr and Western UP.",
  url: "https://firstmotorsbsr.com",

  // Primary contacts (Shariq Ansari: 8267871486 / Shamir Khan: 9953950721)
  phone: "+918267871486",
  phoneDisplay: "+91 82678 71486",
  whatsapp: "+918267871486",
  whatsappDisplay: "+91 82678 71486",
  email: "info@firstmotorsbsr.com",

  // Dealership Team / Key Contacts
  contacts: [
    {
      name: "Shariq Ansari",
      phone: "+918267871486",
      phoneDisplay: "+91 82678 71486",
      whatsapp: "+918267871486",
      whatsappDisplay: "+91 82678 71486",
    },
    {
      name: "Shamir Khan",
      phone: "+919953950721",
      phoneDisplay: "+91 99539 50721",
      whatsapp: "+919953950721",
      whatsappDisplay: "+91 99539 50721",
    },
  ],

  // Dealership Showroom Address
  address: {
    line1: "Chandpur Road, near Kalyan Singh Rajkiya Medical College",
    city: "Bulandshahr",
    state: "Uttar Pradesh",
    pincode: "203001",
    country: "India",
    full: "Chandpur Road, near Kalyan Singh Rajkiya Medical College, Bulandshahr, Uttar Pradesh - 203001, India",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Chandpur+Road+Kalyan+Singh+Medical+College+Bulandshahr+203001",
    googleMapsEmbed: "https://maps.google.com/maps?q=Kalyan+Singh+Medical+College+Chandpur+Road+Bulandshahr+Uttar+Pradesh&t=&z=14&ie=UTF8&iwloc=&output=embed",
  },

  social: {
    instagram: "https://www.instagram.com/first_motors_bulandshahr_/",
    facebook: "",
    youtube: "",
  },

  hours: {
    weekdays: "9:30 AM – 7:30 PM",
    saturday: "9:30 AM – 7:30 PM",
    sunday: "9:30 AM – 7:30 PM",
    allDays: "9:30 AM – 7:30 PM (All 7 Days)",
  },

  // Official Logo Assets
  logo: "/logo.png",
  logoWhite: "/logo-white.png",

  ogImage: "/showroom.jpg",
};

export const WHATSAPP_MESSAGES = {
  general: `Hello First Motors! I'd like to know more about your pre-owned cars.`,
  carEnquiry: (carName: string, year: number, km: string, stockId: string) =>
    `Hello First Motors,\n\nI am interested in the *${carName}* (${year}, ${km} km).\nStock ID: ${stockId}\n\nPlease share more details.`,
  testDrive: (carName: string, stockId: string) =>
    `Hello First Motors,\n\nI'd like to book a test drive for the *${carName}*.\nStock ID: ${stockId}\n\nPlease let me know the available slots.`,
  sellCar: `Hello First Motors,\n\nI'd like to sell/exchange my car. Please help me with a valuation.`,
  finance: `Hello First Motors,\n\nI'm interested in car finance / EMI options. Please share details.`,
};
