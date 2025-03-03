import Robot from "./Robot"

const Isoal_ai = () => {
  return (
    <div className="flex flex-col md:flex-row bg-black min-h-screen">
      <div className="w-full md:w-1/2 flex items-center justify-center relative bg-black py-16 md:py-0">
        <div className="text-left bg-black h-full flex items-center w-full text-white px-8 md:px-16 lg:px-20 overflow-hidden">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              ISAOL
            </h2>
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-8">
              Increase Surface Area of Luck
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10">
              A transformative workshop designed to empower you with the skills, strategies, and confidence to bypass
              outdated systems. We provide a holistic, transparent approach—saving you up to 50%+ on costs—so you can
              create your own path to success.
            </p>
            <button className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="h-[60vh] md:h-screen w-full md:w-1/2 flex items-center justify-center relative bg-black overflow-hidden">
        {/* Circular Container with improved responsive handling */}
        <div className="w-[90%] h-[90%] md:w-full md:h-full bg-black rounded-full flex items-center justify-center overflow-hidden">
          <Robot />
        </div>
      </div>
    </div>
  )
}

export default Isoal_ai

