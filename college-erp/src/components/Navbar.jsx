import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import logo from '../assets/logo.png'
export default function Navbar({ showLogin, showIcon }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { isLoggedIn, username } = useAuth()

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  return (
    <nav className="bg-white shadow-md fixed left-0 top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo + College Info */}
        <div onClick={() => scrollToSection("get-started")} className="flex items-center gap-3 cursor-pointer">
          <img src={logo} alt="College Logo" className="h-10 w-10" />
          <div>
            <h1 className="text-lg font-bold text-blue-900">ABC Institute</h1>
            {/* <p className="text-sm text-gray-500">India</p> */}
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6 text-gray-700 font-medium">
            <li onClick={() => scrollToSection("home")} className="hover:text-blue-700 cursor-pointer">Home</li>
            <li onClick={() => scrollToSection("about")} className="hover:text-blue-700 cursor-pointer">About</li>
            <li onClick={() => scrollToSection("contact")} className="hover:text-blue-700 cursor-pointer">Contact</li>
          </ul>

          {/* Conditional Login or Profile */}
          {showLogin && (
            <button
              onClick={() => window.location.href = "/select-role"}
              className="ml-4 px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-700 transition"
            >
              Login
            </button>
          )}
          {showIcon && isLoggedIn && (
            <div className="flex items-center gap-2 ml-4">
              <svg className="h-6 w-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A9.004 9.004 0 0112 15c2.21 0 4.21.805 5.879 2.137M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-gray-700 font-medium">{username}</span>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(true)} className="text-blue-900 hover:text-blue-700">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Slide-Out Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <h2 className="text-lg font-bold text-blue-900">Menu</h2>
          <button onClick={() => setMenuOpen(false)} className="text-blue-900 hover:text-blue-700">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <ul className="flex flex-col gap-4 px-6 py-6 text-gray-700 font-medium">
          <li onClick={() => scrollToSection("home")} className="hover:text-blue-700 cursor-pointer">Home</li>
          <li onClick={() => scrollToSection("about")} className="hover:text-blue-700 cursor-pointer">About</li>
          <li onClick={() => scrollToSection("contact")} className="hover:text-blue-700 cursor-pointer">Contact</li>

          {/* Mobile Conditional Login or Profile */}
          {showLogin && (
            <button
              onClick={() => {
                setMenuOpen(false)
                window.location.href = '/select-role'
              }}
              className="text-blue-900 hover:text-blue-700 text-left"
            >
              Login
            </button>
          )}
          {showIcon && isLoggedIn && (
            <div className="flex items-center gap-2 text-blue-900">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A9.004 9.004 0 0112 15c2.21 0 4.21.805 5.879 2.137M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{username}</span>
            </div>
          )}
        </ul>
      </div>
    </nav>
  )
}
