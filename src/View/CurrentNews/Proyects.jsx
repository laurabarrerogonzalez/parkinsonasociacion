import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import BannerViews from "../../Components/BannerViews/BannerViews";
import Footer from "../../Components/Footer/Footer";
import "./Proyects.css";

const Proyects = () => {
  const [cardInfo1, setCardInfo1] = useState({
    title: "Imagen Fiel",
    description:
      "Imagen Fiel es un proyecto que nace con el fin de combatir la estigmatización y el rechazo social de las personas afectadas de Parkinson, llevando a la población general información con la finalidad de conseguir una imagen fiel de las personas con Parkinson.",
    backgroundColor: "linear-gradient(to bottom, #c3e6ec, #a7d1d9)",
  });

  const [cardInfo2, setCardInfo2] = useState({
    title: "Lo llevamos a cabo a través de:",
    description: (
      <>
        <ul>
          <li>Formación</li>
          <li>Difusión</li>
          <li>Sensibilización</li>
          <br></br>
          En la Comunidad Aútonoma de Extremadura
        </ul>
      </>
    ),
    backgroundColor: "linear-gradient(to bottom, #ffd700, #ffc700)",
  });

  const cambiarInformacion1 = () => {
    setCardInfo1({
      title: "Objetivos",
      description:
        "Sensibilizar y formar a la población sobre la discapacidad que puede llegar a generar la enfermedad de Parkinson con el fin de desmitificar la sintomatología y evitar estigmatizar a este tipo de personas con discapacidad facilitando su integración.",
      backgroundColor: "linear-gradient(to bottom, #ffd700, #ffc700)",
    });
  };

  const restablecerInformacion1 = () => {
    setCardInfo1({
      title: "Imagen Fiel",
      description:
        "Imagen Fiel es un proyecto que nace con el fin de combatir la estigmatización y el rechazo social de las personas afectadas de Parkinson, llevando a la población general información con la finalidad de conseguir una imagen fiel de las personas con Parkinson.",
      backgroundColor: "linear-gradient(to bottom, #c3e6ec, #a7d1d9)",
    });
  };

  const cambiarInformacion2 = () => {
    setCardInfo2({
      title: "Actividades",
      description: (
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing, elit placerat
            condimentum ultrices proin dignissim, maecenas libero ac mus augue,
            nascetur mattis netus sem dictumst. <br></br>{" "}
          </p>
          <h4>Más info en:</h4>
          <img
            src="https://res.cloudinary.com/doft9ylq1/image/upload/v1700214140/QRPARKINSON_Mesa_de_trabajo_1_sfwufy.png"
            alt="Imagen de actividades"
            style={{ width: "100px", height: "100px", marginTop: "10px" }}
          />
        </>
      ),
      backgroundColor: "linear-gradient(to bottom, #ff7e5f, #ff3030)",
    });
  };
  const restablecerInformacion2 = () => {
    setCardInfo2({
      title: "Lo llevamos a cabo a través de:",
      description: (
        <>
          <ul>
            <li>Formación</li>
            <li>Difusión</li>
            <li>Sensibilización</li>
            <br></br>
            En la Comunidad Aútonoma de Extremadura
          </ul>
        </>
      ),
      backgroundColor: "linear-gradient(to bottom, #ffd700, #ffc700)",
    });
  };

  return (
    <>
      <Navbar />
      <BannerViews
        image="https://res.cloudinary.com/doft9ylq1/image/upload/v1700477762/vista-lateral-manos-pegadas-post-it-amarillo_mhiptp.jpg"
        title="PROYECTOS"
      />
      <div className="boxPr1">
        <div className="title-Proyectos">
          <h1>PROYECTOS</h1>
        </div>
      </div>

      <div className="project-container">
        <div className="cardPR" onMouseEnter={cambiarInformacion1}>
          <p className="card-titlePR">{cardInfo1.title}</p>
          <p className="small-desc">{cardInfo1.description}</p>
          <div className="go-cornerPR" onClick={restablecerInformacion1}></div>
        </div>

        <div className="project-image">
          <img
            src="https://res.cloudinary.com/doft9ylq1/image/upload/v1700135203/parkinsonimg-01_cfajxy.png"
            alt="Project Image"
            style={{
              width: "300px",
              height: "320px",
              borderRadius: "10px",
              backgroundColor: "#f9d4b4",
            }}
          />
        </div>

        <div className="cardPR" onMouseEnter={cambiarInformacion2}>
          <p className="card-titlePR">{cardInfo2.title}</p>
          <p className="small-desc">{cardInfo2.description}</p>
          <div className="go-cornerPR" onClick={restablecerInformacion2}></div>
        </div>

        <div className="project-image">
          <img
            src="https://res.cloudinary.com/doft9ylq1/image/upload/v1700135203/parkinsonimg-01_cfajxy.png"
            alt="Project Image 2"
            style={{
              width: "300px",
              height: "320px",
              borderRadius: "10px",
              backgroundColor: "#f9d4b4",
            }}
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Proyects;
