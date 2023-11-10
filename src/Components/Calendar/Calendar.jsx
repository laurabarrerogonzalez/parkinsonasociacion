// import React from 'react';
// import { Calendar, theme } from 'antd';

// const onPanelChange = (value, mode) => {
//   console.log(value.format('YYYY-MM-DD'), mode);
// };

// const CalendarComponent = () => {
//   const { token } = theme.useToken();

//   const wrapperStyle = {
//     width: 300,
//     border: `1px solid ${token.colorBorderSecondary}`,
//     borderRadius: token.borderRadiusLG,
 
//   };

//   return (
//     <div style={wrapperStyle}>
//       <Calendar fullscreen={false} onPanelChange={onPanelChange} />
//     </div>
//   );
// };

// export default CalendarComponent;

import React from 'react';
import { Calendar, theme } from 'antd';
import { left } from '@popperjs/core';

const onPanelChange = (value, mode) => {
  console.log(value.format('YYYY-MM-DD'), mode);
};

const CalendarComponent = () => {
  const { token } = theme.useToken();

  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
    padding: '20px',
    backgroundColor: 'white',
    margin:'90px',
    marginTop:'70px',
    position: 'relative', // Define la posición relativa
     top: 150, // Mueve el elemento 20 píxeles desde la posición original en la parte superior
     left: 50, 
    
  };

  const calendarStyle = {
    // Estilos específicos para el calendario
    // Por ejemplo:
    backgroundColor: 'lightblue',
    border: 'none',
  };

  return (
    <div style={wrapperStyle}>
      <Calendar
        fullscreen={false}
        onPanelChange={onPanelChange}
        style={calendarStyle} // Aplica estilos directamente al componente Calendar
      />
    </div>
  );
};

export default CalendarComponent;