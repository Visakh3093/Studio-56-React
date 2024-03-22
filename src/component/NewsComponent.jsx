import React, { useEffect, useState } from "react";
import Pagetitle from "./Pagetitle";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NewsComponent = ({ img, ...data }) => {
  console.log("News Image: ", img);
  const [index, setIndex] = useState(0);
  const { t } = useTranslation();
  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % img.length);
  };

  const handlePrevious = () => {
    setIndex((prevIndex) => (prevIndex - 1 + img.length) % img.length);
  };

  return (
    <div class="news">
      <Pagetitle name={t("news")} />

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
                    <a tabIndex={0} aria-current="page" href="">
                      <span>{data ? data.title : null}</span>
                    </a>
                  </li>
                </ul>
              </nav>
              <h2
                id="gallery-title"
                tabIndex={0}
                aria-label="Next-Gen Ramadan Tech Published 02 April 2023 
"
              >
                {data ? data.title : null}
              </h2>
              <div className="date-wrap">{data ? data.date : null}</div>
              <div className="article-news">
                <div className="slick-slider slider news-slider slick-initialized">
                  <div className="slick-list">
                    <div
                      className="slick-track"
                      style={{
                        width: 702,
                        opacity: 1,
                        transform: "translate3d(0px, 0px, 0px)",
                      }}
                    >
                      <div
                        data-index={0}
                        className="slick-slide slick-active slick-center slick-current"
                        tabIndex={-1}
                        aria-hidden="false"
                        style={{ outline: "none", width: 702 }}
                      >
                        <div>
                          <div
                            className="item"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            {img.length > 1 && (
                              <button onClick={handlePrevious}>
                                {t("previous")}
                              </button>
                            )}
                            {img && img[index] && (
                              <img src={img[index].image} alt="Description" />
                            )}
                          </div>
                        </div>
                        {img.length > 1 && (
                          <button onClick={handleNext}>{t("next")}</button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content">
                <div
                  dangerouslySetInnerHTML={{
                    __html: data ? data.description : null,
                  }}
                ></div>
              </div>
            </div>
            <div className="container">
              <div className="view-more news">
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

export default NewsComponent;
