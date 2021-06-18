import { useState, Fragment, useEffect } from "react"
import "./App.css"
//import Formulaire from "./components/Formulaire"
import Button from "./components/Button"
import Channel from "./components/Channel"
// Firebase
import firebase from "firebase/app"
import "firebase/database"
import 'firebase/auth'
import 'firebase/firestore'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDiuv-n6qQ6wa7M9sibi6SuwAKREZ9SPm0",
    authDomain: "sc-chatbox-app-2ef99.firebaseapp.com",
    projectId: "sc-chatbox-app-2ef99",
    storageBucket: "sc-chatbox-app-2ef99.appspot.com",
    messagingSenderId: "403599717032",
    appId: "1:403599717032:web:d69e3e3bf4a8d4d396889d",
    measurementId: "G-TB3NQKKDSH"
})

const auth = firebaseApp.auth()
const db = firebaseApp.firestore()

const signInWithGoogle = async () => {
  // retrieve Google provider object
  const provider = new firebase.auth.GoogleAuthProvider();
  // Set language to the default browser preference
  auth.useDeviceLanguage()
  // Start sign in process
  try {
    await auth.signInWithPopup(provider)
  } catch (error) {
    console.error(error)
  }
}

const signOut = async () => {
  try {
    await auth.signOut()
  } catch (error) {
    console.log(error.error)
  }
}



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
    <Fragment>
      <div>
        { user ? (
          <> 
            <p>Hello {user.displayName}</p>
            <Button onClick={signOut}> Sign out</Button>
            <Channel user={user} db={db}></Channel>
          </>)  :  (<Button onClick={signInWithGoogle}> Sign in with Google</Button>)}
      </div>
      
    </Fragment>
  )
}

export default App
