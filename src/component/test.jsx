const renderdField = (fieldName, fieldData) => {
    switch (fieldData.type) {
      case "select":
        return (
          <div>
            <div className="result-type">
              <div className="input-field mobileSelect">
                <label
                  htmlFor={fieldName}
                  style={{
                    left: Lang == "en" ? 0 : "auto",
                    right: Lang == "en" ? "auto" : 0,
                  }}
                >
                  {fieldData.label}
                  {fieldData.isMandatory && <span className="asterisk">*</span>}
                </label>
                <select
                  className="browser-default"
                  name={fieldName}
                  id={fieldName}
                  style={{ textAlign: Lang === "en" ? "left" : "right" }}
                  tabIndex={0}
                  value={formdata[fieldName]}
                  onChange={(e) => {
                    const selectedId = e.target.value;
                    setFormdata({
                      ...formdata,
                      [fieldName]: {
                        target_id: selectedId,
                        target_type: "taxonomy_term",
                      },
                    });
                    setOther(selectedId.toLowerCase() === "other");
                  }}
                >
                  {/* Options */}
                  <option value="0">{t("school-type-select")}</option>
                  {fieldData.option.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.sname}
                    </option>
                  ))}
                  <option value="Other">Other</option>
                </select>

                <span
                  className="helper-text"
                  data-error="Required field."
                  style={{ textAlign: "left" }}
                />
              </div>
            </div>
            {/* {other && (
              <>
                <div className="input-field item">
                  <input
                    name="school_name"
                    placeholder="Type school name"
                    id="school_name"
                    className=""
                    type="text"
                    autoComplete="no"
                    value={formdata.school_name}
                    style={{ textAlign: Lang === "en" ? "left" : "right" }}
                    onChange={(e) => {
                      setFormdata({ ...formdata, school_name: e.target.value });
                    }}
                  />
                  <label
                    htmlFor="school_name"
                    style={{
                      left: Lang == "en" ? 0 : "auto",
                      right: Lang == "en" ? "auto" : 0,
                    }}
                  >
                    School Name <span className="asterisk">*</span>
                  </label>
                  <span className="helper-text" data-error="Required field." />
                </div>
                <div className="row mobile">
                  <div className="col s4">
                    <div className="input-field item">
                      <input
                        name="schoolPhone_country_code"
                        placeholder="Country Code"
                        className=""
                        id="schoolPhone_country_code"
                        type="text"
                        minLength={3}
                        maxLength={3}
                        disabled={true}
                        defaultValue={+974}
                        style={{ textAlign: Lang === "en" ? "left" : "right" }}
                      />
                      <label
                        htmlFor="schoolPhone_country_code"
                        style={{
                          left: Lang == "en" ? 0 : "auto",
                          right: Lang == "en" ? "auto" : 0,
                        }}
                      >
                        {t("school-schoolPhone_country_code")}
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
                        name="school_mob"
                        placeholder="Type your school school number"
                        className=""
                        id="school_mob"
                        maxLength={8}
                        aria-label="Mobile number starting with country code +974"
                        type="text"
                        autoComplete="no"
                        value={formdata.school_mob}
                        onChange={(e) => {
                          setFormdata({
                            ...formdata,
                            school_mob: e.target.value,
                          });
                        }}
                        style={{ textAlign: Lang === "en" ? "left" : "right" }}
                      />
                      <label
                        htmlFor="school_mob"
                        style={{
                          left: Lang == "en" ? 0 : "auto",
                          right: Lang == "en" ? "auto" : 0,
                        }}
                      >
                        School Phone Number <span className="asterisk">*</span>
                      </label>
                      <span
                        className="helper-text"
                        data-error="Required field."
                      />
                    </div>
                  </div>
                </div>
                <div className="input-field item">
                  <input
                    name="school_email"
                    placeholder="Type your school email address"
                    id="school_email"
                    className="fontEnglish"
                    type="email"
                    autoComplete="no"
                    value={formdata.school_email}
                    onChange={(e) => {
                      setFormdata({
                        ...formdata,
                        school_email: e.target.value,
                      });
                    }}
                    style={{ textAlign: Lang === "en" ? "left" : "right" }}
                  />
                  <label
                    htmlFor="school_email"
                    style={{
                      left: Lang == "en" ? 0 : "auto",
                      right: Lang == "en" ? "auto" : 0,
                    }}
                  >
                    School Email Address <span className="asterisk">*</span>
                  </label>
                  <span className="helper-text" data-error="Required field." />
                </div>
              </>
            )} */}
          </div>
        );

      // case "text":
      //   if(formdata[fieldData.refkey] == fieldData.refValue)
      //   {
      //     return (
      //       <TextInput fieldData={fieldData} fieldName={fieldName} Lang={Lang}  setFormdata={setFormdata} formdata={formdata} t={t} />
      //     );
      //   }
      
        
      case "email":
        return (
          <EmailInput fieldData={fieldData} fieldName={fieldName} Lang={Lang}  setFormdata={setFormdata} formdata={formdata} t={t} />
        );
      case "mobile":
        return (
         <MobileInput fieldData={fieldData} fieldName={fieldName} Lang={Lang}  setFormdata={setFormdata} formdata={formdata} t={t} />
        );
      case "checkbox":
        return (
          <div className="item subscribe-items">
            <p>
              <input
                type="checkbox"
                name="agree"
                id="agree"
                tabIndex={0}
                style={{ textAlign: Lang === "en" ? "left" : "right" }}
                onChange={(e) => {
                  const { checked } = e.target;
                  console.log(checked);
                  setFormdata({ ...formdata, agree: checked });
                }}
              />
              <label htmlFor="agree">
                <span className="en">{t("studio56")}</span>
              </label>
              <button
                type="button"
                aria-label=""
                tabIndex=""
                className=""
                style={{ border: 0, background: "none" }}
                onClick={() => dispatch(showOn())}
              >
                {t("terms")}
              </button>
            </p>
          </div>
        );

      default:
        return null;
    }
  };