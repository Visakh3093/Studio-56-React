import React, { useEffect, useState } from "react";
import Pagetitle from "./Pagetitle";
import RegisterButton from "../pages/RegisterButton";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Lowerimg from "./Lowerimg";
import Modal from "./Modal";

import axiosInstance from "../../Axios";
import { useDispatch, useSelector } from "react-redux";
import { showOn } from "../redux/slices/privacySlice";
import { useTranslation } from "react-i18next";
import urls from "../endPoints/urls";
import DateInput from "./DateInput";
import EmailInput from "./EmailInput";
import MobileInput from "./MobileInput";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";

const StudentRegister = () => {
  const dispatch = useDispatch();
  // const  = useSelector((state) => state.privacy.show);
  const { t } = useTranslation();
  const [{ lang }, { show }] = useSelector((state) => [state.language, state.privacy]);

  const nationalityOptions = [
    // { value: "", sname: t("select-nationality") },
    { value: 1, sname: "Afghanistan" },
    { value: 2, sname: "Albania" },
    { value: 4, sname: "Algeria" },
    { value: 5, sname: "American Samoa" },
    { value: 6, sname: "Andorra" },
    { value: 7, sname: "Angola" },
    { value: 189, sname: "Anguilla" },
    { value: 3, sname: "Antarctica" },
    { value: 8, sname: "Antigua and Barbuda" },
    { value: 10, sname: "Argentina" },
    { value: 16, sname: "Armenia" },
    { value: 152, sname: "Aruba" },
    { value: 11, sname: "Australia" },
    { value: 12, sname: "Austria" },
    { value: 9, sname: "Azerbaijan" },
    { value: 13, sname: "Bahamas" },
    { value: 14, sname: "Bahrain" },
    { value: 15, sname: "Bangladesh" },
    { value: 17, sname: "Barbados" },
    { value: 34, sname: "Belarus" },
    { value: 18, sname: "Belgium" },
    { value: 26, sname: "Belize" },
    { value: 59, sname: "Benin" },
    { value: 19, sname: "Bermuda" },
    { value: 20, sname: "Bhutan" },
    { value: 21, sname: "Bolivia, Plurinational State of" },
    { value: 22, sname: "Bosnia and Herzegovina" },
    { value: 23, sname: "Botswana" },
    { value: 25, sname: "Brazil" },
    { value: 30, sname: "Brunei Darussalam" },
    { value: 31, sname: "Bulgaria" },
    { value: 241, sname: "Burkina Faso" },
    { value: 33, sname: "Burundi" },
    { value: 35, sname: "Cambodia" },
    { value: 36, sname: "Cameroon" },
    { value: 37, sname: "Canada" },
    { value: 38, sname: "Cape Verde" },
    { value: 40, sname: "Central African Republic" },
    { value: 42, sname: "Chad" },
    { value: 43, sname: "Chile" },
    { value: 44, sname: "China" },
    { value: 48, sname: "Colombia" },
    { value: 49, sname: "Comoros" },
    { value: 51, sname: "Congo" },
    { value: 52, sname: "Congo, the Democratic Republic of the" },
    { value: 53, sname: "Cook Islands" },
    { value: 54, sname: "Costa Rica" },
    { value: 55, sname: "Croatia" },
    { value: 56, sname: "Cuba" },
    { value: 57, sname: "Cyprus" },
    { value: 58, sname: "Czech Republic" },
    { value: 109, sname: "Côte d'Ivoire" },
    { value: 60, sname: "Denmark" },
    { value: 79, sname: "Djibouti" },
    { value: 61, sname: "Dominica" },
    { value: 62, sname: "Dominican Republic" },
    { value: 63, sname: "Ecuador" },
    { value: 233, sname: "Egypt" },
    { value: 64, sname: "El Salvador" },
    { value: 65, sname: "Equatorial Guinea" },
    { value: 67, sname: "Eritrea" },
    { value: 68, sname: "Estonia" },
    { value: 66, sname: "Ethiopia" },
    { value: 69, sname: "Faroe Islands" },
    { value: 72, sname: "Fiji" },
    { value: 73, sname: "Finland" },
    { value: 75, sname: "France" },
    { value: 76, sname: "French Guiana" },
    { value: 77, sname: "French Polynesia" },
    { value: 80, sname: "Gabon" },
    { value: 82, sname: "Gambia" },
    { value: 81, sname: "Georgia" },
    { value: 84, sname: "Germany" },
    { value: 85, sname: "Ghana" },
    { value: 86, sname: "Gibraltar" },
    { value: 88, sname: "Greece" },
    { value: 89, sname: "Greenland" },
    { value: 90, sname: "Grenada" },
    { value: 91, sname: "Guadeloupe" },
    { value: 92, sname: "Guam" },
    { value: 93, sname: "Guatemala" },
    { value: 94, sname: "Guinea" },
    { value: 178, sname: "Guinea-Bissau" },
    { value: 95, sname: "Guyana" },
    { value: 96, sname: "Haiti" },
    { value: 98, sname: "Holy See (Vatican City State)" },
    { value: 99, sname: "Honduras" },
    { value: 100, sname: "Hong Kong" },
    { value: 101, sname: "Hungary" },
    { value: 102, sname: "Iceland" },
    { value: 103, sname: "India" },
    { value: 104, sname: "Indonesia" },
    { value: 105, sname: "Iran, Islamic Republic of" },
    { value: 106, sname: "Iraq" },
    { value: 107, sname: "Ireland" },
    { value: 108, sname: "Italy" },
    { value: 110, sname: "Jamaica" },
    { value: 111, sname: "Japan" },
    { value: 113, sname: "Jordan" },
    { value: 112, sname: "Kazakhstan" },
    { value: 114, sname: "Kenya" },
    { value: 87, sname: "Kiribati" },
    { value: 115, sname: "Korea, Democratic People's Republic of" },
    { value: 116, sname: "Korea, Republic of" },
    { value: 117, sname: "Kuwait" },
    { value: 118, sname: "Kyrgyzstan" },
    { value: 119, sname: "Lao People's Democratic Republic" },
    { value: 122, sname: "Latvia" },
    { value: 120, sname: "Lebanon" },
    { value: 121, sname: "Lesotho" },
    { value: 123, sname: "Liberia" },
    { value: 124, sname: "Libya" },
    { value: 125, sname: "Liechtenstein" },
    { value: 126, sname: "Lithuania" },
    { value: 127, sname: "Luxembourg" },
    { value: 128, sname: "Macao" },
    { value: 129, sname: "Madagascar" },
    { value: 130, sname: "Malawi" },
    { value: 131, sname: "Malaysia" },
    { value: 132, sname: "Maldives" },
    { value: 133, sname: "Mali" },
    { value: 134, sname: "Malta" },
    { value: 167, sname: "Marshall Islands" },
    { value: 135, sname: "Martinique" },
    { value: 136, sname: "Mauritania" },
    { value: 137, sname: "Mauritius" },
    { value: 138, sname: "Mexico" },
    { value: 141, sname: "Moldova, Republic of" },
    { value: 139, sname: "Monaco" },
    { value: 140, sname: "Mongolia" },
    { value: 142, sname: "Montenegro" },
    { value: 143, sname: "Montserrat" },
    { value: 144, sname: "Morocco" },
    { value: 145, sname: "Mozambique" },
    { value: 32, sname: "Myanmar" },
    { value: 147, sname: "Namibia" },
    { value: 148, sname: "Nauru" },
    { value: 149, sname: "Nepal" },
    { value: 150, sname: "Netherlands" },
    { value: 155, sname: "New Caledonia" },
    { value: 157, sname: "New Zealand" },
    { value: 158, sname: "Nicaragua" },
    { value: 159, sname: "Niger" },
    { value: 160, sname: "Nigeria" },
    { value: 161, sname: "Niue" },
    { value: 164, sname: "Northern Mariana Islands" },
    { value: 163, sname: "Norway" },
    { value: 146, sname: "Oman" },
    { value: 169, sname: "Pakistan" },
    { value: 168, sname: "Palau" },
    { value: 83, sname: "Palestine" },
    { value: 170, sname: "Panama" },
    { value: 171, sname: "Papua New Guinea" },
    { value: 172, sname: "Paraguay" },
    { value: 173, sname: "Peru" },
    { value: 174, sname: "Philippines" },
    { value: 176, sname: "Poland" },
    { value: 177, sname: "Portugal" },
    { value: 180, sname: "Puerto Rico" },
    { value: 181, sname: "Qatar" },
    { value: 183, sname: "Romania" },
    { value: 184, sname: "Russian Federation" },
    { value: 185, sname: "Rwanda" },
    { value: 182, sname: "Réunion" },
    { value: 188, sname: "Saint Kitts and Nevis" },
    { value: 190, sname: "Saint Lucia" },
    { value: 193, sname: "Saint Vincent and the Grenadines" },
    { value: 246, sname: "Samoa" },
    { value: 194, sname: "San Marino" },
    { value: 195, sname: "Sao Tome and Principe" },
    { value: 196, sname: "Saudi Arabia" },
    { value: 197, sname: "Senegal" },
    { value: 198, sname: "Serbia" },
    { value: 199, sname: "Seychelles" },
    { value: 200, sname: "Sierra Leone" },
    { value: 201, sname: "Singapore" },
    { value: 202, sname: "Slovakia" },
    { value: 204, sname: "Slovenia" },
    { value: 28, sname: "Solomon Islands" },
    { value: 205, sname: "Somalia" },
    { value: 206, sname: "South Africa" },
    { value: 208, sname: "Spain" },
    { value: 41, sname: "Sri Lanka" },
    { value: 210, sname: "Sudan" },
    { value: 212, sname: "Suriname" },
    { value: 214, sname: "Swaziland" },
    { value: 215, sname: "Sweden" },
    { value: 216, sname: "Switzerland" },
    { value: 217, sname: "Syria" },
    { value: 45, sname: "Taiwan, Province of China" },
    { value: 218, sname: "Tajikistan" },
    { value: 238, sname: "Tanzania, United Republic of" },
    { value: 219, sname: "Thailand" },
    { value: 179, sname: "Timor-Leste" },
    { value: 220, sname: "Togo" },
    { value: 222, sname: "Tonga" },
    { value: 223, sname: "Trinidad and Tobago" },
    { value: 225, sname: "Tunisia" },
    { value: 226, sname: "Turkey" },
    { value: 227, sname: "Turkmenistan" },
    { value: 229, sname: "Tuvalu" },
    { value: 230, sname: "Uganda" },
    { value: 231, sname: "Ukraine" },
    { value: 224, sname: "United Arab Emirates" },
    { value: 234, sname: "United Kingdom" },
    { value: 239, sname: "United States" },
    { value: 242, sname: "Uruguay" },
    { value: 243, sname: "Uzbekistan" },
    { value: 156, sname: "Vanuatu" },
    { value: 244, sname: "Venezuela, Bolivarian Republic of" },
    { value: 203, sname: "Viet Nam" },
    { value: 29, sname: "Virgin Islands, British" },
    { value: 240, sname: "Virgin Islands, U.S." },
    { value: 245, sname: "Wallis and Futuna" },
    { value: 211, sname: "Western Sahara" },
    { value: 247, sname: "Yemen" },
    { value: 248, sname: "Zambia" },
    { value: 207, sname: "Zimbabwe" },
  ];

  const schoolOption = [
    // { value: 1, sname: t("select-school") },
    // { value: 0, label: "Other" },
  ];

  const radioOption = [
    { value: "Male", label: t("male") },
    { value: "Female", label: t("female") },
  ];

  const gradeOptions = [
    
    { value: "Grade 1", sname: "Grade 1" },
    { value: "Grade 2", sname: "Grade 2" },
    { value: "Grade 3", sname: "Grade 3" },
    { value: "Grade 4", sname: "Grade 4" },
    { value: "Grade 5", sname: "Grade 5" },
    { value: "Grade 6", sname: "Grade 6" },
    { value: "Grade 7", sname: "Grade 7" },
    { value: "Grade 8", sname: "Grade 8" },
    { value: "Grade 9", sname: "Grade 9" },
    { value: "Grade 10", sname: "Grade 10" },
    { value: "Grade 11", sname: "Grade 11" },
    { value: "Grade 12", sname: "Grade 12" },
  ];

  const relationOptions = [
    { value: "", sname: t("select-relation") },
    { value: "Father", sname: "Father" },
    { value: "Mother", sname: "Mother" },
    { value: "Sister", sname: "Sister" },
    { value: "Brother", sname: "Brother" },
    { value: "Grandmother", sname: "Grandmother" },
    { value: "Grandfather", sname: "Grandfather" },
    { value: "Guardian", sname: "Guardian" },
  ];

  const [success, setSuccess] = useState(false);
  const [errordata, setErrordata] = useState({});
  const [date, setDate] = useState(false);
  const [other, setOther] = useState(false);
  const email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const phone_pattern = /^[0-9]{8}$/;
  const name_pattern = /^[A-Za-z\s'-]{1,50}$/;

  const [formdata, setFormdata] = useState({
    field_gender: "",
    field_grade: "",
    field_nationality: "",
    field_parent_email: "",
    field_parent_mobile_number: "",
    field_parent_mobile_number_2: "",
    field_parent_name: "",
    field_parent_qid: "",
    field_qid: "",
    field_reference: { target_id: "" },
    field_relation_to_the_student: "",
    field_student_dob: "",
    field_student_email: "",
    field_student_mobile: "",
    field_student_name: "",
    field_student_name_arabic: "",
    mail: "",
    name: "",
    roles: { target_id: "student" },
    school_id: { target_id: "0", target_type: "taxonomy_term" },
    school_name: "",
    agree: false,
  });

  //   console.log("Date: ",formdata);

  const handleOther = () => {
    if (formdata.school_id.target_id == 0) {
      setOther(true);
    } else {
      setOther(false);
    }

    console.log("Other Value: ", other);
  };

  const handleCheckboxChange = (e) => {
    const { checked } = e.target;
    console.log(checked);
    setFormdata({ ...formdata, agree: checked });
  };

  const handleNationalityChange = (e) => {
    setFormdata({
      ...formdata,
      field_nationality: e.target.value,
    });
  };

  const handleSchoolNameChange = (e) => {
    const selectedSchoolId = e.target.value;
    const updatedFormdata = {
      ...formdata,
      school_id: { target_id: selectedSchoolId, target_type: "taxonomy_term" },
    };
    setFormdata(updatedFormdata);
    handleOther();
  };

  const handleValidate = () => {
    const newErrors = {};
    inputData.forEach((field) => {
      if (field.isMandatory && !formdata[field.key]) {
        newErrors[field.key] = `${field.label} ${t("required")}`;
      }

      if (
        field.isMandatory &&
        field.type == "email" &&
        !email_pattern.test(formdata[field.key])
      ) {
        newErrors[field] = `${t("invalid")} ${field.label}`;
      }
      if (
        field.isMandatory &&
        field.type == "mobile" &&
        !phone_pattern.test(formdata[field.key])
      ) {
        newErrors[field] = `${t("invalid")} ${field.label}`;
      }
    });
    return newErrors;
  };

  const handleSubmit = (e) => {
    const errorData = handleValidate();
    setErrordata(errorData);
    setSuccess(false);
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

    const updatedFormdata = {
      ...formdata,
      mail: formdata.field_student_email,
      name: formdata.field_student_email,
    };
    console.log(updatedFormdata);

    axiosInstance
      .post(urls.studentEndpoint(lang), updatedFormdata)
      .then((res) => {
        console.log("Response: ", res.data);
        if (res.data.error) {
          setSuccess(false);
          setErrordata({ ...errordata, field_gender: res.data.error });
        } else {
          setSuccess(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const inputData = [
    {
      label: t("student-name-english"),
      type: "text",
      key: "field_student_name",
      placeholder: t("type-student-name-english"),
      isMandatory: true,
    },
    {
      label: t("student-name-arabic"),
      type: "text",
      key: "field_student_name_arabic",
      placeholder: t("type-student-name-arabic"),
      isMandatory: false,
    },
    {
      label: t("dob"),
      type: "date",
      key: "field_student_dob",
      isMandatory: true,
      placeholder: t("dob"),
    },
    {
      label: t("nationality"),
      type: "select",
      key: "field_nationality",
      isMandatory: true,
      placeholder: "",
      option: nationalityOptions,
      handleFunction: handleNationalityChange,
    },
    {
      label: t("school-name"),
      type: "select",
      key: "school_id.target_id",
      isMandatory: true,
      placeholder: "",
      option: schoolOption,
      handleFunction: handleOther,
    },
    {
      label: "School Name",
      type: "text",
      refKey: "school_id.target_id",
      refValue: "Other",
      key: "field_student_name_arabic",
      placeholder: "School Name",
      isMandatory: false,
    },
    {
      label: t("qid"),
      type: "text",
      key: "field_qid",
      isMandatory: true,
      placeholder: t("type-qid"),
    },
    {
      label: t("gender"),
      type: "radio",
      key: "field_gender",
      isMandatory: true,
      placeholder: "",
      option: radioOption,
    },
    {
      label: t("grade"),
      type: "select",
      key: "field_grade",
      isMandatory: true,
      placeholder: "",
      option: gradeOptions,
    },
    {
      label: t("input-email"),
      type: "email",
      key: "field_student_email",
      isMandatory: true,
      placeholder: t("type-email"),
    },
    {
      label: t("input-guardianmobile"),
      type: "mobile",
      key: "field_student_mobile",
      isMandatory: true,
      placeholder: t("type-mobile"),
    },
    {
      label: t("input-qid"),
      type: "text",
      key: "field_parent_qid",
      isMandatory: true,
      placeholder: t("type-qid"),
    },
    {
      label: t("input-guardian-name"),
      type: "text",
      key: "field_parent_name",
      isMandatory: true,
      placeholder: t("type-guardian-name"),
    },
    {
      label: t("relation"),
      type: "select",
      key: "field_relation_to_the_student",
      isMandatory: true,
      placeholder: t("select-relation"),
      option: relationOptions,
    },
    {
      label: t("input-number"),
      type: "mobile",
      key: "field_parent_mobile_number",
      isMandatory: true,
      placeholder: t("type-mobile"),
    },
    {
      label: t("input-number"),
      type: "mobile",
      key: "field_parent_mobile_number_2",
      isMandatory: true,
      placeholder: t("type-mobile"),
    },
    {
      label: t("input-guardian-email"),
      type: "email",
      key: "field_parent_email",
      isMandatory: true,
      placeholder: t("type-email"),
    },
    {
      label: t("volunteer-agree"),
      type: "checkbox",
      key: "agree",
      isMandatory: true,
      placeholder: "",
    },
  ];

  const handlechange = (field, value) => {
    formdata[field] = value;
    setFormdata(formdata);

  }

  const handleSelectOther = (field, value) => {

    const selectedId = value;
    const updatedFormData = {
      ...formdata,
      [field]: selectedId


    }
    console.log(value);
    setFormdata(updatedFormData)
  }


  const renderdField = (fieldName, fieldData) => {
    switch (fieldData.type) {
      case "text":
        if (fieldData.refKey ? formdata[fieldData.refKey] == fieldData.refValue : true) {
          return (
            <TextInput vlaue={formdata[fieldName]} onChange={(e) => handlechange(fieldName, e.target.value)} placeholder={fieldData.placeholder} disabled="" Lang={lang} label={fieldData.placeholder} name={fieldName} Mandatory={fieldData.isMandatory} />
          );
        }
        return null;

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

      case "date":
        return (
          <DateInput value={formdata[fieldName]} onChange={(e) => {
            const updatedFormdata = { ...formdata };
            updatedFormdata[fieldName] = e;
            setFormdata(updatedFormdata);
            console.log(updatedFormdata);
          }}
            placeholder={fieldData.placeholder} disabled="" Lang={lang} label={fieldData.placeholder} name={fieldName} Mandatory={fieldData.isMandatory} />);


      case "select":
        return (
          <SelectInput name={fieldName} value={formdata[fieldName]} label={fieldData.label} Mandatory={fieldData.isMandatory} Lang={lang} onChange={(e) => handleSelectOther(fieldName, e.target.value)} option={fieldData.option} />
        )

      case "radio":
        const inputProps = {
          name: fieldName,
          onChange: (e) => {
            setFormdata({
              ...formdata,
              [fieldName]: e.target.value,
            });
          },
        };

        return (
          <div className="input-field item">
            <div
              className="input-radio valign-wrapper"
              role="radiogroup"
              aria-labelledby={fieldName}
            >
              {fieldData.option.map((option) => (
                <div key={option.value}>
                  <input
                    {...inputProps}
                    type="radio"
                    value={option.value}
                    id={option.value}
                    aria-labelledby={`${fieldName} ${option.value}`}
                  />
                  <label
                    htmlFor={option.value}
                    id={`_${fieldName} ${option.value}`}
                    className="custom-radio-style"
                  >
                    <span className="custom-radio-style">{option.label}</span>
                  </label>
                </div>
              ))}
            </div>
            <label
              htmlFor={fieldName}
              id={fieldName}
              style={{
                left: lang == "en" ? 0 : "auto",
                right: lang == "en" ? "auto" : 0,
              }}
            >
              {fieldData.label}{" "}
              {fieldData.isMandatory && <span className="asterisk">*</span>}
            </label>
            <span className="helper-text" data-error="Required field." />
          </div>
        );
      case "email":
        return (
          <EmailInput vlaue={formdata[fieldName]} onChange={(e) => handlechange(fieldName, e.target.value)} placeholder={fieldData.placeholder} disabled="" Lang={lang} label={fieldData.placeholder} name={fieldName} Mandatory={fieldData.isMandatory} />
        );
      case "mobile":
        return (
          <MobileInput vlaue={formdata[fieldName]} onChange={(e) => handlechange(fieldName, e.target.value)} placeholder={fieldData.placeholder} disabled="" Lang={lang} label={fieldData.placeholder} name={fieldName} Mandatory={fieldData.isMandatory} />
        );
      default:
        return null;
    }
  };

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
                <span>{t("student")}</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="student-color-container">
        <span className="grey-square-rotate red-sq one" />
        <span className="grey-square-rotate red-sq two" />
        <span className="grey-square-rotate red-sq three" />
        <span className="grey-square-rotate red-sq four" />
        <span className="orange-circle one" />
        <span className="orange-circle two" />
        <span className="orange-circle three" />
        <span className="orange-circle four" />
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
      </div>
      <div
        id="skipContent"
        className="container registration-form student-registration-container"
      >
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
          aria-label="For Student form"
          className="primary-heading"
          style={{ textAlign: lang === "en" ? "left" : "right" }}
        >
          {t("For-student")}
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


              {inputData.map((fieldData, index) => (
                <div key={index}>

                  {renderdField(fieldData.key, fieldData)}
                </div>
              ))}

              <div className="btn-wrap">
                <button
                  className="btn blue"
                  type="button"
                  onClick={handleSubmit}
                >
                  {t("register")}
                </button>
              </div>
            </form>
          </div>
          <div className="col s6" />
        </div>
      </div>
      <div
        id="termsAndConditionModal"
        className="modal"
        role="dialog"
        tabIndex={0}
      >
        {show && <Modal />}
      </div>
      <Lowerimg />
    </div>
  );
};

export default StudentRegister;
