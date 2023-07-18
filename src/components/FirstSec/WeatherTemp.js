import { useState } from "react";

function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(e) {
    e.preventDefault();
    setUnit("Fahrenheit");
  }

  function showCelsius(e) {
    e.preventDefault();
    setUnit("celsius");
  }

  function convertToFahrenheit() {
    return (props.celsTemp * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="col-4 col-md-3 col-lg-2">
        <h1 id="temp">{Math.round(props.celsTemp)}</h1>
        <span className="units">
          <a href="/" className="active">
            ℃
          </a>{" "}
          |
          <a href="/" onClick={showFahrenheit}>
            {" "}
            ℉
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="col-4 col-md-3 col-lg-2">
        <h1 id="temp">{Math.round(convertToFahrenheit())}</h1>
        <span className="units">
          <a href="/" onClick={showCelsius}>
            ℃
          </a>{" "}
          |
          <a href="/" className="active">
            {" "}
            ℉
          </a>
        </span>
      </div>
    );
  }
}

export default WeatherTemp;
