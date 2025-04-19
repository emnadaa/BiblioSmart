import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Livres = () => {
  const navigate = useNavigate();

  return (
    <div className="books-page">
      <h1>BiblioSmart</h1>

      <nav className="main-nav">
        <button onClick={() => navigate("/dashboard")}>Accueil</button>
        <button onClick={() => navigate("/reserve-place")}>
          Réserver une place
        </button>
        <button onClick={() => navigate("/books")}>Livres</button>
        <button onClick={() => navigate("/events")}>Evénements</button>
      </nav>

      <div className="books-content">
        <h2>
          S'il vous plaît, choisissez un livre et entrez les données suivantes!
        </h2>

        <div className="form-group">
          <label>Identifiant</label>
          <input type="text" />
        </div>

        <div className="form-group">
          <label>Date de réservation souhaitée:</label>
          <div className="date-inputs">
            <input type="text" placeholder="jour" />
            <input type="text" placeholder="mois" />
            <input type="text" placeholder="année" />
          </div>
        </div>

        <div className="categories">
          <h3>Catégorie:</h3>
          <div className="category-buttons">
            <button>VISIONS OF TOMORROW</button>
            <button>DETECTIVE STORIES</button>
            <button>THE BIG DOCUMENT</button>
            <button>MINDFUL EMPATHY</button>
            <button>THE FINANCE FIELD</button>
            <button>DEVON REMINGTON</button>
            <button>LES MISÉRABLES</button>
          </div>
        </div>

        <button className="reserve-button">Réserver</button>
      </div>

      <footer className="simple-footer">
        <p>
          © 2025 <strong>BiblioSmart.</strong>
        </p>
        <div className="footer-links">
          <button onClick={() => navigate("/about")}>A propos</button>
          <button onClick={() => navigate("/services")}>Services</button>
          <button onClick={() => navigate("/team")}>Equipe</button>
          <button onClick={() => navigate("/contact")}>Contact</button>
        </div>
      </footer>
    </div>
  );
};

export default Livres;
