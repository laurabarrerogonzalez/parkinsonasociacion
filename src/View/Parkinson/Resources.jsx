import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import BannerViews from "../../Components/BannerViews/BannerViews";
import { pdfjs } from "react-pdf";
import "./Resources.css"; 

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@2.11.338/build/pdf.worker.min.js`;

const Resources = () => {
  const [files, setFiles] = useState([]);
  const [selectedFileIndex, setSelectedFileIndex] = useState(null);

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    const newFiles = Array.from(selectedFiles).map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file),
    }));
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleRemoveFile = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  const handleFileClick = (index) => {
    setSelectedFileIndex(index);
  };

  return (
    <>
      <Navbar />
      <BannerViews
        image="https://res.cloudinary.com/dit2zhtwz/image/upload/v1698744222/pareja-alegre-celebracion-icono-votacion-sentado-sofa_53876-24976_kke7zn.jpg"
        title="Mitos y Verdades"
      />
      <div className="resources-container">
        <div className="file-upload-section">
          <h2>Subir Archivos PDF</h2>
          <input type="file" accept=".pdf" multiple onChange={handleFileChange} />
          {files.map((file, index) => (
            <div
              key={index}
              className={`file-preview ${index === selectedFileIndex ? "selected" : ""}`}
              onClick={() => handleFileClick(index)}
            >
              <h3>{file.name}</h3>
              {index === selectedFileIndex ? (
                <div className="pdf-viewer-container">
                  <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.11.338/build/pdf.worker.min.js`}>
                    <Viewer
                      fileUrl={file.url}
                      defaultScale={1.5} // Ajusta según sea necesario
                    />
                  </Worker>
                </div>
              ) : null}
              <button onClick={() => handleRemoveFile(index)}>Eliminar</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Resources;