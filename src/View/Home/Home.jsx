import React from 'react';
import "../Home/Home.css"
import Banner from '../../Components/Banner/Banner';
import Navbar from '../../Components/Navbar/Navbar';


const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner
        image="https://res.cloudinary.com/dp7lr71t8/image/upload/v1698705642/CALENDARIO_2024_mural_btrnac.png"
        text="Trazando juntos un camino de superación: Acompañando la lucha contra el Parkinson con determinación y esperanza."
        
      />
      {/* Contenido específico de la vista de Home*/}
    </div>
  );
};

export default Home;
