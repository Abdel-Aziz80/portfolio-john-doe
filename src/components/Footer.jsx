import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import '../assets/css/Footer.css';



// Composant fonctionnel Footer pour afficher le pied de page
const Footer = () => (
  <footer className="footer-wrapper" style={{ maxHeight: '200px', overflow: 'hidden' }}>
    <Container>
      <Row>
        {/* Colonne 1 : Informations de contact et réseaux sociaux */}
        <Col md={4}>
          {/* Nom du développeur */}
          <h5>John Doe</h5>
          {/* Adresse */}
          <p className="mb-1">40 rue Laure Diebold</p>
          <p className="mb-1">69009 Lyon, France</p>
          {/* Numéro de téléphone */}
          <p className="mb-1">Téléphone: +33 1 23 45 67 89</p>
          {/* Email */}
          <p className="mb-1">Email: john.doe@example.com</p>
          {/* Icônes des réseaux sociaux */}
          <div className="d-flex">
            {/* Lien vers GitHub */}
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white me-3" style={{ fontSize: '24px' }}>
              <FaGithub />
            </a>
            {/* Lien vers Twitter */}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white me-3" style={{ fontSize: '24px' }}>
              <FaTwitter />
            </a>
            {/* Lien vers LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white" style={{ fontSize: '24px' }}>
              <FaLinkedin />
            </a>
          </div>
        </Col>

        {/* Colonne 2 : Liens utiles */}
        <Col md={4}>
          {/* Titre de la section */}
          <h5>Liens utiles</h5>
          {/* Liste des liens utiles */}
          <ul className="list-unstyled">
            <li><a href="/" className="text-white">Accueil</a></li>
            <li><a href="/services" className="text-white">Services</a></li>
            <li><a href="/realisations" className="text-white">Réalisations</a></li>
            <li><a href="/contact" className="text-white">Contact</a></li>
            <li><a href="/mentions-legales" className="text-white">Mentions Légales</a></li>
          </ul>
        </Col>

        {/* Colonne 3 : Dernières réalisations */}
        <Col md={4}>
          {/* Titre de la section */}
          <h5>Mes dernières réalisations</h5>
          {/* Liste des dernières réalisations */}
          <ul className="list-unstyled">
            <li>Fresh Food</li>
            <li>Restaurant Akira</li>
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

// Exportation du composant Footer pour une utilisation dans d'autres fichiers
export default Footer;
