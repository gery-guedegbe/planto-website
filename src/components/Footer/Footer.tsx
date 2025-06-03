"use client";

import footer_logo from "@assets/images/footer-logo.svg";
import Image from "next/image";
import SubscribeForm from "../SubscribeForm";
import FadeInWhenVisible from "../FadeInWhenVisible";

const Footer = () => {
  return (
    <footer className="w-full bg-white/5 text-start">
      <div className="grid grid-cols-4 gap-6 p-4 sm:gap-12 lg:gap-0 lg:p-8">
        <div className="col-span-4 sm:col-span-2 lg:col-span-2">
          <FadeInWhenVisible direction="right">
            {" "}
            <Image
              src={footer_logo}
              alt="Footer Logo"
              className="h-auto w-[140px] object-cover lg:w-[180px]"
            />
            <p className="mt-4 max-w-sm text-[16px] font-light text-white/70 md:mt-6 lg:text-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="mt-6 flex items-center gap-4 lg:mt-8 lg:gap-6">
              <span className="text-[22px] font-extrabold text-white lg:text-[28px]">
                FB
              </span>

              <span className="text-[22px] font-extrabold text-white lg:text-[28px]">
                TW
              </span>

              <span className="text-[22px] font-extrabold text-white lg:text-[28px]">
                LI
              </span>
            </div>
          </FadeInWhenVisible>
        </div>

        <div className="col-span-4 sm:col-span-2 lg:col-span-1">
          <FadeInWhenVisible direction="up">
            <h3 className="text-base font-medium text-white lg:text-xl">
              Quick Link’s
            </h3>

            <ul className="mt-3 space-y-2 lg:mt-6 lg:space-y-4">
              <li className="cursor-pointer text-base font-light text-white/70 lg:text-xl">
                <a href="#home">Home</a>
              </li>

              <li className="cursor-pointer text-base font-light text-white/70 lg:text-xl">
                <a href="#types">Type’s Of plant’s</a>
              </li>

              <li className="cursor-pointer text-base font-light text-white/70 lg:text-xl">
                <a href="#contact">Contact</a>
              </li>

              <li className="cursor-pointer text-base font-light text-white/70 lg:text-xl">
                <a href="#privacy">Privacy</a>
              </li>
            </ul>
          </FadeInWhenVisible>
        </div>

        <div className="col-span-4 lg:col-span-1">
          <FadeInWhenVisible direction="left">
            <h3 className="text-base font-medium text-white lg:text-xl">
              For Every Update.
            </h3>

            <SubscribeForm />

            <p className="mt-6 text-[16px] font-light text-white/70 lg:mt-24 lg:text-[20px]">
              planto © all right reserve
            </p>
          </FadeInWhenVisible>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
