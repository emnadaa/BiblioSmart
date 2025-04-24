import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./service.css";
import pic1 from "./pic1.jpg";
import pic2 from "./pic2.jpg";
import pic3 from "./pic3.jpg";
import Header from "../Header";


const Service = () => {
  const navigate = useNavigate();
  return (
    <main className="service">
        <h4>Services</h4>
        <hr></hr>
      <nav className="boxes">
        <nav className="box">
            <img src={pic1} alt="Logo" width="200" />
            <h5>Réservation de places</h5>
            <p>Réservez facilement une place de travail en 
            bibliothèque via notre plateforme et confirmez
            votre présence avec un QR code. Plus besoin 
            de chercher un espace libre !</p>

        </nav>
        <nav className="box">
            <img src={pic3} alt="Logo" width="200" />
            <h5>Emprunt et consultation de documents</h5>
            <p>Accédez au catalogue de la bibliothèque,
            réservez des livres et consultez des résumés de 
            cours en ligne pour optimiser votre temps d’étude.</p>

        </nav>
        <nav className="box">
            <img src={pic2} alt="Logo" width="200" />
            <h5>Annonces et évènements</h5>
            <p>Restez informé des événements organisés par
                la bibliothèque, des nouvelles acquisitions 
                et des annonces importantes grâce à
                notre système de notifications.</p>

        </nav>
    </nav>
        
    </main>
  );
};
export default Service;


