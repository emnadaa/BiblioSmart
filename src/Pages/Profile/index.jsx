import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import profile1 from "../assets/profile1.png";
import "./index.css";

const Profile = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    nomPrenom: "",
    sexe: "",
    cin: "",
    nationalite: "",
    dateNaissance: "",
    email: "",
    telephone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de sauvegarde ici
    console.log(userInfo);
  };

  return (
    <div className="profile-page">
      <nav className="navbar">
        <h1 className="logo">BiblioSmart</h1>
        <ul className="links">
          <li>Accueil</li>
          <Link to="/Places">
            <li>Réserver une place</li>
          </Link>
          <Link to="/Livres">
            <li>Livres</li>
          </Link>
          <Link to="/Events">
            <li>Evénements</li>
          </Link>
        </ul>
        <Link className="active" to="/Profile">
          <img src={profile1} alt="user" />
        </Link>
      </nav>

      <div className="profile-content">
        <form onSubmit={handleSubmit}>
          <h2>Informations générales</h2>
          <div className="info-section">
            <div className="info-item">
              <label>Nom & Prénom:</label>
              <input
                type="text"
                name="nomPrenom"
                value={userInfo.nomPrenom}
                onChange={handleInputChange}
              />
            </div>
            <div className="info-item">
              <label>Sexe:</label>
              <input
                type="text"
                name="sexe"
                value={userInfo.sexe}
                onChange={handleInputChange}
              />
            </div>
            <div className="info-item">
              <label>CIN:</label>
              <input
                type="text"
                name="cin"
                value={userInfo.cin}
                onChange={handleInputChange}
              />
            </div>
            <div className="info-item">
              <label>Nationalité:</label>
              <input
                type="text"
                name="nationalite"
                value={userInfo.nationalite}
                onChange={handleInputChange}
              />
            </div>
            <div className="info-item">
              <label>Date de naissance:</label>
              <input
                type="date"
                name="dateNaissance"
                value={userInfo.dateNaissance}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <h2>Informations de contact</h2>
          <div className="info-section">
            <div className="info-item">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={userInfo.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="info-item">
              <label>Téléphone:</label>
              <input
                type="tel"
                name="telephone"
                value={userInfo.telephone}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <button type="submit" className="save-button">
            Enregistrer
          </button>
        </form>
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
