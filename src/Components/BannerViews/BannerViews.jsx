import React from "react";
import "../BannerViews/BannerViews.css";

const BannerViews = ({ image, text, title }) => {
  return (
    <div className="banner_views">
      <img src={image} alt="Banner" />
      <div className="container_content">
        <h1 className="banner_views_title">{title}</h1>
        <p className="banner_views_text">{text}</p>
      </div>
    </div>
  );
};

export default BannerViews;
