import React from "react";
import Appsider from "./Appsider";
import Makehome from "./Makehome";
import Aboutstudio from "./Aboutstudio";
import Topimages from "./Topimages";
import Zonewrap from "./Zonewrap";
import Activityhome from "./Activityhome";
import Newswrap from "./Newswrap";
import Registerwrap from "./Registerwrap";

const Maincontent = () => {
  return (
    <div id="main-content">
      <Appsider />
      <Makehome />
      <Aboutstudio />
      <Topimages />
      <Zonewrap />
      <Activityhome />
      <Newswrap />
      <Registerwrap />
    </div>
  );
};

export default Maincontent;
