import React from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    console.log(response.data);
  }
  const apiKey = `7f7b212e480de247710aebbd9f9c68bd`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=${apiKey}&units=metric`;
  axios.get(url).then(handleResponse);

  return (
    <div className="Weather">
      <h1>Brussels</h1>
      <h2>Wed. 03/03/2022</h2>

      <form>
        <i className="fa fa-map-marker location"></i>
        <input type="search" placeholder="Search For City" autoComplete="off" />
        <button>
          <i className="fa fa-search search-icon"></i>
        </button>
      </form>

      <div>
        <img className="central-image" src={require("./01d.png")} alt="sun" />
      </div>

      <div>
        <div className="row">
          <div className="col-6 temperature">
            <span>20</span>
            <span className="units"> °C </span>
          </div>

          <div className="col description">
            <ul>
              <li>
                <span>Sunny</span>
              </li>
              <li>
                Humidity: <span>20%</span>
              </li>
              <li>
                Wind: <span>5 km/h</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
