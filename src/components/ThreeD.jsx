"use client";
import { useRouter } from "next/navigation";
import Spline from "@splinetool/react-spline";

const Websites = () => {
  const router = useRouter();
  const models = [
    "https://prod.spline.design/G6k4Zyoexy5C1b0M/scene.splinecode",
    "https://prod.spline.design/fr4GYkVylV5NyUog/scene.splinecode",
  ];

  const labels = ["ISAOL FOR GLOBAL OPPORTUNITIES", " ISAOL FOR HIGHER STUDIES", ];
  const routes = ["/v1", "/v2", "/v3"];

  // Function to handle navigation
  const handleNavigation = (route) => {
    router.push(route);
  };

  return (
    <div
      id="page3"
      className="min-h-screen w-full flex flex-col md:flex-col items-center justify-center overflow-hidden gap-4 py-16 bg-gradient-to-b from-gray-100 to-white"
    >
      <div className="w-full mt-15 px-6 mb-12 md:mb-0 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Our Digital Ecosystem
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our interconnected platforms designed to maximize your
          opportunities.
        </p>
      </div>

      <div className="w-full flex flex-col md:flex-row gap-6 px-6">
        {models.map((src, index) => (
          <div
            key={index}
            className="h-[50vh] md:h-[70vh] w-full flex-1 flex items-center justify-center relative group rounded-2xl overflow-hidden shadow-lg border border-gray-200 cursor-pointer"
            onClick={() => handleNavigation(routes[index])}
          >
            <Spline scene={src} className="h-full w-full" />
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-90 group-hover:opacity-0 transition-opacity duration-500 bg-gradient-to-t from-black via-black/70 to-transparent">
              <span className="text-white text-3xl md:text-2xl font-bold mb-4">
                {labels[index]}
              </span>
              <button
                className="px-6 py-2 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-full hover:bg-white/30 transition-colors duration-300"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering the parent div's onClick
                  handleNavigation(routes[index]);
                }}
              >
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Websites;
