"use client"
import Link from "next/link"

const Footer = () => {
  return (
    <footer
      data-scroll
      data-scroll-section
      data-scroll-speed="-0"
      className="bg-black z-[-100] h-screen  relative text-white py-20 overflow-hidden"
    >
      <div className="container pt-20 mx-auto px-6 md:px-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 ">
          <div className="space-y-10">
            <div className="mb-4">
              <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Contact</p>
              <Link
                href="mailto:support@isaol.com"
                className="text-xl hover:text-blue-400 transition-colors duration-300"
              >
               support@isaol.com
              </Link>
              <p className="text-xl hover:text-blue-400 transition-colors duration-300">
                   +1 (123) 456-7890
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">About ISAOL</p>
              <p className="text-sm text-gray-500 mb-4">Brought to you by Deeproot, Inc.</p>


            </div>
             <div>
              <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">Social Media</p>
              <div className="flex space-x-4">
              {/* Replace these with actual social media icons or links */}
                <Link href="#" className="hover:text-blue-400 transition-colors duration-300">
                  Instagram
                </Link>
                <Link href="#" className="hover:text-blue-400 transition-colors duration-300">
                  X
                </Link>
                <Link href="#" className="hover:text-blue-400 transition-colors duration-300">
                  Linkedin
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10"> {/* Modified to 1 column on small screens */}
              <div> {/* No <nav> tag since there is no nav */}
              <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">Additional Information</p>
                <p className="text-sm text-gray-500 mb-4">
                  Both versions now seamlessly incorporate the Early Access section—ensuring that whether you’re aiming for a global education journey or an international career, you’ll have a dedicated career agent guiding you toward success at a fair price.
                </p>
              </div>

               <div> {/* New Section for Ravishankar M */}
                  <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">Contact Details</p>
                  <div className="text-sm text-gray-500">
                    <p>Ravishankar M</p>
                    <p>Chief Executive Officer</p>
                    <p>DeepRoot Inc</p>
                    <p>800 N King Street | Suite 304 1300</p>
                    <p>Wilmington, DE 19801 | United States</p>
                    <p>Contact: +91 8050555111 (India)</p>
                    <p>+1 7609915250 (USA)</p>
                    <Link href="#" className="hover:text-blue-400 transition-colors duration-300">IT Outsourcing Savings Calculator</Link>

                  </div>
                </div>

            </div>

            <div className="flex flex-col md:flex-row justify-between mt-16 pt-8 border-t border-white/10">
              <div className="text-sm text-gray-500 mb-4 md:mb-0">
                <p>San Diego—USA</p>
                <p>Paris—France</p>
                {/* Removed Location Data from First Original Example */}
              </div>

              <div className="text-sm text-gray-500">
                <p>Terms of use</p>
                <p>©13–25</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-left overflow-hidden">
          <h1 className="text-[20vh] md:text-[20vh] font-bold text-white font-sans  tracking-tight leading-[0.85] text-left">
            ISAOL
          </h1>

        </div>
      </div>
    </footer>
  )
}

export default Footer