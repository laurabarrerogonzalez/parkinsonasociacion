import React from "react";
import "../Work with us/Work.css"
import Navbar from "../../Components/Navbar/Navbar";
import BannerViews from "../../Components/BannerViews/BannerViews";
import Footer from "../../Components/Footer/Footer";
import ScrollArrow from '../../Components/ScrollArrow/ScrollArrow';
import ButtonDonate from "../../Components/ButtonDonate/ButtonDonate";
import TermsAndConditions from "../../Components/TermsAndConditions/TermsAndConditions";
const Work = () => {
<<<<<<< HEAD
  const [file, setFile] = useState(null);

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

  const handleFileSelect = (event) => {
    const fileInput = event.target;
    const selectedFile = fileInput.files[0];

    setFile(selectedFile);

    setFormsData((prevData) => ({
      ...prevData,
      archive: selectedFile, 
    }));

    if (selectedFile.type.startsWith("image/")) {
      // Resto del código para mostrar la vista previa si es una imagen
    } else if (selectedFile.type === "application/pdf") {
      // Resto del código para manejar archivos PDF
    } else {
      console.log("Archivo no compatible");
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "positions") {
      setSelectedPosition(value);
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
      const formData = new FormData();

      // Agregar datos del formulario
      Object.entries(formsData).forEach(([key, value]) => {
        if (key !== "archive") {
          formData.append(key, value);
        }
      });

      if (formsData.archive) {
        formData.append("archive", formsData.archive);
      }

      // Agregar el archivo

      const response = await fetch(
        "https://localhost:7165/WorkControllers/Post",
        {
          method: "POST",
          body: formData,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        // Éxito
        swal.fire({
          title: "Enviado",
          text: "La información ha sido enviada.",
          icon: "success",
          confirmButtonColor: customColor,
        });
        setFormsData({
          // ... otros campos del formulario
          archive: null,  // Reinicializar 'archive' a null después del envío
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
            <div id="preview">{file && <p>{file.name}</p>}</div>
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
=======
    window.addEventListener('scroll', function () {
        var images = document.querySelectorAll('.img_form_work,.video_person_asociation');
        images.forEach(function (image) {
            var imagePosition = image.getBoundingClientRect().top;
            var screenPosition = window.innerHeight;
            // Verificar si la imagen está en el punto deseado para mostrarla con la animación
            if (imagePosition < screenPosition) {
                image.style.opacity = '4';
            }
            else {
                image.style.opacity = '0'; // Si la imagen no está en la posición deseada, ocultarla
            }
        });
    });
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
                    <p>"En la Asociación Regional de Parkinson Extremadura,
                        creemos en el poder de las personas para marcar la diferencia.
                        Nuestro compromiso es crear un ambiente donde puedas prosperar y contribuir al bienestar de quienes enfrentan el Parkinson.
                        Valoramos el aprendizaje, la creatividad y el desarrollo de tu potencial. Promovemos el
                        bienestar físico y emocional, alentando la comunicación y el feedback constructivo.
                        Si compartes nuestra visión y deseas formar parte de un equipo comprometido con hacer
                        una diferencia en la vida de las personas, te invitamos a unirte a nosotros. Ofrecemos diversas oportunidades en nuestro Centro de Día, asistencia a domicilio, formación, voluntariado, ocio y rehabilitación integral. Únete a nuestra misión de apoyo en Extremadura."</p>
                </div>
                <div className="video_person_asociation">
                    <img className="img_person_work" src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1699005207/pexels-andrea-piacquadio-3756679-removebg-preview_emgl9i.png" alt="" />
                </div>
            </section>
            <hr className='line_work' />
            <div className="title_form_asociation">
                <p>
                    <span class="fuente_one">Trabaja en nuestra</span>
                    <span class="fuente_two"> asociación</span>
                </p>
>>>>>>> origin/Laura
            </div>
            <div className="text_form_asociation">
                <p>Si quieres unirte a nuestro reto y formar parte de nuestra comunidad, registrate:</p>
            </div>
            <section className="container_logo_asociation_work">
                <img className="logo_asociation_work" src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1699013908/descarga-removebg-preview_chico_dzkvgc.png" alt="" />
            </section>
            <section className="container_form">
                <form className="form_work">
                    <p className="title_work">Regístrate</p>
                    <p className="message">Registrate: "El futuro esta en tus manos"</p>
                    <div className="flex">
                        <label>
                            <input className="input_work" type="text" placeholder="" required />
                            <span>Nombres</span>
                        </label>
                        <label>
                            <input className="input_work" type="text" placeholder="" required />
                            <span>Apellidos</span>
                        </label>
                    </div>
                    <label>
                        <input className="input_work" type="email" placeholder="" required />
                        <span>Email</span>
                    </label>
                    <label>
                        <input className="input_work" type="text" placeholder="" required />
                        <span>Teléfono</span>
                    </label>
                    <label>
                        <select className="input_work" required>
                            <option value="" disabled selected>Selecciona un País</option>
                            <option value="Albania">Albania</option>
                            <option value="Alemania">Alemania</option>
                            <option value="Albania">Albania</option>
                            <option value="Andorra">Andorra</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Austria">Austria</option>
                            <option value="Bélgica">Bélgica</option>
                            <option value="Bielorrusia">Bielorrusia</option>
                            <option value="Bolivia">Bolivia</option>
                            <option value="Brasil">Brasil</option>
                            <option value="Chile">Chile</option>
                            <option value="Colombia">Colombia</option>
                            <option value="Costa Rica">Costa Rica</option>
                            <option value="Cuba">Cuba</option>
                            <option value="Dinamarca">Dinamarca</option>
                            <option value="Ecuador">Ecuador</option>
                            <option value="El Salvador">El Salvador</option>
                            <option value="España">España</option>
                            <option value="Estados Unidos">Estados Unidos</option>
                            <option value="Estonia">Estonia</option>
                            <option value="Finlandia">Finlandia</option>
                            <option value="Francia">Francia</option>
                            <option value="Grecia">Grecia</option>
                            <option value="Guatemala">Guatemala</option>
                            <option value="Honduras">Honduras</option>
                            <option value="Irlanda">Irlanda</option>
                            <option value="Islandia">Islandia</option>
                            <option value="Italia">Italia</option>
                            <option value="Letonia">Letonia</option>
                            <option value="Liechtenstein">Liechtenstein</option>
                            <option value="Lituania">Lituania</option>
                            <option value="Luxemburgo">Luxemburgo</option>
                            <option value="Macedonia del Norte">Macedonia del Norte</option>
                            <option value="Malta">Malta</option>
                            <option value="México">México</option>
                            <option value="Moldavia">Moldavia</option>
                            <option value="Mónaco">Mónaco</option>
                            <option value="Montenegro">Montenegro</option>
                            <option value="Nicaragua">Nicaragua</option>
                            <option value="Noruega">Noruega</option>
                            <option value="Países Bajos">Países Bajos</option>
                            <option value="Panamá">Panamá</option>
                            <option value="Paraguay">Paraguay</option>
                            <option value="Perú">Perú</option>
                            <option value="Polonia">Polonia</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Reino Unido">Reino Unido</option>
                            <option value="República Checa">República Checa</option>
                            <option value="República Dominicana">República Dominicana</option>
                            <option value="Rumania">Rumania</option>
                            <option value="Rusia">Rusia</option>
                            <option value="San Marino">San Marino</option>
                            <option value="Serbia">Serbia</option>
                            <option value="Suecia">Suecia</option>
                            <option value="Suiza">Suiza</option>
                            <option value="Ucrania">Ucrania</option>
                            <option value="Uruguay">Uruguay</option>
                            <option value="Vaticano">Vaticano</option>
                            <option value="Venezuela">Venezuela</option>
                        </select>
                        <span>País</span>
                    </label>

<label>
                        <select className="input_work" required>
                            <option value="" disabled selected>Selecciona una Provincia</option>
                            <option value="Álava">Álava</option>
                            <option value="Albacete">Albacete</option>
                            <option value="Alicante">Alicante</option>
                            <option value="Almería">Almería</option>
                            <option value="Asturias">Asturias</option>
                            <option value="Ávila">Ávila</option>
                            <option value="Badajoz">Badajoz</option>
                            <option value="Barcelona">Barcelona</option>
                            <option value="Burgos">Burgos</option>
                            <option value="Cáceres">Cáceres</option>
                            <option value="Cádiz">Cádiz</option>
                            <option value="Cantabria">Cantabria</option>
                            <option value="Castellón">Castellón</option>
                            <option value="Ceuta">Ceuta</option>
                            <option value="Ciudad Real">Ciudad Real</option>
                            <option value="Córdoba">Córdoba</option>
                            <option value="Cuenca">Cuenca</option>
                            <option value="Gerona">Gerona</option>
                            <option value="Granada">Granada</option>
                            <option value="Guadalajara">Guadalajara</option>
                            <option value="Guipúzcoa">Guipúzcoa</option>
                            <option value="Huelva">Huelva</option>
                            <option value="Huesca">Huesca</option>
                            <option value="Islas Baleares">Islas Baleares</option>
                            <option value="Jaén">Jaén</option>
                            <option value="La Coruña">La Coruña</option>
                            <option value="La Rioja">La Rioja</option>
                            <option value="Las Palmas">Las Palmas</option>
                            <option value="León">León</option>
                            <option value="Lérida">Lérida</option>
                            <option value="Lugo">Lugo</option>
                            <option value="Madrid">Madrid</option>
                            <option value="Málaga">Málaga</option>
                            <option value="Melilla">Melilla</option>
                            <option value="Murcia">Murcia</option>
                            <option value="Navarra">Navarra</option>
                            <option value="Orense">Orense</option>
                            <option value="Palencia">Palencia</option>
                            <option value="Pontevedra">Pontevedra</option>
                            <option value="Salamanca">Salamanca</option>
                            <option value="Segovia">Segovia</option>
                            <option value="Sevilla">Sevilla</option>
                            <option value="Soria">Soria</option>
                            <option value="Tarragona">Tarragona</option>
                            <option value="Tenerife">Tenerife</option>
                            <option value="Teruel">Teruel</option>
                            <option value="Toledo">Toledo</option>
                            <option value="Valencia">Valencia</option>
                            <option value="Valladolid">Valladolid</option>
                            <option value="Vizcaya">Vizcaya</option>
                            <option value="Zamora">Zamora</option>
                            <option value="Zaragoza">Zaragoza</option>
                        </select>
                        <span>Provincia</span>
                    </label>
                    <label>
                        <input className="input_work" type="text" placeholder="" required />
                        <span>Código Postal</span>
                    </label>
                    <label>
                        <select className="input_work" required>
                            <option value="" disabled selected>Seleccione un cargo</option>
                            <option value="Presidente">Presidente</option>
                            <option value="Vicepresidente">Vicepresidente</option>
                            <option value="Secretario">Secretario</option>
                            <option value="Tesorero">Tesorero</option>
                            <option value="Director Médico">Director Médico</option>
                            <option value="Director de Cuidados">Director de Cuidados</option>
                            <option value="Director de Programas">Director de Programas</option>
                            <option value="Coordinador de Eventos">Coordinador de Eventos</option>
                            <option value="Coordinador de Voluntarios">Coordinador de Voluntarios</option>
                            <option value="Coordinador de Comunicaciones">Coordinador de Comunicaciones</option>
                            <option value="Asistente Social">Asistente Social</option>
                            <option value="Consejero de Salud Mental">Consejero de Salud Mental</option>
                            <option value="Fisioterapeuta">Fisioterapeuta</option>
                            <option value="Logopeda">Logopeda</option>
                            <option value="Terapeuta Ocupacional">Terapeuta Ocupacional</option>
                            <option value="Investigador Científico">Investigador Científico</option>
                            <option value="Voluntario">Voluntario</option>
                            <option value="Otro">Otro</option>
                        </select>
                        <span>Cargo a gestionar</span>
                    </label>
                    <label>
                        <input type="file" className="input_work" required />
                        <span>Adjuntar Archivo</span>
                    </label>
                    {/* <p className="signin">
                        Protección de datos personales <a href="#">Leer</a>
                    </p> */}
                    <div className="checkbox-label">
                        <input type="checkbox" className="input_work" id="check" required />
                        <TermsAndConditions/>
                    </div>
                    <button className="submit">Enviar</button>
                </form>
                <div className="img_form">
                    <div className="img_form_work">
                        <img className="img_form_people" src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1699017362/20230420_115157_viks1q.jpg" alt="" />
                    </div>
                    <div className="img_form_work"></div>
                    <div className="img_form_work"></div>
                    <div className="img_form_work">
                        <img className="img_form_people" src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1699017363/20200415_100037_xcsgqv.jpg" alt="" />
                    </div>
                </div>
            </section>
            <Footer />
            <ButtonDonate />
            <ScrollArrow />
        </div>
    )
}
export default Work;