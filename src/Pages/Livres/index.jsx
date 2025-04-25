import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import profile1 from "../assets/profile1.png";
import book1 from "../assets/book1.png";
import book2 from "../assets/book2.png";
import book3 from "../assets/book3.png";
import book4 from "../assets/book4.png";
import book5 from "../assets/book5.png";
import book6 from "../assets/book6.png";
import "./livres.css";

const Livres = () => {
  const navigate = useNavigate();
  const [identifiant, setIdentifiant] = useState("");
  const [date, setDate] = useState({ jour: "", mois: "", annee: "" });
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    "VISIONS OF TOMORROW",
    "DETECTIVE STORIES",
    "THE BIG DOCUMENT",
    "MINDFUL EMPATHY",
    "THE FINANCE FIELD",
    "DEVON REMINGTON",
    "LES MISÉRABLES",
  ];

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
          <li>Accueil</li>
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
          <div className="form-group">
            <label>Identifiant</label>
            <input
              type="text"
              value={identifiant}
              onChange={(e) => setIdentifiant(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Date de réservation souhaitée:</label>
            <div className="date-inputs">
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
          </div>

          <div className="categories">
            <h4>Catégorie:</h4>
            <div className="books">
              <img src={book1} />
              <img src={book2} />
              <img src={book3} />
              <img src={book4} />
              <img src={book5} />
              <img src={book6} />
            </div>
          </div>

          <button type="submit" className="reserve-button">
            Réserver
          </button>
        </form>
      </div>

      <footer className="simple-footer">
        <p>
          © 2025 <strong>BiblioSmart.</strong>
        </p>
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
