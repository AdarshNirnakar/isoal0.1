import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"


const page = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-16 pb-20 md:pt-20 md:pb-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Unlock a World of Global Opportunities
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Transform your future with revolutionary strategies—whether you're aiming for top global universities or
                landing international roles without expensive intermediaries.
              </p>
              <Button size="lg" className="text-lg px-8 py-6">
                Register for Your FREE 30-Minute Session
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="mt-6 text-gray-500">
                Why rely on traditional middlemen when you can gain the tools and insights to navigate your education
                and career journey independently? Join ISAOL's FREE session and discover how to shape your future on
                your own terms.
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

      {/* Featured Programs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Revolutionary Programs</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            At ISAOL, we're pioneering programs that no one else in the world has dared to create. Explore our exclusive
            suite of offerings:
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/v1/programs" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 group-hover:shadow-xl">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary">Global Fusion Program</h3>
                <p className="text-gray-600">
                  Immerse yourself in a dynamic, interactive learning environment with virtual reality simulations and
                  live cross-cultural exchanges.
                </p>
                <div className="mt-4 text-primary flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>

            <Link href="/v1/programs" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 group-hover:shadow-xl">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary">Super 30</h3>
                <p className="text-gray-600">
                  For the rebels and game-changers—this program celebrates your unique perspective and transforms it
                  into a competitive advantage.
                </p>
                <div className="mt-4 text-primary flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>

            <Link href="/v1/programs" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 group-hover:shadow-xl">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary">Founders Cohort</h3>
                <p className="text-gray-600">
                  Designed for young, passionate first-time founders, with hands-on guidance through the challenges of
                  launching a startup.
                </p>
                <div className="mt-4 text-primary flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link href="/v1/programs">
              <Button variant="outline" size="lg">
                View All Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Session Info Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">What You'll Learn in the FREE 30-Minute Session</h2>
              <p className="text-gray-600 mb-8">This session is your gateway to independence and global success:</p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">For Higher Studies Aspirants:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-primary text-sm">✓</span>
                      </div>
                      <span>Discover the top mistake in university applications and how to avoid it.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-primary text-sm">✓</span>
                      </div>
                      <span>
                        Learn actionable strategies to secure scholarships and admissions without pricey intermediaries.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">For Global Opportunity Explorers:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-primary text-sm">✓</span>
                      </div>
                      <span>Identify the key error that holds back job seekers—and how to overcome it.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-primary text-sm">✓</span>
                      </div>
                      <span>
                        Gain proven methods to build an international network and stand out in competitive global
                        markets.
                      </span>
                    </li>
                  </ul>
                </div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Participants Say</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">R</span>
                </div>
                <div>
                  <h3 className="font-bold">Rahul M.</h3>
                  <p className="text-sm text-gray-500">Student</p>
                </div>
              </div>
              <p className="italic text-gray-600">
                "ISAOL helped me secure admission to my dream university without the extra costs of consultancies. It's
                a game-changer!"
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
                "I landed a remote global role by learning how to build an international network the ISAOL way. Truly
                revolutionary."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">N</span>
                </div>
                <div>
                  <h3 className="font-bold">Neha P.</h3>
                  <p className="text-sm text-gray-500">Returning Mother</p>
                </div>
              </div>
              <p className="italic text-gray-600">
                "After my maternity break, ISAOL's Second Innings gave me the confidence and tools to re-enter the
                workforce with renewed vigor."
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

      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Global Future Starts Now</h2>
            <p className="text-lg text-gray-700 mb-8">
              Take control of your education, career, or entrepreneurial journey without the outdated middlemen. Join
              our FREE 30-Minute Masterclass and explore the groundbreaking programs that will redefine your success.
            </p>
            <Button size="lg" className="text-lg px-8 py-6">
              Register Now – It's Free!
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default page