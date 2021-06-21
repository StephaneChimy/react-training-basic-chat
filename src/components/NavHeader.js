import React from "react"
import ButtonLogOut from "./Button.logOut"
import { signOut } from "../helpers/auth"

const Header = ({ user }) => {
  return (
    <nav class='flex bg-white flex-wrap items-center justify-between p-4 shadow'>
      <div class='w-auto flex items-center justify-between'>
        {user.photoURL ? <img src={user.photoURL} alt='My profile' class='w-6 h-6 mx-1 rounded-full order-1' /> : null}
        <div class='order-2 text text-gray-800 font-semibold font-heading'>{user.displayName ? user.displayName : "Unknown"}</div>
      </div>
      <ButtonLogOut onClick={signOut}> Sign out</ButtonLogOut>
    </nav>
  )
}

export default Header
