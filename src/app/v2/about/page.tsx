"use client"

import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function V2AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mt-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
              About ISAOL.ai
            </h1>
            <p className="text-lg text-gray-600">
              Transforming global education through AI-powered guidance and transparent solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl blur-lg opacity-20 animate-pulse"></div>
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  width={500}
                  height={400}
                  alt="About ISAOL.ai"
                  className="rounded-xl shadow-lg relative z-10"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                ISAOL.ai (Increase Surface Area of Luck) is revolutionizing how students approach global education
                opportunities. We combine cutting-edge AI technology with human expertise to provide transparent,
                cost-effective guidance for international university applications.
              </p>
              <p className="text-lg text-gray-700">
                Our mission is to democratize access to elite global education by eliminating unnecessary middlemen and
                empowering students with direct tools, strategies, and personalized support to succeed.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Core Values
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Transparency</h3>
              <p className="text-gray-600 text-center">
                We believe in complete transparency in all our processes, eliminating hidden costs and providing clear
                pathways to success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Innovation</h3>
              <p className="text-gray-600 text-center">
                We leverage AI and cutting-edge technology to create revolutionary programs that challenge conventional
                approaches to education guidance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Empowerment</h3>
              <p className="text-gray-600 text-center">
                We empower students to take control of their own educational journeys, providing them with the tools and
                confidence to navigate global opportunities independently.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Early Access Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold mb-6">Early Access – Your Dedicated Career Agent</h2>
              <p className="text-center text-lg mb-12">Be among the first to experience a game-changing advantage</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <p className="text-lg mb-6">
                Gain exclusive early access to a dedicated career agent who will guide you one-on-one through every step
                of your academic journey.
              </p>

              <div className="space-y-4 mb-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="text-gray-700">
                    <strong>Personalized Guidance:</strong> Get expert advice on crafting a standout application and
                    preparing for interviews.
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="text-gray-700">
                    <strong>Tailored Strategies:</strong> Secure admission at top universities efficiently—at the price
                    you rightly deserve.
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="text-gray-700">
                    <strong>Ongoing Support:</strong> Your career agent will be with you from application to enrollment,
                    ensuring you have the tools to succeed.
                  </span>
                </motion.div>
              </div>

              <div className="text-center">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Apply for Early Access
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Leadership Team
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full blur-sm opacity-20 animate-pulse"></div>
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  width={128}
                  height={128}
                  alt="Ravishankar M"
                  className="object-cover relative z-10"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Ravishankar M</h3>
              <p className="text-gray-500 mb-4">Chief Executive Officer</p>
              <p className="text-gray-600">
                With over 15 years of experience in global education and AI technology, Ravishankar leads ISAOL.ai&apos;s
                mission to transform how students access global education opportunities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full blur-sm opacity-20 animate-pulse"></div>
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  width={128}
                  height={128}
                  alt="Team Member"
                  className="object-cover relative z-10"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Priya Sharma</h3>
              <p className="text-gray-500 mb-4">Chief AI Officer</p>
              <p className="text-gray-600">
                Priya oversees the development and implementation of ISAOL.ai&apos;s AI-powered guidance systems, ensuring
                they deliver personalized and transformative results for students.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full blur-sm opacity-20 animate-pulse"></div>
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  width={128}
                  height={128}
                  alt="Team Member"
                  className="object-cover relative z-10"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Vikram Patel</h3>
              <p className="text-gray-500 mb-4">Head of Global Partnerships</p>
              <p className="text-gray-600">
                Vikram builds and maintains relationships with universities, employers, and organizations worldwide to
                create direct pathways for ISAOL.ai participants.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-8"
            >
              About Deeproot, Inc.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700 mb-6 text-center"
            >
              ISAOL.ai is brought to you by Deeproot, Inc., a global education technology platform empowering students
              and institutions through transparent, AI-powered solutions that break conventional barriers.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-6 mb-4 md:mb-0">
                  <h3 className="text-xl font-bold mb-3">Our Headquarters</h3>
                  <p className="text-gray-600">
                    800 N King Street
                    <br />
                    Suite 304 1300
                    <br />
                    Wilmington, DE 19801
                    <br />
                    United States
                  </p>
                </div>
                <div className="md:w-1/2 md:pl-6 md:border-l">
                  <h3 className="text-xl font-bold mb-3">Contact Information</h3>
                  <p className="text-gray-600">
                    USA: +1 7609915250
                    <br />
                    India: +91 8050555111
                    <br />
                    Email: support@isaol.ai
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

