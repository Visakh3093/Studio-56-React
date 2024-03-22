import React from "react";
import { useTranslation } from "react-i18next";

const Terms = ({ handleClose }) => {
  const { t } = useTranslation();
  return (
    <div className="modal-content">
      <span className="badge modalClose">
        <button
          type="button"
          aria-label="close"
          tabIndex={0}
          className="close"
          onClick={handleClose}
        >
          <i className="material-icons">close</i>
        </button>
      </span>
      <h4>{t("terms")}</h4>
      <div className="description">
        <p>{t("modal-1")}</p>
        <p>{t("modal-2")}</p>
        <p>{t("modal-3")}</p>
      </div>
      <button
        className="modal-close waves-effect waves-green btn blue pull-right"
        onClick={handleClose}
      >
        {t("agree")}
      </button>
    </div>
  );
};

export default Terms;
