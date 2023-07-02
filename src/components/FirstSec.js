import React from "react";
import "../firstSec.css";
import cloudy from "../images/cloudy.png";

export default function FirstSec() {
  return (
    <section className="mx-5 ps-2 m-md-5">
      <div className="row">
        <div className="col-8 col-md-9 col-lg-10">
          <h1 id="cityName">Addis Ababa</h1>
          <p id="today">
            Sun 16 : 01 <br />
            April 25, 2023
          </p>
          {/* </span> */}
        </div>
        <div className="col-4 col-md-3 col-lg-2">
          <h1 id="temp">21</h1>
          <span className="units">
            <a href="/" id="celsius-link" className="active">
              ℃
            </a>{" "}
            |
            <a href="/" id="fahrenheit-link">
              ℉
            </a>
          </span>
        </div>
      </div>
      <div className="row ">
        <div className="col-5 col-md-3">
          <div>
            <img id="main-img" src={cloudy} alt="cloudy" width="53" />
          </div>
          <h3 id="weather-description">Cloudy</h3>
        </div>
        <ul className="col col-lg-3">
          <li className="col-li">
            Pressure : <span id="pressure">20</span>
            <span> hPa</span>
          </li>
          <li className="col-li">
            Humidty : <span id="humid">70</span>
            <span>%</span>
          </li>
          <li className="col-li">
            Wind : <span id="wind">10</span> <span>km/h</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
