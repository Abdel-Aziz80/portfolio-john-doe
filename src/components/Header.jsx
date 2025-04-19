import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../assets/css/Header.css';

// Composant fonctionnel Header pour la barre de navigation
const Header = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    {/* Logo ou nom de la marque affiché à gauche */}
    <Navbar.Brand href="/">John Doe</Navbar.Brand>

    {/* Bouton de toggle pour le menu de navigation sur les petits écrans */}
    <Navbar.Toggle aria-controls="basic-navbar-nav" />

    {/* Contenu du menu de navigation qui s'effondre sur les petits écrans */}
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Accueil</NavLink>
        <NavLink to="/services" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Services</NavLink>
        <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Portfolio</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink>
        <NavLink to="/mentions-legales" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Mentions Légales</NavLink>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
