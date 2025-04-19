import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Places = () => {
  const navigate = useNavigate();

  return (
    <div className="reserve-place">
      <h1>BiblioSmart</h1>

      <nav className="main-nav">
        <button onClick={() => navigate("/dashboard")}>Accueil</button>
        <button onClick={() => navigate("/reserve-place")}>
          Réserver une place
        </button>
        <button onClick={() => navigate("/books")}>Livres</button>
        <button onClick={() => navigate("/events")}>Evénements</button>
      </nav>

      <div className="reservation-form">
        <h2>
          S'il vous plaît, choisissez une place et entrez les données suivantes!
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

        <div className="form-group">
          <label>Délai de réservation:</label>
          <div className="time-inputs">
            <input type="text" placeholder="h" />
            <input type="text" placeholder="mn" />
          </div>
        </div>

        <button className="reserve-button">Réserver</button>
      </div>

      <footer className="simple-footer">
        <p>© 2025 BiblioSmart.</p>
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

export default Places;
