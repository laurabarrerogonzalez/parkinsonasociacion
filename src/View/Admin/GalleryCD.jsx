// import * as React from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import '../Admin/GalleryCD.css';

// export default function QuiltedImageList() {
//   const [imageList, setImageList] = React.useState([]);
//   const [imageURL, setImageURL] = React.useState('');

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:3000/form', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ url: imageURL }),
//       });
//       const data = await response.json();
//       const formattedData = Array.isArray(data) ? data : [data];
//       setImageList([...imageList, ...formattedData]);
//       setImageURL('');
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const fetchImages = async () => {
//     try {
//       const response = await fetch('http://localhost:3000/form');
//       const data = await response.json();
//       setImageList(data);
//     } catch (error) {
//       console.error('Error fetching images:', error);
//     }
//   };

//   React.useEffect(() => {
//     fetchImages();
//   }, []);

//   return (
//     <div className='galleryCD'>
//       <form onSubmit={handleFormSubmit}>
//         <label>
//           Image URL:
//           <input
//             type="text"
//             name="img"
//             value={imageURL}
//             onChange={(e) => setImageURL(e.target.value)}
//           />
//         </label>
//         <button type="submit">Add Image</button>
//       </form>
//       <ImageList
//         sx={{ width: 500, height: 450 }}
//         variant="quilted"
//         cols={4}
//         rowHeight={121}
//       >
//         {imageList.map((item, index) => (
//           <ImageListItem key={index} cols={item.cols || 1} rows={item.rows || 1}>
//             <img
//               src={item.url}
//               alt={`Image ${index}`}
//               loading="lazy"
//             />
//           </ImageListItem>
//         ))}
//       </ImageList>
//     </div>
//   );
// }





import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import '../Admin/GalleryCD.css';

export default function QuiltedImageList() {
  const [imageList, setImageList] = React.useState([]);
  const [imageURL, setImageURL] = React.useState('');
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(-1);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: imageURL }),
      });
      const data = await response.json();
      const formattedData = Array.isArray(data) ? data : [data];
      setImageList([...imageList, ...formattedData]);
      setImageURL('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDelete = async () => {
    if (selectedImageIndex !== -1) {
      try {
        const idToDelete = imageList[selectedImageIndex].id; // Reemplaza 'id' con el nombre de la propiedad que identifica cada imagen
        const response = await fetch(`http://localhost:3000/form/${idToDelete}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          const updatedList = [...imageList];
          updatedList.splice(selectedImageIndex, 1);
          setImageList(updatedList);
          setSelectedImageIndex(-1);
        }
      } catch (error) {
        console.error('Error deleting image:', error);
      }
    }
  };

  const fetchImages = async () => {
    try {
      const response = await fetch('http://localhost:3000/form');
      const data = await response.json();
      setImageList(data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  React.useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className='galleryCD'>
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
        sx={{ width: 500, height: 450 }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {imageList.map((item, index) => (
          <ImageListItem
            key={index}
            cols={item.cols || 1}
            rows={item.rows || 1}
            onClick={() => setSelectedImageIndex(index)}
            className={selectedImageIndex === index ? 'selected' : ''}
          >
            <img src={item.url} alt={`Image ${index}`} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
      <button type="button" onClick={handleDelete} disabled={selectedImageIndex === -1}>
        Delete Selected Image
      </button>
    </div>
  );
}
