import React from 'react'
import ButtonLogOut from './Button.logOut'
import { signOut } from '../helpers/auth'

const Header = ({user}) => {
    return (
<nav class="flex bg-white flex-wrap items-center justify-between p-4">
    <div class="lg:order-2 w-auto lg:w-1/5 lg:text-center">
        <h2 class="text-xl text-gray-800 font-semibold font-heading">
            {user.displayName? user.displayName : 'Unknown'}
        </h2>
    </div>
    <ButtonLogOut onClick={signOut}> Sign out</ButtonLogOut>
    
    
</nav>
    )
}

export default Header