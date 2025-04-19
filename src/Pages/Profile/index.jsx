import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="profile-page">
      <h1>BiblioSmart</h1>

      <nav className="main-nav">
        <button onClick={() => navigate("/dashboard")}>Accueil</button>
        <button onClick={() => navigate("/reserve-place")}>
          Réserver une place
        </button>
        <button onClick={() => navigate("/books")}>Livres</button>
        <button onClick={() => navigate("/events")}>Evénements</button>
      </nav>

      <div className="profile-content">
        <h2>Informations générales</h2>
        <div className="info-section">
          <div className="info-item">
            <label>Nom & Prénom:</label>
            <input type="text" />
          </div>
          <div className="info-item">
            <label>Sexe:</label>
            <input type="text" />
          </div>
          <div className="info-item">
            <label>CIN:</label>
            <input type="text" />
          </div>
          <div className="info-item">
            <label>Nationalité:</label>
            <input type="text" />
          </div>
          <div className="info-item">
            <label>Date de naissance:</label>
            <input type="text" />
          </div>
        </div>

        <h2>Informations de contact</h2>
        <div className="info-section">
          <div className="info-item">
            <label>Email:</label>
            <input type="email" />
          </div>
          <div className="info-item">
            <label>Téléphone:</label>
            <input type="tel" />
          </div>
        </div>
      </div>

      <footer className="simple-footer">
        <p>
          © 2025 <strong>BiblioSmart</strong>
        </p>
      </footer>
    </div>
  );
};

export default Profile;
