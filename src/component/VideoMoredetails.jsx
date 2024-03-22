import React from "react";

import Pagetitle from "./Pagetitle";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const VideoMoredetails = ({ img, ...data }) => {
  const { t } = useTranslation();

  return (
    <div class="video">
      <Pagetitle name={t("video")} />

      <div id="skipContent">
        <div id="main-container" className="single-news">
          <div>
            <div className="container">
              <span className="multi-square">
                <b>
                  <i />
                </b>
              </span>
              <span className="grey-square-rotate" />
              <span className="grey-square-rotate bottom" />
              <span className="orange-circle" />
              <nav
                className="breadcrumb"
                id="breadcrumb-wrap"
                aria-label="breadcrumb"
              >
                <ul>
                  <li className="breadcrumb-item">
                    <Link to="/">{t("home")}</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/media-center">{t("mediacenter")}</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <a tabIndex={0} aria-current="page">
                      <span>{data ? data.title : null}</span>
                    </a>
                  </li>
                </ul>
              </nav>
              <h2
                id="gallery-title"
                tabIndex={0}
                aria-label="Build a VR Environment Published 24 October 2019 
"
              >
                {data ? data.title : null}
              </h2>
              <div className="date-wrap">{data ? data.date : null}</div>
              <div className="content">
                {data ? (
                  <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
                ) : null}
                {/* <p>
            The goal of this workshop is to build a Virtual Reality environment
          </p> */}
              </div>
            </div>
            <div className="container">
              <div className="view-more video">
                <Link to="/media-center">
                  <i className="material-icons ar">arrow_backward</i>{" "}
                  {t("back")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoMoredetails;
