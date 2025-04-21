import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import heroBg from '../assets/images/hero-bg.jpg';
import JohnDoeAbout from '../assets/images/john-doe-about.jpg';
import '../assets/css/HomePage.css';

// Section À propos
const AboutSection = () => (
  <Col md={6} sm={12} className="mb-3">
    <h2 className="section-title">À propos</h2>
    <img src={JohnDoeAbout} alt="John Doe" className="img-fluid mb-3" />
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
);

// Section Compétences
const SkillsSection = () => {
  const skills = [
    { name: 'HTML5', level: 90, color: 'danger' },
    { name: 'CSS3', level: 80, color: 'info' },
    { name: 'JAVASCRIPT', level: 70, color: 'warning' },
    { name: 'PHP', level: 60, color: 'success' },
    { name: 'REACT', level: 50, color: 'primary' }
  ];

  return (
    <Col md={6}>
    <h2 className="section-title">Mes compétences</h2>
      {skills.map(({ name, level, color }) => (
        <div key={name} className="mb-4">
          <p>{name} {level}%</p>
          <div className="progress">
            <div className={`progress-bar bg-${color}`} role="progressbar" style={{ width: `${level}%` }} aria-valuenow={level} aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      ))}
    </Col>
  );
};

// Composant HomePage
const HomePage = ({ handleShowModal }) => (
  <div>
    {/* Section Hero */}
    <section className="hero">
      <img src={heroBg} alt="heroBg" className="hero-image" />
      <div className="hero-overlay">
        <h1>Bonjour, je suis John Doe</h1>
        <h2>Développeur web full stack</h2>
        <Button variant="danger" onClick={handleShowModal}>En savoir plus</Button>
      </div>
    </section>

    {/* Contenu principal */}
    <Container fluid className='bloc'>
      <Row>
        <Col>
          
        </Col>
        <Col md={6}>
         
        </Col>
      </Row>
      <Row>
        <AboutSection />
        <SkillsSection />
      </Row>
    </Container>
  </div>
);

export default HomePage;
