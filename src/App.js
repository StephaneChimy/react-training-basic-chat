import { useState, Fragment, useEffect } from "react"
import "./App.css"
//import Formulaire from "./components/Formulaire"
import Button from "./components/Button"
import Channel from "./components/Channel"
import NavHeader from "./components/NavHeader"
// Firebase
import { auth, db } from "./helpers/firebase"
import { signInWithGoogle, signOut } from "./helpers/auth"
import LoginForm from "./components/LoginForm"
import ButtonLogOut from "./components/Button.logOut"

function App() {
  const [user, setUser] = useState(() => auth.currentUser)
  const [initializing, setInitializing] = useState(true)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
      if (initializing) {
        setInitializing(false)
      }
    })

    // Cleanup subscription
    return unsubscribe
  }, [])

  if (initializing) return "Loading..."

  return (
    <div>
      {user ? (
        <div class='h-screen bg-white-300'>
          <div class='flex justify-center items-center h-screen '>
            <div class='w-full/2 h-full/2 bg-white rounded shadow-2xl'>
              <NavHeader user={user} />
              <Channel user={user} db={db}></Channel>
            </div>
          </div>
        </div>
      ) : (
        <LoginForm />
      )}
    </div>
  )
}

export default App
