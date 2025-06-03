"use client";

import Image from "next/image";
import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

import FadeInWhenVisible from "@/components/FadeInWhenVisible";

import plant1 from "@assets/images/plant-1.png";
import plant2 from "@assets/images/plant-2.png";
import plant3 from "@assets/images/plant-3.png";

const slides = [
  {
    id: 1,
    image: plant1,
    title: "We Have Small And Best O2 Plants Collection’s",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    image: plant2,
    title: "Fresh Indoor Plants For Clean Air",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    image: plant3,
    title: "Natural Plants That Make You Relax",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const OurBest02 = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section className="w-full py-10 lg:py-16">
      <FadeInWhenVisible direction="right">
        <div className="mb-10 text-center">
          <h2 className="relative inline-block text-2xl font-semibold text-white after:mx-auto after:mt-2 after:block after:h-[4px] after:w-[50%] after:rounded-full after:bg-green-500 after:content-[''] sm:text-3xl lg:text-4xl">
            Our Best o2
          </h2>
        </div>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="flex min-w-full flex-shrink-0 justify-center"
              >
                <div className="flex w-[80vw] max-w-5xl flex-col items-center gap-8 rounded-[32px] border border-white/20 bg-white/5 p-4 text-center text-white shadow-md backdrop-blur-md md:flex-row md:justify-between md:p-12 lg:w-full lg:text-start">
                  <div className="max-w-[180px] md:max-w-[320px] lg:max-w-[400px]">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      className="h-auto w-full object-contain"
                      priority
                    />
                  </div>

                  <div className="">
                    <h3 className="mb-4 text-xl font-semibold lg:text-2xl">
                      {slide.title}
                    </h3>

                    <p className="mb-4 text-sm text-white/80 lg:text-base">
                      {slide.description}
                    </p>

                    <p className="mb-6 text-sm text-white/80 lg:text-base">
                      {slide.description}
                    </p>

                    <button className="hover:text-custom-black-2 cursor-pointer rounded-md border border-white/30 px-6 py-2 text-white transition hover:bg-white">
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeInWhenVisible>

      {/* Pagination bullets */}
      <FadeInWhenVisible direction="left">
        <div className="mt-6 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                selectedIndex === index
                  ? "scale-110 bg-green-500"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </FadeInWhenVisible>
    </section>
  );
};

export default OurBest02;
