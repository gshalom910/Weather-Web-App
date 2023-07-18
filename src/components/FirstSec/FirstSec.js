import "./firstSec.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function FirstSec(props) {
  const { celiTemp, date, city, humidity, pressure, desc, wind, icon } =
    props.weatherData;
  return (
    <section className="mx-5 ps-2 m-md-5">
      <div className="row">
        <div className="col-8 col-md-9 col-lg-10">
          <h1>{city}</h1>
          <FormattedDate date={date} />
        </div>
        <div className="col-4 col-md-3 col-lg-2">
          <h1 id="temp">{Math.round(celiTemp)}</h1>
          <span className="units">
            <a href="/" className="active">
              ℃
            </a>{" "}
            |<a href="/"> ℉</a>
          </span>
        </div>
      </div>
      <div className="row ">
        <div className="col-5 col-md-3">
          <div>
            <WeatherIcon animateIcon={icon} />
          </div>
          <h3 id="weather-description">{desc}</h3>
        </div>
        <ul className="col col-lg-3">
          <li className="col-li">
            Pressure : <span>{pressure}</span>
            <span> hPa</span>
          </li>
          <li className="col-li">
            Humidty : <span>{humidity}</span>
            <span> %</span>
          </li>
          <li className="col-li">
            Wind : <span>{Math.round(wind * 3.6)}</span> <span>km/h</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
