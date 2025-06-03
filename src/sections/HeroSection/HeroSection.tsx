"use client";

import Image from "next/image";

import HeroReviewCard from "@/components/HeroReviewCard";
import HeroCard from "@/components/HeroCard";

import play_icon from "@assets/icons/play-icon.png";
import OurTrendy from "@sections/OurTrendy/OurTrendy";
import FadeInWhenVisible from "@/components/FadeInWhenVisible";

const HeroSection = () => {
  return (
    <section className="my-10 w-full px-6 md:px-4 lg:px-8">
      <div className="flex w-full flex-col items-start justify-between gap-8 lg:flex-row">
        <FadeInWhenVisible direction="right">
          <div>
            <h1 className="text-[40px] leading-tight font-semibold text-white md:text-[60px] lg:text-[100px]">
              Breathe Natural
            </h1>

            <p className="mt-5 max-w-3xl text-[18px] font-light text-white/70 lg:mt-2 lg:text-[22px]">
              Reconnect with nature through our curated selection of indoor and
              outdoor plants. Designed to refresh your space, improve your air,
              and elevate your well-being.
            </p>

            <div className="mt-8 mb-8 flex gap-4 lg:mt-10 lg:mb-16 lg:gap-8">
              <button className="hover:text-custom-black-2 hover:border-custom-black-2 flex w-1/2 cursor-pointer items-center justify-center rounded-xl border border-white/80 bg-transparent px-6 py-2 text-base text-white transition-all duration-300 ease-in-out outline-none hover:bg-white/80 md:text-xl lg:w-fit lg:px-10 lg:py-2 lg:text-2xl">
                Explore
              </button>

              <button className="flex w-1/2 cursor-pointer items-center justify-center gap-2 text-base text-white outline-none md:text-xl lg:w-fit lg:gap-3 lg:text-2xl">
                <Image
                  src={play_icon}
                  alt="Play Icon"
                  className="h-auto w-[28px] lg:w-[38px]"
                />
                Live Demo
              </button>
            </div>

            <HeroReviewCard />
          </div>
        </FadeInWhenVisible>

        <HeroCard />
      </div>

      <FadeInWhenVisible direction="up">
        <OurTrendy />
      </FadeInWhenVisible>
    </section>
  );
};

export default HeroSection;
