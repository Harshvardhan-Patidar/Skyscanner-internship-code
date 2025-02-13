import React, { useState } from 'react';
import BpkCalendar, { CALENDAR_SELECTION_TYPE } from '@skyscanner/backpack-web/bpk-component-calendar';
import BpkInput, { INPUT_TYPES } from '@skyscanner/backpack-web/bpk-component-input';
import format from 'date-fns/format';
import { BpkButtonV2, BUTTON_TYPES, SIZE_TYPES } from '@skyscanner/backpack-web/bpk-component-button';

const formatDateFull = (date) => format(date, 'EEEE, do MMMM yyyy');
const formatMonth = (date) => format(date, 'MMMM yyyy');

const daysOfWeek = [
  { name: 'Sunday', nameAbbr: 'Sun', index: 0, isWeekend: true },
  { name: 'Monday', nameAbbr: 'Mon', index: 1, isWeekend: false },
  { name: 'Tuesday', nameAbbr: 'Tue', index: 2, isWeekend: false },
  { name: 'Wednesday', nameAbbr: 'Wed', index: 3, isWeekend: false },
  { name: 'Thursday', nameAbbr: 'Thu', index: 4, isWeekend: false },
  { name: 'Friday', nameAbbr: 'Fri', index: 5, isWeekend: false },
  { name: 'Saturday', nameAbbr: 'Sat', index: 6, isWeekend: true },
];

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const state=(date)=>{
    selectionConfiguration:{
      type: CALENDAR_SELECTION_TYPE.single,
      date
    }
  }

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems: 'center', gap: '2rem' }}>
      <h1>Flight Schedule</h1>
      <BpkInput
        id="dateInput"
        type={INPUT_TYPES.text}
        name="date"
        value={selectedDate ? formatDateFull(selectedDate) : ''}
        placeholder="Select a date"
        readOnly
      />
      <BpkCalendar
        id="calendar"
        onDateSelect={handleDateSelect}
        formatMonth={formatMonth}
        formatDateFull={formatDateFull}
        daysOfWeek={daysOfWeek}
        weekStartsOn={1}
        changeMonthLabel="Change month"
        nextMonthLabel="Next month"
        previousMonthLabel="Previous month"
        selectionConfiguration={{ type: CALENDAR_SELECTION_TYPE.single, date: selectedDate }}
      />
      <BpkButtonV2 style={{marginTop: '1rem'}} type={BUTTON_TYPES.primaryOnLight}>Continue</BpkButtonV2>
    </div>
  );
};

export default App;
