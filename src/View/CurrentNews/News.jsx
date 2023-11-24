import React, { useState, useEffect } from "react";
import axios from "axios";
import BannerViews from "../../Components/BannerViews/BannerViews";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const News = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("https://localhost:7165/api/News");
        setNewsList(response.data);
      } catch (error) {
        console.error("Error al obtener las noticias:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <>
      <Navbar />
      <BannerViews
        image="https://res.cloudinary.com/dit2zhtwz/image/upload/v1700473022/hombre-leyendo-periodico_53876-89052_egu6c0.avif"
        title="NOTICIAS"
      />

      <div className="news-container">
        {newsList.map((news, index) => (
          <div className="news-item" key={index}>
            <a href={news.link} className="thumbnail-link">
              <img src={news.thumbnail} alt="Thumbnail" className="thumbnail" />
            </a>
            <h3 className="titlea">{news.title}</h3>
          </div>
        ))}
      </div>
      <Footer/>
    </>
  );
};

export default News;
