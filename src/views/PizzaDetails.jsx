import React, { useContext, useEffect } from 'react'
import { Button, Card, Col, Image, Row } from 'react-bootstrap'
import { PizzasContext } from '../context/PizzasContext'
import { useNavigate, useParams } from 'react-router-dom'
import {LiaCartPlusSolid} from "react-icons/lia"


const PizzaDetails = () => {

  const { pizzas, addToCart } = useContext(PizzasContext)
  const { id } = useParams()
  const navigate = useNavigate()

  const pizza = pizzas.find(pizza => pizza.id === id)

  useEffect(() => {
    if (!pizza) {
      navigate("/notfound")
    }
  }, [pizza, navigate])
  if (!pizza) return null

  return (
    <>
      <section className='card-details'>
        <Card style={{ maxWidth: '1000px' }}>
          <Row className="no-gutters">
            <Col md={6}>
              <Image src={pizza.img} alt="Pizza de Salame" fluid />
            </Col>
            <Col md={6}>
              <Card.Body>
                <Card.Title>{pizza.name}</Card.Title>
                <Card.Text>
                {pizza.desc}
                </Card.Text>
                <ul>
                  {pizza.ingredients.map((ing, index) => (
                    <li className="list-unstyled" key={index}><span>🍕</span>{ing}</li>
                  ))}
                </ul>
                <Card.Text className="mt-2">
                  {pizza.price.toLocaleString()}
                </Card.Text>
                <Button onClick={() => addToCart(pizza)} variant="primary">Añadir <LiaCartPlusSolid className='cart-icon'/></Button>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </section>
    </>
  )
}

export default PizzaDetails