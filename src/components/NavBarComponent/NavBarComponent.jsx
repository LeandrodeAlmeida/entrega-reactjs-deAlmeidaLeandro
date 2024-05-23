import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';

export const NavBarComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">Su Camiseta</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Outlet</Nav.Link>
          <NavDropdown title="Ligas" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Premier League</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Bundesliga
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Serie A</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Kids
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <CartWidgetComponent />
    </Container>
  </Navbar>
  )
}

export default NavBarComponent