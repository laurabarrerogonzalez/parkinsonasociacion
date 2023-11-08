import React from "react";
import "../About us/Aboutus.css";
import Navbar from "../../Components/Navbar/Navbar";
import BannerViews from "../../Components/BannerViews/BannerViews";




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
                    afectadas con parkinson. Somos un equipo entusiasta, diverso e íntegro que cree en
                    la capacidad de las personas para cambiar su entorno. Juntas somos imparables. </p>

                <button>Hola</button>
            </section>

        </div>

    )

}

export default Aboutus;
