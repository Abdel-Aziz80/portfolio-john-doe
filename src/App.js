// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './components/HomePage.jsx';
import ServicesPage from './components/ServicesPage.jsx';
import RealisationPage from './components/RealisationPage.jsx';
import ContactPage from './components/ContactPage.jsx';
import LegalPage from './components/LegalPage.jsx';
import GithubModal from './components/GithubModal.jsx';

const App = () => {
  const [githubData, setGithubData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch('https://api.github.com/users/github-johndoe')
      .then(response => response.json())
      .then(data => setGithubData(data))
      .catch(error => console.error('Error fetching GitHub data:', error));
  }, []);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage handleShowModal={handleShowModal} />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/realisations" element={<RealisationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/mentions-legales" element={<LegalPage />} />
          </Routes>
        </main>
        <Footer />
        <GithubModal show={showModal} handleClose={handleCloseModal} data={githubData} />
      </div>
    </Router>
  );
};

export default App;
