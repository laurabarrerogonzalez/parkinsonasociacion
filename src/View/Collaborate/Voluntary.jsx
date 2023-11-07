import "./Voluntary.css";
import React, { useEffect } from "react";
import swal from "sweetalert2";
import Navbar from "../../Components/Navbar/Navbar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { red } from "@mui/material/colors";
import Footer from "../../Components/Footer/Footer";
import ButtonDonate from "../../Components/ButtonDonate/ButtonDonate";
import ScrollArrow from "../../Components/ScrollArrow/ScrollArrow";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Voluntary = () => {

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
            confirmButtonColor: customColor, // Configurar el color del botón OK
          });
        }
      });
  };

  return (
    <>
      <div className="photos">
        <Navbar />
        <div className="question">
          <h1 className="text">¿QUIERES SER VOLUNTARIO?</h1>
        </div>
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
      <div className="forms">
        <div className="text5">
          <br />
          <br />
          <h1>Solicitud de voluntarios</h1>
        </div>
        <div className="container1">
          <div className="form1">
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "37ch" },
              }}
              noValidate
              autoComplete="off"
              className="responsive"
            >
              <TextField
                required
                className="White"
                id="outlined-required"
                label="Nombre y Apellidos"
                defaultValue=""
              />
              <br></br>
              <br></br>

              <TextField
                required
                className="White"
                id="outlined-required"
                label="Domicilio"
                defaultValue=""
              />

              <br></br>
              <br></br>

              <TextField
                required
                className="White"
                id="outlined-number"
                label="Telefono"
                defaultValue=""
              />
            </Box>
          </div>
          <div className="form2">
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "37ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                required
                className="White"
                id="outlined-required"
                label="Email"
                type="email"
                defaultValue=""
              />

              <br></br>
              <br></br>

              <TextField
                required
                className="White"
                id="outlined-required"
                label="Ciudad"
                defaultValue=""
              />

              <br></br>
              <br></br>

              <TextField
                required
                className="White"
                id="outlined-number"
                label="Provincia"
                defaultValue=""
              />
            </Box>
            <br />
            <FormGroup>
              <FormControlLabel
                required
                control={
                  <Checkbox
                    {...label}
                    defaultChecked
                    sx={{
                      color: red[800],
                      "&.Mui-checked": {
                        color: red[600],
                      },
                    }}
                  />
                }
                label="Acepto las Conciciones y la Politica de privacidad"
              />
            </FormGroup>
          </div>
        </div>
        <div className="buttonAcept">
          <Stack direction="row" spacing={2}>
            <Button
              style={{ backgroundColor: customColor, color: "#fff" }}
              onClick={handleEnviarClick}
            >
              ENVIAR
            </Button>
          </Stack>
        </div>
      </div>
     <Footer/> 
     <ButtonDonate />
     <ScrollArrow />
    </>
  );
};

export default Voluntary;
