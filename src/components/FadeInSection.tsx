"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

type FadeInSectionProps = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
};

const FadeInSection = ({
  children,
  delay = 0,
  duration = 0.6,
  yOffset = 40,
}: FadeInSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
