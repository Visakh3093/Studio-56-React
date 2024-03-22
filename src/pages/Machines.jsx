import React, { useEffect, useState } from "react";
import Pagetitle from "../component/Pagetitle";
import MachinesSkipContent from "../component/MachinesSkipContent";
import axiosInstance from "../../Axios";
import { useDispatch, useSelector } from "react-redux";
import { loaderOff, loaderOn } from "../redux/slices/loaderSlice";
import { Link } from "react-router-dom";
import { setResults } from "../redux/slices/machineSlice";
import { useTranslation } from "react-i18next";
import urls from "../endPoints/urls";

const Machines = () => {
  const dispatch = useDispatch();
  const Lang = useSelector((state) => state.language.lang);
  const results = useSelector((state) => state.machines.results);
  const { t } = useTranslation();
  useEffect(() => {
    dispatch(loaderOn());
    axiosInstance
      .get(urls.machineEndpoint(Lang))
      .then((res) => {
        // setResults(res.data.results)
        console.log("Response: ", res.data.results);
        dispatch(setResults(res.data.results));
        dispatch(loaderOff());
      })
      .catch((err) => {
        console.log(err);
        dispatch(loaderOff());
      });
  }, [Lang]);

  return (
    <div>
      <Pagetitle name={t('machines')} />
      <div id="main-container">
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
                <a tabindex="{0}" aria-current="page" href="/machines">
                  <span>{t('machines')}</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div id="skipContent" className="container">
          <h2 className="line">{t('machines')}</h2>
          <div className="machine-item-holder"></div>
          {results &&
            results.map((item, index) => (
              <div key={index} className="machine-item">
                <MachinesSkipContent {...item} />
              </div>
            ))}
          <nav className="pagination-wrapper" aria-label="pagination">
            <ul className="pagination">
              <li className="active">
                <a
                  className="undefined"
                 
                  aria-label="Go to page number 1"
                >
                  1
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Machines;
