import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Products = () => {
  return (

    <CardGroup>
      <Card>
        <Card.Img variant="top" src="img/pexels-alina-vilchenko-4137785.jpeg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to additional
            content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This card has even longer content than the first to
            show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>

  
      // <div className="card-group mt-5 ">
      //   <div className="card ml-5 mr-5">
      //     <img className="card-img-top" src="..." alt="" />
      //     <div className="card-body">
      //       <h5 className="card-title">Card title</h5>
      //       <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      //     </div>
      //     <div className="card-footer">
      //       <small className="text-muted">Last updated 3 mins ago</small>
      //     </div>
      //   </div>
      //   <div className="card ml-5 mr-5 border-left">
      //     <img className="card-img-top" src="..." alt="" />
      //     <div className="card-body">
      //       <h5 className="card-title">Card title</h5>
      //       <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      //     </div>
      //     <div className="card-footer">
      //       <small className="text-muted">Last updated 3 mins ago</small>
      //     </div>
      //   </div>
      //   <div className="card ml-5 mr-5 border-left">
      //     <img className="card-img-top" src="..." alt="" />
      //     <div className="card-body">
      //       <h5 className="card-title">Card title</h5>
      //       <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      //     </div>
      //     <div className="card-footer">
      //       <small className="text-muted">Last updated 3 mins ago</small>
      //     </div>
      //   </div>
      // </div>

    
  )
}

export default Products;
