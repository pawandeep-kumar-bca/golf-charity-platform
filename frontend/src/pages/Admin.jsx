import { supabase } from "../lib/supabase"
import Navbar from "../components/Navbar"

export default function Admin({ user }) {

  const generateDraw = async () => {
    let numbers = []
    for (let i = 0; i < 5; i++) {
      numbers.push(Math.floor(Math.random() * 45) + 1)
    }

    await supabase.from("draws").insert([
      {
        numbers: JSON.stringify(numbers),
      },
    ])

    alert("Draw generated!")
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">

      {/* Navbar */}
      <Navbar user={user} />

      {/* Main Container */}
      <div className="p-6 max-w-4xl mx-auto">

        {/* Heading */}
        <h1 className="text-3xl font-bold mb-6">
          Admin Panel
        </h1>

        {/* Card */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">

          <h2 className="text-xl font-semibold mb-4">
            Draw Management
          </h2>

          <p className="text-gray-400 mb-6">
            Generate monthly draw results for users.
          </p>

          <button
            onClick={generateDraw}
            className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-lg font-semibold"
          >
            🎲 Run Draw
          </button>

        </div>

      </div>
    </div>
  )
}