import React from 'react';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './MainLayout.css';

import { getDates } from './Components/DateUtils';


function App() {

  const [WeekOffset, setWeekOffset] = useState(0)
  const days = getDates(WeekOffset);

  const adjustWeek = (offset) => {
    setWeekOffset(prev => prev + offset);
  };

  return (
    <div className="container position relative">
      <h2 className="row justify-content-center"> Available Times </h2>

      <div className="row justify-content-center mb-2">
        <div className="col-12 col-md-6 text-start">
          <button className="btn btn-outline-secondary weekBtn" onClick={() => adjustWeek(-7)}>Previous Week</button>
        </div>
        <div className="col-12 col-md-6 text-end">
          <button className="btn btn-outline-secondary weekBtn" onClick={() => adjustWeek(+7)}>Next Week</button>
        </div>
      </div>

      <div className="row justify-content-center">
        {days.map((day, index) => (
          <div key={index} className="col-2">
            <div className="square dateFont">
              <span>{day.name}</span>
              <span>{day.date}</span>
            </div>
            <div className="tall-column">
              {day.timeslots.map((timeslot, buttonIndex) => (
                <button key={buttonIndex} className="btn btn-primary mt-1 mb-1 bookingBtn">
                  {timeslot.time}
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
