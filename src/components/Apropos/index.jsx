import React from "react";
import { Link } from "react-router-dom";
import "./apropos.css";
import deco from "./apropos.png";

const Apropos = () => {
  return (
    <main className="apropos">
      <div className="left-section">
        <img src={deco} alt="Illustration" className="left-image" />
      </div>
      <div className="info-box">
        <h4>A propos de Nous</h4>
        <hr />
        <p>
          BiblioSmart est une plateforme intelligente qui facilite la gestion
          des bibliothèques. Elle permet de réserver des places, emprunter des
          livres, accéder à des résumés de cours et suivre les événements en un
          seul clic. Grâce au scan de QR code, les utilisateurs peuvent
          confirmer leur présence, et les bibliothécaires peuvent gérer
          l’occupation des espaces efficacement.
        </p>
      </div>
    </main>
  );
};

export default Apropos;
