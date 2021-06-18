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

export {auth,db}
export default firebaseApp





