import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import doraemonImage from '../assets/images/Doraemon.png'; 
import '../assets/css/GithubModal.css';

const GithubModal = ({ show, handleClose, data }) => {
  return (
    <Modal show={show} onHide={handleClose} centered className="custom-modal">
      <Modal.Header closeButton>
        <Modal.Title>Mon profil GitHub</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="profile-container">
          <div className="profile-image-container">
            <img src={doraemonImage} alt="Doraemon" className="profile-image" />
          </div>
          <div className="profile-details-container">
            <h3 onClick={() => window.open(data?.html_url, '_blank')} className="clickable">
            <i class="bi bi-person"></i> {data?.name || "John Doe"}
            </h3>
            <div className="profile-section">
              <span className="bi bi-geo-alt"></span>
              <span>{data?.bio}</span>
            </div>
            <div className="profile-section">
              <span className="bi bi-card-heading"></span>
               <span>As we all know, John Doe's identity is unknown. I just wanted to contribute without being known.</span>
            </div>
            <div className="profile-section">
              <span className="bi bi-box"></span>
               <span> Repositories : 1</span>
            </div>
            <div className="profile-section">
              <span className="bi bi-people"></span>
              <span>Followers: 16</span>
            </div>
            <div className="profile-section">
              <span className="bi bi-people" ></span>
              <span>Following: {data?.following}</span>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GithubModal;
