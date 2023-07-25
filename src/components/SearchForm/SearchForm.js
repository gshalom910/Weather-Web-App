import { useState } from "react";
import { Oval } from "react-loader-spinner";
import axios from "axios";
import "./search.css";
import FirstSec from "../FirstSec/FirstSec";
import SecondSec from "../SecondSec/SecondSec";

function SearchForm() {
  const [current, setCurrent] = useState(false);
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState("Addis Ababa");
  function handleResponse(response) {
    setWeather({
      ready: true,
      coord: response.data.coord,
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
  function searchCity() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=616b14cbd38253313b3b8852fa77335d&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function currentLocations(position) {
    let currentLat = position.coords.latitude;
    let currentLon = position.coords.longitude;
    // console.log(currentLat);
    // console.log(currentLon);
    let apiKey = "7784a4cd4aa2e0c25ead7bd96d585b8a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${currentLat}&lon=${currentLon}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function search() {
    if (current) {
      navigator.geolocation.getCurrentPosition(currentLocations);
    } else {
      searchCity();
    }
  }

  function handleForm(e) {
    e.preventDefault();
    setCurrent(false);
    search();
  }

  function handleCity(e) {
    if (!e.target.value) {
      setCity("Addis Ababa");
    } else {
      setCity(e.target.value);
    }
  }

  function getCurrent() {
    // e.preventDefault();
    setCurrent(true);
    search();
    // navigator.geolocation.getCurrentPosition(currentLocations);
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
              type="submit"
              onClick={getCurrent}
            >
              Current
            </button>
          </div>
        </form>
        <FirstSec weatherData={weather} />
        <SecondSec coords={weather.coord} />
      </>
    );
  } else {
    searchCity();
    return (
      <div className="d-flex justify-content-center align-items-center">
        <Oval
          height={80}
          width={80}
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
  }
}

export default SearchForm;
