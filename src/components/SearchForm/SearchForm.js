import React from "react";
import axios from 'axios';
import "./search.css";

function SearchForm() {
  // let [city, setCity] = useState(null);
  // let [loaded, setLoaded] = useState(false);
  // let [weather, setWeather] = useState({});
  // function showCity(response) {
  //   setLoaded(true);
  //   setWeather({
  //     celiTemp: Math.round(response.data.main.temp),
  //     humidity: response.data.main.humidity,
  //     desc: response.data.weather[0].description,
  //     wind: response.data.wind.speed,
  //     icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  //   });
  //   // console.log(response.data);
  // }

  // function handleForm(event) {
  //   event.preventDefault();
  //   if (!city) {
  //     return;
  //   } else {
  //     let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=616b14cbd38253313b3b8852fa77335d&units=metric`;
  //     axios.get(url).then(showCity);
  //   }
  // }
  // function updateCity(event) {
  //   setCity(event.target.value);
  // }
  return (
    <form id="searchForm">
      <div className="input-group pb-5 py-md-0 px-2 px-md-5">
        <input
          className="form-control mx-2 mx-md-3"
          type="search"
          placeHolder="Enter City . . ."
          aria-label="Search"
          autoFocus="on"
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
  );
}

export default SearchForm;
