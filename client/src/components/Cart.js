import React, { useState } from 'react'

const Cart = () => {
  const [products] = useState([
    {
       
    }
  ])
  return (
    <div>
      <h1>Products</h1>
        <div>
          <h3>Guitar</h3>
          <h4>$2.99 </h4>
          <button>Add to Cart</button>
        </div>
      
    </div>
  )
}

export default Cart
