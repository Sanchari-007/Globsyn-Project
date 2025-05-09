import React, { useState, useEffect } from 'react';
import api from '../api';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

function EditTrip() {
  const [trip, setTrip] = useState({ destination: '', price: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/trips/${id}`)
      .then(res => setTrip(res.data))
      .catch(() => toast.error('Load failed'));
  }, [id]);

  const handleChange = e => {
    setTrip({ ...trip, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    api.put(`/trips/${id}`, trip)
      .then(() => {
        toast.success('Trip updated');
        navigate('/');
      })
      .catch(() => toast.error('Update failed'));
  };

  return (
    <div className="container mt-4">
      <h2>Edit Trip</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Destination</Form.Label>
          <Form.Control name="destination" value={trip.destination} onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control name="price" value={trip.price} onChange={handleChange} required />
        </Form.Group>
        <Button type="submit" className="mt-2">Update</Button>
      </Form>
    </div>
  );
}

export default EditTrip;
// This code defines a React component for editing an existing trip.
// It fetches the trip data from the API and allows the user to update it.