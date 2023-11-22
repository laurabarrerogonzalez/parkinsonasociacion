import React, { useState, useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import BannerViews from "../../Components/BannerViews/BannerViews";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Activities = () => {
  const [imageListCD, setImageListCD] = useState([]);
  const [selectedImageIndexCD, setSelectedImageIndexCD] = useState(-1);
  const [imageListEC, setImageListEC] = useState([]);
  const [selectedImageIndexEC, setSelectedImageIndexEC] = useState(-1);

  const fetchImagesCD = async () => {
    try {
      const response = await fetch("https://localhost:7165/api/gallery1");
      const data = await response.json();
      setImageListCD(data);
    } catch (error) {
      console.error("Error fetching images for GalleryCD:", error);
    }
  };

  const fetchImagesEC = async () => {
    try {
      const response = await fetch("https://localhost:7165/api/gallery2");
      const data = await response.json();
      setImageListEC(data);
    } catch (error) {
      console.error("Error fetching images for GalleryEC:", error);
    }
  };

  useEffect(() => {
    fetchImagesCD();
    fetchImagesEC();
  }, []);

  return (
    <>
      <Navbar />
      <BannerViews
        image="https://res.cloudinary.com/dit2zhtwz/image/upload/v1700473022/hombre-leyendo-periodico_53876-89052_egu6c0.avif"
        title="Actividades de los diferentes servicios"
      />

      <div className="gallery1">
        <ImageList
          sx={{
            width: 500,
            height: "auto",
            maxHeight: 400,
            overflowY: "auto",
          }}
          variant="quilted"
          cols={2}
          rowHeight={200}
          className="custom-image-list"
        >
          {imageListCD.map((item, index) => (
            <ImageListItem
              key={index}
              cols={item.cols || 1}
              rows={item.rows || 1}
              onClick={() => setSelectedImageIndexCD(index)}
              className={selectedImageIndexCD === index ? "selected" : ""}
            >
              <img src={item.url} alt={`Image ${index}`} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <div className="gallery2">
        <ImageList
          sx={{
            width: 500,
            height: "auto",
            maxHeight: 400,
            overflowY: "auto",
          }}
          variant="quilted"
          cols={2}
          rowHeight={200}
          className="custom-image-list"
        >
          {imageListEC.map((item, index) => (
            <ImageListItem
              key={index}
              cols={item.cols || 1}
              rows={item.rows || 1}
              onClick={() => setSelectedImageIndexEC(index)}
              className={selectedImageIndexEC === index ? "selected" : ""}
            >
              <img src={item.url} alt={`Image ${index}`} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <Footer />
    </>
  );
};

export default Activities;
