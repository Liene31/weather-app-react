import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function changeToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function changeToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div>
        <span>{props.celsius}</span>
        <span className="units">
          {" "}
          °C |{" "}
          <a href="/" onClick={changeToFahrenheit}>
            °F
          </a>{" "}
        </span>
      </div>
    );
  } else {
    let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);
    return (
      <div>
        <span>{fahrenheit}</span>
        <span className="units">
          {" "}
          <a href="/" onClick={changeToCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
