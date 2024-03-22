import React, { useEffect, useState } from "react";
import axiosInstance from "../../Axios";
import { Link } from "react-router-dom";
import Popup from "./Popup";
import { useDispatch, useSelector } from "react-redux";
import { setPopupOff, setPopupOn } from "../redux/slices/popupSlice";
import { useTranslation } from "react-i18next";
import urls from "../endPoints/urls";
import { setActivityhome } from "../redux/slices/homeSlice";

const Activityhome = () => {
  const { t } = useTranslation();
  const currentDate = new Date()
  const [popupvalue, setpopUpvalue] = useState('')
  // const popup = useSelector((state) => state.popup.popup);
  const [{ lang }, { popup }, { activityhome }] = useSelector((state) => [state.language, state.popup, state.Home]);
  // const activityhome = useSelector((state) => state.activityHome.activityhome);
  const dispatch = useDispatch();

  useEffect(() => {
    axiosInstance
      .get(
        urls.activityHomeendpoint(lang)
      )
      .then((res) => {
        dispatch(setActivityhome(res.data.results));
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(popupvalue);
  }, [lang]);

  return (
    <div className="activityHome">
      {popup && <Popup value={popup} data={popupvalue} handle={() => dispatch(setPopupOff())} />}

      <div className="container">
        <div className="zone-text en ">
          <h3 id="activity">{t("home-activity-heading")}</h3>
          <div>
            {t("home-activity-desc")}
            <Link
              to="/activities"
              className="btnNewYellow btn"
              aria-labelledby="activity"
              aria-label="Button for view more activity"
            >
              {t("home-activity-button")}{" "}
              <i className="material-icons en">arrow_forward</i>
            </Link>
          </div>
        </div>
        <div className="row noFlex">
          <ul aria-label="Activities">
            {activityhome &&
              activityhome.map((item, index) => (
                <li key={index} className="col s12 m4 l4">
                  <div className="newactivities">
                    <div className="textHolderNA Investigation-Zone">
                      <div className="topTextHolderNA">
                        <Link
                          aria-label="Layan School Activity test Mixed 10-20 Years Old Start date 05 Dec, 2023 09:39 am End date 06 Dec, 2023 10:39 am"
                          to={`/activity/${item.nid}`}
                        >
                          <h4>
                            <i className="topHeadNA"></i>
                            {item.title}
                          </h4>
                        </Link>
                        <div className="topTextInsideNA">
                          <span className="blackText">
                            <i className="topBoyIconNA"></i>
                            {item.field_gender}
                          </span>
                          <span>
                            {item.field_age_group} {t("yearsOld")}
                          </span>
                        </div>
                      </div>

                      <div className="bottomTextHolderNA">
                        <div className="bottomTextRightNA">
                          <span className="calendarNA">
                            <i className="calendar-icons"></i> {t("start-date")}
                            <span className="date">
                              {item.field_start_and_end_time_3} <br />
                              <small>{item.field_start_and_end_time}</small>
                            </span>
                          </span>
                          <span className="calendarNA">
                            <i className="calendar-icons"></i> {t("end-date")}
                            <span className="date">
                              {item.field_start_and_end_time_4}
                              <br />
                              <small>{item.field_start_and_end_time_1}</small>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="btnHolderNA">
                      {
                        new Date(item.field_start_and_end_time_3) < currentDate ? '' : <>

                          <button
                            aria-label="Layan School Activity test Enroll"
                            className="btn blueColor "
                            type="button"
                            onClick={() => {
                              console.log('Enroll button clicked');
                              setpopUpvalue('val');
                              dispatch(setPopupOn())

                            }}
                          >
                            {t("Enroll")}
                          </button>
                          <button
                            className="btn"
                            aria-label="volunteer now for Layan School Activity test"
                            onClick={() => {
                              console.log('Enroll button clicked');
                              setpopUpvalue('del');
                              dispatch(setPopupOn())
                            }}
                          >
                            {t("Volunteer Now")}
                          </button>


                        </>
                      }

                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Activityhome;
