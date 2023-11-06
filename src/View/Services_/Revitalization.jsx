import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import BannerViews from "../../Components/BannerViews/BannerViews";
import "../Services_/Revitalization.css"
import Footer from "../../Components/Footer/Footer";
import ButtonDonate from "../../Components/ButtonDonate/ButtonDonate";
import ScrollArrow from "../../Components/ScrollArrow/ScrollArrow";




const Revitalization = () => {

    return (

        <div>
            <Navbar />
            <BannerViews
                image="https://res.cloudinary.com/dp7lr71t8/image/upload/v1699270839/rehabilitacion_njafpr.jpg"
            // title="REHABILITACIÓN"
            />
            <section className="section_title_content_revitalization">
                <div className="title-revitalization">
                    <h1>Rehabilitación</h1>
                </div>

                <div className="content_revitalization">
                    <p>Uno de los recursos complementarios al tratamiento
                        farmacológico son las terapias de rehabilitación y estimulación. Éstas comprenden: <br></br>
                    </p>
                </div>
            </section>

            <section className="section_activ_revitalization">

                <div className="content_activ">
                    <div className="title_activ">
                        <h1>Actividades</h1>
                    </div>

                    <div className="text-activ">
                        <ul>
                            <li> <strong>Taller nuevas tecnologías</strong></li>
                            <li> <strong>Deambulación</strong></li>
                            <li> <strong>Hortoterapia</strong></li>
                            <li> <strong>Ludoterapia</strong></li>
                            <li> <strong>Laborterapia</strong></li>
                            <li> <strong>Terapia con perros</strong></li>
                            <li> <strong>Psicomotricidad</strong></li>

                        </ul>
                    </div>
                </div>

                <div className="activ_img_revitalization">
                    <img
                        src="https://res.cloudinary.com/doft9ylq1/image/upload/v1699004873/IMG-20231025-WA0001_qku82e.jpg"
                        alt="Imagen 1"
                        className="revitaliz-image"
                    />
                    <img
                        src="https://res.cloudinary.com/doft9ylq1/image/upload/v1699005153/e96e5008-5541-4c4c-b02c-140d8e7a1183_jwxyis.jpg"
                        alt=""
                        className="revitaliz-image1"
                    />
                    <img
                        src="https://res.cloudinary.com/doft9ylq1/image/upload/v1699015076/20221110_114455_nsagal.jpg"
                        alt="Imagen 2"
                        className="revitaliz-image2"
                    />
                    <img
                        src="https://res.cloudinary.com/doft9ylq1/image/upload/v1699015418/20200626_110630_1_qco2pi.jpg"
                        alt="Imagen 2"
                        className="revitaliz-image3"
                    />

                </div>
            </section>

            <section className="text_finish">

                <div className="title-revitalization">
                    <h1>Importante</h1>
                </div>

                <div className="content_revitalization">
                    <p>Estas disciplinas reportan un beneficio directo en el paciente. Se desarrollan tanto sesiones individuales como grupales de acuerdo a los
                        distintos estadios evolutivos de la enfermedad.
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
