import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/css/font-awesome.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/materialize.min.css";
import "./assets/css/slick.css";
import "./assets/css/style.css";
import './assets/css/Modal.css'

import { Provider } from "react-redux";
import store from "./redux/store.js";
import i18n from './i18n.js';
import { I18nextProvider } from "react-i18next";

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <I18nextProvider i18n={i18n} >
      <Provider store={store}>
        <App />
      </Provider>
    </I18nextProvider>
 

);


