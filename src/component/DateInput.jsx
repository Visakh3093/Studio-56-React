import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = ({ value, Lang, placeholder, name, Mandatory, label, onChange }) => {
  return (
    <div className="date-popup">
      <div className="input-field item">
        <div className="react-datepicker-wrapper">
          <div className="react-datepicker__input-container">
            <DatePicker
              name={name}
              autoComplete="off"
              id={name}
              placeholderText="DD/MM/YYYY"
              type="date"
              className="hiddenDob customDateField"
              selected={value}
              onChange={onChange}
              dateFormat="dd/MM/yyyy"
            />
            <button
              aria-label={`choose ${label} button`}
              type="button"
              className="example-custom-input"
            >
              <span aria-hidden="true" className="material-icons">
                date_range
              </span>
            </button>
          </div>
        </div>

        <label
          htmlFor={name}
          style={{
            left: Lang == "en" ? 0 : "auto",
            right: Lang == "en" ? "auto" : 0,
          }}
        >
          {label}{" "}
          {Mandatory && <span className="asterisk">*</span>}
        </label>
        <span
          className="helper-text"
          data-error="Required field."
          style={{ textAlign: "left" }}
        />
      </div>
    </div>
  )
}

export default DateInput