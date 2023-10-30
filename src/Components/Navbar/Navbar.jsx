import React,{useState} from "react";
import "../Navbar/Navbar.css"
import { Link } from "react-router-dom";
  
const Navbar = () => {
    const[isOpen,setIsOpen] = useState(false)
    return(
        <div className="navbar">
            <div className="nav_logo"> 
            <Link to="/">
          <img src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1698587890/61_sin_t__tulo_20231027173013-removebg-preview_480_xoxrqv.png" alt="Logo de tu empresa" />
        </Link>
            </div>
            <div className={`nav_items ${isOpen && "open"}`}>
                <ul className="menu-horizontal">
                <li><Link to="/aboutus">Quienes somos</Link></li>
                <li>
                    <a href="#">¿Que es el Parkinson?</a>
                    <ul className="menu-vertical">
                        <li><a href="/symptoms">Síntomas y Diagnóstico</a></li>
                        <li><a href="/evolution">Evolución y Tratamiento</a></li>
                        <li><a href="/resources">Recursos y Pautas</a></li>
                        <li><a href="/myths">Mitos y Verdades</a></li>
                    </ul>
                    </li>
                <li>
                    <a href="#">Servicios</a>
                    <ul className="menu-vertical">
                    <li><a href="/daycarecenter">Centro de día</a></li>
                        <li><a href="/revitalization">Rehabilitación</a></li>
                        <li><a href="/stimulation">Estimulación Cognitiva</a></li>
                        <li><a href="/help">Ayuda a Domicilio</a></li>
                    </ul>
                    </li>
                <li>
                    <a href="#">Actualidad</a>
                    <ul className="menu-vertical">
                    <li><a href="/news">Noticias</a></li>
                        <li><a href="/activities">Actividades</a></li>
                        <li><a href="/proyects">Proyectos</a></li>
                    </ul>
                    </li>
                <li>
                    <a href="#">Colabora</a>
                    <ul className="menu-vertical">
                    <li><a href="/voluntary">Voluntariado</a></li>
                        <li><a href="/members">Socios</a></li>
                        <li><a href="/donations">Donaciones</a></li>
                    </ul>
                    </li>
                <li>
                    <a href="/work">Trabaja con nosotros</a>
                    
                    </li>
                <li><a href="/find">Donde encontrarnos</a></li>
                </ul>
            </div>
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={ ()  => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Navbar








