import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import profile1 from "../assets/profile1.png";
import book1 from "../assets/book1.png";
import book2 from "../assets/book2.png";
import book3 from "../assets/book3.png";
import book4 from "../assets/book4.png";
import book5 from "../assets/book5.png";
import book6 from "../assets/book6.png";
import id from "../assets/id.png";
import "./livres.css";

const Livres = () => {
  const navigate = useNavigate();
  const [identifiant, setIdentifiant] = useState("");
  const [date, setDate] = useState({ jour: "", mois: "", annee: "" });
  const [selectedCategory, setSelectedCategory] = useState("");
  const handleReservation = (e) => {
    e.preventDefault();
    // Logique de réservation ici
    console.log({ identifiant, date, selectedCategory });
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setDate((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="books-page">
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
            <li className="active">Livres</li>
          </Link>
          <Link to="/Events">
            <li>Evénements</li>
          </Link>
        </ul>
        <Link to="/Profile">
          <img src={profile1} alt="user" />
        </Link>
      </nav>

      <div className="books-content">
        <h3>
          S'il vous plaît, choisissez un livre et entrez les données suivantes!
        </h3>
        <form onSubmit={handleReservation}>
          <div className="livre-content">
            <div className="left-livre">
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
              <label>Catégorie:</label>
              <input
                type="text"
                placeholder="Catégorie"
                name="categorie"
                min="1"
                max="31"
                required
              />
            </div>
            <div className="livre-inputs">
              <div className="date">
                <label>Date de réservation souhaitée:</label>
                <input
                  type="number"
                  placeholder="jour"
                  name="jour"
                  value={date.jour}
                  onChange={handleDateChange}
                  min="1"
                  max="31"
                  required
                />
                <input
                  type="number"
                  placeholder="mois"
                  name="mois"
                  value={date.mois}
                  onChange={handleDateChange}
                  min="1"
                  max="12"
                  required
                />
                <input
                  type="number"
                  placeholder="année"
                  name="annee"
                  value={date.annee}
                  onChange={handleDateChange}
                  min="2025"
                  required
                />
              </div>
              <div className="delai">
                <label>Délai de réservation:</label>
                <input
                  type="number"
                  placeholder="jour"
                  name="jour"
                  value={date.jour}
                  onChange={handleDateChange}
                  min="1"
                  max="31"
                  required
                />
              </div>
            </div>
          </div>

          <div className="categories">
            <div className="books">
              <img src={book1} />
              <img src={book2} />
              <img src={book3} />
              <img src={book4} />
              <img src={book5} />
              <img src={book6} />
            </div>
          </div>
          <div className="button-livre">
            <button type="submit" className="reserve-button">
              Réserver
            </button>
          </div>
        </form>
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

export default Livres;
