import React, { useEffect } from 'react';
import Navbar from "../../Components/Navbar/Navbar";
import BannerViews from "../../Components/BannerViews/BannerViews";
import "../Services_/Revitalization.css"
import Footer from "../../Components/Footer/Footer";
import ButtonDonate from "../../Components/ButtonDonate/ButtonDonate";
import ScrollArrow from "../../Components/ScrollArrow/ScrollArrow";




const Revitalization = () => {

    useEffect(() => {
        // Hacer scroll al principio de la página cuando el componente se monta
        window.scrollTo(0, 0);
      }, []);

    return (

        <div>
            <Navbar />
            <BannerViews
                image="https://res.cloudinary.com/dp7lr71t8/image/upload/v1699720847/e96e5008-5541-4c4c-b02c-140d8e7a1183_1_2_sp7kdx.jpg"
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
                            <li> <strong>Terapia ocupacional</strong></li>
                            <li> <strong>Fisioterapia</strong></li>
                            <li> <strong>Logopedia</strong></li>
                            <li> <strong>Enfermería</strong></li>
                            <li> <strong>Psicología</strong></li>

                        </ul>
                    </div>
                </div>

                <div className="activ_img_revitalization">
                    <img
                        src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1699350860/descarga_3_vupzcb.jpg"
                        alt="Imagen 1"
                        className="revitaliz-image"
                    />
                    <img
                        src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1699350860/fisioterapia-para-adultos-mayores_rpasun.jpg"
                        alt=""
                        className="revitaliz-image1"
                    />
                    <img
                        src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1699350663/IMG_1036_kpsddc.jpg"
                        alt="Imagen 2"
                        className="revitaliz-image2"
                    />
                    <img
                        src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1699350663/ec0ef53c-1385-4945-b2db-0206a1ce1fbf_rzydi3.jpg"
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
