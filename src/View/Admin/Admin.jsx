import React, { useState } from "react";
import Swal from "sweetalert2";
import "./Admin.css";
import Footer from "../../assets/Components/Footer/Footer";

const Admin = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    UserName: "",
    Password: "",
  });
  const [errorMessages, setErrorMessages] = useState({
    UserName: "",
    Password: "",
  });

  const handleLoginClick = async (event) => {
    event.preventDefault();

    const { UserName, Password } = userData;

    const newErrorMessages = {
      UserName: !UserName ? "UserName is required" : "",
      Password: !Password ? "Password is required" : "",
    };

    // Si algún campo está vacío, no procedemos con el registro
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
        console.log("Inicio de sesión exitoso");
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

  return (
    <>
      <div>
        {isLoggedIn ? (
          <div>
            <h1>Admin</h1>
            {/* Contenido de la página después de iniciar sesión */}
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
