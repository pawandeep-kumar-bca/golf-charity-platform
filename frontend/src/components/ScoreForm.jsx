import { useState } from "react"
import { supabase } from "../lib/supabase"

export default function ScoreForm({ user, refresh }) {
  const [score, setScore] = useState("")

 const addScore = async () => {
  if (!score) return

  const { data } = await supabase
    .from("scores")
    .select("*")
    .eq("user_id", user.id)
    .order("date", { ascending: true })

  if (data.length >= 5) {
    await supabase.from("scores").delete().eq("id", data[0].id)
  }

  const { error } = await supabase.from("scores").insert([
    {
      user_id: user.id,
      score: parseInt(score),
      date: new Date().toISOString(),
    },
  ])

  if (error) {
    console.error(error)
    alert("Error adding score")
    return
  }

  setScore("")
  refresh() // fetchScores call hoga
}

  return (
  <div className="flex flex-col gap-4">
    
    {/* Input */}
    <input
      type="number"
      placeholder="Enter your score (1 - 45)"
      value={score}
      onChange={(e) => setScore(e.target.value)}
      className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
    />

    {/* Button */}
    <button
      onClick={addScore}
      className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg font-semibold"
    >
      ➕ Add Score
    </button>

  </div>
)
}