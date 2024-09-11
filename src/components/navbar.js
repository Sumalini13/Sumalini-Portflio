import React, { useState, useEffect } from 'react';
import './navbar.css'; // Optional: You can style the navbar using CSS or inline styles
import { FaHome, FaProjectDiagram, FaTrophy, FaEnvelope, FaTimes, FaBars } from 'react-icons/fa'; // Import icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) { // You can adjust the scroll position
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
        <h3>Sumalini Gopinathan</h3>
      </div>
      <div className={`menu-icon ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#home" onClick={toggleMenu} className='iconnn'><FaHome /></a></li>
        <li><a href="#projects" onClick={toggleMenu}className='iconnn'><FaProjectDiagram /></a></li>
        <li><a href="#achievements" onClick={toggleMenu}className='iconnn'><FaTrophy /></a></li>
        <li><a href="#contact" onClick={toggleMenu}className='iconnn'><FaEnvelope /></a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
