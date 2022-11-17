import React from "react";

import Navigation from "../navigation/navigation";
import Backdrop from "../Backdrop/Backdrop";
import Button from "../button/button";

import "./sideDrawer.css";

const sideDrawer = (props) => {
  let attachedClasses = ["sideDrawer", "close"];
  if (props.open) {
    attachedClasses = ["sideDrawer", "open"];
  }
  return (
    <div>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={`${attachedClasses.join(" ")}`} onClick={props.closed}>
        <nav>
          <Navigation />
        </nav>
        <div>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default sideDrawer;
