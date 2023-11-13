import React, { useEffect } from "react";
import "./Members.css";
import swal from "sweetalert2";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import ScrollArrow from "../../Components/ScrollArrow/ScrollArrow";
import ButtonDonate from "../../Components/ButtonDonate/ButtonDonate";
import BannerViews from "../../Components/BannerViews/BannerViews";

const Members = () => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const elements = document.querySelectorAll(".services_info");
    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;

      const isVisible = elementTop < window.innerHeight && elementBottom >= 0;

      if (isVisible) {
        element.classList.add("appear");
      } else {
        element.classList.remove("appear");
      }
    });
  };

  const customColor = "rgb(236, 117, 14)";

  const handleEnviarClick = () => {
    swal
      .fire({
        title: "¿Estás seguro de enviar la información?",
        text: "Una vez enviada, no podrás modificarla.",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: customColor,
        cancelButtonColor: "#6c757d",
        confirmButtonText: "Sí, enviar",
        cancelButtonText: "Cancelar",
      })
      .then((result) => {
        if (result.isConfirmed) {
          swal.fire({
            title: "Enviado",
            text: "La información ha sido enviada.",
            icon: "success",
            confirmButtonColor: customColor,
          });
        }
      });
  };

  return (
    <>
      <Navbar />
      <BannerViews
        image="https://res.cloudinary.com/da7ffijqs/image/upload/t_Banner 16:9/v1699001271/20200415_111209_1_iacccg.jpg "
        title="¿Quieres ser socio?"
      />
      <div className="Carta0">
        <div class="cards1">
          <span></span>
          <div class="content">
            <br />
            <br />
            <h1>Socio Colaborativo</h1>
            <br />
            <p>
              Esto se refiere a una relación o situación en la que individuos,
              grupos o entidades trabajan juntos de manera cooperativa para
              lograr un objetivo común. En el contexto del Parkinson, esto
              podría referirse a la colaboración entre profesionales de la
              salud, cuidadores, pacientes y organizaciones para ofrecer un
              cuidado integral, terapias, apoyo emocional, recursos y
              tratamientos para mejorar la calidad de vida de quienes viven con
              la enfermedad de Parkinson.
            </p>
          </div>
        </div>
        <div class="cards1">
          <span></span>
          <div class="content">
            <br />
            <br />
            <h1>Socio Afectado</h1>
            <br />
            <p>
              Esto se refiere a un individuo que se ve directamente impactado
              por la enfermedad de Parkinson, ya sea como paciente diagnosticado
              con la enfermedad o como alguien cercano al paciente que
              experimenta los efectos emocionales, físicos y sociales de la
              condición. Esto podría incluir a familiares, amigos, cuidadores o
              personas en roles cercanos que se ven afectados por las
              dificultades que plantea el Parkinson.
            </p>
          </div>
        </div>
      </div>
      <div className="Carta10">
        <div class="cards2">
          <div class="first-content">
            <span>
              <img
                class="imagencards"
                src="https://res.cloudinary.com/da7ffijqs/image/upload/v1699360429/Captura_de_pantalla_2023-11-07_131458-removebg-preview_1_dbu8yz.png"
                alt=""
              />
            </span>
          </div>
          <div class="second-content">
            <span className="Text23">
              <h2>Transferencia</h2>
              <br />
              <p>
                Puede ser realizada a través de la banca en línea, aplicación
                móvil o visitando una sucursal bancaria.
                <br />
                <br />
                Numero para la Transferencia: ES79 2100 8985 4702 0001
                <br />
                Entidad bancaria: La Caixa
              </p>
            </span>
          </div>
        </div>
        <div class="cards2">
          <div class="first-content">
            <span>
              <img
                class="imagencards1"
                src="https://res.cloudinary.com/da7ffijqs/image/upload/v1699361121/El_motivo_por_el_que_no_debes_usar_Bizum-removebg-preview_kuqrgj.png"
                alt=""
              />
            </span>
          </div>
          <div class="second-content">
            <span className="Text23">
              <h2>Bizum</h2>
              <br />
              <p>
                Se lleva a cabo a través de aplicaciones móviles de los bancos
                asociados a Bizum que permiten realizar pagos instantáneos con
                tan solo el número de teléfono móvil del destinatario.
                <br />
                <br />
                Numero para realizar Bizum: 674 09 45 01
              </p>
            </span>
          </div>
        </div>
      </div>
      <form className="form12">
        <p className="title12">Solicitud Socio</p>
        <div className="flex14">
          <input
            type="text"
            autoComplete="off"
            name="text"
            className="input14"
            placeholder="Nombre y apellidos"
          />
          <input
            type="text"
            autoComplete="off"
            name="text"
            className="input14"
            placeholder="DNI"
          />
          <input
            type="text"
            autoComplete="off"
            name="text"
            className="input14"
            placeholder="Fecha de naciomiento"
          />
          <input
            type="text"
            autoComplete="off"
            name="text"
            className="input14"
            placeholder="Domicilio"
          />
          <input
            type="text"
            autoComplete="off"
            name="text"
            className="input14"
            placeholder="Telefono"
          />
          <input
            type="text"
            autoComplete="off"
            name="text"
            className="input14"
            placeholder="Email"
          />
          <input
            type="text"
            autoComplete="off"
            name="text"
            className="input14"
            placeholder="Cuenta Bancaria/IBAN"
          />
          <input
            type="text"
            autoComplete="off"
            name="text"
            className="input14"
            placeholder="Titular de la cuenta"
          />
          <div className="customCheckBoxHolder">
            <input className="customCheckBoxInput" id="cCB1" type="checkbox" />
            <label className="customCheckBoxWrapper" htmlFor="cCB1">
              <div className="customCheckBox">
                <div className="inner">Servicio rehabilitación integral</div>
              </div>
            </label>

            <input className="customCheckBoxInput" id="cCB2" type="checkbox" />
            <label className="customCheckBoxWrapper" htmlFor="cCB2">
              <div className="customCheckBox">
                <div className="inner">Servicio estimulación cognitiva</div>
              </div>
            </label>

            <input className="customCheckBoxInput" id="cCB3" type="checkbox" />
            <label className="customCheckBoxWrapper" htmlFor="cCB3">
              <div className="customCheckBox">
                <div className="inner">Información y orientación</div>
              </div>
            </label>

            <input className="customCheckBoxInput" id="cCB4" type="checkbox" />
            <label className="customCheckBoxWrapper" htmlFor="cCB4">
              <div className="customCheckBox">
                <div className="inner">Otros</div>
              </div>
            </label>
          </div>
          <div className="radio-inputs">
            <label>
              <input
                className="radio-input"
                type="radio"
                name="engine"
                defaultChecked
              />
              <span className="radio-tile">
                <span className="radio-icon">
                  <img
                    className="iconos2"
                    src="https://res.cloudinary.com/da7ffijqs/image/upload/v1699533652/_10db012b-e128-4d83-9991-e71749e99874-modified_ct8sdp.png "
                  />
                </span>
                <span className="radio-label">Colaborativo</span>
              </span>
            </label>
            <label>
              <input className="radio-input" type="radio" name="engine" />
              <span className="radio-tile">
                <span className="radio-icon">
                  <img
                    className="iconos3"
                    src="https://res.cloudinary.com/da7ffijqs/image/upload/v1699534004/61_sin_t%C3%ADtulo_20231027173013-modified_wflhki.png"
                  />
                </span>
                <span className="radio-label">Afectado</span>
              </span>
            </label>
          </div>
          <label className="container40">
            <input defaultChecked type="checkbox" />
            <div className="checkmark"></div>
            <div className="Terminos">
              <p>Acepto las Conciciones y la Politica de privacidad</p>
            </div>
          </label>
        </div>
        <br />
        <div>
          *En caso de socio afectado deberá remitir a la entidad vía email copia
          de informe médico actualizado, DNI y tarjeta sanitaria o seguro
          médico.
        </div>
        <button onClick={handleEnviarClick} className="bn01" type="button">
          Enviar!
        </button>
      </form>
      <Footer />
      <ButtonDonate />
      <ScrollArrow />
    </>
  );
};

export default Members;
