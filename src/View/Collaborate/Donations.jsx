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
      <Footer />
    </>
  );
};

export default Donations;
