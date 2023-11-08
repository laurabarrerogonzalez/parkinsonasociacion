import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../assets/Components/Footer/Footer";
import BannerViews from "../../Components/BannerViews/BannerViews";

const Donations = () => {
  return (
    <>
      <div>
        <Navbar />
        <BannerViews
          image="https://res.cloudinary.com/da7ffijqs/image/upload/t_Gradient fade/v1699346654/Captura_de_pantalla_2023-11-07_094246_dvxa7d.png"
          title="¿Quieres donar?"
        />
      </div>
      <div>
        <p>
          "El Parkinson no define a quienes lo padecen, pero juntos podemos
          redefinir su impacto. Cada gesto de apoyo, cada muestra de
          comprensión, es un paso hacia la mejora de la calidad de vida de
          quienes conviven con esta condición. La fuerza, el coraje y la
          resiliencia de quienes enfrentan el Parkinson a diario son ejemplos de
          inspiración. Su lucha es un recordatorio de que, a pesar de los
          desafíos, la esperanza y la determinación siempre prevalecen. Con
          conciencia, apoyo y avances médicos, podemos construir un mundo más
          amable y compasivo para quienes viven con Parkinson. La comprensión y
          el respaldo son fundamentales en esta lucha. ¡Seamos la voz, el apoyo
          y la esperanza que aquellos con Parkinson necesitan! Juntos, podemos
          impulsar la investigación, brindar ayuda y cambiar vidas.
          #UnidosContraElParkinson"
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Donations;
