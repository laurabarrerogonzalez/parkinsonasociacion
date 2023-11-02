import React from "react";
import "../About us/Aboutus.css";
import Navbar from "../../Components/Navbar/Navbar";
import BannerViews from "../../Components/BannerViews/BannerViews";
import Footer from "../../Components/Footer/Footer";




const Aboutus = () => {

    return (
        <div>
            <Navbar />
            <BannerViews
                image="https://res.cloudinary.com/dp7lr71t8/image/upload/v1698664674/ai-generated-8273256_1280_dspoq5.jpg"
                title="PERSONAS COMPROMETIDAS"

            />
            <section className="intro_Aboutus">
                <p>Trabajamos cada día para ayudar y mejorar las condiciones de las personas
                    afectadas con parkinson.
                    Somos un equipo entusiasta, diverso e íntegro que cree en
                    la capacidad de las personas para cambiar su entorno. Juntas somos imparables. </p>

                <button className="btn_donar_Aboutus">
                    <svg class="empty" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0H24V24H0z"></path><path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2zm-3.566 15.604c.881-.556 1.676-1.109 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4-1.076 0-2.24.57-3.086 1.414L12 7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5 5.56 5 4 6.656 4 9c0 2.944 1.666 5.533 4.645 7.903.745.592 1.54 1.145 2.421 1.7.299.189.595.37.934.572.339-.202.635-.383.934-.571z"></path></svg>
                    <svg class="filled" height="32" width="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0H24V24H0z" fill="none"></path><path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"></path></svg>
                    Hazte voluntario
                </button>
            </section>

            <section className="section_cards_values">
                <div className="card_value">
                    <div class="overlay">
                        <p class="overlay-text">Valores</p>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>
                    <img src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1698932414/people-2569234_1280_cufnwo.jpg" alt="Descripción de la imagen" />
                    <div class="card__content">
                        <p class="card__title">Valores</p>
                        <p class="card__description">Trabajamos cada día para ayudar y mejorar las condiciones de las personas
                            afectadas con parkinson. Somos un equipo entusiasta,
                            diverso e íntegro que cree en</p>
                    </div>

                </div>
                <div className="card_value">
                    <div class="overlay">
                        <p class="overlay-text">Misión</p>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>
                    <img src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1698961627/110.Definir-la-mision-y-vision-de-una-empresa-1024x494_gxlt5v.jpg" alt="Descripción de la imagen" />
                    <div class="card__content">
                        <p class="card__title">Misión</p>
                        <p class="card__description">Trabajamos cada día para ayudar y mejorar las condiciones de las personas
                            afectadas con parkinson. Somos un equipo entusiasta,
                            diverso e íntegro que cree en</p>
                    </div>
                </div>
                <div className="card_value">
                    <div class="overlay">
                        <p class="overlay-text">Visión</p>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>
                    <img src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1698961936/mision-y-vision-og_uq75gc.jpg" />
                    <div class="card__content">
                        <p class="card__title">Visión</p>
                        <p class="card__description">Trabajamos cada día para ayudar y mejorar las condiciones de las personas
                            afectadas con parkinson. Somos un equipo entusiasta,
                            diverso e íntegro que cree en</p>
                    </div>
                </div>
            </section>

            <section className="section_workers">
                <div className="card_worker">
                    <div className="section_img_worker">
                        <img className="img_worker" src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1698965836/descarga_2_nltw4k.jpg" alt="" />
                    </div>
                    <div className="section_content_worker">
                        <h4>"En cada paso que damos juntos, encontramos la fuerza para superar los desafíos del Parkinson.
                            ¡Sigamos avanzando con determinación y esperanza!"</h4>

                        <p className="name_worker">Paloma ruiz</p>
                        <p>Encargada Centro de día</p>

                    </div>

                </div>
                <div className="card_worker">
                    <div className="section_img_worker" >
                        <img className="img_worker" src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1698965749/Angel_zwozbd.png" alt="" />
                    </div>
                    <div className="section_content_worker">
                        <h4>"Nuestro compromiso es más fuerte que cualquier temblor.
                            ¡Trabajemos unidos, inspirando coraje y alegría en cada momento!"</h4>

                        <p className="name_worker">Angel Serrano</p>
                        <p>Encargado de rehabilitación</p>

                    </div>
                </div>
                <div className="card_worker">
                    <div className="section_content_worker">
                        <h4>"En esta asociación, la perseverancia es nuestra bandera. Recordemos siempre: cada logro, grande o pequeño,
                            es una victoria en la batalla contra el Parkinson."</h4>

                        <p className="name_worker">Celia García</p>
                        <p>Encargada de estimulación</p>

                    </div>
                    <div className="section_img_worker">
                        <img className="img_worker" src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1698965750/celia_gknqcr.png" alt="" />
                    </div>



                </div>
                <div className="card_worker">
                    <div className="section_content_worker">
                        <h4>"Con cada sonrisa que compartimos, iluminamos el camino hacia la superación. Juntos,
                            creamos un espacio de apoyo, empatía y fortaleza para vencer al Parkinson."</h4>

                        <p className="name_worker">Marcos Chotsourian</p>
                        <p>Encargado ayuda a domicilio</p>

                    </div>
                    <div className="section_img_worker">
                        <img className="img_worker" src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1698965857/1696600529245_2_cdnn1v.jpg" alt="" />
                    </div>

                </div>
            </section>
            <Footer />


        </div>

    )

}

export default Aboutus;
