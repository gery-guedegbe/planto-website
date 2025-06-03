"use client";

import Navbar from "@/components/Navbar/Navbar";
import CustomerReview from "@/sections/CustomerReview/CustomerReview";
import HeroSection from "@/sections/HeroSection/HeroSection";
import OurBest02 from "@/sections/OurBest02/OurBest02";
import OurTopSelling from "@/sections/OurTopSelling/OurTopSelling";

import plant_background from "@assets/images/plant-background.png";

export default function Home() {
  return (
    <div className="h-full w-full">
      <div
        style={{
          backgroundImage: `url(${plant_background.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="min-h-screen w-full"
      >
        <Navbar />
        <HeroSection />
      </div>

      <div className="h-full w-full px-6 md:px-4 lg:px-7">
        <OurTopSelling />
        <CustomerReview />
        <OurBest02 />
      </div>
    </div>
  );
}
