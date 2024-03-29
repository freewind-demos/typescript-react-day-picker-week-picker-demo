import React, {useState} from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'moment/locale/it';
import moment from 'moment';
import {DayModifiers} from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import './WeekPicker.pcss';

const {
  formatDate,
  parseDate,
} = require('react-day-picker/moment');

type DateRange = {
  from: Date,
  to: Date
}

function getWeekDays(weekStart: Date): Date[] {
  const days = [];
  for (let i = 0; i <= 6; i += 1) {
    days.push(
      moment(weekStart).add(i, 'days').toDate()
    );
  }
  return days;
}

function getWeekRange(date: Date): DateRange {
  return {
    from: moment(date).startOf('week').toDate(),
    to: moment(date).endOf('week').toDate(),
  }
}

export type WeekPickerProps = {
  selectedDate: Date,
  onSelectDate: (date: Date) => void,
}

export default function WeekPicker({selectedDate, onSelectDate}: WeekPickerProps) {

  const [selectedDays, setSelectedDays] = useState<Date[]>([])
  const [hoverRange, setHoverRange] = useState<DateRange>()

  function onDayChange(day: Date, DayModifiers: DayModifiers, dayPickerInput: DayPickerInput) {
    onSelectDate(getWeekRange(day).from);
  }

  function onDayMouseEnter(day: Date, modifiers: DayModifiers, e: React.MouseEvent<HTMLDivElement>) {
    setHoverRange(getWeekRange(day));
  }

  function onDayMouseLeave() {
    setHoverRange(undefined);
  }

  function onWeekClick(weekNumber: number, days: Date[], e: React.MouseEvent<HTMLDivElement>) {
    setSelectedDays(days);
  }

  function onDayClick(day: Date, modifiers: DayModifiers, e: React.MouseEvent<HTMLDivElement>) {
    setSelectedDays(getWeekDays(getWeekRange(day).from))
  }

  const modifiers = {
    hoverRange,
    selectedRange: selectedDays.length ? {
      from: selectedDays[0],
      to: selectedDays[6],
    } : undefined,
  }

  return <DayPickerInput
    formatDate={formatDate}
    parseDate={parseDate}
    format="DD/MM/YYYY"
    dayPickerProps={{
      className: 'WeekPicker',
      selectedDays,
      modifiers,
      onDayMouseEnter,
      onDayMouseLeave,
      onWeekClick,
      onDayClick,
      showWeekNumbers: true,
      showOutsideDays: true,
    }}
    onDayChange={onDayChange} value={selectedDate}/>

};
