import React from "react";
import img1 from "../assets/images/AGE-GROUPS-VISUALS-01.png";
import img2 from "../assets/images/AGE-GROUPS-VISUALS-02.png";
import img3 from "../assets/images/AGE-GROUPS-VISUALS-03.png";
import img4 from "../assets/images/AGE-GROUPS-VISUALS-04.png";

const Topimages = () => {
  return (
    <div className="top-images ng-scope">
      <div className="container">
        <div className="item ">
          <img src={img1} alt="" />
        </div>
        <div className="item ">
          <img src={img2} alt="" />
        </div>
        <div className="item ">
          <img src={img3} alt="" />
        </div>
        <div className="item ">
          <img src={img4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Topimages;
