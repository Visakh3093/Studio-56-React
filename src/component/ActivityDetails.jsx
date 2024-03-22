import React, { useEffect, useState } from "react";
import Pagetitle from "./Pagetitle";
import Lowerimg from "./Lowerimg";
import { Link, useParams } from "react-router-dom";
import axiosInstance from "../../Axios";
import { useDispatch, useSelector } from "react-redux";

import { useTranslation } from "react-i18next";
import urls from "../endPoints/urls";
import { setData, setDates3, setDates4, setImg, setTimes1, setTimes2 } from "../redux/slices/activitiesSlice";



const ActivityDetails = () => {

  const dispatch = useDispatch();
  const { nid } = useParams();
  const [{ lang }, { data }, { img }, { dates3 }, { dates4 }, { times1 }, { times2 }] = useSelector((state) => [state.language, state.activities, state.activities, state.activities, state.activities, state.activities, state.activities]);
  const { t } = useTranslation();

  useEffect(() => {
    axiosInstance
      .get(urls.activityDetailsEndpoint(lang, nid))
      .then((res) => {
        dispatch(setData(res.data[0]));
        console.log("Response Data: ", res.data[0]);

        if (res.data[0]?.field_start_and_end_time_4) {
          dispatch(
            setDates4(
              extractDatesWithoutStar(res.data[0].field_start_and_end_time_4)
            )
          );
        }
        if (res.data[0]?.field_start_and_end_time_3) {
          dispatch(
            setDates3(
              extractDatesWithoutStar(res.data[0].field_start_and_end_time_3)
            )
          );
        }
        if (res.data[0].field_start_and_end_time) {
          dispatch(
            setTimes1(
              res.data[0].field_start_and_end_time
                .split("*")
                .map((time) => time.trim())
            )
          );
        }

        if (res.data[0].field_start_and_end_time_1) {
          dispatch(
            setTimes2(
              res.data[0].field_start_and_end_time_1
                .split("*")
                .map((time) => time.trim())
            )
          );
        }
      })

      .catch((err) => {
        console.log("Error: ", err);
      });

    axiosInstance
      .get(urls.mediaGalleryEndpoint(lang, nid))
      .then((res) => {
        dispatch(setImg(res.data["media-gallery"]));
        console.log(res.data["media-gallery"]);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });

    console.log("Redux Data : ", data);
  }, [dispatch, lang]);

  const extractDatesWithoutStar = (datesString) => {
    return datesString.split("*").map((date) => date.trim());
  };

  return (
    <div className="">
      <div
        id="main-content"
        className="activity-details"
        style={{ minHeight: "100vh" }}
      >
        <Pagetitle name={"Workshop Details"} />
        {data && (
          <div className="container">
            <div
              className="breadcrumb"
              id="breadcrumb-wrap"
              aria-label="breadcrumb"
            >
              <ul>
                <li className="breadcrumb-item">
                  <Link to="/">{t("home")}</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/activities">{t('activities')}</Link>
                </li>
                <li className="breadcrumb-item">
                  <span>{`${data.field_event_type} Details `}</span>
                </li>
              </ul>
            </div>
          </div>
        )}
        {data && (
          <div id="skipContent">
            <div id="main-container">
              <div className="container1">
                <div>
                  <div className="event-details event-detail">
                    <div className="container">
                      <div class="flex-row"><h2>{data.eventname}</h2><button class="btn blueColor btn-disabled">{t('close')}</button></div>
                    </div>
                    <div> <h1>{data.title}</h1> </div>
                    <div className="">
                      <div className="article-news">
                        <div className="slick-slider slider news-slider slick-initialized">
                          <div className="slick-list">
                            <div
                              className="slick-track"
                              style={{
                                width: 869,
                                opacity: 1,
                                transform: "translate3d(0px, 0px, 0px)"
                              }}
                            >
                              <div
                                data-index={0}
                                className="slick-slide slick-active slick-current"
                                tabIndex={-1}
                                aria-hidden="false"
                                style={{ outline: "none", width: 869 }}
                              >
                                <div>
                                  <div
                                    className="item"
                                    tabIndex={-1}
                                    style={{ width: "100%", display: "inline-block" }}
                                  >
                                    <div className="sliderHeightNew1" style={{ width: "100%" }}>
                                      {img && <img
                                        src={`http://51.136.51.121${img[0]}`}
                                        alt="No Image Found"
                                      />}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="container">
                        <div className="description" dangerouslySetInnerHTML={{ __html: data.description }} />
                      </div>
                    </div>


                    <div className="container">
                      <br />

                      <h4>Learning Objective</h4>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data.field_activity_objective,
                        }}
                      ></div>
                      <div className="row  details-wrap noFlex">
                        <h3>Details</h3>
                        <div className="col s6 main-details">
                          <table>
                            <tbody>
                              <tr>
                                <th>Date</th>
                                <td className="activityDetailDateRow p0">
                                  <table>
                                    <tbody>
                                      <tr>
                                        <th>Start date</th>
                                        <th>End date</th>
                                      </tr>

                                      {dates3 && dates4 && times1 && times2 && (
                                        <>
                                          {dates3.map((item, index) => (
                                            <tr key={index}>
                                              <td>
                                                {item} - {times1[index]}
                                              </td>
                                              {dates4[index] && (
                                                <>
                                                  <td>
                                                    {dates4[index]} -
                                                    {times2[index]}
                                                  </td>
                                                </>
                                              )}
                                            </tr>
                                          ))}
                                        </>
                                      )}
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <th>Address</th>
                                {data.field_activity_address !== "" ? (
                                  <td
                                    dangerouslySetInnerHTML={{
                                      __html: data.field_activity_address,
                                    }}
                                  ></td>
                                ) : (
                                  "Address unavailable"
                                )}
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="col s6 main-details">
                          <table>
                            <tbody>
                              <tr>
                                <th>Age group</th>
                                <td>{data.age_group} </td>
                              </tr>
                              <tr>
                                <th>Gender</th>
                                <td>{data.gender}</td>
                              </tr>
                              <tr>
                                <th>No of Attendee</th>
                                <td>{data.field_number_of_attendees}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="col s12 main-details" />
                      </div>
                    </div>
                  </div>
                  <div />
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="sparkles">
          <span className="orange-circle" />
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
          <span className="grey-square-rotate red-sq one" />
          <span className="grey-square-rotate red-sq two" />
        </div>
      </div>
      <Lowerimg />

      {/* <Footer/> */}
    </div>
  );
};

export default ActivityDetails;
