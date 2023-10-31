import React from 'react';
import "../Home/Home.css"
import Banner from '../../Components/Banner/Banner';
import Navbar from '../../Components/Navbar/Navbar';


const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner
        image="https://res.cloudinary.com/dp7lr71t8/image/upload/v1698743700/CALENDARIO_2024png_ysfcbp.png"
        text="Trazando juntos un camino de superación: Acompañando la lucha contra el Parkinson con determinación y esperanza."
      />

      <section className='section_title'>
        <div className='title_home'>
          <h1>La fuerza de un corazón, <br />
            la esperanza de un mañana:</h1>
          <br />
          <p>"Abrazando el Parkinson con amor y valentía."</p>
        </div>
        <div className='title_hometwo'>
          <p>"Enfrentando el Parkinson con valentía, cada día es un paso hacia la fortaleza. Tu determinación es tu mayor poder. ¡Sigamos adelante juntos!</p>

        </div>
      </section>
      <hr className='line_home' />

      <section className='services_home'>
        <div className='services_info'>
          <img src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1698755305/istockphoto-970225212-612x612_swhmoo.jpg" alt="" />
        </div>
        <div className='services_info'>
          <h1>Centro de día</h1> <br />
          <p>El Centro de Día ‘CON ALMA’ ofrece una atención integral durante el
            período diurno a las personas en situación de dependencia, con el objetivo
            de mantener el mayor grado de autonomía posible. Está dirigido a proporcionar
            una intervención especializada al usuario de manera que se contemplen
            y atiendan de un modo integral sus necesidades específicas. Las mismas
            se cubren desde un enfoque biopsicosocial con servicios de asesoramiento,
            rehabilitación, orientación para la promoción de la autonomía,
            habilitación y atención asistencial o personal. Disponemos de un Plan
            de Atención Integral.</p>
          <button class="btn">
            Leer más
          </button>
        </div>
        <div className='services_info'>
          <h1>Rehabilitación Integral</h1> <br />
          <p>La Rehabilitación Integral aborda una atención completa y especializada
            para aquellos que requieren apoyo en su proceso de recuperación.
            Este enfoque está diseñado para contemplar y atender las necesidades
            individuales en un marco biopsicosocial. Ofrecemos servicios de asesoramiento
            , terapias de rehabilitación, orientación para el desarrollo de habilidades
            , así como atención personalizada. Nuestro objetivo es facilitar un plan
            de atención integral para su recuperación.</p>

          <button class="btn">
            Leer más
          </button>
        </div>
        <div className='services_info'>
          <img src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1698787489/istockphoto-1143400998-612x612_phxeqg.jpg" alt="" />
        </div>
        <div className='services_info'>
          <img src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1698787489/istockphoto-1125540923-612x612_i7fveg.jpg" alt="" />
        </div>
        <div className='services_info'>
          <h1>Estimulación Cognitiva</h1> <br />
          <p>La Estimulación Cognitiva es un programa diseñado para potenciar y preservar
            las capacidades mentales y cognitivas de manera integral. Ofrecemos actividades
            y ejercicios especializados que buscan fortalecer la memoria, la atención,
            el razonamiento y otras habilidades cognitivas. Nuestro enfoque abarca una
            atención personalizada que promueve el desarrollo y el mantenimiento de las
            capacidades cognitivas. A través de técnicas especializadas, trabajamos para
            fomentar el bienestar y la autonomía cognitiva de nuestros usuarios.</p>
          <button class="btn">
            Leer más
          </button>
        </div>

        <div className='services_info'>
          <h1>Ayuda a domicilio</h1> <br />
          <p>Nuestro servicio de Ayuda a Domicilio está diseñado para proporcionar
            apoyo integral a personas que requieren asistencia en la comodidad de su
            hogar. Ofrecemos una amplia gama de cuidados personalizados que van desde
            el soporte en las actividades diarias hasta la atención especializada,
            adaptándonos a las necesidades individuales de cada persona.
            Nuestro objetivo es brindar un entorno seguro, cálido y comprensivo,
            garantizando la comodidad y el bienestar de quienes necesitan asistencia
            en su hogar.</p>

          <button class="btn">
            Leer más
          </button>
        </div>
        <div className='services_info'>
          <img src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1698787489/istockphoto-1430601013-612x612_qte2gh.jpg" alt="" />
        </div>

      </section>


    </div>

  );
};

export default Home;
