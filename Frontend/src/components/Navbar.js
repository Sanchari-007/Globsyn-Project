import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">TravelApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/events">Events</Nav.Link>
            <Nav.Link as={Link} to="/hotels">Hotels</Nav.Link>
            <Nav.Link as={Link} to="/notifications">Notifications</Nav.Link>
            <Nav.Link as={Link} to="/recommendations">Recommendations</Nav.Link>
            <Nav.Link as={Link} to="/users">Users</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
// This code defines a navigation bar component for a React application using React Bootstrap.
// The navigation bar includes links to the main trips page, an add trip page, and a logout function.