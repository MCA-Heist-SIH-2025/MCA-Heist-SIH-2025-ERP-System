import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function RoleSelectorPage() {
  const navigate = useNavigate()

  const roles = [
    { label: 'Student', icon: '🎓', role: 'student' },
    { label: 'Faculty', icon: '📚', role: 'faculty' },
    { label: 'Superadmin', icon: '🛡️', role: 'superadmin' },
    { label: 'Management', icon: '🏢', role: 'management' },
  ]

  return (
    <div className="min-h-screen bg-[#F9F6F1] text-gray-800">
      {/* ❌ Hide login button on this page */}
      <Navbar showLogin={false} />

      <section className="py-20 px-6 md:px-20 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">Select Your Role</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
          {roles.map((role) => (
            <div
              key={role.label}
              onClick={() => navigate(`/login?role=${role.role}`)}
              className="cursor-pointer bg-white rounded-xl shadow-md p-6 min-h-[200px] text-center hover:shadow-lg transition duration-300"
            >
              <div className="text-4xl mb-3">{role.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{role.label}</h3>
              <p className="mt-2 text-sm text-gray-600">Login as {role.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}