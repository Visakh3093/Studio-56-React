import React, { useEffect, useState } from "react";
import Pagetitle from "../component/Pagetitle";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../Axios";
import { useDispatch, useSelector } from "react-redux";
import urls from "../endPoints/urls";
import { useTranslation } from "react-i18next";
import { setMoreResults } from "../redux/slices/machineSlice";


const Moremachines = () => {
  const dispatch = useDispatch();
  const [{ lang }, { Moreresults }] = useSelector((state) => [state.language, state.machines]);
  // const results = useSelector((state) => state.moreMachine.results);
  const { nid } = useParams();
  const { t } = useTranslation();
  console.log(urls.moreMachineEndpoint(lang, nid));

  useEffect(() => {
    axiosInstance.get(urls.moreMachineEndpoint(lang, nid)).then((res) => {
      console.log("Res: ", res.data[0]);
      console.log(res);
      dispatch(setMoreResults(res.data[0]));
    });
  }, [lang]);


  const navigate = useNavigate();
  const [tab, setTab] = useState("feature");

  const handleTabClick = (tabId) => {
    setTab(tabId);
    document.querySelectorAll(".tabs a").forEach((tab) => {
      tab.classList.remove("active");
    });

    document.querySelectorAll(".machine-tab-content").forEach((content) => {
      content.style.display = "none";
    });

    // document.querySelector(`.tabs a[href="#${tabId}"]`).classList.add("active");

    document.getElementById(tabId).style.display = "block";
  };

  return (
    <div id="main-container">
      <Pagetitle name={t("machines")} />
      <div className="container">
        <nav
          className="breadcrumb"
          id="breadcrumb-wrap"
          aria-label="breadcrumb"
        >
          <ul>
            {/* <li className="breadcrumb-item">
              <Link to="/">{t("home")}</Link>
            </li> */}
            <li className="breadcrumb-item">
              <Link to="/machines">{t("machines")}</Link>
            </li>
            <li className="breadcrumb-item">
              <a tabIndex={0} aria-current="page">
                <span>{Moreresults.title}</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="skipContent" className="container">
        <h2 className="line">{Moreresults.title && Moreresults.title}</h2>
        <div className="row machine-detail-holder">
          <div className="row machine-detail-holder">
            <div className="col m12 l3">
              <figure className="machine-detail-figure">
                {Moreresults.field_machines_image && <img
                  src={`http://51.136.51.121/drupal-app/${Moreresults.field_machines_image}`}
                  alt="Back end image error"
                />}
              </figure>
              {/* <figure className="machine-detail-figure">
                <img
                  src="http://51.136.51.121/drupal-app/web//web/sites/default/files/2023-12/Screenshot%202023-12-30%20201525.png"
                  alt=""
                />
              </figure> */}

            </div>
            <div className="col m12 l9 machine-detail-content">
              <h4>
                <span>{Moreresults.field_machine_type}</span>
              </h4>
              <h5 className="blue-text">{Moreresults.field_machine_brand}</h5>
              <div dangerouslySetInnerHTML={{ __html: Moreresults.body }}></div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <ul className="tabs machine-tab-menu">
              <li className="tab">
                <a href="#feature" onClick={() => handleTabClick("feature")}>
                  {t("Features")}
                </a>
                {tab && tab === "feature" && (
                  <li className="indicator" style={{ left: 0, right: 920 }} />
                )}
              </li>
              <li className="tab">
                <a
                  href="#materials"
                  onClick={() => handleTabClick("materials")}
                >
                  {t("Materials")}
                </a>
                {tab && tab === "materials" && (
                  <li className="indicator" style={{ left: 100, right: 820 }} />
                )}
              </li>
              <li className="tab">
                <a
                  href="#safety_procedure"
                  onClick={() => handleTabClick("safety_procedure")}
                >
                  {t("Safety procedure")}
                </a>
                {tab && tab === "safety_procedure" && (
                  <li className="indicator" style={{ left: 205, right: 600 }} />
                )}
              </li>
            </ul>
          </div>

          <div
            id="feature"
            className="col s12 machine-tab-content"
            dangerouslySetInnerHTML={{ __html: Moreresults.field_machine_features }}
          ></div>
          <div
            id="materials"
            className="col s12 machine-tab-content"
            dangerouslySetInnerHTML={{
              __html: Moreresults.field_machine_materials,
            }}
          ></div>
          <div
            id="safety_procedure"
            className="col s12 machine-tab-content"
            dangerouslySetInnerHTML={{
              __html: Moreresults.field_machine_safety_procedure,
            }}
          ></div>
        </div>
      </div>
    </div>

  );
};

export default Moremachines;
