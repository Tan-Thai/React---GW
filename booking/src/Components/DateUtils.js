
export function getDates(WeekOffset) {
    const days = [
        { name: 'Mon', timeslots: getTimeslotsArray() },
        { name: 'Tue', timeslots: getTimeslotsArray() },
        { name: 'Wed', timeslots: getTimeslotsArray() },
        { name: 'Thu', timeslots: getTimeslotsArray() },
        { name: 'Fri', timeslots: getTimeslotsArray() },
        { name: 'Sat', timeslots: getTimeslotsArray() },
        { name: 'Sun', timeslots: getTimeslotsArray() }
      ];
  
    const today = new Date();
    today.setDate(new Date().getDate() + WeekOffset)

    for (let i = 0; i < days.length; i++) {
      const date = today.getDate() + (i - today.getDay()) + 1; /* +1 is there because mon is 1 and sun is 0 in the 0-6 day order */
      days[i].date = date;
    }
  
    console.log(`Adjusted date: ${today}`);
    return days;
  }
  
  function getTimeslotsArray() {
    const timeslots = [
      { time: '10:00', booked: false },
      { time: '11:00', booked: false },
      { time: '12:00', booked: false },
      { time: '13:00', booked: false },
      { time: '14:00', booked: false },
      { time: '15:00', booked: false },
      { time: '16:00', booked: false },
      { time: '17:00', booked: false }
    ];
  
    return timeslots;
  }