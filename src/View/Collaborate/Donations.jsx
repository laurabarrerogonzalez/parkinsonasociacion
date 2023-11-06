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
          image="https://res.cloudinary.com/dit2zhtwz/image/upload/v1698744222/pareja-alegre-celebracion-icono-votacion-sentado-sofa_53876-24976_kke7zn.jpg"
          title="Mitos y Verdades"
        />
      </div>
      <Footer />
    </>
  );
};

export default Donations;
