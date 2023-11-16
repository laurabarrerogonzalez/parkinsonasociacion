import React, { useState, useEffect } from "react";
import "./Admin.css";
import axios from "axios";
import Swal from "sweetalert2";
import Footer from "../../assets/Components/Footer/Footer";

const Admin = () => {
  const [Volunteers, setVolunteers] = useState([]);
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
    if (isLoggedIn) {
      axios
        .get("https://localhost:7165/VolunteersControllers/GetVolunteers")
        .then((response) => {
          setVolunteers(response.data);
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
      await axios.delete(`https://localhost:7165/VolunteersControllers/DeleteVolunteers?name=${name}`);
  
      // Eliminación exitosa, ahora obtén la lista actualizada de voluntarios
      const response = await axios.get("https://localhost:7165/VolunteersControllers/GetVolunteers");
      setVolunteers(response.data); // Actualiza la lista de voluntarios con la nueva data
    } catch (error) {
      console.error(`Error al eliminar el voluntario con nombre ${name}`, error);
    }
  };

  return (
    <>
      <div>
        {isLoggedIn ? (
          <div className="Admistitle">
            <h1>Admin</h1>
            <button onClick={handleLogout}>Cerrar sesión</button>
            <br />
            <br />
            <h2>Lista de Voluntarios</h2>
            <table className="TableVoluntarios">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>DNI</th>
                  <th>Fecha de Nacimiento</th>
                  <th>Domicilio</th>
                  <th>Numero de Teléfono</th>
                  <th>Email</th>
                  <th>Educación</th>
                  <th>Disponibilidad</th>
                </tr>
              </thead>
              <tbody>
                {Volunteers.map((Volunteers) => (
                  <tr key={Volunteers.id}>
                    <td>{Volunteers.name}</td>
                    <td>{Volunteers.dni}</td>
                    <td>{Volunteers.birthdate}</td>
                    <td>{Volunteers.address}</td>
                    <td>{Volunteers.phone}</td>
                    <td>{Volunteers.email}</td>
                    <td>{Volunteers.education}</td>
                    <td>{Volunteers.shift}</td>
                    <td>
                      <button class="delete-btn" onClick={() => handleDeleteVolunteers(Volunteers.name)}>
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
