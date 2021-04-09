import React, { useState } from 'react'

import tele from '../img/customguitar/products/tele.jpg';
import redwood from '../img/customguitar/products/redwood.jpg';
import goldtop from '../img/customguitar/products/goldtop.jpg';
import burl1 from '../img/customguitar/products/burl1.jpg';
import es335 from '../img/customguitar/products/es-335.jpg';
import cream from '../img/customguitar/products/cream.jpg';
import wornlespaul from '../img/customguitar/products/wornlespaul.jpg'

const Cart = () => {
  const [products] = useState([
    {
      name: 'Fender Telecaster w/ Bigsby',
      cost: '$1,500',
      image: tele
    },
    {
      name: 'Brazillian Redwood Custom',
      cost: '$3,000',
      image: redwood
    },
    {
      name: 'Vintage 1958 Les Paul Goldtop',
      cost: '$8,000',
      image: goldtop
    },
    {
      name: 'Burl Wood Custom',
      cost: '$1,500',
      image: burl1
    },
    {
      name: 'Gibson ES-335 style Custom ',
      cost: '$2,500',
      image: es335
    },
    {
      name: 'Vintage Custom Les Paul Sunburst',
      cost: '$3,000',
      image: wornlespaul
    },
    {
      name: 'Vintage Fender Stratocaster',
      cost: '$4,500',
      image: cream
    }
  ]);
  return (
    <div className="App" id="products">
      <h1 className="product-title">Shop Guitars</h1>
        <div className="products">      
          {products.map(product => (
            <div className="product">
              <img src={product.image} alt=""/>
              <h6 className="product-info">{product.name}</h6>
              <p className="product-info">
                {product.cost}
                <button className="product-button">Add to Cart</button>
              </p>
              
            </div>
          ))}
      </div>
    </div>
  )
}

export default Cart
