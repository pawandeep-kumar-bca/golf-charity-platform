import { supabase } from "../lib/supabase"
import { useNavigate } from "react-router-dom"

export default function Navbar({ user }) {
  const navigate = useNavigate()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate("/login")
  }

  return (
    <div className="flex justify-between items-center bg-gray-900 text-white px-6 py-4 shadow-md border-b border-gray-800">
      
      {/* Logo */}
      <h1
        className="text-xl font-bold cursor-pointer tracking-wide hover:text-blue-400 transition"
        onClick={() => navigate("/dashboard")}
      >
        ⛳ Golf Charity
      </h1>

      {/* Right Side */}
      <div className="flex items-center gap-6">

        {/* Navigation */}
        <button
          onClick={() => navigate("/dashboard")}
          className="hover:text-blue-400 transition"
        >
          Dashboard
        </button>

        <button
          onClick={() => navigate("/admin")}
          className="hover:text-blue-400 transition"
        >
          Admin
        </button>

        {/* User Email */}
        <span className="text-sm text-gray-300 hidden md:block">
          {user?.email}
        </span>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded-lg text-sm font-medium"
        >
          Logout
        </button>

      </div>
    </div>
  )
}