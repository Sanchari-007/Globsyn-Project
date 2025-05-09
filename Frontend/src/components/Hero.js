import React from 'react';
import { Button, Container } from 'react-bootstrap';

function Hero() {
  return (
    <div className="hero-section text-white text-center" style={{
      backgroundImage: 'url(https://wallpapercave.com/wp/wp12485574.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '90vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <Container>
        <h1>Explore The Majestic Asia Landscape Now</h1>
        <Button variant="light" size="lg" className="mt-3">Get Started →</Button>
      </Container>
    </div>
  );
}

export default Hero;
