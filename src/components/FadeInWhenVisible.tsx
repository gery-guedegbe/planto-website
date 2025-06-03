"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

type FadeInProps = {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
};

const FadeInWhenVisible = ({
  children,
  delay = 0,
  direction = "up",
}: FadeInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: 40 };
      case "down":
        return { y: -40 };
      case "left":
        return { x: 40 };
      case "right":
        return { x: -40 };
      default:
        return {};
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...getInitialPosition() }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
