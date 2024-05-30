import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import GallaryPage from './pages/GallaryPage';
import ServicesPage from './pages/ServicesPage';

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Contact" element={<ContactPage />} />
          <Route exact path="/Gallary" element={<GallaryPage />} />
          <Route exact path="/Services" element={<ServicesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
