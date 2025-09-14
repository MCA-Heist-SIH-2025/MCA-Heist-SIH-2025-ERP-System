import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import LoginPage from './components/LoginPage'
import RoleSelectorPage from './pages/RoleSelectorPage'
import Footer from './components/Footer'

// Portfolio Pages (dynamic by role)
import StudentPortfolioCard from './components/StudentProtfolioCard'
import FacultyPortfolioCard from './components/FacultyProtfolioCard'
import SuperadminPortfolioCard from './components/SuperadminProtfolioCard'
import ManagementPortfolioCard from './components/ManagementProtfolioCard'

function App() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/select-role" element={<RoleSelectorPage />} />

        {/* Dynamic Portfolio Routes */}
        <Route path="/student/:username" element={<StudentPortfolioCard />} />
        <Route path="/faculty/:username" element={<FacultyPortfolioCard />} />
        <Route path="/superadmin/:username" element={<SuperadminPortfolioCard />} />
        <Route path="/management/:username" element={<ManagementPortfolioCard />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App