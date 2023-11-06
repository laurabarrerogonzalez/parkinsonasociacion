import React from "react";
import "./Members.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import swal from "sweetalert2";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { red } from "@mui/material/colors";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import BannerViews from "../../Components/BannerViews/BannerViews";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Members = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
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
      <div className="spikes">
        <div> <h1>Socio Colavorativo</h1> </div>
        <div> <h1>Socio Afectado</h1> </div>
      </div>
      <div className="spikes2">
        <div> <h1>Transferencia</h1> </div>
        <div> <h1>Bizum</h1> </div>
      </div>
      <div className="container2">
        <br />
        <br />
        <h1>Solicitud de socios</h1>
        <div className="container1">
          <div className="form3">
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
              <TextField
                required
                className="White"
                id="outlined-required"
                label="Domicilio"
                defaultValue=""
              />
              <TextField
                required
                className="White"
                id="outlined-number"
                label="Telefono"
                defaultValue=""
              />
              <TextField
                required
                className="White"
                id="outlined-required"
                label="Email"
                type="email"
                defaultValue=""
              />
              <TextField
                required
                className="White"
                id="outlined-required"
                label="C:P."
                type="text"
                defaultValue=""
              />
            </Box>
            <FormGroup className="Checkbox1">
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
          <div className="form4">
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
                label="Ciudad"
                defaultValue=""
              />
              <TextField
                required
                className="White"
                id="outlined-number"
                label="Provincia"
                defaultValue=""
              />
              <TextField
                required
                className="White"
                id="outlined-number"
                label="Banco o Caja"
                defaultValue=""
              />
              <TextField
                required
                className="White"
                id="outlined-number"
                label="Codigo Cta./libreta"
                defaultValue=""
              />
              <TextField
                required
                className="White"
                id="outlined-number"
                label=" Nombre de Titular/es"
                defaultValue=""
              />
            </Box>
            <FormGroup className="Checkbox2">
              <FormControlLabel
                required
                control={<Checkbox defaultChecked />}
                label="Cuota 70€"
              />
            </FormGroup>
          </div>
        </div>
        <div>
          <FormControl className="Select1" sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Tipos de Socios</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={age}
              required
              label="Tipos de Socios"
              onChange={handleChange}
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value={10}>Colavorativo</MenuItem>
              <MenuItem value={20}>Afectado</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="buttonAcept2">
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
      <Footer />
    </>
  );
};

export default Members;
