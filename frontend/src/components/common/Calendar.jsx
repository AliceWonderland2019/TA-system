import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const Calendar = ({ label, value, setValue }) => {
//   const [startDate, setStartDate] = useState(new Date());
//   const [ endDate, setEndDate ] = useState(new Date());

  return (
    <div className="form-group mb-3">
      <label htmlFor="value">{label}</label>
    <DatePicker 
    selected={value} 
    onChange={(date) => setValue(date)}
    peekNextMonth
    showMonthDropdown
    showYearDropdown
    dropdownMode="select"
    selectsStart
    startDate={value}
    // endDate={endDate}
    minDate={setValue}
    isClearable
    />
    </div>
  );
};