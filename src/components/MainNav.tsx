"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

const MainNav = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    gsap.from("#page1 h1", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 0.9,
      stagger: 0.3, // Adds smooth stagger effect between lines
      ease: "power3.out",
    })
  }, [])

  return (
    <div
      ref={containerRef}
      id="page1"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50"
    >
      <div className="text-[20vh] md:text-[28vh] text-black font-sans font-bold tracking-tight leading-[0.85] text-center">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">Increase Surface</h1>
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-900">Area of Luck</h1>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="w-6 h-10 border-2 border-black rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-black rounded-full mt-1 animate-bounce"></div>
        </div>
        <p className="mt-2 text-sm font-medium text-gray-600">Scroll Down</p>
      </div>
    </div>
  )
}

export default MainNav

