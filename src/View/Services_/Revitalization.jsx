import React, { useEffect } from 'react';
import Navbar from "../../Components/Navbar/Navbar";
import BannerViews from "../../Components/BannerViews/BannerViews";
import "../Services_/Revitalization.css"
import Footer from "../../Components/Footer/Footer";
import ButtonDonate from "../../Components/ButtonDonate/ButtonDonate";
import ScrollArrow from "../../Components/ScrollArrow/ScrollArrow";




const Revitalization = () => {

    useEffect(() => {
        
        window.scrollTo(0, 0);
    }, []);

    return (

        <div>
            <Navbar />
            <BannerViews
                image="https://res.cloudinary.com/dp7lr71t8/image/upload/v1699720847/e96e5008-5541-4c4c-b02c-140d8e7a1183_1_2_sp7kdx.jpg"
           
            />


            <section className="section_title_content_revitalization">
                <div className="title-revitalization">
                    <h1>Rehabilitación</h1>
                </div>

                <div className="content_revitalization">
                    <p>Uno de los recursos complementarios al tratamiento
                        farmacológico son las terapias de rehabilitación y estimulación. Estas comprenden: <br></br>
                    </p>
                </div>
            </section>

            <section className='container_revitalization_info'>

                <div className='info_revitalization_info'>
                    <div className='title_info_revitalization'>
                        <h2>Actividades de Rehabilitación</h2>
                    </div>
                    <div className='one_activ'>
                        <h3>01 FISIOTERAPIA</h3>
                        <p>La fisioterapia en la enfermedad de Parkinson ayuda a rehabilitar
                            la marcha, superar bloqueos,
                            facilitar los cambios posturales,
                            mantener la amplitud del movimiento,
                            la elasticidad muscular y a disminuir
                            las molestias físicas derivadas de otros
                            síntomas que aparecen durante la evolucion de la
                            enfermedad.
                        </p>
                    </div>
                    <div className='one_activ'>
                        <h3>02 TERAPIA OCUPACIONAL</h3>
                        <p>La terapia ocupacional se encarga de prevenir
                            limitaciones articulares, mejorar o mantener la
                            <strong> motricidad fina</strong>, entrenar
                            las <strong>actividades básicas de la vida diaria </strong>
                            y asesorar al paciente a la hora de <strong>adaptar el hogar.</strong>
                        </p>
                    </div>
                    <div className='one_activ'>
                        <h3>03 LOGOPEDIA</h3>
                        <p>La logopedia pretende mejorar el control
                            de la <strong>musculatura bucofonatoria, </strong>
                            mejorar la <strong>prosodia </strong> para evitar la
                            <strong> monotonía del hable</strong> y conseguir una
                            <strong> articulación sana y eficaz. </strong>
                            Además ayuda a tratar la <strong>disfagia</strong> y trabaja
                            el <strong>pensamiento</strong> mediante
                            <strong> el lenguaje comprensivo y expresivo.</strong>
                        </p>
                    </div>
                </div>
                <div className='photografy'>
                    <div className="activ_img_revitalization">
                        <img
                            src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1699722226/IMG-20231025-WA0000_fowxow.jpg"
                            alt="Imagen 1"
                            className="revitaliz-image"
                        />
                        <img
                            src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1699730144/IMG-20231025-WA0001_fxap4m.jpg"
                            alt=""
                            className="revitaliz-image1"
                        />
                        <img
                            src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1699730146/IMG_9503_gj3n8g.jpg"
                            alt="Imagen 2"
                            className="revitaliz-image2"
                        />
                        <img
                            src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1699730144/IMG-20231026-WA0001_afbkx2.jpg"
                            alt="Imagen 2"
                            className="revitaliz-image3"
                        />

                    </div>

                    <div className='info_activ_img_revitalization'>
                        <div className='title_img_revitaliz'>
                            <h3>OBJETIVOS DEL SERVICIO</h3>
                            <p>Mejorar la <strong>calidad de vida</strong> de los pacientes
                                con enfermedad de Parkinson y/o Parkinsonismos y
                                sus <strong>familiares y/o cuidadores </strong>
                                manteniendo la <strong>autonomía</strong> del afectado el
                                mayor tiempo posible, minimizando los factores limitantes
                                propios de la patología. </p>

                        </div>

                        <div className='title_img_revitaliz'>
                            <h3>BENEFICIARIOS</h3>
                            <p><strong>Afectados</strong> por la problematica
                                sociosanitaria de la <strong>Enfermedad de Párkinson y/o
                                    Pakinsonismos
                                </strong> con <strong>alteraciones,</strong> presentes o no,
                                relacionadas con síntomas <strong>motores y no motores </strong> 
                                de la propia patología.

                            </p>

                        </div>
                    </div>



                </div>


            </section>


            <section className="text_finish">

                <div className="title-revitalization">
                    <h1>Importante</h1>
                </div>

                <div className="content_revitalization">
                    <p>En este punto la funcion de la Asociación es imprescindible ya que debemos
                        ofrecer todo tipo de apoyos a nuestro colectivo: asistencial, psicológico y 
                        social.
                    </p>
                </div>

            </section>

            <Footer />
            <ButtonDonate />
            <ScrollArrow />





        </div>


    )

}

export default Revitalization;
