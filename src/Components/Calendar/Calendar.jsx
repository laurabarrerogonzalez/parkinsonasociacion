import React, { useState } from 'react';
import { Calendar, theme } from 'antd';

const onPanelChange = (value, mode) => {
  console.log(value.format('YYYY-MM-DD'), mode);
};

const CalendarComponent = () => {
  const { token } = theme.useToken();
  const [selectedDate, setSelectedDate] = useState('');
  const [workSchedule, setWorkSchedule] = useState('Horario de trabajo: 9:00 AM - 5:00 PM');

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
    '2023-10-27': 'Día de la terapia ocupacional 🙆🏻‍♂️💆🏻‍♀️🧘🏻',
    '2023-10-10': 'Día Mundial de la Salud Mental 🧠🫂🗣️',

    // Agrega el resto de las fechas...
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date.format('YYYY-MM-DD'));

    // Puedes ajustar el horario de trabajo según la fecha seleccionada
    // Aquí es solo un ejemplo fijo, puedes personalizarlo según tus necesidades.
    setWorkSchedule('Horario de trabajo: 9:00 AM - 5:00 PM');
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
      '2023-10-27',
      '2023-10-10',
      
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

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '500px',
    marginTop: '60px',  // Ajusta según sea necesario
  };

  const calendarWrapperStyle = {
    width: '300px',
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
    padding: '20px',
    backgroundColor: 'lightblue',
    marginTop: '200px',  // Ajusta según sea necesario
    
  };

  const infoStyle = {
    padding: '15px',
    backgroundColor: 'lightblue',
    width: '450px',
    textAlign: 'center',
    marginTop: '30px',  // Ajusta según sea necesario
  };

  const scheduleStyle = {
    padding: '15px',
    backgroundColor: 'lightgreen',
    width: '400px',
    textAlign: 'center',
    marginLeft:'25px',
    marginTop: '12px',
  };

  return (
    <div style={containerStyle}>
      <div style={calendarWrapperStyle}>
        <Calendar
          fullscreen={false}
          onPanelChange={onPanelChange}
          onSelect={handleDateSelect}
          dateCellRender={dateCellRender}
        />
      </div>
      <div>
        <div style={infoStyle}>
          {dateInfoMap[selectedDate] ? (
            <p style={{ fontSize: '18px' }}>{dateInfoMap[selectedDate]}</p>
          ) : (
            <p style={{ fontSize: '18px',color: '#767A82'}}>Selecciona una fecha para ver información</p>
          )}
        </div>
        <div style={scheduleStyle}>
          <p style={{ fontSize: '18px' }}>{workSchedule}</p>
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;

