import React from 'react'
import {BsMoonFill, BsSunFill} from 'react-icons/bs'
import state from '../store'
import { useSnapshot } from 'valtio'
const DarkModeButton = () => {

  const snap = useSnapshot(state)

  const handleClick = () => {

    console.log("Snap ->", snap.isDarkMode)

    if(snap.isDarkMode) {
      state.isDarkMode = false;
    } else {
      state.isDarkMode = true;
    }
  }

  return (
    <div className={`transition-all absolute right-36 top-[20px] ease-in-out cursor-pointer  w-10 h-10 z-50 ${snap.isDarkMode ? 'text-white' : 'text-black'} rounded-full ${snap.isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-400"}  flex items-center justify-center`}>
    {
      snap.isDarkMode ? 
      <BsSunFill onClick={handleClick} size={26} /> :
      <BsMoonFill onClick={handleClick} size={26} />
      
    }
    </div>
  )
}

export default DarkModeButton