import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const Banner = ({ banner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <h1>{banner.largeText1}</h1>
        <h3>{banner.midText}</h3>
        <img
          src={urlFor(banner.image)}
          alt="Pet shop"
          className="hero-banner-image"
        />
      </div>
    </div>
  );
};

export default Banner;
