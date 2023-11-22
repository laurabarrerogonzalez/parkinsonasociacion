import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "../Services_/Daycarecenter.css";
import BannerViews from "../../Components/BannerViews/BannerViews";
import Footer from "../../Components/Footer/Footer";

const Daycarecenter = () => {
  return (
    <>
      <Navbar />
      <BannerViews
        image="https://res.cloudinary.com/doft9ylq1/image/upload/v1699436663/20210810_120627_1_tg9wyh.jpg"
        title="CENTRO DE DÍA"
      />
      <div className="boxDC1">
        <div className="title-Centro_dia">
          <h1>Centro de Día</h1>
        </div>

        <div className="text_DC">
          <p>
            El Centro de Día CON ALMA ofrece una atención integral durante el
            período diurno a las personas en situación de dependencia, con el
            objetivo de mantener el mayor grado de autonomía posible. Está
            dirigido a proporcionar una intervención especializada al usuario de
            manera que se contemplen y atiendan de un modo integral sus
            necesidades específicas. Las mismas se cubren desde un enfoque
            biopsicosocial con servicios de asesoramiento, rehabilitación,
            orientación para la promoción de la autonomía. en su hogar. <br></br>
          </p>
        </div>
      </div>

      <div className="boxDC2">
        <div className="title-DC">
          <h1>Actividades</h1>
        </div>

        <div className="text-centroD">
          <ul>
            <li>
              <strong>Taller nuevas tecnologías</strong>
            </li>
            <li>
              <strong>Deambulación</strong>
            </li>
            <li>
              <strong>Hortoterapia</strong>
            </li>
            <li>
              <strong>Ludoterapia</strong>
            </li>
            <li>
              <strong>Laborterapia</strong>
            </li>
            <li>
              <strong>Terapia con perros</strong>
            </li>
            <li>
              <strong>Psicomotricidad</strong>
            </li>
          </ul>
        </div>
      </div>

      <div className="image-containerCD">
        <img
          src="https://res.cloudinary.com/doft9ylq1/image/upload/v1699004873/IMG-20231025-WA0001_qku82e.jpg"
          alt="Imagen 1"
          className="activity-imageCD1"
        />
        <img
          src="https://res.cloudinary.com/doft9ylq1/image/upload/v1699005153/e96e5008-5541-4c4c-b02c-140d8e7a1183_jwxyis.jpg"
          alt="Personas desarrollando actividad"
          className="activity-imageCD2"
        />
        <img
          src="https://res.cloudinary.com/doft9ylq1/image/upload/v1699015076/20221110_114455_nsagal.jpg"
          alt="Imagen 2"
          className="activity-imageCD3"
        />
        <img
          src="https://res.cloudinary.com/doft9ylq1/image/upload/v1699015418/20200626_110630_1_qco2pi.jpg"
          alt="Imagen 2"
          className="activity-imageCD4"
        />
        <img
          src="https://res.cloudinary.com/doft9ylq1/image/upload/v1699436691/20200415_112914_iruuon.jpg"
          alt="Imagen 1"
          className="activity-imageCD5"
        />
        <img
          src="https://res.cloudinary.com/doft9ylq1/image/upload/v1699436663/20210810_120627_1_tg9wyh.jpg"
          alt=""
          className="activity-imageCD6"
        />
        <img
          src="https://res.cloudinary.com/doft9ylq1/image/upload/v1699436643/20200617_113153_zgsadh.jpg"
          alt="Imagen 2"
          className="activity-imageCD7"
        />
        <img
          src="https://res.cloudinary.com/doft9ylq1/image/upload/v1699440850/20230131_104420_1_1_chswfw.jpg"
          alt="Imagen 2"
          className="activity-imageCD8"
        />
      </div>

      <div className="boxDC3">
        <div className="Centro_dia3">
          <h1>Servicios Especializados</h1>
        </div>
        <div className="text_DC3">
          <ul>
            <li>
              <strong>Atención especializada</strong>
            </li>
            <li>
              <strong>Rehabilitación especifica:</strong>
              <br></br> Terapia ocupacional<br></br> Estimulación cognitiva
              <br></br> Fisioterapia<br></br>
            </li>
            <li>
              <strong>Asitencia en las actividades de la vida diaria</strong>
            </li>
            <li>
              <strong>Asesoramiento en materia de ayudas técnicas </strong>
            </li>
            <li>
              <strong>Sala multisensorial</strong>
            </li>
            (Estimulación sensorial)
          </ul>
        </div>
      </div>
      <div className="video-container">
        <video controls width="100%" height="auto">
          <source
            src="https://res.cloudinary.com/doft9ylq1/video/upload/v1700641777/V%C3%ADdeo_sin_t%C3%ADtulo_Hecho_con_Clipchamp_dfvw5q.mp4" // Reemplaza "URL_DEL_VIDEO" con la URL real del video
            type="video/mp4"
          />
          Tu navegador no soporta el tag de video.
        </video>
      </div>
      <Footer />
    </>
  );
};

export default Daycarecenter;