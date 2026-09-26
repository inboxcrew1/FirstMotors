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
    "Buy quality second-hand cars in Bulandshahr at First Motors. Browse our used car inventory — Maruti Suzuki, Hyundai, Tata & more. Transparent pricing, easy EMI & test drives.",
  alternates: {
    canonical: "https://firstmotorsbsr.com",
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
