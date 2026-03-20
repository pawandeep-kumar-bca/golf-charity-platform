import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"
import ScoreForm from "../components/ScoreForm"
import ScoreList from "../components/ScoreList"
import Navbar from "../components/Navbar"

export default function Dashboard({ user }) {
  const [scores, setScores] = useState([])

  useEffect(() => {
    const fetchScores = async () => {
      if (!user?.id) return

      const { data, error } = await supabase
        .from("scores")
        .select("*")
        .eq("user_id", user.id)
        .order("date", { ascending: false })

      if (error) {
        console.error("Error fetching scores:", error)
      } else {
        setScores(data || [])
      }
    }

    fetchScores()
  }, [user])

  if (!user) {
    return <div>Loading...</div>
  }

 return (
  <div className="min-h-screen bg-gray-900 text-white">
    
    {/* Navbar */}
    <Navbar user={user} />

    {/* Main Container */}
    <div className="p-6 max-w-5xl mx-auto">

      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      {/* Cards Section */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* Add Score Card */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            Add New Score
          </h2>

          <ScoreForm user={user} refresh={() => window.location.reload()} />
        </div>

        {/* Score List Card */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            Your Scores
          </h2>

          <ScoreList scores={scores} />
        </div>

      </div>

    </div>
  </div>
)
}