import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CheckCircle } from 'react-bootstrap-icons';

const features = [
  { title: 'Safe Traveling', desc: 'Top safety standards.' },
  { title: 'Affordable Price', desc: 'Best deals guaranteed.' },
  { title: 'Comfort Accommodation', desc: 'Relaxing and cozy stays.' },
];

function Features() {
  return (
    <Container className="my-5">
      <Row>
        {features.map((f, idx) => (
          <Col key={idx} md={4} className="text-center">
            <CheckCircle size={40} className="mb-2 text-primary" />
            <h4>{f.title}</h4>
            <p>{f.desc}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Features;
