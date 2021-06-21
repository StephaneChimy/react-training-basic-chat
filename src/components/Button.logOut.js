import React from "react"

const ButtonLogOut = ({ onClick = null, children = null }) => {
  return <button className='py-3 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full/5 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg' onClick={onClick}>{children}</button>
}

export default ButtonLogOut
