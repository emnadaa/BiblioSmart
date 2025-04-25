import React from "react";
import "./contact.css";
import pic from "./pic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapLocationDot,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <main className="contact">
      <h4 className="title">Contact</h4>
      <hr />
      <img src={pic} alt="Logo" className="background-img" />

      <div className="info-container">
        <div className="info-left">
          <div className="info-block">
            <span className="ecrire">E-mail:</span>
            <span className="icon-text">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="icon"
                style={{ color: "#B197FC" }}
              />
              <a href="mailto:emna.daadouch@gmail.com">
                emna.daadouch@gmail.com
              </a>
            </span>
          </div>

          <div className="info-block">
            <span className="ecrire">Informations de Contact:</span>
            <span className="icon-text">
              <FontAwesomeIcon
                icon={faPhone}
                className="icon"
                style={{ color: "#B197FC" }}
              />
              73683100
            </span>
          </div>
        </div>

        <div className="info-right">
          <div className="info-block">
            <span className="ecrire">Adresse:</span>
            <span className="icon-text">
              <FontAwesomeIcon
                icon={faMapLocationDot}
                className="icon"
                style={{ color: "#B197FC" }}
              />
              Sidi massouad, Cité universitaire, Hiboun 5147
            </span>
          </div>

          <div className="info-block">
            <span className="ecrire">Horaire:</span>
            <span className="icon-text">
              <FontAwesomeIcon
                icon={faClock}
                className="icon"
                style={{ color: "#B197FC" }}
              />
              Lun-Ven 08:00-17:00
            </span>
          </div>
        </div>
      </div>

      <div className="form-container">
        <div className="row">
          <input type="text" placeholder="Nom" className="input" />
          <input type="text" placeholder="Téléphone" className="input" />
        </div>
        <input type="email" placeholder="Adresse e-mail" className="input" />
        <textarea placeholder="Message"></textarea>
        <button>Contactez-Nous</button>
      </div>
    </main>
  );
};

export default Contact;

{
  /*
    <main className="contact">
        <h4>Contact</h4>
        <hr></hr>
        <img src={pic} alt="Logo" width="200" />
        <nav className="information">
            <nav className="left">
                <h5>E-mail:</h5>
                <FontAwesomeIcon icon="fa-solid fa-envelope" style={{color: "#B197FC",}} />                <p>emna.daadouch@gmail.com</p>

                <h5>Informations de Contact</h5>
                <FontAwesomeIcon icon="fa-solid fa-phone" style={{color: "#B197FC",}} />                <p>73683100</p>
            </nav>
            <nav className="right">
                <h5>Adresse</h5>
                <FontAwesomeIcon icon="fa-solid fa-map-location-dot" style={{color: "#B197FC",}} />                <p>Sidi massouad,Cité universitaire,Hiboun 5147</p>

                <h5>Horaire</h5>
                <FontAwesomeIcon icon="fa-solid fa-clock" style={{color: "#B197FC",}} />                <p>Lun-Ven 08:00-17:00</p>
            </nav>
            <nav className="formulaire">
                <input type="text" value="nom"/>
                <input type="text" value="tel"/>
                <input type="text" value="email"/>
                <textarea name="Message" id=""></textarea>
                <button>Contctez-Nous</button>
            </nav>
        </nav>
    
        
    </main>
    */
}
