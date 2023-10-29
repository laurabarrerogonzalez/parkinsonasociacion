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
                        <li><a href="#">Descripcion</a></li>
                        <li><a href="#">Descripcion</a></li>
                    </ul>
                    </li>
                <li>
                    <a href="#">Servicios</a>
                    <ul className="menu-vertical">
                        <li><a href="#">Descripcion</a></li>
                        <li><a href="#">Descripcion</a></li>
                    </ul>
                    </li>
                <li>
                    <a href="#">Actualidad</a>
                    <ul className="menu-vertical">
                        <li><a href="#">Descripcion</a></li>
                        <li><a href="#">Descripcion</a></li>
                    </ul>
                    </li>
                <li>
                    <a href="#">Colabora</a>
                    <ul className="menu-vertical">
                        <li><a href="#">Descripcion</a></li>
                        <li><a href="#">Descripcion</a></li>
                    </ul>
                    </li>
                <li>
                    <a href="#">Trabaja con nosotros</a>
                    <ul className="menu-vertical">
                        <li><a href="#">Descripcion</a></li>
                        <li><a href="#">Descripcion</a></li>
                    </ul>
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
