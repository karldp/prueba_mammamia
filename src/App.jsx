import React from 'react'
import NavMenu from './components/NavMenu'
import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import PizzaDetails from './views/PizzaDetails'
import ShoppingCart from './views/ShoppingCart'
import NotFound from './views/NotFound'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <>
      <div>
        <NavMenu />  

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza/:id" element={<PizzaDetails />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* tal vez poner un footer */}
      </div>
    </>
  )
}

export default App