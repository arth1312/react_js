import { useState } from 'react';
import './App.css'
import Staticlist from './Components/Staticlist'
import Dynamiclist from './Components/Dynamiclist'

function App() {
    const[list, setList] = useState(['Home', 'About', 'Contact', 'Services', 'Blog']);

  return (
    <>
      <div>
        <Staticlist list={list}/>
        <Dynamiclist list={list}/>
      </div>
    </>
  )
}

export default App
