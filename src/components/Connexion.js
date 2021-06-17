import React, { useState } from "react"
import { Redirect } from "react-router"

const Connexion = () => {
  let [pseudo, setPseudo] = useState(false)
  let [goToChat, setGoToChat] = useState(false)

  const handleChange = (event) => {
      pseudo = event.target.value
      setPseudo(pseudo)
  }
  const handleSubmit = () => {
      setGoToChat(!goToChat)
  }

  if(goToChat){
    return <Redirect push to={`/pseudo/${pseudo}`}/>
  }
  return (
    
    <div className='connexionBox'>
      <form className='connexion' onSubmit={handleSubmit}>
        <input placeholder='Pseudo' type='text' onChange={handleChange} required />
        <button type='submit'>ENTER</button>
      </form>
    </div>
  )
}

export default Connexion
