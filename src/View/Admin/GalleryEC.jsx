import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "../Admin/GalleryEC.css"; // Puedes crear un archivo CSS separado para esta galería si es necesario
import '../CurrentNews/Activities.css';
import AdminNavbar from "../../Components/AdminNavbar/AdminNavbar";
import Footer from "../../Components/Footer/Footer";

const GalleryEC = () => {
  const [imageListEC, setImageListEC] = React.useState([]); // Cambia el nombre de la lista de imágenes
  const [selectedImageIndexEC, setSelectedImageIndexEC] = React.useState(-1); // Cambia el nombre del estado del índice seleccionado
  const [imageURL, setImageURL] = React.useState(""); // Estado para la URL de la imagen a agregar

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://localhost:7165/api/gallery2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: imageURL }),
      });
      const data = await response.json();
      setImageListEC([...imageListEC, data]);
      setImageURL("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDelete = async () => {
    if (selectedImageIndexEC !== -1 && imageListEC[selectedImageIndexEC]?.id_gallery2 !== undefined) {
      try {
        const idToDelete = imageListEC[selectedImageIndexEC].id_gallery2;
        const response = await fetch(
          `https://localhost:7165/api/gallery2/${idToDelete}`,
          {
            method: "DELETE",
          }
        );
        if (response.ok) {
          const updatedList = [...imageListEC];
          updatedList.splice(selectedImageIndexEC, 1);
          setImageListEC(updatedList);
          setSelectedImageIndexEC(-1);
        }
      } catch (error) {
        console.error("Error deleting image:", error);
      }
    }
  };

  const fetchImages = async () => {
    try {
      const response = await fetch("https://localhost:7165/api/gallery2");
      const data = await response.json();
      setImageListEC(data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  React.useEffect(() => {
    fetchImages();
  }, []);

  return (
    <>
      <AdminNavbar />
      <div className="galleryEC">
        <form onSubmit={handleFormSubmit}>
          <label>
            Image URL:
            <input
              type="text"
              name="img"
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
            />
          </label>
          <button type="submit">Add Image</button>
        </form>

        <ImageList
          sx={{
            width: 500,
            height: "auto",
            maxHeight: 400,
            overflowY: "auto",
          }}
          variant="quilted"
          cols={2}
          rowHeight={200}
          className="custom-image-list"
        >
          {imageListEC.map((item, index) => (
            <ImageListItem
              key={index}
              cols={item.cols || 1}
              rows={item.rows || 1}
              onClick={() => setSelectedImageIndexEC(index)}
              className={selectedImageIndexEC === index ? "selected" : ""}
            >
              <img src={item.url} alt={`Image ${index}`} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
        <button
          type="button"
          onClick={handleDelete}
          disabled={selectedImageIndexEC === -1}
        >
          Delete Selected Image
        </button>
      </div>

      <Footer/>
    </>
  );
};

export default GalleryEC;
