import React, { useEffect } from 'react';
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
        image="https://res.cloudinary.com/doft9ylq1/image/upload/v1700651748/Servicio_de_Ayuda_a_Domicilio_1_j1pfmk.jpg"
        title="AYUDA A DOMICILIO"
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
          evitando en la medida de lo posible trasladarse a una residencia.<br></br>
          <br></br>
          Los beneficiarios son individuos y/o familias que se hallen en situaciones en las que 
          no es posible la realización autónoma de sus actividades cotidianas de forma plena, o en 
          aquellas otras de conflicto psico-familiar. Se orienta a personas con una dependencia 
          no muy grave o, en caso de existir ésta, es decir, 
          personas encamadas y totalmente dependientes, el servicio se destina a “descargar” 
          a la familia como medida de apoyo a la misma
        </p>
      </div>
      </div>
      
    <div className="text-HelpSer">
   <h1 className="helpSer">EL SERVICIO DE AYUDA A DOMICILIO OFRECE:</h1>
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
            src="https://res.cloudinary.com/doft9ylq1/image/upload/v1700650844/auxiliarayudacab-1_k8ithw.jpg"
            alt="Imagen de mujer ayuda a domicilio"
            className="help-image0101"
          />
        </div>
        <div className="help-card">
          <img
            src="https://res.cloudinary.com/doft9ylq1/image/upload/v1700649874/viejo-paciente-que-sufre-parkinson_x4jr0p.jpg"
            alt="Imagen de hombre ayuda a domicilio "
            className="help-image"
          />
        </div>
        <div className="help-card">
          <img
            src="https://res.cloudinary.com/doft9ylq1/image/upload/v1700649859/doctor-hablando-su-paciente-mayor_zy9diy.jpg"
            alt="Imagen 2 de mujer ayuda a domicilio"
            className="help-image"
          />
        </div>
        <div className="help-card">
          <img
            src="https://res.cloudinary.com/doft9ylq1/image/upload/v1700650554/ayuda-domicilio-servicios_knrezb.jpg"
            alt="Cuidadora con su paciente desayunando"
            className="help-image"
          />
        </div>
        <div className="help-card">
          <img
            src="https://res.cloudinary.com/doft9ylq1/image/upload/v1700651128/02_Sacyr_Social_Servicio_de_Ayuda_a__lyupuy.jpg"
            alt="Cuidadora hablando con su paciente"
            className="help-image"
          />
        </div>
        <div className="help-card">
          <img
            src="https://res.cloudinary.com/doft9ylq1/image/upload/v1700651424/6778119D-941D-C9DB-B8E818511A0EBE2B_b24oly.jpg"
            alt="Cuidadora haciendo labores del hogar"
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
