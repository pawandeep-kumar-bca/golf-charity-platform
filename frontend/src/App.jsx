import { useEffect, useState } from "react"
import { supabase } from "./lib/supabase"
import AppRoutes from "./routes/routes"

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

  return <AppRoutes user={user} />
}

export default App