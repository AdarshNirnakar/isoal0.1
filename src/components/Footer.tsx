"use client"
import Link from "next/link"

const Footer = () => {
  return (
    <footer
      data-scroll
      data-scroll-section
      data-scroll-speed="-0"
      className="bg-black z-[-100] min-h-screen relative text-white py-20 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div className="space-y-10">
            <div className="mb-4">
              <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">New Business</p>
              <Link
                href="mailto:hello@isaol.com"
                className="text-xl hover:text-blue-400 transition-colors duration-300"
              >
                hello@isaol.com
              </Link>
            </div>
            <div>
              <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">Sign up for our newsletter</p>
              <p className="text-sm text-gray-500 mb-4">Stay updated with our latest insights and opportunities</p>
              <form className="flex items-center border-b border-white/30 pb-2 group focus-within:border-blue-400 transition-colors duration-300">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-transparent text-white py-2 w-full focus:outline-none"
                />
                <button type="submit" className="ml-3 text-xl group-hover:text-blue-400 transition-colors duration-300">
                  →
                </button>
              </form>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-10">
              <nav>
                <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">Navigation</p>
                <ul className="space-y-3">
                  <li>
                    <Link href="#" className="text-lg hover:text-blue-400 transition-colors duration-300">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-lg hover:text-blue-400 transition-colors duration-300">
                      Work
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-lg hover:text-blue-400 transition-colors duration-300">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-lg hover:text-blue-400 transition-colors duration-300">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-lg hover:text-blue-400 transition-colors duration-300">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>

              <div>
                <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">Social</p>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="#"
                      className="text-lg hover:text-blue-400 transition-colors duration-300 flex items-center"
                    >
                      Instagram <span className="ml-2">→</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-lg hover:text-blue-400 transition-colors duration-300 flex items-center"
                    >
                      LinkedIn <span className="ml-2">→</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-lg hover:text-blue-400 transition-colors duration-300 flex items-center"
                    >
                      Twitter <span className="ml-2">→</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between mt-16 pt-8 border-t border-white/10">
              <div className="text-sm text-gray-500 mb-4 md:mb-0">
                <p>San Diego—USA</p>
                <p>Paris—France</p>
              </div>

              <div className="text-sm text-gray-500">
                <p>Terms of use</p>
                <p>©13–25</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-left overflow-hidden">
          <h1 className="text-[15vh] md:text-[30vh] font-bold text-white leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-700">
            ISAOL
          </h1>
        </div>
      </div>
    </footer>
  )
}

export default Footer

