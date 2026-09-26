import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  if (price >= 100) {
    return `₹${(price / 100).toFixed(2)} Cr`;
  }
  return `₹${price.toFixed(2)} Lakh`;
}

export function formatPriceShort(price: number): string {
  if (price >= 100) {
    return `₹${(price / 100).toFixed(1)} Cr`;
  }
  return `₹${price.toFixed(2)}L`;
}

export function formatKm(km: number): string {
  if (km >= 1000) {
    return `${(km / 1000).toFixed(0)},000 km`;
  }
  return `${km} km`;
}

export function formatKmExact(km: number): string {
  return km.toLocaleString("en-IN") + " km";
}

export function formatWhatsAppLink(number: string, message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encoded}`;
}

export function formatPhoneLink(phone: string): string {
  return `tel:${phone.replace(/\s/g, "")}`;
}

export function getEMIEstimate(
  priceLakh: number,
  downPaymentPercent = 20,
  tenureMonths = 60,
  annualRate = 10.5
): number {
  const principal = (priceLakh * 100000 * (100 - downPaymentPercent)) / 100;
  const monthlyRate = annualRate / 12 / 100;
  if (monthlyRate === 0) return principal / tenureMonths;
  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
    (Math.pow(1 + monthlyRate, tenureMonths) - 1);
  return Math.round(emi);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function truncate(text: string, length: number): string {
  return text.length > length ? text.slice(0, length) + "…" : text;
}

export function getRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diff = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diff < 60) return "Just now";
  if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
  if (diff < 2592000) return `${Math.floor(diff / 86400)} days ago`;
  return `${Math.floor(diff / 2592000)} months ago`;
}
