import React, { useEffect } from 'react';
import Navbar from "../../Components/Navbar/Navbar";

  
const Help = () => {
    
    useEffect(() => {
        // Hacer scroll al principio de la página cuando el componente se monta
        window.scrollTo(0, 0);
      }, []);
    
    return(
        <>
        <Navbar/>
       <h1>Ayuda</h1> 
        </>

    )
       
}

export default Help;
