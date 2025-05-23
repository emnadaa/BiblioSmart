import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./acceuil.css";
import pic from "./pic.png";

// 🧩 Importer le composant FontAwesomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// 📦 Importer les icônes nécessaires
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import Header from "../Header";
import Apropos from "../Apropos";

const Accueil = () => {
  const navigate = useNavigate();
  return (
    <main className="accueil">
      <nav className="introduction">
        <h4>Bienvenue à BiblioSmart!</h4>
        <p className="p-acceuil">
          Découvrez un espace dédié à la lecture, à la connaissance et au
          partage du savoir. Que vous soyez étudiant, chercheur ou passionné de
          littérature, notre bibliothèque vous offre un large choix de livres,
          d’ouvrages numériques et de ressources éducatives.
        </p>
        <div className="buttons">
          <button
            onClick={() => navigate("/Sinscrire")}
            className="acceuil-button"
          >
            S'inscrire
          </button>
          <button
            onClick={() => navigate("/Seconnecter")}
            className="acceuil-button"
          >
            Se connecter
          </button>
        </div>
        <br></br>
        {/* Icônes */}
        <FontAwesomeIcon icon={faFacebook} style={{ color: "#400101" }} />
        <FontAwesomeIcon icon={faInstagram} style={{ color: "#400101" }} />
        <FontAwesomeIcon icon={faXTwitter} style={{ color: "#400101" }} />
        <FontAwesomeIcon icon={faLinkedin} style={{ color: "#400101" }} />
        <FontAwesomeIcon
          icon={faBuildingColumns}
          style={{ color: "#400101" }}
        />
      </nav>
      <nav className="pic">
        <img src={pic} alt="Logo" width="200" />
      </nav>
    </main>
  );
};
export default Accueil;
