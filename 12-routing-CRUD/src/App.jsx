import './App.css'
import AddProduct from './Components/AddProduct';
import Header from './Components/Header'
import { Route, Routes } from "react-router";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/addproduct" element={<AddProduct />} />
      </Routes>
    </>
  )
}

export default App
