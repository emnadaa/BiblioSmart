import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Events = () => {
  const navigate = useNavigate();

  return (
    <div className="events-page">
      <h1>BiblioSmart</h1>

      <nav className="main-nav">
        <button onClick={() => navigate("/dashboard")}>Accueil</button>
        <button onClick={() => navigate("/reserve-place")}>
          Réserver une place
        </button>
        <button onClick={() => navigate("/books")}>Livres</button>
        <button onClick={() => navigate("/events")}>Evénements</button>
      </nav>

      <div className="events-content">
        <p>
          Ces événements sont disponibles dans notre bibliothèque pendant cette
          période. Soyez le bienvenu !
        </p>

        <div className="event-card">
          <h3>Club de lecture: Fiction contemporaine</h3>
          <p>Jeudi, 21 Mai 2025</p>
          <button className="see-more">Voir plus &gt;&gt;</button>
        </div>

        <div className="event-card">
          <h3>Conférence sur l'histoire locale</h3>
          <p>Samedi, 23 Mai 2025</p>
          <button className="see-more">Voir plus &gt;&gt;</button>
        </div>
      </div>

      <footer className="simple-footer">
        <p>
          © 2025 <strong>BiblioSmart.</strong>
        </p>
      </footer>
    </div>
  );
};

export default Events;
