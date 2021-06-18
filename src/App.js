import { useState, Fragment, useEffect } from "react"
import "./App.css"
//import Formulaire from "./components/Formulaire"
import Button from "./components/Button"
import Channel from "./components/Channel"
// Firebase
import { auth,db } from "./helpers/firebase"
import {signInWithGoogle,signOut} from './helpers/auth'

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
        { user ? (
          <div> 
            <p>Hello {user.displayName}</p>
            <Button onClick={signOut}> Sign out</Button>
            <Channel user={user} db={db}></Channel>
          </div>)  :  (<Button onClick={signInWithGoogle}> Sign in with Google</Button>)}
      </div>
  )
}

export default App
