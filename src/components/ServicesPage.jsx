import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ServicesPage = () => (
  <Container>
    <Row>
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>Développement Web</Card.Title>
            <Card.Text>Création de sites web modernes et responsives.</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>Optimisation SEO</Card.Title>
            <Card.Text>Amélioration du référencement naturel de votre site.</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>Consulting</Card.Title>
            <Card.Text>Conseils personnalisés pour vos projets web.</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default ServicesPage;
