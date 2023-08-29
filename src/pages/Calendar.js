const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const DayComponent = ({ day, date }) => {
  return (
    <div>
      <p>{day}</p>
      <h4>{date}</h4>
    </div>
  );
};

function getWeekDates() {
  const today = new Date();
  const currentDay = today.getDay();
  const daysInWeek = 7;
  const weekDates = [];

  for (let i = 0; i < daysInWeek; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - (currentDay - i));
    weekDates.push(date.toDateString());
  }

  return weekDates;
}

const weekDates = getWeekDates();
console.log(weekDates);

const Calendar = () => {
  const today = new Date();
  const month = monthNames[today.getMonth()].slice(0, 3);
  // const shortYear = today.getFullYear().toString().slice(2, 4);

  // const startingDate = new Date(today);
  // startingDate.setDate(today.getDate() - today.getDay());
  // const dayComponents = days.map((day, index) => {
  //   const date = new Date(startingDate);
  //   date.setDate(startingDate.getDate() + index);
  // });

  return (
    <div>
      <div>
        <h3>{`${month} ${today.getDate()}`}</h3>
        <h4>{`${today.getFullYear()} `}</h4>
      </div>
      <div>
        <DayComponent day='Sun' />
        <DayComponent day='Mon' />
        <DayComponent day='Tue' />
        <DayComponent day='Wed' />
        <DayComponent day='Thu' />
        <DayComponent day='Fri' />
        <DayComponent day='Sat' />
      </div>
    </div>
  );
};

export default Calendar;
