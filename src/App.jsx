import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./component/Header";
import About from "./pages/About";
import Activities from "./pages/Activities";
import Mediacenter from "./pages/Mediacenter";
import Machines from "./pages/Machines";
import Equipment from "./pages/Equipment";
import Contactus from "./pages/Contactus";
import Moremachines from "./pages/Moremachines";
import ActivityDetails from "./component/ActivityDetails";
import NewsMoredetails from "./component/NewsMoredetails";
import Footer from "./component/Footer";
import PageNotFound from "./component/PageNotFound";
import Login from "./pages/Login";
import ForgotPassword from "./component/ForgotPassword";
import ContactSuccess from "./component/ContactSuccess";
import Subscribe from "./component/Subscribe";
import Register from "./pages/Register";
import VolunteerRegister from "./component/VolunteerRegister";
import StudentRegister from "./component/StudentRegister";
import SchoolRegister from "./component/SchoolRegister";
import Guardian from "./component/Guardian";
import Loader from "./component/Loader";
import { useSelector } from "react-redux";
import MediaFilter from "./component/MediaFilter";

function App() {

  const [{ isLoader }, { lang }] = useSelector((state) => [state.loader, state.language]);
  let currentLang = localStorage.getItem('selectedLanguage') || 'en'

  useEffect(() => {
    console.log(window.location.pathname);
    const storedLang = currentLang !== "en" ? 'ar' : 'en';
    if (window.location.pathname == '' || location.pathname == '/') {
      window.location.pathname = window.location.pathname.slice(0, 1) + storedLang + window.location.pathname.slice(1)
    }
    console.log("Splited Path: ", window.location.pathname.split('/en')[1]);
    if (window.location.pathname.split('/')[1] !== 'en' && window.location.pathname.split('/')[1] !== 'ar') {
      window.location.pathname = '/' + storedLang + window.location.pathname.slice(1);
    }

    // if (window.location.pathname.split('/')[1] == "en") {
    //   localStorage.setItem('selectedLanguage', 'en');
    //   // window.location.reload()
    // }
    // else {

    // }

  }, [currentLang]);


  return (
    <BrowserRouter basename={`/${lang}`}>
      <Header />
      <div className={lang !== "en" ? "rtl-container ab" : "ltr-container "}>
        {isLoader && <Loader />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Register />} />
          <Route path="/registration/volunteer" element={<VolunteerRegister />} />
          <Route path="/registration/student" element={<StudentRegister />} />
          <Route path="/registration/school" element={<SchoolRegister />} />
          <Route path="/registration/parent" element={<Guardian />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/contactsuccess" element={<ContactSuccess />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/forgottpassword" element={<ForgotPassword />} />
          <Route path="/about" element={<About />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/machines" element={<Machines />} />
          <Route path="/equipment-used" element={<Equipment />} />
          <Route path="/machine-detail/:nid" element={<Moremachines />} />
          <Route path="/activity/:nid" element={<ActivityDetails />} />
          <Route path="/media-center" element={<Mediacenter />} />
          <Route path="/filter-media/:id" element={<MediaFilter />} />
          <Route path="/news/:nid" element={<NewsMoredetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
