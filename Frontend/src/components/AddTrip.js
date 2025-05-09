import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import api from '../api';

function AddTrip() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('/trips', { name, description }).then(() => navigate('/trips'));
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
      <Card style={{ width: '500px' }} className="p-4">
        <h3 className="mb-3 text-center">Add New Trip</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control value={name} onChange={(e) => setName(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" value={description} onChange={(e) => setDescription(e.target.value)} required />
          </Form.Group>
          <Button type="submit" variant="primary" className="w-100">Submit</Button>
        </Form>
      </Card>
    </Container>
  );
}

export default AddTrip;
// This code defines a React component for adding a new trip.
// It includes a form with fields for name and description.