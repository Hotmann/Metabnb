import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../modal/modal";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./header.css";

function Header() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  const modalClosed = () => {
    setModal(false);
  };
  return (
    <div>
      <Modal show={modal} modalClosed={modalClosed} />
      <div className="header">
        <div className="group">
          <a href="/">
            <Logo />
            <h1>Metabnb</h1>
          </a>
        </div>
        <div className="nav__bar">
          <Link className="nav__list" to="/">
            Home
          </Link>
          <Link className="nav__list" to="/place-to-stay">
            Place to stay
          </Link>
          <Link className="nav__list" to="/contact">
            NFTs
          </Link>
          <Link className="nav__list" to="/contact">
            Community
          </Link>
        </div>
        <button className="btn__1" onClick={toggleModal}>
          Connect wallet
        </button>
      </div>
    </div>
  );
}

export default Header;
