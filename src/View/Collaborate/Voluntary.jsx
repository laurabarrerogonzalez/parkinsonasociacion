import "./Voluntary.css";
import React, { useState } from "react";
import swal from "sweetalert2";
import Footer from "../../Components/Footer/Footer";
import ButtonDonate from "../../Components/ButtonDonate/ButtonDonate";
import ScrollArrow from "../../Components/ScrollArrow/ScrollArrow";
import BannerViews from "../../Components/BannerViews/BannerViews";
import TermsAndConditions from "../../Components/TermsAndConditions/TermsAndConditions";

const Voluntary = () => {
  const [formData, setFormData] = useState({
    name: "",
    dni: "",
    birthdate: "",
    address: "",
    phone: "",
    email: "",
    education: "",
    shift: "Tardes",
    termsAccepted: false,
  });

  const customColor = "rgb(236, 117, 14)";

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleEnviarClick = () => {
    if (
      !(
        formData.shift === "Mañanas" ||
        formData.shift === "Tardes" ||
        formData.shift === "Fin de Semana"
      )
    ) {
      swal.fire({
        title: "Error",
        text: "Por favor, elige un turno (Mañanas, Tardes o Fin de Semana).",
        icon: "error",
        confirmButtonColor: customColor,
      });
      return;
    }

    if (!formData.termsAccepted) {
      swal.fire({
        title: "Error",
        text: "Debes aceptar las Condiciones y la Política de privacidad.",
        icon: "error",
        confirmButtonColor: customColor,
      });
      return;
    }

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
          sendFormDataToAPI(formData);
        }
      });
  };

  const sendFormDataToAPI = async () => {
    try {
      const response = await fetch(
        "https://localhost:7165/VolunteersControllers/Post",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.status === 200) {
        swal.fire({
          title: "Enviado",
          text: "La información ha sido enviada.",
          icon: "success",
          confirmButtonColor: customColor,
        });

        // Restablecer los campos del formulario después de enviar los datos
        setFormData({
          name: "",
          dni: "",
          birthdate: "",
          address: "",
          phone: "",
          email: "",
          education: "",
          shift: "Tardes",
          termsAccepted: false,
        });
      } else {
        throw new Error("Error al enviar los datos");
      }
    } catch (error) {
      console.error("Error:", error);
      swal.fire({
        title: "Error",
        text: "Hubo un error al enviar la información.",
        icon: "error",
        confirmButtonColor: customColor,
      });
    }
  };

  return (
    <>
      <div className="photos">
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
              voluntariado social y fomento de acciones y actividades de interés
              general de naturaleza análoga.
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
            name="name"
            className="input14"
            placeholder="Nombre y apellidos"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            autoComplete="off"
            name="dni"
            className="input14"
            placeholder="DNI"
            value={formData.dni}
            onChange={handleInputChange}
          />
          <input
            type="text"
            autoComplete="off"
            name="birthdate"
            className="input14"
            placeholder="Fecha de nacimiento"
            value={formData.birthdate}
            onChange={handleInputChange}
          />
          <input
            type="text"
            autoComplete="off"
            name="address"
            className="input14"
            placeholder="Domicilio"
            value={formData.address}
            onChange={handleInputChange}
          />
          <input
            type="text"
            autoComplete="off"
            name="phone"
            className="input14"
            placeholder="Teléfono"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <input
            type="text"
            autoComplete="off"
            name="email"
            className="input14"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            autoComplete="off"
            name="education"
            className="input14"
            placeholder="Formación"
            value={formData.education}
            onChange={handleInputChange}
          />
          <h2>Marcar disponibilidad:</h2>
          <div className="radio-inputs">
            <label className={formData.shift === "Mañanas" ? "selected" : ""}>
              <input
                className="radio-input"
                type="radio"
                name="shift"
                onChange={() =>
                  handleInputChange({
                    target: { name: "shift", value: "Mañanas" },
                  })
                }
              />
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
            <label className={formData.shift === "Tardes" ? "selected" : ""}>
              <input
                className="radio-input"
                type="radio"
                name="shift"
                onChange={() =>
                  handleInputChange({
                    target: { name: "shift", value: "Tardes" },
                  })
                }
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
            <label
              className={formData.shift === "Fin de Semana" ? "selected" : ""}
            >
              <input
                className="radio-input"
                type="radio"
                name="shift"
                onChange={() =>
                  handleInputChange({
                    target: { name: "shift", value: "Fin de Semana" },
                  })
                }
              />
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
          <div className="checkbox-container">
            <input
              type="checkbox"
              checked={formData.termsAccepted}
              onChange={() =>
                handleInputChange({
                  target: {
                    name: "termsAccepted",
                    value: !formData.termsAccepted,
                  },
                })
              }
            />
            <div
              className={`checkmark ${formData.termsAccepted ? "checked" : ""}`}
            ></div>
            <div className="Terminos">
              <TermsAndConditions />
            </div>
          </div>
        </div>
        <button
          onClick={handleEnviarClick}
          className={`bn01 ${formData.termsAccepted ? "accepted" : ""}`}
          type="button"
        >
          Enviar
        </button>
      </form>
      <Footer />
      <ButtonDonate />
      <ScrollArrow />
    </>
  );
};

export default Voluntary;
