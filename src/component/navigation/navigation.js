import React from "react";
import "./navigation.css";

const Navigation = () => (
  <div className="nav__bar">
    <a href="/" className="nav__list">
      Home
    </a>
    <a href="/place-to-stay" className="nav__list">
      Place to stay
    </a>
    <a href="/" className="nav__list">
      NFTs
    </a>
    <a href="/" className="nav__list">
      Community
    </a>
  </div>
);

export default Navigation;
