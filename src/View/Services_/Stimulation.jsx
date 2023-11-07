import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import BannerViews from "../../Components/BannerViews/BannerViews";
import "../Services_/Stimulation.css"



const Stimulation = () => {

    return (
        <div>
            <Navbar />
            <section className="section_banner_new_stimulation">
                <div className="title_stimulation">

                    <h1>Estimulacion Cognitiva <br />
                    "¡Activa tu mente, expande tu mundo!"
                    </h1>

                    <p>La estimulación cognitiva es un conjunto de actividades diseñadas para 
                        fortalecer las habilidades mentales, como la memoria y la concentración.
                         Estos ejercicios benefician a personas de todas 
                        las edades, mejorando la agilidad mental y la calidad de vida.
                    </p>
                    <div className="buttons_items">
                        <button className="button_1_info">
                        <span>Informacion</span>

                        </button>
                        <button className="button_2_info">
                        <span>Registrarse</span>

                        </button>
                    </div>

                </div>
                <div className="img_stimulation_banner">
                    <img src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1699356047/Dise%C3%B1o_sin_t%C3%ADtulo_4_1_yll4l4.png" alt="" />
                </div>
            </section>
        </div>

    )

}

export default Stimulation;
