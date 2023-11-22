import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "../Services_/Help.css";
import BannerViews from "../../Components/BannerViews/BannerViews";
import Footer from "../../Components/Footer/Footer";
import ScrollArrow from '../../Components/ScrollArrow/ScrollArrow';
import ButtonDonate from '../../Components/ButtonDonate/ButtonDonate';

const Help = () => {
  return (
    <>
      <Navbar />
      <BannerViews
        image="https://res.cloudinary.com/doft9ylq1/image/upload/v1700469463/ayuda-a-domicilio-cabecera_b1h9ez.jpg"
        title="Ayuda a Domicilio"
      />
      <div className="containerhelp">
      <div className="titleHelp">
        <h1 className="help">AYUDA A DOMICILIO</h1>
     
      </div>

      <div>
        <p className="text-Help">
          Este servicio consiste en la prestación de una serie de atenciones de
          carácter personal, doméstico y técnico a fin de que las personas
          beneficiarias puedan seguir viviendo en su domicilio y entorno
          evitando en la medida de lo posible trasladarse a una residencia.
        </p>
      </div>
      </div>
      
    <div className="text-HelpSer">
   <h1 className="helpSer">El Servicio de Ayuda a Domicilio ofrece:</h1>
  </div>
  <div className="titleHelpSer">
         <ul>
           <li>
             <strong>Servicios relacionados con la atención<br></br>
             de las necesidades domésticas o del hogar</strong>
            </li>
            <li>
              <strong>Servicios relacionados con la atención<br></br>
              personal en la realización de las actividades<br></br> 
              de la vida diaria</strong>              
            </li>     
            <li><strong>Servicios de acompañamiento, apoyo<br></br>
              psicosocial, desarrollo de hábitos saludables<br></br>
              apoyo en tratamiento curativo y farmacológico,<br></br>
              mantenimiento de capacidades funcionales.<br></br></strong>
            </li>
             <li>
               <strong>Servicio ofrecido a nivel regional</strong>
             </li>
           </ul>
         </div>

      <div className="image-container">
        <div className="help-card">
          <img
            src="https://res.cloudinary.com/doft9ylq1/image/upload/v1700469463/ayuda-a-domicilio-cabecera_b1h9ez.jpg"
            alt="Image 1"
            className="help-image"
          />
        </div>
        <div className="help-card">
          <img
            src="https://res.cloudinary.com/doft9ylq1/image/upload/v1700469463/ayuda-a-domicilio-cabecera_b1h9ez.jpg"
            alt="Image 2"
            className="help-image"
          />
        </div>
        <div className="help-card">
          <img
            src="https://res.cloudinary.com/doft9ylq1/image/upload/v1700469463/ayuda-a-domicilio-cabecera_b1h9ez.jpg"
            alt="Image 3"
            className="help-image"
          />
        </div>
        <div className="help-card">
          <img
            src="https://res.cloudinary.com/doft9ylq1/image/upload/v1700469463/ayuda-a-domicilio-cabecera_b1h9ez.jpg"
            alt="Image 4"
            className="help-image"
          />
        </div>
      </div>

      <div class="Vibehelp">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <Footer />
      <ButtonDonate />
      <ScrollArrow/>
    </>
  );
};

export default Help;
