import React, { useEffect, useState } from 'react';
import api from '../api';
import { ListGroup, Container } from 'react-bootstrap';

function RecommendationList() {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    api.get('/recommendations')
      .then(res => setRecommendations(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Container>
      <h2 className="my-4">Recommendations</h2>
      <ListGroup>
        {recommendations.map(rec => (
          <ListGroup.Item key={rec.id}>{rec.text}</ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default RecommendationList;
// This code defines a React component that fetches and displays a list of recommendations from an API.
// It uses the useEffect hook to fetch the data when the component mounts and stores it in the state using useState.