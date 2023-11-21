import React from "react";
import "../About us/Aboutus.css";
import Navbar from "../../Components/Navbar/Navbar";
import BannerViews from "../../Components/BannerViews/BannerViews";
import Footer from "../../Components/Footer/Footer";
import ScrollArrow from '../../Components/ScrollArrow/ScrollArrow';
import ButtonDonate from "../../Components/ButtonDonate/ButtonDonate";




const Aboutus = () => {

    return (
        <div>
            <Navbar />
            <BannerViews
                image="https://res.cloudinary.com/dp7lr71t8/image/upload/v1698664674/ai-generated-8273256_1280_dspoq5.jpg"
                title="PERSONAS COMPROMETIDAS"

            />
            <section className="intro_Aboutus">

                <button className="btn_donar_Aboutus">
                    <svg class="empty" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0H24V24H0z"></path><path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2zm-3.566 15.604c.881-.556 1.676-1.109 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4-1.076 0-2.24.57-3.086 1.414L12 7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5 5.56 5 4 6.656 4 9c0 2.944 1.666 5.533 4.645 7.903.745.592 1.54 1.145 2.421 1.7.299.189.595.37.934.572.339-.202.635-.383.934-.571z"></path></svg>
                    <svg class="filled" height="32" width="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0H24V24H0z" fill="none"></path><path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"></path></svg>
                    Hazte Voluntario
                </button>
                <button className="btn_donar_Aboutus">
                    <svg class="empty" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0H24V24H0z"></path><path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2zm-3.566 15.604c.881-.556 1.676-1.109 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4-1.076 0-2.24.57-3.086 1.414L12 7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5 5.56 5 4 6.656 4 9c0 2.944 1.666 5.533 4.645 7.903.745.592 1.54 1.145 2.421 1.7.299.189.595.37.934.572.339-.202.635-.383.934-.571z"></path></svg>
                    <svg class="filled" height="32" width="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0H24V24H0z" fill="none"></path><path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"></path></svg>
                    Hazte Socio
                </button>
            </section>


            <section className="infor_asociation">
                <div className="container_img_text__obj" id="img_img">
                    <img src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1698961627/110.Definir-la-mision-y-vision-de-una-empresa-1024x494_gxlt5v.jpg" alt="Descripción de la imagen" />

                </div>
                <div className="container_img_text__obj" id="text_text">
                    <h2>Nuestro Objeto Social</h2>
                    <h3>ASOCIACIÓN DE PARKINSON EXTREMADURA</h3>
                    <p>La Asociación  Parkinson  Extremadura  tiene como objeto mejorar
                        la calidad de vida de las personas afectadas por la enfermedad de Parkinson y otras
                        enfermedades neurodegenerativas  de su entorno en la Comunidad de Extremadura.</p>

                </div>
                <div className="container_img_text__obj" id="text_text">
                    <h2>Nuestros Beneficiarios</h2>
                    <h3>ASOCIACIÓN DE PARKINSON EXTREMADURA</h3>
                    <p>Serán beneficiarios de la asociación cualquier persona afectada
                        de Parkinson y/o enfermedades neurodegenerativas, así como sus
                        familiares o cuidadores que necesiten asesoramiento, información y
                        apoyo. Y aquellos afectados de Parkinson que siendo socios/as
                        requieran de una atención terapéutica directa del servicio de
                        rehabilitación integral.</p>
                </div>
                <div className="container_img_text__obj" id="img_img" >
                    <img src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1699689582/team-386673_1280_1_c3jvjd.jpg" />
                </div>
                <div className="container_img_text__obj " id="img_img">
                    <img src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1699690192/people-1230872_1280_qrxrq2.jpg" />

                </div>
                <div className="container_img_text__obj" id="text_text">
                    <h2>Nuestros Fines</h2>
                    <h3>ASOCIACIÓN DE PARKINSON EXTREMADURA</h3>
                    <p>
                        <ol>
                            <li>Orientar, apoyar y asesorar a los afectados/as y sus familias.</li>
                            <li>Promover la integración social y comunitaria.</li>
                            <li>Ofrecer servicios de rehabilitación integral.</li>
                            <li>Difundir conocimiento y formación especializada.</li>
                        </ol>
                    </p>
                </div>

            </section>
            <hr className='line_left' />

            <section className="section_cards_values">
                <div className="card_value">
                    <div class="overlay">
                        <p class="overlay-text">Valores</p>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>
                    <img src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1698932414/people-2569234_1280_cufnwo.jpg" alt="Descripción de la imagen" />
                    <div class="card__content">
                        <p class="card__title">Valores</p>
                        <p class="card__description">
                            <ul>
                                <li>Promoción de la igualdad de género.</li>
                                <li>Fomento de la participación ciudadana.</li>
                                <li>Sensibilización sobre Parkinson y enfermedades neurodegenerativas.</li>
                            </ul>
                        </p>
                    </div>

                </div>
                <div className="card_value">
                    <div class="overlay">
                        <p class="overlay-text">Misión</p>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>
                    <img src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1699708128/objetivos_a5l7wd.png" alt="Descripción de la imagen" />
                    <div class="card__content">
                        <p class="card__title">Misión</p>
                        <p class="card__description">Mejorar la calidad de vida de las personas
                            afectadas por Parkinson y enfermedades neurodegenerativas en Extremadura,
                            ofreciendo servicios integrales, promoviendo la inclusión social
                            y concientizando a la comunidad sobre estas enfermedades.</p>
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
                        <p class="card__description">Ser líderes en el bienestar de personas con
                            Parkinson, destacando por servicios de calidad, sensibilización comunitaria
                            y colaboración en investigación, para construir una sociedad más informada
                            y solidaria.</p>
                    </div>
                </div>
            </section>

            <hr className='line_right' />


            <section className="title_workers_cards">
                <div className="title_equipment">
                    <h1>Equipo Profesional</h1>
                </div>
                <h3>Junta directiva</h3>
                <p>
                    <ul>
                        <li><strong className="name_name">José Ángel Calle Grajera</strong> - Presidente</li>
                        <li> <strong className="name_name">Antonio Ramón Zorita Pacheco</strong> - Secretario</li>
                        <li> <strong className="name_name">Manuel García Cid</strong> - Tesorero</li>
                        <li> <strong className="name_name">Ángel González Serrano</strong> - Primer Vocal</li>
                        <li> <strong className="name_name">Felicidad Suárez Fornelino</strong> - Segunda Vocal</li>
                        <li> <strong className="name_name">Miriam Vela Toro</strong> - Tercera Vocal</li>
                    </ul>
                </p>

            </section>

            <hr className='line_medium' />

            <section className="title_direction_admin">
                <h3>Dirección y Administración</h3>
            </section>

            <section className="section_workers" >
                <div className="card_worker" id="card1">
                    <div className="section_img_worker">
                        <img className="img_worker" src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1699530751/Foto_de_Noelia_pbh04r.jpg" alt="" />
                        <div class="triangle"></div>
                    </div>
                    <div className=" section_content_worker ">
                        <h3 className="name_worker"> Noelia Pavón Rodríguez </h3>

                        <p >Directora de la entidad.</p>


                    </div>

                </div>
                <div className="card_worker" id="card2">
                    <div className="section_img_worker" >
                        <img className="img_worker" src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1699703658/M_DOLORES_ADMINISTRATIVA_zxgbfy.jpg" alt="" />
                        <div class="triangle" id="triangle2"></div>
                    </div>
                    <div className="section_content_worker">
                        <h3 className="name_worker"> María Dolores Fresno Hernández </h3>

                        <p>Técnica Administrativa.</p>

                    </div>
                </div>
            </section>


            <hr className='line_medium' />


            <section className="title_therapeutics">
                <h3>Equipo Terapéutico</h3>
            </section>

            <section className="section_workers" >
                <div className="card_worker" id="card1">
                    <div className="section_img_worker">
                        <img className="img_worker" src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1699531762/CRISTINA_LOGOPEDA_SERVICIO_REHABILITACION_ltcpwi.jpg" alt="" />
                        <div class="triangle"></div>
                    </div>
                    <div className=" section_content_worker ">
                        <h3 className="name_worker"> Cristina Hernández González </h3>

                        <p >Logopeda del servicio
                            de rehabilitación integral para enfermos de parkinson y/o
                            parkinsionismo.</p>


                    </div>

                </div>
                <div className="card_worker" id="card2">
                    <div className="section_img_worker" >
                        <img className="img_worker" src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1699701465/JULIA_TERAPEUTA_1_qng8lg.jpg" alt="" />
                        <div class="triangle" id="triangle2"></div>
                    </div>
                    <div className="section_content_worker">
                        <h3 className="name_worker"> Julia González Sanfélix </h3>

                        <p>Terapeuta ocupacional y musicoterapeuta del servicio
                            de rehabilitación integral para enfermos de parkinson y/o
                            parkinsionismo y el servicio de centro de día.</p>

                    </div>
                </div>
                <div className="card_worker" id="card4" >
                    <div className="section_content_worker">
                        <h3 className="name_worker"> Pedro González Ramos </h3>

                        <p>Fisioterapeuta del servicio de rehabilitación integral
                            para enfermos de parkinson y/o parkinsionismo y el servicio
                            de centro de día.</p>


                    </div>
                    <div className="section_img_worker">
                        <img className="img_worker" src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1699530583/PEDRO_FISIOTERAPEUTA_fiaffy.jpg" alt="" />
                        <div class="triangle4" id="triangle3"></div>
                    </div>



                </div>
                <div className="card_worker" id="card2">
                    <div className="section_content_worker">
                        <h3 className="name_worker"> Miriam Puerto Navarro </h3>

                        <p>Terapeuta ocupacional del servicio de centro de día y
                            el servicio de estimulación cognitiva.</p>


                    </div>
                    <div className="section_img_worker">
                        <img className="img_worker" src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1699702441/8dffc810ac2226282085257e73a60761_bxf3la.jpg" alt="" />
                        <div class="triangle" id="triangle4"></div>
                    </div>

                </div>
            </section>

            <hr className='line_medium' />

            <section className="title_auxiliaries">
                <h3>Auxiliares y Cuidadoras</h3>
            </section>



            <section className="section_workers" >
                <div className="card_worker" id="card1">
                    <div className="section_img_worker">
                        <img className="img_worker" src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1699702900/CARMEN_CUIDADORA_CENTRO_DE_DIA_1_kgohpo.jpg" alt="" />
                        <div class="triangle"></div>
                    </div>
                    <div className=" section_content_worker ">
                        <h3 className="name_worker"> Carmen María Barroso Lozano </h3>

                        <p >Cuidadora del servicio de Centro de día</p>


                    </div>

                </div>
                <div className="card_worker" id="card2">
                    <div className="section_img_worker" >
                        <img className="img_worker" src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1699531762/M_ISABEL_CUIDADORA_CENTRO_DE_DIA_ziykmz.jpg" alt="" />
                        <div class="triangle" id="triangle2"></div>
                    </div>
                    <div className="section_content_worker">
                        <h3 className="name_worker"> María Isabel Bravo Corbacho </h3>

                        <p>Cuidadora del servicio de Centro de día.</p>

                    </div>
                </div>
                <div className="card_worker" id="card4" >
                    <div className="section_content_worker">
                        <h3 className="name_worker"> María Josefa Silvero Lozano </h3>

                        <p>Cuidadora del servicio de Centro de día.</p>



                    </div>
                    <div className="section_img_worker">
                        <img className="img_worker" src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1699702899/M_JOSEFA_CUIDADORA_CENTRO_DE_DIA_1_hhb7hd.jpg" alt="" />
                        <div class="triangle" id="triangle3"></div>
                    </div>



                </div>
                <div className="card_worker" id="card2">
                    <div className="section_content_worker">
                        <h3 className="name_worker"> Cecilia Matos Alata </h3>

                        <p>Auxiliar servicio de ayuda a domicilio.</p>


                    </div>
                    <div className="section_img_worker">
                        <img className="img_worker" src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1699702441/8dffc810ac2226282085257e73a60761_bxf3la.jpg" alt="" />
                        <div class="triangle" id="triangle4"></div>
                    </div>

                </div>
            </section>

            <hr className='line_left' />


            <section className="title_history">
                <h1>Nuestra Historia</h1>
            </section>

            <section className="container_history">
                <div className="img_history_asociation">
                    <img src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1699219864/zyro-image_wkxrbc.png" alt="" />
                </div>
                <div className="history_asociation">

                    <h3>Asociación Regional de Parkinson Extremadura</h3>
                    <p>La ASOCIACIÓN REGIONAL DE PARKINSON EXTREMADURA, se constituye
                        el 1 de febrero del 2002, con número de registro 3167 de la
                        sección 1ª como una Asociación privada y sin ánimo de lucro,
                        con carácter de Organización No Gubernamental (O.N.G.). Con
                        número de identificación Fiscal; G-06366371.

                        Inscrita en el Registro Unificado de Entidades y Centros
                         de Servicios Sociales de Extremadura con el nº:10/2/6/99.91/1691
                          desde el 2 de abril de 2002.

                        Amparada en la Constitución y en la legalidad vigente, y
                         reconocida como de “Utilidad Pública” por el Ministerio del 
                         Interior mediante resolución del 25 de Mayo de 2015, se regirá
                          en lo sucesivo por los presentes Estatutos. Parkinson 
                          Extremadura se somete al régimen asociativo contenido en la 
                          Ley Orgánica 1/2002, de 22 de Marzo, reguladora del Derecho.</p>


                </div>
            </section>



            <Footer />
            <ButtonDonate />
            <ScrollArrow/>


        </div>

    )

}

export default Aboutus;
