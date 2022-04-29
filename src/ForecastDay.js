import React from "react";

export default function ForecastDay(props) {
  let date = new Date(props.forecastData.dt * 1000);
  let daysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = daysShort[date.getDay()];
  return (
    <div>
      <div className="day">{day}</div>
      <div className="icon">
        <img
          className="forecast-image"
          src={`http://openweathermap.org/img/wn/${props.forecastData.weather[0].icon}@2x.png`}
          alt={props.forecastData.weather[0].description}
        />
      </div>
      <div className="current-temperature">
        <span className="max">{Math.round(props.forecastData.temp.max)}°</span>|{" "}
        <span className="min">{Math.round(props.forecastData.temp.min)}°</span>
      </div>
    </div>
  );
}
