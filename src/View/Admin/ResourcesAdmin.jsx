// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "../Admin/ResourcesAdmin.css";

// const ResourcesAdmin = () => {
//   const [file, setFile] = useState(null);
//   const [pdfList, setPdfList] = useState([]);

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const handleSubmit = async () => {
//     try {
//       const formData = new FormData();
//       formData.append("pdfFile", file);

//       await axios.post("http://localhost:3000/form", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       // Lógica adicional después de enviar el archivo

//       // Actualizar la lista de PDF después de subir un nuevo archivo
//       fetchPdfList();
//     } catch (error) {
//       console.error("Error al subir el archivo:", error);
//     }
//   };

//   const fetchPdfList = async () => {
//     try {
//       const response = await axios.get("http://localhost:3000/form");
//       setPdfList(response.data); // Suponiendo que la respuesta contiene una lista de los nombres de los archivos PDF
//     } catch (error) {
//       console.error("Error al obtener la lista de PDF:", error);
//     }
//   };

//   useEffect(() => {
//     fetchPdfList();
//   }, []); // Se ejecuta una vez al cargar el componente

//   return (
//         <div className="resource">
//           <div className="pdf-list">
//             <h2>Lista de PDF:</h2>
//             <ul>
//             {pdfList.map((pdf, index) => (
//   <li key={index}>
//     <a href={`http://localhost:3000/fakeapi/pdf/${pdf}`} target="_blank" rel="noopener noreferrer">
//       Ver PDF {index + 1}
//     </a>
//   </li>
// ))}
//             </ul>
//           </div>
//           <div>
//             <input type="file" onChange={handleFileChange} />
//             <button onClick={handleSubmit}>Subir PDF</button>
//           </div>
//         </div>
//       );
      
    
 
// };

// export default ResourcesAdmin;







// import "../Admin/ResourcesAdmin.css";
// import React, { useState, useEffect } from "react";

// const ResourcesAdmin = () => {
//   const [file, setFile] = useState(null);
//   const [pdfList, setPdfList] = useState([]);

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const generateRandomFileName = () => {
//     const names = ["DocumentA.pdf", "ReportB.pdf", "GuideC.pdf"]; // Nombres predefinidos
//     const randomIndex = Math.floor(Math.random() * names.length);
//     return names[randomIndex];
//   };

//   const handleSubmit = async () => {
//     try {
//       // Simulación de subida de archivo a la "API" (localmente)
//       const uploadedFile = {
//         name: file ? file.name : generateRandomFileName(), // Si no se selecciona un archivo, se genera un nombre aleatorio
//         id: Date.now(), // Simulando un ID para el archivo
//       };

//       setPdfList([...pdfList, uploadedFile]);
//     } catch (error) {
//       console.error("Error al subir el archivo:", error);
//     }
//   };

//   useEffect(() => {
//     // Simulación de obtener la lista de archivos de la "API" (localmente)
//     const fakePdfList = [
//       { name: "Ejemplo1.pdf", id: 1 },
//       { name: "Ejemplo2.pdf", id: 2 },
//       { name: "Ejemplo3.pdf", id: 3 },
//     ];
//     setPdfList(fakePdfList);
//   }, []);

//   return (
//     // <div className="resource">
//     //   <div className="pdf-list">
//     //     <h2>Lista de PDF:</h2>
//     //     <ul>
//     //       {pdfList.map((pdf, index) => (
//     //         <li key={pdf.id}>
//     //           <a
//     //             href={`http://localhost:3000/fakeapi/pdf/${pdf.name}`}
//     //             target="_blank"
//     //             rel="noopener noreferrer"
//     //           >
//     //             Ver PDF {index + 1}
//     //           </a>
//     //         </li>
//     //       ))}
//     //     </ul>
//     //   </div>
//     //   <div>
//     //     <input type="file" onChange={handleFileChange} />
//     //     <button onClick={handleSubmit}>Subir PDF</button>
//     //   </div>
//     // </div>
//     <h1>Hola</h1>
//   );
// };

// export default ResourcesAdmin;
