import { Routes, Route, Navigate } from "react-router-dom"
import Landing from "./pages/LandingPage"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import Admin from "./pages/Admin"

const AppRoutes = ({ user }) => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Landing */}
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

      {/* Default/Fallback */}
      <Route
        path="*"
        element={<Navigate to={user ? "/dashboard" : "/login"} />}
      />
    </Routes>
  )
}

export default AppRoutes