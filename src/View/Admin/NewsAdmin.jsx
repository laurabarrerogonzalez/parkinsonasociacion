import React, { useState, useEffect } from "react";
import axios from "axios"; // Asegúrate de tener axios instalado
import BannerViews from "../../Components/BannerViews/BannerViews";
import '../Admin/NewsAdmin.css';



const NewsAdmin = () => {
  const [link, setLink] = useState("");
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    // Realizar la solicitud GET al servidor para obtener las noticias
    const fetchNews = async () => {
      try {
        const response = await axios.get("http://localhost:3000/form"); // Cambia la URL a tu ruta de noticias
        setNewsList(response.data); // Almacena las noticias en el estado
      } catch (error) {
        console.error("Error al obtener las noticias:", error);
      }
    };

    fetchNews(); // Llama a la función para obtener las noticias al cargar el componente
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Aquí realizarías la solicitud POST al servidor para guardar la noticia
    try {
      const response = await axios.post("http://localhost:3000/form", {
        link,
        title,
        thumbnail,
      });
      console.log("Noticia agregada:", response.data);
      // Puedes hacer alguna acción adicional luego de agregar la noticia
    } catch (error) {
      console.error("Error al agregar la noticia:", error);
    }
  };


  return (
<>
<BannerViews
        image="https://res.cloudinary.com/da7ffijqs/image/upload/t_Banner 16:9/v1699001271/20200415_111209_1_iacccg.jpg "
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







    <div>
  <h2>Noticias</h2>
  {newsList.map((news, index) => (
    <div className="news-item" key={index}>
      <a href={news.link} className="thumbnail-link">
      <img src={news.thumbnail} alt="Thumbnail" className="thumbnail" />
      </a>
      <h3 className="title">{news.title}</h3>
      {/* <a href={news.link} className="link">Ver más</a> */}
    </div>
  ))}
</div> 




</>





    
  );
};

export default NewsAdmin;
