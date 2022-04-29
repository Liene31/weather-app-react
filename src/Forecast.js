import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";
import "./Forecast.css";

export default function Forecast(props) {
  const [forecast, setForecast] = useState(null);
  const [load, setLoad] = useState(false);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoad(true);
  }

  useEffect(() => {
    setLoad(false);
  }, [props.coordinates]);

  if (load) {
    return (
      <div className="Forecast">
        <div className="row">
          {forecast.map(function (forecastDaily, index) {
            if (index < 6) {
              return (
                <div className="col-sm-2 daily-forecast" key={index}>
                  <ForecastDay forecastData={forecastDaily} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = `7f7b212e480de247710aebbd9f9c68bd`;
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    console.log(lon);
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);

    return null;
  }
}
