import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <main className="header">
      <h1>BiblioSmart</h1>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/apropos">À propos</Link></li>
          <li><Link to="/service">Service</Link></li>
          <li><Link to="/equipe">Équipe</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </main>
  );
};

export default Header;
