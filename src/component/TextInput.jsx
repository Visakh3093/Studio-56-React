import React from 'react'

const TextInput = ({value,onChange,placeholder,Lang,label,name,Mandatory}) => {
  return (
    <div className="input-field item">
    <input
      name={name}
      placeholder={placeholder}
      id={name}
      type="text"
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
      {label}
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

export default TextInput