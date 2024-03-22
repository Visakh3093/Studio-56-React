import React from 'react'
import { useTranslation } from 'react-i18next'



const MobileInput = ({ value, Lang, name, onChange, placeholder, label, Mandatory }) => {
  const { t } = useTranslation()
  return (
    <div className="row mobile">
      <div className="col s4">
        <div className="input-field item">
          <input
            name={`${name}_country_code`}
            className=""
            placeholder="Country Code"
            id={`${name}_country_code`}
            type="text"
            minLength={3}
            maxLength={3}
            disabled={true}
            defaultValue={+974}
            style={{ textAlign: Lang === "en" ? "left" : "right" }}
          />
          <label
            htmlFor={`${name}_country_code`}
            style={{
              left: Lang == "en" ? 0 : "auto",
              right: Lang == "en" ? "auto" : 0,
            }}
          >
            {t("country-code")}
          </label>
          <span
            className="helper-text"
            data-error="Enter a valid code."
          />
        </div>
      </div>
      <div className="col s8">
        <div className="input-field item">
          <input
            name={name}
            className=""
            placeholder={placeholder}
            aria-label={`Mobile number starting with country code +974`}
            id={name}
            maxLength={8}
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
            {label} <span className="asterisk">*</span>
          </label>
          <span
            className="helper-text"
            data-error="Required field."
            style={{ textAlign: "left" }}
          />
        </div>
      </div>
    </div>
  )
}

export default MobileInput