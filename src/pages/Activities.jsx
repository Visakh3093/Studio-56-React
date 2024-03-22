import React, { useEffect, useState } from "react";
import Lowerimg from "../component/Lowerimg";
import Pagetitle from "../component/Pagetitle";
import axiosInstance from "../../Axios";
import { Link } from "react-router-dom";
import Popup from "../component/Popup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { loaderOff, loaderOn } from "../redux/slices/loaderSlice";
import { setFilterData, setPager, setResults } from "../redux/slices/activitiesSlice";
import { useTranslation } from "react-i18next";
import urls from "../endPoints/urls";

const Activities = () => {
  const [{ lang }, { filterData }, { pager }, { results }] = useSelector((state) => [state.language, state.activities, state.activities, state.activities]);
  const currentDate = new Date();
  console.log(currentDate);
  const [popupvalue, setpopUpvalue] = useState('')
  console.log("PopUp: ", popupvalue);

  const dispatch = useDispatch();
  const [popup, setPopup] = useState(false);
  const { t } = useTranslation()

  const [formdata, setFormdata] = useState({})
  const handleActivity = (e) => {
    const selectedValue = e.target.value;
    const filteredResults = results.filter(
      (item) => item.field_event_type === selectedValue
    )
    dispatch(setFilterData(filteredResults));
    console.log("Filter Value: ", filteredResults);
  };

  const [value, setValue] = useState({
    page: 0,
    lang: lang ? "ar" : "en",
  });

  useEffect(() => {
    dispatch(loaderOn());

    axiosInstance
      .get("/session/token")
      .then((res) => {
        if (res.data) {
          axiosInstance
            .post(urls.activitiesEndpoint(lang), value)
            .then((res) => {
              if (res.data) {
                dispatch(loaderOff());
                dispatch(setPager(res.data.pager));
                dispatch(setResults(res.data.results));
              }
            })
            .catch((err) => {
              console.log("Error: ", err);
              dispatch(loaderOff());
            });
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(loaderOff());
      });
  }, [value, lang]);




  const handlePageClick = (newPage) => {
    setValue({ ...value, page: newPage });
  };
  const paginationItems = [];
  for (let i = 1; i <= pager.pages; i++) {
    paginationItems.push(
      <li key={i} className={i === value.page + 1 ? "active" : ""}>
        <a
          onClick={(e) => {
            e.preventDefault();
            handlePageClick(i - 1);
          }}
          aria-label={`Go to page number ${i}`}
        >
          {i}
        </a>
      </li>
    );
  }

  const clearFormData = () => {
    setFormdata({
      lang: "",
      title: "",
      field_activity_category_target_id: undefined,
      field_start_and_end_time_value: "",
    })
  };

  const handleSubmit = () => {
    const dataToSend = {};

    if (formdata.lang) {
      dataToSend.lang = lang ? "ar" : "en";
    }

    if (formdata.title) {
      dataToSend.title = formdata.title;
    }

    if (formdata.field_activity_category_target_id !== undefined) {
      dataToSend.field_activity_category_target_id =
        formdata.field_activity_category_target_id;
    }

    if (formdata.field_start_and_end_time_value) {
      dataToSend.field_start_and_end_time_value = format(
        formdata.field_start_and_end_time_value,
        "yyyy-MM-dd"
      );
    }

    // dispatch(setFormdata(dataToSend));

    axiosInstance
      .post(urls.activitiesEndpoint(lang), dataToSend
      )
      .then((res) => {
        console.log("FormData: ", formdata);

        dispatch(setResults(res.data.results));
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  return (
    <div id="main-content" class="activiti-list">
      {popup && <Popup value={popup} data={popupvalue} handle={() => setPopup(false)} />}

      <Pagetitle name={t('activities')} />

      <div className="container">
        <nav
          className="breadcrumb"
          id="breadcrumb-wrap"
          aria-label="breadcrumb"
        >
          <ul>
            <li className="breadcrumb-item">
              <Link to="/">{t('home')}</Link>
            </li>
            <li className="breadcrumb-item">
              <a tabindex="{0}" aria-current="page" href="">
                <span>{t('activities')}</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <span className="multi-square one">
        <b>
          <i />
        </b>
      </span>

      <div id="skipContent">
        <div id="main-container">
          <div className="container">
            <form className="search">
              <div className="row topFormHolder">
                <div className="col s12 m6 l3">
                  <div className="input-field item">
                    <input
                      name="Title"
                      placeholder="Title"
                      id="title"
                      type="text"
                      aria-label="Activity search title"
                      value={formdata.title}
                      onChange={(e) =>

                        setFormdata({ ...formdata, title: e.target.value })

                      }
                    />
                    <label htmlFor="title" style={{ left: 0, right: "auto" }}>
                      {t("activity-title")}
                    </label>
                    <span className="helper-text" />
                  </div>
                </div>
                <div className="col s12 m6 l3 date-popup">
                  <div className="input-field mobileSelect item en">
                    <label
                      htmlFor="activityType"
                      className="active"
                      style={{ left: 0, right: "auto" }}
                    >
                      {t("activity-type")}
                    </label>
                    <select
                      className="browser-default"
                      id="activityType"
                      tabIndex={0}
                      value={
                        formdata.field_activity_category_target_id || "all"
                      }
                      onChange={(e) => {
                        const selectedValue =
                          e.target.value === "all" ? undefined : e.target.value;
                        dispatch(
                          setFormdata({
                            ...formdata,
                            field_activity_category_target_id: selectedValue,
                          })
                        );
                      }}
                    >
                      <option value="all">All</option>
                      <option value={77}>Public activity</option>
                      <option value={78}>School activity</option>
                    </select>
                    <span className="helper-text" />
                  </div>
                </div>
                <div className="col s12 m6 l3 date-popup">
                  <div className="input-field item">
                    <div className="react-datepicker-wrapper">
                      <div className="react-datepicker__input-container">
                        <DatePicker
                          name="date"
                          autoComplete="off"
                          id="date"
                          placeholderText="DD/MM/YYYY"
                          type="date"
                          className=""
                          selected={formdata.field_start_and_end_time_value}
                          onChange={(date) => {

                            setFormdata({
                              ...formdata,
                              field_start_and_end_time_value: date,
                            })

                          }}
                        />
                        <button
                          aria-label="choose date button"
                          type="button"
                          className="example-custom-input"
                        >
                          <span aria-hidden="true" className="material-icons">
                            date_range
                          </span>
                        </button>
                      </div>
                    </div>
                    <label htmlFor="date" style={{ left: 0, right: "auto" }}>
                      {t("date")}
                    </label>
                    <span className="helper-text" />
                  </div>
                </div>
                <div className="col s12 m6 l3 valign-wrapper center-align search-btn-holder">
                  <button
                    type="button"
                    className="btn noWidth profileBtn yellow waves-effect waves-light"
                    aria-label="Activity search"
                    onClick={handleSubmit}
                  >
                    {t("Search")} <i className="material-icons en">arrow_forward</i>
                  </button>
                  <button
                    type="button"
                    aria-label="Activity search clear"
                    className="btn noWidth blue-btn waves-effect waves-light"
                    onClick={clearFormData}
                  >
                    {t("clear")}
                  </button>
                </div>
              </div>
            </form>

            <div className="row">
              <div className="col s7 result-status" />
              <div className="col s5 result-type">
                <div className="input-field col s12 mobileSelect filter-select en">
                  <label htmlFor="result-type">{t("select-activity")}</label>
                  <select
                    id="result-type"
                    className="browser-default"
                    tabIndex={0}
                    onChange={handleActivity}
                  >
                    <option value="All">All</option>
                    <option value="competition">Competitions</option>
                    <option value="session">Workshops</option>
                    <option value="event">Events</option>
                    <option value="challenge">Challenges</option>
                    <option value="project">Projects</option>
                  </select>
                </div>
              </div>
            </div>
            <ul className="activities-list" aria-label="activities">
              {filterData && filterData.length > 0
                ? filterData.map((item, index) => (
                  <li key={item.nid} className="newactivities test3">
                    <div className="figHolderNA">
                      <img
                        src={filterData[index].field_activity_thumbnail}
                        alt="School Activity test image"
                      />
                    </div>
                    <div className="textHolderNA">
                      <div className="topTextHolderNA Creativity Zone">
                        <Link to={`/activity/${item.nid}`}>
                          <h4>
                            <i className="topHeadNA" />
                            {filterData[index].title}
                          </h4>
                        </Link>

                        <div className="topTextInsideNA">
                          <span className="blackText">
                            <i className="topBoyIconNA" />
                            {filterData[index].field_gender}
                          </span>
                          <span>
                            {filterData[index].field_age_group} Years Old
                          </span>
                        </div>
                      </div>
                      <div className="bottomTextHolderNA">
                        <div className="bottomTextLeftNA" />
                        <div className="bottomTextRightNA">
                          <span className="calendarNA">
                            <i className="calendar-icons" /> Start date
                            <span className="date">
                              {filterData[
                                index
                              ].field_start_and_end_time_3.split("*")}

                              <br />

                              <small>
                                {filterData[
                                  index
                                ].field_start_and_end_time.split("*")}
                              </small>
                            </span>
                          </span>
                          <span className="calendarNA">
                            <i className="calendar-icons" /> End date{" "}
                            <span className="date">
                              {filterData[index].field_start_and_end_time_4}
                              <br />
                              <small>
                                {filterData[index].field_start_and_end_time_1}
                              </small>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="btnHolderNA">
                      <button className="btn" onClick={() => setPopup(true)}>
                        Volunteer Now
                      </button>

                      {
                        new Date(filterData[
                          index
                        ].field_start_and_end_time_3.split("*")) < currentDate ?
                          (<button
                            className="btn blueColor "
                            onClick={() => setPopup(true)}
                          >
                            Enroll
                          </button>) : (<></>)}
                    </div>
                  </li>
                ))
                : results &&
                results.map((item, index) => (
                  <li key={item.nid} className="newactivities test3">
                    <div className="figHolderNA">
                      <img
                        src={results[index].field_activity_thumbnail}
                        alt="School Activity test image"
                      />
                    </div>
                    <div className="textHolderNA">
                      <div className="topTextHolderNA Creativity Zone">
                        <Link to={`/activity/${item.nid}`}>
                          <h4>
                            <i className="topHeadNA" />
                            {results[index].title}
                          </h4>
                        </Link>

                        <div className="topTextInsideNA">
                          <span className="blackText">
                            <i className="topBoyIconNA" />
                            {results[index].field_gender}
                          </span>
                          <span>
                            {results[index].field_age_group} {t("yearsOld")}
                          </span>
                        </div>
                      </div>
                      <div className="bottomTextHolderNA">
                        <div className="bottomTextLeftNA" />
                        <div className="bottomTextRightNA">
                          <span className="calendarNA">
                            <i className="calendar-icons" /> {t("start-date")}
                            <span className="date">
                              {
                                results[
                                  index
                                ].field_start_and_end_time_3.split("*")[0]
                              }
                              <br />
                              <small>
                                {
                                  results[
                                    index
                                  ].field_start_and_end_time.split("*")[0]
                                }
                              </small>
                            </span>
                          </span>
                          <span className="calendarNA">
                            <i className="calendar-icons" /> {t("end-date")}
                            <span className="date">
                              {
                                results[
                                  index
                                ].field_start_and_end_time_4.split("*")[0]
                              }
                              <br />
                              <small>
                                {
                                  results[
                                    index
                                  ].field_start_and_end_time_1.split("*")[0]
                                }
                              </small>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="btnHolderNA">
                      <button className="btn" onClick={() => {
                        setPopup(true)
                        setpopUpvalue
                          ("vol")
                      }}>
                        {t("volunteer-btn")}
                      </button>
                      {
                        new Date(results[
                          index
                        ].field_start_and_end_time_3.split("*")) < currentDate ?
                          (<button onClick={() => {
                            setPopup(true)
                            setpopUpvalue
                              ("close")
                          }} className="btn blueColor btn-disabled">Closed</button>
                          ) : ((<button
                            className="btn blueColor "
                            onClick={() => {
                              setPopup(true)
                              setpopUpvalue
                                ("vol")
                            }}
                          >
                            Enroll
                          </button>))}
                      {/* <button
                        className="btn blueColor "
                        onClick={() => setPopup(true)}
                      >
                        {t("enroll")}
                      </button> */}
                    </div>
                  </li>
                ))}
            </ul>
            <nav className="pagination-wrapper" aria-label="pagination">
              <ul className="pagination">
                {value.page > 0 && (
                  <li
                    className=""
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageClick(value.page - 1);
                    }}
                  >
                    <a
                      className="linkClassNext"
                      aria-label="Go to next page"
                      href="#"
                    >
                      {t('previous')} &gt;
                    </a>
                  </li>
                )}
                {paginationItems}
                {paginationItems.length > 0 &&
                  value.page < paginationItems.length - 1 && (
                    <li
                      className=""
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageClick(value.page + 1);
                      }}
                    >
                      <a className="linkClassNext" aria-label="Go to next page">
                        {t('next')} &gt;
                      </a>
                    </li>
                  )}
              </ul>
            </nav>
          </div>
          <div className="sparkles">
            <span className="orange-circle" />
            <span className="multi-square two">
              <b>
                <i />
              </b>
            </span>
            <span className="grey-square-rotate red-sq one" />
            <span className="grey-square-rotate red-sq two" />
          </div>
        </div>
        <Lowerimg />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Activities;
