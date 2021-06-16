import React from "react"

const Connexion = () => {
  return (
    <div className='connexionBox'>
      <form className='connexion'>
        <input placeholder='Pseudo' type='text' required />
        <button type='submit'>ENTER</button>
      </form>
    </div>
  )
}

export default Connexion
