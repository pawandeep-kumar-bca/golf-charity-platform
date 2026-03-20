import { useNavigate } from "react-router-dom"

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div className="h-full w-full bg-gray-900 text-white">

      {/* Navbar */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
        <h1 className="text-xl font-bold">⛳ Golf Charity</h1>

        <div className="flex gap-4">
          <button
            onClick={() => navigate("/login")}
            className="hover:text-blue-400"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="bg-blue-600 px-4 py-2 rounded"
          >
            Signup
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-6 py-20">

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Play Golf. Win Rewards.  
          <span className="text-blue-500"> Give Back.</span>
        </h1>

        <p className="text-gray-400 max-w-xl mb-8">
          Track your golf scores, participate in monthly prize draws,
          and support charities — all in one platform.
        </p>

        <button
          onClick={() => navigate("/signup")}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-lg font-semibold"
        >
          Get Started 🚀
        </button>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-6 px-6 pb-20 max-w-6xl mx-auto">

        <div className="bg-gray-800 p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">📊 Track Scores</h3>
          <p className="text-gray-400">
            Easily manage your last 5 golf scores with a smooth interface.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">🎲 Monthly Draws</h3>
          <p className="text-gray-400">
            Participate in exciting monthly prize draws and win rewards.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">❤️ Support Charity</h3>
          <p className="text-gray-400">
            A portion of your subscription goes to a charity of your choice.
          </p>
        </div>

      </div>

      {/* Footer */}
      <div className="text-center py-5 border-t border-gray-800 text-gray-500">
        © 2026 Golf Charity Platform
      </div>

    </div>
  )
}