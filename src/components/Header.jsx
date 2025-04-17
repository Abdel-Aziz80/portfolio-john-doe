import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

// Composant fonctionnel Header pour la barre de navigation
const Header = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    {/* Logo ou nom de la marque affiché à gauche */}
    <Navbar.Brand href="/">John Doe</Navbar.Brand>

    {/* Bouton de toggle pour le menu de navigation sur les petits écrans */}
    <Navbar.Toggle aria-controls="basic-navbar-nav" />

    {/* Contenu du menu de navigation qui s'effondre sur les petits écrans */}
    <Navbar.Collapse id="basic-navbar-nav">
      {/* Liste des liens de navigation alignés à droite */}
      <Nav className="ml-auto">
        {/* Lien de navigation vers la page d'accueil */}
        <NavLink to="/" className="nav-link">Accueil</NavLink>
        {/* Lien de navigation vers la page des services */}
        <NavLink to="/services" className="nav-link">Services</NavLink>
        {/* Lien de navigation vers la page des réalisations */}
        <NavLink to="/realisations" className="nav-link">Réalisations</NavLink>
        {/* Lien de navigation vers la page de contact */}
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
        {/* Lien de navigation vers la page des mentions légales */}
        <NavLink to="/mentions-legales" className="nav-link">Mentions Légales</NavLink>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

// Exportation du composant Header pour une utilisation dans d'autres fichiers
export default Header;
