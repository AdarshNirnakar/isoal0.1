"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Websites = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 text-center w-full relative overflow-hidden">
      

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] bg-cover opacity-10" />

      {/* Content Container */}
      <div className="relative flex flex-col gap-6 mt-20 w-full max-h-[70vh] overflow-hidden">
        {/* First Section */}
        <div className="flex items-center justify-between w-full px-8">
          <div className="w-1/3 text-left">
            <h2 className="text-4xl ml-10 font-bold text-gray-900">isoal.com</h2>
            <p className="ml-10 text-gray-700">A transformative workshop designed to empower you with the skills, strategies, and confidence to bypass outdated systems. We provide a holistic, transparent approach—saving you up to 50%+ on costs—so you can create your own path to success.</p>
          </div>
          <div className="w-2/3 h-[200px] rounded-[100px] overflow-hidden shadow-lg relative group">
            <Image src="/img1.jpg" alt="Turtle" layout="responsive" width={500} height={200} />
            <div className="absolute inset-0 flex items-center justify-center backdrop-blur-md bg-white/30 text-white text-3xl font-bold transition-all duration-300 opacity-100 group-hover:opacity-0">
              isoal.com
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="flex items-center justify-between w-full px-8">
          <div className="w-2/3 h-[200px] rounded-[100px] overflow-hidden shadow-lg relative group">
            <Image src="/img2.jpg" alt="Diver with Whale Shark" layout="responsive" width={500} height={200} />
            <div className="absolute inset-0 flex items-center justify-center backdrop-blur-md bg-white/30 text-white text-3xl font-bold transition-all duration-300 opacity-100 group-hover:opacity-0">
              isoal.ai
            </div>
          </div>
          <div className="w-1/3 text-right">
            <h2 className="text-4xl mr-10 font-bold text-gray-900">isoal.ai</h2>
            <p className="mr-10 text-gray-700">Increase Surface Area of Luck – a transformative workshop designed to empower you with the skills, strategies, and confidence to bypass outdated systems. Learn More.</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      {/* <div className="mt-12 w-full max-w-4xl text-center p-6 bg-gray-100 rounded-2xl shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900">Increase Surface Area of Luck</h3>
        <p className="text-gray-700 mt-2">A transformative workshop designed to empower you with the skills, strategies, and confidence to bypass outdated systems. We provide a holistic, transparent approach—saving you up to 50%+ on costs—so you can create your own path to success.</p>
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full text-lg font-medium hover:bg-blue-700 transition">Learn More</button>
      </div> */}
    </div>
  );
};

export default Websites;
