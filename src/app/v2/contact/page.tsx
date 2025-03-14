import React from 'react';

export default function ContactPage() {
  return (
    <div className="font-sans antialiased bg-white text-gray-900 min-h-screen flex items-center justify-center py-12">
      <div className="container mx-auto px-4 py-8 rounded-lg shadow-xl bg-gray-50 border border-gray-200">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Left Side: Contact Information */}
          <div className="p-8 h-screen">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-wide">Contact</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Whether it's to discuss your next project, learn more about our services, or join our team,
              drop us a line and get the conversation started.
            </p>
            <a href="mailto:hello@terradactyl.xyz" className="text-blue-500 hover:underline block mb-4">
              hello@terradactyl.xyz
            </a>
          </div>

          {/* Right Side: Contact Form */}
          <div className="p-8 h-screen">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name*</label>
                  <input
                    type="text"
                    id="name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div>
                  <label htmlFor="organisation" className="block text-gray-700 text-sm font-bold mb-2">Organisation*</label>
                  <input
                    type="text"
                    id="organisation"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email*</label>
                  <input
                    type="email"
                    id="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div>
                  <label htmlFor="role" className="block text-gray-700 text-sm font-bold mb-2">Role</label>
                  <select
                    id="role"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option>Select Role</option>
                    <option>Developer</option>
                    <option>Designer</option>
                    <option>Manager</option>
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="attachment" className="block text-gray-700 text-sm font-bold mb-2">Attach any relevant Deck or Doc</label>
                <input
                  type="file"
                  id="attachment"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message*</label>
                <textarea
                  id="message"
                  rows={4}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>

              <div className="mt-6 flex items-center">
                <input type="checkbox" id="terms" className="mr-2 leading-tight" />
                <label htmlFor="terms" className="text-sm text-gray-700">
                  By submitting this form you accept our policy as laid out on our <a href="#" className="text-blue-500 hover:underline">T&Cs</a>
                </label>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-gray-700 transition duration-300 ease-in-out flex items-center justify-center"
                >
                  <span className="mr-2">Send</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707L9 5.293a1 1 0 00-1.414 1.414L10.586 9H5a1 1 0 100 2h5.586l-2.293 2.293a1 1 0 001.414 1.414l4.793-4.793z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}