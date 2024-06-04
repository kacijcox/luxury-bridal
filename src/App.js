import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";
import ServicesPage from "./pages/ServicesPage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/Gallery" element={<GalleryPage />} />
          <Route path="/Services" element={<ServicesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
