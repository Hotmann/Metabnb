import React from "react";
import Nav from "../../component/nav/nav";
import CardList from "../../component/cardlist/cardlist";
import NFTs from "../../component/nfts/nfts";

import Image1 from "../../assets/image-3.png";
import Image2 from "../../assets/image-4.png";
import Image3 from "../../assets/image-5.png";
import Image4 from "../../assets/image-6.png";
import "./airBnb.css";

const AirBnb = () => (
  <div>
    <div className="section-1">
      <div className="col-1">
        <h2 className="heading-1">
          Rent a <span className="highlight">Place</span> away from
          <span className="highlight"> Home</span> in the
          <span className="highlight"> Metaverse</span>
        </h2>
        <p className="txt">
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>
        <div className="search">
          <input className="search-box" placeholder="Search for location" />
          <label className="search-label">Search</label>
        </div>
      </div>
      <div className="col-2">
        <img src={Image1} alt="Image1" className="img-1" />
        <img src={Image2} alt="Image2" className="img-2" />
        <img src={Image3} alt="Image3" className="img-3" />
        <img src={Image4} alt="Image4" className="img-4" />
      </div>
    </div>
    <Nav />
    <CardList />
    <NFTs />
  </div>
);

export default AirBnb;
