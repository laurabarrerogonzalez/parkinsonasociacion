import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../assets/Components/Footer/Footer";
import BannerViews from "../../Components/BannerViews/BannerViews";
import ButtonDonate from "../../Components/ButtonDonate/ButtonDonate";
import ScrollArrow from "../../Components/ScrollArrow/ScrollArrow";

const Donations = () => {
  return (
    <>
      <div>
        <Navbar />
        <BannerViews
          image="https://res.cloudinary.com/da7ffijqs/image/upload/t_Banner 16:9/v1699259241/20230208_124105_zdkl9r.jpg"
        title="¿Quieres donar?"
        />
      </div>
      <Footer />
      <ButtonDonate />
      <ScrollArrow/>
    </>
  );
};

export default Donations;
