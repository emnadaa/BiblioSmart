import React from "react";
import profile1 from "../assets/profile1.png";
import Loupe from "../assets/loupe.png";
import Book from "../assets/open-book.png";
import place from "../assets/working-with-laptop.png";
import event from "../assets/calendar.png";
import profil from "../assets/user.png";
import livre1 from "../assets/livre1.png";
import livre2 from "../assets/livre2.png";
import livre3 from "../assets/livre3.png";
import livre4 from "../assets/livre4.png";
import "./index.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="biblioSmart">
      <nav className="navbar">
        <h1 className="logo">BiblioSmart</h1>
        <ul className="links">
          <li className="active">Accueil</li>
          <li>Réserver une place</li>
          <li>Livres</li>
          <li>Evénements</li>
        </ul>
        <Link to="/Profile">
          <img src={profile1} alt="user" />
        </Link>
      </nav>
      <div className="content">
        <div className="search-section">
          <div
            className="search-bar"
            style={{ position: "relative", width: "300px" }}
          >
            <img
              src={Loupe}
              alt="loupe"
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
              type="search"
              placeholder="Recherchez un livre, un auteur, un évènement..."
              style={{
                width: "1200px",
                padding: "10px 10px 10px 40px", // padding left pour laisser la place à l'image
                borderRadius: "8px",
                border: "1px solid #D94814",
              }}
            />
          </div>

          <div className="quick-actions">
            <div className="action">
              <img src={Book} alt="livre" />
              <button>Réserver un livre</button>
            </div>
            <div className="action">
              <img src={place} alt="place" />
              <button>Réserver une place</button>
            </div>
            <div className="action">
              <img src={event} alt="event" />
              <button>Consulter les événements</button>
            </div>
            <div className="action">
              <img src={profil} alt="profil" />
              <button>Espace personnel</button>
            </div>
          </div>
        </div>
        <section className="nouveautes">
          <h2>Nouveautés</h2>
          <div className="couverture">
            <div className="livre">
              <img src={livre1} alt="livre1" />
            </div>
            <div className="livre">
              <img src={livre2} alt="livre2" />
            </div>
            <div className="livre">
              <img src={livre3} alt="livre3" />
            </div>
            <div className="livre">
              <img src={livre4} alt="livre4" />
            </div>
          </div>
        </section>
        <section className="events">
          <h2>Evénements à venir</h2>
          <ul>
            <li>Club de lecture: Fiction contemporaine</li>
            <li>Conférence sur l'histoire locale</li>
          </ul>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer-dashboard">
        <div className="content">
          <div className="biblio">
            <h3>BiblioSmart</h3>
            <p>
              Un espace dédié à la lecture, à la connaissance et au partage du
              savoir.
            </p>
            <p>
              © 2025 <strong>BiblioSmart.</strong>
            </p>
          </div>
          <div className="links">
            <h4>Liens</h4>
            <ul>
              <li>A propos</li>
              <li>Services</li>
              <li>Equipe</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="contact">
            <h4>Contact</h4>
            <p>E-mail: tak.bh04@gmail.com</p>
            <p>Informations de Contact: 73683100</p>
            <p>sidi massoud, Cité universitaire, Hiboun 5147</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
