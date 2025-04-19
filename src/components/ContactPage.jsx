import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const ContactPage = () => (
  <Container>
    <Row>
      <Col className='titre '>
        <h1>Contact</h1>
        <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
      </Col>
    </Row>
    <Row className='box-shadow'>
      <Col md={6}>
         <h2>Formulaire de contact</h2>     
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
      <Col md={6}>
        <h2>Mes coordonnées</h2>
        <p>John Doe</p>
        <p>40 rue Laure Diebold</p>
        <p>69009 Lyon, France</p>
        <p>Téléphone: +33 1 23 45 67 89</p>
        <p>Email: john.doe@example.com</p>
        <div id="google-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d336002.7733901046!2d1.7561335834858018!3d48.85779722061112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sfr!2sfr!4v1744835620673!5m2!1sfr!2sfr"
            title="Carte Google montrant l'emplacement du bureau"
            style={{ border: '0', width: '100%', height: '300px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Col>
    </Row>
  </Container>
);

export default ContactPage;