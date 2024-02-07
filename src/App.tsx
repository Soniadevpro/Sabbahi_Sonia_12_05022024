import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Home from "./Views/Home/Home";
import About from "./Views/About/About";
// import Error from "./Views/ErrorPage/Error";

// import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  return (
    <BrowserRouter>
  
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;