import Navbar from "./Navbar"
import { useState, useEffect } from 'react'

export default function LandingPage() {
  const bgShades = [
    'bg-blue-900',
    'bg-amber-400',
    'bg-purple-700',
    'bg-pink-600',
    'bg-green-100',
    'bg-red-700',
    'bg-yellow-300',
    'bg-green-400',
  ]

  const BackgroundCycler = ({ shades, interval = 4000 }) => {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % shades.length)
      }, interval)
      return () => clearInterval(timer)
    }, [shades.length, interval])

    return (
      <div className={`absolute inset-0 transition-all duration-1000 z-0 ${shades[current]}`}></div>
    )
  }

  return (
    <div className="bg-[#F9F6F1] text-gray-800 scroll-smooth">
      <Navbar showLogin={true} isLoggedln = {false}/>

      {/* Hero Section */}
      <section
        id="get-started"
        className="relative h-screen flex flex-col justify-center items-center text-center px-6 pt-20 overflow-hidden"
      >
        <BackgroundCycler shades={bgShades} />
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-10"></div>

        <div className="relative z-20 flex flex-col items-center">
          <h1 className="text-5xl font-bold text-blue-900 drop-shadow-sm">College ERP Portal</h1>
          <p className="mt-4 text-lg text-gray-700 max-w-xl">
            Streamline academics, administration, and student life—all in one place.
          </p>
          <a href="#home">
            <button className="mt-6 px-6 py-3 bg-blue-900 text-white rounded hover:bg-blue-700 transition shadow-md">
              Get Started
            </button>
          </a>
        </div>
      </section>

      {/* Home Section */}
    <div className="grid  pt-4 px-10 grid-cols-1 pb-8 md:grid-cols-2 gap-8 bg-white">
  {/* Technical Card */}
  <div className="bg-white border border-blue-200 rounded-xl p-6 min-h-[220px] shadow-sm hover:shadow-lg hover:bg-blue-100 transition duration-300 cursor-pointer">
    <h3 className="text-xl font-semibold text-blue-900 mb-2">🛠️ Technical</h3>
    <p className="text-gray-700 text-sm">
      Explore modules related to engineering, IT infrastructure, and digital systems.
    </p>
  </div>

  {/* Management Card */}
  <div className="bg-white border border-purple-200 rounded-xl p-6 min-h-[220px] shadow-sm hover:shadow-lg hover:bg-purple-100 transition duration-300 cursor-pointer">
    <h3 className="text-xl font-semibold text-purple-900 mb-2">📊 Management</h3>
    <p className="text-gray-700 text-sm">
      Monitor analytics, manage budgets, and oversee institutional performance.
    </p>
  </div>
</div>

      {/* About Section */}
     <section id="about" className="py-20 px-6 md:px-20 bg-white">
  <h2 className="text-3xl font-semibold text-blue-800 mb-10 text-center">About Our College</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {['Events', 'Clubs', 'Trips', 'Placements'].map((title) => (
      <div key={title} className="bg-white rounded-xl shadow-md p-6 min-h-[220px] hover:shadow-lg transition">
        <h3 className="text-xl font-bold text-blue-700 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">
          {title === 'Events' && 'Discover upcoming seminars, workshops, and cultural programs.'}
          {title === 'Clubs' && 'Join student-led clubs and explore your interests.'}
          {title === 'Trips' && 'Plan and track academic and recreational excursions.'}
          {title === 'Placements' && 'Access placement drives, recruiter info, and career support.'}
        </p>
      </div>
    ))}
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-semibold text-blue-800 mb-6">Contact</h2>
        <p className="text-gray-700 max-w-3xl">
          📧 Reach us at <a href="mailto:erp-support@college.edu" className="text-blue-700 underline">erp-support@college.edu</a>  
          or visit the admin office for assistance.
        </p>
      </section>
    </div>
  )
}
