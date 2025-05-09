import React, { useEffect, useState } from 'react';
import api from '../api';
import { Table, Container } from 'react-bootstrap';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get('/users')
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Container>
      <h2 className="my-4">Users</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default UserList;

// This code defines the main application component for a React application.
// It sets up routing using React Router and includes a navigation bar and various pages for events, hotels, notifications, recommendations, and users.