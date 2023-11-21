 Footer.jsx 
 import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faInstagramSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Footer.css';

const Footer = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <footer className="footer">
            <div className='footer-content'>
                <section className="section1">
                    <img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1698680539/Logo_P_nrse8e.png" alt="Logo" style={{ width: '200px' }} />
                    <p>c/Madre Remedios Rodrigo, s/n.</p>
                    <p>06800 Mérida (Badajoz)</p>
                    <p>Teléfono 924 30 32 24</p>
                </section>
                <section className="section2">
                    <div>
                        <a href="https://www.instagram.com/PARKINSONEX" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagramSquare} style={{ color: '#a725b1' }} size="2x" />
                            <span>@PARKINSONEX</span>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.facebook.com/AsociaciónRegionalParkinsonExtremadura" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebookSquare} style={{ color: '#1950ae' }} size="2x" />
                            <span>Asociación Regional Parkinson Extremadura</span>
                        </a>
                    </div>
                </section>
                <section className="section3">
                    <h2>¿Necesitas ayuda? Podemos asesorarte</h2>
                    <hr />
                    <p>PARKINSONEXTREMADURA@GMAIL.COM</p>
                </section>
            </div>
            <section className="footer-section">
                <Slider {...settings}>
                    <img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1698682471/ICONO_RRSS_COMPLETO_fokcvw.png" alt='Ayuntamiento de Mérida' className="carousel-image" />
                    <img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1698682834/minsan_xdiovd.png" alt='Ministerio de Sanidad Gobierno de España' className="carousel-image" />
                    <img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1698682469/FUNDACION_ONCE_zydrpz.png" alt='Fundación ONCE' className="carousel-image" />
                    <img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1698682834/obrasocial_r2pu2y.png"  alt='Fundación "La Caixa" Obra Social' className="carousel-image" />
                    <img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1698682472/LOGO_DIP_BADAJOZ_mid5ml.png" alt='Diputación de Badajoz' className="carousel-image" />
                    <img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1698682471/logococemfe1_cfpmqb.jpg" alt='COCEMFE' className="carousel-image" />
                    <img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1698682471/LOGO_FEP_eff7hl.jpg" alt='Federación Española de Parkinson' className="carousel-image" />
                    <img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1698682471/Sanidad_y_Politicas_Sociales_1_ijxxde.png" alt='Junta de Extremadura, Consejería de Sanidad y Políticas Sociales' className="carousel-image" />
                    <img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1698682471/logo-vector-diputacion-caceres_bjh8qe.jpg" alt='Diputación de Cáceres' className="carousel-image" />
                    <img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1698682470/descarga_sepad_1_q19xei.png" alt='SEPAD, Servicio Extremeño de Promoción de la Autonomía y Atención a la Dependencia' className="carousel-image" />
                    <img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1698682470/LogoPar_zmrrvq.png" alt='Asociación Regional de Parkinson de Extremadura' className="carousel-image" />
                    <img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1698682470/AYTO_MONTIJO_fzlzkd.jpg" alt='Ayuntamiento de Montijo' className="carousel-image" />
                </Slider>
            </section>
        </footer>
    );
};
export default Footer;