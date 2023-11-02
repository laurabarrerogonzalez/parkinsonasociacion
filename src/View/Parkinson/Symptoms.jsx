import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "../Parkinson/Symptoms.css";
import Footer from "../../assets/Components/Footer/Footer";

const Symptoms = () => {
  return (
    <>
      <div className="photobanner1">
       <Navbar />
      <div className="questions">
        <h1>Síntomas Y Diagnóstico</h1>
      </div>
    </div>


    <div className="what">
      <div className="title-parkinson">
      <h1>¿Qué es el Parkinson?</h1>
      </div>

      <div className="text-parkinson">
        <p>La enfermedad de Parkinson es un Trastorno Neurodegenerativo que afecta al sistema nervioso central. <br></br>
          Es crónico y progresivo y se caracteriza por la falta de dopamina en el organismo, que es la sustancia necesaria para la realización de movimientos.
        </p>
      </div>
    </div>

    <div className="what">
      <div className="title-parkinson">
      <h1>Primeros Síntomas</h1>
      </div>

      <div className="text-parkinson">
      <ul>
    <li> <strong>El temblor en reposo:</strong> Está presente en alrededor de un 70% de los pacientes. 
      Se presenta de forma característica durante el reposo, ya que desaparece al adoptar una postura o al ejecutar una acción. 
      Afecta sobre todo a las extremidades superiores y con menor frecuencia a las extremidades inferiores, labios, lengua, mentón…. 
      El temblor de la cabeza es raro en la enfermedad de Parkinson. Como sucede con todos los temblores, empeora con el cansancio, 
      la ansiedad y los fármacos estimulantes del sistema nervioso. Durante el día varía la intensidad y amplitud del temblor, y desaparece 
      durante el sueño. Es importante señalar que hay muchas causas de temblor y que no todas las personas con temblor padecen Párkinson.</li>
    <li>La lentitud de movimientos o Bradicinesia: Se manifiesta en fases iniciales de la enfermedad con actividades que requieren cierta habilidad o precisión como escribir, coser, afeitarse, etc. Sin embargo y a medida que avanza la enfermedad, se puede hacer más evidente y aparecer en actividades de menos precisión como abrocharse un botón o pelar una fruta.</li>
    <li>La rigidez o aumento de tono muscular: Consiste en la resistencia a la realización del movimiento pasivo, tanto flexor como extensor de las extremidades. Al principio puede no ser advertida por el enfermo como tal y referir exclusivamente dolor a nivel de cuello, espalda u hombros o incluso calambres musculares debidos a la postura estática y flexionada de las articulaciones. Esta rigidez suele ser más evidente en las zonas distales de las extremidades (tobillo y muñeca) aunque también se observa en zonas intermedias (como codos o rodillas).</li>
    <li>Los trastornos posturales: Pueden ser iniciales, aunque lo habitual es que aparezcan en las fases avanzadas del proceso. La postura habitual del paciente tiende a la flexión del tronco, de la cabeza y de las cuatro extremidades. La marcha también se altera, con tendencia a la propulsión y a realizar pasos cortos. En periodos avanzados de la enfermedad, el paciente puede presentar bloqueos de la marcha con pasos pequeños sin apenas desplazamiento y con una gran inestabilidad para girar. Estos bloqueos de la marcha pueden dar lugar fácilmente a caídas. Los trastornos posturales y de la marcha aumentan en los lugares estrechos (pasillos, umbrales de las puertas) y mejoran en los amplios y poco concurridos.</li>
  </ul>
      </div>
    </div>


    <Footer />
    </>
  );
};

export default Symptoms;
