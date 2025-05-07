import React from 'react';
import './index.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import '@fontsource/metropolis';
import "@fontsource/metropolis/700.css"; // Weight 700.
import "@fontsource/metropolis/600.css"; // Weight 600.
import "@fontsource/metropolis/400.css"; // Weight 400.
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Technologies from './pages/TechStack';
import Projects from './pages/Projects';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/services" element={<Services />} /> 
        <Route path="/industries" element={<Industries />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;