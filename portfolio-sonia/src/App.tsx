import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Assurez-vous d'importer vos composants. Décommentez les lignes suivantes et assurez-vous que les chemins d'importation sont corrects.
import Home from "./views/home/home";
import Skills from "./views/skills/skills";
import Projects from "./views/projects/projects";
import Contact from "./views/contact/contact";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        {/* Assurez-vous d'avoir les composants importés pour les utiliser ici */}
        <Route path="/" element={<Home />} />
        
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact/>} />
        {/* <Route path="*" element={<Erreur />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
