import React from "react";
import { Link, useNavigate } from "react-router-dom";
import profile1 from "../assets/profile1.png";
import places from "../assets/places.png";
import id from "../assets/id.png";
import "./places.css";
const Places = () => {
  const navigate = useNavigate();
  return (
    <div className="reserve-place">
      <nav className="navbar">
        <h1 className="logo">BiblioSmart</h1>
        <ul className="links">
          <Link to="/Dashboard">
            <li>Accueil</li>
          </Link>

          <Link to="/Places">
            <li className="active">Réserver une place</li>
          </Link>
          <Link to="/Livres">
            <li>Livres</li>
          </Link>
          <Link to="/Events">
            <li>Evénements</li>
          </Link>
        </ul>
        <Link to="/Profile">
          <img src={profile1} alt="user" />
        </Link>
      </nav>
      <div className="content-places">
        <div className="reservation-form">
          <h3>
            S'il vous plaît, choisissez une place et entrez les données
            suivantes!
          </h3>

          <div className="form-group">
            <div className="id-section">
              <div
                className="id-bar"
                style={{ position: "relative", width: "300px" }}
              >
                <img
                  src={id}
                  alt="identifiant"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "10px",
                    transform: "translateY(-50%)",
                    width: "20px",
                    height: "20px",
                  }}
                />
                <input
                  type="text"
                  placeholder="Identifiant"
                  style={{
                    width: "400px",
                    height: "20px",
                    padding: "10px 10px 10px 40px",
                    borderRadius: "8px",
                    border: "1px solid #D94814",
                  }}
                />
              </div>
            </div>
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
        <div className="img-places">
          <img src={places} alt="places" />
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

export default Places;
