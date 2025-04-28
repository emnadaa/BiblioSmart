import React, { useState } from "react";
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
import calendrier from "../assets/calendrier.png";
import x from "../assets/twitter.png";
import fb from "../assets/facebook.png";
import insta from "../assets/instagram.png";
import linkedIn from "../assets/linkedin.png";
import "./Dashboard.css";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem("user");
    Navigate("/Seconnecter");
  };
  return (
    <div className="biblioSmart">
      <nav className="navbar">
        <h1 className="logo">BiblioSmart</h1>
        <ul className="links">
          <li className="active">Accueil</li>
          <Link to="/Places">
            <li>Réserver une place</li>
          </Link>
          <Link to="/Livres">
            <li>Livres</li>
          </Link>
          <Link to="/Events">
            <li>Evénements</li>
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
                padding: "10px 10px 10px 40px",
                borderRadius: "8px",
                border: "1px solid #D94814",
              }}
            />
          </div>

          <div className="quick-actions">
            <div className="action">
              <Link to="/Livres">
                <img src={Book} alt="livre" />
                <button>Réserver un livre</button>
              </Link>
            </div>
            <div className="action">
              <Link to="/Places">
                <img src={place} alt="place" />
                <button>Réserver une place</button>
              </Link>
            </div>
            <div className="action">
              <Link to="/Events">
                <img src={event} alt="event" />
                <button>Consulter les événements</button>
              </Link>
            </div>
            <div className="action">
              <Link to="/Profile">
                <img src={profil} alt="profil" />
                <button>Espace personnel</button>
              </Link>
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
            <div className="events-card">
              <img src={calendrier} alt="calendrier" />
              <li>Club de lecture: Fiction contemporaine</li>
            </div>
            <div className="events-card">
              <img src={calendrier} alt="calendrier" />
              <li>Conférence sur l'histoire locale</li>
            </div>
          </ul>
        </section>
      </div>
      <footer className="footer-dashboard">
        <div className="content">
          <div className="left-dash-foot">
            <div className="biblio">
              <h3>BiblioSmart</h3>
              <p className="paragraph">
                Un espace dédié à la lecture, à la connaissance et au partage du
                savoir.
              </p>
              <div className="social">
                <img src={x} alt="x" />
                <img src={fb} alt="fb" />
                <img src={insta} alt="insta" />
                <img src={linkedIn} alt="LinkedIn" />
              </div>
              <p>
                © 2025 <strong>BiblioSmart.</strong>
              </p>
            </div>
          </div>

          <div className="right-dash-foot">
            <div className="links">
              <ul>
                <li>Apropos</li>
                <li>Services</li>
                <li>Equipe</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="dash-contact">
              <p className="mail">
                <b>E-mail:</b> tak.bh04@gmail.com
              </p>
              <p className="tel">
                <b>Informations de Contact:</b> 73683100
              </p>
              <p className="adresse">
                <b>sidi massoud, Cité universitaire, Hiboun 5147</b>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
