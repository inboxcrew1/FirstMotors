import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import TrustStrip from "@/components/home/TrustStrip";
import FeaturedCars from "@/components/home/FeaturedCars";
import SellCTABanner from "@/components/home/SellCTABanner";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import LocationSection from "@/components/home/LocationSection";
import MobileStickyCTA from "@/components/layout/MobileStickyCTA";

export const metadata: Metadata = {
  title: "Used Cars in Bulandshahr | First Motors — Second Hand Car Dealer",
  description:
    "Buy quality second-hand cars in Bulandshahr at First Motors. 100+ cars available in showroom stock. Maruti Suzuki, Hyundai, Tata & more. Transparent pricing, easy EMI & test drives.",
  alternates: {
    canonical: "https://firstmotorsbsr.com",
  },
  openGraph: {
    type: "website",
    url: "https://firstmotorsbsr.com",
    siteName: "First Motors",
    title: "Used Cars in Bulandshahr | First Motors — Second Hand Car Dealer",
    description: "Buy quality second-hand cars in Bulandshahr at First Motors. 100+ cars available in showroom stock. Transparent pricing, easy EMI & test drives.",
    images: [{ url: "https://firstmotorsbsr.com/showroom.jpg", width: 1200, height: 630, alt: "First Motors Showroom Bulandshahr" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Used Cars in Bulandshahr | First Motors",
    description: "100+ pre-owned cars available at our Chandpur Road showroom in Bulandshahr.",
    images: ["https://firstmotorsbsr.com/showroom.jpg"],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <FeaturedCars />
      <SellCTABanner />
      <WhyChooseUs />
      <Testimonials />
      <LocationSection />
      <MobileStickyCTA />
    </>
  );
}
