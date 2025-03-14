"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Websites = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-white px-6 text-center w-full relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] bg-cover opacity-10" />

      {/* Content Wrapper */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex flex-col gap-10 mt-24 w-full max-w-6xl pb-10"
      >
        {/* First Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex items-center justify-between w-full px-8 space-x-6"
        >
          <div className="w-1/3 text-left">
            <h2 className="text-3xl font-bold text-gray-900">isoal.com</h2>
            <p className="text-gray-700 text-sm">A transformative workshop designed to empower you with the skills, strategies, and confidence to bypass outdated systems. We provide a holistic, transparent approach—saving you up to 50%+ on costs—so you can create your own path to success.</p>
          </div>
          <div className="w-2/3 h-[250px] rounded-[30px] overflow-hidden shadow-lg relative">
            <Image src="/img1.jpg" alt="Turtle" layout="fill" objectFit="cover" className="rounded-[30px]" />
            <button onClick={() => router.push('/v1')} className="absolute w-80 bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:bg-gray-800">Visit</button>
          </div>
        </motion.div>

        {/* Second Section */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="flex items-center justify-between w-full px-8 space-x-6"
        >
          <div className="w-2/3 h-[250px] rounded-[30px] overflow-hidden shadow-lg relative">
            <Image src="/img2.jpg" alt="Diver with Whale Shark" layout="fill" objectFit="cover" className="rounded-[30px]" />
            <button onClick={() => router.push('/v2')} className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-80 bg-black text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:bg-gray-800">Visit</button>
          </div>
          <div className="w-1/3 text-right">
            <h2 className="text-3xl font-bold text-gray-900">isoal.ai</h2>
            <p className="text-gray-700 text-sm">Increase Surface Area of Luck – a transformative workshop designed to empower you with the skills, strategies, and confidence to bypass outdated systems. Learn More.</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Websites;
