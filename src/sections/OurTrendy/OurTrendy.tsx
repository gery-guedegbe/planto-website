"use client";

import Image from "next/image";
import { ShoppingBag } from "lucide-react";

import FadeInSection from "@/components/FadeInSection";

import plant1 from "@assets/images/plant-1.png";
import plant2 from "@assets/images/plant-2.png";
import FadeInWhenVisible from "@/components/FadeInWhenVisible";

const TrendyPlants = () => {
  const cards = [
    {
      id: 1,
      title: "For Small Decs Ai Plat",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      price: "599",
      image: plant1,
      imageLeft: true,
    },
    {
      id: 2,
      title: "For Fresh Decs Ai Plat",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      price: "579",
      image: plant2,
      imageLeft: false,
    },
  ];

  return (
    <section className="w-full py-10 lg:py-16">
      <FadeInWhenVisible direction="up">
        <div className="mb-16 text-center">
          <h2 className="relative inline-block text-2xl font-semibold text-white after:mx-auto after:mt-2 after:block after:h-[4px] after:w-[50%] after:rounded-full after:bg-green-500 after:content-[''] sm:text-3xl lg:text-4xl">
            Our Trendy plants
          </h2>
        </div>
      </FadeInWhenVisible>

      <div className="flex flex-col gap-10">
        {cards.map(({ id, title, desc, price, image, imageLeft }, index) => (
          <FadeInSection key={id} delay={index * 0.2}>
            <div
              className={`flex flex-col-reverse items-center justify-between gap-6 overflow-hidden rounded-[40px] bg-white/5 p-7 text-white shadow-lg backdrop-blur-md md:flex-row ${
                imageLeft ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Text content */}
              <div className="flex-1 space-y-3 px-2 sm:px-6 lg:space-y-5">
                <h3 className="text-xl font-semibold sm:text-2xl">{title}</h3>

                <p className="max-w-3xl text-sm text-white/70 lg:text-base">
                  {desc}
                </p>

                <p className="text-lg font-semibold sm:text-xl">
                  Rs. {price}/-
                </p>

                <div className="mt-4 flex items-center gap-2 lg:mt-2.5 lg:gap-4">
                  <button className="flex cursor-pointer items-center rounded-md border border-white px-5 py-1.5 text-sm font-medium transition hover:bg-white hover:text-black lg:text-base">
                    Explore
                  </button>

                  <button className="flex cursor-pointer items-center rounded-md border border-white px-4 py-1.5 text-sm font-medium transition hover:bg-white hover:text-black">
                    <ShoppingBag className="h-auto w-[20px] lg:w-[24px]" />
                  </button>
                </div>
              </div>

              {/* Image */}
              <div className="flex flex-1 justify-center">
                <Image
                  src={image}
                  alt={title}
                  className="h-[160px] w-auto object-contain sm:h-[200px] lg:h-[240px]"
                  priority
                />
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
};

export default TrendyPlants;
