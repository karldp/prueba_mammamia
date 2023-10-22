import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { PizzasContext } from '../context/PizzasContext'

const ShoppingCart = () => {
  const { cart, incrementPizzaCount, decrementPizzaCount, getTotal } = useContext(PizzasContext)

  return (
    <div className='shopping-cart-container'>
      <h3>Shopping Cart:</h3>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className='cart-items-list'>
          {cart.map((pizza, index) => (
            <li className='shopping-cart-list' key={index}>
              <div className='shopping-cart-img'>
                <img className='pizza-thumbnail' src={pizza.img} />
                <span>{pizza.name}</span>
              </div>
              <div className='add-del-buttons'>
                <span>${(pizza.price * pizza.quantity).toLocaleString()}</span>
                <Button className='decrease-pizza' variant="danger" onClick={() => decrementPizzaCount(pizza.id)}>-</Button>
                <span>{pizza.quantity}</span>
                <Button className='increase-pizza' variant="primary" onClick={() => incrementPizzaCount(pizza.id)}>+</Button>
              </div>
            </li>
          ))}
          <div className='cart-total'>
            <span>Total: ${getTotal().toLocaleString()}</span>
          </div>
          <Button className='pay-button' variant="success" size="lg">Proceed to pay</Button>
        </ul>
      )}
    </div>
  )
}

export default ShoppingCart