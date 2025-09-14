import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
export default function ManagementPortfolioCard() {
  const navigate = useNavigate()
  const { username } = useParams()

  useEffect(() => {
    localStorage.setItem('isLoggedIn', 'true')
    localStorage.setItem('username', username)
  }, [username])

  const features = [
    { title: 'Analytics & Reports', route: 'analytics', icon: '📊', color: 'bg-white' },
    { title: 'Budget & Policy', route: 'budget', icon: '💼', color: 'bg-white'  },
    { title: 'Performance Tracking', route: 'performance', icon: '📋', color: 'bg-white'  },
    { title: 'Event Planning', route: 'events', icon: '🎉', color: 'bg-white'  },
    { title: 'Infrastructure Oversight', route: 'infra', icon: '🏗️', color: 'bg-white'  },
  ]

  return (
    <div className="min-h-screen bg-[#F9F6F1] px-6 py-20">
      <Navbar showLogin={false} showIcon={true}  isLoggedIn ={true}/>

      <h2 className="text-3xl font-bold text-purple-900 mb-10 text-center">🏢 Welcome, {username}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature) => (
          <div
            key={feature.route}
            onClick={() => navigate(`/management/${feature.route}`)}
            className={`cursor-pointer ${feature.color} rounded-lg shadow-md p-6 text-center hover:shadow-lg transition`}
          >
            <div className="text-4xl mb-2">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
            <p className="text-sm text-gray-600 mt-1">Go to {feature.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}