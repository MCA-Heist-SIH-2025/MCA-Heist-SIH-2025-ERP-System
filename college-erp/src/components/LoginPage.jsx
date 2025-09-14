import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Navbar from './Navbar'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  // Extract role from query param
  const role = new URLSearchParams(location.search).get('role') || 'student'

  const handleLogin = (e) => {
    e.preventDefault()
    if (!username.trim()) {
      setError('Please enter a valid username.')
    } else {
      setError('')
      // ✅ Redirect to role-specific portfolio page
      navigate(`/${role}/${username}`)
    }
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
    if (error) setError('')
  }

  return (
    <div className="min-h-screen bg-[#F9F6F1] text-gray-800">
      {/* ❌ Hide login button */}
      <Navbar showLogin={false} showIcon={false} />

      <div className="flex items-center justify-center py-20 px-4 pt-24">
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg w-full max-w-4xl overflow-hidden">
          {/* Left Form Card */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">
              Login as {role.charAt(0).toUpperCase() + role.slice(1)}
            </h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input type="text" placeholder="User ID" className="w-full px-4 py-2 border rounded" />
              <input type="tel" placeholder="Mobile Number" className="w-full px-4 py-2 border rounded" />
              <input type="text" placeholder="Enter OTP" className="w-full px-4 py-2 border rounded" />
              <input type="text" placeholder="Enter CAPTCHA" className="w-full px-4 py-2 border rounded" />
              <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded" />
              <div className="flex justify-between items-center">
                <a href="#" className="text-sm text-blue-700 hover:underline">Forgot Password?</a>
              </div>
              <button type="submit" className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-700 transition">
                Login
              </button>
            </form>
          </div>

          {/* Right Visual Card */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-center bg-white text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-blue-900 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A9.004 9.004 0 0112 15c2.21 0 4.21.805 5.879 2.137M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <h2 className="text-2xl font-semibold text-blue-900">Welcome</h2>
            {username && (
              <p className="mt-2 text-lg text-gray-700">
                Hello, <span className="font-bold">{username}</span> 👋
              </p>
            )}
            {error && (
              <p className="mt-4 text-red-600 font-medium">{error}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
