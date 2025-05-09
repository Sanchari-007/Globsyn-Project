import React, { useEffect, useState } from 'react';
import api from '../api';
import { Card, Container, Row, Col } from 'react-bootstrap';

function HotelList() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    api.get('/hotels')
      .then(res => setHotels(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Container>
      <h2 className="my-4">Hotels</h2>
      <Row>
        {hotels.map(hotel => (
          <Col md={4} key={hotel.id}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{hotel.name}</Card.Title>
                <Card.Text>{hotel.location}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HotelList;
// This code defines a React component that fetches and displays a list of hotels from an API.
// It uses the useEffect hook to fetch the data when the component mounts and stores it in the state using useState.