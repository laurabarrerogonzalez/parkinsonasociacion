// import React, { useState, useEffect } from "react";
// import { Worker, Viewer } from "@react-pdf-viewer/core";
// import "@react-pdf-viewer/core/lib/styles/index.css";
// import { pdfjs } from "react-pdf";
// import "./Resources.css";
// import BannerViews from "../../Components/BannerViews/BannerViews";

// const Resources = () => {
//   const [files, setFiles] = useState({});
//   const [selectedFileIndex, setSelectedFileIndex] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:3000/files")
//       .then((response) => response.json())
//       .then((data) => setFiles(data));
//   }, []);

//   const handleFileChange = (event) => {
//     const selectedFiles = event.target.files;
//     const formData = new FormData();

//     Array.from(selectedFiles).forEach((file) => {
//       formData.append("files", file);
//     });

//     fetch("http://localhost:3000/files", {
//       method: "POST",
//       body: formData,
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setFiles(data);
//         window.location.reload();
//       });
//   };

//   const handleRemoveFile = (id) => {
//     fetch(`http://localhost:3000/files/${id}`, {
//       method: "DELETE",
//     })
//       .then(() => setFiles((prevFiles) => prevFiles.filter((file) => file.id !== id)))
//       .then(() => setSelectedFileIndex(null));
//   };

//   const handleFileClick = (index) => {
//     setSelectedFileIndex((prevIndex) => (prevIndex === index ? null : index));
//   };

//   const { name, url, content } = files;
//   return (
//     <>
//       <BannerViews
//         image="https://res.cloudinary.com/da7ffijqs/image/upload/t_Banner 16:9/v1699001271/20200415_111209_1_iacccg.jpg "
//         title="¿Quieres ser socio?"
//       />
//     <div className="resources-container">
//       <div className="file-upload-section">
//         <h2>Subir Archivos PDF</h2>
//         <input
//           type="file"
//           accept=".pdf"
//           multiple
//           onChange={handleFileChange}
//         />
//         {files.map((file, index) => (
//           <div
//             key={index}
//             className={`file-preview ${index === selectedFileIndex ? "selected" : ""}`}
//             onClick={() => handleFileClick(index)}
//           >
//             <h3>{file.name}</h3>
//             <p>Enlace: {file.url}</p>
//             <p>Contenido: {file.content}</p>
//             {index === selectedFileIndex ? (
//               <div className="pdf-viewer-container">
//                 <Worker
//                   workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}
//                 >
//                   <Viewer fileUrl={file.url} defaultScale={1.5} />
//                 </Worker>
//               </div>
//             ) : null}
//             <button onClick={() => handleRemoveFile(file.id)}>
//               Eliminar
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//     </>
//   );
// };

// export default Resources;

import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import BannerViews from "../../Components/BannerViews/BannerViews";
import "./Resources.css";

const Resources = () => {
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

    const newData = await fetch("http://localhost:3000/files").then((response) => response.json());
    setFiles(newData);

    setSelectedFileIndex(null);
  };

  const handleFileClick = (index) => {
    setSelectedFileIndex((prevIndex) => (prevIndex === index ? null : index));
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
          <h2>Subir Enlaces a Archivos</h2>
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
              className={`file-preview ${index === selectedFileIndex ? "selected" : ""}`}
              onClick={() => handleFileClick(index)}
            >
              <h3>{file.name}</h3>
              {index === selectedFileIndex ? (
                <div className="file-viewer-container">
                  <iframe title={`file-viewer-${index}`} src={file.url} frameBorder="0" width="100%" height="500px" />
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
