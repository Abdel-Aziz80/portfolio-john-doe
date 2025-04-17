import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import heroBg from '../assets/images/hero-bg.jpg';
import JohnDoeAbout from '../assets/images/john-doe-about.jpg';
import '../assets/css/HomePage.css';

// Composant fonctionnel HomePage qui reçoit une prop 'handleShowModal' pour gérer l'affichage de la modale
const HomePage = ({ handleShowModal }) => (
  <div>
    {/* Section Hero */}
    <section className="hero">
      {/* Image de fond de la section hero */}
      <img src={heroBg} alt="heroBg" className="hero-image" />
      {/* Contenu superposé sur l'image de fond */}
      <div className="hero-overlay">
        {/* Titre principal */}
        <h1>Bonjour, je suis John Doe</h1>
        {/* Sous-titre */}
        <h2>Développeur web full stack</h2>
        {/* Bouton pour ouvrir la modale */}
        <Button variant="danger" onClick={handleShowModal}>En savoir plus</Button>
      </div>
    </section>

    {/* Contenu principal */}
    <Container className='bloc'>
      <Row>
        {/* Conteneur de titres */}
        <div className="title-container">
          {/* Titre de la section "À propos" */}
          <h2 className="section-title">À propos</h2>
          {/* Titre de la section "Mes compétences" */}
          <h2 className="section-title">Mes compétences</h2>
        </div>
      </Row>
      <Row>
        {/* Section "À propos" */}
        <Col md={6} sm={12} className="mb-4">
          {/* Image de John Doe */}
          <img src={JohnDoeAbout} alt="johndoeAbout" className="img-fluid mb-3" />
          {/* Paragraphes de description */}
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

        {/* Section "Compétences" */}
        <Col md={6}>
          {/* Sous-titre pour HTML5 */}
          <p>HTML5 90%</p>
          {/* Barre de progression pour HTML5 */}
          <div className="progress mb-4">
            <div className="progress-bar bg-danger" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          {/* Sous-titre pour CSS3 */}
          <p>CSS3 80%</p>
          {/* Barre de progression pour CSS3 */}
          <div className="progress mb-4">
            <div className="progress-bar bg-info" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          {/* Sous-titre pour JAVASCRIPT */}
          <p>JAVASCRIPT 70%</p>
          {/* Barre de progression pour JAVASCRIPT */}
          <div className="progress mb-4">
            <div className="progress-bar bg-warning" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          {/* Sous-titre pour PHP */}
          <p>PHP 60%</p>
          {/* Barre de progression pour JavaScript */}
          <div className="progress mb-4">
            <div className="progress-bar bg-success" role="progressbar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          {/* Sous-titre pour REACT */}
          <p>REACT 50%</p>
          {/* Barre de progression pour REACT */}
          <div className="progress mb-4">
            <div className="progress-bar bg-primary" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

// Exportation du composant HomePage pour une utilisation dans d'autres fichiers
export default HomePage;
