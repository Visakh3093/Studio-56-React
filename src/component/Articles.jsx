import React, { useEffect, useState } from "react";
import Pagetitle from "./Pagetitle";
import { Link } from "react-router-dom";
import axiosInstance from "../../Axios";
import { useDispatch, useSelector } from "react-redux";
import { loaderOff, loaderOn } from "../redux/slices/loaderSlice";
import { setFilterdata, setResults } from "../redux/slices/mediacenterSlice";
import { useTranslation } from "react-i18next";
import urls from "../endPoints/urls";

const Articles = () => {
  const [{ lang }, { filterdata }, { results }] = useSelector((state) => [state.language, state.mediacenter, state.mediacenter]);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  // const filterdata = useSelector((state) => state.mediacenter.filterdata);
  // const results = useSelector((state) => state.mediacenter.results);
  useEffect(() => {
    dispatch(loaderOn());
    axiosInstance
      .get(urls.mediacenterFilterEndpoint(lang))
      .then((res) => {
        dispatch(setFilterdata(res.data));
      })
      .catch((err) => console.log("Error: ", err));

    axiosInstance
      .get(urls.articleEndpoint(lang))
      .then((res) => {
        dispatch(setResults(res.data.results));

        dispatch(loaderOff());
      })
      .catch((err) => {
        console.log("Error: ", err);
        dispatch(loaderOff());
      });
  }, [lang]);
  return (
    <div>
      <Pagetitle name={t("article")} />
      <div className="container">
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
                <span>{t("article")}</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div id="skipContent">
        <div className="container">
          <div className="row">
            <div className="col s3 left-side">
              <div className="filter-wrap">
                <h2>{t("Filter-Media")}</h2>
                <ul aria-label="aside navigation">
                  {filterdata &&
                    filterdata.map((item, index) => (
                      <li key={index} className="media-item en">
                        <Link
                          to={`/filter-media/${item.tid}`}
                          aria-label="News section contains 56 items"
                        >
                          {item.filter}
                          <span>{item.count}</span>
                        </Link>
                      </li>
                    ))}
                </ul>
                <span className="grey-square-rotate" />
                <span className="multi-square">
                  <b>
                    <i />
                  </b>
                </span>
              </div>
            </div>
            <div className="col s9 media-content">
              <ul
                aria-label="Media Center Articles
 With 1 items"
              >
                {results &&
                  results.map((item, index) => (
                    <li key={index} className="media-item">
                      <div className="category-wrap article">{t('article')}</div>
                      <h3>
                        <Link
                          to={`/news/${item.nid}`}
                          tabIndex={0}
                          aria-label="Green is the New Smart Published 17 May 2023"
                        >
                          {item.title}
                        </Link>
                      </h3>
                      <div className="mediaList">
                        <div className="medialistImg" />
                        <div className="medialistText">
                          <div className="desc">
                            <div>
                              <table align="left" hspace={0} vspace={0}>
                                <tbody>
                                  <tr>
                                    <td align="left" valign="top">
                                      <p
                                        dangerouslySetInnerHTML={{
                                          __html: item.description,
                                        }}
                                      ></p>
                                      <p>&nbsp;</p>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div
                            className="date-wrap"
                            dangerouslySetInnerHTML={{ __html: item.date }}
                          ></div>
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
              <nav className="pagination-wrapper" aria-label="pagination">
                <ul className="pagination">
                  <li className="active">
                    <a
                      className="undefined"
                      href="#"
                      aria-label="Go to page number 1"
                    >
                      1
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
