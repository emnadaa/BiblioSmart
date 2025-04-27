import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./equipe.css";
import pic1 from "./equipe.png";
import pic2 from "./directeur.png";
import pic3 from "./bibliotheque.png";
import Header from "../Header";

const Equipe = () => {
  const navigate = useNavigate();
  return (
    <main className="Equipe">
      <h4>Equipe</h4>
      <hr></hr>
      <nav className="boxes">
        <nav className="box">
          <img src={pic1} alt="Logo" width="200" />
          <h5>Equipe de gestion</h5>
          <p>Mr/Mme.Nom</p>
        </nav>
        <nav className="box">
          <nav className="border">
            <img src={pic2} alt="Logo" width="200" />
            <h5>Directeur</h5>
            <p>Mr/Mme.Nom</p>
          </nav>
        </nav>
        <nav className="box">
          <img src={pic3} alt="Logo" width="200" />
          <h5>Bibliothécaire</h5>
          <p>Mr/Mme.Nom</p>
        </nav>
      </nav>
    </main>
  );
};
export default Equipe;
