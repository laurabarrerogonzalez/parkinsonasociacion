import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "../Parkinson/Symptoms.css";
import Footer from "../../assets/Components/Footer/Footer";
import BannerViews from "../../Components/BannerViews/BannerViews";
import "../../Components/FlipBook/FlipBook.css";
import HTMLFlipBook from "react-pageflip";
import ButtonDonate from "../../Components/ButtonDonate/ButtonDonate";
import ScrollArrow from "../../Components/ScrollArrow/ScrollArrow";


const Page = React.forwardRef((props, ref) => {
  return (
    <div className="demoPage" ref={ref}>
      <br />
      <br />
      <p>{props.children}</p>
      <br />
      <p>{props.number}</p>
    </div>
  );
});





const Symptoms = () => {
  return (
    <>
      <div>
      <Navbar />
      <BannerViews
        image="https://res.cloudinary.com/dit2zhtwz/image/upload/v1698917550/istockphoto-1434534146-612x612_c5rz28.jpg"
        title="Síntomas y Diagnóstico"
      />
      </div>


    {/* <div className="what">
      <div className="title-parkinson">
      <h1>¿Qué es el Parkinson?</h1>
      </div>

      <div >
        <p className="text-parkinson">La enfermedad de Parkinson es un Trastorno Neurodegenerativo que afecta al sistema nervioso central. <br></br>
          Es crónico y progresivo y se caracteriza por la falta de dopamina en el organismo, que es la sustancia necesaria para la realización de movimientos.
        </p>
      </div>
    </div> */}

    {/* <div className="what">
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
    <li><strong>La lentitud de movimientos o Bradicinesia:</strong> Se manifiesta en fases iniciales de la enfermedad con actividades que requieren cierta habilidad o precisión como escribir, coser, afeitarse, etc. Sin embargo y a medida que avanza la enfermedad, se puede hacer más evidente y aparecer en actividades de menos precisión como abrocharse un botón o pelar una fruta.</li>
    <li><strong>La rigidez o aumento de tono muscular:</strong> Consiste en la resistencia a la realización del movimiento pasivo, tanto flexor como extensor de las extremidades. Al principio puede no ser advertida por el enfermo como tal y referir exclusivamente dolor a nivel de cuello, espalda u hombros o incluso calambres musculares debidos a la postura estática y flexionada de las articulaciones. Esta rigidez suele ser más evidente en las zonas distales de las extremidades (tobillo y muñeca) aunque también se observa en zonas intermedias (como codos o rodillas).</li>
    <li><strong>Los trastornos posturales:</strong> Pueden ser iniciales, aunque lo habitual es que aparezcan en las fases avanzadas del proceso. La postura habitual del paciente tiende a la flexión del tronco, de la cabeza y de las cuatro extremidades. La marcha también se altera, con tendencia a la propulsión y a realizar pasos cortos. En periodos avanzados de la enfermedad, el paciente puede presentar bloqueos de la marcha con pasos pequeños sin apenas desplazamiento y con una gran inestabilidad para girar. Estos bloqueos de la marcha pueden dar lugar fácilmente a caídas. Los trastornos posturales y de la marcha aumentan en los lugares estrechos (pasillos, umbrales de las puertas) y mejoran en los amplios y poco concurridos.</li>
  </ul>
      </div>

      <div className="what">
      <div className="title-parkinson">
      <h1>Síntomas Secundarios y Diagnóstico</h1>
      </div> 
      </div>

    </div> */}



    <div className="Bodys">
        <HTMLFlipBook width={600} height={500}>
          <Page number="1">
            <div className="parkinson-book">
              <h1>¿Qué es el Parkinson?</h1> <br />{" "}
             <p>El Parkinson es un trastorno neurodegenerativo de curso crónico, progresivo e irreversible</p>
             <ul>
              <li>Degenerativa: disminución de la calidad</li>
              <li>Neurológico: sistema nervioso</li>
              <li>Crónico: de larga duración</li>
              <li>Progresivo: con una evolución en etapas</li>
             </ul>
            </div>

            <div className="parkinson-book">
<h1>¿Cómo se produce?</h1>
             <p>Células de la sustancia negra funcionan mal y mueren, disminuye producción de dopamina</p>
             <p>Dopamina: neurotransmisor de información para realizar movimientos con normalidad</p>

            </div>

             
            
          </Page>

          <Page number="2">
            <h1>Síntomas Motores</h1> 
            <div className="parkinson-book">
              <h1>Principales</h1>
              <ul>
                <li>BRADICINESIA - lentitud en el movimiento - bloqueo y dificultades en marcha</li>
                <li>RIGIDEZ- aumento del tono muscular - amplitud del movimiento menor, dolor y calambres, postura encorvada</li>
                <li>TEMBLOR EN REPOSO - temblor parkinsoniano</li>
                <li>INESTABILIDAD POSTURAL - caídas</li>
              </ul>
            </div>

            <div className="parkinson-book">
              <h1>Otros</h1>
              <ul>
                <li>HIPOMIMIA: disminución expresión facial debido a rigidez</li>
                <li>HIPOFONÍA: disminución tono voz</li>
                <li>DISARTRIA: problemas de articulación del habla</li>
                <li>DIFICULTADES RESPIRATORIAS</li>
                <li>FATIGA Y CANSANCIO</li>
                <li>DISCINESIAS: movimientos involuntarios provocados por la medicación</li>
              </ul>
            </div>
           
          </Page>

          <Page number="3">
           <h1>Síntomas No Motores</h1>
           <div className="parkinson-book">
            <h1>NEUROPSIQUIATRICOS</h1>
             <ul>
                <li>TRASTORNOS EMOCIONALES: ansiedad, depresión...</li>
                <li>TRASTORNOS CONDUCTUALES: control de impulso, hipersexualidad</li>
                <li>ALUCINACIONES Y DELIRIOS: efecto de medicación</li>
                <li>ALTERACIONES COGNITIVAS: enlentecimiento del procesamiento de información, alteración función ejecutiva y déficit atencionales, 
                  visuales, espacial y de memoria</li>
              </ul>
           </div>
             
          </Page>

          <Page number="4">
            <h1>Síntomas No Motores</h1>          
            <div className="parkinson-book">
            <h1>GASTROINTESTINALES</h1>
             <ul>
                <li>ESTREÑIMIENTO</li>
                <li>DIGESTIONES PESADAS</li>
                <li>DISFAGIAS: dificultades para tragar</li>
                <li>NAUSEAS Y VÓMITOS</li>
                <li>SIALORREA: salivación o babeo</li>
              </ul>
           </div>

           <div className="parkinson-book">
            <h1>SENSORIALES</h1>
             <ul>
                <li>ALTERACIONES VISUALES</li>
                <li>DOLOR Y PARESTESIAS</li>
                <li>HIPOSMIA/ANOSMIA: disminución o pérdida del olfato</li>
              </ul>
           </div>

          </Page>

          <Page number="5">
            <h1>SINTOMAS NO MOTORES</h1> <br /> <br/> 
            <div className="parkinson-book">
            <h1>ALTERACIONES DEL SUEÑO</h1>
             <ul>
                <li>INSOMNIO O SUEÑO FRACCIONADO</li>
                <li>SOMNOLENCIA DIURNA</li>
                <li>SUEÑOS VIVIDOS</li>
                <li>SINDROME PIERNAS INQUIETAS</li>
              </ul>
           </div>

           <div className="parkinson-book">
            <h1>ALTERACIONES AUTONÓMICAS</h1>
             <ul>
                <li>HIPOTENSIÓN ORTOSTÁTICA</li>
                <li>AUMENTO DE SUDORACIÓN Y SEBORREA</li>
                <li>ALTERACIONES SEXUALES</li>
                <li>DISFUNCIONES URINARIAS</li>
              </ul>
           </div>
          </Page>

          <Page number="6">
            <h1>No dudes en pedir ayuda</h1> <br /> <br/> 
            
          </Page>

        </HTMLFlipBook>
      </div>








    <Footer />

    <ButtonDonate />
      <ScrollArrow/>
    </>
  );
};

export default Symptoms;
