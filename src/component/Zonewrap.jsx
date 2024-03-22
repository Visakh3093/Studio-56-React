import React, { useEffect, useState } from "react";
import axiosInstance from "../../Axios";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import urls from "../endPoints/urls";
import { setZonehome } from "../redux/slices/homeSlice";

const ZoneWrap = () => {
  const [{ lang }, { zonehome }] = useSelector((state) => [state.language, state.Home]);
  // const zonehome = useSelector((state) => state.zoneHome.zonehome);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    axiosInstance
      .get(urls.zoneWrapEndpoint(lang))
      .then((res) => {
        dispatch(setZonehome(res.data));
      })
      .catch((err) => {
        console.log("ZoneError: ", err);
      });
  }, [lang]);

  return (
    <div className="zone-wrap">
      <div className="container">
        <div className="zone-text en">
          <h3>{t("home-zone-heading")}</h3>
          <div>{t("home-zone-desc")}</div>
        </div>
        <div className="service-zone en">
          <div className="flex-row same-height col-4 ng-scope">
            {zonehome.map((item, index) => (
              <div key={index} className="item">
                <div
                  className="icon"
                  style={{
                    background: `url(http://51.136.51.121/drupal-app/web/${item.zoneimage}) no-repeat`,
                  }}
                ></div>

                <h3>{item.zonenames}</h3>
                <div
                  dangerouslySetInnerHTML={{ __html: item.zonesdescription }}
                  style={{ minHeight: "400px" }}
                  className="desc"
                ></div>
              </div>
            ))}
          </div>
          <span className="grey-square"></span>
        </div>
      </div>
    </div>
  );
};

export default ZoneWrap;
