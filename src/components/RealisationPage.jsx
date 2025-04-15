import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const RealisationPage = () => (
  <Container>
    <Row>
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col md={4} key={idx}>
          <Card>
            <Card.Img variant="top" src={`/path/to/image${idx + 1}.jpg`} />
            <Card.Body>
              <Card.Title>Projet {idx + 1}</Card.Title>
              <Card.Text>Description du projet {idx + 1}.</Card.Text>
              <Button variant="secondary">Voir plus</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default RealisationPage;
