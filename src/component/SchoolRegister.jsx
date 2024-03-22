import React, { useEffect, useState } from "react";
import Pagetitle from "./Pagetitle";
import RegisterButton from "../pages/RegisterButton";
import axiosInstance from "../../Axios";
import Lowerimg from "./Lowerimg";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import { loaderOff, loaderOn } from "../redux/slices/loaderSlice";
import { showOn } from "../redux/slices/privacySlice";
import { useTranslation } from "react-i18next";
import urls from "../endPoints/urls";
import TextInput from "./TextInput";
import EmailInput from "./EmailInput";
import MobileInput from "./MobileInput";
import SelectInput from "./SelectInput";

const SchoolRegister = () => {
  const [data, setData] = useState([]);
  const [other, setOther] = useState(false);
  const [errordata, setErrordata] = useState({});
  const [success, setSucess] = useState(false);
  const email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const phone_pattern = /^[0-9]{8}$/;
  const name_pattern = /^[A-Za-z\s'-]{1,50}$/;
  const dispatch = useDispatch();
  // const show = useSelector((state) => state.privacy.show);
  const { t } = useTranslation();
  const [{ lang }, { show }] = useSelector((state) => [state.language, state.privacy]);

  const [formdata, setFormdata] = useState({
    field_reference: { target_id: "" },
    target_id: "",
    field_representative_name_arabic: "",
    field_school_reps_qid: "",
    mail: "",
    name: "",
    position: "",
    rep_mob: "",
    repmail: "",
    repname: "",
    roles: { target_id: "school" },
    school_email: "",
    school_id: { target_id: "0", target_type: "taxonomy_term" },
    school_mob: "",
    school_name: "",
    agree: false,
  });

  const handleValidate = () => {
    const foundObject = data.find(
      (obj) => obj.id === formdata.school_id.target_id
    );
    let updatedForm;
    if (foundObject) {
      updatedForm = {
        ...formdata,
        mail: formdata.repmail,
        name: formdata.repmail,
        school_email: foundObject.field_school_email,
        school_name: foundObject.sname,
        school_mob: foundObject.field_s,
      };
    } else {
      updatedForm = {
        ...formdata,
        mail: formdata.repmail,
        name: formdata.repmail,

      };
    }
    console.log("updatedData: ", updatedForm);

    const newErrors = {};
    inputData.forEach((field) => {
      if (field.isMandatory && !updatedForm[field.key]) {
        newErrors[field.key] = `${field.label}  ${t("required")}`;
      }

      if (
        field.isMandatory &&
        field.type == "email" &&
        !email_pattern.test(updatedForm[field.key])
      ) {
        newErrors[field] = ` ${t("invalid")} ${field.label}`;
      }
      if (
        field.isMandatory &&
        field.type == "mobile" &&
        !phone_pattern.test(updatedForm[field.key])
      ) {
        newErrors[field] = ` ${t("invalid")} ${field.label}`;
      }
    });
    return newErrors;
  };

  const handleSubmit = () => {

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




    console.log("Error: ", errordata);
    axiosInstance
      .post(urls.schoolEndpoint(lang), updatedForm)
      .then((res) => {
        console.log("Res: ", res.data);
        if (res.data.error) {
          setErrordata({ ...errordata, newError: "Something Wrong ! " });
        }
        if (res.data.error.qid) {
          setErrordata({ ...errordata, newError: res.data.error.qid.en });
        }
        if (!res.data) {
          setSucess(true);
        }
      })
      .catch((err) => console.log("Error: ", err));
  };

  useEffect(() => {
    dispatch(loaderOn());
    axiosInstance
      .get(urls.schoolNameEndpoint(lang))
      .then((res) => {
        // console.log(res.data[0]);
        setData(res.data);
        dispatch(loaderOff());
      })
      .catch((err) => {
        console.log("Error: ", err);
        dispatch(loaderOff());
      });
  }, [lang]);

  useEffect(() => {

  }, [])
  // console.log(formdata.school_id);

  const handlechange = (field, value) => {

    const updatedFormdata = {
      ...formdata,
      [field]: value,
    };


    setFormdata(updatedFormdata);
  };
  const inputData = [
    {
      label: t("school-school-name"),
      type: "select",
      key: "school_id",
      option: data,
      isMandatory: true,
      placeholder: t("school-school-name"),
    },
    {
      label: t("school-school-name"),
      refkey: "school_id",
      refValue: "Other",
      type: "text",
      key: "school_name",
      isMandatory: true,
      placeholder: "Type Your School Name"
    },
    {
      label: t("school-school-phone"),
      type: "mobile",
      refkey: "school_id",
      refValue: "Other",
      key: "school_mob",
      isMandatory: true,
      placeholder: "School Phone number"
    },
    {
      label: t("school-school-email"),
      type: "text",
      refkey: "school_id",
      refValue: "Other",
      key: "school_email",
      isMandatory: true,
      placeholder: "Type Your School Email"
    },
    {
      label: t("school-repname"),
      type: "text",
      key: "repname",
      isMandatory: true,
      placeholder: t("school-type-student-name-english"),
    },
    {
      label: t("school-field_representative_name_arabic"),
      type: "text",
      key: "field_representative_name_arabic",
      isMandatory: false,
      placeholder: t("type-guardian-name"),
    },
    {
      label: t("school-field_school_reps_qid"),
      type: "text",
      key: "field_school_reps_qid",
      isMandatory: true,
      placeholder: t("type-qid"),
    },
    {
      label: t("school-position"),
      type: "text",
      key: "position",
      isMandatory: true,
      placeholder: t("school-position"),
    },
    {
      label: t("school-rep_mob"),
      type: "mobile",
      key: "rep_mob",
      isMandatory: true,
      placeholder: t("type-mobile"),
    },
    {
      label: t("school-repmail"),
      type: "email",
      key: "repmail",
      isMandatory: true,
      placeholder: t("type-email"),
    },
    {
      label: t("school-agree"),
      type: "checkbox",
      key: "agree",
      isMandatory: true,
      placeholder: "",
    },
  ];


  const handleSelect = (field, value) => {
    const selectedId = value;
    console.log(value);
    const updatedFormData = {
      ...formdata,
      [field]: {
        target_id: selectedId,
        target_type: "taxonomy_term",
      }

    }

    setFormdata(updatedFormData)
  }
  return (
    <div id="main-container">
      <Pagetitle name={t("register")} />
      <div className="container">
        <nav
          className="breadcrumb"
          id="breadcrumb-wrap"
          aria-label="breadcrumb"
        >
          <ul>
            <li className="breadcrumb-item">
              <a href="/register">{t("register")}</a>
            </li>
            <li className="breadcrumb-item">
              <a tabIndex={0} aria-current="page">
                <span>{t("school")}</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="school-registration-container">
        <span className="grey-square-rotate red-sq one" />
        <span className="grey-square-rotate red-sq two" />
        <span className="grey-square-rotate red-sq three" />
        <span className="orange-circle one" />
        <span className="orange-circle two" />
        <span className="multi-square one">
          <b>
            <i />
          </b>
        </span>
        <span className="multi-square two">
          <b>
            <i />
          </b>
        </span>
        <span className="multi-square three">
          <b>
            <i />
          </b>
        </span>
        <span className="multi-square four">
          <b>
            <i />
          </b>
        </span>
        <div id="skipContent" className="container registration-form">
          <div className="registration-container">
            <h2
              id="registration-title"
              className="primary-heading"
              style={{ textAlign: lang === "en" ? "left" : "right" }}
            >
              {t("are-you")}
            </h2>
            <RegisterButton />
          </div>
          <h2
            tabIndex={0}
            aria-label="For School representative form"
            className="primary-heading"
            style={{ textAlign: lang === "en" ? "left" : "right" }}
          >
            {t("school-h1")}
          </h2>
          <div className="row">
            <div className="col s6 form-container">
              <p style={{ textAlign: lang === "en" ? "left" : "right" }}>
                {t("required-field")}
                <span className="asterisk">*</span>
              </p>
              {Object.keys(errordata).length > 0 && (
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

              <form autoComplete="no">
                {inputData.map((fieldData, index) => {
                  const fieldName = fieldData.key;

                  return (
                    <div key={index}>
                      {
                        (() => {
                          switch (fieldData.type) {
                            case "select":
                              return (
                                <SelectInput value={formdata[fieldName.sname]} name={fieldName} Mandatory={fieldData.isMandatory} onChange={(e) => handleSelect(fieldName, e.target.value)} option={fieldData.option} label={fieldData.label} Lang={lang} />
                              );

                            case "text":

                              if (fieldData.refkey ? formdata[fieldData.refkey].target_id == fieldData.refValue : true) {
                                return (
                                  <div>
                                    {/* <p>{fieldData.type}</p> */}
                                    <TextInput
                                      value={formdata[fieldName]}
                                      onChange={(e) => handlechange(fieldName, e.target.value)}
                                      placeholder={fieldData.placeholder}
                                      disabled=""
                                      Lang={lang}
                                      label={fieldData.placeholder}
                                      name={fieldName}
                                      Mandatory={fieldData.isMandatory}
                                    />
                                  </div>
                                );
                              }
                              return null;


                            case "email":
                              // console.log(fieldName, fieldData.type);
                              return (
                                <EmailInput value={formdata[fieldName]} onChange={(e) => handlechange(fieldName, e.target.value)} placeholder={fieldData.placeholder} disabled="" Lang={lang} label={fieldData.placeholder} name={fieldName} Mandatory={fieldData.isMandatory} />
                              );
                            case "mobile":
                              if (fieldData.refkey ? formdata[fieldData.refkey].target_id == fieldData.refValue : true) {
                                return (
                                  <MobileInput value={formdata[fieldName]} onChange={(e) => handlechange(fieldName, e.target.value)} placeholder={fieldData.placeholder} disabled="" Lang={lang} label={fieldData.placeholder} name={fieldName} Mandatory={fieldData.isMandatory} />
                                );
                              }
                              return null

                            case "checkbox":
                              return (
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
                                        // console.log(checked);
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
                        })()
                      }
                    </div>
                  );
                })}

                <div className="btn-wrap">
                  <button
                    type="button"
                    className="btn blue"
                    onClick={handleSubmit}
                  >
                    {t("register")}
                  </button>
                </div>
              </form>

            </div>
            <div className="col s6" />
          </div>
          <div
            id="termsAndConditionModal"
            className={`modal `}
            role="dialog"
            tabIndex={0}
          >
            {show && <Modal />}
          </div>
        </div>
      </div>
      <Lowerimg />
    </div>
  );
};

export default SchoolRegister;