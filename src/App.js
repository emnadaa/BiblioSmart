import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Accueil from "./components/Accueil";
import Apropos from "./components/Apropos";
import Service from "./components/Service";
import Equipe from "./components/Equipe";
import Contact from "./components/Contact";
import Seconnecter from "./components/Seconnecter";
import Sinscrire from "./components/Sinscrire";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/service" element={<Service />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Seconnecter" element={<Seconnecter />} />
        <Route path="/Sinscrire" element={<Sinscrire />} />
      </Routes>
    </Router>
  );
}

export default App;
