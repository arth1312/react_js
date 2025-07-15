import './App.css'
import Header from './Components/Header'
import { Route, Routes } from "react-router";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>about</h1>} />
        <Route path="/contact" element={<h1>contact</h1>} />
        <Route path="/service" element={<h1>service</h1>} />
      </Routes>
    </>
  )
}

export default App
