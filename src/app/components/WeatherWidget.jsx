"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

function WeatherWidget() {
  const [currentWeather, setCurrentWeather] = useState({});
  const [forecast, setForecast] = useState([]);

  const location = "philadelphia";
  const apiKey = "ba7c3c47dbd2a04c03a657959b803827";

  const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=imperial&appid=${apiKey}`;

  useEffect(() => {
    axios.get(currentUrl).then((res) => {
      setCurrentWeather(res.data);
    });

    axios.get(forecastUrl).then((res) => {
      const dailyForecasts = [];

      res.data.list.forEach((entry) => {
        if (entry.dt_txt.includes("12:00:00")) {
          dailyForecasts.push(entry);
        }
      });

      setForecast(dailyForecasts.slice(0, 5));
    });
  }, []);

  return (
    <div className="WeatherWidget">
      <div className="container">
        <h1 className="city-name">{currentWeather.name}</h1>
        {currentWeather.main && (
          <>
            <h2>{currentWeather.main.temp.toFixed()}°F</h2>
            <p>{currentWeather.weather[0].description}</p>
          </>
        )}
        <h3>5-Day Forecast at Noon</h3>
        <div className="forecast-container">
          {forecast.map((day, index) => (
            <div key={index} className="forecast-day">
              <p>
                {new Date(day.dt_txt).toLocaleDateString("en-US", {
                  weekday: "long",
                })}
              </p>
              <img
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt={day.weather[0].description}
              />
              <p>{day.main.temp.toFixed()}°F</p>
              <p>{day.weather[0].main}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WeatherWidget;

// "use client";

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function App() {
//   const [data, setData] = useState({});
//   // const [location, setLocation] = useState("");

//   const location = "Philadelphia";
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=ba7c3c47dbd2a04c03a657959b803827`;

//   useEffect(() => {
//     axios.get(url).then((response) => {
//       setData(response.data);
//       console.log(response.data);
//     });
//   }, []);

//   // const searchLocation = (event) => {
//   //   if (event.key === "Enter") {
//   //     axios.get(url).then((response) => {
//   //       setData(response.data);
//   //       console.log(response.data);
//   //     });
//   //     setLocation("");
//   //   }
//   // };

//   return (
//     <div className="app">
//       <div className="container">
//         <div className="top">
//           <div className="location">
//             <p>{data?.name}</p>
//           </div>
//           <div className="temp">
//             {data?.main && <h1>{data.main.temp.toFixed()}°F</h1>}
//           </div>
//           <div className="description">
//             {data?.weather && <p>{data.weather[0].main}</p>}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
