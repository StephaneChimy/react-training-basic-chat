import firebase from "firebase/app"
import { auth} from "./firebase"

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

export {signInWithGoogle, signOut}