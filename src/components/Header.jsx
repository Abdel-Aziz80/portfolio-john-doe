import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="/">John Doe</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <NavLink to="/" className="nav-link">Accueil</NavLink>
        <NavLink to="/services" className="nav-link">Services</NavLink>
        <NavLink to="/realisations" className="nav-link">Réalisations</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
        <NavLink to="/mentions-legales" className="nav-link">Mentions Légales</NavLink>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
