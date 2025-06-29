"use client";

import Clock from "./Clock";
import Greeting from "./Greeting";
import WeatherWidget from "./WeatherWidget";
import React, { useState } from "react";
import "../globals.css";

function Button() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div>
      <div className="button">
        <button className="button" onClick={toggleVisibility}>
          {isVisible ? "Hide Content" : "Show Content"}
        </button>
      </div>

      {isVisible && (
        <div>
          <Greeting />
          <Clock />
          <WeatherWidget />
        </div>
      )}
    </div>
  );
}

export default Button;
