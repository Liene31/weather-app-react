import React from "react";
import "./Forecast.css";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="day">Fri</div>
          <div className="icon">
            <img
              className="central-image"
              src={props.data.icon}
              alt={props.data.description}
            />
          </div>
          <div className="current-temperature">
            <span className="max">18°</span>| <span className="min">5°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
