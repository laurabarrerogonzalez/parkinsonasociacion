import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "../CurrentNews/Proyects.css";
import BannerViews from "../../Components/BannerViews/BannerViews";
import Footer from "../../Components/Footer/Footer";

  
const Proyects = () => {
    
    return(
        <>
        <Navbar/>
        <BannerViews
        image="https://res.cloudinary.com/doft9ylq1/image/upload/v1699436663/20210810_120627_1_tg9wyh.jpg"
        title="CENTRO DE DÍA"
      />
       <h1>Proyectos</h1> 
       <Footer />
        </>

    )
       
}

export default Proyects;
