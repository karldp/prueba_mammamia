import React, { useContext } from 'react'
import { Button, Card, CardText } from 'react-bootstrap'
import { PizzasContext } from '../context/PizzasContext'
import {useNavigate} from 'react-router-dom'
import {LiaCartPlusSolid} from "react-icons/lia"

const PizzaCard = () => {
  const { pizzas, addToCart } = useContext(PizzasContext)

  const navigate = useNavigate()

  return (
    <div className='cards-container'>
      {pizzas.map((pizza, key) => (
        <section key={key}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pizza.img} />
            <Card.Body>
              <Card.Title>{pizza.name}</Card.Title>
              <ul>
                {pizza.ingredients.map((ing, index) => (
                  <li className="list-unstyled" key={index}><span>🍕</span>{ing}</li>
                ))}
              </ul>
              <CardText>${pizza.price.toLocaleString()}</CardText>
              <Button className='card-button1' onClick={() => navigate(`/pizza/${pizza.id}`)}variant="primary">More</Button>
              <Button className='card-button2' onClick={() => addToCart(pizza)}variant="primary">Add<LiaCartPlusSolid className='cart-icon-butt'/></Button>
            </Card.Body>
          </Card>
        </section>
      ))}
    </div>
  )
}

export default PizzaCard