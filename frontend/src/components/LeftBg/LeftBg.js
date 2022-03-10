import React from "react";
import { Link } from "react-router-dom";
import "./LeftBg.css";
import bgImage from "../../assets/bg.png";
import InstaIcon from "../../assets/IGVector.png";
import logo from "../../assets/logo.png";

const LeftBg = ({question, action}) => {
  return (
    <div className="left">
      <div className="bg-div">
        <img className="bg" src={bgImage} alt="Bg image" />
      </div>
      <div className="tp">
        <img src={InstaIcon} alt="Instagram Icon" />
        <img src={logo} alt="Logo" />

        <div className="left-texts">
          <p>{question}</p>
          <p>{action}</p>
        </div>
      </div>
    </div>
  );
};

export default LeftBg;
