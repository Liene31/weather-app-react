import React from "react";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data.daily);
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
              src={props.data.icon}
              alt={props.data.description}
            />
          </div>
          <div className="current-temperature">
            <span className="max">18°</span>| <span className="min">5°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
