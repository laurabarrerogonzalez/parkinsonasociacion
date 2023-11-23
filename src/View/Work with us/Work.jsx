import React, { useState } from "react";
import "../Work with us/Work.css";
import swal from "sweetalert2";
import Navbar from "../../Components/Navbar/Navbar";
import BannerViews from "../../Components/BannerViews/BannerViews";
import Footer from "../../Components/Footer/Footer";
import ScrollArrow from "../../Components/ScrollArrow/ScrollArrow";
import ButtonDonate from "../../Components/ButtonDonate/ButtonDonate";
import TermsAndConditions from "../../Components/TermsAndConditions/TermsAndConditions";

const Work = () => {
  const [fileUrl, setFileUrl] = useState("");

  const [formsData, setFormsData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    province: "",
    city: "",
    zipcode: "",
    positions: "",
    archive: null,
    termsAccepted: false,
  });

  const customColor = "rgb(236, 117, 14)";

  const [positions, setPositions] = useState([
    "Fisioterapeuta",
    "Terapeuta Ocupacional",
    "Educador@ Social",
    "Trabajador@ Social",
    "Psicólog@",
    "Logopeda",
    "Auxiliar de Enfermeria/ Cuidador@",
    "Servicio de Limpieza",
    "Técnic@ de Administración",
    "Monitor@ de Ocio y Tiempo Libre",
    "Técnic@ superior en integarción social",
  ]);

  const [selectedPosition, setSelectedPosition] = useState("");

  const handleFileUrlChange = (e) => {
    const { value } = e.target;

    setFileUrl(value);

    setFormsData((prevData) => ({
      ...prevData,
      archive: value, 
    }));
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "positions") {
      setSelectedPosition(value);
    }

    if (name === "archive") {
      setFileUrl(value); 
    }

    setFormsData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleEnviarClick = () => {
    if (!formsData.termsAccepted) {
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
          sendFormsDataToAPI(formsData);
        }
      });
  };

  const sendFormsDataToAPI = async () => {
    try {
      const response = await fetch("https://localhost:7165/WorkControllers/Post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formsData),
      });

      if (response.ok) {
        swal.fire({
          title: "Enviado",
          text: "La información ha sido enviada.",
          icon: "success",
          confirmButtonColor: customColor,
        });
        setFormsData({
          name: "",
          lastName: "",
          email: "",
          phone: "",
          province: "",
          city: "",
          zipcode: "",
          positions: "",
          archive: null,
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
    <div>
      <Navbar />
      <BannerViews
        image="https://res.cloudinary.com/dp7lr71t8/image/upload/v1700401445/trabaja_sfweaf.jpg"
        title="TRABAJA CON NOSOTROS"
      />
      <section className="section_person_asociation">
        <div className="title_person_asociation">
          <p>
            <span class="fuente_one">Las personas en la</span>
            <span class="fuente_two"> asociación</span>
          </p>
        </div>
        <div className="text_person_asociation">
          <p>
            "En la Asociación Regional de Parkinson Extremadura, creemos en el
            poder de las personas para marcar la diferencia. Nuestro compromiso
            es crear un ambiente donde puedas prosperar y contribuir al
            bienestar de quienes enfrentan el Parkinson. Valoramos el
            aprendizaje, la creatividad y el desarrollo de tu potencial.
            Promovemos el bienestar físico y emocional, alentando la
            comunicación y el feedback constructivo. Si compartes nuestra visión
            y deseas formar parte de un equipo comprometido con hacer una
            diferencia en la vida de las personas, te invitamos a unirte a
            nosotros. Ofrecemos diversas oportunidades en nuestro Centro de Día,
            asistencia a domicilio, formación, voluntariado, ocio y
            rehabilitación integral. Únete a nuestra misión de apoyo en
            Extremadura."
          </p>
        </div>
        <div className="video_person_asociation">
          <img
            className="img_person_work"
            src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1699005207/pexels-andrea-piacquadio-3756679-removebg-preview_emgl9i.png"
            alt=""
          />
        </div>
      </section>
      <hr className="line_work" />
      <div className="title_form_asociation">
        <p>
          <span class="fuente_one">Trabaja en nuestra</span>
          <span class="fuente_two"> asociación</span>
        </p>
      </div>
      <div className="text_form_asociation">
        <p>
          Si quieres unirte a nuestro reto y formar parte de nuestra comunidad,
          registrate:
        </p>
      </div>
      <section className="container_form">
        <form className="form" encType="multipart/form-data">
          <p className="title13">Regístrate</p>
          <p className="message">Registrate: "El futuro esta en tus manos"</p>
          <div className="flex">
            <label>
              <input
                className="input"
                type="text"
                placeholder=""
                required
                name="name"
                value={formsData.name}
                onChange={handleInputChange}
              />
              <span>Nombres</span>
            </label>
            <label>
              <input
                className="input"
                type="text"
                placeholder=""
                required
                name="lastName"
                value={formsData.lastName}
                onChange={handleInputChange}
              />
              <span>Apellidos</span>
            </label>
          </div>
          <label>
            <input
              className="input"
              type="email"
              placeholder=""
              required
              name="email"
              value={formsData.email}
              onChange={handleInputChange}
            />
            <span>Email</span>
          </label>
          <label>
            <input
              className="input"
              type="text"
              placeholder=""
              required
              name="phone"
              value={formsData.phone}
              onChange={handleInputChange}
            />
            <span>Teléfono</span>
          </label>
          <label>
            <input
              className="input"
              type="text"
              placeholder=""
              required
              name="province"
              value={formsData.province}
              onChange={handleInputChange}
            />
            <span>Provincia</span>
          </label>
          <label>
            <input
              className="input"
              type="text"
              placeholder=""
              required
              name="city"
              value={formsData.city}
              onChange={handleInputChange}
            />
            <span>Ciudad</span>
          </label>
          <label>
            <input
              className="input"
              type="text"
              placeholder=""
              required
              name="zipcode"
              value={formsData.zipcode}
              onChange={handleInputChange}
            />
            <span>Código Postal</span>
          </label>
          <label>
            <select
              className="input"
              required
              name="positions"
              value={formsData.positions}
              onChange={handleInputChange}
            >
              <option value="" disabled selected>
                Seleccione un cargo
              </option>
              {positions.map((positions) => (
                <option key={positions} value={positions}>
                  {positions}
                </option>
              ))}
            </select>
            <span>Cargo a gestionar</span>
          </label>
          <label>
            <span>Adjuntar Archivo (URL)</span>
            <input
              type="text" 
              className="input"
              placeholder="Ingrese la URL del archivo"
              value={fileUrl}
              onChange={handleFileUrlChange}
              required
            />
          </label>
          <div className="checkbox-container">
            <input
              type="checkbox"
              checked={formsData.termsAccepted}
              onChange={() =>
                handleInputChange({
                  target: {
                    name: "termsAccepted",
                    value: !formsData.termsAccepted,
                  },
                })
              }
            />
            <div
              className={`checkmark ${
                formsData.termsAccepted ? "checked" : ""
              }`}
            ></div>
            <div className="Terminos">
              <TermsAndConditions />
            </div>
          </div>
          <button
            onClick={handleEnviarClick}
            className={`submit ${formsData.termsAccepted ? "accepted" : ""}`}
            type="button"
          >
            Enviar
          </button>
        </form>
        <div className="img_form">
          <div className="img_form_work">
            <img
              className="img_form_people"
              src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1699017362/20230420_115157_viks1q.jpg"
              alt=""
            />
          </div>
          <div className="img_form_work"></div>
          <div className="img_form_work"></div>
          <div className="img_form_work">
            <img
              className="img_form_people"
              src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1699017363/20200415_100037_xcsgqv.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
      <Footer />
      <ButtonDonate />
      <ScrollArrow />
    </div>
  );
};
export default Work;
