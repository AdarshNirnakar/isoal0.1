import Link from "next/link"
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonial"






export default function V2HomePage() {
  return (
    <>
      {/* Hero Section */}
      {/* <section className="bg-purple-600 text-white py-40">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Transform Your Global Education Journey</h1>
            <p className="text-xl mb-8">
              Study Abroad Without Pricey Middlemen—Access Top Universities, Scholarships, and Transparent Guidance.
            </p>
            <p className="text-lg mb-8">
              Empower yourself with proven strategies that cut through the noise. Discover how ISAOL helps you secure
              admission to elite institutions while saving up to 50% on costs.
            </p>
            <Button size="lg" className="text-purple-600 bg-white hover:bg-purple-50">
              Register for Your FREE 30-Minute Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section> */}

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
      

      {/* What is ISAOL Section
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">What is ISAOL?</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-lg text-gray-700">
                ISAOL (Increase Surface Area of Luck) is a revolutionary workshop designed exclusively for ambitious
                students. We provide a transparent, cost-effective roadmap to navigate international university
                applications, scholarship processes, and admissions—all without relying on expensive intermediaries.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Why Choose ISAOL Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose ISAOL for Higher Studies?</h2>
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
              <h3 className="text-xl font-bold mb-3">Direct University Access</h3>
              <p className="text-gray-600">
                Gain insider tips on admissions and scholarship applications from global experts.
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
              <h3 className="text-xl font-bold mb-3">Cost-Efficient Solutions</h3>
              <p className="text-gray-600">Eliminate unnecessary fees by bypassing traditional consultancies.</p>
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
              <h3 className="text-xl font-bold mb-3">Proven Success</h3>
              <p className="text-gray-600">
                Join a community of students who have transformed their education journeys using our time-tested
                strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Groundbreaking Programs</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Global Fusion Program</h3>
              <p className="text-gray-600 mb-4">
                Engage in immersive virtual reality sessions and live global networking with top education mentors.
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
              <h3 className="text-xl font-bold mb-4">Talent Incubator Accelerator</h3>
              <p className="text-gray-600 mb-4">
                Get matched with successful alumni and academic leaders to fast-track your path to your dream
                university.
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
              <h3 className="text-xl font-bold mb-4">Cross-Cultural Immersion Bootcamp</h3>
              <p className="text-gray-600 mb-4">
                Collaborate on international projects to build a competitive academic profile.
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

      {/* Additional Tracks Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Additional Tracks for Every Aspiring Student</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Second Innings</h3>
              <p className="text-gray-600 mb-4">
                For mature students returning to education—whether you're a returning mother or a seasoned professional
                seeking academic renewal, this track offers personalized guidance for re-entry.
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
                For non-traditional aspirants from fields like farming, security, or homemaking—Super 30 celebrates your
                unique journey and transforms your unconventional background into academic excellence.
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
                For visionary students with entrepreneurial ambitions, offering mentorship and practical tools to launch
                innovative ventures alongside your studies.
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

      {/* What You'll Learn Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What You'll Learn in the FREE 30-Minute Session</h2>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center mr-4 mt-0.5">
                    <span className="text-purple-600 font-bold">1</span>
                  </div>
                  <p className="text-gray-700 text-lg">
                    Identify common pitfalls in international applications and learn how to avoid them.
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center mr-4 mt-0.5">
                    <span className="text-purple-600 font-bold">2</span>
                  </div>
                  <p className="text-gray-700 text-lg">
                    Discover actionable strategies to secure scholarships and admissions at elite institutions.
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center mr-4 mt-0.5">
                    <span className="text-purple-600 font-bold">3</span>
                  </div>
                  <p className="text-gray-700 text-lg">
                    Gain insights into building a standout academic profile that gets noticed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold">R</span>
                </div>
                <div>
                  <h3 className="font-bold">Rahul M.</h3>
                  <p className="text-sm text-gray-500">Student</p>
                </div>
              </div>
              <p className="italic text-gray-600">
                "ISAOL's guidance helped me secure a full scholarship at my dream university. It's a complete
                game-changer!"
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold">N</span>
                </div>
                <div>
                  <h3 className="font-bold">Neha P.</h3>
                  <p className="text-sm text-gray-500">Mature Student</p>
                </div>
              </div>
              <p className="italic text-gray-600">
                "After my career break, the Second Innings track reignited my passion for learning and set me on a path
                to success."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold">V</span>
                </div>
                <div>
                  <h3 className="font-bold">Vijay R.</h3>
                  <p className="text-sm text-gray-500">Non-Traditional Aspirant</p>
                </div>
              </div>
              <p className="italic text-gray-600">
                "Super 30 made me realize that my unconventional background is a strength, not a weakness."
              </p>
            </div>
          </div>
        </div>
      </section> */}

     <AnimatedTestimonialsDemo/>
      

      {/* CTA Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Your global education journey starts here.</h2>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
            Register Now – It's Free!
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </>
  )
}

