// Banner.jsx
import React from 'react';
import "../Banner/Banner.css"


const Banner = ({ image, text }) => {
  return (
    <div className="banner">
      <img src={image} alt="Banner" />
      <p className="banner-text">{text}</p>
    </div>
  );
};

export default Banner;