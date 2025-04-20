import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import banner from '../assets/images/banner.jpg'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../assets/css/ServicesPage.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css';

const ServicesPage = () => (
  <div>
    {/* Section de Héros avec l'image de bannière */}
    <div className="banner" style={{ backgroundImage: `url(${banner})` }}>
      <div className="banner-overlay">
        {/* Disponible pour faire des ajouts de contenu si nécessaire */}
      </div>
    </div>

     {/* Conteneur pour le titre et le paragraphe avec un border-bottom */}
     <div className="service-wrapper">
      <div className="service-container">
        <h1>Mon offre de services</h1>
        <p>Voici les prestations sur lesquelles je peux intervenir</p>
      </div>
    </div>

    {/* Section de Services */}
    <Container>
      <Row className="services-row text-center">
        <Col md={4} className="service-card">
        <i className="bi bi-brush ux-icon"></i> {/* Icône pour UX Design */}
          <h3>UX Design</h3>
          <p>L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.</p>
        </Col>
        <Col md={4} className="service-card">
        <i className="bi bi-code-slash"></i>
          <h3>Développement web</h3>
          <p>Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).</p>
        </Col>
        <Col md={4} className="service-card">
        <i className="bi bi-search"></i>
          <h3>Référencement</h3>
          <p>Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.</p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default ServicesPage;