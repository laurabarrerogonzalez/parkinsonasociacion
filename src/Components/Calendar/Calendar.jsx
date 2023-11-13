
import React, { useState } from 'react';
import { Calendar, theme } from 'antd';

const onPanelChange = (value, mode) => {
  console.log(value.format('YYYY-MM-DD'), mode);
};

const CalendarComponent = () => {
  const { token } = theme.useToken();
  const [selectedDate, setSelectedDate] = useState('');
  const dateInfoMap = {
    '2023-04-11': 'Día Internacional del Parkinson🩺💛🧡',
    '2023-11-05': 'Día Internacional de las Personas Cuidadoras👨🏻‍⚕️👩🏻‍⚕️',
    '2023-05-12': 'Día Internacional de la Enfermería👩🏾‍⚕️👨🏽‍⚕️',
    '2023-07-26': 'Día del adulto Mayor👴🏼🧓🏼👵🏼👩🏼‍🦰👴🏾👵🏾',
    '2023-09-15': 'Día del Geriatra🧑‍⚕️🩺👴',
    '2023-11-29': 'Día Mundial del Neurólogo🧑‍⚕️🩺',
    '2023-01-01': 'Año Nuevo🎇🥳',
    '2023-05-01': 'Día Internacional del Trabajador👷👷🏽‍♀️👨🏽‍⚕️👩🏻‍🏫',
    '2023-09-08': 'Día de Extremadura 💚🤍🖤',
    // Agrega el resto de las fechas...
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date.format('YYYY-MM-DD'));
  };

  const dateCellRender = (currentDate) => {
    const dateToHighlight = [
      '2023-04-11',
      '2023-11-05',
      '2023-05-12',
      '2023-07-26',
      '2023-09-15',
      '2023-11-29',
      '2023-01-01',
      '2023-05-01',
      '2023-09-08',
    ];

    const highlightStyle = {
      border: '4px solid yellow',
     borderRadius: '100%',
      height: '18px',
      width: '18px',
       position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    };

    const isDateToHighlight = dateToHighlight.includes(currentDate.format('YYYY-MM-DD'));

    return isDateToHighlight ? <div style={highlightStyle} /> : null;
  };

  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
    padding: '20px',
    backgroundColor: 'white',
    margin: '100px',
    marginTop: '80px',
    position: 'relative',
    top: 190,
    left: 80,
  };

  const infoStyle = {
    padding: '15px',
    backgroundColor: 'lightblue',
    width: '450px',
    textAlign: 'center',
    margin: '250px',
    marginTop:'250px',
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={wrapperStyle}>
        <Calendar
          fullscreen={false}
          onPanelChange={onPanelChange}
          onSelect={handleDateSelect}
          dateCellRender={dateCellRender}
        />
      </div>
      <div style={infoStyle}>
        {dateInfoMap[selectedDate] ? (
          <p style={{ fontSize: '18px' }}>{dateInfoMap[selectedDate]}</p>
        ) : (
          <p style={{ fontSize: '18px' }}>Selecciona una fecha para ver información</p>
        )}
      </div>
    </div>
  );
};

export default CalendarComponent;
