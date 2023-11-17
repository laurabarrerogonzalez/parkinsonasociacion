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
  const [file, setFile] = useState(null);

  const handleFileSelect = (event) => {
    const fileInput = event.target;
    const selectedFile = fileInput.files[0];

    if (selectedFile.type.startsWith("image/")) {
      // Mostrar la vista previa de la imagen
      const reader = new FileReader();
      reader.onload = (e) => {
        const preview = document.getElementById("preview");
        const imgElement = document.createElement("img");
        imgElement.src = e.target.result;
        imgElement.alt = "Vista previa";

        // Aplicar estilos al elemento de la imagen
        imgElement.style.width = "100%";
        imgElement.style.height = "90%";

        preview.innerHTML = "";
        preview.appendChild(imgElement);
      };
      reader.readAsDataURL(selectedFile);
    } else if (selectedFile.type === "application/pdf") {
      const preview = document.getElementById("preview");
      const objectElement = document.createElement("object");
      objectElement.type = "application/pdf";
      
      preview.innerHTML = "";
      preview.appendChild(objectElement);
    } else {
      console.log("Archivo no compatible");
    }
  };

  window.addEventListener("scroll", function () {
    var images = document.querySelectorAll(
      ".img_form_work,.video_person_asociation"     
    );

    images.forEach(function (image) {
      var imagePosition = image.getBoundingClientRect().top;
      var screenPosition = window.innerHeight;

      if (imagePosition < screenPosition) {
        image.style.opacity = "4";
      } else {
        image.style.opacity = "0";
      }
    });
  });

  const [formsData, setFormsData] = useState({
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

  const customColor = "rgb(236, 117, 14)";

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormsData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleEnviarClick = () => {
    if (
      !(
        formsData.members === "Colaborativo" || formsData.members === "Afectado"
      )
    ) {
      swal.fire({
        title: "Error",
        text: "Por favor, elige un tipo de colaborador (Colaborativo o Afectado).",
        icon: "error",
        confirmButtonColor: customColor,
      });
      return;
    }

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

  return (
    <div>
      <Navbar />
      <BannerViews
        image="https://res.cloudinary.com/dp7lr71t8/image/upload/v1699001571/hands-1846428_pxnoco.jpg"
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

      <section className="container_logo_asociation_work">
        <img
          className="logo_asociation_work"
          src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1699013908/descarga-removebg-preview_chico_dzkvgc.png"
          alt=""
        />
      </section>
      <section className="container_form">
        <form className="form">
          <p className="title13">Regístrate</p>
          <p className="message">Registrate: "El futuro esta en tus manos"</p>
          <div className="flex">
            <label>
              <input className="input" type="text" placeholder="" required />
              <span>Nombres</span>
            </label>

            <label>
              <input className="input" type="text" placeholder="" required />
              <span>Apellidos</span>
            </label>
          </div>

          <label>
            <input className="input" type="email" placeholder="" required />
            <span>Email</span>
          </label>

          <label>
            <input className="input" type="text" placeholder="" required />
            <span>Teléfono</span>
          </label>
          <label>
            <input className="input" type="text" placeholder="" required />
            <span>Provincia</span>
          </label>
          <label>
            <input className="input" type="text" placeholder="" required />
            <span>Ciudad</span>
          </label>
          <label>
            <input className="input" type="text" placeholder="" required />
            <span>Código Postal</span>
          </label>

          <label>
            <select className="input" required>
              <option value="" disabled selected>
                Seleccione un cargo
              </option>
              <option value="Fisioterapeuta">Fisioterapeuta</option>
              <option value="Terapeuta Ocupacional">
                {" "}
                Terapeuta Ocupacional
              </option>
              <option value="Edicador@ Social">Edicador@ Social</option>
              <option value="Trabajador@ Social">Trabajador@ Social</option>
              <option value="Psicólog@">Psicólog@</option>
              <option value="Logopeda">Logopeda</option>
              <option value="Cuidador@">
                Auxiliar de Enfermeria/ Cuidador@
              </option>
              <option value="Limpieza">Servicio de Limpieza</option>
              <option value="Administración">Técnic@ de Administración</option>
              <option value="Monitor@">Monitor@ de Ocio y Tiempo Libre</option>
              <option value="Técnic@">
                {" "}
                Técnic@ superior en integarción social
              </option>
            </select>
            <span>Cargo a gestionar</span>
          </label>
          <div>
            <label>
              <span>Adjuntar Archivo</span>
              <input
                type="file"
                className="input"
                onChange={handleFileSelect}
                required
              />
            </label>
            <div id="preview"></div>
          </div>
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
