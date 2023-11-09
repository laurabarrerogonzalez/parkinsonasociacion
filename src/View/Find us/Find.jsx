import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Mapa from "../../Components/Map/Map";
import BannerViews from "../../Components/BannerViews/BannerViews";
import Footer from "../../Components/Footer/Footer";
import ButtonDonate from "../../Components/ButtonDonate/ButtonDonate";
import ScrollArrow from "../../Components/ScrollArrow/ScrollArrow";


  
const Find = () => {
    
    return(
        <>
        <Navbar/>
        <BannerViews
          image="https://res.cloudinary.com/dit2zhtwz/image/upload/v1699193991/istockphoto-532484805-612x612_l9xgr1.jpg"
          title="Evolución y Tratamiento"/>
        <Mapa/> 
        <Footer/>
        <ButtonDonate/>
        <ScrollArrow/>
        </>

    )
       
}

export default Find;
