import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Sinscrire = () => {
  return (
    <main className="sinscrire">
      <div className="container">
        <h1>BiblioSmart</h1>
        <div className="card">
          <h2>S'inscrire</h2>
          <p className="subtitle">
            Découvrez Bibliosmart d'une meilleure façon
          </p>

          <form className="form">
            <div className="info">
              <label>Nom*</label>
              <input type="text" placeholder="Votre nom" required />
            </div>

            <div className="info">
              <label>Prénom*</label>
              <input type="text" placeholder="Votre prénom" required />
            </div>

            <div className="info">
              <label>Téléphone*</label>
              <input
                type="tel"
                placeholder="Votre numéro de téléphone"
                required
              />
            </div>

            <div className="info">
              <label>Email*</label>
              <input type="email" placeholder="Votre email" required />
            </div>

            <div className="info">
              <label>Mot De Passe*</label>
              <input
                type="password"
                placeholder="Créez un mot de passe"
                required
              />
            </div>

            <div className="checkbox">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">
                J'accepte les conditions d'utilisation et la politique de
                confidentialité.
              </label>
            </div>

            <button type="submit" className="button">
              Créer un compte
            </button>
          </form>

          <p className="Seconnecter">
            Vous avez déjà un compte?{" "}
            <Link to="/Seconnecter">Se connecter</Link>
          </p>
        </div>

        <footer className="footer">
          <p>©2025 Bibliosmart.</p>
          <div className="footer-links">
            <Link to="/Contact">Contact</Link>
            <Link to="/Apropos">A propos</Link>
            <Link to="/Service">Services</Link>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default Sinscrire;
