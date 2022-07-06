import React from 'react'
import { Navbar,Nav,Container ,NavDropdown} from "react-bootstrap";
import {NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className='insta'>Instagram</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link as={NavLink} to="/Home">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/Profile">Profile</Nav.Link>
            <Nav.Link as={NavLink} to="/Login">Login</Nav.Link>
              
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
      
    {/* <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand as={NavLink} to="/">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={NavLink} to="/Home">Home</Nav.Link>
      <Nav.Link  as={NavLink} to="/Profile">Profile</Nav.Link>
      <Nav.Link  as={NavLink} to="/Login">Login</Nav.Link>
    </Nav>
    </Container>
  </Navbar> */}
  
    </div>
  )
}
