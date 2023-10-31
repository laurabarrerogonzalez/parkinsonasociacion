import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "../Parkinson/Myths.css";

const Myths = () => {
  return (
    <>
      <Navbar />

      <div className="card">
        <div className="card_landing">
          <h1>Es una enfermedad contagiosa y hereditaria</h1>
        </div>
        <div className="card_info">
          <h2 className="title">La enfermedad no es contagiosa y solo afecta a alrededor del 10-15% de los pacientes que tienen antecedentes familiares de la enfermedad
          </h2>     
        </div>
      </div>

      
    </>
  );
};

export default Myths;
