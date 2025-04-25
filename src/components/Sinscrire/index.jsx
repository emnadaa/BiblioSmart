import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sinscrire.css";

const Sinscrire = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(""); // Reset l'erreur au changement de champs
  };

  const validatePassword = (password) => {
    // Vérifie si le mot de passe est fort
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    if (!validatePassword(password)) {
      setError(
        "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial."
      );
      return;
    }

    try {
      const response = await fetch(
        "http://localhost/bibliosmart/Sinscrire.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        navigate("/Seconnecter");
      } else {
        setError(data.message || "Erreur lors de l'inscription.");
      }
    } catch (err) {
      setError("Erreur de connexion au serveur.");
    }
  };

  return (
    <main className="sinscrire">
      <div className="container">
        <h1>BiblioSmart</h1>
        <div className="card">
          <h2>S'inscrire</h2>
          <p className="subtitle">
            Découvrez Bibliosmart d'une meilleure façon
          </p>

          <form className="form" onSubmit={handleSubmit}>
            <div className="info">
              <label>Nom*</label>
              <input
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                placeholder="Votre nom"
                required
              />
            </div>

            <div className="info">
              <label>Prénom*</label>
              <input
                type="text"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                placeholder="Votre prénom"
                required
              />
            </div>

            <div className="info">
              <label>Téléphone*</label>
              <input
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                placeholder="Votre numéro de téléphone"
                required
              />
            </div>

            <div className="info">
              <label>Email*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Votre email"
                required
              />
            </div>

            <div className="info">
              <label>Mot De Passe*</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Créez un mot de passe"
                required
              />
            </div>

            <div className="info">
              <label>Confirmer le Mot De Passe*</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirmez le mot de passe"
                required
              />
              {error && (
                <p style={{ color: "red", marginTop: "5px" }}>{error}</p>
              )}
            </div>

            <div className="checkbox">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">
                J'accepte les conditions d'utilisation et la politique de
                confidentialité.
              </label>
            </div>

            <button type="submit" className="button">
              Créer un compte
            </button>
          </form>

          <p className="Seconnecter">
            Vous avez déjà un compte?{" "}
            <Link to="/Seconnecter">Se connecter</Link>
          </p>
        </div>

        <footer className="footer">
          <p>©2025 Bibliosmart.</p>
          <div className="footer-links">
            <Link to="/Contact">Contact</Link>
            <Link to="/Apropos">A propos</Link>
            <Link to="/Service">Services</Link>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default Sinscrire;
