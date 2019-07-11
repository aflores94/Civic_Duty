//jshint esversion:8
import React from "react";
import Enter from "../../Components/Enter/Enter";
import "./LandingPage.css";
import image from "./America_Map.JPG";

const LandingPage = props => (
  <div className="landing-page">
    <h1>Civic Duty</h1>
    <div>
      <img className='logo' src={image} alt='USA Map'/>
    </div>
    <Enter />
  </div>
);

export default LandingPage;
