import React, { useState } from "react"

const Formulaire = (props) => {
  let [message, setMessage] = useState('')
  let [text, setText] = useState('')
  let nbMaxChar = 140
  let nbCharLeft = nbMaxChar - text.length

  const handleChange = (event) => {
    setMessage(event.target.value)
    setText(event.target.value)
  }
  const createMessage = () => {
    let { addMessage, pseudo } = props
    message = {
      pseudo,
      message,
    }
    addMessage(message)
    setText('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    createMessage()
  }
  const handleKeyUp = (event) => {
      if(event.key === 'Enter'){
        createMessage()
      }
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <textarea required value={text} maxLength={nbMaxChar.toString()} onChange={handleChange} onKeyUp={handleKeyUp}/>
      <div className='info'>{nbCharLeft}</div>
      <button type='submit'>Envoyer</button>
    </form>
  )
}

export default Formulaire
