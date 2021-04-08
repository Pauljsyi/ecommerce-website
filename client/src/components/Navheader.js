import React from 'react';
// imported using all
// import * as ReactBootStrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Cart from './Cart'
//imported using destructuring
import { Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {FaShoppingCart} from 'react-icons/fa'
import paradigmlogo from '../img/logo/paradigm-guitar-logo-white.png'


const Navheader = () => {
  return (
    <Navbar expand="lg"  
      className="nav">
    <Navbar.Brand 
      className="navlogo"
      href="#home" 
      style={{color:'white'}}><img src={paradigmlogo} alt="paradigm guitar logo" width='200' height='100'/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto justify-content-between mr-5">
        <Nav.Link 
          className="pr-5" 
          style={{color:'white'}}
          href="#home">Home</Nav.Link>
        <Nav.Link 
          className="pr-5" 
          style={{color:'white'}}
          href="#products">Shop Guitars</Nav.Link>
        <NavDropdown 
          title={<FaShoppingCart alt="Cart" size={20} />}
          id="basic-nav-dropdown"
        >
          {/* <Cart /> */}
          <NavDropdown.Item href="#action/3.1">My Cart</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Order Total</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      {/* <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form> */}
    </Navbar.Collapse>
  </Navbar>

  // NAVBAR imported using destructuring
  //   <div>
  //   <Navbar bg="dark" variant="dark">
  //     <Navbar.Brand href="#home">Navbar</Navbar.Brand>
  //     <Nav className="mr-auto">
  //       <Nav.Link className="home" href="#home">Home</Nav.Link>
  //       <Nav.Link href="#features">Features</Nav.Link>
  //       <Nav.Link href="#pricing">Pricing</Nav.Link>
  //     </Nav>
  //     <Form inline>
  //       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
  //       <Button variant="outline-info">Search</Button>
  //     </Form>
  //   </Navbar>
  // </div>

    //NAVBAR imported all
    // <div>
    //   <ReactBootStrap.Navbar bg="dark" variant="dark">
    //     <ReactBootStrap.Navbar.Brand href="#home">Navbar</ReactBootStrap.Navbar.Brand>
    //     <ReactBootStrap.Nav className="mr-auto">
    //       <ReactBootStrap.Nav.Link className="home" href="#home">Home</ReactBootStrap.Nav.Link>
    //       <ReactBootStrap.Nav.Link href="#features">Features</ReactBootStrap.Nav.Link>
    //       <ReactBootStrap.Nav.Link href="#pricing">Pricing</ReactBootStrap.Nav.Link>
    //     </ReactBootStrap.Nav>
    //     <ReactBootStrap.Form inline>
    //       <ReactBootStrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
    //       <ReactBootStrap.Button variant="outline-info">Search</ReactBootStrap.Button>
    //     </ReactBootStrap.Form>
    //   </ReactBootStrap.Navbar>
    // </div>
  )
}

export default Navheader
