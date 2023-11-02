import React from "react";
import "../Find us/Find us.css"
import Banner from '../../Components/Banner/Banner';
import Navbar from "../../Components/Navbar/Navbar";

  

const Find = () => {
  return (
    <div className="photobanner">
      <Navbar />
      <div className="question1">
        <h1 className="textQ">¿DÓNDE TRABAJAMOS?</h1>
      </div>

      <div className="social-band">
        <div className="left-side">
          <h2>Síguenos en redes sociales</h2>
        </div>
        <div className="right-side">
          {/* Agrega los logotipos de las redes sociales aquí */}
          <img src="facebook.png" alt="Facebook" />
          <img src="twitter.png" alt="Twitter" />
          {/* Agrega los logotipos de otras redes sociales aquí */}
        </div>
        <div className="triangle"></div>
      </div>
    </div>
  );
};

export default Find;





