// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import BannerViews from "../../Components/BannerViews/BannerViews";
// import '../Admin/NewsAdmin.css';

// const NewsAdmin = () => {
//   const [link, setLink] = useState("");
//   const [title, setTitle] = useState("");
//   const [thumbnail, setThumbnail] = useState("");
//   const [newsList, setNewsList] = useState([]);
//   const [selectedNews, setSelectedNews] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await axios.get("https://localhost:7165/api/News");
//         setNewsList(response.data);
//       } catch (error) {
//         console.error("Error al obtener las noticias:", error);
//       }
//     };

//     fetchNews();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("https://localhost:7165/api/News", {
//         link,
//         title,
//         thumbnail,
//       });
//       console.log("Noticia agregada:", response.data);
//       setLink("");
//       setTitle("");
//       setThumbnail("");
//     } catch (error) {
//       console.error("Error al agregar la noticia:", error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       const response = await axios.delete(`https://localhost:7165/api/News/${id}`);
//       console.log("Noticia eliminada:", response.data);
//       // Actualizar la lista después de eliminar
//       setNewsList(newsList.filter((news) => news.id !== id));
//     } catch (error) {
//       console.error("Error al eliminar la noticia:", error);
//     }
//   };

//   const handleUpdate = async (id_News, updatedData) => {
//     try {
//       const response = await axios.put(`https://localhost:7165/api/News/${id_News}`, updatedData);
//       console.log("Noticia actualizada:", response.data);
//       // Actualizar la lista después de actualizar
//       setNewsList(newsList.map((news) => (news.id === id ? response.data : news)));
//       closeModal();
//     } catch (error) {
//       console.error("Error al actualizar la noticia:", error);
//     }
//   };

//   const openModal = (news) => {
//     setSelectedNews(news);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setSelectedNews(null);
//     setIsModalOpen(false);
//   };

//   const updateSelectedNews = (field, value) => {
//     setSelectedNews({
//       ...selectedNews,
//       [field]: value,
//     });
//   };


//   return (
// <>
// <BannerViews
//         image="https://res.cloudinary.com/da7ffijqs/image/upload/t_Banner 16:9/v1699001271/20200415_111209_1_iacccg.jpg "
//         title="¿Quieres ser socio?"
//       />

//     <form onSubmit={handleSubmit}>
//       <label>
//         Enlace de la noticia:
//         <input
//           type="text"
//           value={link}
//           onChange={(e) => setLink(e.target.value)}
//         />
//       </label>
//       <label>
//         Título de la noticia:
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//       </label>
//       <label>
//         URL de la miniatura:
//         <input
//           type="text"
//           value={thumbnail}
//           onChange={(e) => setThumbnail(e.target.value)}
//         />
//       </label>
//       <button type="submit">Agregar Noticia</button>
//     </form>






//     {newsList.map((news, index) => (
//         <div className="news-item" key={index}>
//           <a href={news.link} className="thumbnail-link">
//             <img src={news.thumbnail} alt="Thumbnail" className="thumbnail" />
//           </a>
//           <h3 className="titlea">{news.title}</h3>
//           <button onClick={() => handleDelete(news.id)}>Eliminar</button>
//           <button onClick={() => openModal(news)}>Editar</button>
//         </div>
//       ))}

//       {/* Modal para editar la noticia */}
//       {isModalOpen && selectedNews && (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close" onClick={closeModal}>
//               &times;
//             </span>
//             <h2>Editar Noticia</h2>
//             <label>
//               Enlace de la noticia:
//               <input
//                 type="text"
//                 value={selectedNews.link}
//                 onChange={(e) => updateSelectedNews('link', e.target.value)}
//               />
//             </label>
//             <label>
//               Título de la noticia:
//               <input
//                 type="text"
//                 value={selectedNews.title}
//                 onChange={(e) => updateSelectedNews('title', e.target.value)}
//               />
//             </label>
//             <label>
//               URL de la miniatura:
//               <input
//                 type="text"
//                 value={selectedNews.thumbnail}
//                 onChange={(e) => updateSelectedNews('thumbnail', e.target.value)}
//               />
//             </label>
//             <button onClick={() => handleUpdate(selectedNews.id, selectedNews)}>
//               Guardar Cambios
//             </button>
//           </div>
//         </div>
//       )}



// </>





    
//   );
// };

// export default NewsAdmin;








import React, { useState, useEffect } from "react";
import axios from "axios";
import BannerViews from "../../Components/BannerViews/BannerViews";
import '../Admin/NewsAdmin.css';

const NewsAdmin = () => {
  const [link, setLink] = useState("");
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [newsList, setNewsList] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://localhost:7165/api/News", {
        link,
        title,
        thumbnail,
      });
      console.log("Noticia agregada:", response.data);
      setLink("");
      setTitle("");
      setThumbnail("");
    } catch (error) {
      console.error("Error al agregar la noticia:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`https://localhost:7165/api/News/${id}`);
      console.log("Noticia eliminada:", response.data);
      setNewsList(newsList.filter((news) => news.id !== id));
    } catch (error) {
      console.error("Error al eliminar la noticia:", error);
    }
  };

  const handleUpdate = async (id_News, updatedData) => {
    try {
      const response = await axios.put(`https://localhost:7165/api/News/${id_News}`, updatedData);
      console.log("Noticia actualizada:", response.data);
      const updatedList = newsList.map((news) => (news.id === id_News ? response.data : news));
      setNewsList(updatedList);
      closeModal();
    } catch (error) {
      console.error("Error al actualizar la noticia:", error);
    }
  };

  const openModal = (news) => {
    setSelectedNews(news);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedNews(null);
    setIsModalOpen(false);
  };

  const updateSelectedNews = (field, value) => {
    setSelectedNews({
      ...selectedNews,
      [field]: value,
    });
  };


  return (
    <>
      <BannerViews
        image="https://res.cloudinary.com/da7ffijqs/image/upload/t_Banner 16:9/v1699001271/20200415_111209_1_iacccg.jpg"
        title="¿Quieres ser socio?"
      />

      <form onSubmit={handleSubmit}>
        <label>
          Enlace de la noticia:
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </label>
        <label>
          Título de la noticia:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          URL de la miniatura:
          <input
            type="text"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
          />
        </label>
        <button type="submit">Agregar Noticia</button>
      </form>

      {newsList.map((news, index) => (
        <div className="news-item" key={index}>
          <a href={news.link} className="thumbnail-link">
            <img src={news.thumbnail} alt="Thumbnail" className="thumbnail" />
          </a>
          <h3 className="titlea">{news.title}</h3>
          <button onClick={() => handleDelete(news.id_News)}>Eliminar</button>
          <button onClick={() => openModal(news)}>Editar</button>
        </div>
      ))}

      {isModalOpen && selectedNews && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Editar Noticia</h2>
            <label>
              Enlace de la noticia:
              <input
                type="text"
                value={selectedNews.link}
                onChange={(e) => updateSelectedNews('link', e.target.value)}
              />
            </label>
            <label>
              Título de la noticia:
              <input
                type="text"
                value={selectedNews.title}
                onChange={(e) => updateSelectedNews('title', e.target.value)}
              />
            </label>
            <label>
              URL de la miniatura:
              <input
                type="text"
                value={selectedNews.thumbnail}
                onChange={(e) => updateSelectedNews('thumbnail', e.target.value)}
              />
            </label>
            <button onClick={() => handleUpdate(selectedNews.id_News, selectedNews)}>
              Guardar Cambios
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsAdmin;
