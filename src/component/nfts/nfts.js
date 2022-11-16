import React from "react";

import nft1 from "../../assets/nft-images/nft-1.png";
import nft2 from "../../assets/nft-images/nft-2.png";
import nft3 from "../../assets/nft-images/nft-3.png";
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
    {/* <div className="background-images">
      <img src={nft1} alt="Image1" className="background-image nft-image-1" />
      <img src={nft2} alt="Image2" className="background-image nft-image-2" />
      <img src={nft3} alt="Image3" className="background-image nft-image-3" />
    </div> */}
  </div>
);

export default NFTs;
