"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const Websites = () => {
  const router = useRouter()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(null)

  // Track mouse position for hover effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <div className="relative max-h-screen bg-gradient-to-b from-white to-gray-50 overflow-y-auto overflow-x-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] bg-cover opacity-5" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-1/4 left-0 w-1/2 h-1/2 bg-blue-100/30 rounded-full blur-3xl transform -translate-x-1/3" />

      {/* Content Wrapper */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative flex flex-col gap-8 md:gap-16 w-full max-w-6xl mx-auto pb-20 pt-32"
      >
        {/* First Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center justify-between w-full px-4 md:px-8 space-y-8 md:space-y-0 md:space-x-12"
          id="section1"
        >
          <div className="w-full md:w-1/3 text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              isoal.com
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              A transformative workshop designed to empower you with the skills, strategies, and confidence to bypass outdated systems. We provide a holistic, transparent approach—saving you up to 50%+ on costs—so you can create your own path to success.
            </p>
          </div>
          <motion.div
            className="w-full md:w-2/3 h-[200px] md:h-[250px] rounded-[30px] overflow-hidden shadow-xl relative group"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => setHovered("isoal.com")}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-[30px] blur opacity-70"></div>
            <div className="relative h-full w-full rounded-[30px] overflow-hidden">
              <Image
                src="/img1.jpg"
                alt="ISOAL.com"
                layout="fill"
                objectFit="cover"
                className="rounded-[30px] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 text-left">
                <h3 className="text-white text-2xl font-bold mb-2">Global Career Success</h3>
                <p className="text-white/80 mb-4 max-w-md">
                  Break free from traditional recruitment and build a world-class network.
                </p>
                <motion.button
                  onClick={() => router.push("/v1")}
                  className="bg-white text-gray-900 px-6 py-3 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl flex items-center space-x-2 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Visit Platform</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Second Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col-reverse md:flex-row items-center justify-between w-full px-4 md:px-8 space-y-8 md:space-y-0 md:space-x-12"
          id="section2"
        >
          <motion.div
            className="w-full md:w-2/3 h-[200px] md:h-[250px] rounded-[30px] overflow-hidden shadow-xl relative group"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => setHovered("isoal.ai")}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-primary/20 rounded-[30px] blur opacity-70"></div>
            <div className="relative h-full w-full rounded-[30px] overflow-hidden">
              <Image
                src="/img2.jpg"
                alt="ISOAL.ai"
                layout="fill"
                objectFit="cover"
                className="rounded-[30px] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 text-left">
                <h3 className="text-white text-2xl font-bold mb-2">Increase Surface Area of Luck</h3>
                <p className="text-white/80 mb-4 max-w-md">Bypass outdated systems with our AI-powered strategies.</p>
                <motion.button
                  onClick={() => router.push("/v2")}
                  className="bg-white text-gray-900 px-6 py-3 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl flex items-center space-x-2 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Visit Platform</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </div>
          </motion.div>
          <div className="w-full md:w-1/3 text-left md:text-right">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary">
              isoal.ai
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Increase Surface Area of Luck – a transformative workshop designed to empower you with the skills, strategies, and confidence to bypass outdated systems. Our AI-powered approach helps you create opportunities where others see none.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Websites
