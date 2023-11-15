import React, { useState } from "react";
import "./Members.css";
import swal from "sweetalert2";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import ScrollArrow from "../../Components/ScrollArrow/ScrollArrow";
import ButtonDonate from "../../Components/ButtonDonate/ButtonDonate";
import BannerViews from "../../Components/BannerViews/BannerViews";
import TermsAndConditions from "../../Components/TermsAndConditions/TermsAndConditions";

const Members = () => {
  const [formData, setFormData] = useState({
    name: "",
    dni: "",
    birthdate: "",
    address: "",
    phone: "",
    email: "",
    iban: "",
    holder: "",
    services: "",
    members: "Colaborativo",
    termsAccepted: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "services") {
      setFormData((prevData) => ({
        ...prevData,
        services: checked
          ? [...prevData.services, value]
          : prevData.services.filter((services) => services !== value),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleEnviarClick = () => {
    if (
      !(formData.members === "Colaborativo" || formData.members === "Afectado")
    ) {
      swal.fire({
        title: "Error",
        text: "Por favor, elige un tipo de colaborador (Colaborativo o Afectado).",
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
        "https://localhost:7165/MembersControllers/Post",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            services: Array.isArray(formData.services) ? formData.services : [formData.services],
          }),
        }
      );

      if (response.status === 200) {
        swal.fire({
          title: "Enviado",
          text: "La información ha sido enviada.",
          icon: "success",
          confirmButtonColor: customColor,
        });
        setFormData({
          name: "",
          dni: "",
          birthdate: "",
          address: "",
          phone: "",
          email: "",
          iban: "",
          holder: "",
          services: "",
          members: "Colaborativo",
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
                Número para la Transferencia: ES79 2100 8985 4702 0001
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
                Número para realizar Bizum: 674 09 45 01
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
            placeholder="Fecha de naciomiento"
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
            name="iban"
            className="input14"
            placeholder="Cuenta Bancaria/IBAN"
            value={formData.iban}
            onChange={handleInputChange}
          />
          <input
            type="text"
            autoComplete="off"
            name="holder"
            className="input14"
            placeholder="Titular de la cuenta"
            value={formData.holder}
            onChange={handleInputChange}
          />
          <h2>Marcar servicio de interés:</h2>
          <div className="customCheckBoxHolder">
            <input
              className="customCheckBoxInput"
              id="cCB1"
              type="checkbox"
              name="services"
              value="Servicio rehabilitación integral"
              checked={formData.services.includes(
                "Servicio rehabilitación integral"
              )}
              onChange={handleInputChange}
            />
            <label className="customCheckBoxWrapper" htmlFor="cCB1">
              <div className="customCheckBox">
                <div className="inner">Servicio rehabilitación integral</div>
              </div>
            </label>

            <input
              className="customCheckBoxInput"
              id="cCB2"
              type="checkbox"
              name="services"
              value="Servicio estimulación cognitiva"
              checked={formData.services.includes(
                "Servicio estimulación cognitiva"
              )}
              onChange={handleInputChange}
            />
            <label className="customCheckBoxWrapper" htmlFor="cCB2">
              <div className="customCheckBox">
                <div className="inner">Servicio estimulación cognitiva</div>
              </div>
            </label>

            <input
              className="customCheckBoxInput"
              id="cCB3"
              type="checkbox"
              name="services"
              value="Información y orientación"
              checked={formData.services.includes("Información y orientacióna")}
              onChange={handleInputChange}
            />
            <label className="customCheckBoxWrapper" htmlFor="cCB3">
              <div className="customCheckBox">
                <div className="inner">Información y orientación</div>
              </div>
            </label>

            <input
              className="customCheckBoxInput"
              id="cCB4"
              type="checkbox"
              name="services"
              value="Otro"
              checked={formData.services.includes("Otro")}
              onChange={handleInputChange}
            />
            <label className="customCheckBoxWrapper" htmlFor="cCB4">
              <div className="customCheckBox">
                <div className="inner">Otros</div>
              </div>
            </label>
          </div>
          <h2>Marcar tipo de socio:</h2>
          <div className="radio-inputs">
            <label
              className={formData.members === "Colaborativo" ? "selected" : ""}
            >
              <input
                className="radio-input"
                type="radio"
                name="members"
                onChange={() =>
                  handleInputChange({
                    target: { name: "members", value: "Colaborativo" },
                  })
                }
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
            <label lassName={formData.members === "Afectado" ? "selected" : ""}>
              <input
                className="radio-input"
                type="radio"
                name="members"
                onChange={() =>
                  handleInputChange({
                    target: { name: "members", value: "Afectado" },
                  })
                }
              />
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
        <br />
        <div>
          <h3>
            *En caso de socio afectado deberá remitir a la entidad vía email
            copia de informe médico actualizado, DNI y tarjeta sanitaria o
            seguro médico.
          </h3>
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

export default Members;
