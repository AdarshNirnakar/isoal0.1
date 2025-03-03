import Spline from "@splinetool/react-spline/next"

export default function Robot() {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
      {/* Responsive container for the 3D model */}
      <div className="w-full h-full absolute inset-0 flex items-center justify-center">
        <Spline
          scene="https://prod.spline.design/QxxqfSqwquUnHcX5/scene.splinecode"
          className="w-full h-full object-contain"
          style={{ transform: "scale(1.1)", marginBottom: "40px" }}
        />
      </div>
      {/* Overlay to hide the Spline logo */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-black z-10"></div>
    </div>
  )
}

