import React, { useState } from "react";
import Pagetitle from "./Pagetitle";
import Image from "../assets/images/subscribe-right.png";
import axiosInstance from "../../Axios";
import { useNavigate } from "react-router-dom";
import urls from "../endPoints/urls";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Subscribe = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const Lang = useSelector((state) => state.language.lang);
  const [formdata, setFormdata] = useState({
    name: "",
    email_address: "",
    mobile_number: "",
    best_describe: "schoolrepresent",
    best_describe_other: "",
    agree: true,
    terms_of_service: "1",
    webform_id: "subscribe",
  });

  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    setFormdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [errordata, setErrordata] = useState({});

  const handleCheckboxChange = (e) => {
    const { checked } = e.target;
    setFormdata({ ...formdata, agree: checked });
  };

  const handleSubmit = () => {
    console.log("Form Submited With Data: ", formdata);
    axiosInstance
      .post(urls.subscribeEndpoint(Lang), formdata)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Pagetitle name={t("Subscribe")} />
      <div className="container">
        <nav
          className="breadcrumb"
          id="breadcrumb-wrap"
          aria-label="breadcrumb"
        >
          <ul>
            <li className="breadcrumb-item">
              <a href="/">{t("home")}</a>{" "}
            </li>
            <li className="breadcrumb-item">
              <a tabIndex={0} aria-current="page">
                <span>{t("Subscribe")}</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div id="main-container">
        <div id="skipContent" className="container">
          <div className="row col-2">
            <div className="item subscribe-form">
              <h2 style={{ marginBottom: 10 }}>{t("Subscribe")}</h2>
              <p>{t("Please fill out the form below to receive our update")}</p>

              <form name="subscribe" className="subscribe-form">
                <div className="row col-2">
                  <div className="input-field item">
                    <input
                      name="name"
                      placeholder="Name"
                      id="name"
                      type="text"
                      htmlFor="name"
                      value={formdata.name}
                      onChange={(e) =>
                        setFormdata({ ...formdata, name: e.target.value })
                      }
                    />
                    <label htmlFor="name" style={{ left: 0, right: "auto" }}>
                      Name
                    </label>
                    <span
                      className="helper-text"
                      data-error="Required field."
                    />
                  </div>
                  <div className="input-field item">
                    <input
                      name="email_address"
                      placeholder="Email"
                      id="email_address"
                      htmlFor="email_address"
                      type="email"
                      value={formdata.email_address}
                      onChange={(e) =>
                        setFormdata({
                          ...formdata,
                          email_address: e.target.value,
                        })
                      }
                    />
                    <label htmlFor="email" style={{ left: 0, right: "auto" }}>
                      Email
                    </label>
                    <span
                      className="helper-text"
                      data-error="Please enter a valid email address"
                    />
                  </div>
                </div>
                <div className="row col-2">
                  <div className="input-field item">
                    <input
                      name="mobile_number"
                      placeholder="Mobile Number"
                      id="mobile_number"
                      htmlFor="mobile_number"
                      type="text"
                      maxLength={8}
                      value={formdata.mobile_number}
                      onChange={(e) => {
                        setFormdata({
                          ...formdata,
                          mobile_number: e.target.value,
                        });
                      }}
                    />
                    <label
                      htmlFor="mobile_number"
                      style={{ left: 0, right: "auto" }}
                    >
                      Mobile Number
                    </label>
                    <span className="helper-text" data-error="Required field" />
                  </div>
                </div>
                <div className="form-check">
                  <div className="text-item">
                    <h4 id="describe-title">How you best describe yourself?</h4>
                  </div>
                  <div className="input-field  subscribe-items">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      <div
                        className="input-radio"
                        role="radiogroup"
                        aria-labelledby="How you best describe yourself?"
                      >
                        <div>
                          <input
                            name="best_describe"
                            id="schoolrepresent"
                            type="radio"
                            className="radio-btn"
                            value="schoolrepresent"
                            onChange={handleRadioChange}
                            checked={
                              formdata.best_describe === "schoolrepresent"
                            }
                          />
                          <label
                            htmlFor="schoolrepresent"
                            className="custom-radio-style"
                          >
                            School representative
                          </label>
                        </div>
                        <div>
                          <input
                            name="best_describe"
                            id="Parents"
                            type="radio"
                            className="radio-btn"
                            value="Parents"
                            onChange={handleRadioChange}
                            checked={formdata.best_describe === "Parents"}
                          />
                          <label
                            htmlFor="Parents"
                            className="custom-radio-style"
                          >
                            Parents
                          </label>
                        </div>
                        <div>
                          <input
                            name="best_describe"
                            id="Student"
                            type="radio"
                            className="radio-btn"
                            value="Student"
                            onChange={handleRadioChange}
                            checked={formdata.best_describe === "Student"}
                          />
                          <label
                            htmlFor="Student"
                            className="custom-radio-style"
                          >
                            Student (7-18 years old)
                          </label>
                        </div>
                        <div>
                          <input
                            name="best_describe"
                            id="_other_"
                            type="radio"
                            className="radio-btn"
                            value="_other_"
                            onChange={handleRadioChange}
                            checked={formdata.best_describe === "_other_"}
                          />
                          <label
                            htmlFor="_other_"
                            className="custom-radio-style"
                          >
                            Other
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {formdata.best_describe == "_other_" && (
                    <div id="other-field" className="input-field item">
                      <input
                        name="other_text"
                        id="other_text"
                        aria-labelledby="describe-title dec-notlist"
                        placeholder="Other"
                        type="text"
                        value={formdata.best_describe_other}
                        onChange={(e) =>
                          setFormdata({
                            ...formdata,
                            best_describe_other: e.target.value,
                          })
                        }
                      />
                      <span
                        className="helper-text"
                        data-error="Required field"
                      />
                    </div>
                  )}

                  <div className="input-check subscribe-items checkboxNew">
                    <div className="item">
                      <p>
                        <input
                          type="checkbox"
                          name="agree"
                          id="agree"
                          tabIndex={0}
                          aria-label="i agree Privacy Policy"
                          style={{ textAlign: "left" }}
                          checked={formdata.agree}
                          onChange={handleCheckboxChange}
                        />
                        <label htmlFor="agree" id="desc-agree">
                          <span className="en">
                            I agree to the studio 5/6{" "}
                            <u>
                              <a className="modal-trigger">Privacy Policy</a>
                            </u>
                          </span>
                        </label>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="btn-wrap">
                  <button
                    className="btn blue-btn  subscribe"
                    type="button"
                    style={{
                      margin: "0px 0px 5px",
                      textTransform: "uppercase",
                    }}
                    onClick={handleSubmit}
                  >
                    Subscribe <i className="material-icons en">arrow_forward</i>
                  </button>
                </div>
                <div
                  id="modal1"
                  className="modal"
                  role="dialog"
                  style={{
                    zIndex: 1003,
                    display: "none",
                    opacity: 0,
                    top: "4%",
                    transform: "scaleX(0.8) scaleY(0.8)",
                  }}
                >
                  <div className="modal-content">
                    <span className="badge modalClose">
                      <button
                        type="button"
                        aria-label="close"
                        tabIndex={0}
                        className="close"
                      >
                        <i className="material-icons">close</i>
                      </button>
                    </span>
                    <div>
                      <h3>Privacy Policy</h3>
                    </div>
                    <div>
                      <p>
                        Ministry of Communications and Information
                        Technology&nbsp;(MCIT) is committed to protecting your
                        privacy and providing a secure website environment. MCIT
                        does not collect personal information about you when you
                        visit our website unless you specifically and knowingly
                        choose to provide such information to us. Any personal
                        information which you volunteer will be treated with the
                        highest standards of security and confidentiality.
                      </p>
                      <p>
                        We will not use personal information you provide for
                        commercial use. Personal information will not be
                        forwarded to third parties unless MCIT is required by
                        law or that entity is relevant to your enquiry.
                      </p>
                      <p>
                        This statement relates to our privacy practices in
                        connection with this website. We are not responsible for
                        the content or privacy practices o
                      </p>
                      <div
                        className="bootstrapiso"
                        data-original-title=""
                        id="mttContainer"
                        style={{
                          left: 0,
                          top: 0,
                          position: "fixed",
                          zIndex: 100000200,
                          width: 500,
                          marginLeft: "-250px",
                          backgroundColor: "rgba(0, 0, 0, 0)",
                          pointerEvents: "none",
                          transform: "translate(358px, 131px)",
                        }}
                        title=""
                      >
                        &nbsp;
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <a
                      href="#!"
                      className="modal-close waves-effect waves-green btn-flat"
                    >
                      Ok
                    </a>
                  </div>
                </div>
              </form>
            </div>
            <div className="item">
              <img src={Image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
