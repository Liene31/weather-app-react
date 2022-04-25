import React from "react";
import "./FormattedDate.css";

export default function FormattedDate(props) {
  function padTo2Digits(num) {
    return String(num).padStart(2, "0");
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let dayOfTheWeek = days[props.date.getDay()];
  let hours = padTo2Digits(props.date.getHours());
  let minutes = padTo2Digits(props.date.getMinutes());

  return (
    <div className="FormattedDate">
      <h2>
        Updated on {dayOfTheWeek} {hours}:{minutes}
      </h2>
    </div>
  );
}
