import React from 'react'

const NotFound = () => {
  return (
    <section className='not-found'>
      <div>404! The route you're looking for has taken you to a terrible fate :(</div>
      <img
        height="500"
        src="/pizzeria_404.png"
        alt="pizzeria void" />
    </section>
  )
}

export default NotFound