import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "../Parkinson/Myths.css";
import Footer from "../../assets/Components/Footer/Footer.jsx";
import BannerViews from "../../Components/BannerViews/BannerViews";
import ButtonDonate from "../../Components/ButtonDonate/ButtonDonate.jsx";
import ScrollArrow from "../../Components/ScrollArrow/ScrollArrow.jsx";

const Myths = () => {
  return (
    <>
      <div>
        <Navbar />
        <BannerViews
          image="https://res.cloudinary.com/dit2zhtwz/image/upload/v1698744222/pareja-alegre-celebracion-icono-votacion-sentado-sofa_53876-24976_kke7zn.jpg"
          title="MITOS Y VERDADES"
        />
      </div>

      <div className="titlecard">
        <h2 className="myths">MITOS</h2>
        <h2 className="vs">VS</h2>
        <h2 className="truths">VERDADES</h2>
      </div>

      <div className="cardmyth">
        <div class="cardd">
          <div class="content">
            <div class="front1">
              <h3 class="titles">MITO</h3>
              <p class="subtitle">
                <strong>Es una enfermedad hereditaria</strong>
              </p>
            </div>

            <div class="back1">
              <h3 class="titles">Verdad</h3>
              <p class="description">
                Solo un pequeño porcentaje (10%-15%) tiene antecedentes
                familiares.
                <br></br>
                Hay una combinación de factores: ambientales, genéticos,
                envejecimiento, sustancias tóxicas...
              </p>
            </div>
          </div>
        </div>

        <div class="cardd">
          <div class="content">
            <div class="front2">
              <h3 class="titles">MITO</h3>
              <p class="subtitle">
                <strong>
                  Es una enfermedad propia de las personas mayores
                </strong>
              </p>
            </div>

            <div class="back2">
              <h3 class="titles">Verdad</h3>
              <p class="description">
                Inicio común 50-60 años: 70% diagnósticos con más de 65 años.
                <br></br>
                10% diagnosticadas antes de los 40 años - 20 de cada 100
                <br></br>
                Diagnóstico retrasado y confuso
              </p>
            </div>
          </div>
        </div>

        <div class="cardd">
          <div class="content">
            <div class="front4">
              <h3 class="titles">MITO</h3>
              <p class="subtitle">
                <strong>Produce demencia y pérdida de razonamiento</strong>
              </p>
            </div>

            <div class="back4">
              <h3 class="titles">Verdad</h3>
              <p class="description">
                Parkinson es distinto del Alzheimer.
                <br></br>
                No pierde capacidad de razonamiento.
                <br></br>
                Estadios avanzados proceso degenerativo mental
              </p>
            </div>
          </div>
        </div>

        <div class="cardd">
          <div class="content">
            <div class="front6">
              <h3 class="titles">MITO</h3>
              <p class="subtitle">
                <strong>Todo temblor es Parkinson</strong>
              </p>
            </div>

            <div class="back6">
              <h3 class="titles">Verdad</h3>
              <p class="description">
                Otras enfermedades también cursan con temblor
              </p>
            </div>
          </div>
        </div>

        <div class="cardd">
          <div class="content">
            <div class="front7">
              <h3 class="titles">MITO</h3>
              <p class="subtitle">
                <strong>Se manifiesta solo con temblores</strong>
              </p>
            </div>

            <div class="back7">
              <h3 class="titles">Verdad</h3>
              <p class="description">
                Existen otros síntomas motores y no motores que caracterizan la
                enfermedad
                <br></br>
                NO todos manifiestan temblores, algunos no llegan a sufrirlos
                nunca
              </p>
            </div>
          </div>
        </div>

        <div class="cardd">
          <div class="content">
            <div class="front8">
              <h3 class="titles">MITO</h3>
              <p class="subtitle">
                <strong>
                  No limita en la realización de las actividades diarias
                </strong>
              </p>
            </div>

            <div class="back8">
              <h3 class="titles">Verdad</h3>
              <p class="description">
                Si, en más del 80% de CASOS MODERADOS Y SEVEROS (Invisibles para
                la sociedad)
              </p>
            </div>
          </div>
        </div>

        <div class="cardd">
          <div class="content">
            <div class="front9">
              <h3 class="titles">MITO</h3>
              <p class="subtitle">
                <strong>Es una enfermedad neurológica menor</strong>
              </p>
            </div>

            <div class="back9">
              <h3 class="titles">Verdad</h3>
              <p class="description">
                NO: es la 2ª enfermedad neurodegenerativa tras el alzheime
              </p>
            </div>
          </div>
        </div>

        <div class="cardd">
          <div class="content">
            <div class="front10">
              <h3 class="titles">MITO</h3>
              <p class="subtitle">
                <strong>Solo existen tratamientos farmacológicos</strong>
              </p>
            </div>

            <div class="back10">
              <h3 class="titles">Verdad</h3>
              <p class="description">
                Es muy importante combinar el tratamiento con terapias de
                rehabilitación
              </p>
            </div>
          </div>
        </div>

        <div class="cardd">
          <div class="content">
            <div class="front11">
              <h3 class="titles">MITO</h3>
              <p class="subtitle">
                <strong>Es mortal esta enfermedad</strong>
              </p>
            </div>

            <div class="back11">
              <h3 class="titles">Verdad</h3>
              <p class="description">
                A pesar de ser una enfermedad crónica, las personas no mueren a
                causa del párkinson
              </p>
            </div>
          </div>
        </div>

        <div class="cardd">
          <div class="content">
            <div class="front12">
              <h3 class="titles">MITO</h3>
              <p class="subtitle">
                <strong>Nadie puede ayudarme</strong>
              </p>
            </div>

            <div class="back12">
              <h3 class="titles">Verdad</h3>
              <p class="description">
                Médicos más informados y apoyo de asociaciones benefician a
                pacientes
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <ButtonDonate />
      <ScrollArrow />
    </>
  );
};

export default Myths;
