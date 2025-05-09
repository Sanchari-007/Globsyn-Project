import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AppNavbar() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">TravelBuddy</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/trips">Trips</Nav.Link>
            <Nav.Link as={Link} to="/add-trip">Add Trip</Nav.Link>
          </Nav>
          <Nav>
            <Button as={Link} to="/login" variant="outline-primary">Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;

// This code defines a navigation bar component for a React application using React Bootstrap.
// The navigation bar includes links to the main trips page, an add trip page, and a logout function.