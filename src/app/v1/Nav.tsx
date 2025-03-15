"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import Link from "next/link";

const Nav = () => {
  const navRef = useRef(null);
  const iconRef = useRef(null);
  const isaolRef = useRef(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Navbar show/hide logic
      if (scrollY > lastScrollY) {
        gsap.to(navRef.current, { y: -80, opacity: 0, duration: 0.3, ease: "power2.out" });
      } else {
        gsap.to(navRef.current, { y: 0, opacity: 1, duration: 0.2, ease: "power2.out" });
      }

      // Logo transition logic
      if (scrollY > 50) {
        setIsScrolled(true);
        gsap.to(iconRef.current, { opacity: 0, y: -10, duration: 0.3 });
        gsap.to(isaolRef.current, { opacity: 1, y: 0, duration: 0.3 });
      } else {
        setIsScrolled(false);
        gsap.to(iconRef.current, { opacity: 1, y: 0, duration: 0.3 });
        gsap.to(isaolRef.current, { opacity: 0, y: 10, duration: 0.3 });
      }

      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      ref={navRef}
      className={`w-screen h-20 z-50 fixed bg-white/90 backdrop-blur-md shadow-md flex items-center justify-between px-6 transition-transform duration-200 ${
        isScrolled ? "h-16" : "h-20"
      }`}
    >
      {/* Logo Section */}
      <div className="relative h-16 w-72 flex items-center justify-start">
        <Image
          ref={iconRef}
          src="/icon.svg"
          alt="Icon"
          width={80}
          height={80}
          className="absolute left-0 transition-opacity duration-300"
        />
        <Image
          ref={isaolRef}
          src="/isaol.svg"
          alt="Isaol Logo"
          width={180}
          height={90}
          className="absolute left-0 opacity-0 transition-opacity duration-300"
        />
      </div>

      {/* Hamburger Menu (Mobile) */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-800 hover:text-black focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-8 pr-8">
        <Link href="/" className="text-gray-800 hover:text-black font-medium transition-colors">ISAOL</Link>
        <Link href="/v1" className="text-gray-800 hover:text-black font-medium transition-colors">HOME</Link>
        <Link href="/v1/about" className="text-gray-800 hover:text-black font-medium transition-colors">ABOUT</Link>
        <Link href="/v1/faq" className="text-gray-800 hover:text-black font-medium transition-colors">FAQ</Link>
        <Link href="/v1/contact" className="text-gray-800 hover:text-black font-medium transition-colors">CONTACT</Link>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-6 md:hidden transition-all duration-300">
          <Link href="/" className="text-gray-800 hover:text-black font-medium text-lg" onClick={() => setIsMenuOpen(false)}>ISAOL</Link>
          <Link href="/v1" className="text-gray-800 hover:text-black font-medium text-lg" onClick={() => setIsMenuOpen(false)}>HOME</Link>
          <Link href="/v1/about" className="text-gray-800 hover:text-black font-medium text-lg" onClick={() => setIsMenuOpen(false)}>ABOUT</Link>
          <Link href="/v1/faq" className="text-gray-800 hover:text-black font-medium text-lg" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
          <Link href="/v1/contact" className="text-gray-800 hover:text-black font-medium text-lg" onClick={() => setIsMenuOpen(false)}>CONTACT</Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
