import React, { useState } from "react";
import DrawerToggle from "../sideDrawer/drawerToggle/drawerToggle";
import Navigation from "../navigation/navigation";
import SideDrawer from "../sideDrawer/sideDrawer";
import Modal from "../modal/modal";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./header.css";

function Header() {
  const [modal, setModal] = useState(false);
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  const modalClosed = () => {
    setModal(false);
  };

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(!showSideDrawer);
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
        <nav className="desktop">
          <Navigation />
        </nav>
        <button className="btn__1" onClick={toggleModal}>
          Connect wallet
        </button>
        <DrawerToggle clicked={sideDrawerToggleHandler} />
        <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler} />
      </div>
    </div>
  );
}

export default Header;
