import React from "react";
import "./Weather.css";

export default function Weather() {
    return( 
        <div className="Weather">
            <h1>Brussels</h1>
            <h2>Wed. 03/03/2022</h2>
            
            <form>
                <i className="fa fa-map-marker location"></i>
                <input
                type="search"                
                placeholder="Search For City"
                autoComplete="off"
                />
                <button>
                <i className="fa fa-search search-icon"></i>
                </button>
            </form>

        <div>
            <img
                className="central-image"
                src={require("./01d.png")}
                alt="sun"        
            />
        </div>

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
    </div>
        </div>
        
    );
}