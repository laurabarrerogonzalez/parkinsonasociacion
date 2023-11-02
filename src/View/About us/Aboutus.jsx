import React from "react";
import "../About us/Aboutus.css";
import Navbar from "../../Components/Navbar/Navbar";
import BannerViews from "../../Components/BannerViews/BannerViews";



  
const Aboutus = () => {
    
    return(
        <div>
      <Navbar />
      <BannerViews
        image="https://res.cloudinary.com/dp7lr71t8/image/upload/v1698664674/ai-generated-8273256_1280_dspoq5.jpg"
        title="VIVIENDO CON PASIÓN"
        text="Trazando juntos un camino de superación: Acompañando la lucha contra el Parkinson con determinación y esperanza."
      />
      </div>

    )
       
}

export default Aboutus;
