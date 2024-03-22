import React, { useState } from "react";
import Pagetitle from "./Pagetitle";
import axiosInstance from "../../Axios";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loaderOff, loaderOn } from "../redux/slices/loaderSlice";
import { useTranslation } from "react-i18next";
import urls from "../endPoints/urls";

const ForgotPassword = () => {
  const { t } = useTranslation();
  const [errordata, setErrordata] = useState({});
  const email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();

  const [formdata, setFormdata] = useState({
    email: "",
  });

  const inputData = [
    {
      label: t("input-email"),
      type: "email",
      key: "email",
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

  const handleValidate = () => {
    const newErrors = {};
    inputData.forEach((field) => {
      if (!formdata[field.key]) {
        newErrors[field.key] = `${field.label} ${t('required')}`;
      }

      if (field.type === "email" && !email_pattern.test(formdata[field.key])) {
        newErrors[field.key] = `${t('invalid')} ${field.label}`;
      }
    });
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(false);
    const errorData = handleValidate();
    setErrordata(errorData);
    // setSucess(false)

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

    dispatch(loaderOn());
    axiosInstance
      .post(urls.forgottEndpoint(Lang), formdata)
      .then((res) => {
        console.log(res.data.status);
        if (res.data.status == 200 && res.data.message) {
          setErrordata({ ...errordata, email: "Something Wrong" });
          console.log(errorData);
          dispatch(loaderOff());
        } else {
          console.log(res.data);
          setSuccess(true);
          dispatch(loaderOff());
        }
      })
      .catch((err) => {
        console.log("Error: ", err);
        dispatch(loaderOff());
      });
  };

  return (
    <div>
      <Pagetitle name={t("forget-password")} />
      <div className="container">
        <nav
          className="breadcrumb"
          id="breadcrumb-wrap"
          aria-label="breadcrumb"
        >
          <ul>
            <li className="breadcrumb-item">
              <Link to="/">{t("home")}</Link>{" "}
            </li>
            <li className="breadcrumb-item">
              <a tabIndex={0} aria-current="page">
                <span>{t("forget-password")}</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div id="skipContent">
        <div id="main-container">
          <div className="container">
            <div className="row col-8">
              <form className="login-form">
                {Object.keys(errordata).length > 0 && (
                  <div className="error-container fail">
                    <h5>{t("validation")}</h5>
                    <ul>
                      {errordata.email && (
                        <li>
                          <a
                            href="#email"
                            tabIndex={0}
                            className="error"
                            htmlFor="email"
                          >
                            {errordata.email}
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                )}
                {success && (
                  <div className="error-container success" tabIndex={0}>
                    <h5>
                      {t("Reset password link has send on your registered email address")}
                    </h5>
                  </div>
                )}

                {inputData.map((fieldData, index) => (
                  <div key={index}>
                    {renderdField(fieldData.key, fieldData)}
                  </div>
                ))}

                <div className="btn-wrap reset-button-container">
                  <button className="btn blue" onClick={handleSubmit}>
                    {t("submit")}
                    <i className="material-icons en">arrow_forward</i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
