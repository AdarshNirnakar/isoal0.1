"use client"

import { useEffect,  useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Globe, DollarSign, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import HoverOnPrograms from "@/components/HoverOnPrograms"
import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonial"
import { motion } from "framer-motion"

const Page = () => {
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  // const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef(null)

  // Track mouse position for custom cursor and hover effects
  useEffect(() => {
    // const handleMouseMove = (e: MouseEvent) => {
    //   setMousePosition({ x: e.clientX, y: e.clientY })
    // }

    // const handleScroll = () => {
    //   setScrollY(window.scrollY)
    // }

    // window.addEventListener("mousemove", handleMouseMove)
    // window.addEventListener("scroll", handleScroll)

    // return () => {
    //   window.removeEventListener("mousemove", handleMouseMove)
    //   window.removeEventListener("scroll", handleScroll)
    // }
  }, [])

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Custom cursor effect */}
      {/* <div
          className="fixed w-8 h-8 rounded-full bg-primary/20 pointer-events-none z-50 hidden md:block"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: "translate(-50%, -50%)",
            transition: "transform 0.1s ease-out",
          }}
        /> */}

      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-1/4 left-0 w-1/2 h-1/2 bg-blue-100/30 rounded-full blur-3xl transform -translate-x-1/3" />
        <div className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-purple-100/20 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="flex flex-col md:flex-row items-center"
          >
            <motion.div variants={fadeInUp} className="md:w-1/2 md:pr-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                Achieve Global Career Success
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Land Your Dream Job Across Borders—Break Free from Traditional Recruitment and Build a World-Class
                Network.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  Register for Your FREE 30-Minute Session
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              <p className="mt-6 text-gray-500">
                Unlock international opportunities with ISAOL&apos;s innovative approach. Say goodbye to costly
                intermediaries and hello to a transparent, results-driven career path.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="md:w-1/2 mt-12 md:mt-0">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-xl blur-xl opacity-70"></div>
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  width={500}
                  height={500}
                  alt="Global Opportunities"
                  className="relative rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 z-10"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Why Choose ISAOL for Global Employment?</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our innovative approach breaks down barriers and opens doors to international opportunities.
          </p>
          <motion.div variants={staggerChildren} className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Direct Global Access</h3>
              <p className="text-gray-600">
                Learn insider networking and recruitment tactics that open doors worldwide.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Cost-Effective Career Strategies</h3>
              <p className="text-gray-600">
                Avoid the high fees of traditional recruitment agencies and consultancies.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Real-World Success</h3>
              <p className="text-gray-600">
                Join a community of professionals who have transitioned to remote and international roles using our
                proven methods.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Programs Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="py-20 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Innovative Programs</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            At ISAOL, we&apos;re pioneering programs that no one else in the world has dared to create. Explore our exclusive
            suite of offerings:
          </p>

          <div className="relative">
            <HoverOnPrograms />
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="text-center mt-12">
            <Link href="/v1/programs">
              <Button variant="outline" size="lg" className="group">
                View All Programs
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Additional Tracks Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Additional Tracks for Every Global Professional</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Tailored programs designed for professionals at different stages of their career journey.
          </p>

          <motion.div variants={staggerChildren} className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <h3 className="text-xl font-bold mb-4">Second Innings</h3>
              <p className="text-gray-600 mb-4">
                For those restarting their careers—whether you&apos;re a returning mother or a retired professional seeking
                fresh challenges—this track provides tailored strategies to help you re-enter the workforce with renewed
                confidence.
              </p>
              <Link
                href="/v2/programs"
                className="text-primary font-semibold hover:underline inline-flex items-center group"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <h3 className="text-xl font-bold mb-4">Super 30</h3>
              <p className="text-gray-600 italic mb-3">
              &quot;The misfits, the rebels, the troublemakers, the round pegs in the square holes, the ones who see things
                differently. They&apos;re not fond of rules, and they have no respect for the status quo.&quot;
              </p>
              <p className="text-gray-600 mb-4">
                For professionals from non-traditional backgrounds (security, farming, homemaking, etc.), Super 30
                transforms your unique experience into your strongest asset in the global job market.
              </p>
              <Link
                href="/v2/programs"
                className="text-primary font-semibold hover:underline inline-flex items-center group"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <h3 className="text-xl font-bold mb-4">Founders Cohort</h3>
              <p className="text-gray-600 mb-4">
                For professionals from non-traditional backgrounds (security, farming, homemaking, etc.), Super 30
                transforms your unique experience into your strongest asset in the global job market.
              </p>
              <Link
                href="/v2/programs"
                className="text-primary font-semibold hover:underline inline-flex items-center group"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Session Info Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
          >
            <div className="relative p-8 md:p-12">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 -z-10"></div>

              <h2 className="text-3xl font-bold mb-6">What You&apos;ll Learn in the FREE 30-Minute Session</h2>
              <p className="text-gray-600 mb-8">This session is your gateway to independence and global success:</p>

              <motion.div variants={staggerChildren} className="space-y-8">
                <div>
                  <motion.ul variants={staggerChildren} className="space-y-4">
                    <motion.li variants={fadeInUp} className="flex items-start group">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 group-hover:bg-primary/20 transition-colors">
                        <span className="text-primary text-sm">✓</span>
                      </div>
                      <span className="group-hover:translate-x-1 transition-transform">
                        Uncover common pitfalls in global job searches and learn strategies to overcome them.
                      </span>
                    </motion.li>
                    <motion.li variants={fadeInUp} className="flex items-start group">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 group-hover:bg-primary/20 transition-colors">
                        <span className="text-primary text-sm">✓</span>
                      </div>
                      <span className="group-hover:translate-x-1 transition-transform">
                        Discover proven methods to build a robust international professional network.
                      </span>
                    </motion.li>
                    <motion.li variants={fadeInUp} className="flex items-start group">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 group-hover:bg-primary/20 transition-colors">
                        <span className="text-primary text-sm">✓</span>
                      </div>
                      <span className="group-hover:translate-x-1 transition-transform">
                        Gain actionable tips to stand out in competitive global markets and secure your dream role.
                      </span>
                    </motion.li>
                  </motion.ul>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-10">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" className="w-full md:w-auto shadow-lg hover:shadow-xl transition-all duration-300">
                    Reserve Your Spot Now – It&apos;s Free!
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="py-20"
      >
        <AnimatedTestimonialsDemo />
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="py-20 bg-gradient-to-b from-white to-primary/5 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-1/2 left-1/2 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-purple-100/20 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              Your Global Future Starts Now
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Take control of your education, career, or entrepreneurial journey without the outdated middlemen. Join
              our FREE 30-Minute Masterclass and explore the groundbreaking programs that will redefine your success.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300">
                Register Now – It&apos;s Free!
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default Page

