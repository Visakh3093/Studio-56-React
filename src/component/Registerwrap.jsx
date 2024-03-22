import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Registerwrap = () => {
  const { t } = useTranslation();
  return (
    <div id="register-wrap" className="ng-scope en">
      <div className="container home-subscribe en">
        <span className="multi-square-orange">
          <b>
            <i></i>
          </b>
        </span>
        <div>
          <img
            src="./src/assets/images/mail.svg"
            className="mail-icon"
            alt=""
          />
        </div>
        <p>{t("subscribe-data")}</p>
        <p>
          <Link
            className="red-btn btn btn-signup"
            to="/subscribe"
            aria-label="subscribe button for newsletter"
          >
            {t("subscribe-btn")} <i className="material-icons en"></i>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registerwrap;
