import "./firstSec.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

export default function FirstSec(props) {
  const { temp, date, city, humidity, pressure, desc, wind, icon } =
    props.weatherData;
  return (
    <section className="mx-5 ps-2 m-md-5">
      <div className="row">
        <div className="col-8 col-md-9 col-lg-10">
          <h1>{city}</h1>
          <FormattedDate date={date} />
        </div>
        <WeatherTemp celsTemp={temp} />
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
