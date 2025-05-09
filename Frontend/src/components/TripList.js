import React, { useEffect, useState } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import api from '../api'; // Your backend API

function TripList() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    api.get('/trips').then(response => setTrips(response.data));
  }, []);

  return (
    <Container className="my-5">
      <h2 className="mb-4">Available Trips</h2>
      <Row>
        {trips.map(trip => (
          <Col md={4} key={trip.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={trip.image || 'https://via.placeholder.com/300x200'} />
              <Card.Body>
                <Card.Title>{trip.name}</Card.Title>
                <Card.Text>{trip.description}</Card.Text>
                <Button as={Link} to={`/edit-trip/${trip.id}`} variant="outline-primary" className="me-2">Edit</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default TripList;

// This code defines a React component that fetches and displays a list of trips from an API.