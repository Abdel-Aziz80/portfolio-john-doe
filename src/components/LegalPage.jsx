import React from 'react';
import { Container, Accordion } from 'react-bootstrap';

const LegalPage = () => (
  <Container>
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Éditeur du site</Accordion.Header>
        <Accordion.Body>
        <p>John Doe</p>
        <p>40 rue Laure Diebold</p>
        <p>69009 Lyon, France</p>
        <p>10 20 30 40 50</p>
        <p>john.doe@gmail.com</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Hébergeur</Accordion.Header>
        <Accordion.Body>
        <p><strong>alwaysdata</strong></p>
        <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
        <p>🌐 <a href="https://www.alwaysdata.com/" target="_blank" rel="noopener noreferrer">www.alwaysdata.com</a></p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Crédits</Accordion.Header>
        <Accordion.Body>
          <p>Ce site a été réalisé par John Doe, étudiant au <a href="https://www.centre-europeen-formation.fr/" target="_blank" rel="noopener noreferrer">Centre Européen de formation.</a></p>
          <p>Les images utilées sur ce site sont libres de droits et ont été obtenues sur le site <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer">Pixabay</a></p>
          <p>La favicon de ce site a été fournie par <a href="https://www.flaticon.com" target="_blank" rel="noopener noreferrer">john doe Icons erstellt von FreepikFlaticon</a></p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </Container>
);

export default LegalPage;
