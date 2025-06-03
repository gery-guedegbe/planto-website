"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import plan_icon from "@assets/images/plant-icon.svg";
import { AlignRight, Search, ShoppingBag, X } from "lucide-react";

const navItems = [
  { id: 1, link: "Home", path: "#home" },
  { id: 2, link: "Plant Type", path: "#plant-type" },
  { id: 3, link: "More", path: "#more" },
  { id: 4, link: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [toggled, setToggled] = useState(false);

  const handleToggled = () => {
    setToggled((prev) => !prev);
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header className="w-full p-3.5 md:p-4 lg:p-7">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex w-full items-center justify-between"
      >
        {/* Logo animé */}
        <motion.div
          onClick={handleRefresh}
          translate="no"
          className="z-20 flex cursor-pointer items-center gap-2"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={plan_icon}
            alt="Plant Icon"
            className="h-auto w-[32px] object-cover lg:w-[48px]"
          />

          <h2 className="text-[24px] font-black text-white lg:text-[28px]">
            Planto.
          </h2>
        </motion.div>

        {/* Navigation desktop animée */}
        <motion.ul
          className="hidden items-center gap-6 lg:flex lg:gap-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {navItems.map((link) => (
            <motion.li
              key={link.id}
              variants={menuVariants}
              transition={{ duration: 0.3 }}
              className="text-[18px] font-medium text-white hover:text-white lg:text-[24px] lg:text-white/80"
            >
              <a href={link.path}>{link.link}</a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Icônes animées */}
        <motion.div
          className="flex items-center gap-4 lg:gap-6"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Search className="hidden h-[24px] w-[24px] cursor-pointer text-white lg:block lg:h-[28px] lg:w-[28px]" />
          <ShoppingBag className="hidden h-[24px] w-[24px] cursor-pointer text-white lg:block lg:h-[28px] lg:w-[28px]" />

          {/* Icône menu mobile */}
          {toggled ? (
            <X
              onClick={handleToggled}
              className="z-20 block h-[32px] w-[32px] cursor-pointer text-white lg:hidden"
            />
          ) : (
            <AlignRight
              onClick={handleToggled}
              className="z-20 block h-[32px] w-[32px] cursor-pointer text-white lg:hidden"
            />
          )}
        </motion.div>
      </motion.nav>

      {/* Menu mobile animé */}
      <AnimatePresence>
        {toggled && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-10 flex h-screen w-full flex-col items-start gap-6 bg-black px-4 py-40 text-white lg:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                },
              }}
              className="space-y-6"
            >
              {navItems.map((link) => (
                <motion.li
                  key={link.id}
                  variants={menuVariants}
                  transition={{ duration: 0.3 }}
                  onClick={() => setToggled(false)}
                  className="text-[20px] font-medium text-white lg:text-[24px]"
                >
                  <a href={link.path}>{link.link}</a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
