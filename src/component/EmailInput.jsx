import React from 'react'

const EmailInput = ({ value, Lang, name, onChange, placeholder, label, Mandatory }) => {
  return (
    <div className="input-field item">
      <input
        name={name}
        placeholder={placeholder}
        id={name}
        type="email"
        autoComplete="no"
        style={{ textAlign: Lang === "en" ? "left" : "right" }}
        value={value}
        onChange={onChange}
      />
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
  )
}

export default EmailInput