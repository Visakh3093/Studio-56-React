import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../Axios";
import GalleryMoredetails from "./GalleryMoredetails";
import VideoMoredetails from "./VideoMoredetails";
import ArticleMoredetails from "./ArticleMoredetails";
import NewsComponent from "./NewsComponent";
import { useDispatch, useSelector } from "react-redux";
import { loaderOff, loaderOn } from "../redux/slices/loaderSlice";
import urls from "../endPoints/urls";
import { setData, setImg } from "../redux/slices/mediacenterSlice";

const NewsMoredetails = () => {
  const dispatch = useDispatch();
  const { nid } = useParams();

  // const data = useSelector((state) => state.news.data);
  // const img = useSelector((state) => state.news.img);
  const [{ lang }, { data }, { img }] = useSelector((state) => [state.language, state.mediacenter, state.mediacenter]);

  useEffect(() => {
    dispatch(loaderOn());
    axiosInstance
      .get(urls.mediaDetailsEndpoint(lang, nid))
      .then((res) => {
        console.log("Response: ", res.data[0]);
        dispatch(setData(res.data[0]));
      })
      .catch((err) => {
        console.log("Error: ", err);
        dispatch(loaderOff());
      });

    axiosInstance
    .get(urls.mediaDetailsGallery(lang, nid))
      .then((res) => {
        dispatch(setImg(res.data["media-gallery"]));
        console.log("Image : ", res.data["media-gallery"]);
        dispatch(loaderOff());
      })
      .catch((err) => {
        console.log(err);
        dispatch(loaderOff());
      });
  }, [lang]);

  return (
    <>
      {data && img && (
        <>
          {(() => {
            switch (data.category) {
              case "Gallery":
                return <GalleryMoredetails img={img} {...data} />;
              case "Video":
                return <VideoMoredetails img={img} {...data} />;
              case "Articles":
                return <ArticleMoredetails img={img} {...data} />;
              default:
                return <NewsComponent img={img} {...data} />;
            }
          })()}
        </>
      )}
    </>
  );

};

export default NewsMoredetails;
