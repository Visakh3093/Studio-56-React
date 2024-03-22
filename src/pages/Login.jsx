import React, { useRef, useState } from "react";
import Pagetitle from "../component/Pagetitle";
import { useDispatch, useSelector } from "react-redux";
import { loaderOff, loaderOn } from "../redux/slices/loaderSlice";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Login = () => {
  const dispatch = useDispatch();
  const [success, setSucess] = useState(false);
  const email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const [errordata, setErrordata] = useState({});
  const { t } = useTranslation();
  const { lang } = useSelector((state) => state.language);

  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  const handleValidate = () => {
    const newErrors = {};
    inputData.forEach((field) => {
      if (field.isMandatory && !formdata[field.key]) {
        newErrors[field.key] = `${field.label} ${t('required')}`;
      }

      if (
        field.isMandatory &&
        field.type === "email" &&
        !email_pattern.test(formdata[field.key])
      ) {
        newErrors[field.key] = `${t('invalid')} ${field.label}`;
      }
    });
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errorData = handleValidate();
    setErrordata(errorData);
    setSucess(false);

    if (Object.keys(errorData).length > 0) {
      console.log("Validation Error:", errorData);
      setTimeout(() => {
        const firstErrorElement = document.querySelector(
          ".error-container .error"
        );
        if (firstErrorElement) {
          firstErrorElement.focus();
        }
      }, 0);
      return;
    }

    alert(" no api confg");
  };

  const inputData = [
    {
      label: t("input-email"),
      type: "email",
      key: "email",
      placeholder: t("type-email"),
      isMandatory: true,
    },
    {
      label: t("input-password"),
      type: "password",
      key: "password",
      placeholder: t("type-password"),
      isMandatory: true,
    },
  ];
  const handleInputChange = (fieldName, value) => {
    setFormdata({ ...formdata, [fieldName]: value });
  };

  const renderdField = (fieldName, fieldData) => {
    return (
      <div className="input-field item">
        <input
          // ref={fieldData.key == "email" ? emailRef : null}
          name={fieldName}
          placeholder={fieldData.placeholder}
          autoComplete="no"
          className="fontEnglish"
          id={fieldName}
          type={fieldData.type}
          value={formdata[fieldName]}
          onChange={(e) => handleInputChange(fieldName, e.target.value)}
        />
        <label
          htmlFor={fieldName}
          style={{ left: 0, right: "auto" }}
          className="active"
        >
          {fieldData.label}{" "}
          {fieldData.isMandatory && <span className="asterisk">*</span>}
        </label>
        <span className="helper-text" data-error="Required field." />
      </div>
    );
  };

  return (
    <div>
      <Pagetitle name={t("login")} />

      <div id="skipContent">
        <div id="main-container">
          <div className="student-color-container">
            <span className="grey-square-rotate red-sq one" />
            <span className="grey-square-rotate red-sq four" />
            <span className="orange-circle one" />
            <span className="orange-circle three" />
            <span className="multi-square one">
              <b>
                <i />
              </b>
            </span>
            <span className="multi-square three">
              <b>
                <i />
              </b>
            </span>
          </div>
          <div className="container">
            <br />
            <br />
            <div className="center" />
            <div className="row col-8">
              <form
                name="login"
                className="login-form loginForm"
                autoComplete="on"
              >
                <h2>{t("login")}</h2>
                {Object.keys(errordata).length > 0 && (
                  <div className="error-container fail">
                    <h5>{t("validation")}</h5>
                    <ul>
                      {Object.keys(errordata).map((fieldName) => (
                        <li key={fieldName}>
                          <a
                            href={`#${fieldName}`}
                            tabIndex={0}
                            className="error"
                            htmlFor={fieldName}
                          >
                            {errordata[fieldName]}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {inputData.map((fieldData, index) => (
                  <div className="right-align" key={index}>
                    {renderdField(fieldData.key, fieldData)}
                  </div>
                ))}
                {/* style={{ textAlign: lang === "en" ? "left-align" : "right-align" }} */}

                <div className={lang === "en" ? "left-align" : "right-align"}>
                  <Link className="underline-text" to="/forgottpassword">
                    <b>{t("forget-password")}</b>
                  </Link>
                </div>
                <div
                  className={
                    lang === "en"
                      ? "left-align btn-wrap"
                      : "right-align btn-wrap"
                  }
                >
                  <button
                    aria-label="login"
                    className="btn blue login"
                    onClick={handleSubmit}
                  >
                    {t("login")}{" "}
                    <i className="material-icons en">arrow_forward</i>
                  </button>
                </div>
                <div className={lang === "en" ? "left-align" : "right-align"}>
                  {t("dont-have")}
                  <Link to="/registration" className="underline-text">
                    <b>{t("Sign-up")}</b>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
