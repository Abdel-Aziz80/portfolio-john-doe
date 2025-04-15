import React from 'react';
import { Modal, Button } from 'react-bootstrap'; 

const GithubModal = ({ show, handleClose, data }) => (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Profil GitHub de John Doe</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {data ? (
        <div>
          <img src={data.avatar_url} alt="Avatar" className="github-avatar" style={{ borderRadius: '50%', width: '100px', height: '100px' }} />
          <p>John Doe {data.name}</p>
          <p>Login: {data.login}</p>
          <p>Bio: {data.bio}</p>
          <p>Localisation: {data.location}</p>
        </div>
      ) : (
        <p>Chargement...</p>
      )}
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>Fermer</Button>
    </Modal.Footer>
  </Modal>
);

export default GithubModal;
