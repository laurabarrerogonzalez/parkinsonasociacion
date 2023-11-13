// TermsAndConditions.jsx

import React, { useState } from 'react';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
  const [isChecked, setChecked] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  const handleTermsClick = () => {
    setShowTerms(true);
  };

  return (
    <div className="terms-container">
      <label className="terms-checkbox">
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        Acepto las 
        <span className="terms-link" onClick={handleTermsClick}>
          Condiciones y la Política de privacidad
        </span>
      </label>

      {showTerms && (
        <div className="terms-modal">

          <p><strong>Condiciones y Política de privacidad: </strong><br/><br/>
          En cumplimiento de la normativa vigente en materia de Servicios de la Sociedad de la Información y de Comercio Electrónico y de Protección de Datos de Carácter Personal, le comunicamos que sus datos de carácter personal forman parte de una base de datos gestionada bajo nuestra responsabilidad con la finalidad de mantener las relaciones comerciales y/o contractuales e informarle de novedades y ofertas relacionadas con nuestra actividad., sea por su condición de cliente, porque nos haya solicitado información comercial en algún momento o porque sus datos figuren en fuentes accesibles al público. <br/> <br/>
          Es nuestra intención evitar el envío de correos no solicitado, por lo que si no desea seguir recibiendo este tipo de comunicaciones, podrá oponerse con la simple notificación de su voluntad, así como ejercitar sus derechos de acceso, rectificación, cancelación y oposición ante el responsable: <strong>ASOCIACION REGIONAL PARKINSON EXTREMADURA</strong>, en C/ MADRE REMEDIOS RODRIGO, S/N, 06800, de MERIDA-BADAJOZ, con teléfono 924 30 32 24 , o a través del siguiente correo electrónico: <strong>parkinsonextremadura@gmail.com</strong></p>
          <button onClick={() => setShowTerms(false)}>Cerrar</button>
        </div>
      )}
    </div>
  );
};

export default TermsAndConditions;
