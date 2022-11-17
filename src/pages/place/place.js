import React from "react";

import Locations from "../../component/locations/locations";

import { ReactComponent as Setting } from "../../assets/setting-5.svg";
import "./place.css";

const Place = () => (
  <div>
    <div className="nav-bar">
      <a href="/" className="link-2">
        Resturant
      </a>
      <a href="/" className="link-2">
        Cottage
      </a>
      <a href="/" className="link-2">
        Castle
      </a>
      <a href="/" className="link-2">
        fantast city
      </a>
      <a href="/" className="link-2">
        beach
      </a>
      <a href="/" className="link-2">
        Carbins
      </a>
      <a href="/" className="link-2">
        Off-grid
      </a>
      <a href="/" className="link-2">
        Farm
      </a>
      <div className="location-search">
        <input className="search-input" placeholder="Location" />
        <Setting className="label" />
      </div>
    </div>
    <Locations />
  </div>
);

export default Place;
