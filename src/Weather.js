import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weather, setWeather] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setWeather({
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <h1>{weather.city}</h1>
        <h2>
          <FormattedDate date={weather.date} />
        </h2>

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
            src={weather.icon}
            alt={weather.description}
          />
        </div>

        <div>
          <div className="row">
            <div className="col-6 temperature">
              <span>{weather.temperature}</span>
              <span className="units"> °C </span>
            </div>

            <div className="col description">
              <ul>
                <li className="weather-description">{weather.description}</li>
                <li>Humidity: {weather.humidity}%</li>
                <li>Wind: {weather.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `7f7b212e480de247710aebbd9f9c68bd`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);

    return "Loading...";
  }
}
