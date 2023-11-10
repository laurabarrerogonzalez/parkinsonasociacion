import "./Voluntary.css";
import React from "react";
import swal from "sweetalert2";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ButtonDonate from "../../Components/ButtonDonate/ButtonDonate";
import ScrollArrow from "../../Components/ScrollArrow/ScrollArrow";
import BannerViews from "../../Components/BannerViews/BannerViews";

const Voluntary = () => {
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
      <div className="photos">
        <Navbar />
        <BannerViews
          image="https://res.cloudinary.com/da7ffijqs/image/upload/v1698681283/20201119_125749_1_lmqez1.jpg"
          title="¿QUIERES SER VOLUNTARIO?"
        />
        <div className="box1">
          <div className="text1">
            <h1>Objetivos</h1>
          </div>
          <div className="text2">
            <h2>
              Mejorar la calidad de vida de las personas afectadas por la
              enfermedad de Parkinson y a sus familiares. Promoción del
              voluntariado social y fomento de accuiones y actividades de
              interés general de naturaleza análoga.
            </h2>
          </div>
        </div>
        <div className="box2">
          <div className="text3">
            <h2>
              Asistencia a los cursos de formación. Disponer de fechas libres.
              Tener más de 21 años. Entrevista y acompañamiento personal en base
              al proyecto elegido. Cumplir las normas.
            </h2>
          </div>
          <div className="text4">
            <h1>Requisitos</h1>
          </div>
        </div>
      </div>
      <form className="form11">
        <p className="title12">Solicitud Voluntariado</p>
        <p className="message13">
          Ayudar es un regalo que se da con el corazón.
        </p>
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
            placeholder="Formación"
          />
          <div className="radio-inputs">
            <label>
              <input className="radio-input" type="radio" name="engine" />
              <span className="radio-tile">
                <span className="radio-icon">
                  <img
                    className="iconos1"
                    src="https://res.cloudinary.com/da7ffijqs/image/upload/v1699523977/_63c2f168-6681-4203-a864-def47b6c13e9-modified_gml1c5.png"
                  />
                </span>
                <span className="radio-label">Mañanas</span>
              </span>
            </label>
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
                    src="https://res.cloudinary.com/da7ffijqs/image/upload/v1699523003/_9eb70b3d-1fe2-4adf-a18a-86aa53ea5e6f-removebg-preview_mh6cyo.png"
                  />
                </span>
                <span className="radio-label">Tardes</span>
              </span>
            </label>
            <label>
              <input className="radio-input" type="radio" name="engine" />
              <span className="radio-tile">
                <span className="radio-icon">
                  <img
                    className="iconos3"
                    src="https://res.cloudinary.com/da7ffijqs/image/upload/v1699526592/_20e53d9a-7260-4834-81d4-949bc5d96d25-modified_f7l2s1.png"
                  />
                </span>
                <span className="radio-label">Fin de Semana</span>
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

export default Voluntary;
