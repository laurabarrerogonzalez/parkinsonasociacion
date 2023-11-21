import React, { useState, useEffect } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { pdfjs } from "react-pdf";
import "./Resources.css";
import BannerViews from "../../Components/BannerViews/BannerViews";

const Resources = () => {
  const [files, setFiles] = useState({});
  const [selectedFileIndex, setSelectedFileIndex] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/files")
      .then((response) => response.json())
      .then((data) => setFiles(data));
  }, []);

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    const formData = new FormData();

    Array.from(selectedFiles).forEach((file) => {
      formData.append("files", file);
    });

    fetch("http://localhost:3000/files", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setFiles(data);
        window.location.reload();
      });
  };

  const handleRemoveFile = (id) => {
    fetch(`http://localhost:3000/files/${id}`, {
      method: "DELETE",
    })
      .then(() => setFiles((prevFiles) => prevFiles.filter((file) => file.id !== id)))
      .then(() => setSelectedFileIndex(null));
  };

  const handleFileClick = (index) => {
    setSelectedFileIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <BannerViews
        image="https://res.cloudinary.com/da7ffijqs/image/upload/t_Banner 16:9/v1699001271/20200415_111209_1_iacccg.jpg "
        title="¿Quieres ser socio?"
      />
    <div className="resources-container">
      <div className="file-upload-section">
        <h2>Subir Archivos PDF</h2>
        <input
          type="file"
          accept=".pdf"
          multiple
          onChange={handleFileChange}
        />
        {files.map((file, index) => (
          <div
            key={index}
            className={`file-preview ${index === selectedFileIndex ? "selected" : ""}`}
            onClick={() => handleFileClick(index)}
          >
            <h3>{file.name}</h3>
            <p>Enlace: {file.url}</p>
            <p>Contenido: {file.content}</p>
            {index === selectedFileIndex ? (
              <div className="pdf-viewer-container">
                <Worker
                  workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}
                >
                  <Viewer fileUrl={file.url} defaultScale={1.5} />
                </Worker>
              </div>
            ) : null}
            <button onClick={() => handleRemoveFile(file.id)}>
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Resources;
