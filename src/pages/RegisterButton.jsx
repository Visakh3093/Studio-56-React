import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import { useTranslation } from "react-i18next";

const RegisterButton = () => {
  const [currentRoute, setCurrentRoute] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    setCurrentRoute(location.pathname);
  }, [location.pathname]);

  return (
    <div className="btn-wrap type-selection" id="skipContent">
      <button
        aria-label="Are you Guardian"
        role="button"
        className={
          currentRoute == `/registration/parent` ? `btn active` : `btn`
        }
        onClick={() => navigate("/registration/parent")}
      >
        {t("guardian")}
      </button>
      <button
        aria-label="Are you Student"
        className={
          currentRoute == `/registration/student` ? `btn active` : `btn`
        }
        onClick={() => navigate("/registration/student")}
      >
        {t("student")}
      </button>
      <button
        aria-label="Are you School"
        className={
          currentRoute == `/registration/school` ? `btn active` : `btn`
        }
        onClick={() => navigate("/registration/school")}
      >
        {t("school")}
      </button>
      <button
        aria-label="Are you Volunteer"
        className={
          currentRoute == `/registration/volunteer` ? `btn active` : `btn`
        }
        onClick={() => navigate("/registration/volunteer")}
      >
        {t("volunteer")}
      </button>
    </div>
  );
};

export default RegisterButton;
