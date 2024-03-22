import React from "react";
import { useTranslation } from "react-i18next";

const RegisterPath = () => {
  const {t} = useTranslation()
  return (
    <div className="container">
      <nav className="breadcrumb" id="breadcrumb-wrap" aria-label="breadcrumb">
        <ul>
          <li className="breadcrumb-item">
            <a href="/registration">{t('register')}</a>
          </li>
          <li className="breadcrumb-item">
            <a tabIndex={0} aria-current="page" href="/registration/parent">
              <span>{t('guardian')}</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default RegisterPath;
