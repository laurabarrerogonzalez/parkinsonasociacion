import React from 'react';
import './Information.css';

const Information = () => {
    return (
        <div className="container">
            <div className="card cardbadajoz">
                <div className="image-container">
                    <img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1699529346/Badajoz_uougel.jpg" alt="Badajoz" />
                </div>
                <div className="card__content">
                    <p className="card__title">Badajoz</p>
                    <p className="card__description">Calle Godofredo Ortega y Muñoz, 5 <br/>
                    06011 - Badajoz</p>
                </div>
            </div>
            <div className="card cardcaceres">
            <div className="image-container">
                    <img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1699529346/Caceres_gq4sxu.jpg" alt="Cáceres" />
                </div>
                <div className="card__content">
                    <p className="card__title">Cáceres</p>
                    <p className="card__description">Calle La Carrera, 8 <br/>
                    10002 - Cáceres</p>
                </div>
            </div>
            <div className="card cardmontijo">
            <div className="image-container">
                    <img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1699529345/Montijo_akt4yh.jpg" alt="Montijo" />
                </div>
                <div className="card__content">
                    <p className="card__title">Montijo</p>
                    <p className="card__description">Calle Salcillo, 146 <br/>
                    Centro Cultural "El Valle" <br/>
                    06480 - Montijo (Badajoz)</p>
                </div>
            </div>
            <div className="card cardmerida">
            <div className="image-container">
                    <img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1699529346/M%C3%A9rida_lkgskb.jpg" alt="Mérida" />
                </div>
                <div className="card__content">
                    <p className="card__title">Mérida</p>
                    <p className="card__description">Calle Madre Remedios Rodirgo, s/n <br/>
                    06800 - Mérida (Badajoz) <br/>
                    Tel.: 924 303 224</p>
                </div>
            </div>
        </div>
    );
};

export default Information;