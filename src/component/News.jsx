import React, { useEffect, useState } from "react";
import Pagetitle from "./Pagetitle";
import axiosInstance from "../../Axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loaderOff, loaderOn } from "../redux/slices/loaderSlice";
import { setFilterdata, setPage, setPager, setResults, } from "../redux/slices/mediacenterSlice";
import { useTranslation } from "react-i18next";
import urls from "../endPoints/urls";

const News = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();


  const [{ lang }, { filterdata }, { results }, { page }, { pager }] = useSelector((state) => [state.language, state.mediacenter, state.mediacenter, state.mediacenter, state.mediacenter]);

  const handlePageClick = (newPage) => {
    dispatch(setPage(newPage));
  };
  useEffect(() => {
    axiosInstance
      .get(urls.mediacenterFilterEndpoint(lang))
      .then((res) => {
        dispatch(setFilterdata(res.data));

        // console.log(res.data);
      })
      .catch((err) => {
        console.log("Error: ", err);
        //  dispatch(loaderOff())
      });
    if (page > 0) {
      dispatch(loaderOn());
      axiosInstance
        .get(urls.newsEndpoint(lang) + `&page=${page}`)
        .then((res) => {
          dispatch(setResults(res.data.results));
          dispatch(setPager(res.data.pager));
          dispatch(loaderOff());

          console.log("Response: ", res.data.results);
        })
        .catch((err) => {
          console.log("Error: ", err);
          dispatch(loaderOff());
        });
    } else {
      dispatch(loaderOn());
      axiosInstance
        .get(urls.newsEndpoint(lang))
        .then((res) => {
          dispatch(setResults(res.data.results));
          dispatch(setPager(res.data.pager));
          dispatch(loaderOff());
          console.log("Response: ", res.data.results);
        })
        .catch((err) => {
          console.log("Error: ", err);
          dispatch(loaderOff());
        });
    }
  }, [page, lang]);

  const paginationItems = [];
  for (let i = 1; i <= pager.pages; i++) {
    paginationItems.push(
      <li key={i} className={i === page + 1 ? "active" : ""}>
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
  return (
    <div id="main-content" class="media-center-page">
      <Pagetitle name={t("news")} />
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
              <Link tabIndex={0} aria-current="page" to="/media-center">
                {t("mediacenter")}
              </Link>
            </li>
            <li className="breadcrumb-item">
              <a tabIndex={0} aria-current="page" to="">
                <span>{t("news")}</span>
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
                        <a
                          aria-label="News section contains 56 items"
                          onClick={() => navigate(`/filter-media/${item.tid}`)}
                        >
                          {item.filter}
                          <span>{item.count}</span>
                        </a>
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
                aria-label="Media Center News With 10 items"
              >
                {results &&
                  results.map((item, index) => (
                    <li key={index} className="media-item">
                      <div className="category-wrap news">News</div>
                      <h3>
                        <Link
                          to={`/news/${item.nid}`}
                          tabIndex={0}
                          aria-label={`Next-Gen Ramadan Tech Published ${item.publish_date}`}
                        >
                          {item.title}
                        </Link>
                      </h3>
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
                          <div className="desc">
                            <p
                              dangerouslySetInnerHTML={{
                                __html: item.description,
                              }}
                            >

                            </p>
                          </div>
                          <div className="date-wrap">{item.date}</div>
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
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
                      <a className="linkClassNext" aria-label="Go to next page">
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
  );
};

export default News;
