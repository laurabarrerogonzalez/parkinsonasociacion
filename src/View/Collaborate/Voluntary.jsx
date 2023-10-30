import "./Voluntary.css";
import React from "react";
import Navbar from "../../Components/Navbar/Navbar";

const Voluntary = () => {
  return (
    <>
      <Navbar />
      <div className="photos">
        <div className="question">
          <h1 className="text">¿QUIERES SER VOLUNTARIO?</h1>
        </div>
        <div className="box1">
          <div className="text1">
            <h1>Objetivos</h1>
          </div>
          <div className="text2">
            <h2>
              Mejorar la calidad de vida de las personas afectadas por la
              enfermedad de Parkinson y a sus familiares. Promoción del
              voluntariado social y fomento de accuiones y actividades de
              interés general de naturaleza análoga.
            </h2>
          </div>
        </div>
        <div className="box2">
          <div className="text3">
            <h2>
              Asistencia a los cursos de formación. Disponer de fechas libres.
              Tener más de 21 años. Entrevista y acompañamiento personal en base
              al proyecto elegido. Cumplir las normas.
            </h2>
          </div>
          <div className="text4">
            <h1>Requisitos</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Voluntary;
