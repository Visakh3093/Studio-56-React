import React from "react";
import { useTranslation } from "react-i18next";

const Popup = ({ handle, data }) => {
  console.log("data: ", data);
  const { t } = useTranslation()
  return (
    <div class="ReactModalPortal">
      <div
        className="ReactModal__Overlay ReactModal__Overlay--after-open"
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(255, 255, 255, 0.75)",
        }}
      >
        <div
          id="popupmodal"
          className="ReactModal__Content ReactModal__Content--after-open"
          tabIndex={-1}
          role="dialog"
          aria-label="Modal"
          aria-modal="true"
          style={{
            position: "absolute",
            inset: "50% auto auto 50%",
            border: "1px solid rgb(204, 204, 204)",
            background: "rgb(255, 255, 255)",
            overflow: "auto",
            borderRadius: 4,
            outline: "none",
            padding: 0,
            transform: "translate(-50%, -50%)",
          }}
        >
          <button
            data-dismiss="modal"
            type="button"
            aria-label="modal close"
            className="badge modalClose"
            onClick={handle}
          >
            <i className="material-icons">close</i>
          </button>
          <div className="popupAlert failed ">
            <div className="pulsating-circle">
              <span>
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
              </span>
            </div>
            <h4 aria-label="Title " />
            {data == "close" ? <><h4 aria-label="Title Warning">Warning</h4>
              <div className="popupMessage">
                <p aria-label="Message Activity enrollment closed">
                  Activity enrollment closed
                </p>
              </div>
              <button
                aria-label="Ok Button"
                className="btn blue-border"
                onClick={handle}
              >
                {t("Ok")}
              </button>

            </> : <>  <div className="popupMessage">
              <p aria-label="Message [object Object]">
                <a aria-label="Login" href="/login">
                  <b>{t('login')}</b>
                </a>
                {t("is required for enrollment")}
              </p>
            </div>
              <button
                aria-label="Ok Button"
                className="btn blue-border"
                onClick={handle}
              >
                {t("Ok")}
              </button> </>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
