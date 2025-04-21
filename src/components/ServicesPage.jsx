import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import banner from '../assets/images/banner.jpg'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../assets/css/ServicesPage.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css';

const ServicesPage = () => (
  <div>
    {/* Section de Héros avec l'image de bannière */}
    <div
      className="banner"
      style={{ backgroundImage: `url(${banner})` }}
      role="img"
      aria-label="Bannière de services"
    >
      <div className="banner-overlay" />
    </div>

    {/* Section titre */}
    <section className="service-wrapper">
      <div className="service-container">
        <h1>Mon offre de services</h1>
        <p>Voici les prestations sur lesquelles je peux intervenir</p>
      </div>
    </section>

    {/* Cartes de services */}
    <Container>
      <Row className="services-row text-center">
        <Col md={4} className="service-card mb-4">
          <i className="bi bi-brush ux-icon"></i>
          <h3>UX Design</h3>
          <p>
            L&apos;UX Design est une discipline qui consiste à concevoir des produits (sites web,
            applications, logiciels...) en plaçant l&apos;utilisateur au centre.
          </p>
        </Col>
        <Col md={4} className="service-card mb-4">
          <i className="bi bi-code-slash"></i>
          <h3>Développement web</h3>
          <p>
            Le développement web consiste à créer des sites en utilisant des langages comme HTML,
            CSS, JavaScript, et des frameworks comme React ou Bootstrap.
          </p>
        </Col>
        <Col md={4} className="service-card mb-4">
          <i className="bi bi-search"></i>
          <h3>Référencement</h3>
          <p>
            Le SEO consiste à optimiser un site pour qu&apos;il apparaisse dans les premiers résultats
            des moteurs de recherche, attirant plus de visiteurs qualifiés.
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default ServicesPage;
