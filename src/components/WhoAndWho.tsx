import React from 'react'

const WhoAndWho = () => {
  return (
    <div>{/* Who Is This For? */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Who Is This For?</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-4">
            ISAOL is crafted for:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
            <li><b>Higher Studies Aspirants:</b> Future students ready to pursue master’s, PhD, or other global programs.</li>
            <li><b>Global Job Seekers:</b> Professionals at any stage aiming for international roles or remote opportunities.</li>
            <li><b>Career Pivoters & Lifelong Learners:</b> Individuals ready to upskill and embrace new challenges.</li>
            <li><b>Super 30:</b> The unconventional thinkers—those in non-traditional fields who break the mold.</li>
            <li><b>Second Innings:</b> Professionals restarting their careers after a break.</li>
            <li><b>Founders Cohort:</b> Aspiring startup founders eager to transform ideas into reality.</li>
          </ul>
        </div>
      </div>
    </section>

    {/* How It Works */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="max-w-4xl mx-auto">
          <ol className="list-decimal list-inside text-lg text-gray-700">
            <li className="mb-4"><b>Register for the FREE 30-Minute Session:</b> Secure your spot with a single click.</li>
            <li className="mb-4"><b>Attend the Live Session:</b> Receive real-time, actionable insights tailored to your journey.</li>
            <li><b>Choose Your Path:</b> Explore our unique programs and enroll in the full ISAOL workshop to dive deeper into your chosen track.</li>
          </ol>
        </div>
      </div>
    </section></div>
  )
}

export default WhoAndWho