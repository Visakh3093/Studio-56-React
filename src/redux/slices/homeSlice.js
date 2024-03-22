import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    bannerData: "",
    videoData: "",
    aboutHomeData: null,
    zonehome: [],
    activityhome: null,
    data: null,
    img: {},
    video: {}

}

const homeSlice = createSlice({
    name: "Home",
    initialState,
    reducers: {
        setBannerData: (state, action) => {
            state.bannerData = action.payload
        },
        setVideoData: (state, action) => {
            state.videoData = action.payload
        },
        setAboutHome: (state, action) => {
            state.aboutHomeData = action.payload
        },
        setZonehome: (state, action) => {
            state.zonehome = action.payload
        },
        setActivityhome: (state, action) => {
            state.activityhome = action.payload
        },
        setData: (state, action) => {
            state.data = action.payload
        },
        setImg: (state, action) => {
            state.img = action.payload
        },
        setVideo: (state, action) => {
            state.video = action.payload
        }
    }
})

export const { setBannerData, setVideoData, setAboutHome, setZonehome, setActivityhome, setData, setImg, setVideo } = homeSlice.actions

export default homeSlice.reducer