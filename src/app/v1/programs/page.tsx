import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function V1ProgramsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mt-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Revolutionary Programs</h1>
            <p className="text-lg text-gray-600">
              At ISAOL, we&apos;re pioneering programs that no one else in the world has dared to create. Our exclusive suite
              of offerings is designed to redefine how you approach education and career development.
            </p>
          </div>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Program 1 */}
            <div className="mb-16 bg-white rounded-xl shadow-md overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    width={500}
                    height={400}
                    alt="Global Fusion Program"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-8">
                  <h2 className="text-2xl font-bold mb-4">Global Fusion Program</h2>
                  <p className="text-gray-600 mb-6">
                    Immerse yourself in a dynamic, interactive learning environment that combines virtual reality
                    simulations, live cross-cultural exchanges, and AI-powered career insights. Experience real-time
                    global collaboration like never before.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-primary text-sm">✓</span>
                      </div>
                      <span>Virtual reality simulations of global work environments</span>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-primary text-sm">✓</span>
                      </div>
                      <span>Live cross-cultural exchanges with international peers</span>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-primary text-sm">✓</span>
                      </div>
                      <span>AI-powered career insights tailored to your profile</span>
                    </div>
                  </div>
                  <Button>
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Program 2 */}
            <div className="mb-16 bg-white rounded-xl shadow-md overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 md:order-2">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    width={500}
                    height={400}
                    alt="Talent Incubator Accelerator"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-8 md:order-1">
                  <h2 className="text-2xl font-bold mb-4">Talent Incubator Accelerator</h2>
                  <p className="text-gray-600 mb-6">
                    A hands-on program blending mentorship, experiential projects, and interactive coaching sessions.
                    Get paired with industry experts and international mentors who help you launch your career or
                    academic journey from day one.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-primary text-sm">✓</span>
                      </div>
                      <span>One-on-one mentorship with industry leaders</span>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-primary text-sm">✓</span>
                      </div>
                      <span>Real-world experiential projects with global companies</span>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-primary text-sm">✓</span>
                      </div>
                      <span>Interactive coaching sessions to develop key skills</span>
                    </div>
                  </div>
                  <Button>
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Program 3 */}
            <div className="mb-16 bg-white rounded-xl shadow-md overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    width={500}
                    height={400}
                    alt="Cross-Cultural Immersion Bootcamp"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-8">
                  <h2 className="text-2xl font-bold mb-4">Cross-Cultural Immersion Bootcamp</h2>
                  <p className="text-gray-600 mb-6">
                    Participate in a unique challenge-based program where you work on live projects with peers and
                    professionals from around the world. Develop the agility, resilience, and cultural fluency required
                    to thrive in any global setting.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-primary text-sm">✓</span>
                      </div>
                      <span>Challenge-based learning with international teams</span>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-primary text-sm">✓</span>
                      </div>
                      <span>Cultural fluency training for global environments</span>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-primary text-sm">✓</span>
                      </div>
                      <span>Live projects with real-world impact</span>
                    </div>
                  </div>
                  <Button>
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Program 4 */}
            <div className="mb-16 bg-white rounded-xl shadow-md overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 md:order-2">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    width={500}
                    height={400}
                    alt="Super 30"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-8 md:order-1">
                  <h2 className="text-2xl font-bold mb-4">Super 30</h2>
                  <p className="text-gray-600 italic mb-4">
                  &quot;The misfits, the rebels, the troublemakers, the round pegs in the square holes, the ones who see
                    things differently. They&apos;re not fond of rules, and they have no respect for the status quo.&quot;
                  </p>
                  <p className="text-gray-600 mb-6">
                    This program is dedicated to individuals from non-traditional backgrounds (security experts,
                    farmers, homemakers, etc.) who dare to defy the norms. Here, your unique perspective is celebrated
                    and transformed into a competitive advantage.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-primary text-sm">✓</span>
                      </div>
                      <span>Specialized mentorship for non-traditional backgrounds</span>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-primary text-sm">✓</span>
                      </div>
                      <span>Unique perspective transformation workshops</span>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-primary text-sm">✓</span>
                      </div>
                      <span>Tailored career pathways for unconventional thinkers</span>
                    </div>
                  </div>
                  <Button>
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Program 5 */}
            <div className="mb-16 bg-white rounded-xl shadow-md overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    width={500}
                    height={400}
                    alt="Second Innings"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-8">
                  <h2 className="text-2xl font-bold mb-4">Second Innings</h2>
                  <p className="text-gray-600 mb-6">
                    Tailored for those restarting their careers—whether you&apos;re a returning mother or a retired
                    professional looking to re-enter the workforce. Gain strategies to rebrand yourself, leverage your
                    existing expertise, and reconnect with modern career dynamics.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-primary text-sm">✓</span>
                      </div>
                      <span>Personal rebranding and confidence building</span>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-primary text-sm">✓</span>
                      </div>
                      <span>Modern workplace skills and technology training</span>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-primary text-sm">✓</span>
                      </div>
                      <span>Supportive community of career restarters</span>
                    </div>
                  </div>
                  <Button>
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Program 6 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 md:order-2">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    width={500}
                    height={400}
                    alt="Founders Cohort"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-8 md:order-1">
                  <h2 className="text-2xl font-bold mb-4">Founders Cohort</h2>
                  <p className="text-gray-600 mb-6">
                    Designed for young, passionate first-time founders, this program provides hands-on guidance through
                    the challenges of launching and scaling a startup. Benefit from peer networking, mentorship from
                    seasoned entrepreneurs, and practical tools to turn your vision into a thriving business.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-primary text-sm">✓</span>
                      </div>
                      <span>Mentorship from successful startup founders</span>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-primary text-sm">✓</span>
                      </div>
                      <span>Practical startup tools and frameworks</span>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-primary text-sm">✓</span>
                      </div>
                      <span>Global networking with investors and partners</span>
                    </div>
                  </div>
                  <Button>
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Future?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Join our FREE 30-Minute Session to discover which program is right for you and how ISAOL can help you
              achieve your global ambitions.
            </p>
            <Button size="lg">
              Register Now – It&apos;s Free!
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

