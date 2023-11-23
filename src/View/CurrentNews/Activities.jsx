import React, { useState, useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import BannerViews from "../../Components/BannerViews/BannerViews";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "../CurrentNews/Activities.css";

const Activities = () => {
  const [selectedImageUrl, setSelectedImageUrl] = useState("");
  const [selectedGallery, setSelectedGallery] = useState("");
  const [imageListCD, setImageListCD] = useState([]);
  const [selectedImageIndexCD, setSelectedImageIndexCD] = useState(-1);
  const [imageListEC, setImageListEC] = useState([]);
  const [selectedImageIndexEC, setSelectedImageIndexEC] = useState(-1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index, isCD) => {
    if (isCD) {
      setSelectedGallery("gallery1");
      setSelectedImageIndexCD(index);
      setSelectedImageUrl(imageListCD[index].url);
    } else {
      setSelectedGallery("gallery2");
      setSelectedImageIndexEC(index);
      setSelectedImageUrl(imageListEC[index].url);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const fetchImagesCD = async () => {
    try {
      const response = await fetch("https://localhost:7165/api/gallery1");
      const data = await response.json();

      data.sort((a, b) => b.id_gallery1 - a.id_gallery1);

      setImageListCD(data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const fetchImagesEC = async () => {
    try {
      const response = await fetch("https://localhost:7165/api/gallery2");
      const data = await response.json();

      data.sort((a, b) => b.id_gallery2 - a.id_gallery2);

      setImageListEC(data);
    } catch (error) {
      console.error("Error fetching images:", error);
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
        title="ACTIVIDADES DE LOS DIFERENTES SERVICIOS"
      />
      <div
        id="gallery-title"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="gallery-row">
          <div className="gallery1">
            <ImageList
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
                  onClick={() => openModal(index, true)}
                  className={selectedImageIndexCD === index ? "selected" : ""}
                >
                  <img src={item.url} alt={`Image ${index}`} loading="lazy" />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
          <div>
            <h1 className="title-gallery">
              Galería de Actividades de Servicios
            </h1>
          </div>
        </div>
        <div className="gallery-row">
          <div>
            <h1 className="title-gallery1">
              Galería de Actividades de Proyectos
            </h1>
          </div>
          <div className="gallery2">
            <ImageList
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
                  onClick={() => openModal(index, false)}
                  className={selectedImageIndexEC === index ? "selected" : ""}
                >
                  <img src={item.url} alt={`Image ${index}`} loading="lazy" />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal-container">
          <span className="close-button" onClick={closeModal}>
            &times;
          </span>
          <img
            src={selectedImageUrl}
            alt={`Image ${
              selectedImageIndexCD !== -1
                ? selectedImageIndexCD
                : selectedImageIndexEC
            }`}
            loading="lazy"
          />
          <p>Galería: {selectedGallery}</p>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Activities;
