
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

    const timeslots = getTimeslotsArray();
    const bookedSlots = timeslots.map(() => false);
  

    const today = new Date();
    today.setDate(today.getDate() + WeekOffset);

    for (let i = 0; i < days.length; i++) {
        const date = new Date(today);
        date.setDate(date.getDate() + (i - today.getDay()) + 1);

        days[i].date = date.getDate();
        days[i].id = i; // Add a unique ID for each day
    }

    console.log(`Adjusted date: ${days}`);
    return days; /*bookedSlots*/
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