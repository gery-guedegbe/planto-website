"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

import plant_1 from "@assets/images/plant-1.png";
import plant_2 from "@assets/images/plant-2.png";
import plant_3 from "@assets/images/plant-3.png";
import plant_4 from "@assets/images/plant-4.png";
import plant_5 from "@assets/images/plant-5.png";
import plant_6 from "@assets/images/plant-6.png";
import plant_7 from "@assets/images/plant-7.png";

const plants = [
  { id: 1, image: plant_1, name: "Calathea Plant", desc: "Trendy House Plant" },
  {
    id: 2,
    image: plant_2,
    name: "Fiddle Leaf Fig",
    desc: "Stylish Air-Purifier",
  },
  {
    id: 3,
    image: plant_3,
    name: "Snake Plant",
    desc: "Low Maintenance Favorite",
  },
  {
    id: 4,
    image: plant_4,
    name: "Monstera Deliciosa",
    desc: "Bold & Beautiful",
  },
  { id: 5, image: plant_5, name: "Aloe Vera", desc: "Healing & Hardy" },
  { id: 6, image: plant_6, name: "Peace Lily", desc: "Elegant Air-Purifier" },
  { id: 7, image: plant_7, name: "ZZ Plant", desc: "Resilient Beauty" },
];

const HeroCard = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollTo = (index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  };

  return (
    <div className="mx-auto w-full max-w-md rounded-3xl border border-white/30 bg-white/5 p-4 text-white shadow-xl backdrop-blur-md sm:max-w-xl lg:max-w-sm lg:rounded-[45px] lg:p-6">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {plants.map((plant) => (
            <div
              key={plant.id}
              className="min-w-full flex-shrink-0 px-2 sm:px-6"
            >
              <div className="flex flex-col items-center">
                <Image
                  src={plant.image}
                  alt={plant.name}
                  className="w-[200px] object-contain sm:w-[260px] lg:w-[280px]"
                  priority
                />

                <div className="mt-6 flex w-full items-start justify-between gap-4 px-2 sm:px-4">
                  <div className="space-y-2 lg:space-y-3">
                    <p className="text-sm font-light text-white/70 sm:text-base lg:text-lg">
                      {plant.desc}
                    </p>

                    <h3 className="text-xl leading-tight font-semibold sm:text-2xl lg:text-3xl">
                      {plant.name}
                    </h3>

                    <button className="mt-2 rounded-lg border border-white px-4 py-1.5 text-sm font-medium text-white transition hover:bg-white hover:text-black sm:text-base lg:mt-3 lg:px-6 lg:py-2 lg:text-lg">
                      Buy Now
                    </button>
                  </div>

                  <button
                    onClick={() => emblaApi?.scrollNext()}
                    className="mt-2 cursor-pointer outline-none"
                  >
                    <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination dots */}
      <div className="mt-5 mb-5 flex justify-center gap-2">
        {plants.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              index === selectedIndex ? "scale-125 bg-white" : "bg-white/30"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroCard;
