import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherData from "./WeatherData";
import "./Weather.css";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
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

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function getCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = `7f7b212e480de247710aebbd9f9c68bd`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <h1>{weather.city}</h1>
        <h2>
          <FormattedDate date={weather.date} />
        </h2>

        <form onSubmit={handleSubmit}>
          <i className="fa fa-map-marker location"></i>
          <input
            type="search"
            placeholder="Search For City"
            autoComplete="off"
            onChange={getCity}
          />
          <button>
            <i className="fa fa-search search-icon"></i>
          </button>
        </form>
        <WeatherData data={weather} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
