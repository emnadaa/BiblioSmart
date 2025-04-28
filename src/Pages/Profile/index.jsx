import React, { useState, useEffect } from "react";
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
  const savedUser = JSON.parse(localStorage.getItem("user")) || {};

  const [userInfo, setUserInfo] = useState({
    nom: savedUser.nom || "",
    Prenom: savedUser.prenom || "",
    sexe: savedUser.sexe || "",
    cin: savedUser.cin || "",
    nationalite: savedUser.nationalite || "",
    dateNaissance: savedUser.date_naissance || "",
    email: savedUser.email || "",
    telephone: savedUser.telephone || "",
  });

  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) {
      setUserInfo((prev) => ({ ...prev, email: savedEmail }));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: userInfo.email }),
          }
        );

        const data = await response.json();

        if (data.success) {
          alert("✅ " + data.message);
          localStorage.removeItem("user");
          navigate("/Seconnecter");
        } else {
          alert("⚠️ " + data.message);
        }
      } catch (err) {
        console.error(err);
        alert("Erreur de connexion au serveur 🚨");
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/Seconnecter");
  };

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

        {/* Profile Dropdown */}
        <div className="profile-dropdown">
          <img
            src={profile1}
            alt="user"
            className="profile-icon"
            onClick={() => setShowDropdown(!showDropdown)}
          />
          {showDropdown && (
            <div className="dropdown-menu">
              <Link to="/Profile" onClick={() => setShowDropdown(false)}>
                Mon Profil
              </Link>
              <button onClick={handleLogout}>Déconnexion</button>
            </div>
          )}
        </div>
      </nav>

      <div className="global-content">
        <div className="profile-photo">
          <img src={profilPic} className="profil" alt="profil-pic" />
          <h3>
            {userInfo.nom} {userInfo.Prenom}
          </h3>
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
            <hr />
            <div className="info-section">
              <div className="info-item">
                <img src={Nom} alt="nom" />
                <label>Nom:</label>
                <input
                  type="text"
                  name="nom"
                  value={userInfo.nom}
                  onChange={handleInputChange}
                />
              </div>
              <div className="info-item">
                <img src={Nom} alt="nom" />
                <label>Prénom:</label>
                <input
                  type="text"
                  name="Prenom"
                  value={userInfo.Prenom}
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
            <hr />
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
