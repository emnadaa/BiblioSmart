import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Accueil from "./components/Accueil";
import Apropos from "./components/Apropos";
import Service from "./components/Service";
import Equipe from "./components/Equipe";
import Contact from "./components/Contact";
import Seconnecter from "./components/Seconnecter";
import Sinscrire from "./components/Sinscrire";
import Dashboard from "./Pages/Dashboard";
import Places from "./Pages/Places";
import Livres from "./Pages/Livres";
import Events from "./Pages/Events";
import Profile from "./Pages/Profile";

function AppContent() {
  const location = useLocation();
  const excludeHeaderPaths = [
    "/Seconnecter",
    "/Sinscrire",
    "/Dashboard",
    "/Places",
    "/Livres",
    "/Events",
    "/Profile",
  ];
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      {!excludeHeaderPaths.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Equipe" element={<Equipe />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Sinscrire" element={<Sinscrire />} />
        {/* Public routes */}
        <Route
          path="/Seconnecter"
          element={<Seconnecter setIsAuthenticated={setIsAuthenticated} />}
        />
        {/* Protected routes */}
        <Route
          path="/Dashboard"
          element={
            isAuthenticated ? <Dashboard /> : <Navigate to="/Seconnecter" />
          }
        />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Places" element={<Places />} />
        <Route path="/Livres" element={<Livres />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
