import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Seconnecter.css";

const Seconnecter = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost/bibliosmart/Seconnecter.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("email", data.user.email);
        // Si connexion réussie, rediriger vers le tableau de bord
        navigate("/Dashboard");
      } else {
        setError(data.message); // Afficher l'erreur sous le formulaire
      }
    } catch (err) {
      setError("Erreur de connexion au serveur.");
    }
  };

  return (
    <main className="seconnecter">
      <div className="container">
        <h1>BiblioSmart</h1>
        <div className="card">
          <h2>Se connecter</h2>
          <p className="subtitle">
            Découvrez BiblioSmart d'une meilleure façon
          </p>
          <form className="form" onSubmit={handleSubmit}>
            <div className="info">
              <label>Email*</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                required
              />
            </div>

            <div className="info">
              <label>Mot De Passe*</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                required
              />
              <div className="forgot">
                <Link to="/forgot-password">Mot de passe oublié ?</Link>
              </div>
            </div>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <button type="submit" className="button">
              Se connecter
            </button>
          </form>

          <p className="sinscrire">
            Vous n'avez pas un compte ?{" "}
            <Link to="/sinscrire">Créer un compte</Link>
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

export default Seconnecter;
