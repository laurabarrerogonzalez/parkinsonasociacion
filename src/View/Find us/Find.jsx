import React from "react";
import "../Find us/Find.css"
import Navbar from "../../Components/Navbar/Navbar";
import BannerViews from "../../Components/BannerViews/BannerViews";
import Footer from '../../Components/Footer/Footer';

  

const Find = () => {
  return (
    <>
      <div>
        <Navbar />
        <BannerViews
          image="https://res.cloudinary.com/doft9ylq1/image/upload/v1698914683/pareja-blanca-wanderlust_1_njqb3r.jpg"
          title="DÓNDE TRABAJAMOS"
        />
      </div>

      <div className="social-band">
        <div className="left-side">
          <h2>Síguenos en redes sociales</h2>
        </div>
        <div className="right-side">
          <a href="https://m.facebook.com/p/Asociaci%C3%B3n-Regional-Parkinson-Extremadura-100083410775324/" target="_blank" rel="noopener noreferrer">
            <img src="https://res.cloudinary.com/doft9ylq1/image/upload/v1698930197/Facebook_blancof_Mesa_de_trabajo_1_hqp4sl.png" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/parkinsonex/" target="_blank" rel="noopener noreferrer">
            <img src="https://res.cloudinary.com/doft9ylq1/image/upload/v1698930182/IgF_Mesa_de_trabajo_1_waifsm.png" alt="Instagram" />
          </a>
        </div>
        <div className="triangleF"></div>
      </div>

      <div className="lower-band">
        <div className="lower-left-side">
          <h2 className="lower-title">FECHAS IMPORTANTES</h2>
        </div>
        <div className="lower-right-side">
          <a href="URL-DE-ICONO" target="_blank" rel="noopener noreferrer">
            <img src="https://res.cloudinary.com/doft9ylq1/image/upload/v1698934696/calendario_con_color_Mesa_de_trabajo_1_nucd0r.png" alt="Icono" className="icon" />
          </a>
        </div>
        <div className="lower-triangle"></div>
      </div>

      <Footer />
    </>
  );
};




export default Find;





