import { useState } from "react"
import "./App.css"
import Formulaire from "./components/Formulaire"
import Message from "./components/Message"

function App(props) {
  let [messages, setMessages] = useState({})
  let [listMessages, setListMessages] = useState(false)
  let pseudo = props.match.params.pseudo

  const addMessage = (message) => {
    console.log("IN addMessage")
    messages[`message-${Date.now()}`] = message
    setMessages(messages)
    console.log(messages)
    console.log("OUT addMessage")
    listMessages = Object.keys(messages).map((key) => <Message key={key} pseudo={messages[key].pseudo} message={messages[key].message}></Message>)
    setListMessages(listMessages)
  }

  console.log(listMessages)

  return (
    <div className='box'>
      <div className='messages'>
        <div className='message'>{listMessages}</div>
      </div>
      <Formulaire addMessage={addMessage} pseudo={pseudo} />
    </div>
  )
}

export default App
