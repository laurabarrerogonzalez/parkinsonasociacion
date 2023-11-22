import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Admin/NewsAdmin.css";
import AdminNavbar from "../../Components/AdminNavbar/AdminNavbar";
import Footer from "../../Components/Footer/Footer";

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

      setLink("");
      setTitle("");
      setThumbnail("");

      setNewsList([...newsList, response.data]);
    } catch (error) {
      console.error("Error al agregar la noticia:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://localhost:7165/api/News/${id}`);
      // Después de eliminar, realizar una nueva solicitud GET para obtener las noticias actualizadas
      const response = await axios.get("https://localhost:7165/api/News");
      setNewsList(response.data);
    } catch (error) {
      console.error("Error al eliminar la noticia:", error);
    }
  };

  const handleUpdate = async (id_News, updatedData) => {
    try {
      const response = await axios.put(
        `https://localhost:7165/api/News/${id_News}`,
        updatedData
      );

      // Después de actualizar, realizar una nueva solicitud GET para obtener las noticias actualizadas
      const updatedResponse = await axios.get(
        "https://localhost:7165/api/News"
      );
      setNewsList(updatedResponse.data);

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
            <label className="labelnews">
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
              <a href={news.link} className="thumbnail-link">
                <img
                  src={news.thumbnail}
                  alt="Thumbnail"
                  className="thumbnail"
                />
              </a>
              <h3 className="titlea">{news.title}</h3>
              <button className="buton-deletenews" onClick={() => handleDelete(news.id_News)}>
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

      <Footer/>
    </>
  );
};

export default NewsAdmin;
