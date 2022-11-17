import React from "react";

import "./drawerToggle.css";

const DrawerToggle = (props) => (
  <div className="drawerToggle" onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default DrawerToggle;
