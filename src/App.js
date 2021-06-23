import { useState, Fragment, useEffect } from "react"
import "./App.css"
//import Formulaire from "./components/Formulaire"
import Channel from "./components/Channel"
import NavHeader from "./components/NavHeader"
// Firebase
import { auth, db } from "./helpers/firebase"
import LoginForm from "./components/LoginForm"

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
        <div class='h-full w-full bg-white-300'>
          <div class='flex justify-center items-center h-screen '>
            <div class='w-2/3 bg-white rounded shadow-2xl'>
              <NavHeader user={user} />
              <div className='h-24 flex justify-center items-center bg-gray-50 shadow-inner text-center'>
                <h1 className=' text-xl text-black'>-SC- Chatbox-App</h1>
              </div>
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
