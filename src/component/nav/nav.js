import React from "react";

import { ReactComponent as Token } from "../../assets/token.svg";
import { ReactComponent as Metamask } from "../../assets/mask.svg";
import { ReactComponent as OpenSea } from "../../assets/openSea.svg";

import "./nav.css";

const Nav = () => (
  <div className="nav">
    <ul>
      <li className="token">
        <Token /> <span>MBToken</span>
      </li>
      <li className="mask">
        <Metamask /> <span>Metamask</span>
      </li>
      <li className="open">
        <OpenSea /> <span>OpenSea</span>
      </li>
    </ul>
  </div>
);

export default Nav;
