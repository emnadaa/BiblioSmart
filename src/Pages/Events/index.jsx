import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import profile1 from "../assets/profile1.png";
import event1 from "../assets/event1.png";
import event2 from "../assets/event2.png";
import "./events.css";

const Events = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const events = [
    {
      image: event1,
      title: "Club de lecture: Fiction contemporaine",
      date: "Jeudi, 21 Mai 2025",
      description:
        "Discussion sur les dernières œuvres de fiction contemporaine.",
    },
    {
      image: event2,
      title: "Conférence sur l'histoire locale",
      date: "Samedi, 23 Mai 2025",
      description: "Découvrez l'histoire fascinante de notre région.",
    },
  ];
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/Seconnecter");
  };

  return (
    <div className="events-page">
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
            <li className="active">Evénements</li>
          </Link>
        </ul>
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

      <div className="events-content">
        <h3>
          Ces événements sont disponibles dans notre bibliothèque pendant cette
          période. Soyez le bienvenu !
        </h3>
        <div className="event-list">
          {events.map((event, index) => (
            <div key={index} className="event-card">
              <img src={event.image} alt={event.title} />
              <h3>{event.title}</h3>
              <p>{event.date}</p>
              <Link to={`/event-details/${index}`} className="see-more-link">
                Voir plus &gt;&gt;
              </Link>
            </div>
          ))}
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

export default Events;
