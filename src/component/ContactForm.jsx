import React, { useEffect, useState } from "react";
import axiosInstance from "../../Axios";
import Contactimg from "../assets/images/contact-right.png";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import { isEmpty } from "lodash";
import { loaderOff, loaderOn } from "../redux/slices/loaderSlice";
import { showOff, showOn } from "../redux/slices/privacySlice";
import { useTranslation } from "react-i18next";


const ContactForm = () => {
  const { t } = useTranslation();
  const [{ lang }, { show }] = useSelector((state) => [state.language, state.privacy]);
  const dispatch = useDispatch();
  // const show = useSelector((state) => state.privacy.show);
  const [errordata, setErrordata] = useState({});
  const [success, setSuccess] = useState(false);
  const email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const phone_pattern = /^[0-9]{8}$/;

  useEffect(() => {
    console.log("Show Value : ", show);
  }, [show, lang]);

  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    mobile_number: "",
    message: "",
    agree: false,
    webform_id: "contact_us",
  })

  const inputData = [
    {
      label: t("input-name"),
      type: "text",
      isMandatory: true,
      placeholder: t("type-name"),
      key: "name",
    },
    {
      label: t("input-email"),
      type: "email",
      isMandatory: true,
      placeholder: t("type-email"),
      key: "email",
    },
    {
      label: t("input-number"),
      type: "mobile",
      isMandatory: true,
      placeholder: t("type-number"),
      key: "mobile_number",
    },
    {
      label: t("input-message"),
      type: "textarea",
      isMandatory: true,
      placeholder: t("type-message"),
      key: "message",
    },
    {
      label: "Agree terms and conditions",
      type: "checkbox",
      key: "agree",
      isMandatory: true,
      placeholder: "",
    },
  ];

  const handleChange = (e, fieldName) => {
    setFormdata({ ...formdata, [fieldName]: e.target.value });
  };

  const handleValidate = () => {
    const newErrors = {};

    inputData.forEach((field) => {
      if (field.isMandatory && !formdata[field.key]) {
        newErrors[field.key] = `${field.label} ${t("required")}`;
      }

      if (
        field.isMandatory &&
        field.type === "email" &&
        !email_pattern.test(formdata[field.key])
      ) {
        newErrors[field.key] = `${t("invalid")} ${field.label}`;
      }

      if (
        field.isMandatory &&
        field.type === "mobile" &&
        !phone_pattern.test(formdata[field.key])
      ) {
        newErrors[field.key] = `${t("invalid")} ${field.label}`;
      }

      if (field.type === "select" && formdata[field.key] === "other") {
        if (!formdata.school_name) {
          newErrors.school_name = t("School name is required");
        }
      }
    });

    return newErrors;
  };

  const renderdField = (fieldName, fieldData) => {
    switch (fieldData.type) {
      case "text":
        return (
          <div className="col s12 m6 l6">
            <div
              className="input-field item "
              style={{ textAlign: lang === "en" ? "left" : "right" }}
            >
              <input
                id={fieldName}
                name={fieldName}
                autoComplete="no"
                placeholder={`${fieldData.placeholder}`}
                type="text"
                className="name"
                value={formdata[fieldName]}
                onChange={(e) => handleChange(e, fieldName)}
              />
              <label
                htmlFor={fieldName}
                className={formdata[fieldName] ? "active" : ""}
              >
                {fieldData.label}
                {fieldData.isMandatory && <span className="asterisk">*</span>}
              </label>
            </div>
          </div>
        );
      case "email":
        return (
          <div className="col s12 m6 l6">
            <div className="input-field item">
              <input
                id={fieldName}
                name={fieldName}
                autoComplete="no"
                placeholder={`${fieldData.placeholder}`}
                type="email"
                value={formdata[fieldName]}
                onChange={(e) => handleChange(e, fieldName)}
              />
              <label
                htmlFor={fieldName}
                className={formdata[fieldName] ? "active" : ""}
              >
                {fieldData.label}
                {fieldData.isMandatory && <span className="asterisk">*</span>}
              </label>
            </div>
          </div>
        );

      case "mobile":
        return (
          <div className="col s12 m6 l6" style={{ flexDirection: "row-reverse" }}
          >
            <div className="input-field item">
              <input
                id={fieldName}
                name={fieldName}
                autoComplete="no"
                placeholder={`${fieldData.placeholder}`}
                maxLength={fieldData.maxLength || 8}
                type="text"
                value={formdata[fieldName]}
                onChange={(e) => handleChange(e, fieldName)}
              />
              <label
                htmlFor={fieldName}
                className={formdata[fieldName] ? "active" : ""}
              >
                {fieldData.label}
                {fieldData.isMandatory && <span className="asterisk">*</span>}
              </label>
            </div>
          </div>
        );

      case "textarea":
        return (
          <div className="col s12 m12">
            <div className="input-field item">
              <textarea
                id={fieldName}
                name={fieldName}
                placeholder={`${fieldData.placeholder}`}
                rows={8}
                value={formdata[fieldName]}
                onChange={(e) => handleChange(e, fieldName)}
              />
              <label
                htmlFor={fieldName}
                className={formdata[fieldName] ? "active" : ""}
              >
                {fieldData.label}
                {fieldData.isMandatory && <span className="asterisk">*</span>}
              </label>
            </div>
          </div>
        );

      case "checkbox":
        return (
          <div className="row noFlex ">
            <div className="col s12 m12">
              <div className="item subscribe-items">
                <p>
                  <input
                    type="checkbox"
                    name="agree"
                    id="agree"
                    tabIndex={0}
                    style={{ textAlign: lang === "en" ? "left" : "right" }}
                    onChange={(e) => {
                      const { checked } = e.target;
                      console.log(checked);
                      setFormdata({ ...formdata, agree: checked });
                    }}
                  />
                  <label htmlFor="agree">
                    <span className="ab"> {t("studio56")}</span>
                  </label>
                  <button
                    type="button"
                    aria-label=""
                    tabIndex=""
                    className=""
                    onClick={() => dispatch(showOn())}
                    style={{ border: 0, background: "none" }}
                  >
                    {t("privacy-polcy")}
                  </button>
                </p>
              </div>
              <button
                aria-label="submit"
                type="submit"
                className="btn red waves-effect waves-light"
                onClick={handleSubmit}
              >
                {t("submit")}
                <i className="material-icons en">arrow_forward</i>
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorData = await handleValidate();
    setErrordata(errorData);
    setSuccess(false);
    if (!isEmpty(errorData)) {
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

    axiosInstance.post("/webform_rest/submit", formdata).then((res) => {
        console.log(res.data);
        if (res.data) {
          setSuccess(true);
          dispatch(loaderOff());
          // alert(res.data);
        }
      })
      .catch((err) => {
        console.log("Error: ", err.message);
        dispatch(loaderOff());
      });
  };

  return (
    <div id="skipContent" className="container contact">
      <h2 tabIndex={0} id="contactUsHeading" aria-label="Contact us page">
        {t("contactus")}
      </h2>
      <div
        className={
          lang !== "en"
            ? t("rtl-container row ")
            : t("ltr-container row noFlex")
        }
      >
        <div className="col s12 m12 l12 xl7">
          <p>
            <strong>{t("contact-frm-h1")}</strong>
          </p>
          <p>{t("contact-frm-h2")}</p>
          {!isEmpty(errordata) && (
            <div className="error-container fail">
              <h5>{t("validation")}</h5>
              <ul aria-label="error">
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
          {success && (
            <div className="error-container success" tabIndex={0}>
              <h5>{t("tnx")}</h5>
              <p>{t("regtr-success")}</p>
              <p>{t("email-check-message")}</p>
            </div>
          )}

          <div
            className={
              lang !== "en"
                ? t("rtl-container row ")
                : t("ltr-container row noFlex")
            }
          >
            <div className="col s12 m10 l9 " >
              <form>
               
                {inputData.map((fieldData, index) => (
                  <div key={index}>
                    {renderdField(fieldData.key, fieldData)}
                  </div>
                ))}


                
              </form>
            </div>
          </div>
        </div>
        <div className="col s12 m12 l12 xl5">
          <img alt="" src={Contactimg} />
        </div>
        <div className="modal-div">{show && <Modal />}</div>
      </div>
    </div>
  );
};

export default ContactForm;
