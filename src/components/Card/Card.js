import WeatherIcon from "../FirstSec/WeatherIcon";
import "./card.css";

export default function Card(props) {
  return (
    <div className="col-6 col-md-4 col-lg-2">
      <ul>
        <li>
          <h3>{props.day}</h3>
        </li>
        <div className="card text-center mt-4">
          <div className="card-body">
            <li className="style-li mb-3 ms-3 me-2">
              <i className="fa-beat-fade">
                <WeatherIcon animateIcon={props.icon} size={37} />
              </i>
            </li>
            <li className="temp-li">
              {props.maxTemp}°<span> {props.minTemp}°</span>
            </li>
          </div>
        </div>
      </ul>
    </div>
  );
}
