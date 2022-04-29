import React, { useState } from "react";

export default function Temperature(props) {
  return (
    <div>
      <span>{props.celsius}</span>
      <span className="units">°C</span>
    </div>
  );
}
