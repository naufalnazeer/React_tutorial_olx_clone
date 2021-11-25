import { createContext } from 'react'
import { useState } from 'react/cjs/react.development'

export const firebasecontext = createContext(null)
export const AuthContext = createContext(null)

export default function Context({ children }) {
  const [user, setUser] = useState('Hello')
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}
