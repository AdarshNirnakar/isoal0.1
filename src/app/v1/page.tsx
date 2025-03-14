"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import HoverOnPrograms from "@/components/HoverOnPrograms";
import  InfiniteTestimonial  from "@/components/InfiniteTestimonial";

const page = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-16 pb-20 md:pt-20 md:pb-28">
        <div className="container mt-10 mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Achieve Global Career Success
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Land Your Dream Job Across Borders—Break Free from Traditional
                Recruitment and Build a World-Class Network.
              </p>
              <Button size="lg" className="text-lg px-8 py-6">
                Register for Your FREE 30-Minute Session
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="mt-6 text-gray-500">
                Unlock international opportunities with ISAOL’s innovative
                approach. Say goodbye to costly intermediaries and hello to a
                transparent, results-driven career path.
              </p>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0">
              <Image
                src="/placeholder.svg?height=500&width=500"
                width={500}
                height={500}
                alt="Global Opportunities"
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose ISAOL for Global Employment?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
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
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Direct Global Access</h3>
              <p className="text-gray-600">
              Learn insider networking and recruitment tactics that open doors worldwide.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
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
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Cost-Effective Career Strategies</h3>
              <p className="text-gray-600">Avoid the high fees of traditional recruitment agencies and consultancies.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Real-World Success</h3>
              <p className="text-gray-600">
              Join a community of professionals who have transitioned to remote and international roles using our proven methods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our Innovative Programs
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            At ISAOL, we're pioneering programs that no one else in the world
            has dared to create. Explore our exclusive suite of offerings:
          </p>

          {/* <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/v1/programs" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 group-hover:shadow-xl">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary">
                  Global Fusion Program
                </h3>
                <p className="text-gray-600">
                  Participate in immersive sessions featuring live cross-border
                  networking and AI-driven career insights tailored for global
                  markets.
                </p>
                <div className="mt-4 text-primary flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>

            <Link href="/v1/programs" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 group-hover:shadow-xl">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary">
                  Talent Incubator Accelerator
                </h3>
                <p className="text-gray-600">
                  Engage in hands-on projects and receive mentorship from
                  industry leaders around the world.
                </p>
                <div className="mt-4 text-primary flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>

            <Link href="/v1/programs" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 group-hover:shadow-xl">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary">
                  Cross-Cultural Immersion Bootcamp
                </h3>
                <p className="text-gray-600">
                  Collaborate on live, real-world challenges with diverse teams
                  to boost your cultural fluency and adaptability.
                </p>
                <div className="mt-4 text-primary flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
          </div> */}

          <div className="text-center mt-12">
          <HoverOnPrograms/>
            <Link href="/v1/programs">
              <Button variant="outline" size="lg">
                View All Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          
        </div>
      </section>



      {/* Additional Tracks Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Additional Tracks for Every Global Professional</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Second Innings</h3>
              <p className="text-gray-600 mb-4">
              For those restarting their careers—whether you're a returning mother or a retired professional seeking fresh challenges—this track provides tailored strategies to help you re-enter the workforce with renewed confidence.
              </p>
              <Link
                href="/v2/programs"
                className="text-purple-600 font-semibold hover:underline inline-flex items-center"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Super 30</h3>
              <p className="text-gray-600 italic mb-3">
                "The misfits, the rebels, the troublemakers, the round pegs in the square holes, the ones who see things
                differently. They're not fond of rules, and they have no respect for the status quo."
              </p>
              <p className="text-gray-600 mb-4">
              For professionals from non-traditional backgrounds (security, farming, homemaking, etc.), Super 30 transforms your unique experience into your strongest asset in the global job market.
              </p>
              <Link
                href="/v2/programs"
                className="text-purple-600 font-semibold hover:underline inline-flex items-center"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Founders Cohort</h3>
              <p className="text-gray-600 mb-4">
              For professionals from non-traditional backgrounds (security, farming, homemaking, etc.), Super 30 transforms your unique experience into your strongest asset in the global job market.
              </p>
              <Link
                href="/v2/programs"
                className="text-purple-600 font-semibold hover:underline inline-flex items-center"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Session Info Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">
                What You'll Learn in the FREE 30-Minute Session
              </h2>
              <p className="text-gray-600 mb-8">
                This session is your gateway to independence and global success:
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">
                    {/* For Higher Studies Aspirants: */}
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-primary text-sm">✓</span>
                      </div>
                      <span>
                      Uncover common pitfalls in global job searches and learn strategies to overcome them.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-primary text-sm">✓</span>
                      </div>
                      <span>
                      Discover proven methods to build a robust international professional network.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-primary text-sm">✓</span>
                      </div>
                      <span>
                      Gain actionable tips to stand out in competitive global markets and secure your dream role.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* <div>
                  <h3 className="text-xl font-bold mb-4">
                    For Global Opportunity Explorers:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-primary text-sm">✓</span>
                      </div>
                      <span>
                        Identify the key error that holds back job seekers—and
                        how to overcome it.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-primary text-sm">✓</span>
                      </div>
                      <span>
                        Gain proven methods to build an international network
                        and stand out in competitive global markets.
                      </span>
                    </li>
                  </ul>
                </div> */}
              </div>

              <div className="mt-10">
                <Button size="lg" className="w-full md:w-auto">
                  Reserve Your Spot Now – It's Free!
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Our Participants Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">R</span>
                </div>
                <div>
                  <h3 className="font-bold">Vijay R.</h3>
                  <p className="text-sm text-gray-500">Non-Traditional Professional</p>
                </div>
              </div>
              <p className="italic text-gray-600">
                "Super 30 made me see that my non-traditional background was my greatest asset in a competitive market."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">P</span>
                </div>
                <div>
                  <h3 className="font-bold">Priya S.</h3>
                  <p className="text-sm text-gray-500">Software Engineer</p>
                </div>
              </div>
              <p className="italic text-gray-600">
              “ISAOL helped me land a remote global role without the traditional recruitment fees. It’s truly transformative!”
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">N</span>
                </div>
                <div>
                  <h3 className="font-bold">Neha P.</h3>
                  <p className="text-sm text-gray-500">Returning Professional</p>
                </div>
              </div>
              <p className="italic text-gray-600">
              “After my maternity break, the Second Innings track empowered me to re-enter the workforce with confidence.”
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/v1/testimonials">
              <Button variant="outline">
                Read More Testimonials
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

<InfiniteTestimonial/>
      

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Global Future Starts Now
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Take control of your education, career, or entrepreneurial journey
              without the outdated middlemen. Join our FREE 30-Minute
              Masterclass and explore the groundbreaking programs that will
              redefine your success.
            </p>
            <Button size="lg" className="text-lg px-8 py-6">
              Register Now – It's Free!
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

