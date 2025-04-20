import React from 'react';
import { Container, Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/LegalPage.css';
import '../assets/css/style.css';
import '../assets/css/Footer.css';

const LegalPage = () => (
  <div className="content-wrapper">
    <div className="legalpage-wrapper">
      <div className="legalpage-container">
        <h1>Mentions Légales</h1>
      </div>
    </div>
    <Container>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Éditeur du site</Accordion.Header>
          <Accordion.Body>
            <strong>John Doe</strong>
            <p><i className="bi bi-map"></i> 40 rue Laure Diebold</p>
            <p><i className="bi bi-geo-alt"></i> 69009 Lyon, France</p>
            <p><i className="bi bi-phone"></i> 10 20 30 40 50</p>
            <p><i className="bi bi-envelope-at"></i> john.doe@gmail.com</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Hébergeur</Accordion.Header>
          <Accordion.Body>
            <h2>alwaysdata</h2>
            <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
            <p><i className="bi bi-globe"></i> <a href="https://www.alwaysdata.com/" target="_blank" rel="noopener noreferrer">www.alwaysdata.com</a></p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Crédits</Accordion.Header>
          <Accordion.Body>
            <h2>Crédits</h2>
            <p>Ce site a été réalisé par John Doe, étudiant au <a href="https://www.centre-europeen-formation.fr/" target="_blank" rel="noopener noreferrer">Centre Européen de formation.</a></p>
            <p>Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer">Pixabay</a></p>
            <p>La favicon de ce site a été fournie par <a href="https://www.flaticon.com" target="_blank" rel="noopener noreferrer">Flaticon</a></p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
    <footer className="footer">
      {/* Contenu footer ici */}
    </footer>
  </div>
);

export default LegalPage;
