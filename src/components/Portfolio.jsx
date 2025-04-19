import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import bannerImage from '../assets/images/banner.jpg';
import freshFoodImage from '../assets/images/portfolio/fresh-food.jpg';
import restaurantJaponais from '../assets/images/portfolio/restaurant-japonais.jpg';
import espaceBienEtreImage from '../assets/images/portfolio/espace-bien-etre.jpg';
import seoImage from '../assets/images/portfolio/seo.jpg';
import CoderImage from '../assets/images/portfolio/coder.jpg';
import ScreensImage from '../assets/images/portfolio/screens.jpg';
import '../assets/css/Portfolio.css';

const projects = [
  {
    title: "Fresh Food",
    image: freshFoodImage,
    description: "Site de vente de produits frais en ligne",
    tech: "PHP et MySQL",
    url: "https://freshfood.com"
  },
  {
    title: "Restaurant Akira",
    image: restaurantJaponais,
    description: "Site vitrine pour restaurant japonais",
    tech: "WordPress",
    url: "https://restaurantakira.com"
  },
  {
    title: "Espace bien-être",
    image: espaceBienEtreImage,
    description: "Plateforme bien-être avec réservation de soins",
    tech: "Laravel",
    url: "https://espacebienetre.com"
  },
  {
    title: "SEO",
    image: seoImage,
    description: "Amélioration du référencement d'un site e-commerce",
    tech: "Outils SEO",
    url: "https://seo.com"
  },
  {
    title: "Création d'une API",
    image: CoderImage,
    description: "Création d'une API RESTFUL publique",
    tech: "PHP - SYMFONY",
    url: "https://api.com"
  },
  {
    title: "Maquette d'un site web",
    image: ScreensImage,
    description: "Création du prototype d'un site",
    tech: "FIGMA",
    url: "https://maquette.com"
  },
];

const Portfolio = () => (
  <>
    {/* Image de bannière en pleine largeur */}
    <div className="banner-image">
      <img src={bannerImage} alt="Banner" className="img-fluid" />
    </div>

    <Container>
      <Row>
        <Col>
          <div className="header-wrapper">
            <div className="header-container">
              <h2 className="text-center mb-4">Portfolio</h2>
              <p className="text-center">Voici quelques-unes de mes réalisations</p>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        {projects.map((project, index) => (
          <Col md={4} className="mb-4" key={index}>
            <Card style={{ height: '100%' }} className="d-flex flex-column">
              <Card.Img variant="top" src={project.image} alt={project.title} />
              <Card.Body className="d-flex flex-column flex-grow-1 justify-content-center">
                <Card.Title className="text-center">{project.title}</Card.Title>
                <Card.Text className="text-center">{project.description}</Card.Text>
                <div className="d-flex justify-content-center mt-auto">
                  <Button variant="primary" href={project.url} target="_blank" rel="noopener noreferrer">
                    Voir le site
                  </Button>
                </div>
              </Card.Body>
              <Card.Footer className="text-center">
                <small className="text-muted">Site réalisé avec {project.tech}</small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </>
);

export default Portfolio;
