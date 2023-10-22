import React, { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';


export const PizzasContext = createContext()

const PizzasProvider = ({children}) => {
  const [pizzas, setPizzas] = useState([])
  const [cart, setCart] = useState([])

  const getPizzas = async () => {
    try {
        const response = await fetch("/src/pizzas.json");

        if (!response.ok) {
            throw new Error("The data have not been found");
        }

        const data = await response.json();
        setPizzas(data);
    } catch (error) {
        console.error("Imposible to fetch pizzas:", error);
    }
};

  const addToCart = (pizzaToAdd) => {
    const currentPizza = cart.find(pizza => pizza.id === pizzaToAdd.id)
    if (currentPizza) {
      const newCart = cart.map(pizza =>
        pizza.id === pizzaToAdd.id
          ? { ...pizza, quantity: pizza.quantity + 1 }
          : pizza
      )
      setCart(newCart)
    } else {
      setCart([...cart, { ...pizzaToAdd, quantity: 1 }])
    }
    toast.success("🍕 A pizza was added to the cart", {
      position: "top-right",
      autoClose: 800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      })
  }

  const incrementPizzaCount = (pizzaId) => {
    const newCart = cart.map(pizza =>
      pizza.id === pizzaId
        ? { ...pizza, quantity: pizza.quantity + 1 }
        : pizza
    )
    setCart(newCart);
    toast("🍕 +1", {
      position: "top-right",
      autoClose: 80,
      hideProgressBar: true,
      })
  }

  const decrementPizzaCount = (pizzaId) => {
    const currentPizza = cart.find(pizza => pizza.id === pizzaId)
    if (currentPizza && currentPizza.quantity > 1) {
      const newCart = cart.map(pizza =>
        pizza.id === pizzaId
          ? { ...pizza, quantity: pizza.quantity - 1 }
          : pizza
      )
      setCart(newCart);
      toast("🍕 -1", {
        position: "top-right",
        autoClose: 80,
        hideProgressBar: true,
        })
    } else if (currentPizza && currentPizza.quantity === 1) {
      const newCart = cart.filter(pizza => pizza.id !== pizzaId)
      setCart(newCart)
    }
  }

  const getTotal = () => {
    return cart.reduce((total, pizza) => total + pizza.price * pizza.quantity, 0)
  }

  useEffect(() => {
    getPizzas();
  }, []);

  return (
      <PizzasContext.Provider
          value={{
            pizzas,
            setPizzas,
            cart,
            addToCart,
            incrementPizzaCount,
            decrementPizzaCount,
            getTotal,
          }}>
          {children}
      </PizzasContext.Provider>
  );
}

export default PizzasProvider
