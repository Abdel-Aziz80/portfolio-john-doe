import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-dark text-white py-4">
    <Container>
      <Row>
        <Col md={4}>
          <h5>John Doe</h5>
          <p className="mb-1">40 rue Laure Diebold</p>
          <p className="mb-1">69009 Lyon, France</p>
          <p className="mb-1">Téléphone: +33 1 23 45 67 89</p>
          <p className="mb-1">Email: john.doe@example.com</p>
          <div className="d-flex">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white me-3" style={{ fontSize: '24px' }}>
              <FaGithub />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white me-3" style={{ fontSize: '24px' }}>
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white" style={{ fontSize: '24px' }}>
              <FaLinkedin />
            </a>
          </div>
        </Col>
        <Col md={4}>
          <h5>Liens utiles</h5>
          <ul className="list-unstyled">
            <li><a href="/" className="text-white">Accueil</a></li>
            <li><a href="/services" className="text-white">Services</a></li>
            <li><a href="/realisations" className="text-white">Réalisations</a></li>
            <li><a href="/contact" className="text-white">Contact</a></li>
            <li><a href="/mentions-legales" className="text-white">Mentions Légales</a></li>
          </ul>
        </Col>
        <Col md={4}>
          <h5>Dernières Réalisations</h5>
          <h5>Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li>Fresh Food</li>
              <li>Restaurant Akra</li>
              <li>Espace bien-être</li>
              <li>SEO</li>
              <li>Création d'une API</li>
              <li>Maquetage d'un site</li>
            </ul>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
