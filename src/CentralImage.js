import React from "react";
import "./CentralImage.css";

export default function CentralImage() {
    return( 
    <div className="CentralImage">
      <img
        className="central-image"
        src={require("./01d.png")}
        alt="sun"        
      />
    </div>);
}