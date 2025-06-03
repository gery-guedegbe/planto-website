"use client";

import Image from "next/image";
import { ShoppingBag } from "lucide-react";

import FadeInWhenVisible from "@/components/FadeInWhenVisible";
import FadeInSection from "@/components/FadeInSection";

import plant1 from "@assets/images/plant-1.png";
import plant2 from "@assets/images/plant-2.png";
import plant3 from "@assets/images/plant-3.png";
import plant4 from "@assets/images/plant-4.png";
import plant5 from "@assets/images/plant-5.png";
import plant6 from "@assets/images/plant-6.png";
import plant7 from "@assets/images/plant-7.png";

const products = [
  { id: 1, name: "Calathea plant", price: "359", image: plant1 },
  { id: 2, name: "Calathea plant", price: "359", image: plant2 },
  { id: 3, name: "Calathea plant", price: "359", image: plant3 },
  { id: 4, name: "Calathea plant", price: "359", image: plant4 },
  { id: 5, name: "Calathea plant", price: "359", image: plant5 },
  { id: 6, name: "Calathea plant", price: "359", image: plant6 },
  { id: 7, name: "Calathea plant", price: "359", image: plant7 },
];

const OurTopSelling = () => {
  return (
    <section className="w-full">
      {/* Section title */}
      <FadeInWhenVisible direction="up">
        <div className="mb-10 text-center">
          <h2 className="relative inline-block text-2xl font-semibold text-white after:mx-auto after:mt-2 after:block after:h-[4px] after:w-[50%] after:rounded-full after:bg-green-500 after:content-[''] sm:text-3xl lg:text-4xl">
            Our Top Selling
          </h2>
        </div>
      </FadeInWhenVisible>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map(({ id, name, price, image }, index) => (
          <FadeInSection key={id} delay={index * 0.2}>
            <div className="flex flex-col items-center justify-between rounded-[30px] bg-white/5 p-6 text-center text-white shadow-lg backdrop-blur-md lg:p-8">
              <Image
                src={image}
                alt={name}
                className="mb-4 h-auto w-[140px] object-contain lg:w-[160px]"
              />

              <h3 className="mb-1 text-xl font-semibold sm:text-2xl">{name}</h3>

              <p className="mb-2 max-w-3xl text-sm text-white/70 lg:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>

              <div className="flex w-full items-center justify-between">
                <span className="text-lg font-semibold sm:text-xl">
                  Rs. {price}/-
                </span>

                <button className="flex cursor-pointer items-center rounded-md border border-white px-4 py-1.5 text-sm font-medium transition hover:bg-white hover:text-black">
                  <ShoppingBag className="h-auto w-[20px] lg:w-[24px]" />
                </button>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
};

export default OurTopSelling;
