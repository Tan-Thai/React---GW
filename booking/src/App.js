import React from 'react';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './MainLayout.css';

import { getDates } from './Components/DateUtils';


function App() {

  const [WeekOffset, setWeekOffset] = useState(0)
  const [days, setDays] = useState(() => getDates(WeekOffset));
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const adjustWeek = (offset) => {
    const newWeekOffset = WeekOffset + offset;
    setWeekOffset(newWeekOffset);
    setDays(getDates(newWeekOffset));
  };

  const handleTimeslot = (dayId, timeslotIndex) => {
    const updatedDays = days.map((day) => {
      if (day.id === dayId && day.date >= today.getDate()) {
        const updatedTimeslots = day.timeslots.map((timeslot, index) => {
          if (index === timeslotIndex) {
            return { ...timeslot, booked: !timeslot.booked };
          }
          return timeslot;
        });
        return { ...day, timeslots: updatedTimeslots };
      }
      return day;
    });
    setDays(updatedDays);
  };

  return (
    <div className="container position relative">
      <h2 className="row justify-content-center"> Available Times </h2>

       Start of week
      <div className="row justify-content-center mb-2"> 
        <div className="col-12 col-md-6 text-start">
          <button className="btn btn-outline-secondary weekBtn" onClick={() => adjustWeek(-7)}>Previous Week</button>
        </div>
        <div className="col-12 col-md-6 text-end">
          <button className="btn btn-outline-secondary weekBtn" onClick={() => adjustWeek(+7)}>Next Week</button>
        </div>
      </div>

      <div className="row justify-content-center">
        {days.map((day) => (
          <div key={day.id} className="col-2">
            <div className="square dateFont">
              <span>{day.name}</span>
              <span>{day.date}</span>
            </div>
            <div className="tall-column">
              {day.timeslots.map((timeslot, buttonIndex) => (
                <button
                  key={buttonIndex}
                  className={`btn btn-primary mt-1 mb-1 bookingBtn${timeslot.booked ? ' booked' : ''}`}
                  onClick={() => handleTimeslot(day.id, buttonIndex)}
                  disabled={timeslot.booked || day.date < today.getDate()}
                >
                  {timeslot.booked ? 'Booked' : timeslot.time}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );

}


export default App;
