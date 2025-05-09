import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container className="text-center">
        <p>Discover a mesmerizing nature landscape & stunning culture</p>
        <button className="btn btn-light mt-2">Learn More</button>
      </Container>
    </footer>
  );
}

export default Footer;
// This code defines a Footer component for a React application. The footer has a dark background with white text and contains a message about discovering nature and culture, along with a button to learn more. The component uses Bootstrap classes for styling and layout.
// The footer is wrapped in a Container for proper alignment and spacing. The button is styled with Bootstrap's button classes to make it visually appealing. This component can be imported and used in other parts of the application to provide a consistent footer across different pages.