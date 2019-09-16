import React, {useState} from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'moment/locale/it';
import 'react-day-picker/lib/style.css';

const {
  formatDate,
  parseDate,
} = require('react-day-picker/moment');

export default function Hello() {
  const [date, setDate] = useState(new Date(2000, 0, 1));

  return <div>
    <h1>Select Day: {date.toString()}</h1>
    <DayPickerInput
      formatDate={formatDate}
      parseDate={parseDate}
      format="DD/MM/YYYY"
      onDayChange={setDate} value={date}/>
  </div>
};
