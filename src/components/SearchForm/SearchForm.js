import { useState } from "react";
import axios from "axios";
import "./search.css";
import FirstSec from "../FirstSec/FirstSec";

function SearchForm() {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState("Addis Ababa");
  function handleResponse(response) {
    setWeather({
      ready: true,
      temp: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      desc: response.data.weather[0].description,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  }
  function search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=616b14cbd38253313b3b8852fa77335d&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleForm(e) {
    e.preventDefault();
    search();
  }

  function handleCity(e) {
    setCity(e.target.value);
  }

  if (weather.ready) {
    return (
      <>
        <form onSubmit={handleForm}>
          <div className="input-group pb-5 py-md-0 px-2 px-md-5">
            <input
              className="form-control mx-2 mx-md-3"
              type="search"
              placeholder="Enter City . . ."
              aria-label="Search"
              autoFocus="on"
              onChange={handleCity}
            />
            <span className="input-group-append">
              <button
                className="btn btn-outline-secondary  bg-white border-start-0 border-bottom-0 border ms-n5"
                type="button"
              >
                <i className="fa fa-search"></i>
              </button>
            </span>
            <button
              className="btn btn-primary my-0 ms-2 ms-md-5  px-2 px-md-4"
              type="submit"
            >
              Search
            </button>
            <button
              className="btn btn-danger my-0 ms-1 ms-md-3  px-1 px-md-2"
              id="current-tmp"
              type="submit"
            >
              Current
            </button>
          </div>
        </form>
        <FirstSec weatherData={weather} />
      </>
    );
  } else {
    search();
    return "Loading...";
  }
}

export default SearchForm;
