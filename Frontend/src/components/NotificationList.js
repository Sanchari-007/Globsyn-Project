import React, { useEffect, useState } from 'react';
import api from '../api';
import { ListGroup, Container } from 'react-bootstrap';

function NotificationList() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    api.get('/notifications')
      .then(res => setNotifications(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Container>
      <h2 className="my-4">Notifications</h2>
      <ListGroup>
        {notifications.map(notif => (
          <ListGroup.Item key={notif.id}>{notif.message}</ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default NotificationList;
// This code defines a React component that fetches and displays a list of notifications from an API.
// It uses the useEffect hook to fetch the data when the component mounts and stores it in the state using useState.