import React from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import "../pages/Inicio.css"


const Inicio = () => {
  return (
    <div>
      <Navbar />
      <Banner
        image="https://res.cloudinary.com/dp7lr71t8/image/upload/v1698664674/ai-generated-8273256_1280_dspoq5.jpg"
        text="Texto sobre el Parkinson"
        
      />
      {/* Contenido específico de la vista de Inicio*/}
    </div>
  );
};

export default Inicio;