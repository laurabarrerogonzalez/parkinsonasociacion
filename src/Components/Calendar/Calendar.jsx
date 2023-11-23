import React, { useState } from "react";
import { Calendar, theme } from "antd";
import "./Calendar.css";

const onPanelChange = (value, mode) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};

const CalendarComponent = () => {
  const { token } = theme.useToken();
  const [selectedDate, setSelectedDate] = useState("");
  const [workSchedule, setWorkSchedule] = useState(
    "Horario de trabajo: 9:00 AM - 5:00 PM"
  );

  const dateInfoMap = {
    "2023-04-11": "Día Internacional del Parkinson🩺💛🧡",
    "2023-11-05": "Día Internacional de las Personas Cuidadoras👨🏻‍⚕️👩🏻‍⚕️",
    "2023-05-12": "Día Internacional de la Enfermería👩🏾‍⚕️👨🏽‍⚕️",
    "2023-07-26": "Día del adulto Mayor👴🏼🧓🏼👵🏼👩🏼‍🦰👴🏾👵🏾",
    "2023-09-15": "Día del Geriatra🧑‍⚕️🩺👴",
    "2023-11-29": "Día Mundial del Neurólogo🧑‍⚕️🩺",
    "2023-01-01": "Año Nuevo🎇🥳",
    "2023-05-01": "Día Internacional del Trabajador👷👷🏽‍♀️👨🏽‍⚕️👩🏻‍🏫",
    "2023-09-08": "Día de Extremadura 💚🤍🖤",
    "2023-10-27": "Día de la terapia ocupacional 🙆🏻‍♂️💆🏻‍♀️🧘🏻",
    "2023-10-10": "Día Mundial de la Salud Mental 🧠🫂🗣️",
    "2023-12-03": "Día Mundial de la Discapacidad ♿👩🏻",
    "2023-09-21": "Día Mundial del Alzheimer ♿👩🏻",
    "2023-03-06": "Día Europeo de la logopedia ♿👩🏻",
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date.format("YYYY-MM-DD"));

    setWorkSchedule("Horario de trabajo: 9:00 AM - 5:00 PM");
  };

  const dateCellRender = (currentDate) => {
    const dateToHighlight = [
      "2023-04-11",
      "2023-11-05",
      "2023-05-12",
      "2023-07-26",
      "2023-09-15",
      "2023-11-29",
      "2023-01-01",
      "2023-05-01",
      "2023-09-08",
      "2023-10-27",
      "2023-10-10",
      "2023-12-03",
      "2023-09-21",
      "2023-03-06",
    ];

    const isDateToHighlight = dateToHighlight.includes(
      currentDate.format("YYYY-MM-DD")
    );

    return isDateToHighlight ? <div className="highlight" /> : null;
  };

  return (
    <div className="calendar-container">
      <div className="calendar-wrapper">
        <Calendar
          fullscreen={false}
          onPanelChange={onPanelChange}
          onSelect={handleDateSelect}
          dateCellRender={dateCellRender}
        />
      </div>
      <div>
        <div className="info">
          {dateInfoMap[selectedDate] ? (
            <p>{dateInfoMap[selectedDate]}</p>
          ) : (
            <p className="no-date-selected">
              Selecciona una fecha para ver información
            </p>
          )}
        </div>
        <div className="schedule">
          <p>{workSchedule}</p>
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;
