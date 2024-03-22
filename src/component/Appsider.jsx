import React, { useEffect, useState } from 'react'
import axiosInstance from '../../Axios';
import { useDispatch, useSelector } from 'react-redux';
import { loaderOff, loaderOn } from '../redux/slices/loaderSlice';
import urls from '../endPoints/urls';
import { setBannerData, setVideoData } from '../redux/slices/homeSlice';



const AppSlider = () => {
  const [{ lang }, { bannerData }, { videoData }] = useSelector(state => [state.language, state.Home, state.Home])
  // const Body = useSelector(state => state.banner.bannerData)
  // const videoData = useSelector(state => state.banner.videoData)

  const dispatch = useDispatch()
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(loaderOn())
        console.log("lang: ", lang)
        const response = await axiosInstance.get(
          urls.bannerEndpoint(lang)
        );
        console.log("Response: ", response)

        const videoPath = response.data[0].video
        const startIndex = videoPath.indexOf('/sites')
        const exactPath = videoPath.substring(startIndex)

        dispatch(setVideoData(exactPath));
        dispatch(setBannerData(response.data[0].body));
        dispatch(loaderOff());

      } catch (error) {
        console.log(error);
        dispatch(loaderOff());
      }
    };

    fetchData();
  }, [lang, dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY || window.pageYOffset || document.documentElement.scrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lang]);

  const isTop = scrollPosition === 0;


  return (
    <div className={`app-slider ${isTop ? '' : 'stickySocial'}`}>
      <div className="video-box">
        <div className="video-btn">
          <button className="btn-toggle play" aria-label="Pause the video">
            Pause
          </button>
        </div>
        <video autoPlay playsInline loop style={{ backgroundImage: 'url("http://51.136.51.121/drupal-app/web/")' }}>
          <source src={`http://51.136.51.121/drupal-app/web${videoData}`} />
        </video>
      </div>
      <div className="banner">

        <div className={lang == "en" ? "desc en" : "desc ar"} dangerouslySetInnerHTML={{ __html: bannerData }} />


      </div>
    </div>

  );
};

export default AppSlider;


