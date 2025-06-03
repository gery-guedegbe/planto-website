"use client";

import Image from "next/image";
import avatar_1 from "@assets/images/avatar-1.png";
import star_icon from "@assets/icons/star-icon.svg";

const HeroReviewCard = () => {
  return (
    <div className="max-w-sm rounded-3xl border-[0.5px] border-white/40 bg-white/5 p-5 text-white shadow-lg backdrop-blur-md lg:rounded-[45px] lg:p-10">
      <div className="mb-4 flex items-center gap-4">
        <Image
          src={avatar_1}
          alt="Avatar Image"
          className="h-auto w-[38px] rounded-full object-cover lg:w-[50px]"
        />

        <div>
          <h4 className="text-base text-white lg:text-lg">Alena Patel</h4>

          <div className="mt-1 flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Image
                key={i}
                src={star_icon}
                alt="Star Icon"
                className="h-auto w-[10px] object-cover lg:w-[14px]"
              />
            ))}
          </div>
        </div>
      </div>

      <p className="text-sm text-white/80 lg:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt...
      </p>
    </div>
  );
};

export default HeroReviewCard;
