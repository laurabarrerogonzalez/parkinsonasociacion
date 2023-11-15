import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import BannerViews from "../../Components/BannerViews/BannerViews";
import "./Evolution.css"; 
import ButtonCard from "../../Components/ButtonCard/ButtonCard";
import '../Parkinson/Symptoms.css';


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



  const [currentStep, setCurrentStep] = useState(1);
  const handleStepClick = (step) => {
    setCurrentStep(step);
  };

  return (
    <>
      <div>
        <Navbar />
        <BannerViews
          image="https://res.cloudinary.com/dit2zhtwz/image/upload/v1699431863/e96e5008-5541-4c4c-b02c-140d8e7a1183_myzg2w.jpg"
          title="Evolución y Tratamiento"
        />
      </div>


      <div className="what1">
      <div className="title-parkinson">
      <h1>Evolución</h1>
      </div>
      </div>


      <div className="bodys12">
      <div className="process-wrapper">
        <div id="progress-bar-container">
          <ul>
            <li className={`step step01 ${currentStep === 1 ? 'active' : ''}`} onClick={() => handleStepClick(1)}>
              <span>Estadío I</span>
            </li>
            <li className={`step step02 ${currentStep === 2 ? 'active' : ''}`} onClick={() => handleStepClick(2)}>
              <span>Estadío II</span>
            </li>
            <li className={`step step03 ${currentStep === 3 ? 'active' : ''}`} onClick={() => handleStepClick(3)}>
              <span>Estadío III</span>
            </li>
            <li className={`step step04 ${currentStep === 4 ? 'active' : ''}`} onClick={() => handleStepClick(4)}>
              <span>Estadío IV</span>
            </li>
            <li className={`step step05 ${currentStep === 5 ? 'active' : ''}`} onClick={() => handleStepClick(5)}>
              <span>Estadío V</span>
            </li>
          </ul>
          <div id="line">
            <div id="line-process" style={{ width: `${(currentStep - 1) * 25}%` }}></div>
          </div>
        </div>
        <div id="progress-content-section">
          <div className={`section-content discovery ${currentStep === 1 ? 'active' : ''}`}>
            <h2>Diagnóstico Reciente</h2>
            <p>Estadío I</p>
            <p> <li className="li-state">Expresión facial normal</li>
            <li className="li-state">Postura erecta</li>
            <li className="li-state">Posible temblor en una extremidad</li>
            <li className="li-state">Dificultades movilidad fina</li>
            <li className="li-state">Rigidez y bradiquinesia a la exploración cuidadosa</li>
            <li className="li-state">Disminución del braceo al caminar, arrastrando un poco los pies</li> 
            </p>
          </div>

          <div className={`section-content strategy ${currentStep === 2 ? 'active' : ''}`}>
            <h2>Diagnóstico Reciente</h2>
            <p>Estadío II</p>
            <p>
            <li className="li-state">Alteración de la expresión facial. Disminución del parpadeo</li>
            <li className="li-state">Postura en ligera flexión</li>
            <li className="li-state">Enlentecimiento para realizar las actividades de la vida diaria</li>
            <li className="li-state">Síntomas depresivos</li>
            <li className="li-state">Posibilidad de efectos secundarios de los medicamentos</li>
            </p>
          </div>

          <div className={`section-content creative ${currentStep === 3 ? 'active' : ''}`}>
            <h2>Pacientes Moderadamente Afectados</h2>
            <p>Estadío III</p>
            <p>
            <li className="li-state">Dificultades al caminar: se acorta el paso, dificultades en los giros</li>
            <li className="li-state">Dificultades en el equilibrio: caídas, dificultad para pararse</li>
            <li className="li-state">Sensación de fatiga, dolores</li>
            <li className="li-state">Dificultades comunicativas</li>
            <li className="li-state">Síntomas de disfunción autonómica</li>
            <li className="li-state">Síntomas de relación con los fármacos: fenómenos on-off (miedo e inseguridad), discinesias y problemas conductuales (insomnio,
              alucinaciones, cuadros confusionales)</li>
            </p>
          </div>

          <div className={`section-content production ${currentStep === 4 ? 'active' : ''}`}>
            <h2>Pacientes Moderadamente Afectados</h2>
            <p>Estadío IV</p>
            <p>
            <li className="li-state">Dificultades al caminar: se acorta el paso, dificultades en los giros</li>
            <li className="li-state">Dificultades en el equilibrio: caídas, dificultad para pararse</li>
            <li className="li-state">Sensación de fatiga, dolores</li>
            <li className="li-state">Dificultades comunicativas</li>
            <li className="li-state">Síntomas de disfunción autonómica</li>
            <li className="li-state">Síntomas de relación con los fármacos: fenómenos on-off (miedo e inseguridad), discinesias y problemas conductuales (insomnio,
              alucinaciones, cuadros confusionales)</li>
            </p>
          </div>

          <div className={`section-content analysis ${currentStep === 5 ? 'active' : ''}`}>
            <h2>Pacientes Severamente Afectados</h2>
            <p>Estadío V</p>
            <p>
            <li className="li-state">No todos los pacientes llegan a este estadío</li>
            <li className="li-state">Dependientes</li>
            <li className="li-state">Aumento progresivo del tiempo off. Gran parte del tiempo sentado o en cama</li>
            <li className="li-state">Trastornos del lenguaje acentuados</li>
            <li className="li-state">Desarrollo de contracturas</li>
            <li className="li-state">Posibilidad de úlceras de decúbito. Infecciones urinarias de repetición</li>
            <li className="li-state">Disfagia progresiva</li>
            </p>
          </div>
        </div>
      </div>
      </div>

      <div className="what1">
      <div className="title-parkinson1">
      <h1>Tratamiento</h1>
      </div>
      </div>

<ButtonCard/>




      <Footer />
      <ButtonDonate />
      <ScrollArrow/>
    </>
  );
};

export default Evolution;
