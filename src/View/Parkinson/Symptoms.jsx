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


    <div className="what">
      <div className="title-parkinson">
      <h1>¿Qué es el Parkinson?</h1>
      </div>

      <div >
        <p className="text-parkinson">La enfermedad de Parkinson es un Trastorno Neurodegenerativo que afecta al sistema nervioso central. <br></br>
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

    </div>



    <div className="Bodys">
        <HTMLFlipBook width={300} height={500}>
          <Page number="1">
            <h1>Síntomas asociados o secundarios</h1> <br />{" "}
            <li className="li-symp">Cambios en el tono de voz que se torna más débil.</li>
            <li className="li-symp">Cambios en el semblante que se vuelve menos expresivo.</li>
            <li className="li-symp">Síntomas psíquicos: ansiedad, depresión y disminución de la libido.</li>
            <li className="li-symp">Trastornos del sueño: insomnio y fragmentación del sueño.</li>
            
            <br /> 

            
          </Page>

          <Page number="2">
            <h1>Síntomas asociados o secundarios</h1> <br /><br/> 
            <li className="li-symp">Síntomas sensitivos: hormigueos e incluso dolor en alguna extremidad.</li>
            <li className="li-symp">Trastornos leves del sistema nervioso autónomo: estreñimiento y aumento de la sudación.</li>
            <li className="li-symp">Alteraciones cutáneas: eczema seborreico, que afecta fundamentalmente a la piel de la cara y el cuero cabelludo.</li>
            <li className="li-symp">Disminución del sentido del olfato.</li>
          </Page>

          <Page number="3">
            <h1>Diagnóstico</h1> <br /> <br/> 
            <img className="imgs" src="https://res.cloudinary.com/dit2zhtwz/image/upload/v1699097744/medical-563427_1280_clghkv.jpg" /><br /> <br/> 
            El diagnóstico de la enfermedad es fundamentalmente clínico y se basa en:
            <li className="li-symp">La historia clínica del paciente </li>
            <li className="li-symp">La exploración física y neurológica</li>
          </Page>

          <Page number="4">
            <h1>Diagnóstico</h1> <br /> <br/> 
            En algunos pacientes se solicitarán:
            <li className="li-symp">Análisis de laboratorio.</li>
            <li className="li-symp">Pruebas de diagnóstico de imagen, como un escáner cerebral, 
              la tomografía por emisión de positrones (SPECT) o una resonancia magnética. 
              Las pruebas de imagen no aportan datos diagnósticos, pero permiten excluir otras 
              causas de síndrome parkinsoniano, como hidrocefalias, tumores o lesiones vasculares,
               y dar información de la capacidad anatómico-funcional del cerebro</li>
           

          </Page>

          <Page number="5">
            <h1>Diagnóstico</h1> <br /> <br/> 
            <li className="li-symp">Exámenes neurofisiológicos, como el estudio de ciertos reflejos del tronco 
              cerebral, el estudio del sistema nervioso autónomo o el estudio de la frecuencia 
              y las características del temblor.</li>
            *Es muy importante establecer el diagnóstico diferencial entre la enfermedad de 
            Parkinson y otras dolencias que pueden cursar con parkinsonismo.
          </Page>

          <Page number="6">
            <h1>No dudes en pedir ayuda</h1> <br /> <br/> 
            <img className="imgs" src="https://res.cloudinary.com/dit2zhtwz/image/upload/v1699098000/istockphoto-1461330630-612x612_ysetew.jpg" /><br /> <br/>
            Diagnosticar a tiempo es siempre muy importante
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
