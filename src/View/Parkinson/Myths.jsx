import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "../Parkinson/Myths.css";

const Myths = () => {
  return (
    <>
      <Navbar />

      <div className="card-container">
        {/* Tarjeta 1 */}
        <div className="card">
          <div className="card_myth">
            <h1>Es una enfermedad contagiosa y hereditaria</h1>
          </div>
          <div className="card_true">
            <h2 className="title">
              La enfermedad no es contagiosa y solo afecta a alrededor del 10-15% de los pacientes que tienen antecedentes familiares de la enfermedad
            </h2>
          </div>
        </div>

        {/* Tarjeta 2 */}
        <div className="card">
          <div className="card_myth">
            <h1>Es una enfermedad propia de las personas mayores</h1>
          </div>
          <div className="card_true">
            <h2 className="title">
             Puede afectar a jóvenes, pero es más común entre los 40-70 años
            </h2>
          </div>
        </div>

        {/* Tarjeta 3 */}
        <div className="card">
          <div className="card_myth">
            <h1>Más en hombres y en ciertas razas</h1>
          </div>
          <div className="card_true">
            <h2 className="title">
              La enfermedad no hace distinciones entre sexos ni razas
            </h2>
          </div>
        </div>


         {/* Tarjeta 4 */}
         <div className="card">
          <div className="card_myth">
            <h1>Produce demencia y envejecimiento prematuro, y deteriora la inteligencia de los pacientes</h1>
          </div>
          <div className="card_true">
            <h2 className="title">
           El enfermo tiene más dificultades para hacer determinador movimientos y para expresarse
            </h2>
          </div>
        </div>

          {/* Tarjeta 5 */}
          <div className="card">
          <div className="card_myth">
            <h1>Los enfermos tienen problemas auditivos</h1>
          </div>
          <div className="card_true">
            <h2 className="title">
             No son más duros de oído, sino que son más lentos para responder a una pregunta 
            </h2>
          </div>
        </div>

          {/* Tarjeta 6 */}
          <div className="card">
          <div className="card_myth">
            <h1>Fumar protege de la enfermedad</h1>
          </div>
          <div className="card_true">
            <h2 className="title">
             Las evidencias en este sentido no son concluyentes
            </h2>
          </div>
        </div>

          {/* Tarjeta 7 */}
          <div className="card">
          <div className="card_myth">
            <h1>Los temblores son el primer signo de alarma que animan al paciente/familiares a acudir al médico</h1>
          </div>
          <div className="card_true">
            <h2 className="title">
              La consulta inicial es por lentitud en tareas cotidianas
            </h2>
          </div>
        </div>

          {/* Tarjeta 8 */}
          <div className="card">
          <div className="card_myth">
            <h1>El temblor de manos es invariable en su intensidad</h1>
          </div>
          <div className="card_true">
            <h2 className="title">
             Temblor en reposo, disminuye con movimientos voluntarios
            </h2>
          </div>
        </div>

          {/* Tarjeta 9 */}
          <div className="card">
          <div className="card_myth">
            <h1>Todo temblor es signo de enfermedad de Parkinson</h1>
          </div>
          <div className="card_true">
            <h2 className="title">
            Hay muchas enfermedades similares y que se manifiestan con síntomas parecidos, pero no son el Parkinson  
            </h2>
          </div>
        </div>

          {/* Tarjeta 10 */}
          <div className="card">
          <div className="card_myth">
            <h1>No hay un tratamiento farmacológico realmente útil</h1>
          </div>
          <div className="card_true">
            <h2 className="title">
            Aunque no hay cura, la terapia actual mejora la calidad de vida y reduce los síntomas de la enfermedad 
            </h2>
          </div>
        </div>

          {/* Tarjeta 11 */}
          <div className="card">
          <div className="card_myth">
            <h1>El único síntoma incapacitante son los movimientos involuntarios de la mano</h1>
          </div>
          <div className="card_true">
            <h2 className="title">
           Síntomas diversos incluyen motoras, ansiedad, depresión y deterioro verbal
            </h2>
          </div>
        </div>

          {/* Tarjeta 12 */}
          <div className="card">
          <div className="card_myth">
            <h1>Nadie puede ayudarme</h1>
          </div>
          <div className="card_true">
            <h2 className="title">
            Médicos más informados y apoyo de asociaciones benefician a pacientes
            </h2>
          </div>
        </div>

       
      </div>
    </>
  );
};

export default Myths;
