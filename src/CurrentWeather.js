import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather() {
    return( 
    <div className="CurrentWeather">
      <div className="row">
        <div className="col-6 current-temperature temperature">
            <span>20</span>
            <span className="units"> °C </span>
        </div>
        <div className="col description">
            <ul>
                <li>
                    <span>
                        Sunny
                    </span>
                </li>
                <li>
                    Humidity: <span></span>20%
                </li>
                <li>
                    Wind: <span></span> 5 km/h
                </li>
            </ul>
        </div>
      </div>
    </div>);
}