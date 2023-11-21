import React, { useState, useEffect } from "react";
import "./ResourcesAdmin.css";
import AdminNavbar from "../../Components/AdminNavbar/AdminNavbar";

const ResourcesAdmin = () => {
  const [files, setFiles] = useState([]);
  const [selectedFileIndex, setSelectedFileIndex] = useState(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/files")
      .then((response) => response.json())
      .then((data) => setFiles(data));
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFileAdd = async () => {
    const response = await fetch("http://localhost:3000/files", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: inputValue }),
    });

    const newData = await response.json();
    setFiles(newData);

    setInputValue("");
  };

  const handleRemoveFile = async (fileId) => {
    await fetch(`http://localhost:3000/files/${fileId}`, {
      method: "DELETE",
    });

    const newData = await fetch("http://localhost:3000/files").then(
      (response) => response.json()
    );
    setFiles(newData);

    setSelectedFileIndex(null);
  };

  const handleFileClick = (index) => {
    setSelectedFileIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <AdminNavbar />
      <div className="resources-container141">
        <div className="file-upload-section141">
          <h2>Subir Enlaces</h2>
          <div>
            <input
              type="text"
              placeholder="Ingrese el enlace"
              value={inputValue}
              onChange={handleInputChange}
            />
            <button onClick={handleFileAdd}>Agregar Enlace</button>
          </div>
          {files.map((file, index) => (
            <div
              key={index}
              className={`file-preview143 ${
                index === selectedFileIndex ? "selected" : ""
              }`}
              onClick={() => handleFileClick(index)}
            >
              <h3>{file.name}</h3>
              {index === selectedFileIndex ? (
                <div className="file-viewer-container144">
                  <iframe
                    title={`file-viewer-${index}`}
                    src={file.url}
                    frameBorder="0"
                    width="100%"
                    height="500px"
                  />
                </div>
              ) : null}
              <button className="button222" onClick={() => handleRemoveFile(file.id)}>
                Eliminar
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ResourcesAdmin;
