import React,{useState} from "react";
import "../Navbar/Navbar.css"
  
const Navbar = () => {
    const[isOpen,setIsOpen] = useState(false)
    return(
        <div className="navbar">
            <div className="nav_logo"> 
            <img src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1698587890/61_sin_t__tulo_20231027173013-removebg-preview_480_xoxrqv.png" alt="Logo de tu empresa" />
            </div>
            <div className={`nav_items ${isOpen && "open"}`}>
                <ul className="menu-horizontal">
                <li><a href="#">Quienes somos</a></li>
                <li>
                    <a href="#">¿Que es el Parkinson?</a>
                    <ul className="menu-vertical">
                        <li><a href="#">Sintomas y diagnosticos</a></li>
                        <hr />
                        <li><a href="#">Evolución y tratamientos</a></li>
                        <hr />
                        <li><a href="#">Mitos y verdades</a></li>
                    </ul>
                    </li>
                <li>
                    <a href="#">Servicios</a>
                    <ul className="menu-vertical">
                        <li><a href="#">Centro de día</a></li>
                        <hr />
                        <li><a href="#">Rehabilitación</a></li>
                        <hr />
                        <li><a href="#">Estimulación</a></li>
                        <hr />
                        <li><a href="#">Ayuda a domicilio</a></li>
                    </ul>
                    </li>
                <li>
                    <a href="#">Actualidad</a>
                    <ul className="menu-vertical">
                        <li><a href="#">Noticias</a></li>
                        <li><a href="#">Actividades</a></li>
                        <li><a href="#">Proyectos</a></li>
                    </ul>
                    </li>
                <li>
                    <a href="#">Colabora</a>
                    <ul className="menu-vertical">
                        <li><a href="#">Voluntario</a></li>
                        <li><a href="#">Socios</a></li>
                        <li><a href="#">Donaciones</a></li>
                    </ul>
                    </li>
                <li>
                    <a href="#">Trabaja con nosotros</a>
                    </li>
                <li><a href="#">Donde encontrarnos</a></li>
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
