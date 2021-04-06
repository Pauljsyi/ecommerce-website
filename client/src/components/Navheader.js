import React from 'react';
// imported using all
// import * as ReactBootStrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//imported using destructuring
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'


const Navheader = () => {
  return (
    <Navbar bg="light" expand="lg" className="justify-content-between">
    <Navbar.Brand href="#home">We Sell Things</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto justify-content-between mr-5">
        <Nav.Link className="pr-5" href="#home">Home</Nav.Link>
        <Nav.Link className="pr-5" href="#link">Link</Nav.Link>
        <NavDropdown className="pr-5" title="Cart?" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
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
