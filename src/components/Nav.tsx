"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

const Nav = () => {
  const navRef = useRef(null);
  const iconRef = useRef(null);
  const isaolRef = useRef(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Hide navbar when scrolling down, show when scrolling up
      if (scrollY > lastScrollY) {
        gsap.to(navRef.current, { y: -100, opacity: 0, duration: 0.2, ease: "power2.out" });
      } else {
        gsap.to(navRef.current, { y: 0, opacity: 1, duration: 0.15, ease: "power2.out" });
      }

      // Logo transition logic
      if (scrollY > 50) {
        gsap.to(iconRef.current, { y: 50, opacity: 0, duration: 0.2, ease: "power2.out" });
        gsap.to(isaolRef.current, { y: -20, opacity: 1, duration: 0.2, ease: "power2.out" });
      } else {
        gsap.to(iconRef.current, { y: 0, opacity: 1, duration: 0.2, ease: "power2.out" });
        gsap.to(isaolRef.current, { y: 20, opacity: 0, duration: 0.2, ease: "power2.out" });
      }

      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      ref={navRef}
      className="w-full h-16 fixed top-0 z-50 bg-white/95 backdrop-blur-sm flex items-center justify-between px-4 shadow-sm transition-transform duration-200"
    >
      {/* Logo Container */}
      <div className="flex items-center space-x-3">
        <Image
          ref={iconRef}
          src="/icon.svg"
          alt="Icon"
          width={40}
          height={40}
          className="transition-all duration-300"
          style={{ opacity: 1, transform: "translateY(0px)" }}
        />
        <Image
          ref={isaolRef}
          src="/isaol.svg"
          alt="Isaol Icon"
          width={100}
          height={60}
          className="transition-all duration-300"
          style={{ opacity: 0, transform: "translateY(20px)" }}
        />
      </div>

      {/* Name Text */}
      <h1 className="text-lg sm:text-2xl font-bold tracking-tight text-center">Increase Surface Area of Luck</h1>
    </div>
  );
};

export default Nav;
