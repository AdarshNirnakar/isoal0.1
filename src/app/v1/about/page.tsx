import Image from "next/image"

export default function V1AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">What is ISAOL?</h1>
            <p className="text-lg text-gray-600">
              Increase Surface Area of Luck - Transforming how you approach global opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=500"
                width={500}
                height={400}
                alt="About ISAOL"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                ISAOL (Increase Surface Area of Luck) is a transformative workshop designed to empower you with the
                skills, strategies, and confidence to bypass outdated systems. We provide a holistic, transparent
                approach—saving you up to 50%+ on costs—so you can create your own path to success.
              </p>
              <p className="text-lg text-gray-700">
                Our mission is to democratize access to global opportunities, whether in education or career
                development, by eliminating unnecessary middlemen and providing you with direct tools and strategies to
                succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
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
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
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
                We constantly push boundaries to create revolutionary programs that challenge conventional approaches to
                education and career development.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
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
                We empower individuals to take control of their own journeys, providing them with the tools and
                confidence to navigate global opportunities independently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  width={128}
                  height={128}
                  alt="Ravishankar M"
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Ravishankar M</h3>
              <p className="text-gray-500 mb-4">Chief Executive Officer</p>
              <p className="text-gray-600">
                With over 15 years of experience in global education and career development, Ravishankar leads ISAOL's
                mission to transform how individuals access global opportunities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  width={128}
                  height={128}
                  alt="Team Member"
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Priya Sharma</h3>
              <p className="text-gray-500 mb-4">Chief Program Officer</p>
              <p className="text-gray-600">
                Priya oversees the development and implementation of ISAOL's revolutionary programs, ensuring they
                deliver transformative results for participants.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  width={128}
                  height={128}
                  alt="Team Member"
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Vikram Patel</h3>
              <p className="text-gray-500 mb-4">Head of Global Partnerships</p>
              <p className="text-gray-600">
                Vikram builds and maintains relationships with universities, employers, and organizations worldwide to
                create direct pathways for ISAOL participants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">About Deeproot, Inc.</h2>
            <p className="text-lg text-gray-700 mb-6 text-center">
              ISAOL is brought to you by Deeproot, Inc., a global employment platform empowering businesses and
              individuals through transparent, cost-effective solutions that break conventional barriers.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md">
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
                    Email: support@isaol.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

