import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import profile1 from "../assets/profile1.png";
import profilPic from "../assets/profil-pic.png";
import Actif from "../assets/Actif.png";
import Nom from "../assets/profilEmogi/Nom.png";
import sexe from "../assets/profilEmogi/sexe.png";
import cin from "../assets/profilEmogi/cin.png";
import DateNais from "../assets/profilEmogi/DateNais.png";
import email from "../assets/profilEmogi/email.png";
import Nation from "../assets/profilEmogi/Nation.png";
import tel from "../assets/profilEmogi/tel.png";
import "./profile.css";

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
  const handleDelete = async () => {
    const confirmation = window.confirm(
      "Êtes-vous sûr de vouloir supprimer votre compte ?"
    );
    if (confirmation) {
      try {
        const response = await fetch(
          "http://localhost/bibliosmart/DeleteAccount.php",
          {
            method: "DELETE", // Use DELETE request
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: userInfo.email }), // Send user's email or ID to delete the account
          }
        );

        const data = await response.json();

        if (data.success) {
          alert("Compte supprimé avec succès");
          navigate("/Seconnecter"); // Redirect to login page after deletion
        } else {
          alert("Erreur lors de la suppression du compte");
        }
      } catch (err) {
        alert("Erreur de connexion au serveur");
      }
    }
  };

  // Add the onClick event handler to the "Supprimer" button
  <button className="supp-button" onClick={handleDelete}>
    Supprimer
  </button>;

  return (
    <div className="profile-page">
      <nav className="navbar">
        <h1 className="logo">BiblioSmart</h1>
        <ul className="links">
          <Link to="/Dashboard">
            <li>Accueil</li>
          </Link>
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
      <div className="global-content">
        <div className="profile-photo">
          <img src={profilPic} className="profil" alt="profil-pic" />
          <h3>User Name</h3>
          <div className="actif">
            <img src={Actif} alt="actif" />
            <p>Actif</p>
          </div>
          <div className="profil-buttons">
            <button className="modif-button">Modifier</button>
            <button className="supp-button" onClick={handleDelete}>
              Supprimer
            </button>
          </div>
        </div>
        <div className="profile-content">
          <form onSubmit={handleSubmit}>
            <h2>Informations générales</h2>
            <hr></hr>
            <div className="info-section">
              <div className="info-item">
                <img src={Nom} alt="nom" />
                <label>Nom & Prénom:</label>
                <input
                  type="text"
                  name="nomPrenom"
                  value={userInfo.nomPrenom}
                  onChange={handleInputChange}
                />
              </div>
              <div className="info-item">
                <img src={sexe} alt="sexe" />
                <label>Sexe:</label>
                <input
                  type="text"
                  name="sexe"
                  value={userInfo.sexe}
                  onChange={handleInputChange}
                />
              </div>
              <div className="info-item">
                <img src={cin} alt="cin" />
                <label>CIN:</label>
                <input
                  type="text"
                  name="cin"
                  value={userInfo.cin}
                  onChange={handleInputChange}
                />
              </div>
              <div className="info-item">
                <img src={Nation} alt="Nation" />
                <label>Nationalité:</label>
                <input
                  type="text"
                  name="nationalite"
                  value={userInfo.nationalite}
                  onChange={handleInputChange}
                />
              </div>
              <div className="info-item">
                <img src={DateNais} alt="DateNais" />
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
            <hr></hr>
            <div className="info-section">
              <div className="info-item">
                <img src={email} alt="email" />
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="info-item">
                <img src={tel} alt="tel" />
                <label>Téléphone:</label>
                <input
                  type="tel"
                  name="telephone"
                  value={userInfo.telephone}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <footer className="simple-footer">
        <div className="left-side">
          <p>
            © 2025 <strong>BiblioSmart.</strong>
          </p>
        </div>
        <div className="right-side">
          <ul>
            <li>Apropos</li>
            <li>Services</li>
            <li>Equipe</li>
            <li>Contact</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Profile;
