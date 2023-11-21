import React, { useState, useEffect } from "react";
import "./Admin.css";
import axios from "axios";
import Swal from "sweetalert2";
import Footer from "../../assets/Components/Footer/Footer";
import AdminNavbar from "../../Components/AdminNavbar/AdminNavbar";

const Admin = () => {
  const [Volunteers, setVolunteers] = useState([]);
  const [Membres, setMembres] = useState([]);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    UserName: "",
    Password: "",
  });
  const [errorMessages, setErrorMessages] = useState({
    UserName: "",
    Password: "",
  }); 

  useEffect(() => {
    // Verificar si hay un token almacenado en el localStorage al montar el componente
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
      // Realizar cualquier carga de datos adicional que necesites aquí
      fetchVolunteersData();
      fetchMembersData();
    }
  }, []);
  const fetchVolunteersData = async () => {
    try {
      const response = await axios.get(
        "https://localhost:7165/VolunteersControllers/GetVolunteers"
      );
      setVolunteers(response.data);
    } catch (error) {
      console.error("Error al obtener la lista de voluntarios", error);
    }
  };
  const fetchMembersData = async () => {
    try {
      const response = await axios.get(
        "https://localhost:7165/MembersControllers/GetMembers"
      );
      setMembres(response.data);
    } catch (error) {
      console.error("Error al obtener la lista de socios", error);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      axios
        .get("https://localhost:7165/VolunteersControllers/GetVolunteers")
        .then((response) => {
          setVolunteers(response.data);
        })
        .catch((error) => {
          console.error("Error al obtener la lista de voluntarios", error);
        });

      axios
        .get("https://localhost:7165/MembersControllers/GetMembers")
        .then((response) => {
          setMembres(response.data);
        })
        .catch((error) => {
          console.error("Error al obtener la lista de voluntarios", error);
        });
    }
  }, [isLoggedIn]);

  const handleLoginClick = async (event) => {
    event.preventDefault();

    const { UserName, Password } = userData;

    const newErrorMessages = {
      UserName: !UserName ? "UserName is required" : "",
      Password: !Password ? "Password is required" : "",
    };

    if (!UserName || !Password) {
      setErrorMessages(newErrorMessages);
      return;
    }

    try {
      const url = "https://localhost:7165/UsersControllers/Login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ UserName, Password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.Token);
        setLoggedIn(true);
      } else {
        Swal.fire("Error", "Credenciales incorrectas", "error");
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire("Error", "Ha ocurrido un error en el servidor", "error");
    }

    setUserData({
      UserName: "",
      Password: "",
    });

    setErrorMessages({
      UserName: "",
      Password: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  };

  const handleDeleteVolunteers = async (name) => {
    try {
      await axios.delete(
        `https://localhost:7165/VolunteersControllers/DeleteVolunteers?name=${name}`
      );
      const response = await axios.get(
        "https://localhost:7165/VolunteersControllers/GetVolunteers"
      );
      setVolunteers(response.data);
    } catch (error) {
      console.error(
        `Error al eliminar el voluntario con nombre ${name}`,
        error
      );
    }
  };

  const handleDeleteMembers = async (name) => {
    try {
      await axios.delete(
        `https://localhost:7165/MembersControllers/DeleteMembers?name=${name}`
      );
      const response = await axios.get(
        "https://localhost:7165/MembersControllers/GetMembers"
      );
      setMembres(response.data);
    } catch (error) {
      console.error(`Error al eliminar el socio con nombre ${name}`, error);
    }
  };

  return (
    <>
      <div>
        {isLoggedIn ? (
          <>
            <AdminNavbar handleLogout={() => setLoggedIn(false)} />
            <div className="Admistitle">
              <h1>Admin</h1>
              <br />
              <br />
              <h2>Lista de Voluntarios</h2>
              <table className="TableVoluntarios">
                <thead>
                  <tr className="tr12">
                    <th className="th14">Nombre</th>
                    <th className="th14">DNI</th>
                    <th className="th14">Fecha de Nacimiento</th>
                    <th className="th14">Domicilio</th>
                    <th className="th14">Numero de Teléfono</th>
                    <th className="th14">Email</th>
                    <th className="th14">Educación</th>
                    <th className="th14">Disponibilidad</th>
                  </tr>
                </thead>
                <tbody>
                  {Volunteers.map((Volunteers) => (
                    <tr className="tr12" key={Volunteers.id}>
                      <td className="td13">{Volunteers.name}</td>
                      <td className="td13">{Volunteers.dni}</td>
                      <td className="td13">{Volunteers.birthdate}</td>
                      <td className="td13">{Volunteers.address}</td>
                      <td className="td13">{Volunteers.phone}</td>
                      <td className="td13">{Volunteers.email}</td>
                      <td className="td13">{Volunteers.education}</td>
                      <td className="td13">{Volunteers.shift}</td>
                      <td className="td13">
                        <button
                          class="delete-btn"
                          onClick={() =>
                            handleDeleteVolunteers(Volunteers.name)
                          }
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <br />
              <br />
              <h2>Lista de Socios</h2>
              <table className="TableVoluntarios">
                <thead>
                  <tr className="tr12">
                    <th className="th14">Nombre</th>
                    <th className="th14">DNI</th>
                    <th className="th14">Fecha de Nacimiento</th>
                    <th className="th14">Domicilio</th>
                    <th className="th14">Numero de Teléfono</th>
                    <th className="th14">Email</th>
                    <th className="th14">IBAN</th>
                    <th className="th14">Titular de la cuenta</th>
                    <th className="th14">Servicios</th>
                    <th className="th14">Tipo de Socio</th>
                  </tr>
                </thead>
                <tbody>
                  {Membres.map((Membres) => (
                    <tr className="tr12" key={Membres.id}>
                      <td className="td13">{Membres.name}</td>
                      <td className="td13">{Membres.dni}</td>
                      <td className="td13">{Membres.birthdate}</td>
                      <td className="td13">{Membres.address}</td>
                      <td className="td13">{Membres.phone}</td>
                      <td className="td13">{Membres.email}</td>
                      <td className="td13">{Membres.iban}</td>
                      <td className="td13">{Membres.holder}</td>
                      <td className="td13">{Membres.services}</td>
                      <td className="td13">{Membres.members}</td>
                      <td className="td13">
                        <button
                          class="delete-btn"
                          onClick={() => handleDeleteMembers(Membres.name)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <div className="login-card">
            <div className="card-header">
              <div className="log">Login</div>
            </div>
            <form onSubmit={handleLoginClick}>
              <div className="form-group">
                <label className="label134" htmlFor="UserName">
                  UserName:
                </label>
                <input
                  required
                  className="input123"
                  name="UserName"
                  id="UserName"
                  type="text"
                  value={userData.UserName}
                  onChange={handleInputChange}
                />
                <span className="error-message">{errorMessages.UserName}</span>
              </div>
              <div className="form-group">
                <label htmlFor="Password">Password:</label>
                <input
                  required
                  className="input123"
                  name="Password"
                  id="Password"
                  type="password"
                  value={userData.Password}
                  onChange={handleInputChange}
                />
                <span className="error-message">{errorMessages.Password}</span>
              </div>
              <div className="form-group">
                <input className="input123" value="Login" type="submit" />
              </div>
            </form>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Admin;
