import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "../Parkinson/Symptoms.css";
import Footer from "../../assets/Components/Footer/Footer";
import BannerViews from "../../Components/BannerViews/BannerViews";
import "../../Components/FlipBook/FlipBook.css";
import HTMLFlipBook from "react-pageflip";


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

    <div className="Bodys">
        <HTMLFlipBook width={750} height={500}>
          <Page number="1">
            <div>
              <h1>¿Qué es el Parkinson?</h1> {" "}
             <p className="pakinson-p">El Parkinson es un trastorno neurodegenerativo de curso crónico, progresivo e irreversible</p>
             <ul className="parkinson-ul">
              <li className="parkinson-li">Degenerativa: disminución de la calidad</li>
              <li className="parkinson-li">Neurológico: sistema nervioso</li>
              <li className="parkinson-li">Crónico: de larga duración</li>
              <li className="parkinson-li">Progresivo: con una evolución en etapas</li>
             </ul>
            </div>

            <div className="parkinson-what">
            <h1>¿Cómo se produce?</h1>
             <p className="pakinson-p">Células de la sustancia negra funcionan mal y mueren, disminuye producción de dopamina.</p>
             <p className="pakinson-p">Dopamina: neurotransmisor de información para realizar movimientos con normalidad</p>

            </div>

             <br></br>
             <br></br>
          </Page>

          <Page number="2">
            <h1 className="parkinson-h1">Síntomas Motores</h1> 
            <div>
              <h2 className="parkinson-si">Principales</h2>
              <ul>
                <li className="parkinson-si">BRADICINESIA - lentitud en el movimiento - bloqueo y dificultades en marcha</li>
                <li className="parkinson-si">RIGIDEZ- aumento del tono muscular - amplitud del movimiento menor, dolor y calambres, postura encorvada</li>
                <li className="parkinson-si">TEMBLOR EN REPOSO - temblor parkinsoniano</li>
                <li className="parkinson-si">INESTABILIDAD POSTURAL - caídas</li>
              </ul>
            </div>

            <div>
              <h2>Otros</h2>
              <ul>
                <li className="parkinson-si">HIPOMIMIA: disminución expresión facial debido a rigidez</li>
                <li className="parkinson-si">HIPOFONÍA: disminución tono voz</li>
                <li className="parkinson-si">DISARTRIA: problemas de articulación del habla</li>
                <li className="parkinson-si">DIFICULTADES RESPIRATORIAS</li>
                <li className="parkinson-si">FATIGA Y CANSANCIO</li>
                <li className="parkinson-si">DISCINESIAS: movimientos involuntarios provocados por la medicación</li>
              </ul>
            </div>
           
          </Page>

          <Page number="3">
           <h1>Síntomas No Motores</h1>
           <div>
            <h2 className="parkinson-li">NEUROPSIQUIATRICOS</h2>
             <ul>
                <li className="parkinson-li">TRASTORNOS EMOCIONALES: ansiedad, depresión...</li>
                <li className="parkinson-li">TRASTORNOS CONDUCTUALES: control de impulso, hipersexualidad</li>
                <li className="parkinson-li">ALUCINACIONES Y DELIRIOS: efecto de medicación</li>
                <li className="parkinson-li">ALTERACIONES COGNITIVAS: enlentecimiento del procesamiento de información, alteración función ejecutiva y déficit atencionales, 
                  visuales, espacial y de memoria</li>
              </ul>
           </div>
             

           <br></br>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
            
          </Page>

          <Page number="4">
            <h1>Síntomas No Motores</h1>          
            <div>
            <h2 className="parkinson-li">GASTROINTESTINALES</h2>
             <ul>
                <li className="parkinson-si">ESTREÑIMIENTO</li>
                <li className="parkinson-si">DIGESTIONES PESADAS</li>
                <li className="parkinson-si">DISFAGIAS: dificultades para tragar</li>
                <li className="parkinson-si">NAUSEAS Y VÓMITOS</li>
                <li className="parkinson-si">SIALORREA: salivación o babeo</li>
              </ul>
           </div>

           <div>
            <h2 className="parkinson-li">SENSORIALES</h2>
             <ul>
                <li className="parkinson-si">ALTERACIONES VISUALES</li>
                <li className="parkinson-si">DOLOR Y PARESTESIAS</li>
                <li className="parkinson-si">HIPOSMIA/ANOSMIA: disminución o pérdida del olfato</li>
              </ul>
           </div>

           <br></br>
           
             
             

          </Page>

          <Page number="5">
            <h1>SINTOMAS NO MOTORES</h1> <br /> <br/> 
            <div>
            <h2>ALTERACIONES DEL SUEÑO</h2>
             <ul>
                <li className="parkinson-si">INSOMNIO O SUEÑO FRACCIONADO</li>
                <li className="parkinson-si">SOMNOLENCIA DIURNA</li>
                <li className="parkinson-si">SUEÑOS VIVIDOS</li>
                <li className="parkinson-si">SINDROME PIERNAS INQUIETAS</li>
              </ul>
           </div>

           <div>
            <h2 className="parkinson-li">ALTERACIONES AUTONÓMICAS</h2>
             <ul>
                <li className="parkinson-si">HIPOTENSIÓN ORTOSTÁTICA</li>
                <li className="parkinson-si">AUMENTO DE SUDORACIÓN Y SEBORREA</li>
                <li className="parkinson-si">ALTERACIONES SEXUALES</li>
                <li className="parkinson-si">DISFUNCIONES URINARIAS</li>
              </ul>
           </div>

           
         
            
             
          </Page>

          <Page number="6">
            <h1>No dudes en pedir ayuda</h1> <br /> <br/> 
            <img className="img-book" src="https://res.cloudinary.com/dit2zhtwz/image/upload/v1699098000/istockphoto-1461330630-612x612_ysetew.jpg"/>
            
          </Page>

        </HTMLFlipBook>
      </div>








    <Footer />
    </>
  );
};

export default Symptoms;
