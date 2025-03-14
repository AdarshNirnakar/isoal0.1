"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { useState, useEffect } from 'react';

export function AnimatedTestimonialsDemo() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "/img1.jpg",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "/img2.jpg",
    },

  ];
  return (
      <>
        {isClient && <AnimatedTestimonials testimonials={testimonials} />}
      </>
  )
}