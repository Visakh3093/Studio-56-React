import React, { useEffect, useState } from "react";
import axiosInstance from "../../Axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import urls from "../endPoints/urls";
import { setData, setImg, setVideo } from "../redux/slices/homeSlice";

const Newswrap = () => {

  const { t } = useTranslation();
  const [{ lang }, { data }, { video }, { img }] = useSelector((state) => [state.language, state.Home, state.Home, state.Home]);
  // const data = useSelector((state) => state.newshome.data);
  // const video = useSelector((state) => state.newshome.video);
  // const img = useSelector((state) => state.newshome.img);
  const dispatch = useDispatch();

  useEffect(() => {
    axiosInstance
      .get(urls.newsWrapEndpoint(lang))
      .then((res) => {
        dispatch(setData(res.data[0]));
      })
      .catch((err) => {
        console.log(err);
      });

    axiosInstance
      .get(urls.newsWrapvideoEndpoint(lang))
      .then((res) => {
        dispatch(setVideo(res.data[0]));
      })
      .catch((err) => console.log("Axios Error: ", err));

    axiosInstance
      .get(urls.newsWrapgalleryEndpoint(lang))
      .then((res) => {
        dispatch(setImg(res.data[0]));
      })
      .catch((err) => console.log("Axios Error: ", err));
  }, [lang]);

  const { title, category, description, date, nid } = data || {};

  return (
    <div className="news-wrap">
      <div className="container">
        <h2 id="news-media" className="line">
          {t("news")} &amp; {t("media")}
          <span className="grey-square-rotate"></span>
        </h2>

        <div className="flex-row col-2">
          <div className="item news-item">
            <div className="flex-row col-3">
              <div className="homeNewsParent">
                <Link
                  className="item homeNewsText1"
                  aria-label="Next-Gen Ramadan Tech News Published 02 April 2023 
    "
                  to={`/news/${nid}`}
                >
                  <h3>{title}</h3>
                </Link>
                <div className="img-wrap">
                  <img
                    src="http://51.136.51.121/drupal-app/web//sites/default/files/2023-11/MicrosoftTeams-image%20%288%29_0.png"
                    alt="news image"
                  />
                </div>
                <div className="homeNewsText2">
                  <div className="category-wrap">{category}</div>
                  <div className="desc">
                    <div
                      dangerouslySetInnerHTML={{ __html: description }}
                    ></div>
                  </div>
                  <p
                    className="date-wrap"
                    aria-label="Published 02 April 2023 
    "
                    dangerouslySetInnerHTML={{ __html: date }}
                  >
                    {/* {date} */}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="item gal-item en">
            <div className="flex-row col-2">
              <div className="item">
                <div className="">
                  <div className="videowrapper">
                    <object
                      data="https://www.youtube.com/embed/Y4BIAblRktg"
                      tabIndex="-1"
                    />
                    <param name="movie" value={video.video} />
                    <param
                      name="allowFullScreen"
                      mozallowfullscreen="mozallowfullscreen"
                      msallowfullscreen="msallowfullscreen"
                      oallowfullscreen="oallowfullscreen"
                      webkitallowfullscreen="webkitallowfullscreen"
                      value="true"
                    />
                    <span>{video.category}</span>
                  </div>
                  <div className="category-wrap Video">{video.category}</div>
                  <Link
                    aria-label="Build a VR Environment Video Published 24 October 2019 
    "
                    to={`/news/${video.nid}`}
                  >
                    <div className="desc">{video.title}</div>
                  </Link>
                  <p
                    className="date-wrap"
                    aria-label="Published 24 October 2019 
    "
                    dangerouslySetInnerHTML={{ __html: video.date }}
                  >
                    {/* {video.date} */}
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="">
                  {img.image ? (
                    <div
                      className="img-wrap"
                      dangerouslySetInnerHTML={{ __html: img.image }}
                    />
                  ) : (
                    <img src="/drupal-app/web/sites/default/files/2023-11/12.%203d%20print%20b_0.jpg" />
                  )}
                  <div className="category-wrap Gallery">{img.category}</div>
                  <Link
                    aria-label={`3D Print a Mini-City Gallery Published ${img.date}`}
                    to={`/news/${img.nid}`}
                  >
                    <div className="desc">{img.title}</div>
                  </Link>
                  <p
                    className="date-wrap"
                    aria-label={`Published ${img.date}`}
                    dangerouslySetInnerHTML={{ __html: img.date }}
                  ></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="view-more home">
          <Link
            aria-label="Button for view more news and media"
            to="/media-center"
          >
            {t("view-more-btn")}
            <i className="material-icons en"></i>
          </Link>
        </div>
        <div className="multi-square">
          <b>
            <i></i>
          </b>
        </div>
        <div className="multi-circle">
          <b>
            <i></i>
          </b>
        </div>
      </div>
    </div>
  );
};

export default Newswrap;
