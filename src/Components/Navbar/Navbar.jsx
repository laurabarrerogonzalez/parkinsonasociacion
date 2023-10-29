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
                <a href="#">Quienes somos</a>
                <a href="#">¿Que es el Parkinson?</a>
                <a href="#">Servicios</a>
                <a href="#">Actualidad</a>
                <a href="#">Colabora</a>
                <a href="#">Trabaja con nosotros</a>
                <a href="#">Donde encontrarnos</a>
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
