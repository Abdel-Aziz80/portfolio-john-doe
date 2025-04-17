import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import freshFoodImage from '../assets/images/portfolio/fresh-food.jpg';
import restaurantJaponais from '../assets/images/portfolio/restaurant-japonais.jpg';
import espaceBienEtreImage from '../assets/images/portfolio/espace-bien-etre.jpg';
import seoImage from '../assets/images/portfolio/seo.jpg';
import CoderImage from '../assets/images/portfolio/coder.jpg';
import ScreensImage from '../assets/images/portfolio/screens.jpg';
import '../assets/css/Portfolio.css';

const PortfolioPage = () => (
  <Container>
    <Row>
      <Col>
        <h2 className="text-center mb-4">Portfolio</h2>
        <p className="text-center">Voici quelques-unes de mes réalisations</p>
      </Col>
    </Row>
    <Row>
      {/* Fresh Food Card */}
      <Col md={4} className="mb-4">
        <Card>
          <Card.Img variant="top" src={freshFoodImage} alt="Fresh Food" />
          <Card.Body>
            <Card.Title>Fresh Food</Card.Title>
            <Card.Text>Site de vente de produits frais en ligne</Card.Text>
            <Button variant="primary">Voir le site</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Site réalisé avec PHP et MySQL</small>
          </Card.Footer>
        </Card>
      </Col>

      {/* Restaurant Akira Card */}
      <Col md={4} className="mb-4">
        <Card>
          <Card.Img variant="top" src={restaurantJaponais} alt="Restaurant Akira" />
          <Card.Body>
            <Card.Title>Restaurant Akira</Card.Title>
            <Card.Text>Site de vente de produits frais en ligne</Card.Text>
            <Button variant="primary">Voir le site</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Site réalisé avec WordPress</small>
          </Card.Footer>
        </Card>
      </Col>

      {/* Espace Bien-être Card */}
      <Col md={4} className="mb-4">
        <Card>
          <Card.Img variant="top" src={espaceBienEtreImage} alt="Espace Bien-être" />
          <Card.Body>
            <Card.Title>Espace bien-être</Card.Title>
            <Card.Text>Site de vente de produits frais en ligne</Card.Text>
            <Button variant="primary">Voir le site</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Site réalisé avec LARAVEL</small>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
    <Row>
      {/* SEO Card */}
      <Col md={4} className="mb-4">
        <Card>
          <Card.Img variant="top" src={seoImage} alt="SEO" />
          <Card.Body>
            <Card.Title>SEO</Card.Title>
            <Card.Text>Amélioration du référencement d'un site e-commerce</Card.Text>
            <Button variant="primary">Voir le site</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Utilisation des outils SEO</small>
          </Card.Footer>
        </Card>
      </Col>

      {/* Création d'une API Card */}
      <Col md={4} className="mb-4">
        <Card>
          <Card.Img variant="top" src={CoderImage} alt="Création d'une API" />
          <Card.Body>
            <Card.Title>Création d'une API</Card.Title>
            <Card.Text>Création d'une API RESTFULL publique</Card.Text>
            <Button variant="primary">Voir le site</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">PHP - SYMFONY</small>
          </Card.Footer>
        </Card>
      </Col>

      {/* Maquette d'un site web Card */}
      <Col md={4} className="mb-4">
        <Card>
          <Card.Img variant="top" src={ScreensImage} alt="Maquette d'un site web" />
          <Card.Body>
            <Card.Title>Maquette d'un site web</Card.Title>
            <Card.Text>Création du prototype d'un site</Card.Text>
            <Button variant="primary">Voir le site</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Réalisé avec FIGMA</small>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default PortfolioPage;
