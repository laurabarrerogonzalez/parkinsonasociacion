import React from 'react';
import "../Banner/Banner.css"


const Banner = ({ image, text, title }) => {
  return (
    <div className="banner">
      <img src={image} alt="Banner" />
      <h1 className="banner-title">{title}</h1>
      <p className="banner-text">{text}</p>
    </div>
  );
};

export default Banner;