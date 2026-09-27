import { MetadataRoute } from "next";
import { getAllCars } from "@/data/inventory";
import { SITE_CONFIG } from "@/data/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url; // https://firstmotorsbsr.com
  const cars = getAllCars();
  const now = new Date();

  // Canonical indexable static pages (non-canonical /used-cars removed as it 301 redirects to /buy)
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: "weekly", priority: 1.0, lastModified: now },
    { url: `${baseUrl}/buy`, changeFrequency: "daily", priority: 0.9, lastModified: now },
    { url: `${baseUrl}/sell`, changeFrequency: "monthly", priority: 0.8, lastModified: now },
    { url: `${baseUrl}/valuation`, changeFrequency: "monthly", priority: 0.8, lastModified: now },
    { url: `${baseUrl}/finance`, changeFrequency: "monthly", priority: 0.7, lastModified: now },
    { url: `${baseUrl}/exchange`, changeFrequency: "monthly", priority: 0.7, lastModified: now },
    { url: `${baseUrl}/test-drive`, changeFrequency: "monthly", priority: 0.7, lastModified: now },
    { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.6, lastModified: now },
    { url: `${baseUrl}/why-first-motors`, changeFrequency: "monthly", priority: 0.6, lastModified: now },
    { url: `${baseUrl}/inspection`, changeFrequency: "monthly", priority: 0.6, lastModified: now },
    { url: `${baseUrl}/contact`, changeFrequency: "monthly", priority: 0.7, lastModified: now },
    { url: `${baseUrl}/faq`, changeFrequency: "weekly", priority: 0.6, lastModified: now },
    { url: `${baseUrl}/used-car-buying-guide`, changeFrequency: "monthly", priority: 0.7, lastModified: now },
    { url: `${baseUrl}/privacy-policy`, changeFrequency: "yearly", priority: 0.3, lastModified: new Date("2026-09-01") },
    { url: `${baseUrl}/terms`, changeFrequency: "yearly", priority: 0.3, lastModified: new Date("2026-09-01") },
  ];

  // Verified vehicle listings with real vehicle images for search discovery
  const carPages: MetadataRoute.Sitemap = cars.map((car) => ({
    url: `${baseUrl}/car/${car.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
    lastModified: new Date(car.updatedDate),
    images: car.images.map((img) => `${baseUrl}${img.url}`),
  }));

  return [...staticPages, ...carPages];
}
