import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logoSTUDIO5 from "../assets/images/logoSTUDIO5.svg";
import logoMCIT from "../assets/images/logoMCIT.png";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../redux/slices/languageSlice";
import { useTranslation } from "react-i18next";

const Header = () => {
  const dispatch = useDispatch();
  const { lang } = useSelector((state) => state.language);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const sideNav = document.querySelector(".sidenav");
    M.Sidenav.init(sideNav, {});
  }, [lang]);

  const changeLanguage = (language) => {
    try {
      i18n.changeLanguage(language);
      dispatch(setLanguage(language));
      window.location.pathname = window.location.pathname.slice(0, 1) + language + window.location.pathname.slice(3)
    } catch (error) {
      console.error("Error changing language:", error);
    }
  };

  return (
    <header id="main-header" className="navbar ar">
      <div id="menuPopup" className="modal menuHolder" tabIndex="0">
        <div className="menu-icon-container">
          <span className="grey-square-rotate red-sq one"></span>
          <span className="grey-square-rotate red-sq two"></span>
          <span className="orange-circle one"></span>
          <span className="orange-circle two"></span>
        </div>
        <div className="modalContentInner">
          <div className="modal-content">
            <span className="badge modalClose">
              <a>
                <i className="material-icons">close</i>
              </a>
            </span>
            <h3>Main Menu</h3>
            <div className="row">
              <div className="col">
                <ul>
                  <li>
                    <NavLink to="/" activeClassName="active" exact>
                      {t("home")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/activities" activeClassName="active">
                      {t("activities")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/media-center" activeClassName="active">
                      {t("mediacenter")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact" activeClassName="active">
                      {t("contactus")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/equipment-used" activeClassName="active">
                      {t("equipment")}
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="col">
                <ul className="menuStyle2">
                  <li>
                    <NavLink to="/about" activeClassName="active">
                      {t("aboutus")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/machines" activeClassName="active">
                      {t("machines")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/registration" activeClassName="active">
                      Registration
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="col">
                <ul className="menuStyle2">
                  <li>
                    <a className="" href="#">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a className="" href="#"></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container flex-row"
        style={{ direction: lang !== "en" ? "rtl" : "ltr" }}
      >
        <nav className="navbar top-menu">
          <div className="nav-wrapper">
            <span className="brand-logo">
              {lang !== "en" ? (
                <>
                  <Link
                    to="/"
                    id="headerLogo"
                    className="hideMenuPopover active"
                    aria-current="page"
                  >
                    <h1>
                      <img src={logoSTUDIO5} alt="Studio 5/6, homepage" />
                    </h1>
                  </Link>
                  <Link to="https://www.mcit.gov.qa/en" target="_blank">
                    <img
                      src={logoMCIT}
                      alt="Ministry Of Transport and Communication, homepage"
                    />
                  </Link>
                </>
              ) : (
                <>
                  <Link to="https://www.mcit.gov.qa/en" target="_blank">
                    <img
                      src={logoMCIT}
                      alt="Ministry Of Transport and Communication, homepage"
                    />
                  </Link>
                  <Link
                    to="/"
                    id="headerLogo"
                    className="hideMenuPopover active"
                    aria-current="page"
                  >
                    <h1>
                      <img src={logoSTUDIO5} alt="Studio 5/6, homepage" />
                    </h1>
                  </Link>
                </>
              )}
            </span>
          </div>
        </nav>
        <ul
          id="main-nav"
          className="sidenav sidenav-fixed align-center"
          style={{
            direction: lang !== "en" ? "rtl" : "ltr",
            transform: "translateX(-105%)",
          }}
        >
          <li>
            <NavLink
              to="/"
              activeClassName="active"
              className="sidenav-close"
              aria-current="page"
            >
              {t("home")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              activeClassName="active"
              className="sidenav-close"
            >
              {t("aboutus")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/activities"
              activeClassName="active"
              className="sidenav-close"
            >
              {t("activities")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/media-center"
              activeClassName="active"
              className="sidenav-close"
            >
              {t("mediacenter")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/machines"
              activeClassName="active"
              className="sidenav-close"
            >
              {t("machines")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/equipment-used"
              activeClassName="active"
              className="sidenav-close"
            >
              {t("equipment")}
            </NavLink>
          </li>
          <li className="contactPopover">
            <NavLink
              to="/contact"
              activeClassName="active"
              className="sidenav-close"
            >
              {t("contactus")}
            </NavLink>
          </li>

          <>
            <li className="dropdown">
              <Link
                to="/login"
                activeClassName="active"
                className="sidenav-close get-started"
                style={{ direction: lang !== "en" ? "rtl" : "ltr" }}
              >
                {t("login-button")}
                {
                  lang == "en" ? (<><i className="material-icons en">arrow_forward</i></>) : (<><i className="material-icons ar">arrow_backward</i></>)
                }
              </Link>
            </li>
          </>


          {lang == "en" ? (
            <li className="lang languageFocus">
              <NavLink
                onClick={() => changeLanguage("ar")}
                activeClassName=""
                className="sidenav-close nav-lang active"
                aria-current="page"
                style={{ fontFamily: "politicaextrabold" }}
              >
                ع
              </NavLink>
            </li>
          ) : (
            <li className="lang languageFocus">
              <NavLink
                onClick={() => changeLanguage("en")}
                activeClassName=""
                className="sidenav-close nav-lang active"
                aria-current="page"
                style={{ fontFamily: "politicaextrabold" }}
              >
                En
              </NavLink>
            </li>
          )}
        </ul>
        <a data-target="main-nav" className="sidenav-trigger sasi">
          <i className="material-icons">menu</i>
        </a>
      </div>
    </header>
  );
};

export default Header;
