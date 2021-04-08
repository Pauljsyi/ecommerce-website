import React from 'react';
import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
import CardDeck from 'react-bootstrap/CardDeck';

import tele from '../img/customguitar/tele.jpeg';
import redwood from '../img/customguitar/redwood.jpeg'
import goldtop from '../img/customguitar/goldtop.jpeg'

const Products = () => {
  return (
    <div className="deck">
<CardDeck>
  <Card>
    <Card.Img variant="top" src={tele} height="500" width="443"/>
    {/* <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
  </Card>
  <Card>
    <Card.Img variant="top" src={redwood} height="500" width="443"/>
    {/* <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
  </Card>
  <Card>
    <Card.Img variant="top" src={goldtop} 	height="500" width="443"/>
    {/* <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
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
