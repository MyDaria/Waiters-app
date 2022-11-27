import React from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar className="mb-3 shadow-sm rounded" bg="primary" variant="dark" >
      <Container>
        <Navbar.Brand href="/">Waiter.App</Navbar.Brand>
          <Nav>
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;