import { useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";
export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSignup = async () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    // Step 1: Signup
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      setLoading(false);
      return;
    }

    // Insert user
    await supabase.from("users").insert([
      {
        id: data.user.id,
        email: email,
        subscription_status: "inactive",
        charity: "Not selected",
      },
    ]);

    alert("Signup successful!");
    navigate("/dashboard");
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-80">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Create Account
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-gray-700 text-white outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-gray-700 text-white outline-none"
        />

        <button
          onClick={handleSignup}
          className="w-full bg-blue-600 hover:bg-blue-700 text-black p-3 rounded"
        >
          {loading ? "Loading..." : "Signup"}
        </button>
        <p className="text-gray-400 mt-4">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
