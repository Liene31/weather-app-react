import React from "react";
import Temperature from "./Temperature";
import "./WeatherData.css"

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
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
            <Temperature celsius={props.data.temperature}/>
            
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
