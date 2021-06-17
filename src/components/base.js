import Rebase from "re-base"
import firebase from "firebase/app"
import "firebase/database"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDUWAkyys3qfVW9rNHTlLZV9iSHA5o_1zg",
  authDomain: "sc-chatbox-app.firebaseapp.com",
  databaseURL: "https://sc-chatbox-app-default-rtdb.europe-west1.firebasedatabase.app",
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base
