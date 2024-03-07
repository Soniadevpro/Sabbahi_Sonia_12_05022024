import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Assurez-vous d'importer vos composants. Décommentez les lignes suivantes et assurez-vous que les chemins d'importation sont corrects.
import Home from "./views/home/home";
// import About from "./Views/About/About";
// import Erreur from "./Views/404/Error";
// import Logement from "./Views/Logement/Logement";
// import Footer from "./components/Footer/Footer";
// import Header from "./components/Header/Header";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        {/* Assurez-vous d'avoir les composants importés pour les utiliser ici */}
        <Route path="/" element={<Home />} />
        
        {/* <Route path="/about" element={<About />} />
        <Route path="*" element={<Erreur />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
