import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo_2.svg";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";

import "./footer.css";

const Footer = () => (
  <div className="footer">
    <div className="col">
      <div className="logo">
        <Logo />
        <h1>Metabnb</h1>
      </div>
      <div className="social">
        <a href="/">
          <Facebook />
        </a>
        <a href="/">
          <Instagram />
        </a>
        <a href="/">
          <Twitter />
        </a>
      </div>
      <span className="copy">&copy; 2022 Metabnb</span>
    </div>

    <div className="connect">
      <div className="community">
        <Link to="/" className="foot__list">
          Community
        </Link>
        <div className="links">
          <a href="/" className="link">
            NFT
          </a>
          <a href="/" className="link">
            Tokens
          </a>
          <a href="/" className="link">
            Landlords
          </a>
          <a href="/" className="link">
            Discord
          </a>
        </div>
      </div>
      <div className="places">
        <Link to="/" className="foot__list">
          Places
        </Link>
        <div className="links">
          <a href="/" className="link">
            Castle
          </a>
          <a href="/" className="link">
            Farms
          </a>
          <a href="/" className="link">
            Beach
          </a>
          <a href="/" className="link">
            Learn more
          </a>
        </div>
      </div>
      <div className="about">
        <Link to="/" className="foot__list">
          About us
        </Link>
        <div className="links">
          <a href="/" className="link">
            Road map
          </a>
          <a href="/" className="link">
            Creators
          </a>
          <a href="/" className="link">
            Career
          </a>
          <a href="/" className="link">
            Contact us
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
