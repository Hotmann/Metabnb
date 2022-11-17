import React from "react";

import Mask from "../../assets/wallet/mask.png";
import Connect from "../../assets/wallet/conn.png";
import { ReactComponent as Extend } from "../../assets/wallet/extend.svg";

import { ReactComponent as Close } from "../../assets/wallet/close.svg";
import "./modal.css";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => {
  return (
    <div>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className="modal"
        style={{
          " transform: translate(-50%, -50%)": "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        <div className="back">
          <h3 className="side">Connect Wallet</h3>
          <Close onClick={props.modalClosed} />
        </div>

        <div className="preffered">
          <p className="request">Choose your preferred wallet:</p>
          <button className="wallet">
            <div className="left">
              <img src={Mask} alt="Metamask" />
              <span className="wallet-name">Metamask</span>
            </div>
            <Extend />
          </button>
          <button className="wallet">
            <div className="left">
              <img src={Connect} alt="WalletConnect" />
              <span className="wallet-name">WalletConnect</span>
            </div>
            <Extend />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
