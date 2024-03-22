import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { RiTwitterXLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";

const Pagetitle = ({ name }) => {
  const location = useLocation();
  const [currentRoute, setCurrentRoute] = useState("");
  const { t } = useTranslation();

  useEffect(() => {
    setCurrentRoute(location.pathname);
  }, [location.pathname]);

  const extractedValue = currentRoute.slice(0, 14);

  return (
    <div className="page-title en">
      <div className="container">
        <div className="head-title">
          {extractedValue && extractedValue !== "/filter-media/" && (
            <div className="share-page en">
              <h2>{t("share-page")}</h2>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/sharer/sharer.php?u=http://51.136.51.121/en/activities&amp;src=sdkpreparse"
                className="fb-xfbml-parse-ignore"
              >
                <span>Facebook</span>
                <i aria-label="Facebook" className="fa fa-facebook">
                  &nbsp;
                </i>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://twitter.com/share?text=Studio 5/6   Home&amp;url=http://51.136.51.121/en/activities"
              >
                <span>Twitter</span>
                <i className="twitter-icon">
                  <RiTwitterXLine />
                </i>
              </a>
            </div>
          )}
          <h2
            id="pageHeading"
            role="heading"
            tabIndex="-1"
            aria-label={`page heading ${name}`}
          >
            {name}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Pagetitle;
