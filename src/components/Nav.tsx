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

      // Hide navbar IMMEDIATELY when scrolling down
      if (scrollY > lastScrollY) {
        gsap.to(navRef.current, { y: -100, opacity: 0, duration: 0.2, ease: "power2.out" });
      } 
      // Show navbar INSTANTLY when scrolling up
      else {
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
      className="w-screen h-20 z-50 fixed bg-white/95 backdrop-blur-sm flex items-center justify-between px-6 shadow-sm transition-transform duration-200"
    >
      <div className="h-18 w-72 overflow-hidden relative flex items-center justify-center">
        {/* Icon (Initially Visible) */}
        <Image
          ref={iconRef}
          src="/icon.svg"
          alt="Icon"
          width={90}
          height={90}
          className="absolute left-10 transition-all duration-300"
          style={{ opacity: 1, transform: "translateY(0px)" }}
        />

        {/* Isaol (Initially Hidden) */}
        <Image
          ref={isaolRef}
          src="/isaol.svg"
          alt="Isaol Icon"
          width={200}
          height={110}
          className="absolute pt-10 left-0 transition-all duration-300"
          style={{ opacity: 0, transform: "translateY(20px)" }}
        />
      </div>
      
      {/* Adding a minimal navigation menu */}
      <div className="hidden md:flex space-x-8 pr-8">
        <a href="#" className="text-gray-800 hover:text-black font-medium transition-colors">Home</a>
        <a href="#" className="text-gray-800 hover:text-black font-medium transition-colors">About</a>
        <a href="#" className="text-gray-800 hover:text-black font-medium transition-colors">Services</a>
        <a href="#" className="text-gray-800 hover:text-black font-medium transition-colors">Contact</a>
      </div>
    </div>
  );
};

export default Nav;
