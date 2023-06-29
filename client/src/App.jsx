import React from 'react'
import Canvas from "./canvas/index"
import Customizer from "./pages/Customizer"
import Home from "./pages/Home"
import { DarkModeButton } from './components'


const App = () => {
  return (
    <main className='app transition-all ease-in'>
    <DarkModeButton />
      <Home />
      <Canvas />
      <Customizer />

    </main>
  )
}

export default App