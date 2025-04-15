import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import heroBg from '../assets/images/hero-bg.jpg';
import JohnDoeAbout from '../assets/images/john-doe-about.jpg';
import '../assets/css/HomePage.css';

const HomePage = ({ handleShowModal }) => (
  <div>
    {/* Hero Section */}
    <section className="hero">
      <img src={heroBg} alt="heroBg" className="hero-image" />
      <div className="hero-overlay">
        <h1>Bonjour, je suis John Doe</h1>
        <h2>Développeur web full stack</h2>
        <Button variant="danger" onClick={handleShowModal}>En savoir plus</Button>
      </div>
    </section>

    {/* Main Content */}
    <Container>
      <Row>
        <div className="title-container">
          <h2 className="section-title">À propos</h2>
          <h2 className="section-title">Mes compétences</h2>
        </div>
      </Row>
      <Row>
        {/* À propos Section */}
        <Col md={6} sm={12} className="mb-4">
          <img src={JohnDoeAbout} alt="johndoeAbout" className="img-fluid mb-3" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </Col>

        {/* Compétences Section */}
        <Col md={6}>
          <div className="progress mb-4">
            <div className="progress-bar bg-danger" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">HTML5 90%</div>
          </div>
          <div className="progress mb-4">
            <div className="progress-bar bg-info" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">CSS3 80%</div>
          </div>
          <div className="progress mb-4">
            <div className="progress-bar bg-warning" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">JAVASCRIPT 70%</div>
          </div>
          <div className="progress mb-4">
            <div className="progress-bar bg-success" role="progressbar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">PHP 60%</div>
          </div>
          <div className="progress mb-4">
            <div className="progress-bar bg-primary" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">REACT 50%</div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default HomePage;
