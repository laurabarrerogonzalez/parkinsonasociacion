import React, { useState, useEffect } from "react";
import "./AdminNavbar.css";
import { Link } from "react-router-dom";

const AdminNavbar = ({ handleLogout }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Verificar si hay un token almacenado en el localStorage
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    if (handleLogout) {
      handleLogout();
    }
  };

  return (
    <div className="AdminNavbar">
      <div className="logo-admin12">
        <Link to="/">
          <img
            className="tulipan12"
            src="https://res.cloudinary.com/da7ffijqs/image/upload/v1699698764/_8d1ca073-4c49-42a8-9d3c-2a797078f4cf-removebg-preview_ksvtqn.png"
            alt="Logo de tulipán"
          />
        </Link>
      </div>

      <div className="nav_logo13">
        <Link to="/admin">
          <img
            className="LogoAdmin"
            src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1698587890/61_sin_t__tulo_20231027173013-removebg-preview_480_xoxrqv.png"
            alt="Logo de tu empresa"
          />
        </Link>
      </div>
      <Link to="/newsAdmin">
        <button className="button333">Noticias</button>
      </Link>
      <Link to="/resourcesAdmin">
        <button className="button333">Recursos y pautas</button>
      </Link>
      <Link to="/galleryCD">
        <button className="button333">Galería Centro de Día</button>
      </Link>
      <Link to="/galleryEC">
        <button className="button333">Galería E. Cognitiva</button>
      </Link>


      {isLoggedIn && (
        <Link to="/">
          <button onClick={logout} className="button333">
            Cerrar sesión
          </button>
        </Link>
      )}
    </div>
  );
};

export default AdminNavbar;
