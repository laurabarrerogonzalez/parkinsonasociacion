import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import BannerViews from "../../Components/BannerViews/BannerViews";
import "./Evolution.css"; // Importa tu archivo CSS aquí

const Evolution = () => {
  const [stageDescription, setStageDescription] = useState("");

  const handleMouseEnter = (stage) => {
    // Define las descripciones para cada etapa
    const descriptions = {
      0: "En el estadío 0: Normal",
      1: "En el estadío 1: Afectación Unilateral",
      2: "En el estadío 2: afectación bilateral, equilibrio normal",
      3: "En el estadío 3: afectación bilateral con alteración del equilibrio",
      4: "En el estadío 4: aumento del grado de dependencia",
      5: "En el estadío 5: severamente afectado, en silla de ruedas o cama",
    };

    setStageDescription(descriptions[stage]);
  };

  const handleMouseLeave = () => {
    setStageDescription("");
  };

  return (
    <>
      <div>
        <Navbar />
        <BannerViews
          image="https://res.cloudinary.com/dit2zhtwz/image/upload/v1699193991/istockphoto-532484805-612x612_l9xgr1.jpg"
          title="Evolución y Tratamiento"
        />
      </div>

      <div className="background-evolution">
        <div className="timeline">
          {[0, 1, 2, 3, 4, 5].map((stage) => (
            <div
              key={stage}
              className={`timeline-item stage-${stage}`}
              onMouseEnter={() => handleMouseEnter(stage)}
              onMouseLeave={handleMouseLeave}
            >
              {stage}
            </div>
          ))}
        </div>

        <div className="description">{stageDescription}</div>

        <div className="grid-layout">
          <div className="box b1">
            <h1 className="h1evolution">Diagnóstico reciente</h1>
          </div>
          <div className="box b2">
            <h1 className="h1evolution">Pacientes Moderadamente Afectados</h1>
          </div>
          <div className="box b3">
            <h1 className="h1evolution">Pacientes Severamente Afectados</h1>
          </div>
          <div className="box b4">
            <h2>Estadío I</h2>
            <li className="li-state">Expresión facial normal</li>
            <li className="li-state">Postura erecta</li>
            <li className="li-state">Posible temblor en una extremidad</li>
            <li className="li-state">Dificultades movilidad fina</li>
            <li className="li-state">
              Rigidez y bradiquinesia a la exploración cuidadosa
            </li>
            <li className="li-state">
              Disminución del braceo al caminar, arrastrando un poco los pies
            </li>
          </div>
          <div className="box b5">
            <h2>Estadío II</h2>
            <li className="li-state">
              Alteración de la expresión facial. Disminución del parpadeo
            </li>
            <li className="li-state">Postura en ligera flexión</li>
            <li className="li-state">
              Enlentecimiento para realizar las actividades de la vida diaria
            </li>
            <li className="li-state">Síntomas depresivos</li>
            <li className="li-state">
              Posibilidad de efectos secundarios de los medicamentos
            </li>
          </div>
          <div className="box b6">
            <h2>Estadíos III y IV</h2>
            <li className="li-state">
              Dificultades al caminar: se acorta el paso, dificultades en los
              giros
            </li>
            <li className="li-state">
              Dificultades en el equilibrio: caídas, dificultad para pararse
            </li>
            <li className="li-state">Sensación de fatiga, dolores</li>
            <li className="li-state">Dificultades comunicativas</li>
            <li className="li-state">Síntomas de disfunción autonómica</li>
            <li className="li-state">
              Síntomas de relación con los fármacos: fenómenos on-off (miedo e
              inseguridad), discinesias y problemas conductuales (insomnio,
              alucinaciones, cuadros confusionales)
            </li>
          </div>

          <div className="box b7">
            <h2>Estadío V</h2>
            <li className="li-state">
              No todos los pacientes llegan a este estadío
            </li>
            <li className="li-state">Dependientes</li>
            <li className="li-state">
              Aumento progresivo del tiempo off. Gran parte del tiempo sentado o
              en cama
            </li>
            <li className="li-state">Trastornos del lenguaje acentuados</li>
            <li className="li-state">Desarrollo de contracturas</li>
            <li className="li-state">
              Posibilidad de úlceras de decúbito. Infecciones urinarias de
              repetición
            </li>
            <li className="li-state">Disfagia progresiva</li>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Evolution;
