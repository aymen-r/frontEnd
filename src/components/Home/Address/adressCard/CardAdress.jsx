import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import "./cardAdress.css";

const CardAdress = () => {
  return (
    <div className="box">
      <div className="head">
        <a
          href="https://www.google.com/maps/place/Thagher+Alrafedain+%7C+Tokkma/@25.272742,55.308361,4z/data=!4m5!3m4!1s0x0:0x71eee59a637d807f!8m2!3d25.272742!4d55.3083607?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          <FaLocationArrow />
        </a>
        <h2>Main Office</h2>
      </div>
      <p>
        THAGER AL RAFEDAIN GENERAL TRADING LLC Twin Tower _ Office 1504B (15
        Floor) Baniyas Road,Deira, Dubai, UAE
      </p>
    </div>
  );
};

export default CardAdress;
