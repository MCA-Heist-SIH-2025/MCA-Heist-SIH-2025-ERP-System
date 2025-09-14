import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')

  useEffect(() => {
    const storedLogin = localStorage.getItem('isLoggedIn') === 'true'
    const storedUser = localStorage.getItem('username')
    setIsLoggedIn(storedLogin)
    setUsername(storedUser || '')
  }, [])

  const login = (name) => {
    setIsLoggedIn(true)
    setUsername(name)
    localStorage.setItem('isLoggedIn', 'true')
    localStorage.setItem('username', name)
  }

  const logout = () => {
    setIsLoggedIn(false)
    setUsername('')
    localStorage.clear()
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)