import React from "react";
import "./Members.css";
import swal from "sweetalert2";
import Form from 'react-bootstrap/Form'
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Accordion, AccordionItem } from "@nextui-org/react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { red } from "@mui/material/colors";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import BannerViews from "../../Components/BannerViews/BannerViews";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Members = () => {
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

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <>
      <Navbar />
      <BannerViews
        image="https://res.cloudinary.com/da7ffijqs/image/upload/t_Banner 16:9/v1699001271/20200415_111209_1_iacccg.jpg "
        title="¿Quieres ser socio?"
      />
      <div className="Part1">
        <Accordion variant="splitted">
          <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </div>
      <div className="container2">
        <br />
        <br />
        <h1> Solicitud Socios</h1>
        <Form.Group required controlId="formFileMultiple" className="mb-3">
          <Form.Label>Justificante del Pago</Form.Label>
          <Form.Control type="file" multiple />
        </Form.Group>
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
          <FormControlLabel
            required
            control={<Checkbox defaultChecked />}
            label="Cuota 70€"
          />
        </FormGroup>
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
      <Footer />
    </>
  );
};

export default Members;
