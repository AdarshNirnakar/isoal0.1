"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "light" | "gradient" | "none";
  animate?: boolean;
}

export const Section = ({
  children,
  className,
  background = "white",
  animate = true,
}: SectionProps) => {
  const backgrounds = {
    white: "bg-white",
    light: "bg-gray-50",
    gradient: "bg-gradient-to-b from-white to-gray-50",
    none: "",
  };

  const content = (
    <section
      className={cn(
        "py-16 md:py-24 w-full overflow-hidden relative",
        backgrounds[background],
        className
      )}
    >
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );

  if (animate) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
};
