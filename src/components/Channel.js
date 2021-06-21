import React, { useState, useEffect, useRef } from "react"
import firebase from "firebase/app"
import Message from "./Message"
import ButtonSendInChat from "./Button.sendInChat"

const Channel = ({ user = null, db = null }) => {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState("")

  // Messages channel stays at bottom with new message
  const messagesRef = useRef(null)
  const scrollStaysBottom = () => {
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight
  }
  //
  const { uid, displayName, photoURL } = user
  console.log(user)

  const handleChange = (e) => {
    setNewMessage(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (db) {
      db.collection("messages").add({
        text: newMessage,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        displayName,
        photoURL,
      })
    }
    setNewMessage("")
  }

  // Is this the current user?
  const isUser = uid => uid === user.uid

  useEffect(() => {
    if (db) {
      const unsubscribe = db
        .collection("messages")
        .orderBy("createdAt")
        .limit(100)
        .onSnapshot((querySnapshot) => {
          // Get all documents from collection - with IDs
          let data = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
          const viewOnlyTenMessages =() =>{
            let allMessages = data
            let allMessagesTemp = []
            console.log(allMessages)
            for(let i = allMessages.length -10; i < allMessages.length; i++ ){
                allMessagesTemp.push(allMessages[i])
            }
            console.log(allMessagesTemp)
            data = allMessagesTemp
          }
          viewOnlyTenMessages()
          // Update state
          setMessages(data)
        })

      // Detach listener
      return unsubscribe
    }
  }, [db])

  // useEffect for scrollBottom
  useEffect(
        scrollStaysBottom
  , [messages])

  return (
    <section>
      <div>
        <div
          id='messages'
          class='flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch max-h-96 shadow'
          ref={messagesRef}>
          {messages.map((message) => (
            <Message key={message.id} isUser={isUser} {...message}></Message>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div class='border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0'>
          <div class='relative flex'>
            <input
              value={newMessage}
              onChange={handleChange}
              type='text'
              placeholder='Type your message here'
              className='w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 p-5 bg-gray-200 rounded-full py-1 m-3 text-sm'></input>
            <div class='absolute right-3 items-center inset-y-0 hidden -top-2.5 sm:flex'>
              <ButtonSendInChat type='submit' disabled={!newMessage} />
            </div>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Channel
