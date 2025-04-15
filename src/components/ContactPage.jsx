import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactPage = () => (
  <Container>
    <Row>
      <Col>
        <h3>Contactez-moi</h3>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Nom</Form.Label>
            <Form.Control type="text" placeholder="Votre nom" required />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Votre email" required />
          </Form.Group>
          <Form.Group controlId="formPhone">
            <Form.Label>Téléphone</Form.Label>
            <Form.Control type="tel" placeholder="Votre téléphone" required />
          </Form.Group>
          <Form.Group controlId="formSubject">
            <Form.Label>Sujet</Form.Label>
            <Form.Control type="text" placeholder="Sujet" required />
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Votre message" required />
          </Form.Group>
          <Button type="submit" variant="primary">Envoyer</Button>
        </Form>
      </Col>
      <Col>
        <h4>Coordonnées</h4>
        <p>Adresse: 123 Rue de la Paix, 75000 Paris</p>
        <p>Téléphone: +33 1 23 45 67 89</p>
        <p>Email: john.doe@example.com</p>
        <div id="google-map">{/* Google Map integration */}</div>
      </Col>
    </Row>
  </Container>
);

export default ContactPage;
