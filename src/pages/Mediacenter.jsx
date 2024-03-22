import React, { useEffect, useState } from "react";
import Pagetitle from "../component/Pagetitle";
import axiosInstance from "../../Axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loaderOff, loaderOn } from "../redux/slices/loaderSlice";
import {
  setFilterdata,
  setPage,
  setPager,
  setResults,
} from "../redux/slices/mediacenterSlice";
import { useTranslation } from "react-i18next";
import urls from "../endPoints/urls";

const Mediacenter = () => {
  const dispatch = useDispatch();

  const filterdata = useSelector((state) => state.mediacenter.filterdata);
  const results = useSelector((state) => state.mediacenter.results);
  const page = useSelector((state) => state.mediacenter.page);
  const pager = useSelector((state) => state.mediacenter.pager);
  const Lang = useSelector((state) => state.language.lang);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(loaderOn());
    axiosInstance
      .get(urls.mediacenterFilterEndpoint(Lang))
      .then((res) => {
        dispatch(setFilterdata(res.data));
        dispatch(loaderOff());
      })
      .catch((err) => {
        console.log("Error: ", err);
        dispatch(loaderOff());
      });

    if (page > 0) {
      axiosInstance
        .get(urls.mediacenterwithPager(Lang) + `${page}`)
        .then((res) => {
          dispatch(setResults(res.data.results));
          dispatch(setPager(res.data.pager));
          dispatch(loaderOff());
        })
        .catch((err) => {
          console.log(err);
          dispatch(loaderOff());
        });
    } else {
      axiosInstance
        .get(urls.mediacenterDataEndpoint(Lang))
        .then((res) => {
          dispatch(setResults(res.data.results));
          dispatch(setPager(res.data.pager));
          dispatch(loaderOff());
        })
        .catch((err) => {
          console.log(err);
          dispatch(loaderOff());
        });
    }
  }, [page, dispatch, Lang]);

  const handlePageClick = (newPage) => {
    dispatch(setPage(newPage));
  };

  const paginationItems = [];
  for (let i = 1; i <= pager.pages; i++) {
    paginationItems.push(
      <li key={i} className={i === page + 1 ? "active" : ""}>
        <a
          href=""
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

  return (
    <div>
      <div main-container>
        <Pagetitle name={t("mediacenter")} />

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
                <a tabIndex={0} aria-current="page">
                  <span>{t("mediacenter")}</span>
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
                  <h3 id="filter-title">{t("Filter-Media")}</h3>
                  <ul aria-label="aside navigation">
                    {filterdata &&
                      filterdata.map((item, index) => (
                        <li key={index} className="media-item en">
                          <Link
                            to={`/filter-media/${item.tid}`}
                            aria-label={`News section contains ${item.count} items`}
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
                <span className="orange-circle" />
                <div className="flex-row col-3">
                  <ul aria-label="media center">
                    {results &&
                      results.map((item, index) => (
                        <li key={index} className="media-item">
                          <div
                            style={{
                              borderBottom: "1px solid black",
                              paddingBottom: "5px",
                            }}
                            className={`category-wrap ${item.field_key.toLowerCase()}`}
                          >
                            {`${item.field_key}s`}
                          </div>
                          <br />
                          <h4>
                            <Link
                              to={`/news/${item.nid}`}
                              aria-label={`News ${item.title} Published ${item.publish_date}`}
                              style={{ color: "inherit" }}
                            >
                              {item.title}
                            </Link>
                          </h4>

                          <div className="mediaList">
                            <div className="medialistImg">
                              <div className="img-wrap imageFixedSize">
                                <img
                                  alt=""
                                  src={`http://51.136.51.121/drupal-app/web${item.field_newsimage}`}
                                />
                              </div>
                            </div>
                            <div className="medialistText">
                              <div className="desc">{item.description}</div>
                              <div
                                className="date-wrap"
                                dangerouslySetInnerHTML={{ __html: item.date }}
                              ></div>
                            </div>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
                <nav className="pagination-wrapper" aria-label="pagination">
                  <ul className="pagination">
                    {page > 0 && (
                      <li
                        className=""
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageClick(page - 1);
                        }}
                      >
                        <a
                          className="linkClassNext"
                          aria-label="Go to next page"
                          href="#"
                        >
                          {t("previous")} &gt;
                        </a>
                      </li>
                    )}
                    {paginationItems}
                    {paginationItems.length > 0 &&
                      page < paginationItems.length - 1 && (
                        <li
                          className=""
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageClick(page + 1);
                          }}
                        >
                          <a
                            className="linkClassNext"
                            aria-label="Go to next page"
                            href="#"
                          >
                            {t("next")} &gt;
                          </a>
                        </li>
                      )}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mediacenter;
