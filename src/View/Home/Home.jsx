import React from 'react';
import "../Home/Home.css"
import Banner from '../../Components/Banner/Banner';
import Navbar from '../../Components/Navbar/Navbar';


const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner
        image="https://res.cloudinary.com/dp7lr71t8/image/upload/v1698743700/CALENDARIO_2024png_ysfcbp.png"
        text="Trazando juntos un camino de superación: Acompañando la lucha contra el Parkinson con determinación y esperanza."
      />

      <div className='section_title'>
        <div className='title_home'>
          <h1>La fuerza de un corazón, <br />
            la esperanza de un mañana:</h1>
            <br />
            <p>"Abrazando el Parkinson con amor y valentía."</p>
        </div>
        <div className='title_hometwo'>
          <p>"Enfrentando el Parkinson con valentía, cada día es un paso hacia la fortaleza. Tu determinación es tu mayor poder. ¡Sigamos adelante juntos!</p>

        </div>
      </div>
      {/* Contenido específico de la vista de Home*/}
    </div>

  );
};

export default Home;
