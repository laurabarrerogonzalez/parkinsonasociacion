import React, { useState, useEffect } from "react";
import './Resources.css'
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../assets/Components/Footer/Footer.jsx";
import BannerViews from "../../Components/BannerViews/BannerViews";
import ButtonDonate from "../../Components/ButtonDonate/ButtonDonate.jsx";
import ScrollArrow from "../../Components/ScrollArrow/ScrollArrow.jsx";

const Resources = () => {
  const [files, setFiles] = useState([]);
  const [selectedFileIndex, setSelectedFileIndex] = useState(null);

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      const response = await fetch("https://localhost:7165/ResourcesControllers/GetResources");
      const data = await response.json();
      setFiles(data);
    } catch (error) {
      console.error("Error fetching resources:", error);
    }
  };

  const handleFileClick = (index) => {
    setSelectedFileIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
       <Navbar />
      <BannerViews
        image="https://res.cloudinary.com/dit2zhtwz/image/upload/v1700651138/cerca-pila-libros-coloridos_23-2149082168_e1gg2y.jpg"
        title="Recursos y Pautas"
      />
      <div className="resources-container1111">
        {files.map((file, index) => (
          <div key={index} className="file-container1112">
            <div
              className={`file-preview1113 ${
                index === selectedFileIndex ? "selected" : ""
              }`}
              onClick={() => handleFileClick(index)}
            >
              <h3>{file.name}</h3>
              {index === selectedFileIndex && (
                <div className="file-viewer1115">
                  <iframe
                    title={`file-viewer1115-${index}`}
                    src={file.url}
                    frameBorder="0"
                    width="100%"
                    height="500px"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <Footer />
      <ButtonDonate />
      <ScrollArrow />
    </>
  );
};

export default Resources;