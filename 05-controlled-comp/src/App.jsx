import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ControlledComp from './Components/Controlled'
import UnControlledComp from './Components/UnControlled'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ControlledComp /> */}
      <UnControlledComp />
    </>
  )
}

export default App
