import React, { useEffect } from 'react';
import Navbar from "../../Components/Navbar/Navbar";
import "../Services_/Stimulation.css"
import Footer from "../../Components/Footer/Footer";
import ButtonDonate from "../../Components/ButtonDonate/ButtonDonate";
import ScrollArrow from "../../Components/ScrollArrow/ScrollArrow";



const Stimulation = () => {

    useEffect(() => {
        // Hacer scroll al principio de la página cuando el componente se monta
        window.scrollTo(0, 0);
      }, []);

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

            <section className="section_benefits">
                <div class="custom-shape-divider-top-1699433452">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>

                    <h1>Beneficios</h1>
                

                <div class="card_benefits">
                    <p>Memoria</p>
                    <img src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1699524677/que-es-estimulacion-cognitiva_hrilej.jpg" alt="" />
                </div>
                <div class="card_benefits" id="two_benefits">
                <p>Ánimo</p>
                    <img src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1699526869/las-personas-mayores-son-mas-felices-que-las-mas-jovenes-950x797_eywa8y.jpg" alt="" />
                </div>
                <div class="card_benefits" id="three_benefits">
                <p>Creatividad</p>
                    <img src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1699525707/questions-2519654_1280_omdaca.png" alt="" />
                </div>
                <div class="card_benefits" id="four_benefits">
                <p>Deterioro
                Cognitivo</p>
                    <img src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1699525954/deterioro-cognitivo_1_621x621_cwdwr2.jpg" alt="" />
                </div>


            </section>


            <Footer />
            <ButtonDonate />
            <ScrollArrow />


        </div>

    )

}

export default Stimulation;
