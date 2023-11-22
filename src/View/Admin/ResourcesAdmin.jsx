import React, { useState, useEffect } from "react";
import swal from "sweetalert2";
import axios from "axios";
import "./ResourcesAdmin.css";
import AdminNavbar from "../../Components/AdminNavbar/AdminNavbar";
import Footer from "../../Components/Footer/Footer";

const ResourcesAdmin = () => {
  const [files, setFiles] = useState([]);
  const [selectedFileIndex, setSelectedFileIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    url: "",
  });

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      const response = await fetch(
        "https://localhost:7165/ResourcesControllers/GetResources"
      );
      const data = await response.json();
      setFiles(data);
    } catch (error) {
      console.error("Error fetching resources:", error);
    }
  };

  const handleInputChange = (event, fieldName) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: event.target.value,
    }));
  };

  const handleFileAdd = async () => {
    try {
      const response = await fetch(
        "https://localhost:7165/ResourcesControllers/Post",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.status === 200) {
        swal.fire({
          title: "Enviado",
          text: "La información ha sido enviada.",
          icon: "success",
          confirmButtonColor: "rgb(236, 117, 14)",
        });

        fetchResources();

        // Restablecer los campos del formulario después de enviar los datos
        setFormData({
          name: "",
          url: "",
        });
      } else {
        throw new Error("Error al enviar los datos");
      }
    } catch (error) {
      console.error("Error:", error);
      swal.fire({
        title: "Error",
        text: "Hubo un error al enviar la información.",
        icon: "error",
        confirmButtonColor: "rgb(236, 117, 14)",
      });
    }
  };

  const handleDeleteResources = async (name) => {
    try {
      await axios.delete(
        `https://localhost:7165/ResourcesControllers/DeleteResources?name=${name}`
      );
  
      // Actualizar la lista de recursos después de eliminar
      fetchResources();
  
      swal.fire({
        title: "Eliminado",
        text: "El recurso ha sido eliminado correctamente.",
        icon: "success",
        confirmButtonColor: "rgb(236, 117, 14)",
      });
    } catch (error) {
      console.error("Error al eliminar el recurso:", error);
      swal.fire({
        title: "Error",
        text: "Hubo un error al eliminar el recurso.",
        icon: "error",
        confirmButtonColor: "rgb(236, 117, 14)",
      });
    }
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
              value={formData.url}
              onChange={(e) => handleInputChange(e, "url")}
            />
            <input
              type="text"
              placeholder="Ingrese el título"
              value={formData.name}
              onChange={(e) => handleInputChange(e, "name")}
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
              <button
                className="button222"
                onClick={() => handleDeleteResources(file.name)} 
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default ResourcesAdmin;
