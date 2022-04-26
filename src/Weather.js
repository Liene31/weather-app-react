import React, { useState } from "react";
import axios from "axios";
import WeatherData from "./WeatherData";
import "./Weather.css";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeather({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weather.ready) {
    return (
      <div className="Weather">
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
        <WeatherData data={weather} />
      </div>
    );
  } else {
    const apiKey = `7f7b212e480de247710aebbd9f9c68bd`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);

    return "Loading...";
  }
}
