
import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./slices/loaderSlice";
import languageReducer from "./slices/languageSlice";
import popupReducer from "./slices/popupSlice"
import aboutReducer from "./slices/aboutSlice"
import activitiesReducer from "./slices/activitiesSlice"
import MachineReducer from "./slices/machineSlice";
import equipmentReducer from "./slices/EquipmentSlice";
import mediacenterReducer from "./slices/mediacenterSlice";
import privacyReducer from "./slices/privacySlice";
import homeReducer from "./slices/homeSlice";

const rootReducer = {
  loader: loaderReducer,
  language: languageReducer, 
  popup: popupReducer,
  privacy: privacyReducer,


  Home: homeReducer,
  // banner: bannerReducer,
  // aboutHome: aboutHomeReducer,
  // zoneHome: zoneHomeReducer,
  // activityHome: activityHomeReducer,
  // newshome: newshomeReducer,

  about: aboutReducer,

  activities: activitiesReducer,
  // moreActivity: activityReducer,

  machines: MachineReducer,
  // moreMachine: moreMachineReducer,

  equipment: equipmentReducer,

  mediacenter: mediacenterReducer,
  // news: newsReducer,

}

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
