import React from "react";
import "../../Components/ButtonCard/ButtonCard.css";
import { Link } from "react-router-dom";

const ButtonCard = () => {
  return (
    <>
      <div className="buttoncard14">
        <div class="cardt1">
          <div class="heading02">
            <p>Tratamiento <span>Farmacológico</span></p>
          </div>
          <div class="content-buton">
            <p className="text-buttoncard">
              {" "}
              Los medicamentos disponibles actualmente alivian los síntomas del
              Parkinson pero no lo curan ni detienen su progresión. El
              tratamiento principal es la Levodopa, que reemplaza la dopamina
              deficitaria en el paciente. Se administra junto a otros fármacos
              para reducir efectos secundarios. Con el tiempo, la Levodopa puede
              volverse menos efectiva y causar fluctuaciones motoras.
              <br></br>
              Existen presentaciones de Levodopa de acción retardada para
              mantener efectos más constantes y en infusión de gel para casos
              avanzados. Otros fármacos incluyen Amantadina (para movimientos
              involuntarios), agonistas dopaminérgicos (retrasar el uso de
              Levodopa), inhibidores dopaminérgicos (aumentar disponibilidad de
              dopamina) y anticolinérgicos (para tratar temblor y rigidez, pero
              con efectos secundarios).
              <br></br>
              Los medicamentos deben ser recetados y controlados por un
              neurólogo.
            </p>
          </div>
          <div class="item item--inspire">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill="currentColor"
                d="M10.6144 17.7956C10.277 18.5682 9.20776 18.5682 8.8704 17.7956L7.99275 15.7854C7.21171 13.9966 5.80589 12.5726 4.0523 11.7942L1.63658 10.7219C.868536 10.381.868537 9.26368 1.63658 8.92276L3.97685 7.88394C5.77553 7.08552 7.20657 5.60881 7.97427 3.75892L8.8633 1.61673C9.19319.821767 10.2916.821765 10.6215 1.61673L11.5105 3.75894C12.2782 5.60881 13.7092 7.08552 15.5079 7.88394L17.8482 8.92276C18.6162 9.26368 18.6162 10.381 17.8482 10.7219L15.4325 11.7942C13.6789 12.5726 12.2731 13.9966 11.492 15.7854L10.6144 17.7956ZM4.53956 9.82234C6.8254 10.837 8.68402 12.5048 9.74238 14.7996 10.8008 12.5048 12.6594 10.837 14.9452 9.82234 12.6321 8.79557 10.7676 7.04647 9.74239 4.71088 8.71719 7.04648 6.85267 8.79557 4.53956 9.82234ZM19.4014 22.6899 19.6482 22.1242C20.0882 21.1156 20.8807 20.3125 21.8695 19.8732L22.6299 19.5353C23.0412 19.3526 23.0412 18.7549 22.6299 18.5722L21.9121 18.2532C20.8978 17.8026 20.0911 16.9698 19.6586 15.9269L19.4052 15.3156C19.2285 14.8896 18.6395 14.8896 18.4628 15.3156L18.2094 15.9269C17.777 16.9698 16.9703 17.8026 15.956 18.2532L15.2381 18.5722C14.8269 18.7549 14.8269 19.3526 15.2381 19.5353L15.9985 19.8732C16.9874 20.3125 17.7798 21.1156 18.2198 22.1242L18.4667 22.6899C18.6473 23.104 19.2207 23.104 19.4014 22.6899ZM18.3745 19.0469 18.937 18.4883 19.4878 19.0469 18.937 19.5898 18.3745 19.0469Z"
              ></path>
            </svg>
            <span>Hazte socio</span>
          </div>
        </div>
        <div class="cardt2">
          <div class="heading02">
            Tratamiento <span>Quirúrgico</span>
          </div>
          <div class="content-buton">
            <p className="text-buttoncard">
              {" "}
              El tratamiento quirúrgico de la Enfermedad de Parkinson se inició
              en los años 50 y se abandonó con la introducción de la Levodopa,
              pero se retomó en los años 80 debido a las complicaciones a largo
              plazo de la Levodopa. Se realiza mediante una lesión (talamotomía
              o palidotomía) o técnicas de estimulación profunda (del tálamo,
              del subtálamo o del pálido). Las técnicas de estimulación son las
              más utilizadas, aunque no todos los pacientes son candidatos a
              cirugía de Parkinson.
              <br></br>
              La cirugía se considera cuando los síntomas motores no mejoran lo
              suficiente con el tratamiento farmacológico. La talamotomía
              implica la destrucción irreversible de células en el tálamo, con
              efectos secundarios permanentes que pueden afectar otras
              funciones. La palidotomía es la destrucción de células específicas
              en el globo pálido, también irreversible y utilizada en casos
              graves de Parkinson. Puede requerir una segunda intervención y
              realizarse en ambos lados del cerebro.
            </p>
          </div>
          <div class="item item--inspire">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill="currentColor"
                d="M10.6144 17.7956C10.277 18.5682 9.20776 18.5682 8.8704 17.7956L7.99275 15.7854C7.21171 13.9966 5.80589 12.5726 4.0523 11.7942L1.63658 10.7219C.868536 10.381.868537 9.26368 1.63658 8.92276L3.97685 7.88394C5.77553 7.08552 7.20657 5.60881 7.97427 3.75892L8.8633 1.61673C9.19319.821767 10.2916.821765 10.6215 1.61673L11.5105 3.75894C12.2782 5.60881 13.7092 7.08552 15.5079 7.88394L17.8482 8.92276C18.6162 9.26368 18.6162 10.381 17.8482 10.7219L15.4325 11.7942C13.6789 12.5726 12.2731 13.9966 11.492 15.7854L10.6144 17.7956ZM4.53956 9.82234C6.8254 10.837 8.68402 12.5048 9.74238 14.7996 10.8008 12.5048 12.6594 10.837 14.9452 9.82234 12.6321 8.79557 10.7676 7.04647 9.74239 4.71088 8.71719 7.04648 6.85267 8.79557 4.53956 9.82234ZM19.4014 22.6899 19.6482 22.1242C20.0882 21.1156 20.8807 20.3125 21.8695 19.8732L22.6299 19.5353C23.0412 19.3526 23.0412 18.7549 22.6299 18.5722L21.9121 18.2532C20.8978 17.8026 20.0911 16.9698 19.6586 15.9269L19.4052 15.3156C19.2285 14.8896 18.6395 14.8896 18.4628 15.3156L18.2094 15.9269C17.777 16.9698 16.9703 17.8026 15.956 18.2532L15.2381 18.5722C14.8269 18.7549 14.8269 19.3526 15.2381 19.5353L15.9985 19.8732C16.9874 20.3125 17.7798 21.1156 18.2198 22.1242L18.4667 22.6899C18.6473 23.104 19.2207 23.104 19.4014 22.6899ZM18.3745 19.0469 18.937 18.4883 19.4878 19.0469 18.937 19.5898 18.3745 19.0469Z"
              ></path>
            </svg>
            <span>Hazte socio</span>
          </div>
        </div>
        <div class="cardt3">
          <div class="heading02">
            Estimulación <span>Cerebral</span>
          </div>
          <div class="content-buton">
            <p className="text-buttoncard">
              La Terapia de Estimulación Cerebral Profunda (DBS) es un
              tratamiento quirúrgico que alivia los síntomas de la enfermedad de
              Parkinson y otras condiciones neurológicas. Consiste en la
              implantación de tres componentes: un electrodo en el cerebro, una
              extensión bajo la piel desde la cabeza al tórax superior y un
              neuroestimulador que se ajusta inalámbricamente. Esta terapia ha
              demostrado ser efectiva, ajustable y reversible, pero conlleva
              riesgos quirúrgicos y posibles efectos secundarios que requieren
              ajustes en la estimulación.
              No todos los pacientes son candidatos para la DBS Therapy, ya que
              se considera principalmente para aquellos que no responden
              adecuadamente a la medicación, experimentan periodos de ineficacia
              de los medicamentos o sufren de discinesias. La decisión de
              recibir esta terapia debe ser evaluada por un médico con
              experiencia en DBS. En resumen, la DBS Therapy es una opción
              quirúrgica para reducir los síntomas neurológicos, pero requiere
              una evaluación cuidadosa por parte de un profesional médico
              experimentado.
            </p>
          </div>
          <div class="item item--inspire">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill="currentColor"
                d="M10.6144 17.7956C10.277 18.5682 9.20776 18.5682 8.8704 17.7956L7.99275 15.7854C7.21171 13.9966 5.80589 12.5726 4.0523 11.7942L1.63658 10.7219C.868536 10.381.868537 9.26368 1.63658 8.92276L3.97685 7.88394C5.77553 7.08552 7.20657 5.60881 7.97427 3.75892L8.8633 1.61673C9.19319.821767 10.2916.821765 10.6215 1.61673L11.5105 3.75894C12.2782 5.60881 13.7092 7.08552 15.5079 7.88394L17.8482 8.92276C18.6162 9.26368 18.6162 10.381 17.8482 10.7219L15.4325 11.7942C13.6789 12.5726 12.2731 13.9966 11.492 15.7854L10.6144 17.7956ZM4.53956 9.82234C6.8254 10.837 8.68402 12.5048 9.74238 14.7996 10.8008 12.5048 12.6594 10.837 14.9452 9.82234 12.6321 8.79557 10.7676 7.04647 9.74239 4.71088 8.71719 7.04648 6.85267 8.79557 4.53956 9.82234ZM19.4014 22.6899 19.6482 22.1242C20.0882 21.1156 20.8807 20.3125 21.8695 19.8732L22.6299 19.5353C23.0412 19.3526 23.0412 18.7549 22.6299 18.5722L21.9121 18.2532C20.8978 17.8026 20.0911 16.9698 19.6586 15.9269L19.4052 15.3156C19.2285 14.8896 18.6395 14.8896 18.4628 15.3156L18.2094 15.9269C17.777 16.9698 16.9703 17.8026 15.956 18.2532L15.2381 18.5722C14.8269 18.7549 14.8269 19.3526 15.2381 19.5353L15.9985 19.8732C16.9874 20.3125 17.7798 21.1156 18.2198 22.1242L18.4667 22.6899C18.6473 23.104 19.2207 23.104 19.4014 22.6899ZM18.3745 19.0469 18.937 18.4883 19.4878 19.0469 18.937 19.5898 18.3745 19.0469Z"
              ></path>
            </svg>
            <span>Hazte socio</span>
          </div>
        </div>

        <div class="cardt4">
          <div class="heading02">
            Tratamiento <span>No Farmacológico</span>
          </div>
          <div class="content-buton">
            <p className="text-buttoncard">
              {" "}
              <p className="TNF"><strong>Fisioterapia:</strong> Ayuda a retrasar la progresiónde los trastornosy motores y mantener la condición física necesaria, permitiendo 
              mayor autonomía. </p>
              <p className="TNF"><strong>Terapia ocupacional:</strong> conseguir la máxima autonomía e independencia para mejorar y/o mantener la calidad de vida</p>
              <p className="TNF"><strong>Logopedia:</strong> rehabilitación de los trastornos del lenguaje, de la comunicación y/o deglución asociados a la EP o minimizar 
                sus consecuencias</p>
              <p className="TNF"><strong>Psicología:</strong> mejorar la calidad de vida de los afectados de parkinson ayudando tanto al afectado como a todo su entorno 
                (cuidador/familiares) a aceptar y convivir con la enfermedad y su sintomatología</p>
              <p className="TNF"><strong>Otros profesionales: </strong> 
                <ul>
                  <li>Urólogo</li>
                  <li>Endocrino</li>
                  <li>Enfermería</li>
                  <li>Trabajadora social</li>
                </ul>
              </p>

            </p>
          </div>
          <div class="item item--inspire">
            <Link to= "/revitalization">
                 <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill="currentColor"
                d="M10.6144 17.7956C10.277 18.5682 9.20776 18.5682 8.8704 17.7956L7.99275 15.7854C7.21171 13.9966 5.80589 12.5726 4.0523 11.7942L1.63658 10.7219C.868536 10.381.868537 9.26368 1.63658 8.92276L3.97685 7.88394C5.77553 7.08552 7.20657 5.60881 7.97427 3.75892L8.8633 1.61673C9.19319.821767 10.2916.821765 10.6215 1.61673L11.5105 3.75894C12.2782 5.60881 13.7092 7.08552 15.5079 7.88394L17.8482 8.92276C18.6162 9.26368 18.6162 10.381 17.8482 10.7219L15.4325 11.7942C13.6789 12.5726 12.2731 13.9966 11.492 15.7854L10.6144 17.7956ZM4.53956 9.82234C6.8254 10.837 8.68402 12.5048 9.74238 14.7996 10.8008 12.5048 12.6594 10.837 14.9452 9.82234 12.6321 8.79557 10.7676 7.04647 9.74239 4.71088 8.71719 7.04648 6.85267 8.79557 4.53956 9.82234ZM19.4014 22.6899 19.6482 22.1242C20.0882 21.1156 20.8807 20.3125 21.8695 19.8732L22.6299 19.5353C23.0412 19.3526 23.0412 18.7549 22.6299 18.5722L21.9121 18.2532C20.8978 17.8026 20.0911 16.9698 19.6586 15.9269L19.4052 15.3156C19.2285 14.8896 18.6395 14.8896 18.4628 15.3156L18.2094 15.9269C17.777 16.9698 16.9703 17.8026 15.956 18.2532L15.2381 18.5722C14.8269 18.7549 14.8269 19.3526 15.2381 19.5353L15.9985 19.8732C16.9874 20.3125 17.7798 21.1156 18.2198 22.1242L18.4667 22.6899C18.6473 23.104 19.2207 23.104 19.4014 22.6899ZM18.3745 19.0469 18.937 18.4883 19.4878 19.0469 18.937 19.5898 18.3745 19.0469Z"
              ></path>
            </svg>
            <span><strong>Mira nuestros servicios</strong></span>
            </Link>
       
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonCard;
