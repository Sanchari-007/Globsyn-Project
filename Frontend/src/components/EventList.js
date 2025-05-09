import React, { useEffect, useState } from 'react';
import api from '../api';
import { Card, Container, Row, Col } from 'react-bootstrap';

function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    api.get('/events')
      .then(res => setEvents(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Container>
      <h2 className="my-4">Events</h2>
      <Row>
        {events.map(event => (
          <Col md={4} key={event.id}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Text>{event.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default EventList;
// This code defines a React component that fetches and displays a list of events from an API.
// It uses the useEffect hook to fetch the data when the component mounts and stores it in the state using useState.