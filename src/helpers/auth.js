import firebase from "firebase/app"
import { auth } from "./firebase"

const signInWithGoogle = async () => {
  // retrieve Google provider object
  const provider = new firebase.auth.GoogleAuthProvider()
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

const signUpWithEmailAndPassword = (email,password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      // let user = userCredential.user;
      // ...
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      console.error('codeError: ' + errorCode + ' message: ' + errorMessage)
      // ..
    });
}

const signInWithEmailAndPassword = (email,password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    // let user = userCredential.user;
    // ...
  })
  .catch((error) => {
    let errorCode = error.code;
    let errorMessage = error.message;
    console.error('codeError: ' + errorCode + ' message: ' + errorMessage)

  });
}
  


export { signInWithGoogle, signOut, signUpWithEmailAndPassword, signInWithEmailAndPassword }
