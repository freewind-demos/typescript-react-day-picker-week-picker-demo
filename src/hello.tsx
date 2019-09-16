import React, {useState} from 'react'
import DayPicker, {DayModifiers} from 'react-day-picker';

import 'react-day-picker/lib/style.css';

export default function Hello() {
  const [date, setDate] = useState(new Date());

  function selectDay(day: Date, modifiers: DayModifiers, e: React.MouseEvent<HTMLDivElement>) {
    setDate(day);
  }

  return <div>
    <h1>Select Day: {date.toString()}</h1>
    <DayPicker selectedDays={[date]} onDayClick={selectDay}/>
  </div>
};
