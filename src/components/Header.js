import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => (
  <nav>
    <div className="title">
      <h1>React Capstone</h1>
    </div>
    <div className="navLinks">
      <Link to="/homePage" className="links">Homepage</Link>
    </div>
  </nav>
);

export default Header;
