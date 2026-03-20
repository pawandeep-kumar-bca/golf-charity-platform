import { useEffect, useState } from "react"
import { supabase } from "./lib/supabase"
import { Routes, Route, Navigate } from "react-router-dom"
import Landing from "./pages/LandingPage"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import Admin from "./pages/Admin"

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user)
    })

    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null)
      }
    )

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [])

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

       <Route path="/" element={<Landing />} />
      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={user ? <Dashboard user={user} /> : <Navigate to="/login" />}
      />

      <Route
        path="/admin"
        element={user ? <Admin /> : <Navigate to="/login" />}
      />

      {/* Default Route */}
      <Route
        path="/"
        element={<Navigate to={user ? "/dashboard" : "/login"} />}
      />
    </Routes>
  )
}

export default App