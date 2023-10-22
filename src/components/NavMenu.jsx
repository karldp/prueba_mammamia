import React, { useContext } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {LiaOpencart} from "react-icons/lia"
import { PizzasContext } from '../context/PizzasContext'


const NavMenu = () => {
  const { getTotal } = useContext(PizzasContext)

  return (
    <Navbar bg="dark" expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Nav className="me-auto">
          <Link className='home-icon text-decoration-none' to="/">🍕 Pizzeria</Link>
        </Nav>
        <Nav>
          <Link className='cart-icon-text text-decoration-none' to="/cart">
            <LiaOpencart className='cart-icon'/>
            Cart: <span className='cart-price'>${getTotal().toLocaleString()}</span> 
          </Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavMenu