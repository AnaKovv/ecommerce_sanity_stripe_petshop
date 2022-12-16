import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const FooterBanner = ({
  footerBanner: {
    discount,
    largeText1,
    saleTime,
    midText,
    desc,
    product,
    image,
  },
}) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <p>{saleTime}</p>
          <p>{desc}</p>
        </div>
        <img src={urlFor(image)} className="footer-banner-image" />
        <div className="right">
          <p>{midText}</p>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
