import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
const Seconnecter = () => {
  return (
    <div className="Container">
      <h1>BiblioSmart</h1>
      <div className="card">
        <h2>Se connecter</h2>
        <p className="descp">Découvrez BiblioSmart d'une meilleure façon</p>
        <form className="form">
          <div className="info">
            <label>Email*</label>
            <input type="email" placeholder="Votre email" required />
          </div>
          <div className="info">
            <label>Mot De Passe*</label>
            <input type="password" placeholder="Votre mot de passe" required />
            <div className="forgot">
              <Link to="/forgot-password">Mot de passe oublié?</Link>
            </div>
          </div>
          <button type="submit" className="button-1">
            Se connecter
          </button>
        </form>
        <div className="compte">
          <p className="sinscrire">
            Vous n'avez pas un compte?
            <Link to="/sinscrire">Créer un compte</Link>
          </p>
        </div>
        <footer className="footer">
          <p>©2025 Bibliosmart.</p>
          <div className="links">
            <Link to="/contact">Contact</Link>
            <Link to="/Apropos">A propos</Link>
            <Link to="/Service">Services</Link>
          </div>
        </footer>
      </div>
    </div>
  );
};
export default Seconnecter;
