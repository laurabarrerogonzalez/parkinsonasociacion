import React, { useState, useEffect } from "react";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo-admin">
        <Link to="/admin">
          <img
            className="tulipan"
            src="https://res.cloudinary.com/da7ffijqs/image/upload/v1699698764/_8d1ca073-4c49-42a8-9d3c-2a797078f4cf-removebg-preview_ksvtqn.png"
          />
        </Link>
      </div>

      <div className="nav_logo">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1698587890/61_sin_t__tulo_20231027173013-removebg-preview_480_xoxrqv.png"
            alt="Logo de tu empresa"
          />
        </Link>
      </div>
      <div className={`nav_items ${isOpen && "open"}`}>
        <ul className="menu-horizontal">
          <li>
            <Link to="/aboutus">¿Quiénes somos?</Link>
          </li>
          <li>
            <a href="#">¿Qué es el Parkinson?</a>
            <ul className="menu-vertical">
              <li>
                <a href="/symptoms">Síntomas y Diagnóstico</a>
              </li>
              <hr />
              <li>
                <a href="/evolution">Evolución y Tratamiento</a>
              </li>
              <hr />
              <li>
                <a href="/resources">Recursos y Pautas</a>
              </li>
              <hr />
              <li>
                <a href="/myths">Mitos y Verdades</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Servicios</a>
            <ul className="menu-vertical">
              <li>
                <a href="/daycarecenter">Centro de día</a>
              </li>
              <hr />
              <li>
                <a href="/revitalization">Rehabilitación</a>
              </li>
              <hr />
              <li>
                <a href="/stimulation">Estimulación Cognitiva</a>
              </li>
              <hr />
              <li>
                <a href="/help">Ayuda a Domicilio</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Actualidad</a>
            <ul className="menu-vertical">
              <li>
                <a href="/news">Noticias</a>
              </li>
              <hr />
              <li>
                <a href="/activities">Actividades</a>
              </li>
              <hr />
              <li>
                <a href="/proyects">Proyectos</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Colabora</a>
            <ul className="menu-vertical">
              <li>
                <a href="/voluntary">Voluntariado</a>
              </li>
              <hr />
              <li>
                <a href="/members">Socios</a>
              </li>
              <hr />
              <li>
                <a href="/donations">Donaciones</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/work">Trabaja con nosotros</a>
          </li>
          <li>
            <a href="/find">¿Dónde encontrarnos?</a>
          </li>
        </ul>
      </div>
      <div
        className={`nav_toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;
