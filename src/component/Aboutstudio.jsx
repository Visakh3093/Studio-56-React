import React, { useEffect, useState } from "react";
import axiosInstance from "../../Axios";
import { useDispatch, useSelector } from "react-redux";
import { loaderOff, loaderOn } from "../redux/slices/loaderSlice";
import urls from "../endPoints/urls";
import { setAboutHome } from "../redux/slices/homeSlice";

const AboutStudio = () => {
  const [{ lang }, { aboutHomeData }] = useSelector((state) => [state.language, state.Home]);
  // const aboutHomeData = useSelector((state) => state.aboutHome.aboutHomeData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loaderOn());
    console.log(lang);
    axiosInstance
      .get(urls.aboutStudioEndpoint(lang))
      .then((res) => {
        dispatch(setAboutHome(res.data[0].body));
        dispatch(loaderOff());
      })
      .catch((err) => {
        console.log(err);
        dispatch(loaderOff());
      });
  }, [lang]);

  const aboutData = aboutHomeData && aboutHomeData.replace(
    /<a class="btnNewYellow btn btn-signup" href="\/about">View More <\/a>/g,
    '<a class="btnNewYellow btn btn-signup" href="/en/about">View More </a>'
  );



  return (
    <div className="about-studio container">

      <div className="item">
        <div dangerouslySetInnerHTML={{ __html: aboutData }}></div>

        {/* <div
          className="bootstrapiso"
          data-original-title=""
          id="mttContainer"
          style={{
            left: "0px",
            top: "0px",
            position: "fixed",
            zIndex: "100000200",
            width: "500px",
            marginLeft: "-250px",
            backgroundColor: "rgba(0, 0, 0, 0)",
            pointerEvents: "none",
            transform: "translate(351px, 212px)",
          }}
          title=""
        >
          &nbsp;
        </div> */}

        {/* <p>
          <iframe
            id="ocrFrame"
            name="ocrFrame"
            src="chrome-extension://hmigninkgibhdckiaphhmbgcghochdjc/ocr.htm"
            style={{ display: "none" }}
          ></iframe>
          <lt-toolbar
            contentEditable={false}
            data-lt-force-appearance="light"
            style={{ display: "none" }}
          >
            <lt-div
              className="lt-toolbar__wrapper"
              style={{
                left: "554px",
                position: "absolute !important",
                top: "299px !important",
                bottom: "auto !important",
                zIndex: "auto",
              }}
            >
              <lt-div className="lt-toolbar__premium-icon"></lt-div>
              <lt-div
                className="lt-toolbar__status-icon lt-toolbar__status-icon-has-no-errors"
                title="LanguageTool - Spelling and Grammar Check"
              ></lt-div>
            </lt-div>
          </lt-toolbar>
        </p> */}
      </div>
      <img
        alt=""
        src="./src/assets/images/about-home-1.png"
        style={{ display: "none" }}
      />
      <span className="orange-circle"></span>
    </div>
  );
};

export default AboutStudio;
