import React, {useState, useEffect} from 'react'
import firebase from 'firebase/app'
import Button from './Button'
import Message from './Message'

const Channel = ({user = null, db = null}) => {

    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState('')

    const {uid, displayName, photoURL} = user

    const handleChange = e => {
        setNewMessage(e.target.value)
      }
    
      const handleSubmit = e => {
        e.preventDefault()
      
        if(db){
          db.collection('messages').add({
            text: newMessage,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            displayName,
            photoURL
          })
        }
      }

    useEffect(()=> {
        if(db){
            const unsubscribe = db
            .collection('messages')
            .orderBy('createdAt')
            .limit(100)
            .onSnapshot(querySnapshot => {
                // Get all documents from collection - with IDs
                const data = querySnapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id
                }))
                // Update state
                setMessages(data)
            })

            // Detach listener
            return unsubscribe
        }
    },[db])
    return (
        <>
        <ul>
            {messages.map(message => (
                <li key={message.id}>
                    <Message {...message}></Message>
                </li>
            ))}
        </ul>
        <form onSubmit={handleSubmit}>
                <input 
                    onChange={handleChange}
                    type='text'
                    value={newMessage}
                    placeholder='Type your message here'
                >
                </input>
                <button type='submit' disabled={!newMessage}>Send</button>
        </form>
        </>
    )
}

export default Channel
