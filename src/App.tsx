import * as React from "react";
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import './App.scss';

const App = () => {
  return (<FullCalendar
    defaultView="timeGridWeek"
    plugins={[timeGridPlugin]}
    timeZone={'UTC'}
    events={[
      { title: "Ceremony 1", start: new Date("2019-06-17 10:00"), end: new Date("2019-06-17 11:30") },
      { title: "Ceremony 2", start: new Date("2019-06-17 13:00"), end: new Date("2019-06-17 14:00") },
      { title: "Ceremony 3", start: new Date("2019-06-18 13:00"), end: new Date("2019-06-18 14:00") },
      { title: "Ceremony 4", start: new Date("2019-06-18 13:30"), end: new Date("2019-06-18 14:00") },
      { title: "Ceremony 5", start: new Date("2019-06-19 10:00"), end: new Date("2019-06-19 11:30") },
    ]}
    header={{
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek'
    }}
    editable={true}
  />);
}

export default App;