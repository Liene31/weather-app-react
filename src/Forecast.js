import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  const [day, setDay] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setDay({
      tempMax: Math.round(response.data.daily[0].temp.max),
      tempMin: Math.round(response.data.daily[0].temp.min),
      icon: response.data.daily[0].weather.icon,
      description: response.data.daily[0].weather.description,
    });
  }

  const apiKey = `7f7b212e480de247710aebbd9f9c68bd`;
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  console.log(lon);
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}&units=metric`;
  axios.get(url).then(handleResponse);
  console.log(url);

  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="day">Fri</div>
          <div className="icon">
            <img
              className="central-image"
              src={day.icon}
              alt={day.description}
            />
          </div>
          <div className="current-temperature">
            <span className="max">{day.tempMax}°</span>|{" "}
            <span className="min">{day.tempMin}°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
