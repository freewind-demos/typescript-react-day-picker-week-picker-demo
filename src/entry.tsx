import React from 'react'
import ReactDOM from 'react-dom'

import WeekPicker from './WeekPicker'

ReactDOM.render(
  <WeekPicker selectedDate={new Date()} onSelectDate={date => console.log(date)}/>,
  document.body
)
