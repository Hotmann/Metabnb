import React from "react";

import nft from "../../assets/nft-images/right.png";
import "./nfts.css";

const NFTs = () => (
  <div className="nfts">
    <div className="aside-1">
      <h2 className="title-2">Metabnb NFTs</h2>
      <p className="note">
        Discover our NFT gift cards collection. Loyal customers gets amazing
        gift cards which are traded as NFTs. These NFTs gives our cutomer access
        to loads of our exclusive services.
      </p>
      <a href="/" className="btn__2">
        Learn more
      </a>
    </div>
    <img src={nft} alt="Image1" className="nft-image" />
  </div>
);

export default NFTs;
