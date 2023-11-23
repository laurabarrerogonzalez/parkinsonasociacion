import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Admin/NewsAdmin.css";
import AdminNavbar from "../../Components/AdminNavbar/AdminNavbar";
import Footer from "../../Components/Footer/Footer";

const NewsAdmin = () => {
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
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
        description,
        thumbnail,
      });

      setLink("");
      setTitle("");
      setDescription("");
      setThumbnail("");

      setNewsList([...newsList, response.data]);
      swal.fire({
        title: "Enviado",
        text: "La noticia ha sido añadida.",
        icon: "success",
        confirmButtonColor: "rgb(236, 117, 14)",
      });
    } catch (error) {
      console.error("Error al agregar la noticia:", error);
      swal.fire({
        title: "Error",
        text: "Hubo un error al subir la noticia.",
        icon: "error",
        confirmButtonColor: "rgb(236, 117, 14)",
      });
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://localhost:7165/api/News/${id}`);
    
      const response = await axios.get("https://localhost:7165/api/News");
      setNewsList(response.data);
      swal.fire({
        title: "Eliminado",
        text: "La noticia ha sido eliminada correctamente.",
        icon: "success",
        confirmButtonColor: "rgb(236, 117, 14)",
      });
    } catch (error) {
      console.error("Error al eliminar la noticia:", error);
      swal.fire({
        title: "Error",
        text: "Hubo un error al eliminar la noticia.",
        icon: "error",
        confirmButtonColor: "rgb(236, 117, 14)",
      });
    }
  };

  const handleUpdate = async (id_News, updatedData) => {
    try {
      const response = await axios.put(
        `https://localhost:7165/api/News/${id_News}`,
        updatedData
      );

    
      const updatedResponse = await axios.get(
        "https://localhost:7165/api/News"
      );
      setNewsList(updatedResponse.data);

      closeModal();
      swal.fire({
        title: "Enviado",
        text: "La noticia ha sido modificada.",
        icon: "success",
        confirmButtonColor: "rgb(236, 117, 14)",
      });
    } catch (error) {
      console.error("Error al actualizar la noticia:", error);
      swal.fire({
        title: "Error",
        text: "Hubo un error al modificar la noticia.",
        icon: "error",
        confirmButtonColor: "rgb(236, 117, 14)",
      });
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
      <AdminNavbar />
      <div className="newsadmin">
        <div className="form-newsadmin">
          <form onSubmit={handleSubmit}>
            <label className="labelnews">
              Enlace de la noticia:
              <input className="inputlink"
                type="text"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </label>
            <label className="labelnews">
              Título de la noticia:
              <input className="inputtitle"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                margin: "10px 0",
                fontWeight: "bold",
              }}
            >
              Insertar texto:
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{
                  marginLeft: "10px",
                  padding: "5px",
                  height: "auto",
                  resize: "vertical",
                  width: "475px",
                }}
                rows="4"
              />
            </label>
            <label>
              URL de la miniatura:
              <input className="inputurl"
                type="text"
                value={thumbnail}
                onChange={(e) => setThumbnail(e.target.value)}
              />
            </label>
            <button className="button-addnews" type="submit">Agregar Noticia</button>
          </form>
        </div>

        <div className="news-container">
          {newsList.map((news, index) => (
            <div className="news-item" key={index}>
              <img src={news.thumbnail} alt="Thumbnail" className="thumbnail" />
              <a href={news.link} className="thumbnail-link">
                <h3 className="titlea">{news.title}</h3>
              </a>
              <p className="titlea">{news.description}</p>
              <button onClick={() => handleDelete(news.id_News)}>
                Eliminar
              </button>
              <button className="buton-editnews" onClick={() => openModal(news)}>Editar</button>
            </div>
          ))}
        </div>

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
                  onChange={(e) => updateSelectedNews("link", e.target.value)}
                />
              </label>
              <label>
                Título de la noticia:
                <input
                  type="text"
                  value={selectedNews.title}
                  onChange={(e) => updateSelectedNews("title", e.target.value)}
                />
              </label>
              <label>
                Título de la noticia:
                <input
                  type="text"
                  value={selectedNews.description}
                  onChange={(e) =>
                    updateSelectedNews("description", e.target.value)
                  }
                />
              </label>
              <label>
                URL de la miniatura:
                <input
                  type="text"
                  value={selectedNews.thumbnail}
                  onChange={(e) =>
                    updateSelectedNews("thumbnail", e.target.value)
                  }
                />
              </label>
              <button
                onClick={() => handleUpdate(selectedNews.id_News, selectedNews)}
              >
                Guardar Cambios
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default NewsAdmin;
