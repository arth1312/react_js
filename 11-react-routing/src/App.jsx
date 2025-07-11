import { Route, Routes } from 'react-router'
import './App.css'
import ControlledComp from './Components/Controlled'
import Counter from './Components/Counter'
import Events from './Components/Event'
import Validation from './Components/FormError'
import Header from './Components/Header'
import UnControlledComp from './Components/UnControlled'

function App() {

  return (
    <>
    
      <Header />
      <Routes>
        <Route path="/" element={<ControlledComp />} />
        <Route path="/uncontrollcomp" element={<UnControlledComp />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/events" element={<Events />} />
        <Route path="/validation" element={<Validation />} />
        <Route path="/*" element={<h1>Page not found</h1>} />
      </Routes>

    </>
  )
}

export default App
