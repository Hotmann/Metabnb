import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./component/header/header";
import Footer from "./component/footer/footer";
import AirBnb from "./pages/airBnb/airBnb";
import Place from "./pages/place/place";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<AirBnb />} />
        <Route path="/place-to-stay" element={<Place />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
