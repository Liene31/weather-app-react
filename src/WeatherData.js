import React from "react";

export default function WeatherData(props) {
  return (
    <div>
      <div>
        <img
          className="central-image"
          src={props.data.icon}
          alt={props.data.description}
        />
      </div>

      <div>
        <div className="row">
          <div className="col-6 temperature">
            <span>{props.data.temperature}</span>
            <span className="units"> °C </span>
          </div>

          <div className="col description">
            <ul>
              <li className="weather-description">{props.data.description}</li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
