import React, { useEffect, useState } from "react";
import axiosInstance from "../../Axios";
import Lowerimg from "../component/Lowerimg";
import Pagetitle from "../component/Pagetitle";
import { useDispatch, useSelector } from "react-redux";
import { loaderOff, loaderOn } from "../redux/slices/loaderSlice";
import { setBody } from "../redux/slices/aboutSlice";
import { useTranslation } from "react-i18next";
import urls from "../endPoints/urls";

const About = () => {
  const dispatch = useDispatch();
  const [{lang}, {body}] = useSelector((state) => [state.language, state.about]);
  const { t } = useTranslation();

  useEffect(() => {

    dispatch(loaderOn());
    axiosInstance
      .get(urls.aboutEndpoint(lang))
      .then((res) => {
        dispatch(setBody(res.data[0].body));
        dispatch(loaderOff());
      })
      .catch((err) => {
        console.log("Error: ", err);
        dispatch(loaderOff());
      });
  }, [lang]);

  return (
    <div id="main-container">
      <Pagetitle name={t("aboutus")} />

      <div
        style={{ minHeight: "100vh" }}
        dangerouslySetInnerHTML={{ __html: body }}
      ></div>

      <Lowerimg />
    </div>
  );
};

export default About;
