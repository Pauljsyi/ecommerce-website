import React from 'react';
import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';

import tele from '../img/customguitar/products/tele.jpg';
import redwood from '../img/customguitar/products/redwood.jpg';
import goldtop from '../img/customguitar/products/goldtop.jpg';
import burl1 from '../img/customguitar/products/burl1.jpg';
import es335 from '../img/customguitar/products/es-335.jpg';
import cream from '../img/customguitar/products/cream.jpg';
import wornlespaul from '../img/customguitar/products/wornlespaul.jpg'


const Products = () => {
  return (
    <div className="deck" id="products">
    <h1 className="products-header">Shop Guitars</h1>
  <CardDeck>
    <Card className="border-0 bg-transparent">
      <Card.Img className="card-image" variant="top" src={tele} height="500" />
        <Card.Body className="cardbody">
          <Card.Title className="cardtitle">Fender Telecaster w/ Bigsby</Card.Title>
          <Card.Text className="cardtext">
            $1,500
            <Button 
            className="add-to-cart" 
            variant="outline-dark" 
            size="sm" 
            style={{
              color: 'white',
              float: 'right'
              }}>
              Add to Cart
          </Button>
          </Card.Text>
        </Card.Body>
    </Card>
    <Card className="border-0 bg-transparent">
      <Card.Img className="card-image" variant="top" src={redwood} height="500" />
      <Card.Body className="cardbody">
        <Card.Title className="cardtitle">Brazillian Redwood Custom Acoustic</Card.Title>
        <Card.Text className="cardtext">
          $3,000
          <Button 
            className="add-to-cart" 
            variant="outline-dark" 
            size="sm" 
            style={{
              color: 'white',
              float: 'right'
              }}>
              Add to Cart
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className="border-0 bg-transparent">
      <Card.Img className="card-image" variant="top" src={goldtop} 	height="500" />
      <Card.Body className="cardbody">
        <Card.Title className="cardtitle">Vintage 1958 Les Paul Goldtop</Card.Title>
        <Card.Text className="cardtext">
          $8,000
          <Button 
            className="add-to-cart" 
            variant="outline-dark" 
            size="sm" 
            style={{
              color: 'white',
              float: 'right'
              }}>
              Add to Cart
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  </CardDeck>
  <br />
  <CardDeck>
    <Card className="border-0 bg-transparent">
      <Card.Img className="card-image" variant="top" src={burl1} height="500" />
        <Card.Body className="cardbody">
          <Card.Title className="cardtitle">Custom Burl Wood Acoustic Guitar</Card.Title>
          <Card.Text className="cardtext">
            $1,500
            <Button 
            className="add-to-cart" 
            variant="outline-dark" 
            size="sm" 
            style={{
              color: 'white',
              float: 'right'
              }}>
              Add to Cart
          </Button>
          </Card.Text>
        </Card.Body>
    </Card>
    <Card className="border-0 bg-transparent">
      <Card.Img className="card-image" variant="top" src={es335} height="500" />
      <Card.Body className="cardbody">
        <Card.Title className="cardtitle">Gibson ES-335 style Custom Electric Guitar</Card.Title>
        <Card.Text className="cardtext">
          $3,000
          <Button 
            className="add-to-cart" 
            variant="outline-dark" 
            size="sm" 
            style={{
              color: 'white',
              float: 'right'
              }}>
              Add to Cart
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className="border-0  bg-transparent">
      <Card.Img className="card-image" variant="top" src={cream} 	height="500" />
      <Card.Body className="cardbody">
        <Card.Title className="cardtitle">Vintage Fender American Standard Stratocaster</Card.Title>
        <Card.Text className="cardtext">
          $8,000
          <Button 
            className="add-to-cart" 
            variant="outline-dark" 
            size="sm" 
            style={{
              color: 'white',
              float: 'right'
              }}>
              Add to Cart
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  </CardDeck>
  <br />
  <CardDeck>
    <Card className="border-0 bg-transparent">
      <Card.Img className="card-image" variant="top" src={wornlespaul} height="500" />
        <Card.Body className="cardbody">
          <Card.Title className="cardtitle">Vintage Custom Les Paul Sunburst </Card.Title>
          <Card.Text className="cardtext">
            $2,500
            <Button 
            className="add-to-cart" 
            variant="outline-dark" 
            size="sm" 
            style={{
              color: 'white',
              float: 'right'
              }}>
              Add to Cart
          </Button>
          </Card.Text>
        </Card.Body>
    </Card>

    {/* additional cards */}
    <Card className="border-0 bg-transparent">
      {/* <Card.Img variant="top" src={es335} height="500" /> */}
      <Card.Body className="cardbody">
        <Card.Title className="cardtitle">
          {/* Title */}
        </Card.Title>
        <Card.Text className="cardtext">
          {/* Price */}
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className="border-0  bg-transparent">
      {/* <Card.Img variant="top" src={cream} 	height="500" /> */}
      <Card.Body className="cardbody">
        <Card.Title className="cardtitle">
          {/* Title */}
        </Card.Title>
        <Card.Text className="cardtext">
          {/* Price */}
        </Card.Text>
      </Card.Body>
    </Card>
  </CardDeck>

  
</div>




// Card Group
    // <CardGroup className="p-5">
    //   <Card>
    //     <Card.Img variant="top" src={tele} height='421px' />
    //     {/* <Card.Body>
    //       <Card.Title>Card title</Card.Title>
    //       <Card.Text>
    //         This is a wider card with supporting text below as a natural lead-in to
    //         additional content. This content is a little bit longer.
    //       </Card.Text>
    //     </Card.Body>
    //     <Card.Footer>
    //       <small className="text-muted">Last updated 3 mins ago</small>
    //     </Card.Footer> */}
    //   </Card>
    //   <Card>
    //     <Card.Img variant="top" src={redwood} height='421px' border="none"/>
    //     {/* <Card.Body>
    //       <Card.Title>Card title</Card.Title>
    //       <Card.Text>
    //         This card has supporting text below as a natural lead-in to additional
    //         content.{' '}
    //       </Card.Text>
    //     </Card.Body>
    //     <Card.Footer>
    //       <small className="text-muted">Last updated 3 mins ago</small>
    //     </Card.Footer> */}
    //   </Card>
    //   <Card>
    //     <Card.Img variant="top" src={goldtop} height='421px' />
    //    {/* <Card.Body>
    //       <Card.Title>Card title</Card.Title>
    //       <Card.Text>
    //         This is a wider card with supporting text below as a natural lead-in to
    //         additional content. This card has even longer content than the first to
    //         show that equal height action.
    //       </Card.Text>
    //     </Card.Body>
    //     <Card.Footer>
    //       <small className="text-muted">Last updated 3 mins ago</small>
    //     </Card.Footer>  */}
    //   </Card>
    // </CardGroup>
  )
}

export default Products;
