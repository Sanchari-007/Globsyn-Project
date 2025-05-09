import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const destinations = [
  { name: 'Kelingking Beach', location: 'Nusa Penida, Bali', img: 'https://cdn.audleytravel.com/2478/1770/79/16027396-pura-ulun-danu-bratan-bali.jpg' },
  { name: 'Grand Palace', location: 'Bangkok, Thailand', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSK5k2u8EnTIa7FtVAt_z7j7SZKaBpoaF3Fg&s' },
  { name: 'Cappadocia', location: 'Turkey', img: 'https://www.bhfieldschool.org/uploaded/gallery/10-1981.jpg' },
  { name: 'Padar Island', location: 'East Nusa Tenggara', img: 'https://www.komodoluxury.com/wp-content/uploads/2024/12/Padar-Island-Milky-Way-Komodo-Luxury.webp' },
];

function Destinations() {
  return (
    <Container className="my-5">
      <Row>
        {destinations.map((dest, idx) => (
          <Col key={idx} md={3} className="mb-4">
            <Card>
              <Card.Img variant="top" src={dest.img} />
              <Card.Body>
                <Card.Title>{dest.name}</Card.Title>
                <Card.Text>{dest.location}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Destinations;
